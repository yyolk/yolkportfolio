---
layout: default
title: Hello World!
---

{% for post in site.posts %}
<div class="item" onClick="location.href='{{ BASE_PATH}}{{ post.url }}';">
{{ post.flickr[0] | flickr_small_image }}
<p>
{{ post.date | date_to_string }} &raquo; 
<a href="{{ BASE_PATH }}{{ post.url }}">
{{ post.title }}
</a>
</p>
</div>

{% endfor %}

<script type="text/javascript">
var $container = $('#content');

$container.imagesLoaded( function(){
$container.isotope({
    //options
    itemSelector: '.item',
    layoutMode: 'masonry'});
});
</script>
