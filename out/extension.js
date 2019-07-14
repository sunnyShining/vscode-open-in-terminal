'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path = require("path");
const fs = require("fs");
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.openTerminal', (e) => {
        if (process.platform === "darwin") {
            const scriptPath = path.resolve(__dirname, '../src/script/openTerminal.applescript');
            fs.stat(e.fsPath, (err, stats) => {
                if (err) {
                    return;
                }
                let dirPath = e.fsPath;
                if (stats.isFile()) {
                    dirPath = path.dirname(dirPath);
                }
                // console.log(3333, dirPath, scriptPath);
                child_process_1.spawn("osascript", [scriptPath, "cd", `"${dirPath}"`]);
            });
        }
        else {
            // todo
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map