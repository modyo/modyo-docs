#!/usr/bin/env ruby
#
# Use AWS Translator to keep all the English definitions up to date.
# Requires Ruby > 2.3 
#
# Install instructions:
# - gem install google-cloud-translate
# - gem install redcarpet
#
# TODO:
# - Setup the Google Key for translation
# - Save the translated files
#

require 'redcarpet'
require 'fileutils'
require "google/cloud/translate"

locales = ['en']

Google::Cloud::Translate.configure do |config|
    config.project_id  = ""
    config.credentials = ""
end

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

    puts "Reviewing translation status ..."
    files.each do |file|
        unless File.open("docs/#{locale}/#{file}") =~ /translated: true/
            puts "#{file} requires auto translation!"

            text = Redcarpet::Markdown.new(Redcarpet::Render::HTML.new).render(File.open("docs/#{locale}/#{file}", "r").read)

            puts text
            #translate = Google::Cloud::Translate.new
            #translation = translate.translate File.open("docs/#{locale}/#{file}"), to: "en"
            
            #puts translation
        end
    end
end
