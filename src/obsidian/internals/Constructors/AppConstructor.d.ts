import type {
    App,
    DataAdapter
} from 'obsidian';
import type { ConstructorBase } from './ConstructorBase.d.ts';

/**
 * The App constructor.
 *
 * @public
 */
export interface AppConstructor extends ConstructorBase<[adapter: DataAdapter, appId: string], App> {}
