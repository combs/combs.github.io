---
layout: post
title: markovradio.stream
description: This online radio service has eight stations of computer-generated talk radio.
category: Web Toys
tagline: Dispatches from the Uncanny Valley
github: 
galleryimages: [markovradio-large.png]
gallerycaptions: 
heroimage: markovradio.png
instagrams: 
link: http://markovradio.stream
youtubes: 
roles: Creator
status: Live
tags: [Icecast,Python,PHP,Markov chains,Text-to-speech,Audio,DigitalOcean,Web operations]
---
{% include JB/setup %}

## What is it? 

[This web radio service](http://markovradio.stream) has eight stations of computer-generated talk radio. Each station is a Markov chain generated from texts including Alice in Wonderland, the U.S. Constitution, and the tweet history of Donald Trump. There are 24 hours of looping audio for each station, pegged to the current time. 

This is an online-only version of a physical [Markov Radio](http://chriscombs.net/2017/01/19/markov-radio/).

## What problem does it solve? 

The Markov Radio is a deep dive into cognitive dissonance. It has a human-seeming voice reading sensical-sounding text... But if you really listen, it's all just mash.

## What was my role in it? 

I designed and created the Markov Radio and [markovradio.stream](http://markovradio.stream).

## How does it work? 

This is an Icecast radio service running from a virtual machine hosted in DigitalOcean. The speech is prerendered.

## Backstory 
 
The generated text from Donald Trump's tweet history may be offensive to listeners. 
 
