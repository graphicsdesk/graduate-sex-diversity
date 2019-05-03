# Graduate Diversity

## Notes

* Add little arrows to the connected scatter plot (see `notebooks/README.md`)

* When designing the connected scatter plot interactive, reference [this research](http://steveharoz.com/research/connected_scatterplot/) regarding the UX and intelligibility of connected scatter plots.

* If there's extra time, annotate differences in each time interval like this [Times graphic](http://4.bp.blogspot.com/-hKr9ETXwdj4/UFjJWm7daEI/AAAAAAAAAxI/O5EMLZTu5Zw/s1600/02metrics-popup-v3.jpg)

## Component design

`<App/>` reads the copy. It sends content into `content/` components and sends graphics instructions into `src/` level components (e.g. `<AreaGraphic>`, `<ScatterGraphic>`).

`<ScatterGraphic/>` implements `react-scrollama` and controls whether `<PercentGraph/>` or `<CountsGraphs/>` is visible. It sends numerical data and high-level instructions to these graphs.

`<PercentGraph/>` contains the graph framework and animates in data. It controls the placement of `<Line/>`'s and `<Point/>`'s.

`<Point/>` can also render a `<PointLabel/>`. The label can respect the space of another point. _Add option for avoiding second point?_
