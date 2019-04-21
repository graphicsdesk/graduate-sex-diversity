import chroma from 'chroma-js';
import { START_YEAR, END_YEAR } from './constants';

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
