import {
  CancellationToken,
  Uri,
  WebviewView,
  WebviewViewProvider,
  WebviewViewResolveContext,
  commands,
  window,
  Disposable,
} from "vscode";
import path from "node:path";

import { speakersList } from "./speakersList";

export default class SpeakersWebviewProvider implements WebviewViewProvider {
  public registeredCommand: Disposable;
  private webview?: WebviewView;
  constructor(private extensionUri: Uri) {
    this.registeredCommand = commands.registerCommand(
      "libertyjs.selectSpeaker",
      (args: any) => {
        if (!this.webview) {
          window.showErrorMessage("Webview not initialized");
          return;
        }
        const speaker = speakersList.find((s) => s.name === args.name)!;
        const photoPath = path.join(
          __dirname,
          "..",
          "resources",
          "speakers",
          speaker.photo
        );
    
        const photo = this.webview.webview.asWebviewUri(Uri.file(photoPath));
        this.webview.title = speaker.name;
        this.webview.webview.options = {
          enableScripts: true,
          localResourceRoots: [this.extensionUri],
        };
        const script = this.webview.webview.asWebviewUri(
          Uri.joinPath(this.extensionUri, "dist", "components.js")
        );
        this.webview.webview.html = /* HTML */ `<!doctype html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <title>Cat Coding</title>
              <script src="${script}" type="module"></script>
            </head>
            <body>
              <speaker-item
                name="${speaker.name}"
                photo="${photo}"
              ></speaker-item>
            </body>
          </html>`;
        this.webview.show(true);
      }
    );
  }
  resolveWebviewView(
    webviewView: WebviewView,
    context: WebviewViewResolveContext<unknown>,
    token: CancellationToken
  ): void | Thenable<void> {
    this.webview = webviewView;
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this.extensionUri],
    };
    webviewView.webview.html = `<p>Please select a Speaker</p>`;
  }
}
