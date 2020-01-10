import { createBlockContext, TextBlock } from '../..';
import ParagraphBlock from '../components/ParagraphBlock';

export const map = {
  ParagraphBlock,
  TextBlock
};

const BlockContext = createBlockContext(map);

export default BlockContext;
