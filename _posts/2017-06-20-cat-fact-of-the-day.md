---
layout: post
title: "Cat Fact of the Day"
description: ""
category: "Alexa Skill"
tagline: 
github: 
galleryimages: [alexa-skill-cat-facts.png,alexa-skill-cat-facts-store-screenshot.png]
gallerycaptions: 
heroimage: alexa-skill-cat-facts.png
instagrams: 
link: https://www.amazon.com/dp/B072RJZHHC/ref=sr_1_10?s=digital-skills&ie=UTF8&qid=1497975288&sr=1-10&keywords=cat+facts
videos:
roles: 
status: Live 
tags: [Backend developer,Amazon Alexa,PHP]
---
{% include JB/setup %}

## What is it? 

"Cat Fact of the Day" is an Alexa Flash Briefing skill. It plays as part of your daily briefing.

## What problem does it solve? 

We all need to know more about cats.

## What was my role in it? 

I created this skill, drawing heavily on the [Cat Facts API](http://catfacts-api.appspot.com).

## How does it work? 

When you ask Alexa for the news or for your "Flash Briefing," it fetches updates from your chosen news sources. This "Alexa skill" can give you a cat fact as part of your daily news.

Once a day, my server requests a new fact from a publicly available cat fact API and transforms it into an Alexa Flash Briefing update. 

## Backstory 

This was a fun way to learn about Alexa skills. As of April 20, 2019, it has 300 unique users per month.

