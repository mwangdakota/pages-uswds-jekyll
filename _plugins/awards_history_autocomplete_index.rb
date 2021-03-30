require 'yaml'
require 'fileutils'

module SiteData
  class AwardsHistoryAutocompleteIndex
    def initialize(site)
      @basepath = Dir.pwd
    end

    def generate
      count = 0
      words = {}
      awards = YAML.load_file(File.join(@basepath, '_data', 'awards_history.yml'))

      props = %w(
        AwardID
        Title
        Abstract
        AwardDate
        AwardAmount
        InstitutionIdentifer
        InstitutionName
        CityName
        StateCode
      )

      awards.each do |award|
        props.each do |prop|
          tokenize(award[prop]).each do |word|
            if words.key?(word)
              words[word] += 1
            else
              count += 1
              words[word] = 1
            end
          end
        end
      end

      # At this point, the words (search tokens) could be
      # dumped to YML in all sorts of order, but for now we'll
      # go with alphabetical order

      File.open(File.join(@basepath, '_data', "awards_history_ac_index.yml"), 'w') do |file|
        file.puts("---")
        words.keys.sort.uniq.each do |search_term|
          file.puts("  - \"#{search_term}\"")
        end
      end

      if count == 1
        puts "   1 search tokens generated."
      else
        puts "   #{count} search tokens generated."
      end
    end

    private

    def tokenize(value)
      value.to_s.downcase.split(
        /[^A-Za-z0-9\%\-\']/
      ).reject{|e|
        e.empty? or e.size < 2 or !e.match(/\w/)
      }.map{|e|
        e ? e.gsub(/^\-+/, '').gsub(/\-+$/, '').gsub(/^\'/, '').gsub(/\'$/, '') : e
      }
    end
  end
end