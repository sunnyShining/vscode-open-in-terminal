'use strict';
import { spawn } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.openTerminal', (e: vscode.Uri) => {
		if (process.platform === "darwin") {
            const scriptPath = path.resolve(__dirname, '../src/script/openTerminal.applescript');
            fs.stat(e.fsPath, (err, stats) => {
                if (err) { return; }

                let dirPath = e.fsPath;
                if (stats.isFile()) {
                    dirPath = path.dirname(dirPath);
                }
				// console.log(3333, dirPath, scriptPath);
                spawn("osascript", [scriptPath, "cd", `"${dirPath}"`]);
            });
        } else {
            // todo
        }
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
