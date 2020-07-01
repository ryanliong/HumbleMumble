require 'nokogiri'
require 'httparty'
require 'byebug'
require 'json'
require 'erb'

module Tv_scraper
	def self.scraper (slug)
		splitVal = slug.split("+")
		searchTerm = splitVal[0].strip
		uriEncodedST = ERB::Util.url_encode(searchTerm)
		searchURL = "https://www.rottentomatoes.com/search?search=#{searchTerm}"
		unparsed_searchPage = HTTParty.get(searchURL)
		parsed_searchPage = Nokogiri::HTML(unparsed_searchPage)
		searchResults = Array.new
		
		searchData = JSON.parse(parsed_searchPage.css("script#tvs-json").text)
		firstUrl = searchData['items'][0]['url']
		reviewPage = firstUrl + '/s01/reviews'
		
		unparsed_page = HTTParty.get(reviewPage)
		parsed_page = Nokogiri::HTML(unparsed_page)
		reviews = Array.new
		review_listings = parsed_page.css('div.review_table_row')
		review_listings.each do |review_listing|
			review = {
				name: review_listing.css('a.articleLink').text.strip,
				publication: review_listing.css('a.critic__publication').text.strip,
				date: review_listing.css('div.critic__review-date').text.strip,
				description: review_listing.css('div.critic__review-quote').text.strip,
				score: review_listing.css('div.subtle').text.gsub(/\s+/, "").partition('|').last,
				link: review_listing.css('div.subtle').css('a')[0].attributes['href'].value
			}
			reviews << review
		end
		return reviews
	end
end
