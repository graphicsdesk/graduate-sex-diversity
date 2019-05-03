export default `
This document is written in the markup language ArchieML (AML). AML makes it a lot easier to write and edit structured text that can be directly put into code.

headline: In Certain Science and Engineering Fields, Sex Diversity Among Graduate Students Is Stagnating. In Others, It’s Getting Worse.

[lede]

text: The percentage of female graduate students in <h>science and engineering</h> fields at Columbia has remained virtually unchanged since 1998.
fields: TOTALS

text: However, the overall stagnation in the representation of female graduate students in science and engineering shrouds a more complicated picture underneath.

text: Some fields have seen a large increase in the representation of female graduate students. From 2003 to 2016, <h>mathematics and statistics</h> quickly reached and maintained sex parity.
fields: Mathematics and statistics

text: But other fields have seen the reverse trend: a widening gap. During that same time frame, sex disparities have grown significantly in the physical sciences, especially in <h>physics</h>.
fields: Physics

[nutgraf]

* Despite this stagnation, <i>The Eye</i>’s analysis, which includes 30 fields in seven broad areas, found that the balance between the sexes in individual fields tended to align with their larger areas of study, and that the push toward parity in certain fields has been masking other fields’ trouble in narrowing their sex gap.

* Our analysis extends from 1994, the earliest year that such institution- and field-specific data was available from the <a href="https://nsf.gov/statistics/srvygradpostdoc/">National Science Foundation</a>, to 2016, the most recent. (Columbia did not report data for several fields between 2001 and 2003. See the methodology at the end of this article for further details.) In particular, we looked at the sex field, which offered the options “female” and “male” in the survey.

* While some numbers are troubling, the University has expressed its commitment to <a href="https://www.columbiaspectator.com/news/2018/09/13/new-faculty-diversity-data-shows-stagnation-in-percentage-of-black-latinx-faculty/">the expansion</a> of its <a href="https://bridgetophd.facultydiversity.columbia.edu/">Bridge to the Ph.D.</a> pipeline program, which encourages undergraduates from underrepresented groups to apply to Ph.D. programs in science, technology, engineering, and mathematics.

[+engineering]
title: Engineering
subtitle: Engineering includes the following fields: biomedical engineering; civil engineering; engineering science, mechanics, and physics; industrial and manufacturing engineering; electrical engineering; and mechanical engineering.
[.scatter]

text: In 1994, there were 57 female and 426 male graduate students in engineering fields at Columbia.
field: Engineering
maxYear: 1994

text: Up until 2010, the overall engineering student population saw dramatic growth, nearly tripling in size.
field: Engineering
maxYear: 2010
guides: 0.5

text: During this time, the male population consistently experienced a faster growth rate, so the female percentage of engineering students remained a meager 23 percent.
field: Engineering
maxYear: 2010
guides: 0.25, 0.5, 0.75

text: After 2010, however, the growth of female graduate students accelerated, and the field has since been trending toward sex parity.
field: Engineering
maxYear: 2016
showLine: true
guides: 0.25, 0.5

[]

Yet this increase in female population has been concentrated in only two fields: biomedical engineering and industrial and manufacturing engineering.

counts_graphs: Biomedical engineering; Industrial and manufacturing engineering

The other four fields in engineering also saw a significant increase in their graduate student populations, but their growth patterns only widened pre-existing sex disparities. The fields’ growth patterns are generally similar: Male and female populations grow at first, often quite rapidly. Soon after this initial rise, however, female population growth slows while the male population continues to grow, widening the sex gap.


counts_graphs: Mechanical engineering; Engineering science, mechanics, and physics; Electrical engineering; Civil engineering

Compared to those at peer institutions—such as other Ivies and elite institutions—these fields at Columbia, with the exception of “engineering science, mechanics, and physics,” which is not included in this comparison due to a lack of available data, have lagged behind in their percentage of female students in the last two decades. In the entirety of engineering, Columbia has risen from the bottom of the pack to just below average.

[+computer_sciences]

title: Computer Sciences

counts_graphs: Computer sciences

Women remain underrepresented in the computer sciences. In 1994, 19 percent of graduate students in the computer sciences were female. By 2016, this number had only risen to 22 percent.

The number of female graduate students stagnated in 2004, and did not start rising again until several years later. Between 1994 and 2016, the male population saw a significant net increase, though it saw a steady decline from 2002 until 2009, when it began rising with the female population.

From 2015 to 2016, the number of graduate students in the computer sciences fell dramatically. The male population decreased by 31 students; the female population decreased by 73.

[+physical_sciences]

title: Physical Sciences
subtitle: Physical sciences include the following fields: physics; chemistry; astronomy; and astrophysics.

graph_pair: Physical sciences

A rising female population and a wavering male population led the physical sciences to its highest-ever percentage of female graduate students, 37, in 2008. Since then, however, the female population in the physical sciences has fallen considerably. In 2016, less than 29 percent of graduate students in the physical sciences were women.


graph_pair: Physics

This decline in the number of women was largely driven by physics. Though the number of female graduate students in physics more than tripled in size from 1994 to 2006, it fell just as quickly in the following decade.

In 1994, Columbia was at the bottom of the pack among peer institutions in percentage of female graduate students in physics. By 2006, Columbia was almost leading the pack. But in recent years, it has returned to the bottom.


graph_pair: Chemistry

Chemistry contributed significantly to the physical sciences’ initial rise in female representation. In the first eight years of the 21st century, the number of men in chemistry grew, then shrunk dramatically. During this period, the number of women grew steadily, leading chemistry to its highest female percentage, 46, in 2008.

In the following years, however, with the male population slowly increasing and the female population slowly decreasing, the female percentage had fallen back to 37. That’s just one percentage point higher than in 1994, and nine points lower than its peak in 2008.

[+mathematics_statistics]
title: Mathematics and Statistics
subtitle: Mathematics and statistics includes the following fields: mathematics and applied mathematics; statistics.

graph_pair: Mathematics and statistics

Mathematics and statistics has seen a significant rise in female representation in the last two decades, likely contributing to the fact that Columbia has seen an overall stagnation rather than decline in graduate student sex diversity. In 1994, only 24 percent of graduate students in mathematics and statistics fields were women. By 2016, this number had grown to 49.

Columbia, once below average among peer institutions, is a leader in this percentage.


graph_pair: Statistics

Though statistics has long been a major contributor to this parity, this hasn’t always been the case. From 2000 to 2004, while male population growth accelerated, female population growth slowed, leading to a sex gap similar to those in the engineering fields. However, the field returned to parity in 2011 and has stayed there since.


graph_pair: Mathematics and applied mathematics

Mathematics and applied mathematics have seen a strong push toward parity as well. In 1994, only 13 percent of graduate students in mathematics and applied mathematics were women. By 2016, this number had risen to 42.

[+psychology_socialsciences]

title: Psychology and the Social Sciences
subtitle: Psychology and the social sciences includes the following fields: anthropology; psychology, general; economics; political science and government; sociology; and social sciences not elsewhere classified.

With a few exceptions, fields in psychology and the social sciences that have been male-dominated have remained male-dominated, and those that have been female-dominated have remained female-dominated.


counts_graphs: Anthropology; Psychology, general; Economics (except agricultural); Social sciences not elsewhere classified
(Social sciences not elsewhere classified include area studies, gender studies, and disability studies.)

The exceptions are political science and government and sociology, both of which have approached parity in the last two decades.

counts_graphs: Political science and government; Sociology

[+biological_sciences]
title: Biological Sciences
subtitle: Biological sciences includes the following fields: biometry and epidemiology; biosciences not elsewhere classified; biochemistry; biology; biophysics; genetics; microbiology, immunology, and virology; nutrition; pharmacology and toxicology; and physiology.

Two of the largest fields in the biological sciences, biometry and epidemiology and “biosciences not elsewhere classified” (which includes evolutionary and environmental biology) have seen an expanding disparity between the sexes.


counts_graphs: Biometry and epidemiology; Biosciences not elsewhere classified

All other fields in the biological sciences maintained or reached parity in the time frame of this analysis, but several are too small in size to discern a meaningful trend.

counts_graphs: Biochemistry; Biology; Biophysics; Genetics; Microbiology, immunology, and virology; Nutrition; Pharmacology and toxicology; Physiology

The gaps between the sexes in biometry and epidemiology and “biosciences not elsewhere classified” are clearly pronounced in the biological sciences overall.

graph_pair: Biological sciences

[+earth_atmospheric_ocean]
title: Earth, Atmospheric, and Ocean Sciences

graph_pair: Earth, atmospheric, and ocean sciences

Amid a significant, steady increase in student population, earth, atmospheric, and ocean sciences fields have reached and since surpassed sex parity.

`;
