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

## Quotes

Blockquotes with longer content can be marked up like this:

> “Cras mattis consectetur _purus_ sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.”
> _John Doe_

Note that _emphasis_ inside the quote will render as such, and if emphasising the last line, this will be interpreted and rendered as “author”. Add quotes and punctuation as needed in the text.

<blockquote class="pullquote">Add pullquotes like this.</blockquote>

Morbi leo risus, *porta* ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

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

## Lists

Use Markdown for styling basic numbered or bullet lists:

- **something** without order
- **add** as many bullets as needed

1. **something** in order
2. **add** as many points as needed
3. _note_ that the list style is predetermined, use this specific numbering style for numbered lists, always
    1. Indent with tab to start nested lists, if really needed

## Code

For code samples use single `backticks` to render in monospaced font and with code highlighting.

    def sample():
        print("To render an entire block of code, indent all lines...")
        print("...by one tab")

To apply syntax highlighting you need to use the more verbose 'highlight' syntax:

{% highlight python %}
def sample():
    print("A code block with python highlighting")
{% endhighlight %}

## Tables

Tables should be authored in HTML. Using 'full' will render it 100 percent width, wrapping it in 'figure' will make it render inside a frame.

<figure class="full">
    <table>
        <thead>
            <tr>
                <th>Use 'th'</th>
                <th colspan="3">For column or row</th>
                <th>Headings</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Foobar</td>
                <td class="right">12.23</td>
                <td class="right">0.01</td>
                <td class="right">7.19</td>
                <td>Note you can use 'left' and 'right' classes to align content, e.g. numbers</td>
            </tr>
            <tr>
                <td>Barfoo</td>
                <td class="right">99.12</td>
                <td class="right">0.02</td>
                <td class="right">12.57</td>
                <td>The 'left' alignment is default, use 'right' where needed.</td>
            </tr>
            <tr>
                <td class="bottom">Fooduu</td>
                <td class="right bottom">57.12</td>
                <td class="right bottom">0.21</td>
                <td class="right bottom">9.43</td>
                <td class="bottom">Use 'top', 'bottom' or 'middle' (default) to vertically align. This matters only when content inside the cell breaks to several lines.</td>
            </tr>
        </tbody>
    </table>
</figure>

<figcaption>
<strong>Note:</strong> Use 'figcaptions' to elaborate on tables as needed.
</figcaption>


## Footer

Just for clarity, add these bibliography entries always at the end of the page. Jekyll will compile them into the list that _automatically_ gets placed at the end of the page, no matter where these definitions are. You don’t need to include the 'Bibliography' heading.

Below the bibliography, each article author will be displayed with some basic info about them.

[^1]: Baudin, Fernand. 1989. **How Typography Works: (And Why It Is Important).** London: Lund Humphries Publishers.
[^2]: Grainger, Jonathan, Arnaud Rey, and Stéphane Dufau. 2008. “Letter Perception: From Pixels to Pandemonium.” **Trends in Cognitive Sciences 12** (10): 381–87.
