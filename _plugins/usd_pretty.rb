module Jekyll
  module UsdPrettyFilter
    def usd_pretty(input)
      val = input.to_s
      return "" if val.strip.empty?
      "$#{val.gsub(/\s/, '').gsub(/\D/, '').gsub(/\B(?=(\d{3})+(?!\d))/, ',')}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::UsdPrettyFilter)
