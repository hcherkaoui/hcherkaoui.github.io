---
layout: page
permalink: /publications/
title: Publications
description: (All my publications as first author)
years: [2023, 2021, 2020, 2019, 2018]
nav: true
order: 2
---

<div class="publications">

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
