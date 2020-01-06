import React from 'react';

export interface ParagraphBlockProps {
  text: string;
}

const ParagraphBlock: React.FunctionComponent<ParagraphBlockProps> = ({text}) => (
  <p>{text}</p>
);

export default ParagraphBlock;
