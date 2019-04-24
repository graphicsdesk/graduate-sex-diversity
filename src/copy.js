export default `
This document is written in the markup language ArchieML (AML). AML makes it a lot easier to write and edit text that can be directly structured and used in code.

headline: In a Fat Survey, a New Look at Graduate Student Sex Diversity in Science and Engineering

[overall]

text: From 1994 to 2005, female representation among graduate students in science and engineering rose by 10 percentage points.
maxYear: 2005

text: However, in the last decade, it declined to 40 again. It's since stagnated.
maxYear: 2016

text: Among peer institutions, Columbia went from above average to middle of the pack.
maxYear: 2016
showPeers: true

text: Which fields are contributing to this lag in diversity?
maxYear: 2016
showPeers: true

[]

[body]

* The Eye analyzed a shit ton of data from the National Science Foundation, nutgraf, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris odio, tempor in consectetur non, molestie nec tellus. Sed eu efficitur mauris. Phasellus luctus nulla quam. Nam id dictum nunc. Suspendisse potenti.

* Broader trends, Advancement of Women, Praesent convallis odio turpis, in feugiat felis sollicitudin nec. Fusce in pharetra est. Phasellus fringilla tempor ornare. Ut augue diam, viverra at vulputate eu, eleifend a diam.

* We’ve found that while the representation of women has continued to be much more pronounced in medicinal and social science fields, the representation of women in many engineering and physical sciences fields has made little, no, or, even backwards progress.

* One such field is mechanical engineering.

[]

{scatters}

[.mechanical_engineering]

text: In 1994, there were six female and eighty three male graduate students in the mechanical engineering department.
maxYear: 1994
showAxesIndicators: true

text: 6.7% of students in the department was female.
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
* 0.5
[]

text: ...driving Mechanical Engineering away from the gender equality line.
maxYear: 2016
showLine: true
[.showGuides]
* 0.5
[]

[]

{}
`;
