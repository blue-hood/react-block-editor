import React from 'react';
import { render, screen } from '@testing-library/react';
import { BlockNodeBase, createBlockContext, TextBlock, TextBlockProps, useBlockContent } from '..';

type BlockNode = BlockNodeBase<'TextBlock', TextBlockProps>;

const map = { TextBlock };

const BlockContext = createBlockContext(map);
const BlockContent = useBlockContent<BlockNode, typeof map>(BlockContext);

test('should render block content', async () => {
  render(
    <BlockContext.Provider value={{ map }}>
      <BlockContent>{[]}</BlockContent>
    </BlockContext.Provider>
  );

  expect(screen).toMatchSnapshot();
});
