#!/usr/bin/env ruby
#
# Use Google Translator to keep all the English definitions up to date.
# Requires Ruby > 2.3
#
# Install instructions:
# - gem install google-cloud-translate
# - gem install kramdown
#

# require 'kramdown'
require 'fileutils'
require "google/cloud/translate"

ENV["TRANSLATE_PROJECT"] = "modyo-cloud"
ENV["TRANSLATE_CREDENTIALS"] = "google_cloud_credentials.json"

unless File.file? ENV["TRANSLATE_CREDENTIALS"]
    raise LoadError, 'No Google Cloud Translate credentials file found, please include it as google_cloud_credentials.json'
end

locales = ['en']

source_files = Dir.glob("docs/guides/**/*.md").map {|file| file.gsub("docs/","")}

locales.each do |locale|
    source_files.each do |source_file|
        unless File.exist?("docs/#{locale}/#{source_file}")
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
    translate = Google::Cloud::Translate.new version: :v2
    files.each do |file|
        unless File.readlines("docs/#{locale}/#{file}", encoding: 'utf-8').grep(/translated: true/).any?
            puts "#{file} requires auto translation!"
            input_file = File.read("docs/#{locale}/#{file}", encoding: 'utf-8')

            ## directly from Google Cloud Translate
            translated = translate.translate input_file, to: "en", format: 'text'
            output = translated.text
            #TODO: El issue con caracteres especiales: https://issuetracker.google.com/issues/119256504

            ## Parsing with Kramdown
            # input = Kramdown::Document.new(input_file).to_html
            # translated = translate.translate input, to: "en", format: "html"
            # output = Kramdown::Document.new(translated.text, input: 'html').to_kramdown

            ## Writing to translated file
            file = File.open("docs/#{locale}/#{file}", "w")
            file.puts output
            file.close
        end
    end
end
