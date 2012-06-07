require 'liquid'
require 'fleakr'

Fleakr.api_key       = "eae5ede55c1eda160c12f097f1abdf8f"
Fleakr.shared_secret = "acf9b9a1bd0e256b"
Fleakr.auth_token    = "72157630069599284-647e005942e54f22"

CACHED_IMAGES = {}

module Flickr
  def flickr_image(url)
    return "<img alt='#{image_object(url).title}' src='#{image_object(url).original.url}'>"
  end
  def flickr_large_image(url)
    return "<img alt='#{image_object(url).title}' src='#{image_object(url).large.url}'>"
  end

  def flickr_medium_image(url)
    return "<img alt='#{image_object(url).title}' width='#{image_object(url).medium.width}' height='#{image_object(url).medium.height}' src='#{image_object(url).medium.url}'>"
  end

  def flickr_small_image(url)
    return "<img alt='#{image_object(url).title}' width='#{image_object(url).small.width}' height='#{image_object(url).small.height}' src='#{image_object(url).small.url}'>"
  end

  def flickr_image_large_url(url)
      return "#{image_object(url).large.url}"
  end
  def flickr_image_small_url(url)
      return "#{image_object(url).small.url}"
  end

  def flickr_image_small_width(url)
      return "#{image_object(url).small.width}"
  end

  def flickr_image_small_height(url)
      return "#{image_object(url).small.height}"
  end

  private

  def image_object(url)
    CACHED_IMAGES[url] ||= Fleakr.resource_from_url(url)
  end
end

Liquid::Template.register_filter(Flickr)

