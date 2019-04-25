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

export const SKINNY_ARROW_ID = 'skinny-pointy-pointy';
export const FULL_ARROW_ID = 'full-pointy-pointy';

/* Values */

export const POSSIBLE_GUIDES = [0.1, 0.25, 0.3, 0.5, 0.7, 0.75, 0.9];

/* Colors */

const COLORS = {
  Engineering: {
    primary: '#007291',
    secondary: '#a1c5d2',
  },
  Science: {
    primary: '#1E7D68',
    secondary: '#99D9C9',
  },
  'Mechanical engineering': {
    primary: '#BA3063',
    secondary: '#FEABC5',
  },
  'Biology': {
    primary: '#1E7D68',
    secondary: '#99D9C9',
  },
  'Mathematics and applied mathematics': {
    primary: '#1E7D68',
  },
  'Physics': {
    primary: '#BA3063',
    secondary: '#FEABC5',
  },
};

export const primaryColor = disc => COLORS[disc] ? COLORS[disc].primary : 'red';

export const secondaryColor = disc => COLORS[disc] ? COLORS[disc].secondary : 'red';