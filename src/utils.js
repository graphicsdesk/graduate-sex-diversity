import chroma from 'chroma-js';
import {
  primaryColor,
  START_YEAR,
  END_YEAR,
  POSSIBLE_GUIDES,
} from './constants';

export const colorScale = chroma
  .scale(['#2A4858', '#F8E800'])
  .mode('lch')
  .colors(END_YEAR - START_YEAR + 1);

export const maxCoord = array => {
  const values = [];
  array.forEach(coordinate => {
    values.push(coordinate[0]);
    values.push(coordinate[1]);
  });
  return Math.max(...values);
};

export const writeTitleFromFields = fields => {
  const field = fields[0];
  if (field === 'TOTALS') {
    return 'Science and engineering';
  } else if (field) {
    return capitalizeWords(field.toLowerCase());
  }
  return 'Science and engineering';
};

const HIGHLIGHTER_PATTERN = /<h>([^<]*)<\/h>/gi;

export const insertHighlighters = str =>
  str.replace(
    HIGHLIGHTER_PATTERN,
    (match, p1) =>
      `<span style="background-color: ${primaryColor(
        p1,
      )}; color: white; padding: 4px 7px; border-radius: 2.5px;">${p1}</span>`,
  );

export const capitalizeWords = text =>
  text
    .toLowerCase()
    .split(' ')
    .map(s => (s === 'and' ? s : s.charAt(0).toUpperCase() + s.substring(1)))
    .join(' ');

export const processSteps = steps =>
  steps.map(step => {
    const { guides, maxYear } = step;
    if (guides) {
      step.guides = step.guides.split(',').map(s => {
        if (!POSSIBLE_GUIDES.includes(+s))
          console.error(s + ' is not included in the possible guides.');
        return +s;
      });
    }
    if (maxYear) step.maxYear = +step.maxYear;
    return step;
  });
