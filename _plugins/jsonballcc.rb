require 'json'
require 'openssl'
require 'uri'
require 'net/http'

# JSON parser tag, creating map for use in jekyll markdown
# Alex.Heneveld @ Cloudsoft Corp (remove spaces and add the .com)
# Released under APL 2.0

# usage:    {% jsonball varname from TYPE PARAM %}
#
# where TYPE is one of {data,var,file,page}, described below

# drop this into your _plugins/ folder, then you can write, e.g.
#
#     {% jsonball foo from data { "a": "b" } %}
#
# and then later refer to {{ foo.a }} to get b inserted

# more usefully, you can load it from a variable x, e.g.
#     {% capture x %}{% include toc.json %}{% endcapture %}
#
#     {% jsonball foo from var x %}

# even better, to read from a file, say toc.json
# (absolute, or relative to the page being jekylled):
#
#     {% jsonball foo from file toc.json %}
#
# then e.g. {% for record in jsonball %} {{ record.name }} {% endfor %}
# to print out all the name entries (or build a fancy TOC sidebar)

# and finally, if that json file might itself contain liquid tags,
# or need jekylling, treat it as a page and it will get jekylled
# (we use this for toc.json reading from subdirs' toc.json files):
#
#     {% jsonball foo from page toc.json %}

module JekyllJsonball
    class JsonballTag < Liquid::Tag

      def initialize(tag_name, text, tokens)
          super
          @text = text
      end

      def render(context)
          if /(.+) from var (.+)/.match(@text)
            context[$1] = JSON context[$2]
            return ''
          end
          if /(.+) from data (.+)/.match(@text)
            context[$1] = JSON $2
            return ''
          end
          if /(.+) from file (.+)/.match(@text)
            context[$1] = JSON page_relative_file_contents(context, $2.strip)
            return ''
          end
          if /(.+) from page (.+)/.match(@text)
            context[$1] = JSON jekylled_page_relative_file_contents(context, $2.strip)
            return ''
          end
          if /(.+) from cachedurl (.+)/.match(@text)
            base_url = context[$2]
            data = try_url_cache(context, base_url)
            begin
              context[$1] = JSON.parse(data)
            rescue
              warn "Could not parse JSON result.".yellow
              context[$1] = []
            end
            return ''
          end

          if /(.+) from url (.+)/.match(@text)
            base_url = context[$2]
            puts "Fetching remote JSON " + base_url + "..."
            data = fetch(base_url).body
            begin
              context[$1] = JSON.parse(data)
            rescue
              warn "Could not parse JSON result.".yellow
              context[$1] = []
            end

            return ''
          end
          # syntax error
          return 'ERROR:bad_jsonball_syntax'
      end

      def try_url_cache(context, base_url)
          jekyllSite = context.registers[:site]
          dir = jekyllSite.source+'/_data/json-remote-cache'
          filename = sanitize_filename(base_url)
          if !filename.match(/\/.*/)
            filename = dir + '/' + filename
          end
          if(File.exist?(filename))
              # puts ['Loading JSON from cache:',filename]
              file = File.open(filename, "rb")
              return file.read
          else
              puts "Fetching remote JSON " + base_url + "..."
              Dir.mkdir(dir) unless File.exists?(dir)
              data = fetch(base_url).body
              begin
                temp = JSON.parse(data)
                file = File.open(filename, "w")
                file.write(data)
              rescue
                warn "Could not parse JSON result. Not writing to cache".yellow
              end
              return data
          end
      end

      def page_relative_file_contents(context, filename)
          jekyllSite = context.registers[:site]
          dir = jekyllSite.source+'/'+File.dirname(context['page']['url'])
          if !filename.match(/\/.*/)
            filename = dir + '/' + filename
          end
          file = File.open(filename, "rb")
          return file.read
      end

      def jekylled_page_relative_file_contents(context, filename)
          jekyllSite = context.registers[:site]
          targetPage = Jekyll::Page.new(jekyllSite, jekyllSite.source, File.dirname(context['page']['url']), filename)
          targetPage.render(jekyllSite.layouts, jekyllSite.site_payload)
          targetPage.output
      end

      def sanitize_filename(filename)
          filename.gsub(/[^0-9A-z.\-]/, '_')
      end

      def fetch(uri_str, limit = 10)
          raise ArgumentError, 'HTTP redirect too deep' if limit == 0
          url = URI.parse(uri_str)

          http = Net::HTTP.new(url.host, url.port)
          path = url.path
          path = '/' if path == ''
          path += '?' + url.query unless url.query.nil?

          params = { 'Accept' => '*/*' }
          request = Net::HTTP::Get.new(path, params)

          if url.instance_of?(URI::HTTPS)
            http.use_ssl = true
            http.verify_mode = OpenSSL::SSL::VERIFY_NONE
          end
          response = http.request(request)

          case response
              when Net::HTTPSuccess
                  then response
              when Net::HTTPRedirection then fetch(response['location'], limit - 1)
          else
              response.error!
          end
      end

    end
end

Liquid::Template.register_tag('jsonball', JekyllJsonball::JsonballTag)
