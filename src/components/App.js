import React from 'react';
import archieml from 'archieml';
import COPY from '../copy';
import { insertHighlighters, processSteps } from '../utils';
import { Header, Paragraph, Break, Subtitle, Title } from './content';
import LedeGraphic from './LedeGraphic';
import ScatterGraphic from './ScatterGraphic';
import CountsGraphs from './charts/CountsGraphs';
import GraphPair from './charts/GraphPair';

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

const App = () => (
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
            noTitle={i === 1}
          />
        );
      } else if (type === 'graph_pair') {
        return <GraphPair key={value} name={value.trim()} />;
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
        return <GraphPair key={value} name={value.trim()} />;
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

    {/*<Paragraph text=/>*/}
  </div>
);

export default App;
