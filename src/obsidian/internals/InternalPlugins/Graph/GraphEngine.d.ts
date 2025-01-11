import type { App } from "obsidian";
import type { GraphColorGroupOptions, GraphDisplayOptions, GraphFilterOptions, GraphForceOptions } from "./GraphOptions.js";
import type { LocalGraphView } from "./LocalGraphView.js";
import type { GraphView } from "./GraphView.js";
import type { GraphColorAttributes, GraphPluginInstanceOptions } from "./GraphPluginInstanceOptions.js";
import type { Renderer } from "pixi.js";

export interface GraphEngine {
    /** @internal */
    app: App;
    /** @internal */
    colorGroupOptions: GraphColorGroupOptions;
    /** @internal */
    controlsEl: HTMLDivElement;
    /** @internal */
    currentFocusFile: string;
    /** @internal */
    displayOptions: GraphDisplayOptions;
    /** @internal */
    fileFilter: unknown;
    /** @internal */
    filterOptions: GraphFilterOptions;
    /** @internal */
    forceOptions: GraphForceOptions;
    /** @internal */
    hasFilter: boolean;
    /** @internal */
    hoverPopover: unknown;
    /** @internal */
    lastHoverLink: unknown;
    /** @internal */
    options: GraphPluginInstanceOptions;
    /** @internal */
    progression: number;
    /** @internal */
    progressionSpeed: number;
    /** @internal */
    renderer: Renderer;
    /** @internal */
    searchQueries: {
        query: unknown,
        color: GraphColorAttributes
    }[];
    /** @internal */
    view: LocalGraphView | GraphView;

    /**
     * Gets the engine options
     * @internal
     */
    getOptions(): GraphPluginInstanceOptions;
    /**
     * Sets the engine options
     * @param options - New options. Undefined elements will not be considered.
     * @internal
     */
    setOptions(options: GraphPluginInstanceOptions | undefined): void;
    /**
     * Updates the engine after the search filter has changed
     * @internal
     */
    updateSearch(): void;
}