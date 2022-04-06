---
layout: post
title: "Elements of multi-script typography: introduction"
date: 2021-05-18 9:50:00
categories:
    - Essay
authors:
    - David Březina
editor:
    - Mary Dyson
readingtime: 9 min read
theme: sand
intro: The first part of a mini-series focused on the typographic design of documents that make use of two or more different world’s scripts.
sharing_image: /assets/2021-05-18-elements-of-multi-script-typography-introduction/sharing_image.png
---

**Next chapter:** [codes, keys, and word shapes]({% post_url 2022-03-21-elements-of-multi-script-typography-chapter-2 %})

With increasingly globalised communication and markets, all kinds of multilingual documents and interfaces are becoming more common. Languages that previously had minimal contact are now set next to each other which brings new challenges on how to represent them well together.

This [mini-series](#sn:mini-series) focuses on the typographic design of documents that make use of two or more different world’s scripts. It discusses fundamental differences between the scripts with respect to layout and application of common design parameters such as proportion, weight, or alignment.

Since the purpose of this series is an orientation, a more general overview looking at scripts rather than languages seemed well-suited and manageable. A more thorough discussion of the subject would need to address specificities of individual languages rather than scripts.

The scripts used in the examples have been selected to explain the scripts’ interactions and general, transferable considerations, thus the resulting group is quite small. The selection is not intended to be representative of the appearance of all the scripts in the [world.](#sn:scripts)

Although not all-encompassing, hopefully the series achieves a discussion that addresses the most important considerations in a general-enough way to make them relevant across diverse design projects. The takeaway insights ought to apply to a printed multi-script book as well as an interactive user interface.

## Known unknowns

When working with multiple languages, some of them will be unfamiliar to the designer. A sensitive approach is critical as an unattended lack of typographic expertise with a language can lead to anything from a disheartening reading experience, rejection, frustration, to backlash, or publishers’ embarrassment in front of readers (see [Figures 1](#fig:figma) and [2](#fig:twitter-arrival)). Similarly to poorly translated texts, poorly typeset texts can raise negative connotations and cause confusion.

![A screenshot from Figma](/assets/2021-05-18-elements-of-multi-script-typography-introduction/figma-screenshot.png)

![A screenshot from Figma, corrected](/assets/2021-05-18-elements-of-multi-script-typography-introduction/figma-screenshot-corrected.png)

<figcaption id="figma"><strong>Figure 1:</strong> As of April 2021, the web design application <a href="https://figma.com">Figma</a> does not support correct mark positioning in the Devanagari script used for the Hindi language (top). The bottom screenshot shows my mockup of a correct placement of the nukta mark which may not correspond to the original design of the Adobe Devanagari typeface used here. Nonetheless, the top example would read as “hidi” while the bottom one would read as “Hindi”. What a difference one mark can make.</figcaption>

![A screenshot of a Twitter conversation](/assets/2021-05-18-elements-of-multi-script-typography-introduction/twitter-screenshot.png)
{: .narrow}

<figcaption id="twitter-arrival"><strong>Figure 2:</strong> A disenchanted Twitter user (<a href="#ref:morris-2021">Morris, 2021</a>) commenting on the poor handling of the Arabic typesetting in a major motion picture from a US production. The captions in the movie show Arabic texts with disconnected letters which is wrong.</figcaption>

Giving sufficient attention to every language and script and recognising their typographic prerequisites raises the bar regarding the skills and competence of designers. Ideally, they should have experience with design for all of the languages involved. An individual might not be competent enough: the combination of languages might be unusual, there might be just too many languages, the linguistically-able designer might lack in [design skills.](#sn:design-skills) A collaboration among experienced specialists is often advisable together with thorough research into the unfamiliar scripts and languages. The nature of the needs depends on the specificities of a project. While designing for an unfamiliar language using a familiar script may still be manageable with relatively modest research, designing for a completely unfamiliar script brings more challenges and unknowns. A designer who is only experienced in typesetting English books is likely to find typesetting of a French novel significantly easier than typesetting a Marathi novel in the Devanagari script.

Note that the need for understanding scripts’ prerequisites remains relevant even when collaborating. Designing documents involving two or more scripts can lead to the need to incorporate diverse visual requirements of those scripts within a single system. Finding a considerate and practical solution that accommodates multiple scripts hinges on shared knowledge and vocabulary.

Languages and scripts exist in the context of the culture and historical developments that influence design decisions. This is yet another case where a considerate approach and collaboration are crucial. For example: a dated typeface design may be a problematic choice for a progressive contemporary brand; different cultures may prefer different layouts for the same news ([Çanlıoğlu, 2013](#ref:canlioglu-2013)). While discussion of cultural and historical considerations is beyond the scope of this essay, the importance of research and review cannot be stressed enough in this respect.

## From languages to scripts

The term *script* as it is used here refers to a graphic system designed to represent a language ([Coulmas, 1989](#ref:coulmas-1989), [1996](#ref:coulmas-1996)). It is a collection of graphic signs that correspond to linguistic units such as letters, syllables, or words, and the rules regarding the way these should be [combined.](#sn:languages)

A single script can be used to write multiple languages, for example the Latin script is used to write English, Spanish, or Slovenian. It is not uncommon that a script is used exclusively for one language, e.g. the Greek script is used for the Greek language. Also, a single language can use multiple ways of writing, each with a different script, e.g. Central Kurdish can be written in either the Latin or Arabic script.

The word “script” can carry many different meanings. It may be used to describe a writing style, e.g. a cursive script; or a simple programming code, e.g. a Python script. Perhaps most commonly, there are scripts for movies and performances. To clarify that the discussion is about the written form of one of the world’s languages, one can refer to a *world’s script*. This is generally preferable to other frequent terms such as a *non-Latin script* which suggests a binary opposition of the Latin script and all other scripts, or a *global script* which implies that a script is used everywhere in the world rather than the script is of the world.

In the following text a script is used to mean a world’s script unless specified otherwise.

## Typographic objectives

The following sections discuss various design scenarios within multi-script typography. It would be disingenuous not to mention the context in which a design product gets created. Many of the decisions are informed by user comfort and needs ([Norman, 2013](#ref:norman-2013)), alternatively by fashion. However, the final outcome results from an amalgam of influences that go beyond the design discipline: economic constraints, marketing briefs, tight schedules, or ideologies held by the publisher, to name a few. All of these objectives may have a profound effect on the outcome.

Moreover, there are many ways in which a document could be used. This is obvious in user interface design, but when dealing with more traditional documents this may be less obvious. A printed document seems static, imposing a single set of design constraints based on its intended usage. In reality, different ways in which different readers use it to fulfil their objectives make those constraints more varied and complex. For example, a fluent reader might use a book in a different way than a beginner reader, an official document might be read thoroughly to digest all of its contents or skimmed quickly in search of critical data about the payment due for a parking ticket from last Wednesday. These are all relevant scenarios for which a good designer [caters.](#sn:scenarios)

Multi-script typography extends the list of influences and objectives even further. A bi-script document has to consider at least two cultural objectives, each usage scenario appears twice as well. Thus it is even more important to keep the diverse spectrum of influences and objectives in mind and resist the temptation to apply simple fit-it-all rules that promise, for example, the right proportion between two scripts applicable in any situation or the most efficient bi-scriptual layout.

On the other hand “it depends” without any pointers is hardly a useful answer for a practising designer. The upcoming instalments of this series will attempt to point out “what” it usually depends on and help to build a sensitivity to common pitfalls.

## Notes

<aside id="sn:mini-series">The series is based on a revised form of an essay written during my studies at the University of Reading in 2007. Hopefully, this version is clearer. I would like to express my gratitude to Fiona Ross, Filip Blažek, Jo de Baerdemaeker, Dan Rhatigan, and Mary Dyson who helped me either with the original or the current version of the text.
</aside>

<aside id="sn:scripts">To keep the scope feasible, the focus is on horizontally-written scripts. Scripts with a vertical alignment and more complicated character sets (e.g. Chinese, Korean, or Japanese) are omitted for the time being. In this context, vertical stacking of syllables and similar phenomena are perceived as only a small exception from the overall horizontal reading direction.
</aside>

<aside id="sn:design-skills">As one should not assume that a person who can speak a language is also literate in the language, it is not a given that a designer literate in a language is competent in designing for it. On the contrary, there are cases where designers who could not use a language, achieved a high degree of competence. A famous example is the work of Ranoji Raoji Aru, an illiterate punchcutter, who created popular Devanagari typefaces for the Nirnaya-Sagar Press, “types [that] are used in the whole of India” (<a href="#ref:balakrishna-2018">Balakrishna, 2018</a>; <a href="#ref:priolkar-1958">Priolkar, 1958, p. 103</a>). The wide acceptance of the work of many contemporary designers in similar circumstances speaks for itself.
</aside>

<aside id="sn:languages">Languages use different writing systems to map linguistic units (letters, syllables, words) to their graphic representations in a particular script, e.g. alphabet, syllabic alphabet. Thus, a script can be seen as an instance of the more general writing system (<a href="#ref:coulmas-1989">Coulmas, 1989</a>, <a href="#ref:coulmas-1996">1996</a>). For example, English uses the Latin script as an alphabetic system, the Hindi language uses the Devanagari script as a syllabic system, and the Chinese language uses the Chinese script as an ideographic system. Note that some linguists and designers use the terms writing system and script interchangeably (<a href="#ref:daniels-1996">Daniels & Bright, 1996</a>).
</aside>

<aside id="sn:scenarios">Stiff (<a href="#ref:stiff-1997">1997</a>) gives an eloquent analysis of the multifaceted role of footnotes.
</aside>

{% include cta-feedback.html %}

{% include cta-newsletter.html %}

## References

Balakrishna, S. (2018). Nirnayasagar press: a forgotten national treasure. *The Dharma Dispatch.* [https://www.dharmadispatch.in/history/nirnayasagar-press-a-forgotten-national-treasure](https://www.dharmadispatch.in/history/nirnayasagar-press-a-forgotten-national-treasure)
{: id="ref:balakrishna-2018"}

Çanlıoğlu, K. (2013, June 28). *Designing BBC World Service* [Conference presentation]. Ampersand 2013, Brighton, United Kingdom.
{: id="ref:canlioglu-2013"}

Coulmas, F. (1989). *The writing systems of the world.* Blackwell.
{: id="ref:coulmas-1989"}

Coulmas, F. (1996). *The Blackwell encyclopedia of writing systems.* Blackwell Publishers.
{: id="ref:coulmas-1996"}

Daniels, P. T., & Bright, W. (1996). *The world’s writing systems.* Oxford University Press.
{: id="ref:daniels-1996"}

Morris, I. D. [@iandavidmorris] (2021, April 5). *In Arrival—a film about language—what the HELL is this?*! [Image attached][Tweet]. Twitter. [https://twitter.com/iandavidmorris/status/1379137203570409475](https://twitter.com/iandavidmorris/status/1379137203570409475)
{: id="ref:morris-2021"}

Norman, D. A. (2013). *The design of everyday things.* Basic books.
{: id="ref:norman-2013"}

Priolkar, A. K. (1958). *The printing press in India : its beginnings and early development : being a quartercentenary commemoration study of the advent of printing in Indian (in 1556).* Marathi Samshodhana Mandala.
{: id="ref:priolkar-1958"}

Stiff, P. (1997). ‘A footnote kicks him’: How books make readers work. *Journal of Scholarly Publishing*, 28, 65-73.
{: id="ref:stiff-1997"}
