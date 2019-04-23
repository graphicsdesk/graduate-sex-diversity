export default `
This document is written in the markup language ArchieML (AML). AML makes it a lot easier to write and edit text that can be directly structured and used in code.

headline: Female representation among graduate students in science and engineering

[.body]
* The Eye has done an analysis, nutgraf, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris odio, tempor in consectetur non, molestie nec tellus. Sed eu efficitur mauris. Phasellus luctus nulla quam. Nam id dictum nunc. Suspendisse potenti. Cras at nisi ante.
* Praesent convallis odio turpis, in feugiat felis sollicitudin nec. Fusce in pharetra est. Phasellus fringilla tempor ornare. Ut augue diam, viverra at vulputate eu, eleifend a diam.
[]

{scatter_plots}

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
