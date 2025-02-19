import type { TreeNodeInfo } from './TreeNodeInfo.d.ts';
import type { TreeNodeVChildren } from './TreeNodeVChildren.d.ts';

/**
 * @todo Documentation incomplete
 * @public
 */
export type TreeNode<T = object> = T & {
    childrenEl: HTMLElement;
    el: HTMLElement;
    info: TreeNodeInfo;
    pusherEl: HTMLElement;
    vChildren: TreeNodeVChildren<T>;
};
