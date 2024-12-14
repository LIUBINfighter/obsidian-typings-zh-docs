import type {
    App,
    WorkspaceLeaf
} from 'obsidian';
import type { SyncPluginInstance } from '../../../internals/InternalPlugins/Sync/SyncPluginInstance.js';
import type { SyncView } from '../../../internals/InternalPlugins/Sync/SyncView.js';
import { ViewType } from '../../Constants/ViewType.ts';
import { getViewConstructorByViewType } from './getViewConstructorByViewType.ts';

/**
 * Get the SyncView constructor.
 *
 * @returns The SyncView constructor.
 * @public
 */
export function getSyncViewConstructor(app: App): SyncViewConstructor {
    return getViewConstructorByViewType(app, ViewType.Sync) as SyncViewConstructor;
}

/**
 * A constructor for a sync view.
 *
 * @public
 */
type SyncViewConstructor = new(
    leaf: WorkspaceLeaf,
    syncPluginInstance: SyncPluginInstance
) => SyncView;
