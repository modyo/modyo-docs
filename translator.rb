#!/usr/bin/env ruby
#
# Use AWS Translator to keep all the English definitions up to date.

#require 'redcarpet'
require 'fileutils'


locales = ['en']


#markdown = File.read('markup.md')

source_files = Dir.glob("docs/guides/**/*.md").map {|file| file.gsub("docs/","")}

locales.each do |locale|
    
    source_files.each do |source_file|
        if File.exist?("docs/#{locale}/#{source_file}")
            puts "#{source_file} Exists!"
        else
            puts "#{source_file} Not found :("
            puts "Creating #{source_file}"
            puts "Copying #{source_file}"
            FileUtils.cp("docs/#{source_file}", "docs/#{locale}/#{source_file}")
        end
    end
    
    files = Dir.glob("docs/#{locale}/guides/**/*.md").map {|file| file.gsub("docs/#{locale}/","")}

    puts "Checking for orphan files ..."

    orphan_files = files - source_files

    puts "No orphan files found!" if orphan_files.size == 0
    orphan_files.each do |orphan_file|

        puts "Orphan file found! #{orphan_file}"
        puts "Deleting orphan file #{orphan_file}"
        File.delete("docs/#{locale}/#{orphan_file}") if File.exist?("docs/#{locale}/#{orphan_file}")

    end

    
    files.each do |file|

        #puts file
        #puts "---"
    end
end


#Redcarpet::Markdown.new(Redcarpet::Render::HTML.new).render(markdown)