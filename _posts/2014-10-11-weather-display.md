---
layout: post
category: "Prototype"
title: Weather Display
tagline: "An information radiator to start your day."
tags: [AVR,Custom circuit boards,nRF24L01+ wireless,Lithium-ion battery,Power management,LCD1602,I2C,Raspberry Pi, Arduino,PHP,JSON, APIs, Weather Underground,Circuit designer]
github: http://github.com/combs/mirf-base
galleryimages: [weather-clock-20150216-IMG_1343.jpg,weather-clock-2015-02-16 15.22.42.jpg,weather-clock-20150105-IMG_0864.jpg]
gallerycaptions: ["That's a lot of snow for D.C.!","The white sensor detects if a person is nearby, and turns off the screen if not.","This was the first battery-operated prototype."]
heroimage: weather-clock-20150216-IMG_1343.jpg
link: 
youtubes:
status: "Prototype #3"

---
{% include JB/setup %} 

## What is it? 

This screen automatically shows today's forecast when it senses a person approaching.

## What problem does it solve? 

When I'm getting ready for the day, I don't always have time to get the forecast. If it is available to me in a place I encounter every morning, I can be sure to dress for the weather.

## What was my role in it? 

I designed and built its hardware, software, and firmware. Initial prototypes were built from common hardware modules; the most recent version has a central circuit board that I designed and had fabricated by a factory in China.

## How does it work? 

The weather screen communicates to a base station with short range wireless nRF24L01+ modules. This base station software, running on a Raspberry Pi, answers incoming requests using the Weather Underground API (cached to reduce API requests). This software chooses which information is most important to display&mdash;a hurricane alert is more important than the humidity, for example. I defined a priority list of all available weather conditions and alert codes.

The firmware of the display is written in a general-purpose way; it is reusable for other purposes, such as a bus time screen or a Word of the Day screen, with modifications only to the base station. Each screen is instantiated with a unique ID by the base station when the firmware is first flashed.

A sensor (white circle) detects human presence by sensing changes in the passive infrared heat emitted by our bodies. It's a standard module ("PIR sensor"), but how cool is that?

## Backstory

I never knew when it was going to rain!

