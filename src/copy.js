export default `
This document is written in the markup language ArchieML (AML). AML makes it a lot easier to write and edit structured text that can be directly put into code.

headline: National Science Foundation Data Reveals Wide-Varying Disparities in Columbia Graduate Student Sex Diversity in Science and Engineering

[lede]

text: The percentage of female graduate students in <h>science and engineering</h> fields is virtually unchanged since 1998.
fields: TOTALS

text: The general stagnation in the representation of female graduate students in science and engineering shrouds a more complicated picture underneath, however.

text: Some fields have seen a large increase in the representation of female graduate students. In the last decade, <h>mathematics and statistics</h> quickly reached and maintained gender parity.
fields: Mathematics and statistics

text: But other fields have seen the reverse trend, a widening gap. During that same timeframe, gender disparities have grown significantly in the physical sciences, especially in <h>physics</h>.
fields: Physics, Mathematics and statistics

[nutgraf]

* Despite the overall stagnation, The Eye’s analysis, which includes thirty fields in seven broad areas, found that individual fields’ gender balances tended to align with their larger areas of study, and that certain fields have been masking other fields’ trouble in narrowing their gender gap. Our analysis extends from 1994, the earliest year that such institution- and field-specific data was available from the National Science Foundation, to 2016, the most recent. In particular, we looked at the sex field, which offered the options “female” and “male” in the survey.

* While some numbers are troubling, the University has expressed its commitment to the expansion of the Bridge to the Ph.D. pipeline program, which encourages undergraduates from underrepresented groups to apply to Ph.D. programs in science, technology, engineering, and mathematics.

* The NSF data does not point to particular causes of the trends presented.


[+engineering]
title: Engineering
[.scatter]

text: In 1994, there were 57 female and 426 male graduate students in engineering fields.
field: Engineering
maxYear: 1994

text: Up until 2010, the overall engineering student population saw dramatic growth, nearly tripling in size.
note: Columbia did not report data for several fields between 2001 and 2003. See the methodology at the end of this article for further details.
field: Engineering
maxYear: 2010
guides: 0.5

text: During this time, the male population consistently experienced a faster growth rate, so the female percentage among engineering students remained at meager 23%.
field: Engineering
maxYear: 2010
guides: 0.25, 0.5, 0.75

text: After 2010, however, the growth of female graduate students accelerated, and the field has since been trending towards gender parity.
field: Engineering
maxYear: 2016
showLine: true
guides: 0.25, 0.5

[]

Yet this increase in female population has been concentrated in only two fields: biomedical engineering and industrial and manufacturing engineering.

counts_graphs: Biomedical engineering; Industrial and manufacturing engineering

The other four fields in engineering also saw a significant increase in their graduate student populations, though their growth patterns only widened pre-existing gender gaps. The fields’ growth patterns are generally very similar: Male and female populations grow at first, often quite rapidly. Soon after, however, female population growth slows while the male population continues to grow, leading to a widening gender gap.

counts_graphs: Mechanical engineering; Engineering science, mechanics, and physics; Electrical engineering; Civil engineering

Compared to peer institutions—which include other Ivies and elite institutions—these fields, with the exception of ‘engineering science, mechanics, and physics,’ which is not included in this comparison due to a lack of available data, have lagged behind in their percentage of female students in the last two decades. In the entirety of engineering, Columbia has risen from the bottom of the pack to just below average.

[+computer_sciences]

title: In the Computer Sciences, Rapid Overall Growth Leaves Women Behind

counts_graphs: Computer sciences

Women remain underrepresented in the computer sciences. In 1994, 19 percent of graduate students in the computer sciences were female. By 2016, this number had risen only to 22 percent.

Though the number of female graduate students stagnated in 2004, it did not start rising again until several years later. During this time frame, the male population saw a significant net increase, though it had. It saw a steep decline until 2009, when it began rising with the female population.

From 2015 to 2016, the number of graduate students in the computer sciences fell dramatically. The male population decreased by 31 students; the female population decreased by 73.

[+physical_sciences]

title: The Physical Sciences: A Different Trajectory After 2008

graph_pair: Physical sciences

A rising female population and a wavering male population led the physical sciences to its highest female percentage of 37 percent in 2008. Since then, however, the number of female graduate students in the physical sciences has fallen considerably. In 2016, less than 29 percent of graduate students in the physical sciences were women.


graph_pair: Physics

This drop in the number of women was largely driven by physics. Though the number of female graduate students in physics had more than tripled in size from 1994 to 2006, it has fallen just as quickly in the following decade.

In 1994, Columbia was at the bottom of the pack among peer institutions in female percentage among graduate students in physics. By 2006, Columbia was almost leading the pack. But in recent years, it has returned to the bottom.


graph_pair: Chemistry

Chemistry contributed significantly to the physical sciences’ initial rise in female percentage. In the first eight years of the 21st century, the number of men in chemistry grew, then shrunk, dramatically. During this period, the number of women grow steadily, leading chemistry to its highest female percentage, 46, in 2008.

In the following years, however, with the male population slowly increasing and the female population slowly decreasing, female percentage had fallen back to 37. That is just one percentage point higher than in 1994, and nine points lower than its peak in 2008.

[+mathematics_statistics]
title: Mathematics and Statistics

graph_pair: Mathematics and statistics

Mathematics and statistics has seen a significant rise in female representation in the last two decades, likely contributing to the stagnation, rather than decline, we’re seeing overall. In 1994, only 24 percent of graduate students in mathematics and statistics fields were women. By 2016, this number had risen to 49.

Columbia, once below average among peer institutions, is leading its peers in this percentage.


graph_pair: Statistics

Though statistics has long been a major contributor to that parity, this hasn’t always been the case. From 2000 to 2004, while male population growth accelerated, female population growth slowed, leading to a gender gap similar to those in the engineering fields. However, the field returned to parity in 2011 and has stayed there since.


graph_pair: Mathematics and applied mathematics
Mathematics and applied mathematics have been a strong force toward parity as well. In 1994, only 13 percent of graduate students in mathematics and applied mathematics were women. By 2016, this number had risen to 42.


[+psychology_socialsciences]

title: Psychology and the Social Sciences

With a few exceptions, fields in psychology and the social sciences that are male-dominated have remained male-dominated, and those that are female-dominated have remained female-dominated.

counts_graphs: Anthropology; Psychology, general; Economics (except agricultural); Social sciences not elsewhere classified

The exceptions are political science and government and sociology, which have both approached parity in the last two decades.

counts_graphs: Political science and government; Sociology

[+biological_sciences]
title: Biological Sciences
Two of the largest fields in the biological sciences, biometry and epidemiology and “biosciences not elsewhere classified” (which includes evolutionary and environmental biology) have developed a growing gender gap.

counts_graphs: Biometry and epidemiology; Biosciences not elsewhere classified

All other fields in the biological sciences maintained or reached parity during the time frame of this analysis, but several are too small in size to discern a meaningful trend.

counts_graphs: Biochemistry; Biology; Biophysics; Genetics; Microbiology, immunology, and virology; Nutrition; Pharmacology and toxicology; Physiology

We can see that the gender gaps in biometry and epidemiology and “biosciences not elsewhere classified” are clearly pronounced in the overall biological sciences.

graph_pair: Biological sciences


[+earth_atmospheric_ocean]
title: Earth, Atmospheric, and Ocean Sciences

graph_pair: Earth, atmospheric, and ocean sciences

Amid a significant increase in student population; earth, atmospheric, and ocean sciences fields have reached and passed parity.

`;
