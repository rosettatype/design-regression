---
layout: post
title: "Formatting sample article for reference"
date: 2020-10-10 11:16:57 +0300
categories: 
    - "Research"
authors:
    - Jane Doe
    - John Doe
editor:
    - Joe Doe
readingtime: 15 min read
---
Basic article text looks like this. The text can be written in Markdown or by explcitily writing HTML. We prefer Markdown where possible, and use HTML for special elements.

Refer to this [Markdown reference for Jekyll](https://www.markdownguide.org/basic-syntax#overview).

## Highlighting

Highlighting words by _italisizing_ or **bolding**.

_Even an entire paragraph can be highlighted._

**Even an entire paragraph can be highlighted.**

Footnotes are marked[^1] like this.

## Headings

# All headings inside the article 

will be rendered as subheadings of same visual weight, but you should still use h1-h6.

## Structure your headings by importance as needed

this is good for SEO, use 1 to 6 '#' to start a heading.

## Sidenotes

<aside>By default the 'aside' tag will put stuff to the side and style the text smaller. This will align to the top with whatever comes after it.</aside>

Morbi leo risus, *porta* ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum.

<aside><strong>Use 'strong':</strong> To make labels in the sidenote. An 'em' to add <em>emphasis</em>.</aside>

Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.


## Images

Images and other graphics can be included as follows. A simple _inline_ image can use the markdown syntax. ![The description]({{ 'media/sample.png' | relative_url }})This should only be a small image and will render seamlessly between the text whereever it is encountered. Note that all images will always be stretched to 100 percent width of the text column.

To separate a graphic or other illustration from the text, use the 'figure' HTML tag as so.

<figure>
<img src="{{ 'media/sample.png' | relative_url }}" alt="The description">
</figure>
<figcaption><strong>Figure 1.</strong> Note that inside the HTML block the image has to be inserted as HTML as well.</figcaption>

If an illustration should have extra space you can use the 'full' class on the 'figure' to make it span all columns including the sidebar.

<figure class="full">
<img src="{{ 'media/sample.png' | relative_url }}">
</figure>
<figcaption>Another caption here.</figcaption>

Lorem ipsum dolor sit amet, consectetur[^2] adipiscing elit. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.

## Subheading

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur.

[^1]: Baudin, Fernand. 1989. **How Typography Works: (And Why It Is Important).** London: Lund Humphries Publishers.
[^2]: Grainger, Jonathan, Arnaud Rey, and Stéphane Dufau. 2008. “Letter Perception: From Pixels to Pandemonium.” **Trends in Cognitive Sciences 12** (10): 381–87.