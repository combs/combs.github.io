---
layout: post
title: "Responsive Nat Geo Magazine"
description: ""
category: Functional Design
tagline: Bringing the finest storytelling to phones&mdash;and adding a few goodies on the way.
github: https://github.com/natgeo/cheetah-responsive
galleryimages: 
gallerycaptions: 
heroimage: climate-change-thumbnail.jpg
instagrams: 
link: http://ngm.nationalgeographic.com/2015/11/climate-change/solar-power-text
youtubes: 
roles: 
status: 
tags: [Front-end developer,JavaScript,CSS,SASS,Functional designer,Template designer,User testing,DoubleClick for Publishers,XML,Cheetah,Web producer,Product manager,National Geographic]
---
{% include JB/setup %}

## What is it? 

This template for National Geographic Magazine's web content management system added a responsive design and new editorial features.

## What problem does it solve? 

The magazine site did not work on phones or mobile devices (without using an external vendor's middleware), and its templates made it difficult to include additional photos, videos, or ads in an article.

## What was my role in it? 

Previously, we had [this template](http://ngm.nationalgeographic.com/2015/10/lost-city/preston-text) available to us for the magazine's web site.

The "Cheetah" CMS housing the NG magazine site was deprecated, and its replacement was far away. It had a dated design, and didn't allow multiple photos to be used in an article. This was a tough sell for showcasing National Geographic's work.

For November, our magazine had a special Climate Change issue in the works. There was a big push internally to make an expensive one-off site, but I felt that it would be most beneficial to our business to improve our systems instead of working outside of them. 

So we metabolized the Climate Change designs into an updated template and new tools for our very old CMS, "Cheetah." I developed this idea over a period of months with the Climate Change issue's project manager and we successfully pitched it to our leadership. I then led a small team to [make "SuperCheetah" a reality](http://ngm.nationalgeographic.com/2015/11/climate-change/introduction-text).

This template launched on time and with minimal costs to National Geographic. Its pages received much higher engagement and read rates. We used it for all subsequent magazine stories online until an even better system was available in March. 
 
I worked with designers, producers, and stakeholders to build a backlog, acting both as the template's front-end developer and its product manager. 

## How does it work? 

The pages load quickly, being rendered static HTML served through Akamai with responsive image sizing; typical articles with 10 photos have an initial page load in the 2-4MB range, which compares favorably with many of Nat Geo's heavier CMSes.

The Perl CMS "Cheetah" has rigid XML-based article templates, within which we apply an extra SASS stylesheet to make it responsive. A small amount of JavaScript takes care of minor DOM rearrangement and toolkits like ads and galleries.

Images employ multi-res responsive `srcsets` and lazyloading; videos now use Nat Geo's universal player. We can overlay headlines over photographs or autoplaying videos, while still allowing users to see the visual in its pure form. 

Ads from DFP are flexibly smart-loaded throughout the page, and will adaptively choose the most appropriate size for the viewport. 

## Backstory 

We scheduled two one-week sprints for primary development, and three sprints for QA and stabilization. 

Designer [Jasmine Wiggins](http://www.jasminewiggins.com) worked on our scrum team to fine-tune the template's components and typography. User testing during early stages led to specific actionable improvements, such as in our promo modules and "Next/Previous" component. Producers [John Kondis](https://www.linkedin.com/in/johnkondis) and [Angie McPherson](http://angiemcpherson.com/) were also key to the project's success.
 
