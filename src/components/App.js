import React from 'react';
import archieml from 'archieml';
import COPY from '../copy';
import { insertHighlighters, processSteps } from '../utils';
import { Header, Paragraph, Break, Subtitle, Title } from './content';
import LedeGraphic from './LedeGraphic';
import ScatterGraphic from './ScatterGraphic';
import CountsGraphs from './charts/CountsGraphs';
import GraphPair from './charts/GraphPair';
import injectSheet from 'react-jss';

const {
  headline,
  lede,
  nutgraf,
  engineering,
  computer_sciences,
  physical_sciences,
  mathematics_statistics,
  psychology_socialsciences,
  biological_sciences,
  earth_atmospheric_ocean,
} = archieml.load(COPY);

// IMPORTANT: DON'T OVER COMPLICATE SETTINGS. e.g. BY DEFAULT, ADD AXES
// INDICATORS TO FIRST FRAME of connected scatters

const ledeSteps = lede.map(step => {
  if (step.fields) {
    step.fields = step.fields.split(',');
  }
  step.text = insertHighlighters(step.text);
  return step;
});

const styles = {
  nerdBox: {
    padding: '0 20px',
    maxWidth: '500px',
    margin: '0 auto 2rem auto',
    lineHeight: 1.6,
    fontSize: '0.9rem',
    fontFamily: 'Lato',
    color: '#aaa',
  },
  shortLine: {
    marginBottom: '.7rem',
    width: '3rem',
    height: '1px',
    background: '#aaa',
  },
};
const App = ({ classes }) => (
  <div>
    <Header headline={headline} />

    <LedeGraphic steps={ledeSteps} />

    {nutgraf.map(text => <Paragraph key={text} text={text} />)}

    {engineering.map(({ type, value }) => {
      if (type === 'title') {
        return <Title key={value} text={value} />;
      } else if (type === 'subtitle') {
        return <Subtitle key={value} text={value} />;
      } else if (type === 'scatter') {
        return (
          <ScatterGraphic key={value.length} steps={processSteps(value)} />
        );
      } else if (type === 'text') {
        return <Paragraph key={value} text={value} />;
      } else if (type === 'counts_graphs') {
        return (
          <CountsGraphs
            key={value}
            names={value.split(';').map(s => s.trim())}
          />
        );
      }
    })}
    {computer_sciences.map(({ type, value }, i) => {
      if (type === 'title') {
        return <Title key={value} text={value} />;
      } else if (type === 'subtitle') {
        return <Subtitle key={value} text={value} />;
      } else if (type === 'scatter') {
        return (
          <ScatterGraphic key={value.length} steps={processSteps(value)} />
        );
      } else if (type === 'text') {
        return <Paragraph key={value} text={value} />;
      } else if (type === 'counts_graphs') {
        return (
          <CountsGraphs
            key={value}
            names={value.split(';').map(s => s.trim())}
            noTitle={i === 1}
          />
        );
      }
    })}
    {physical_sciences.map(({ type, value }, i) => {
      if (type === 'title') {
        return <Title key={value} text={value} />;
      } else if (type === 'subtitle') {
        return <Subtitle key={value} text={value} />;
      } else if (type === 'scatter') {
        return (
          <ScatterGraphic key={value.length} steps={processSteps(value)} />
        );
      } else if (type === 'text') {
        return <Paragraph key={value} text={value} />;
      } else if (type === 'counts_graphs') {
        return (
          <CountsGraphs
            key={value}
            names={value.split(';').map(s => s.trim())}
            noTitle={i === 1 || i === 2}
          />
        );
      } else if (type === 'graph_pair') {
        return (
          <GraphPair
            key={value}
            name={value.trim()}
            noTitle={i === 1 || i === 2}
          />
        );
      }
    })}
    {mathematics_statistics.map(({ type, value }, i) => {
      if (type === 'title') {
        return <Title key={value} text={value} />;
      } else if (type === 'subtitle') {
        return <Subtitle key={value} text={value} />;
      } else if (type === 'scatter') {
        return (
          <ScatterGraphic key={value.length} steps={processSteps(value)} />
        );
      } else if (type === 'text') {
        return <Paragraph key={value} text={value} />;
      } else if (type === 'counts_graphs') {
        return (
          <CountsGraphs
            key={value}
            names={value.split(';').map(s => s.trim())}
            noTitle={i === 1}
          />
        );
      } else if (type === 'graph_pair') {
        return (
          <GraphPair
            key={value}
            name={value.trim()}
            noTitle={i === 1 || i === 2}
          />
        );
      }
    })}
    {psychology_socialsciences.map(({ type, value }) => {
      if (type === 'title') {
        return <Title key={value} text={value} />;
      } else if (type === 'subtitle') {
        return <Subtitle key={value} text={value} />;
      } else if (type === 'scatter') {
        return (
          <ScatterGraphic key={value.length} steps={processSteps(value)} />
        );
      } else if (type === 'text') {
        return <Paragraph key={value} text={value} />;
      } else if (type === 'counts_graphs') {
        return (
          <CountsGraphs
            key={value}
            names={value.split(';').map(s => s.trim())}
          />
        );
      } else if (type === 'graph_pair') {
        return <GraphPair key={value} name={value.trim()} />;
      }
    })}
    {biological_sciences.map(({ type, value }) => {
      if (type === 'title') {
        return <Title key={value} text={value} />;
      } else if (type === 'subtitle') {
        return <Subtitle key={value} text={value} />;
      } else if (type === 'scatter') {
        return (
          <ScatterGraphic key={value.length} steps={processSteps(value)} />
        );
      } else if (type === 'text') {
        return <Paragraph key={value} text={value} />;
      } else if (type === 'counts_graphs') {
        return (
          <CountsGraphs
            key={value}
            names={value.split(';').map(s => s.trim())}
          />
        );
      } else if (type === 'graph_pair') {
        return <GraphPair key={value} name={value.trim()} />;
      }
    })}
    {earth_atmospheric_ocean.map(({ type, value }, i) => {
      if (type === 'title') {
        return <Title key={value} text={value} />;
      } else if (type === 'subtitle') {
        return <Subtitle key={value} text={value} />;
      } else if (type === 'scatter') {
        return (
          <ScatterGraphic key={value.length} steps={processSteps(value)} />
        );
      } else if (type === 'text') {
        return <Paragraph key={value} text={value} />;
      } else if (type === 'counts_graphs') {
        return (
          <CountsGraphs
            key={value}
            names={value.split(';').map(s => s.trim())}
            noTitle={i === 1}
          />
        );
      } else if (type === 'graph_pair') {
        return <GraphPair key={value} name={value.trim()} noTitle={i === 1} />;
      }
    })}

    <Break />

    <Paragraph
      text={
        'The steady line of stagnation among female representation in the graduate sciences, this closer look at the National Science Foundation shows, masks significant shifts and troubling declines in certain fields.'
      }
    />

    <Paragraph text={'<i>Enjoy leafing through our eleventh issue!</i>'} />
    <Paragraph
      text={
        '<a href="https://www.columbiaspectator.com/eye/issue/n/XXVI/10/" target="_blank">Previous Issue</a> | <a target="_blank" href="https://www.columbiaspectator.com/eye/issue/n/XXVI/11/">More In This Issue</a>'
      }
    />

    {/*<Paragraph textMMETHODOLOGY=/>*/}
    <div className={classes.nerdBox}>
      <div className={classes.shortLine} />
      <p>
        Sources: National Science Foundation Survey of Graduate Students and
        Postdoctorates in Science and Engineering
      </p>
      <p>
        Notes: Student populations by demographic are reported by universities
        to the National Science Foundation. They may contain mistakes or missing
        data.
      </p>

      <p>
        Peer institutions included the seven other Ivies, MIT, Stanford, and the
        University of Chicago.
      </p>

      <p>
        Anatomy, cell and molecular biology, ecology, neurobiology and
        neuroscience, chemical engineering, “engineering not elsewhere
        classified,” and mining engineering were excluded from individual
        analysis because they had data missing for more than half of the years
        of this analysis. Some empty data was assumed to be zero due to
        historical factors, notably the creation, destruction, or renaming of
        certain departments. Columbia did not report data for several other
        fields between 2001 and 2003; broader trends in this timeframe were
        ignored.
      </p>
    </div>
  </div>
);

export default injectSheet(styles)(App);
