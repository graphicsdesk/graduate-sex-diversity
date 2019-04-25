export default `
This document is written in the markup language ArchieML (AML). AML makes it a lot easier to write and edit text that can be directly structured and used in code.

headline: In National Science Foundation Data, a New Look at Graduate Student Sex Diversity in Science and Engineering

[lede]

text: In 1994, there were 502 male and 70 female graduate students in engineering fields.
discipline: Engineering
maxYear: 1994
showAxesIndicators: true

text: After 2000, the engineering student population saw dramatic amounts of growth, nearly tripling in size before 2010.
discipline: Engineering
maxYear: 2010
[.showGuides]
* 0.5
[]

text: However, because the male student population grew at a faster rate than the female one, the percent makeup of females in engineering stayed mostly constant.
discipline: Engineering
maxYear: 2010
[.showGuides] 
* 0.25
* 0.5
* 0.75
[]

text: After 2010, however, as the growth of the female population accelerated, the line begins to curve toward the gender parity line.
discipline: Engineering
maxYear: 2016
showLine: true
[.showGuides]
* 0.25
* 0.5
[]

text: That accelerated growth has led to a visible increase in female percent representation among graduate students in engineering fields.
discipline: Engineering
showPercentGraph: true
[.disciplines]
name: Engineering
[]

text: Before 2010, female students were more underrepresented at Columbia than at almost all of its peer institutions. However, after 2010, Columbia rose to above the middle of the pack.
discipline: Engineering
showPercentGraph: true
[.disciplines]
name: Engineering
showPeers: true
[]

text: As for graduate students in science fields, female representation, with a few twists and turns, has inched towards parity as well.
discipline: Science
maxYear: 2016
showLine: true
[.showGuides]
* 0.5
[]

text: Over the last 20 years, the share of female graduate students in science increased by nearly ten percentage points. Among peer institutions, Columbia has remained about the middle of the pack.
discipline: Science
showPercentGraph: true
[.disciplines]
name: Science
showPeers: true
[]

[]

[body]

* The Eye analyzed a shit ton of data from the National Science Foundation, nutgraf, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris odio, tempor in consectetur non, molestie nec tellus. Sed eu efficitur mauris. Phasellus luctus nulla quam. Nam id dictum nunc. Suspendisse potenti.

* Broader trends, Advancement of Women, Praesent convallis odio turpis, in feugiat felis sollicitudin nec. Fusce in pharetra est. Phasellus fringilla tempor ornare. Ut augue diam, viverra at vulputate eu, eleifend a diam. (For details on how we did this analysis, see the note at the end of this article.)

* We’ve found that while the representation of women has continued to be much more pronounced in medicinal and social science fields, the representation of women in many engineering and physical sciences fields has made little, no, or, even backwards progress.

* One such field is mechanical engineering.

[]

[methodology]

* Data was exported from the NSF’s new interactive tool.
`;
