require 'bigdecimal'

module Jekyll
  module MathExtensionsFilters
    def round(input, n = 0)
      result = Utils.to_number(input).round(Utils.to_number(n))
      result = result.to_f if result.is_a?(BigDecimal)
      result = result.to_i if n == 0
      result
    rescue ::FloatDomainError => e
      raise Liquid::FloatDomainError, e.message
    end
  end
end

