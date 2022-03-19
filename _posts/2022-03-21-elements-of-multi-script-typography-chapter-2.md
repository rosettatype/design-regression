---
layout: post
title: "Elements of multi-script typography: codes, keys, and word shapes"
date: 2022-03-21 9:50:00
categories:
    - Essay
authors:
    - David Březina
editor:
    - Mary Dyson
readingtime: 17 min read
theme: sand
intro: The second part of a mini-series discusses the technical requirements for language support at the level of encodings, keyboards, and word shaping.
sharing_image: /assets/2022-03-21-elements-of-multi-script-typography-chapter-2/sharing_image.png
---

**Previous chapter:** [introduction]({% post_url 2021-05-18-elements-of-multi-script-typography-introduction %})

**Next chapter:** paragraphs and pixels (coming soon)

<!--
**Next chapter:** [paragraphs and pixels]({% post_url 2022-03-28-elements-of-multi-script-typography-chapter-3 %})
-->

High-quality design can only happen if technology allows it, thus I make
a distinction between *design* for a language and *support* for a
language. The former deals with design quality while the latter
describes the technological requirements for even attempting to achieve
quality. In the digital context, language support means the software
ability to type, encode, and [render](#sn:other-interpretations) texts on screens or printers.
Diverse scripts pose diverse and often complex requirements when it
comes to rendering. This chapter discusses digital texts at the level of
codes, moving from keys to characters and words. The next chapter will
deal with paragraph composition and rasterization, i.e. the conversion
of vector contours to pixels. Keeping with the spirit of this series, I
will try to generalise from the intricate specifics to provide an
introductory overview. See [further reading](#further-reading) and [references](#references) for detailed descriptions of contemporary solutions.

## From shapes to codes

Most modern software represents texts as sequences of numeric code
points that correspond to [individual characters](#sn:grapheme-definition) from a script. The code points are listed in a shared database called an *encoding* that serves as a key for interpreting those code points as characters. The most commonly used encoding today is probably
[Unicode](http://www.unicode.org) which covers a great
majority of the world’s scripts and is regularly updated ([The Unicode
Standard, 2021](#ref:unicode-2021)).

Many pre-Unicode encodings for the Latin script represented characters
as 8-bit code points, i.e. one byte per character, and therefore could
not include more than 256 code points. Due to this limitation, encodings
were devised based on the needs of a particular script, language, or a
small group of languages. For example, the
[ISO-8859-1](https://www.charset.org/charsets/iso-8859-1)
encoding has 224 code points which cater primarily for West-European
languages.

The use of a wrong 8-bit encoding would lead to a character mismatch
(see [Table 1](#tab:encoding-mismatch)) or other text processing errors. Unicode solves this issue
by providing a singular database that can contain a multitude of
character code points ([The Unicode Standard, 2021, p. 14](#ref:unicode-2021)). As a
consequence, Unicode allows for multilingual and multi-scriptural texts,
almost universally.

|   Encoding                         |   Text                          |
|------------------------------------|-----------------------------------|
|   Central European (ISO 8859–2)    |   Vícejazyčná přednáška           |
|   Western European (ISO 8859–1)    |   Vícejazyèná pøedná¹ka           |
|   Baltic (ISO 8859–4)              |   Vícejazyčná pøednáška           |

<figcaption id="tab:encoding-mismatch"><strong>Table 1:</strong> An illustration of a mismatch between the intended appearance of a Czech text that was originally encoded in the Central European [ISO 8859–2](https://www.charset.org/charsets/iso-8859-2) (first row, correct representation) and its interpretation using two other encodings ([ISO 8859–1](https://www.charset.org/charsets/iso-8859-1) and [ISO 8859–4](https://www.charset.org/charsets/iso-8859-4)) that map the original code points to unexpected characters. All three example texts have been encoded using Unicode for reproducibility.
</figcaption>

The ability to encode texts is an essential requirement for language use
on computers from typing and word processing to online search.
Therefore, due to Unicode’s dominance, the inclusion of all necessary
characters in its database is a de facto requirement for the languages’
survival in the [digital environment.](#sn:unicode-impact)

In order to assign code points to characters, researchers working with
Unicode deliberately look away from region-specific, language-specific,
and individual preferences regarding the character shapes and script use
([The Unicode Standard, 2021, p. 15](#ref:unicode-2021)). As these preferences can be
disputed and evolve, their inclusion in Unicode can be challenging.
Also, it may be hard or even impossible to establish who has authority
over the appearance of a particular script or [language.](#sn:vocal-group)

This leaves designers with yet another research challenge: when
designing for a specific audience, they need to become familiar with
various visual preferences that exist outside Unicode’s specification
and choose those appropriate for the job. Typically, this is a question
of choosing the right font or setting the font so it produces required
character shapes (see [Table 2](#tab:bulgarian)).

<table class="full">
<thead>
    <tr>
        <th>Language</th>
        <th colspan=8>Characters</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Code point</td>
        <td>0414</td>
        <td>041B</td>
        <td>0432</td>
        <td>0433</td>
        <td>0434</td>
        <td>0436</td>
        <td>0437</td>
        <td>0438</td>
    </tr>
    <tr>
        <td>Ukrainian shape preference</td>
        <td>Д</td>
        <td>Л</td>
        <td>в</td>
        <td>г</td>
        <td>д</td>
        <td>ж</td>
        <td>з</td>
        <td>и</td>
    </tr>
    <tr>
        <td>Bulgarian shape preference</td>
        <td lang="bg">Д</td>
        <td lang="bg">Л</td>
        <td lang="bg">в</td>
        <td lang="bg">г</td>
        <td lang="bg">д</td>
        <td lang="bg">ж</td>
        <td lang="bg">з</td>
        <td lang="bg">и</td>
    </tr>
    <tr>
        <td>Code point</td>
        <td>043A</td>
        <td>043B</td>
        <td>043F</td>
        <td>0442</td>
        <td>0446</td>
        <td>0448</td>
        <td>0449</td>
        <td>044E</td>
    </tr>
    <tr>
        <td>Ukrainian shape preference</td>
        <td>к</td>
        <td>л</td>
        <td>п</td>
        <td>т</td>
        <td>ц</td>
        <td>ш</td>
        <td>щ</td>
        <td>ю</td>
    </tr>
    <tr>
        <td>Bulgarian shape preference</td>
        <td lang="bg">к</td>
        <td lang="bg">л</td>
        <td lang="bg">п</td>
        <td lang="bg">т</td>
        <td lang="bg">ц</td>
        <td lang="bg">ш</td>
        <td lang="bg">щ</td>
        <td lang="bg">ю</td>
    </tr>
</tbody>
</table>

<figcaption id="tab:bulgarian"><strong>Table 2:</strong> The preferred character shapes differ between Ukrainian and Bulgarian languages (<a href="#ref:karaivanov-2021">Karaivanov, 2021</a>) although the Unicode code points used are identical. Note that Unicode uses the Ukrainian shapes as examples. These are also used for Central Asian languages, Belarusian, or Russian. The code points in the table are hexadecimal. The example character shapes are in the typeface Adapter PE Text Medium.</figcaption>

## From keys to codes

In order to type digital texts using a keyboard, you need a *keyboard
layout* that maps the keys on the keyboard to corresponding code points.
A language or script can have multiple keyboard layouts that correspond
to different conventions or encodings (see [Figure 1](#fig:macos-keyboards)). Contemporary operating systems allow users to switch between these layouts effortlessly and type texts in multiple scripts.

![A screenshot of keyboard preferences from macOS](/assets/2022-03-21-elements-of-multi-script-typography-chapter-2/french-keyboards.png){: .browser}

<figcaption id="fig:macos-keyboards"><strong>Figure 1:</strong> A screenshot of macOS keyboard preferences shows multiple keyboards for the French language.</figcaption>

Many languages require large repertoires of code points that cannot all
fit on a single keyboard. The keyboard layouts address this by providing
control keys, such as Shift or Alt, and a [dead-key mechanism](#sn:dead-key) that
increase the number of code points accessible through a single keyboard.
Consequently, pressing multiple keys (at the same time or sequentially)
can result in an input of one or more code points. Alternatively, a
single key can input multiple code points (see [Figure 2](#fig:keystroke-sequences)).

When using an on-screen keyboard (or similar input method) on
touch-screen devices, such as phones or tablets, the keyboard appearance
changes completely to show relevant characters.

When using a physical keyboard connected to a computer and originally
designed for a single language, you can still switch among multiple
layouts. However, the use of scripts that are not represented on the key
labels may feel like a blind man’s buff game. This can be helped with an
on-screen keyboard preview.

Notably, there are other input methods besides keyboards, such as
handwriting recognition, predictive completion, or speech-to-text
processing. However, in Unicode-based environments, each of these
methods produces a sequence of code points for further processing.

![Image](/assets/2022-03-21-elements-of-multi-script-typography-chapter-2/keystroke-sequences.svg)

<figcaption id="fig:keystroke-sequences"><strong>Figure 2:</strong> Keystroke sequences and the resulting input in code points
(hexadecimal). The plus sign signifies that both keys need to be held
down together. Note that the number of keys struck does not necessarily
correspond to the number of code points input. The last column shows
examples of shapes that can be rendered from these code points. The
fonts used in the last column are (top to bottom): Adapter PE Text
Medium (the first three lines), Adobe Devanagari, and Tiro Bangla.
</figcaption>

## From codes to word shapes
{. id="from-codes-to-word-shapes }

Rendering a text into its visual representation is coordinated across an
operating system, fonts used, and a typesetting application. It is
important to note that specific software implementations may approach
text rendering differently which makes it challenging to ensure good
support and quality control. However, the goal stays the same:
converting sequences of code points into word shapes (clusters of
character shapes) following the orthographic principles of a given
script and combining these words into paragraphs.

These are the key software components involved in text rendering:

- a *digital font* that controls the visual appearance of the individual
characters. A font contains a collection of geometric shape descriptions
(*glyphs*) that typically consist of contours constructed from beziér
curves. Additionally, a font also includes instructions regarding the
glyphs’ positioning and instructions for their combination. Some of the
glyphs are mapped onto code points directly while others serve as
alternatives or parts that are assigned through programmed instructions
in the font. In order to support a language properly, a font needs to
cover necessary code points and include instructions that help to
represent the corresponding script correctly during shaping.
- a *shaping engine* that combines the glyphs from a font to compose words
while relying on the instructions in the font and following the script’s
[orthographic principles](#sn:opentype).
- a *paragraph composer* that sets words one after the other and deals with line-breaking, paragraph alignment, justification, hyphenation, and other operations that relate to paragraph setting. Paragraph composition will be discussed in the next chapter.

To provide a simple example: rendering of an [English word](#sn:english-challenging) means that
a sequence of code points is converted into glyphs which are laid out
one by one, set from left to right following the writing direction (see
[Figure 3](#fig:english-word)). However, the orthographic principles of many world’s
scripts are more diverse which means that text rendering can get very
complex. The following will discuss some of the challenges that need to
be dealt with when rendering these scripts.

![Simplified shaping process of an English word](/assets/2022-03-21-elements-of-multi-script-typography-chapter-2/english-word.svg)

<figcaption id="fig:english-word"><strong>Figure 3:</strong> Simplified shaping process of an English word “school” in
six steps. The input is a digital text (a string of code points) and a
font (a collection of glyphs mapped to code points). Each step consists
of finding a glyph from a font that corresponds to a given code point
and positioning this glyph (in grey) – in the writing direction –
right after the already positioned glyphs. The result is a word shape
“school” in a given font which can then be realised on screen or in
print. The Unicode code points are hexadecimal. Mapping of the code
point for the letter “l” is illustrated in red. The rectangles
illustrate the glyph boundaries. The font used is Adapter PE Display
Medium.
</figcaption>

Note that while it is useful to discuss word shaping first, the shaping
engine and paragraph composition are linked and influence each other,
e.g. when hyphenating words at the end of a line.

Firstly, the shaping engine has to consider the directionality of a
script, i.e. the [writing direction](#sn:reading-direction) and the general order of the characters in a word (horizontal: left-to-right, right-to-left, or vertical: [top-to-bottom)](#sn:secondary-direction). See [Figure 4](#fig:paragraph-directions) for selected examples.

![Examples of common contemporary writing directions](/assets/2022-03-21-elements-of-multi-script-typography-chapter-2/paragraph-directions.svg)

<figcaption id="fig:paragraph-directions"><strong>Figure 4:</strong> Examples of common contemporary writing directions (in
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

Secondly, the shaping engine has to deal with code-point-to-glyph
mapping and glyph interactions. The mapping between code points and
glyphs is not direct: a single code point can be represented by one or
more glyphs and a single glyph can represent multiple code points.
Moreover, the way a code point is represented may depend on the context.
In Arabic, for example, the same code point may be translated into a
different glyph depending on the joining behaviour of the character the
code point represents and its immediately adjacent characters (see
[Figure 5](#fig:shaping-arabic)). This is a technical solution used to represent the natural
connecting behaviour of the Arabic script. Moreover, multiple code
points can be represented by a single glyph, a so-called *ligature* (see
[Figure 6](#fig:shaping-ligatures)). These kinds of mappings are implemented using additional
instructions in the font. Note that
ligatures are a required orthographic principle of some scripts, such as
Arabic or Devanagari, while they are optional for others, such as Latin.

The mapping complexities are handled through the programmed instructions
in the font.

![The shaping process of the Arabic words](/assets/2022-03-21-elements-of-multi-script-typography-chapter-2/shaping-arabic.svg)

<figcaption id="fig:shaping-arabic"><strong>Figure 5:</strong> The shaping process of the Arabic words توت, زعتر ,بنت
shows different glyphs used for the letter ت (in red). In the Arabic
script, each selected form depends on the joining behaviour of the
character and its immediately adjacent characters (<a href="#ref:unicode-2021">The Unicode Standard,
2021, p. 381</a>). Step 1.: code points are mapped to default glyphs from a
font. Step 2.: the font instructions are used to select the correct
glyph following the script principles. Step 3.: all glyphs are
positioned in a sequence following the writing direction which is
right-to-left for the Arabic script. The font used is Nassim Arabic
Medium.
</figcaption>

![The shaping process of Arabic and English words with
ligatures](/assets/2022-03-21-elements-of-multi-script-typography-chapter-2/shaping-ligatures.svg)

<figcaption id="fig:shaping-ligatures"><strong>Figure 6:</strong> The shaping process of Arabic and English words with
ligatures. Step 1.: the code points are mapped to default glyphs from a
font. Step 2.: the font instructions are used to select the correct
contextual glyph following the script principles. Step 3.: ligature
glyphs are selected following the instructions in a font. Step 4.: all
glyphs are positioned in a sequence following the writing direction
which is right-to-left for the Arabic script and left-to-right for the
Latin script. The Arabic ligature represents two code points while the
Latin ligature represents three. Note that the Latin-script font does
not use any contextual glyphs, thus step 2 is skipped. The font used is
Nassim Arabic Medium in both cases.
</figcaption>

It is worth noting that code points might be in a different order to
what is useful for their visual representation. In this case, the
typesetting software performs glyph reordering to streamline the
organisation of glyphs based on their intended visual position rather
than on the phonetically-informed [order](#sn:phonetic-keyboard) of the input code points
(see [Figure 7](#fig:shaping-reordering)).

![Example of glyph reordering in the shaping process](/assets/2022-03-21-elements-of-multi-script-typography-chapter-2/shaping-reordering.svg)
{: .narrow}

<figcaption id="fig:shaping-reordering"><strong>Figure 7:</strong> Example of glyph reordering in the shaping process for a
Gujarati word in the Gujarati script. Steps 1. and 3. were described in
the previous figures. Step 2.: reordering of the vowel mark which is
typed after the main syllable, but positioned before it. The reordering
is handled by the shaping engine. The font used is Rasa Medium.
</figcaption>

Thirdly, the glyphs need to be positioned relative to each other. The
position of each glyph is defined by its boundaries, both vertical and
[horizontal](#sn:metrics) (see [Figure 8](#fig:glyph-boundaries)). These are represented as rectangles in the figures in this chapter. The boundaries of adjacent glyphs are aligned in the writing direction by default. Glyphs’ positions can be further adjusted using three different concepts:

- *kerning* (or *conditional spacing adjustment*) typically defines
additional horizontal or vertical adjustment for a pair (or a larger
group) of adjacent glyphs. See [Figure 9](#fig:kerning).
- *mark positioning* defines the position of a glyph (mark) relative to
another glyph (base glyph such as a letter or even another mark). The
boundaries of the mark glyph are ignored in this process. See [Figure 10](#fig:mark-positioning).
- *cursive attachment* defines the position of adjacent glyphs by aligning
predefined attachment points on each glyph. In this case the vertical
and horizontal position of the glyphs can change and their boundaries
are set to align with the attachment points. See [Figure 11](#fig:cursive-attachment).

The application of these concepts may depend on the context formed by
the adjacent glyphs.

![Glyph boundaries define the clearance around glyph
contours](/assets/2022-03-21-elements-of-multi-script-typography-chapter-2/glyph-boundaries.svg)

<figcaption id="fig:glyph-boundaries"><strong>Figure 8:</strong> Glyph boundaries define the clearance around glyph
contours. Note that the glyph contour can reach out of the boundaries
(example in the middle) and that typical boundaries of a Chinese
character (right) form a square. The fonts are (left to right): Rasa
Medium, Nassim Arabic Medium, Kozuka Mincho Pr6N Regular.
</figcaption>

![Kerning defines an offset for a pair of neighbouring
glyphs](/assets/2022-03-21-elements-of-multi-script-typography-chapter-2/kerning.svg)

<figcaption id="fig:kerning"><strong>Figure 9:</strong> Kerning defines an offset for a pair of neighbouring
glyphs. In the Latin script (left), the second glyph is moved closer to
reduce the space between the two glyphs. In the Gujarati script (right),
the objective is different: multiple glyphs create a single connected
shape representing a conjunct syllable. The font is Rasa Medium.
</figcaption>

![Examples of mark positioning](/assets/2022-03-21-elements-of-multi-script-typography-chapter-2/mark-positioning.svg)

<figcaption id="fig:mark-positioning"><strong>Figure 10:</strong> Mark positioning is used in the Devanagari script (left)
to position vowel and nasalisation marks. In the polytonic Greek
(right), it is used to position diacritical marks. The fonts are (left
to right): Adobe Devanagari Regular and Skolar PE Medium.
</figcaption>

![An example of cursive attachment](/assets/2022-03-21-elements-of-multi-script-typography-chapter-2/cursive-attachment.svg)

<figcaption id="fig:cursive-attachment"><strong>Figure 11:</strong> Cursive attachment is used in the Arabic script to ensure
joining and diagonal alignment. The font is Gulzar Regular. The
unpublished, about-to-be-released font, was supplied by Borna Izadpanah.
</figcaption>

A discussion of language support would not be complete without an
overview of the requirements of paragraph composition and potential
pitfalls in the conversion of contours to pixels. These will be covered
in the next chapter.

*I would like to thank John Hudson for his suggestions on an early draft
of this chapter.*

<aside id="sn:other-interpretations">The various non-typographic interpretations of digital texts, such as automated speech or translation, are not covered here.
</aside>

<aside id="sn:grapheme-definition">Depending on the definition of the term character (or grapheme) this may not be entirely correct. For example, the Unicode code points may also refer to peripheral elements, such as accent marks, or to invisible elements of writing, such as word spaces. They can also be used for special control instructions for the text rendering software.
</aside>

<aside id="sn:unicode-impact">The dramatic effects a Unicode inclusion or exclusion can have on cultures, languages, and scripts in the digital environment cannot be underestimated and merits a public discussion.
</aside>

<aside id="sn:vocal-group">In recent decades, internet and social media have shown that distinguishing the general preferences held by a large group of people from idiosyncratic preferences held by vocal individuals or smaller groups can be a daunting task.
</aside>

<aside id="sn:dead-key">The dead key mechanism comes from typewriters. In the digital environment, it allows users to type multiple keystrokes to input a single code point. It is typically used for Latin-script accents where the user types an accent followed by the base letter. Thus, a keyboard layout does not need to contain all possible combinations of letters and accents.
</aside>

<aside id="sn:opentype">In the case of the OpenType font format, the specification (<a href="#ref:opentype-2021">OpenType® Specification, 2021</a>) lists expected methods (called <em>features</em> in OpenType) that a font needs to support and describes what they need to do and how they are going to be used by a shaping engine to create word shapes or compose paragraphs. However, it does not specify the shaping implementation. Thus, different software may produce different shaping results.
</aside>

<aside id="sn:english-challenging">Admittedly, even typesetting of an English word may become more challenging when kerning, mark positioning, hyphenation, and justification come into play.
</aside>

<aside id="sn:reading-direction">One might also refer to a reading direction, but I try to stick to the terminology used in the Unicode Standard (<a href="#ref:unicode-2021">2021</a>).
</aside>

<aside id="sn:secondary-direction">The diagonal orientation of words in Arabic-script style Nastaliq or vertical stacking of syllables in scripts like Burmese, Devanagari, or Tibetan is considered a minor deviation from the overwhelmingly horizontal orientation of these scripts.
</aside>

<aside id="sn:phonetic-keyboard">Some languages use phonetic keyboards where the order of the keys struck follows the order of the sounds made by a speaker. However, some scripts do not follow this order. For example some vowels in the Indian scripts are represented by symbols that come before consonants, although they are pronounced after them.
</aside>

<aside id="sn:metrics">During font development some of the boundaries get defined globally for the whole font and individually for each glyph (<a href="#ref:opentype-2021">OpenType® Specification, 2021</a>).
</aside>

{% include cta-feedback.html %}

{% include cta-newsletter.html %}


## Further Reading

*Allsorts : Font parser, shaping engine, and subsetter for OpenType,
WOFF, and WOFF2 implemented in Rust*. (2022). The most recent version
available from [https://github.com/yeslogic/allsorts](https://github.com/yeslogic/allsorts)
{: id="ref:allsorts-2022"}

Berry, J. (Ed.) (2002). *Language culture type : international type
design in the age of Unicode*. ATypI and Graphis.
{: id="ref:berry-2002"}

Esfahbod, B. et al. (2022). *HarfBuzz manual*. The most recent version
available from [https://harfbuzz.github.io/index.html](https://harfbuzz.github.io/index.html)
{: id="ref:esfahbod-2022"}

*Graphite : A free and open rendering engine for complex scripts*.
(2013). SIL International. The most recent version available from
[https://scripts.sil.org/cms/scripts/page.php?site_id=projects&item_id=graphite_home](https://scripts.sil.org/cms/scripts/page.php?site_id=projects&item_id=graphite_home)
{: id="ref:graphite-2013"}

*TrueType Reference Manual*. (n d.). Apple Inc. The most recent version
available from [https://developer.apple.com/fonts/TrueType-Reference-Manual/](https://developer.apple.com/fonts/TrueType-Reference-Manual/)
{: id="ref:truetype-n-d"}

Vadgama, K. (2020) *Rendering complex scripts in digital spaces : the
development of layout and shaping technologies for complex script and
language representation and consequent approaches to type design*.
University of Reading. Unpublished dissertation available on request
from the author ([https://www.keyavadgama.com](https://www.keyavadgama.com)).
{: id="ref:vadgama-2020"}

## References

Hudson, J. (2000). *Windows glyph processing. An OpenType primer*.
Retrieved 22. 2. 2022, from [http://www.microsoft.com/typography/developers/opentype/default.htm](http://www.microsoft.com/typography/developers/opentype/default.htm)
{: id="ref:hudson-2000"}

Karaivanov, B. *За българската форма на кирилица \[On the Bulgarian form
of Cyrillic\]*. Lecture at SoftUni Creative on 15 April 2021.
{: id="ref:karaivanov-2021"}

*OpenType® Specification* (Version 1.9.) (2021). Microsoft Corp. The
most recent version available from [https://docs.microsoft.com/en-us/typography/opentype/spec/](https://docs.microsoft.com/en-us/typography/opentype/spec/)
{: id="ref:opentype-2021"}

*The Unicode Standard* (Version 14.0). (2021). The
Unicode Consortium. The most recent version is available from
[http://unicode.org](http://unicode.org)
{: id="ref:unicode-2021"}
