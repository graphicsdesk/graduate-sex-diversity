export default `
This document is written in the markup language ArchieML (AML). AML makes it a lot easier to write and edit text that can be directly structured and used in code.

headline: In National Science Foundation Data, a New Look at Graduate Student Sex Diversity in Science and Engineering

[lede]

text: In the last two decades, female representation has quickly improved among graduate students in engineering fields.
[.disciplines]
name: Engineering
[]

text: It has risen from last place among all peer institutions to comfortably above the average, though it still lags far behind gender parity.
[.disciplines]
name: Engineering
showPeers: true
[]

text: Female representation among students in science fields has grown as well, albeit at a slower pace.
[.disciplines]
name: Engineering
showPeers: true
name: Science
showPeers: true
[]

text: But, each field has its own story.

text: In mathematics and biology, student populations are maintaining or quickly progressing towards equal representation.
[.fields]
name: Mathematics and applied mathematics
name: Biology
[]

text: Those in mechanical engineering and physics, however, are severely lagging behind or even regressing in female representation.
[.fields]
name: Mechanical engineering
name: Physics
[]

[]

[nutgraf]

* Overall, sex diversity is increasing among graduate students in science and engineering. But gender disparities still vary widely among the detailed fields, according to an Eye analysis.

* This analysis is based on data from the National Science Foundation’s Survey of Graduate Students and Postdoctorates in Science and Engineering, an annual census of all U.S. academic institutions.

* Broader trends, Advancement of Women, pipeline Praesent convallis odio turpis, in feugiat felis sollicitudin nec. Fusce in pharetra est. Phasellus fringilla tempor ornare. Ut augue diam, viverra at vulputate eu, eleifend a diam. (For details on how we did this analysis, see the note at the end of this article.)

[]

[scatter]

text: In 1994, there were 502 male and 70 female graduate students in engineering fields.
title: A Detailed Look at Engineering
discipline: Engineering
maxYear: 1994
showAxesIndicators: true

text: Up until 2010, the engineering student population saw dramatic growth, nearly tripling in size.
discipline: Engineering
maxYear: 2010
[.showGuides]
* 0.5
[]

text: Due to the male student population’s consistently greater growth rate, the percent makeup of female students in engineering stayed mostly constant during this time period.
discipline: Engineering
maxYear: 2010
[.showGuides] 
* 0.25
* 0.5
* 0.75
[]

text: After 2010, however, female student growth accelerated, and the field began tending towards gender parity.
discipline: Engineering
maxYear: 2016
showLine: true
[.showGuides]
* 0.25
* 0.5
[]

text: That accelerated growth has led to a visible increase in the percentage of female students in engineering fields.
discipline: Engineering
showPercentGraph: true
[.disciplines]
name: Engineering
[]

[]

[+engineering]

text: However, this increase in female representation has been concentrated in a minority of fields. It stems from Industrial and manufacturing engineering and Biomedical engineering, whose trend lines each saw a push toward gender parity in the last decade.

[.scatters]
* Industrial and manufacturing engineering
* Biomedical engineering
[]

text: The story is very different for the other four engineering fields. Among the students in mechanical engineering and engineering science, mechanics, and physics, the male population has grown at a consistently higher pace than the female population. For electrical and civil engineering, the representation of women remains stagnant.

[.scatters]
* Mechanical engineering
* Engineering science, mechanics, and physics
* Electrical engineering
* Civil engineering
[]

[]

`;
