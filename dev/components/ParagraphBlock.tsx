import React from 'react';
import { BlockNodeBase, useBlockContent, TextBlockProps } from '../../src';
import BlockContext, { map } from '../contexts/BlockContext';

type BlockNode = BlockNodeBase<'TextBlock', TextBlockProps>;

export interface ParagraphBlockProps {
  children: BlockNode[];
  color: string;
  name: string;
}

const ParagraphBlock: React.FunctionComponent<ParagraphBlockProps> = ({
  children,
  color,
  name
}) => {
  const BlockContent = useBlockContent<BlockNode, typeof map>(BlockContext);

  return (
    <p style={{ backgroundColor: color }}>
      <b>{name}</b>
      <br />
      <BlockContent>{children}</BlockContent>
    </p>
  );
};

export default ParagraphBlock;
