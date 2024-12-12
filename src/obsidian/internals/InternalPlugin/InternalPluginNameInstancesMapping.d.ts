import type { AudioRecorderPluginInstance } from './AudioRecorder/AudioRecorderPluginInstance.js';
import type { BacklinkPluginInstance } from './Backlink/BacklinkPluginInstance.js';
import type { BookmarksPluginInstance } from './Bookmarks/BookmarksPluginInstance.js';
import type { CanvasPluginInstance } from './Canvas/CanvasPluginInstance.js';
import type { CommandPalettePluginInstance } from './CommandPalette/CommandPalettePluginInstance.js';
import type { DailyNotesPluginInstance } from './DailyNotes/DailyNotesPluginInstance.js';
import type { EditorStatusPluginInstance } from './EditorStatus/EditorStatusPluginInstance.js';
import type { FileExplorerPluginInstance } from './FileExplorer/FileExplorerPluginInstance.js';
import type { FileRecoveryPluginInstance } from './FileRecovery/FileRecoveryPluginInstance.js';
import type { GlobalSearchPluginInstance } from './GlobalSearch/GlobalSearchPluginInstance.js';
import type { GraphPluginInstance } from './Graph/GraphPluginInstance.js';
import type { InternalPluginName } from './InternalPluginName.js';
import type { MarkdownImporterPluginInstance } from './MarkdownImporter/MarkdownImporterPluginInstance.js';
import type { NoteComposerPluginInstance } from './NoteComposer/NoteComposerPluginInstance.js';
import type { OutgoingLinkPluginInstance } from './OutgoingLink/OutgoingLinkPluginInstance.js';
import type { OutlinePluginInstance } from './Outline/OutlinePluginInstance.js';
import type { PagePreviewPluginInstance } from './PagePreview/PagePreviewPluginInstance.js';
import type { PropertiesPluginInstance } from './Properties/PropertiesPluginInstance.js';
import type { PublishPluginInstance } from './Publish/PublishPluginInstance.js';
import type { RandomNotePluginInstance } from './RandomNote/RandomNotePluginInstance.js';
import type { SlashCommandPluginInstance } from './SlashCommand/SlashCommandPluginInstance.js';
import type { SlidesPluginInstance } from './Slides/SlidesPluginInstance.js';
import type { SwitcherPluginInstance } from './Switcher/SwitcherPluginInstance.js';
import type { SyncPluginInstance } from './Sync/SyncPluginInstance.js';
import type { TagPanePluginInstance } from './TagPane/TagPanePluginInstance.js';
import type { TemplatesPluginInstance } from './Templates/TemplatesPluginInstance.js';
import type { WordCountPluginInstance } from './WordCount/WordCountPluginInstance.js';
import type { WorkspacesPluginInstance } from './Workspaces/WorkspacesPluginInstance.js';
import type { ZkPrefixerPluginInstance } from './ZkPrefixer/ZkPrefixerPluginInstance.js';

/** @public */
export type InternalPluginNameInstancesMapping = {
    [InternalPluginName.AudioRecorder]: AudioRecorderPluginInstance;
    [InternalPluginName.Backlink]: BacklinkPluginInstance;
    [InternalPluginName.Bookmarks]: BookmarksPluginInstance;
    [InternalPluginName.Canvas]: CanvasPluginInstance;
    [InternalPluginName.CommandPalette]: CommandPalettePluginInstance;
    [InternalPluginName.DailyNotes]: DailyNotesPluginInstance;
    [InternalPluginName.EditorStatus]: EditorStatusPluginInstance;
    [InternalPluginName.FileExplorer]: FileExplorerPluginInstance;
    [InternalPluginName.FileRecovery]: FileRecoveryPluginInstance;
    [InternalPluginName.GlobalSearch]: GlobalSearchPluginInstance;
    [InternalPluginName.Graph]: GraphPluginInstance;
    [InternalPluginName.MarkdownImporter]: MarkdownImporterPluginInstance;
    [InternalPluginName.NoteComposer]: NoteComposerPluginInstance;
    [InternalPluginName.OutgoingLink]: OutgoingLinkPluginInstance;
    [InternalPluginName.Outline]: OutlinePluginInstance;
    [InternalPluginName.PagePreview]: PagePreviewPluginInstance;
    [InternalPluginName.Properties]: PropertiesPluginInstance;
    [InternalPluginName.Publish]: PublishPluginInstance;
    [InternalPluginName.RandomNote]: RandomNotePluginInstance;
    [InternalPluginName.SlashCommand]: SlashCommandPluginInstance;
    [InternalPluginName.Slides]: SlidesPluginInstance;
    [InternalPluginName.Switcher]: SwitcherPluginInstance;
    [InternalPluginName.Sync]: SyncPluginInstance;
    [InternalPluginName.TagPane]: TagPanePluginInstance;
    [InternalPluginName.Templates]: TemplatesPluginInstance;
    [InternalPluginName.WordCount]: WordCountPluginInstance;
    [InternalPluginName.Workspaces]: WorkspacesPluginInstance;
    [InternalPluginName.ZkPrefixer]: ZkPrefixerPluginInstance;
};
