---
layout: post
title: Elements of multi-script typography, part 1
date: 2021-02-05 11:16:57
categories:
    - Series
authors:
    - David Březina
editor:
    - Mary Dyson
readingtime: 5 min read
---

## Introduction

<aside>
<p><strong>1:</strong> The series is based on a revised form of an essay written during my studies at the University of Reading in 2007. Hopefully, this version is clearer. I would like to express my gratitude to Fiona Ross, Filip Blažek, Jo de Baerdemaeker, and Dan Rhatigan who helped me either with the original or the current version of the text.</p>
<p><strong>2:</strong> To keep the scope feasible, the focus is on horizontally-written scripts. Scripts with a vertical alignment and more complicated character sets (e.g. Chinese, Korean, or Japanese) are omitted for the time being. In this context, vertical stacking of syllables and similar phenomena are perceived as only a small exception from the overall horizontal reading direction.</p>
</aside>

With increasingly globalised communication and markets, all kinds of multilingual documents and interfaces are becoming more common. Languages that previously had minimal contact are now set next to each other which brings new challenges on how to represent them well together.

This mini-series<span class="sidenotemark">1</span> focuses on the typographic design of documents that make use of two or more different world’s scripts. It discusses fundamental differences between the scripts with respect to layout and application of common design parameters such as proportion, weight, or alignment.

Since the purpose of this series is an orientation, a more general overview looking at scripts rather than languages seemed well-suited and manageable. A more thorough discussion of the subject would need to address specificities of individual languages rather than scripts.

The scripts used in the examples have been selected to explain the scripts’ interactions and general, transferable considerations, thus the resulting group is quite small. The selection is not intended to be representative of the appearance of all the scripts in the world.<span class="sidenotemark">2</span>

Although not all-encompassing, hopefully the series achieves a discussion that addresses the most important considerations in a general-enough way to make them relevant across diverse design projects. The takeaway insights ought to apply to a printed multi-script book as well as an interactive user interface.

## Known unknowns

<aside>
<p><strong>3:</strong> As one should not assume that a person who can speak a language is also literate in the language, it is not a given that a designer literate in a language is competent in designing for it. On the contrary, there are cases where designers who could not use a language, achieved a high-degree of competence. [reference]</p>
</aside>

When working with multiple languages, some of them will be unfamiliar to the designer. A sensitive approach is critical as an unattended lack of typographic expertise with a language can lead to anything from a disheartening reading experience, rejection, frustration, to backlash, or publishers’ embarrassment in front of the readers. [illustrate with one or two bad examples] Similarly to poorly translated texts, poorly typeset texts can raise negative connotations and cause confusion.

Giving sufficient attention to every language and script and recognising their typographic prerequisites raises the bar regarding the skills and competence of designers. Ideally, they should have experience with design for all of the languages involved. An individual might not be competent enough: the combination of languages might be unusual, there might be just too many languages, the linguistically-able designer might lack in design skills.<span class="sidenotemark">3</span>

A collaboration among experienced specialists is often advisable together with thorough research into the unfamiliar scripts and languages. The nature of the needs depends on the specificities of a project. While designing for an unfamiliar language using a familiar script may still be manageable with relatively modest research, designing for a completely unfamiliar script brings more challenges and unknowns. A designer who is only experienced in typesetting English books is likely to find typesetting of a French novel significantly easier than typesetting a Marathi novel in the Devanagari script.

Note that the need for understanding scripts’ prerequisites remains relevant even when collaborating. Designing documents involving two or more scripts can lead to the need to incorporate diverse visual requirements of those scripts within a single system. Finding a considerate and practical solution that accommodates multiple scripts hinges on shared knowledge and vocabulary.

Languages and scripts exist in the context of the culture and historical developments that influence design decisions. This is yet another case where a considerate approach and collaboration are crucial. For example: a dated typeface design may be a problematic choice for a progressive contemporary brand, different cultures may prefer different layouts for the same news [reference to BBC redesign]. While discussion of cultural and historical considerations is beyond the scope of this essay, the importance of research and review cannot be stressed enough in this respect.

## From languages to scripts

<aside>
<p><strong>4:</strong> Languages use different <em>writing systems</em> to map linguistic units (letters, syllables, words) to their graphic representations in a particular script, e.g. alphabet, syllabic alphabet. Thus, a script can be seen as an instance of the more general writing system (Coulmas, 1989 & 1996). For example, English uses the Latin script as an alphabetic system, the Hindi language uses the Devanagari script as a syllabic system, and the Chinese language uses the Chinese script as an ideographic system. Note that some linguists and designers use the terms writing system and script interchangeably (Daniels & Bright, 1996).</p>
</aside>

The term *script* as it is used here refers to a graphic system designed to represent a language (Coulmas, 1989 & 1996). It is a collection of graphic signs that correspond to linguistic units such as letters, syllables, or words, and the rules regarding the way these should be combined.<span class="sidenotemark">4</span>

A single script can be used to write multiple languages, for example the Latin script is used to write English, Spanish, or Slovenian. It is not uncommon that a script is used exclusively for one language, e.g. the Greek script is used for the Greek language. Also, a single language can use multiple ways of writing, each with a different script, e.g. Central Kurdish can be written in either the Latin or Arabic script.

The word “script” can carry many different meanings. It may be used to describe a writing style, e.g. a cursive script, or a simple programming code, e.g. a Python script. Perhaps most commonly, there are scripts for movies and performances. To clarify that the discussion is about the written form of one of the world’s languages, one can refer to a *world’s script*. This is generally preferable to other frequent terms such as a *non-Latin script* which suggests a binary opposition of the Latin script and all other scripts, or a *global script* which implies that a script is used everywhere in the world rather than the script is of the world.

In the following text a script is used to mean a world’s script unless specified otherwise.

## Typographic objectives

The following sections discuss various design scenarios within multi-script typography. It would be disingenuous not to mention the context in which a design product gets created. Many of the decisions are informed by user comfort and needs [human-centred design], alternatively by fashion. However, the final outcome results from an amalgam of influences that go beyond the design discipline: economical constraints, marketing briefs, tight schedules, or ideologies held by the publisher, to name a few. All of these objectives may have a profound effect on the outcome.

Moreover, there are many ways in which a document could be used. This is one of the fundamental ideas in user interface design,[reference] but when dealing with more traditional documents this may be less obvious. A printed document seems static, imposing a single set of design constraints based on its intended usage. In reality, different ways in which different readers use it to fulfil their objectives make those constraints more varied and complex. For example, a fluent reader might use a book in a different way than a beginner reader, an official document might be read thoroughly to digest all of its contents or skimmed quickly in search of critical data about the payment due for a parking ticket from last Wednesday. These are all relevant scenarios for which a good designer caters (Paul Stiff (1997) gives an eloquent analysis of the multifaceted role of footnotes).

Multi-script typography extends the list of influences and objectives even further. A bi-script document has to consider at least two cultural objectives, each usage scenario appears twice as well. Thus it is even more important to keep the diverse spectrum of influences and objectives in mind and resist the temptation to apply simple fit-it-all rules. that promise, for example, the right proportion between two scripts applicable in any situation or the most efficient bi-scriptual layout.

On the other hand “it depends” without any pointers is hardly a useful answer for a practising designer. The upcoming instalments of this series will attempt to point out “what” it usually depends on and help to build a sensitivity to common pitfalls.

## References

Coulmas, F. (1989). *The writing systems of the world.* Oxford: Blackwell.

Coulmas, F. (1996). *The Blackwell encyclopedia of writing systems.* Oxford: Blackwell Publishers.

Daniels, P. T., & Bright, W. (1996). *The World’s Writing Systems.* New York: Oxford University Press on Demand.

Stiff, P. (1997). ‘A footnote kicks him’ : How Books Make Readers Work. *Journal of Scholarly Publishing*, 28, 65-73.