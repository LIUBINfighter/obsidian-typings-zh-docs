import type { App } from 'obsidian';
import type { InternalPluginInstance } from './InternalPluginInstance.js';
import type { OutlinePlugin } from './OutlinePlugin.js';

/** @public */
export interface OutlinePluginInstance extends InternalPluginInstance {
    app: App;
    defaultOn: boolean;
    plugin: OutlinePlugin;
}
