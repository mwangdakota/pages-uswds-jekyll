module Jekyll
  module Linebreaks
    def linebreaks(input)
      val = input.to_s
      return "" if val.strip.empty?
      val.gsub(/ +\n/, "\n").gsub(/[\r\t]/, '').gsub(/\n$/, '').gsub(/\n+/, '<br><br>')
    end
  end
end

Liquid::Template.register_filter(Jekyll::Linebreaks)
