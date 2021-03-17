module Jekyll
  module UsdPrettyFilter
    def usd_pretty(input)
      return "" if input.nil?
      "$#{input.gsub(/\s/, '').gsub(/\D/, '').gsub(/\B(?=(\d{3})+(?!\d))/, ',')}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::UsdPrettyFilter)
