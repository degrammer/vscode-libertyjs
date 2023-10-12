// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import SpeakerTreeViewProvider from './speakersTreeViewProvider';
import SpeakersWebviewProvider from './speakersWebviewProvider';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const speakerTreeViewProvider = new SpeakerTreeViewProvider()
	const speakerWebviewProvider = new SpeakersWebviewProvider(context.extensionUri)
	context.subscriptions.push(
		speakerWebviewProvider.registeredCommand,
		vscode.window.registerTreeDataProvider('speakersbalah', speakerTreeViewProvider),
		vscode.window.registerWebviewViewProvider('details', speakerWebviewProvider)
	)
}

// This method is called when your extension is deactivated
export function deactivate() { }
