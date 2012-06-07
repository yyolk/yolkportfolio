require 'liquid'
require 'fleakr'

Fleakr.api_key       = "eae5ede55c1eda160c12f097f1abdf8f"
Fleakr.shared_secret = "acf9b9a1bd0e256b"
Fleakr.auth_token    = "72157630069599284-647e005942e54f22"

CACHED_IMAGES = {}

module Flickr
  def flickr_image(url)
    return "<img alt='#{image_object(url).title}' src='#{image_object(url).large.url}'>"
  end

  def flickr_medium_image(url)
    return "<img alt='#{image_object(url).title}' src='#{image_object(url).medium.url}'>"
  end

  private

  def image_object(url)
    CACHED_IMAGES[url] ||= Fleakr.resource_from_url(url)
  end
end

Liquid::Template.register_filter(Flickr)

