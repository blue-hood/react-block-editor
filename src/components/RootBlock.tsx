import React from 'react';

interface BlockContent<type extends string, Props = {}> {
  type: type;
  props: Props;
}

export type BlockMap = { [key: string]: React.FunctionComponent };

export interface RootBlockProps {
  children: BlockContent<string>[];
  map: BlockMap;
}

export type BlockData = BlockContent<'RootBlock', Omit<RootBlockProps, 'map'>>;

const RootBlock: React.FunctionComponent<RootBlockProps> = ({ children, map }) => (
  <div>
    {children.map(({ type, props }, index) => {
      const Block = map[type];

      // eslint-disable-next-line react/no-array-index-key, react/jsx-props-no-spreading
      return <Block {...props} key={index} />;
    })}
  </div>
);

export default RootBlock;
