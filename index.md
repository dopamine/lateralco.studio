---
layout: default
title: Services
---

{% capture intro %}
Get to the next level with <span class="highlight">design research</span>
{:.hero.tagline}

Lateral &co is a tiny design studio offering customised services based on your unique needs. 
{:.lead}

From taking your first steps towards building an excellent customer experience, to taking full stock of how your existing service performs, here’s how I can help your product succeed:
{% endcapture %}

{% capture section-research %}
![]({{ site.baseurl }}/assets/img/undraw-design-research.png){:.service-img.img-pull-left}

### Expert Design Research
When you have the beginnings of a product or service but need just a bit more insight about your customers to make it shine, a quick design discovery project will help set you off on the right track.

[Design Discovery service &raquo;]({{"services/expert-design-research.html" | relative_url }}){:.action}
{% endcapture %}

{% capture section-review %}
![]({{ site.baseurl }}/assets/img/undraw-ux-checkup.png){:.service-img.img-pull-right} 

### Product Experience Review
Do you have a firm idea of what you’ll build but just want a bit more confidence? Or perhaps you already launched your product and need to identify and eradicate any pain points? What you need is a comprehensive review of the product experience.

[Expert UX Review service &raquo;]({{ "services/remote-ux-checkup.html" | relative_url }}){:.action}
{% endcapture %}

{% include container.html class="section narrow valueprop" content=intro %}

{% include container.html class="section service" content=section-research %}
{% include container.html class="section service" content=section-review %}

{% include separator.html %}

{% include bio.html %}