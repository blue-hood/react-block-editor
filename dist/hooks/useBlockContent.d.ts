import React, { Context } from 'react';
import { BlockContext } from '../contexts/createBlockContext';
export interface BlockNodeBase<type extends string = string, Props = {}> {
    type: type;
    props: Props;
}
export interface BlockContentProps<BlockNode> {
    children: BlockNode[];
}
export default function useBlockContent<BlockNode extends BlockNodeBase, BlockMap extends {
    [key: string]: React.ElementType;
}>(blockContext: Context<BlockContext<BlockMap>>): React.FunctionComponent<BlockContentProps<BlockNode>>;
