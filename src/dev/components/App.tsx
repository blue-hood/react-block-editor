import React from 'react';
import ParagraphBlock from './ParagraphBlock';
import { BlockContent } from '../..';

const App: React.FunctionComponent = () => (
  <>
    <BlockContent
      data={{
        type: 'RootBlock',
        props: {
          children: [
            {
              type: 'ParagraphBlock',
              props: {
                text: 'A'
              }
            },
            {
              type: 'ParagraphBlock',
              props: {
                text: 'B'
              }
            }
          ]
        }
      }}
      map={{ ParagraphBlock }}
    />
  </>
);

export default App;
