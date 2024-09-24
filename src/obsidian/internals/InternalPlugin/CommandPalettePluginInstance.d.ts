import type { App } from 'obsidian';
import type { CommandPalettePlugin } from './CommandPalettePlugin.js';
import type { InternalPluginInstance } from './InternalPluginInstance.js';

/** @public */
export interface CommandPalettePluginInstance extends InternalPluginInstance {
    app: App;
    defaultOn: boolean;
    plugin: CommandPalettePlugin;
}
