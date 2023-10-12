import {
    Command,
    ProviderResult,
    TreeDataProvider, TreeItem, TreeItemCollapsibleState
} from 'vscode'

import path from 'node:path'


import { speakersList, type Speaker } from './speakersList'

export class SpeakerTreeItem extends TreeItem {
    constructor(public name: string, public description: string, public photo: string, selectCommand: Command) {
        super(name)
        this.tooltip = name
        this.description = description
        this.collapsibleState = TreeItemCollapsibleState.None
        this.iconPath = path.join(__dirname, '..', 'resources', 'speakers', photo)
        this.command = selectCommand
    }
}



export default class SpeakerTreeViewProvider implements TreeDataProvider<SpeakerTreeItem> {
    getTreeItem(element: SpeakerTreeItem): TreeItem | Thenable<SpeakerTreeItem> {
        return element
    }
    getChildren(element?: SpeakerTreeItem | undefined): ProviderResult<SpeakerTreeItem[]> {
        if (element) {
            return
        }
        return speakersList.map(({ name, photo, company }: Speaker) =>
            new SpeakerTreeItem(name, company, photo, {
                arguments: [
                    {
                        name
                    }
                ],
                title: name,
                command: 'libertyjs.selectSpeaker'
            }))
    }

}