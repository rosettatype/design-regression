---
layout: post
title: "Elements of multi-script typography: paragraphs and pixels"
date: 2022-03-28 9:50:00
categories:
    - Essay
authors:
    - David Březina
editor:
    - Mary Dyson
readingtime: 10 min read
theme: sand
intro: The third part of a mini-series discusses the technical requirements for language support at the level of paragraph and rasterization.
sharing_image: /assets/2022-03-28-elements-of-multi-script-typography-part-3/sharing_image.png
---

**Previous chapter:** [codes, keys, and word shapes]({% post_url 2022-03-21-elements-of-multi-script-typography-part-2 %})

**Next chapter:** coming later this year

## From word shapes to paragraphs

During paragraph composition, words are set one next to the other in the
writing direction (see [Figure 1](#fig:paragraph-directions)) and separated by word separators (typically a word space) and other punctuation to form lines (see [Figure 2](#fig:dandas)). Note that some scripts do not have established conventions for the use of word separator and punctuation, e.g. Chinese ([Daniels & Bright, 1996] (#ref:daniels-bright-1996)). Following the customary order of lines on a page (see [Figure 1](#fig:paragraph-directions)) a paragraph is formed. At the end, the paragraph may be separated by a selected paragraph separator (end of line, blank line, indent of the following line).

![Examples of common contemporary writing directions](/assets/2022-03-28-elements-of-multi-script-typography-part-3/paragraph-directions.svg)

<figcaption id="fig:paragraph-directions"><strong>Figure 1:</strong> Examples of common contemporary writing directions (in
black, the general order of the characters in a word and on a line) and
paragraph directions (in red, the order of lines in a paragraph). 1.:
left-to-right line and top-to-bottom paragraph direction are used, for
example, for English and many languages using the Latin script or for
horizontal setting of Chinese. 2.: right-to-left line and top-to-bottom
paragraph direction are used for languages using the Arabic script or
Hebrew. 3.: top-to-bottom line and right-to-left paragraph direction are
used for vertical setting of Chinese or Japanese. 4.: top-to-bottom line
and left-to-right paragraph direction are used, for example, for
Mongolian. Rare and historical directionalities, such as boustrophedon,
are omitted.
</figcaption>

![The use of a danda and double danda signs](/assets/2022-03-28-elements-of-multi-script-typography-part-3/dandas.png)

<figcaption id="fig:dandas"><strong>Figure 2:</strong> The use of a danda (single vertical line) and double danda (two vertical lines) signs as punctuation in Sanskrit texts set in the Devanagari script. Note that
Latin-script punctuation is usually used for contemporary languages such
as Hindi, Marathi, or Nepali when set in the Devanagari script. The
example is from Śrī Bhagavad Sandarbha (<a href="#ref:gosvami-2014">Gosvāmī, 2014, p. 7</a>). The font is Skolar
Devanagari Regular.
</figcaption>

Paragraph alignment creates a major technical challenge. When focused on
the horizontal direction, there are four common types of paragraph
alignment: aligned-left (also called ragged-right), aligned-right (also
called ragged-left), horizontally-centred, and horizontally-justified.
The centred alignment centres the lines causing ragged edges on both
sides of the paragraph. When aligned-right or aligned-left, the lines
get aligned along one edge while leaving the other edge ragged. When
horizontally justified the lines get aligned along [both edges](#sn:last-line).
Alignment in the vertical direction is analogous. See [Figure 3](#fig:paragraph-alignments).

![Common paragraph alignments](/assets/2022-03-28-elements-of-multi-script-typography-part-3/paragraph-alignments.svg)

<figcaption id="fig:paragraph-alignments"><strong>Figure 3:</strong> Common paragraph alignments, horizontal: aligned-left (1),
aligned-right (2), centred (3), and horizontally justified (4); and
vertical: top-aligned (5), bottom-aligned (6), vertically centred (7)
and vertically justified (8). The bottom-aligned (6) and vertically
centred (7) alignments are used sporadically.
</figcaption>

Note that the direction of the paragraph alignment is independent of the
writing direction. However, script's writing directions and document
genres have established preferences for particular paragraph alignments.

Typographers use various techniques to achieve full justification or to
reduce the raggedness of the lines' edges. Here are some of the common
ones that are used to extend or shorten lines to fit the intended width,
i.e. to *justify* [them](#sn:previous-chapter):

- stretching of the word separator,
- insertion of additional space (also called *tracking*),
- insertion of extending glyphs,
- use of alternative character shapes and ligatures,
- stretching of characters,
- word *hyphenation*.

To achieve an aesthetically pleasing paragraph setting, you might need
to employ several of these techniques at [the same time](#sn:justification-arabic).

Not all of these techniques are available to all scripts. Most notably
the insertion of additional space between characters would break the
links in connecting scripts such as Arabic or Devanagari. These use
special extending glyphs which make words and lines longer while
preserving the connections. These additional spaces or extending glyphs
can be inserted only in appropriate spaces. For alphabetic scripts, such
as Latin, Cyrillic, or Greek, additional spaces or extending glyphs can
be inserted between any two letters. For syllabic scripts, such as
Devanagari or Tamil, they can be inserted only [between syllables](#sn:segmentation)
See [Figure 4](#fig:justification).

![Examples of appropriate and inappropriate justification methods](/assets/2022-03-28-elements-of-multi-script-typography-part-3/justification.svg)

<figcaption id="fig:justification"><strong>Figure 4:</strong> Example words set in (top to bottom): Russian (in the
Cyrillic script), Greek (in the Greek script), English (in the Latin
script), Arabic (in the Arabic script), and Hindi (in the Devanagari
script): default setting (1), tracked with additional space (2), and
stretched using extending glyph (in red) (3). Note that the extending
glyph used in the Arabic script (called kashida or tatweel) is not
applied uniformly. Also note that the additional space and the extending
glyphs in Devanagari are added between syllables rather than individual
glyphs. Insertion of an additional space is not an acceptable technique
for the Arabic and Devanagari scripts as it breaks the links between
characters. On the other hand, applying the extending glyph is generally
not used for the Cyrillic, Greek, or Latin scripts. It is shown here
only to further illustrate the absurdity of an inappropriate
tracking/stretching technique. The fonts used are Skolar Sans PE
Extended Extrabold (the first three lines), Marlik Extrabold, and Ek
Mukta Extrabold.
</figcaption>

Where words are hyphenated depends on the conventions of a particular
language and the document genre. Arabic or Persian do not hyphenate
words, for example, while Uyghur that also uses the Arabic script, does
([Haralambous, 2021](#ref:haralambous-2021)).

To do hyphenation well, the paragraph composer needs to have access to a
hyphenation dictionary which defines when and where words can be
hyphenated. Contemporary typesetting software offers ways to select a
language for a paragraph which, among other things, also sets the
correct hyphenation dictionary. If missing, the hyphenation dictionary
can be installed.

*Line spacing* (or *leading*) can be fully controlled by the designer in
most contemporary [typesetting software](#sn:visual-considerations). When working automatically,
the paragraph composer may set the line height to accommodate the font
with the tallest vertical metric, i.e. the height of the glyph
boundaries. This is convenient when mixing multiple scripts with
different use of vertical space, but it may lead to uneven line spacing
(see [Figure 5](#fig:different-line-heights)).

![The third line in this example gets automatically shifted
lower](/assets/2022-03-28-elements-of-multi-script-typography-part-3/different-line-heights.svg)

<figcaption id="fig:different-line-heights"><strong>Figure 5:</strong> The third line in this example gets automatically shifted
lower to accommodate the predefined vertical metrics of the
Devanagari and Arabic fonts, although the particular words would fit
well. The fonts used are Skolar PE Regular, Skolar Devanagari Regular,
and Nassim Arabic Regular.
</figcaption>

Paragraphs that mix scripts with different reading directions create
further challenges. Bi-directional setting is especially common in
semitic languages such as Arabic or Hebrew that run from right to left,
but often use Latin-script numerals and text snippets, e.g. email or web
addresses. The composer changes the direction and position of the
characters as users type (see [Figure 6](#fig:bidi-input)). This becomes crucial in word processors and online forms.

![Inputting Latin-script text within Arabic](/assets/2022-03-28-elements-of-multi-script-typography-part-3/bidi-input.svg)
{: .narrow}

<figcaption id="fig:bidi-input"><strong>Figure 6:</strong> Typing an email in the Latin script within an Arabic-script context may seem counter-intuitive to users who are not familiar with bi-directional type setting. Notice that the "@" and "." get positioned initially on the left, following the Arabic-script direction. They are moved to the right only after the following Latin-script letter is typed and it is clear they form a part of the email address that is treated as a whole. Note that the support for bi-directional content varies across software.
</figcaption>

Hyphenation brings about another potentially confusing challenge where a
word hyphenated in one direction continues on the next line, following
the paragraph direction of the main script (see [Figure 7](#fig:bidi-hyphenation)).

![Hyphenation of a Latin text within Arabic paragraph](/assets/2022-03-28-elements-of-multi-script-typography-part-3/bidi-hyphenation.svg)

<figcaption id="fig:bidi-hyphenation"><strong>Figure 7:</strong> The Arabic text is running from right to left, and since
the rest of the line is too short for the complete Latin term, the word
"TAXIFOLIA" has to be hyphenated. The remainder of the hyphenated word
is placed at the beginning of the line, i.e. to the right, but aligned
from left to right. The right part shows a schematic flow of the text,
the flow of the Latin word is marked in red dashed arrows. Note that only the Latin text can be hyphenated as the Arabic language does not use
hyphenation. From the newspaper Asharq Al-Awsat (2000, p. 15), supplied
by Fiona Ross.
</figcaption>

## From contours to pixels

The majority of contemporary fonts use beziér curves to describe glyph
contours. In order to display geometrically defined smooth contours on
contemporary screens and printers, the contours need to be rasterised,
i.e. converted to their visual representation in pixels. The results can
differ greatly across computer platforms and [printers](#sn:hinting). The
technology used for rasterisation is principally script-independent, but
it still requires consideration.

When dealing with visually dense scripts such as Devanagari, Chinese, or
the Japanese scripts (Kanji, Hiragana, Katakana), it is worth paying
attention to the quality of the rasterised image to ensure that
important visual features are well preserved in low resolution (see
[Figure 8](#fig:japanese-simplification)).

![Designers simplify complex glyphs of Japanese Kanji](/assets/2022-03-28-elements-of-multi-script-typography-part-3/japanese-simplification.png)
{: .narrow}

<figcaption id="fig:japanese-simplification"><strong>Figure 8:</strong> Designers simplify complex glyphs of Japanese Kanji at
small sizes; the top row shows samples of the same glyph in the font
Meiryo in three different sizes. Illustration from Larson (<a href="#ref:larson-2007">2007</a>).
</figcaption>

Depending on the rasterisation technique and the font used, there may be
a marked difference between the overall weight of whole categories of
shapes. For example, weight differences between round and straight
strokes may become an issue when juxtaposing a script that uses a lot of
straight strokes, such as Latin, with a script that uses more rounded
strokes, such as Greek. The latter may turn out noticeably darker in
smaller sizes even though it looks balanced in larger sizes. If the
intention is for the two to look equally salient, the designer may need
to implement a visual compensation: use a lighter or darker weight for
one of the scripts.

Since the last quarter of the last century, the technology of digital
typography has made considerable progress in supporting many world's
scripts. Yet, it is still not perfect to the point where it would always
work smoothly without a designer's intervention. Designers need to be
aware of all the principles, limitations, and issues that come with each
script and language to ensure quality in their digital work.

## Notes

<aside id="sn:last-line">The last line of a justified paragraph can be dealt with independently, as a single paragraph, i.e. centred, ragged, or justified.
</aside>

<aside id="sn:previous-chapter">Note that some of these influence the word shaping discussed in the previous chapter.
</aside>

<aside id="sn:justification-arabic">This is particularly true for Arabic where the insertion of the extending glyph (called kashida or tatweel) is merely the simplest solution to automated line justification as the Arabic script can also use alternative glyph shapes including ligatures to perfect typographic justification. For further and more nuanced discussion, see Elyaakoubi and Lazrek (<a href="#ref:elyaakoubi-lazrek-2010">2010</a>) or Nemeth (<a href="#ref:nemeth-2020">2020</a>).
</aside>

<aside id="sn:segmentation">Among others, the Unicode Standard (<a href="#ref:unicode-2021">2021, Annex #29</a>) also describes algorithms for determining default boundaries between grapheme clusters (user-perceived characters). Syllables in the Indian scripts are a perfect example as they can be specified using multiple code points and formed using multiple glyphs, some of which represent multiple code points.
</aside>

<aside id="sn:visual-considerations">The visual considerations will be discussed in one of the next chapters of this series.
</aside>

<aside id="sn:hinting">Some systems rely on rasterisation instructions in fonts called *hinting*, while others ignore them or use only part of the hinting instructions. Discussing a highly technical concept such as hinting is beyond the scope of this mini-series.
</aside>

{% include cta-feedback.html %}

{% include cta-newsletter.html %}


## References

Daniels, P. T., & Bright, W. (1996). *The world's writing systems*.
Oxford University Press.
{: id="ref:daniels-bright-1996"}

Elyaakoubi, M., & Lazrek, A. (2010) Justify just or just justify. *The
Journal of Electronic Publishing*. 13(1). [http://dx.doi.org/10.3998/3336451.0013.105](http://dx.doi.org/10.3998/3336451.0013.105)
{: id="ref:elyaakoubi-lazrek-2010"}

Gosvāmī, J. (2014) *Śrī Bhagavad Sandarbha*. Jiva Institute. The digital
version available from [http://sandarbhas.jiva.org](http://sandarbhas.jiva.org)
{: id="ref:gosvami-2014"}

Haralambous, Y. (2021). Breaking Arabic: the creative inventiveness of
Uyghur script reforms. *Design Regression*. Retrieved 17 January 2022,
from [{% post_url 2021-10-12-breaking-arabic %}](https://designregression.com/article/breaking-arabic).
{: id="ref:haralambous-2021"}

Larson, K. (2007). The technology of text. *IEEE spectrum*, *44*(5),
26–31. The digital version available from [https://doi.org/10.1109/MSPEC.2007.352529](https://doi.org/10.1109/MSPEC.2007.352529)
{: id="ref:larson-2007"}

Nemeth, T. (2020). On Arabic justification. *The Journal of Electronic
Publishing*, 23(1). [https://doi.org/10.3998/3336451.0023.104](https://doi.org/10.3998/3336451.0023.104)
{: id="ref:nemeth-2020"}

*The Unicode Standard* (Version 14.0). (2021). Mountain View, CA: The
Unicode Consortium. The most recent version is available from
[http://unicode.org](http://unicode.org)
{: id="ref:unicode-2021"}
