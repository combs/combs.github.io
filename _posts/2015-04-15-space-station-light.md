---
layout: post
title: "Space Station Light"
description: ""
category: "Prototype"
tagline: An ambient way to stay connected to the stars.
github: 
galleryimages: [space-station-light-20151119-IMG_4476.jpg,space-station-light-20151119-IMG_4460.jpg,space-station-light-nrf24-board.png]
gallerycaptions: ["","",""]
heroimage: space-station-light-20151119-IMG_4476.jpg
instagrams: 
link: 
youtubes: 
roles: 
status: "Prototype #2" 
tags: [Arduino,nRF24L01+ wireless,JSON,APIs,Open Notify API,Power management,AVR,Lithium-ion battery,IoT,Custom circuit boards,Cadsoft EAGLE]
---
{% include JB/setup %}

## What is it? 

This small, battery-operated device shows you when the International Space Station (ISS) is overhead. A white light begins to glow five minutes before it approaches, and fades out after the ISS is no longer visible.

## What problem does it solve? 

It's easy to forget that there are astronauts orbiting Earth at all times, and difficult to tell when you can see the space station passing by. 

## What was my role in it? 

I created this, including a circuit board that I designed to work with readily available hardware modules, and built its firmware and software.

## How does it work? 

The hardware is an 8-bit embedded AVR microcontroller (Arduino Pro Mini) that's connected to a NRF24 wireless network chipset. That network, similar to Bluetooth or Wi-Fi, is used to connect to a general-purpose NRF24 base station via protocols that I made for this purpose. The base station is a Raspberry Pi that uses a combination of shell scripts and PHP to request (and cache responses) from the [Open Notify](http://open-notify.org/) ISS API. 

The Arduino Pro Mini is connected to a circuit board that I designed in Eagle, acting as an adapter for the NRF24 that allows me to quickly prototype devices like this. It has a minimal amount of power regulation ICs and allows for future expansion.
 
My firmware is designed to allow as much battery life as possible from its limited, 800mAh battery. It uses interrupts and timers to let as much time as possible be spent with the wireless chipset and main microcontroller in low-power sleep mode.
  
## Backstory 

I like this as an ambient, daily reminder that a lot of people working on difficult, small tasks can do amazing things, such as make a massive space station that orbits Earth at all times.
