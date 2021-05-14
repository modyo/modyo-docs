#!/usr/bin/env ruby
#
# Use Google Translator to keep all the English definitions up to date.
# Requires Ruby > 2.3
#
# Install instructions:
# - gem install google-cloud-translate
#

require 'fileutils'
require "google/cloud/translate"

ENV["TRANSLATE_PROJECT"] = "modyo-cloud"
ENV["TRANSLATE_CREDENTIALS"] = "google_cloud_credentials.json"

unless File.file? ENV["TRANSLATE_CREDENTIALS"]
    raise LoadError, 'No Google Cloud Translate credentials file found, please include it as google_cloud_credentials.json'
end

doc_modules = ['platform','widgets','legal','coding','brand']
master_locale = ['es']
locales = ['es']


source_files = Dir.glob("docs/platform/**/*.md").map {|file| file.gsub("docs/","")}




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
    client = Google::Cloud::Translate.new
    parent = client.class.location_path ENV["TRANSLATE_PROJECT"], "global"
    files.each do |file|
        unless File.readlines("docs/#{locale}/#{file}", encoding: 'utf-8').grep(/translated: true/).any?
            puts "#{file} requires auto translation!"
            input_file = File.read("docs/#{file}", encoding: 'utf-8')

            ## directly from Google Cloud Translate
            response = client.translate_text input_file.split(/\n(?=[^\n])/), locale, parent, source_language_code: "es", mime_type:"text/plain"
            output = response.translations.reduce('') { |acc, t| acc.concat(t.translated_text).concat("\n") }.chomp

            ## Writing to translated file
            file = File.open("docs/#{locale}/#{file}", "w")

            #GCloudTranslate Patches  [issue ref: https://issuetracker.google.com/issues/119256504]
            # Markdown bold
            output.scan(/\*\*[^\*]+\*\*/).each { |bold| output.gsub!(bold, bold.gsub(/ *\*\* */,'**')) }
            # Links
            output.gsub!(/(?<=[\!]) (?=[\[])|(?<=[\]]) (?=[\(])|(?<=[\/]) (?=.)| (?=[\/])/,'')
            # code snippets wrongly translated (tips, ``)
            output.gsub!('::: type Type', '::: tip Tip')
            output.gsub!(/(?<=^|[^`])``(?=[^`]|$)/, '```')
            # html attrs
            output.gsub!(/(?<=src|width|style|) = /, '=')
            
            file.puts output
            file.close
            sleep 15
        end
    end
end
