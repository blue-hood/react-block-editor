import React from 'react';
import RootBlock, { BlockData, BlockMap } from './RootBlock';

export interface BlockContentProps {
  data: BlockData;
  map: BlockMap;
}

const BlockContent: React.FunctionComponent<BlockContentProps> = ({ data, map }) => (
  <RootBlock map={map}>{data.props.children}</RootBlock>
);

export default BlockContent;
