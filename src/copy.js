export default `
This document is written in the markup language ArchieML (AML). AML makes it a lot easier to write and edit structured text that can be directly copy-pasted into code.

headline: National Science Foundation Data Reveals Disparities in _____  Graduate Student Sex Diversity in Science and Engineering

[lede]

text: The percentage of women among graduate students in science and engineering fields is virtually unchanged since 1998.
fields: TOTALS

text: But active perpetuation, dismantling, or even widening of certain gender gaps underlie this apparent immobility, and these behaviors vary significantly by subject area.

text: In mathematics fields, representation of women is quickly rising. In the last decade, statistics has reached and since maintained gender parity.
fields: Statistics

text: On the other hand, during this same timeframe, gender disparities have grown significantly in the physical sciences: in physics, female percentage fell from 28 percent in 2007 to just 10 percent in 2016.
fields: Physics

[]

[nutgraf]

* Nut (in pieces):

* Overall, sex diversity has stagnated among graduate students in science and engineering.

* The Eye analysis includes thirty fields in seven broad areas. It extends from 1994, the earliest year that such institution- and field-specific data was available from the National Science Foundation, to 2016, the most recent.

* Moving forward, the University remains committed to the expansion of the Bridge to the Ph.D. pipeline program, which encourages undergraduates from underrepresented groups to apply to Ph.D. programs in science, technology, engineering, and mathematics.

* The NSF data does not point to particular causes of the trends presented.


[]

[scatter]

text: In 1994, there were 426 male and 57 female graduate students in engineering fields.
field: Engineering
maxYear: 1994

text: Up until 2010, the engineering student population saw dramatic growth, nearly tripling in size.
note: Columbia did not report data for several fields between 2001 and 2003. See the methodology at the end of this article for further details.
field: Engineering
maxYear: 2010
guides: 0.5

text: Due to the male student population’s consistently greater growth rate, the percent makeup of female students in engineering had stayed mostly constant during this growth.
field: Engineering
maxYear: 2010
guides: 0.25, 0.5, 0.75

text: After 2010, however, female student growth accelerated, and the field began tending towards gender parity.
field: Engineering
maxYear: 2016
showLine: true
guides: 0.25, 0.5

[]

`;
