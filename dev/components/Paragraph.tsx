import React from 'react';
import { BlockNodeBase, useBlockContent, TextProps } from '../../src';
import BlockContext, { map } from '../contexts/BlockContext';

type BlockNode = BlockNodeBase<'Text', TextProps>;

export interface ParagraphProps {
  children: BlockNode[];
  color: string;
  name: string;
}

const Paragraph: React.FunctionComponent<ParagraphProps> = ({ children, color, name }) => {
  const BlockContent = useBlockContent<BlockNode, typeof map>(BlockContext);

  return (
    <p style={{ backgroundColor: color }}>
      <b>{name}</b>
      <br />
      <BlockContent>{children}</BlockContent>
    </p>
  );
};

export default Paragraph;
