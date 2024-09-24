import type { App } from 'obsidian';
import type { InternalPluginInstance } from './InternalPluginInstance.js';
import type { SwitcherPlugin } from './SwitcherPlugin.js';

/** @public */
export interface SwitcherPluginInstance extends InternalPluginInstance {
    app: App;
    defaultOn: boolean;
    plugin: SwitcherPlugin;
}
