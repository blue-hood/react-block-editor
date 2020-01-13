import { TextProps, BlockNodeBase, useBlockContent } from '../../src';
import { ContainerProps } from './Container';
import { ParagraphProps } from './Paragraph';
import BlockContext, { map } from '../contexts/BlockContext';

type BlockNode =
  | BlockNodeBase<'Container', ContainerProps>
  | BlockNodeBase<'Paragraph', ParagraphProps>
  | BlockNodeBase<'Text', TextProps>;

const BlockContent = useBlockContent<BlockNode, typeof map>(BlockContext);

export default BlockContent;
