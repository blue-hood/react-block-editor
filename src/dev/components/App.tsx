import React from 'react';
import { BlockContent } from '../..';

const App: React.FunctionComponent = () => (
  <>
    <BlockContent
      data={{
        type: 'RootBlock',
        props: {
          children: [
            {
              type: 'TestBlock',
              props: {}
            },
            {
              type: 'TestBlock',
              props: {}
            }
          ]
        }
      }}
      map={{ TestBlock: () => <>TestBlock</> }}
    />
  </>
);

export default App;
