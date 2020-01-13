import React from 'react';
import { BlockNodeBase, useBlockContent, TextBlockProps } from '../../src';
import { ParagraphBlockProps } from './ParagraphBlock';
import BlockContext, { map } from '../contexts/BlockContext';

type BlockNode =
  | BlockNodeBase<'ContainerBlock', ContainerBlockProps>
  | BlockNodeBase<'ParagraphBlock', ParagraphBlockProps>
  | BlockNodeBase<'TextBlock', TextBlockProps>;

export interface ContainerBlockProps {
  children: BlockNode[];
  color: string;
  name: string;
}

const ContainerBlock: React.FunctionComponent<ContainerBlockProps> = ({
  children,
  color,
  name
}) => {
  const BlockContent = useBlockContent<BlockNode, typeof map>(BlockContext);

  return (
    <div style={{ backgroundColor: color, padding: '1rem' }}>
      <b>{name}</b>
      <br />
      <BlockContent>{children}</BlockContent>
    </div>
  );
};

export default ContainerBlock;
