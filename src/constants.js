import nanoid from 'nanoid';

/* Dimensions */

export const SCATTER_BREAK = 768;

/* Names */

export const COLUMBIA_NAME = 'Columbia University in the City of New York';

/* Times */

export const START_YEAR = 1994;
export const END_YEAR = 2016;

export const years = [];
for (let i = START_YEAR; i < END_YEAR + 1; i++)
  years.push(i);

export const LINE_ANIM_DURATION = 420;
export const QUEUE_DELAY = LINE_ANIM_DURATION / 3;

/* IDs */

const createIdStore = () => {
  const ids = {};
  return graphicId => {
    if (!(graphicId in ids)) return (ids[graphicId] = nanoid());
    return ids[graphicId];
  };
};

export const fullArrowId = createIdStore();

export const skinnyArrowId = createIdStore();

/* Values */

export const POSSIBLE_GUIDES = [0.25, 0.5, 0.75];

/* Colors */

const COLORS = {
  totals: {
    primary: '#5c86ff',
    secondary: '#a1c5d2',
  },
  'mathematics and statistics': {
    primary: '#4cd3a1',
    secondary: '#99D9C9',
  },
  physics: {
    primary: '#f03c6a',
    secondary: '#FEABC5',
  },
};

export const primaryColor = str => {
  let field = str.toLowerCase();
  if (field === 'science and engineering')
    field = 'totals';
  return COLORS[field] ? COLORS[field].primary : 'red';
};

export const secondaryColor = disc => COLORS[disc] ? COLORS[disc].secondary : 'red';
