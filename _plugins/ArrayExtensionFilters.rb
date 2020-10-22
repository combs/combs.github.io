module Jekyll
  module ArrayExtensionsFilters
    # Sort elements of an array ignoring case if strings
    # provide optional property with which to sort an array of hashes or drops
    def sort_natural(input, property = nil)
      ary = InputIterator.new(input)

      if property.nil?
        ary.sort { |a, b| a.casecmp(b) }
      elsif ary.empty? # The next two cases assume a non-empty array.
        []
      elsif ary.first.respond_to?(:[]) && !ary.first[property].nil?
        ary.sort { |a, b| a[property].casecmp(b[property]) }
      elsif ary.first.respond_to?(property)
        ary.sort { |a, b| a.send(property).casecmp(b.send(property)) }
      end
    end

    # Remove duplicate elements from an array
    # provide optional property with which to determine uniqueness
    def uniq(input, property = nil)
      ary = InputIterator.new(input)

      if property.nil?
        ary.uniq
      elsif ary.empty? # The next two cases assume a non-empty array.
        []
      elsif ary.first.respond_to?(:[])
        ary.uniq{ |a| a[property] }
      end
    end

    # Reverse the elements of an array
    def reverse(input)
      ary = InputIterator.new(input)
      ary.reverse
    end
  end
end

