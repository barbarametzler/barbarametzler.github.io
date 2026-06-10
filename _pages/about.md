---
layout: about
title: about
permalink: /
subtitle: Senior Data Scientist, <a href='https://www.bbc.co.uk/news/bbcverify'>BBC Verify</a> · formerly <a href='https://www.turing.ac.uk/'>The Alan Turing Institute</a>

profile:
  align: right
  image: prof_pic.png
  image_circular: false # crops the image to make it circular
  more_info:

selected_papers: false # publications are on the dedicated page; the homepage features work instead
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # rendered manually in the body (above "selected work") instead
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a Senior Data Scientist at [BBC Verify](https://www.bbc.co.uk/news/bbcverify), where I use
satellite imagery, geospatial data and open-source techniques to investigate and verify news
stories.

My background is in remote sensing and AI, with experience in foundation models across text and
vision. I've worked with open-source satellite data like Copernicus Sentinel, plus high-resolution
radar and optical imagery for detailed analysis. Shortly before joining BBC Verify, I was a
founding engineer at a geospatial tech startup. Before that, I was a
[researcher](https://www.turing.ac.uk/people/researchers/barbara-metzler) at The Alan Turing
Institute, where I worked on projects including:

- [Are you smarter than a foundation model? (online game)](https://are-you-smarter-than-a-foundational-model.vercel.app/)
- [DemoLand](https://urban-analytics-technology-platform.github.io/demoland-web/tyne_and_wear/)
- [EuroFab](https://eurofab-project.github.io/)

I obtained my PhD at Imperial College London as part of the
[Global Environmental Health Research Group](http://globalenvhealth.org/) and the
[Pathways to Equitable Healthy Cities](http://equitablehealthycities.org/) collaboration. My PhD
research focused on characterising urban development with high-resolution satellite imagery and
self-supervised deep learning in Sub-Saharan Africa.

<h2 class="mt-4"><a href="{{ '/news/' | relative_url }}" style="color: inherit">news</a></h2>
{% include news.liquid limit=true %}

<div class="projects" style="max-width: 560px;">
  <h2 class="mt-4">recent work</h2>
  <div class="row row-cols-1">
  {% assign ship = site.projects | where: "home_preview", true | first %}
  {% if ship %}{% assign project = ship %}{% include projects_horizontal.liquid %}{% endif %}
  </div>
  <p class="mt-2"><a href="{{ '/portfolio/' | relative_url }}">See more of my work in the portfolio →</a></p>
</div>
