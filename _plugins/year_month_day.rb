module Jekyll
  module YearMonthDayFilter
    def yyyymmdd(input)
      return "" if input.nil?
      parts = input.split('/').map{|p| p.size > 1 ? p : "0#{p}"}
      parts[2] + '-' + parts[0] + '-' + parts[1]
    end
  end
end

Liquid::Template.register_filter(Jekyll::YearMonthDayFilter)
