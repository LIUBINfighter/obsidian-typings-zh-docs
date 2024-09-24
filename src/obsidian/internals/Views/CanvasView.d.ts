import type { TextFileView } from 'obsidian';

/** @todo Documentation incomplete */
/** @public */
export interface CanvasView extends TextFileView {
    /**
     * Loads the local data of the canvas
     */
    getLocalData(): unknown;
    /**
     * Get the current view type
     */
    getViewType(): 'canvas';
    /**
     * Saves the local data of the canvas
     */
    saveLocalData(): void;
}
