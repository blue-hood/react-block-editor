import React from 'react';
import { BlockNodeBase, useBlockContent, TextProps } from '../../src';
import { ParagraphProps } from './Paragraph';
import BlockContext, { map } from '../contexts/BlockContext';

type BlockNode =
  | BlockNodeBase<'Container', ContainerProps>
  | BlockNodeBase<'Paragraph', ParagraphProps>
  | BlockNodeBase<'Text', TextProps>;

export interface ContainerProps {
  children: BlockNode[];
  color: string;
  name: string;
}

const Container: React.FunctionComponent<ContainerProps> = ({ children, color, name }) => {
  const BlockContent = useBlockContent<BlockNode, typeof map>(BlockContext);

  return (
    <div style={{ backgroundColor: color, padding: '1rem' }}>
      <b>{name}</b>
      <br />
      <BlockContent>{children}</BlockContent>
    </div>
  );
};

export default Container;
