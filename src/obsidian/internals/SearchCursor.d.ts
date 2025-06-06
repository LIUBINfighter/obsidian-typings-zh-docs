import type { EditorRange } from 'obsidian';

/** @public */
export interface SearchCursor {
    /**
     * Current editor search position
     */
    current(): EditorRange;
    /**
     * All search results
     */
    findAll(): EditorRange[];
    /**
     * Next editor search position
     */
    findNext(): EditorRange;
    /**
     * Previous editor search position
     */
    findPrevious(): EditorRange;
    /**
     * Replace current search result with specified text
     *
     * @remark origin is used by CodeMirror to determine which component was responsible for the change
     */
    replace(replacement: string, origin: string): void;
    /**
     * Replace all search results with specified text
     */
    replaceAll(replacement: string, origin: string): void;
}
