import { createBlockContext, TextBlock } from '../../src';
import ParagraphBlock from '../components/ParagraphBlock';

export const map = {
  ParagraphBlock,
  TextBlock
};

const BlockContext = createBlockContext<typeof map>(map);

export default BlockContext;
