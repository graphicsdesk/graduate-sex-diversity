export default `
This document is written in the markup language ArchieML (AML). AML makes it a lot easier to write structured text (text that can be directly copied and used in code). Text that is not bolded can be ignored.

headline: Gender representation among graduate students in science and engineering

{scatter_plots}

[.mechanical_engineering]

text: In 1994, there were six female and eighty three male graduate students in the mechanical engineering department.
maxYear: 1994
showAxesIndicators: true

text: 6.7% of the department was female.
maxYear: 1994
[.showGuides]
* 0.25
* 0.5
* 0.75
[]

text: In the next couple of years, the department neared gender parity due to a shrinking male population.
maxYear: 2000
[.showGuides]
* 0.25
* 0.5
* 0.75
[]

text: However, during the next decade, the male population would grow at a much faster rate than the female population...
maxYear: 2016
[.showGuides]
* 0.25
* 0.5
* 0.75
[]

text: ..driving Mechanical Engineering away from the gender equality line.
maxYear: 2016
showLine: true
[.showGuides]
* 0.5
[]

[]

`;
