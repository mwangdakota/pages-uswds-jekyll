require 'json'
require 'fileutils'

module SiteData
  class AwardsHistorySupportData
    def initialize(site)
      @basepath = Dir.pwd
    end

    def generate
      count = 0
      words = {}
      data = File.read(File.join(@basepath, 'data', 'awards-history.json'))
      awards = JSON.parse(data)

      # Keys whose values will be used to build autocomplete index
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
      puts "   - #{count} autocomplete search token(s) generated."

      # Create awards history years
      File.open(File.join(@basepath, '_data', "awards_history_years.yml"), 'w') do |file|
        years = awards.map{|d| d['AwardDate'].split('-').first}.uniq.sort.reverse
        file.puts("---")
        years.each do |year|
          file.puts("  - #{year}")
        end
        puts "   - Years: #{years.first} - #{years.last}."
      end

      # Create awards history state codes
      File.open(File.join(@basepath, '_data', "awards_history_state_codes.yml"), 'w') do |file|
        state_codes = awards.map{|d| d['StateCode']}.uniq.sort
        file.puts("---")
        state_codes.each do |state_code|
          file.puts("  - #{state_code}")
        end
        puts "   - #{state_codes.size} state codes generated."
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
