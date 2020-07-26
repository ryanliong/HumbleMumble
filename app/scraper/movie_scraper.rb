require 'nokogiri'
require 'httparty'
require 'byebug'
require 'json'
require 'erb'

module Movie_scraper
	def self.scraper (slug)
		splitVal = slug.split("+")
		searchTerm = splitVal[0].strip
		uriEncodedST = ERB::Util.url_encode(searchTerm)
		searchURL = "https://www.rottentomatoes.com/search?search=#{searchTerm}"
		unparsed_searchPage = HTTParty.get(searchURL)
		parsed_searchPage = Nokogiri::HTML(unparsed_searchPage)
		searchResults = Array.new
		
		searchData = JSON.parse(parsed_searchPage.css("script#movies-json").text)
		

		firstUrl = searchData['items'][0]['url']

		reviewPage = firstUrl + '/reviews'
		
		unparsed_page = HTTParty.get(reviewPage)
		parsed_page = Nokogiri::HTML(unparsed_page)
		reviews = Array.new
		review_listings = parsed_page.css('div.review_table_row')
		review_listings.each do |review_listing|
			review = {
				name: review_listing.css('a.articleLink').text.strip,
				publication: review_listing.css('em.critic-publication').text.strip,
				date: review_listing.css('div.review-date').text.strip,
				description: review_listing.css('div.the_review').text.strip,
				score: review_listing.css('div.review-link').text.gsub(/\s+/, "").partition('|').last,
				link: review_listing.css('div.review-link').css('a')[0].attributes['href'].value
			}
			reviews << review
		end
		return reviews
	end
end
