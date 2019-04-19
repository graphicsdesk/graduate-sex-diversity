# Graduate Diversity

## Component design

`<App/>` reads the copy. It sends content into `content/` components and sends step directions into `<Graphic/>` components.

`<Graphic/>` implements `react-scrollama` and controls whether `<PercentGraph/>` or `<ScatterPlot/>` is visible. It sends numerical data and high-level instructions to these graphs.

`<ScatterPlot/>` contains the graph framework and animates in data.

`<PercentGraph />` renders lines according to data from `<Graphic/>`

## Notes

* When designing the connected scatter plot interactive, reference [this research](http://steveharoz.com/research/connected_scatterplot/) regarding the UX and intelligibility of connected scatter plots.

* If there's extra time, Annotate differences in each time interval like this [Times graphic](http://4.bp.blogspot.com/-hKr9ETXwdj4/UFjJWm7daEI/AAAAAAAAAxI/O5EMLZTu5Zw/s1600/02metrics-popup-v3.jpg)
