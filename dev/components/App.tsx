import React from 'react';
import BlockContent from './BlockContent';
import BlockContext, { map } from '../contexts/BlockContext';

const App: React.FunctionComponent = () => (
  <BlockContext.Provider value={{ map }}>
    <BlockContent>
      {[
        {
          type: 'ParagraphBlock',
          props: {
            name: 'Paragraph1',
            color: 'pink',
            children: [
              {
                type: 'TextBlock',
                props: { text: 'Text1' }
              }
              // Uncomment it, then occurs TypeScript error
              // because paragraph can't be rendered in paragraph.
              /* {
                type: "ParagraphBlock",
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
          type: 'ContainerBlock',
          props: {
            name: 'Container1',
            color: 'lightgray',
            children: [
              {
                type: 'ContainerBlock',
                props: {
                  name: 'Container2',
                  color: 'lightblue',
                  children: [
                    {
                      type: 'TextBlock',
                      props: { text: 'Text2' }
                    }
                  ]
                }
              },
              {
                type: 'ContainerBlock',
                props: {
                  name: 'Container3',
                  color: 'lightgreen',
                  children: [
                    {
                      type: 'ContainerBlock',
                      props: {
                        name: 'Container4',
                        color: 'pink',
                        children: []
                      }
                    },
                    {
                      type: 'ContainerBlock',
                      props: {
                        name: 'Container5',
                        color: 'lightyellow',
                        children: [
                          {
                            type: 'TextBlock',
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
