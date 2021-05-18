module Jekyll
  module DateFilters
    def mmddyyyy(input)
      # converts dates from YYYY-MM-DD to MM/DD/YYYY (leading 0s)
      return "" if input.nil?
      parts = input.split('-').map{|p| p.size > 1 ? p : "0#{p}"}
      parts[1] + '/' + parts[2] + '/' + parts[0]
    end

    def mdyyyy(input)
      # converts dates from YYYY-MM-DD to M/D/YYYY (no leading 0s)
      return "" if input.nil?
      parts = input.split('-').map{|p| p.to_i.to_s}
      parts[1] + '/' + parts[2] + '/' + parts[0]
    end

    def end_date(input)
      # returns date appended with " (Estimated)" if date > today
      return "" if input.nil?
      now = Date.today

      # assumes date is MM/DD/YYYY or YYYY-MM-DD
      if input.include?('/')
        parts = input.split('/')
        date = Date.parse(parts[2] + '-' + parts[0] + '-' + parts[1] + ' 00:00:00')
      else
        parts = input.split('-')
        date = Date.parse(parts[0] + '-' + parts[1] + '-' + parts[2] + ' 00:00:00')
      end

      return input + ' (Estimated)' if date > now

      input
    end
  end
end

Liquid::Template.register_filter(Jekyll::DateFilters)
