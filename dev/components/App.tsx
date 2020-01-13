import React from 'react';
import BlockContent from './BlockContent';
import BlockContext, { map } from '../contexts/BlockContext';

const App: React.FunctionComponent = () => (
  <BlockContext.Provider value={{ map }}>
    <BlockContent>
      {[
        {
          type: 'Paragraph',
          props: {
            name: 'Paragraph1',
            color: 'pink',
            children: [
              {
                type: 'Text',
                props: { text: 'Text1' }
              }
              // Uncomment it, then occurs TypeScript error
              // because paragraph can't be rendered in paragraph.
              /* {
                type: "Paragraph",
                props: {
                  name: "Invalid Paragraph",
                  color: "white",
                  children: []
                }
              } */
            ]
          }
        },
        {
          type: 'Container',
          props: {
            name: 'Container1',
            color: 'lightgray',
            children: [
              {
                type: 'Container',
                props: {
                  name: 'Container2',
                  color: 'lightblue',
                  children: [
                    {
                      type: 'Text',
                      props: { text: 'Text2' }
                    }
                  ]
                }
              },
              {
                type: 'Container',
                props: {
                  name: 'Container3',
                  color: 'lightgreen',
                  children: [
                    {
                      type: 'Container',
                      props: {
                        name: 'Container4',
                        color: 'pink',
                        children: []
                      }
                    },
                    {
                      type: 'Container',
                      props: {
                        name: 'Container5',
                        color: 'lightyellow',
                        children: [
                          {
                            type: 'Text',
                            props: { text: 'Text3' }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]}
    </BlockContent>
  </BlockContext.Provider>
);

export default App;
