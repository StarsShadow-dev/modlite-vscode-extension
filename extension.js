// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

// var statusBarItem

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log("starting")

	// context.subscriptions.push(vscode.commands.registerCommand("modlite.showSelectionCount", () => {
	// 	const number = getNumberOfSelectedLines(vscode.window.activeTextEditor);
	// 	vscode.window.showInformationMessage(`Yeah, ${number} line(s) selected... Keep going!`);
	// }))

	// statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 999);
	// statusBarItem.command = "modlite.showSelectionCount";
	// context.subscriptions.push(statusBarItem);

	// // register some listener that make sure the status bar 
	// // item always up-to-date
	// context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem));
	// context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem));

	// // update status bar item once at start
	// updateStatusBarItem();

	/*
		"commands": [
			{
				"command": "extension.helloWorld",
				"title": "Hello World"
			}
		],
	*/

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World!');
	// });

	// context.subscriptions.push(disposable);
}

// function updateStatusBarItem() {
// 	const number = getNumberOfSelectedLines(vscode.window.activeTextEditor);
// 	if (number > 0) {
// 		statusBarItem.text = `${number} line(s) selected`;
// 		statusBarItem.show();
// 	} else {
// 		statusBarItem.hide();
// 	}
// }

// function getNumberOfSelectedLines(editor) {
// 	let lines = 0;
// 	if (editor) {
// 		lines = editor.selections.reduce((prev, curr) => prev + (curr.end.line - curr.start.line), 0);
// 	}
// 	return lines;
// }

// this method is called when your extension is deactivated
function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate
}



// https://macromates.com/manual/en/language_grammars