---
layout: post
title: "Ambient Information"
description: ""
category: "Prototype"
tagline: Updates that don't annoy.
github:
galleryimages: [ambient-information-20151127-IMG_4486-2.jpg,ambient-information-20151127-IMG_4492-2.jpg]
gallerycaptions: ["Here, the light is green, reflecting that Internet connectivity has recently returned after an interruption.","It can display patterns and animations, but care must be taken to make sure that they have a clear meaning."]
heroimage: ambient-information-20151127-IMG_4492.jpg
instagrams:
link:
videos:
roles:
status: "Prototype #2"
tags: [AVR,Arduino,WS2812B LEDs,nRF24L01+ wireless,Raspberry Pi,IoT,Functional designer,PHP,Python,IFTTT,nginx,APIs,Embedded developer,Protocol designer]
---
{% include JB/setup %}

## What is it?

This cloud-connected light bar can be connected to APIs, changing color or flashing to reflect facts such as upcoming events or the pollen count.

## What problem does it solve?

Many notifications on phones or computers are not respectful of your attention and time. It's hard to keep up to date without being pestered.

I hope to make Internet facts more like the weather&mdash;something you perceive just by being around them, instead of consciously being distracted by them.

## What was my role in it?

I designed this, assembled it, and built its firmware and software.

## How does it work?

It is connected to the Internet through my short-range wireless network. A script running in `nginx` receives HTTP connections from the Internet and relays them wirelessly to the light's microcontroller.

Other tools running in Amazon Web Services connect to this script, integrating it with APIs such as Google Calendar or Weather Underground. It can also be integrated with the web service [If This Then That](http://www.ifttt.com).

## Backstory
