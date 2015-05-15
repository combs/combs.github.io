---
layout: homepage
title: Welcome!
tagline: Chris Combs
---
{% include JB/setup %}

 

**[Important disco cat announcement.](http://getdown.chriscombs.net)**


### Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

