export default `
This document is written in the markup language ArchieML (AML). AML makes it a lot easier to write and edit structured text that can be directly copy-pasted into code.

headline: National Science Foundation Data Reveals Disparities in _____  Graduate Student Sex Diversity in Science and Engineering

[lede]
text: In 1994, there were 665 female and 1525 male graduate students in science and engineering.
maxYear: 1994

text: In the next couple of years, the female population saw a slight increase, and science and engineering graduate students drew closer to parity.
maxYear: 2000
guides: 0.25, 0.5, 0.75

text: Since 2004, the number of graduate students in science and engineering has grown dramatically due to considerable growth in engineering, mathematics, and physical sciences fields. 
note: Columbia did not report data for several fields between 2001 and 2003. See the methodology at the end of this article for further details.
maxYear: 2016
guides: 0.5

text: However, because the number of men has consistently grown faster than the number of women, female percentage among science and engineering graduate students has wavered around 40 for the last decade.
maxYear: 2016
guides: 0.4, 0.5
showLine: true

text: But, this stagnation hides extremely disparate trendlines in gender representations among fields in science and engineering.

text: During the timeframe of this analysis, despite a tenfold increase in size, the graduate students in statistics have maintained parity.
field: Statistics
guides: 0.5
maxYear: 2016
showLine: true

text: Yet in mechanical engineering, field has strayed further and further from parity.
field: Mechanical engineering
guides: 0.2,0.5
maxYear: 2016
showLine: true

[]

[nutgraf]

* Sex diversity among graduate students in science and engineering is virtually unchanged since 1998. The Eye analysis includes thirty one fields in seven broad areas. It extends from 1994, the earliest year that such institution-level, field-specific data was available from the National Science Foundation, to 2016, the most recent.

* The University’s only Arts and Sciences pipeline program, the Bridge to the Ph.D. in Natural Sciences, will be expanding next year to include all fields in science, technology, engineering, and mathematics. “We do need our leading scholars in the nation to have the ability to assess or reassess themselves and we hope reports and having transparency in data can help us do those things,” Dennis Mitchell, Vice Provost for Faculty Advancement, said in an interview with Spectator last fall.

* The NSF data does not point to particular causes of the trends presented.

[]

[+engineering]

title: In many engineering fields, rapid growth leaves female students behind

scatter: Engineering

text: Each of the six engineering fields we analyzed saw a significant increase in their graduate student populations. Most exhibited a similar pattern during this growth: Male and female populations would grow together at first, often quite rapidly. Soon after, however, female population growth would slow, and the male population would continue to grow much faster.
`;
