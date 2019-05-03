import chroma from 'chroma-js';
import { primaryColor, START_YEAR, END_YEAR } from './constants';

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
  if (field === 'ALL') {
    return 'in all fields';
  } else if (field === 'TOTALS') {
    return 'in science and engineering';
  } else if (field) {
    return 'in ' + field.toLowerCase();
  }
  return 'in science and engineering';
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
