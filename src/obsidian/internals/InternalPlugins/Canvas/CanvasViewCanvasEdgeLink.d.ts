import type { CanvasViewCanvasNode } from './CanvasViewCanvasNode.d.ts';

/** @public */
export interface CanvasViewCanvasEdgeLink {
    end: string;
    node: CanvasViewCanvasNode;
    side: string;
}
