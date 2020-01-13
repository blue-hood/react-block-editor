import { TextBlockProps, BlockNodeBase, useBlockContent } from '../../src';
import { ContainerBlockProps } from './ContainerBlock';
import { ParagraphBlockProps } from './ParagraphBlock';
import BlockContext, { map } from '../contexts/BlockContext';

type BlockNode =
  | BlockNodeBase<'ContainerBlock', ContainerBlockProps>
  | BlockNodeBase<'ParagraphBlock', ParagraphBlockProps>
  | BlockNodeBase<'TextBlock', TextBlockProps>;

const BlockContent = useBlockContent<BlockNode, typeof map>(BlockContext);

export default BlockContent;
