import React from 'react';
import fadeExistence from '../charts/fadeExistence';

const Line = ({ d }) => <path d={d} fill="none" stroke="#333" />;

export default fadeExistence(Line);
