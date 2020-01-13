import { createBlockContext, TextBlock } from '../../src';
import ContainerBlock from '../components/ContainerBlock';
import ParagraphBlock from '../components/ParagraphBlock';

export const map = {
  ContainerBlock,
  ParagraphBlock,
  TextBlock
};

const BlockContext = createBlockContext<typeof map>(map);

export default BlockContext;
