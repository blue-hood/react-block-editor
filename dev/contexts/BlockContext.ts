import { createBlockContext, Text } from '../../src';
import Container from '../components/Container';
import Paragraph from '../components/Paragraph';

export const map = {
  Container,
  Paragraph,
  Text
};

const BlockContext = createBlockContext<typeof map>(map);

export default BlockContext;
