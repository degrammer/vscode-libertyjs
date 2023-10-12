/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(__webpack_require__(1));
const speakersTreeViewProvider_1 = __importDefault(__webpack_require__(2));
const speakersWebviewProvider_1 = __importDefault(__webpack_require__(5));
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    const speakerTreeViewProvider = new speakersTreeViewProvider_1.default();
    const speakerWebviewProvider = new speakersWebviewProvider_1.default(context.extensionUri);
    context.subscriptions.push(speakerWebviewProvider.registeredCommand, vscode.window.registerTreeDataProvider('speakersbalah', speakerTreeViewProvider), vscode.window.registerWebviewViewProvider('details', speakerWebviewProvider));
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpeakerTreeItem = void 0;
const vscode_1 = __webpack_require__(1);
const node_path_1 = __importDefault(__webpack_require__(3));
const speakersList_1 = __webpack_require__(4);
class SpeakerTreeItem extends vscode_1.TreeItem {
    constructor(name, description, photo, selectCommand) {
        super(name);
        this.name = name;
        this.description = description;
        this.photo = photo;
        this.tooltip = name;
        this.description = description;
        this.collapsibleState = vscode_1.TreeItemCollapsibleState.None;
        this.iconPath = node_path_1.default.join(__dirname, '..', 'resources', 'speakers', photo);
        this.command = selectCommand;
    }
}
exports.SpeakerTreeItem = SpeakerTreeItem;
class SpeakerTreeViewProvider {
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (element) {
            return;
        }
        return speakersList_1.speakersList.map(({ name, photo, company }) => new SpeakerTreeItem(name, company, photo, {
            arguments: [
                {
                    name
                }
            ],
            title: name,
            command: 'libertyjs.selectSpeaker'
        }));
    }
}
exports["default"] = SpeakerTreeViewProvider;


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.speakersList = void 0;
const speakersList = [
    {
        name: 'Leslie Chapman',
        company: 'Comcast',
        photo: 'leslie-chapman.png'
    },
    {
        name: 'Loren Sands-Ramshaw',
        company: 'Temporal',
        photo: 'loren.png'
    },
    {
        name: 'Jessica Kerr',
        company: 'Honeycomb.io',
        photo: 'jessica-kerr.jpeg'
    },
    {
        name: 'Dan Luchi',
        company: 'DrayNow',
        photo: 'dan-luchi.jpeg',
    },
    {
        name: 'Ernest Phillips',
        company: 'GitHub',
        photo: 'ernest-phillips.jpg',
    },
    {
        name: 'Josh Goldberg',
        photo: 'josh-goldberg.jpeg',
        company: 'Open Source Developer'
    },
    {
        name: 'John Riviello',
        photo: 'john-riviello.jpeg',
        company: 'Comcast'
    },
    {
        name: 'Chris Ng',
        photo: 'chris-ng.jpeg',
        company: 'LinkedIn'
    },
    {
        name: 'Jeb Barabanov',
        photo: 'jeb-barabanov.jpg',
        company: 'Wix'
    },
    {
        name: 'Adina Halter',
        photo: 'adina-halter.jpg',
        company: 'Comcast NBCUniversal'
    },
    {
        name: 'Derek Binkley',
        company: 'Localize',
        photo: 'derek-binkley.jpg'
    },
    {
        name: 'Mrina Sugosh',
        photo: 'mrina-sugosh.jpg',
        company: 'TinyMCE'
    },
    {
        name: 'Toni Darden',
        photo: 'toni-darden.jpg',
        company: 'Comcast'
    },
    {
        name: 'Lee White',
        photo: 'lee-white.jpg',
        company: 'Olark'
    },
    {
        name: 'Grady Salzman',
        photo: 'grady-salzman.jpg',
        company: 'Contenda'
    },
    {
        name: 'Phil Nash',
        photo: 'phil-nash.jpeg',
        company: 'Sonar'
    },
    {
        name: 'Jaylen Sanders',
        photo: 'jaylen-sanders.jpg',
        company: 'Comcast'
    },
    {
        name: 'Ruben Restrepo',
        photo: 'ruben-restrepo.jpg',
        company: 'Stateful'
    },
    {
        name: 'Jeffrey Smith',
        photo: 'jeffrey-smith.jpg',
        company: 'Vanguard'
    },
    {
        name: 'Gabby Getz',
        photo: 'gabby-getz.jpg',
        company: 'Cesium'
    },
    {
        name: 'Christopher J Baker',
        photo: 'christopher-baker.jpg',
        company: 'Bitovi'
    },
    {
        photo: 'kilian-valkhof.jpeg',
        name: 'Kilian Valkhof',
        company: 'Polypane'
    },
    {
        name: 'Jen Ozmen',
        photo: 'jen-ozmen.jpg',
        company: 'Google'
    },
    {
        name: 'Aaron Shim',
        photo: 'aaron-shim.jpg',
        company: 'Google'
    },
    {
        name: 'Ceora',
        photo: 'ceora.jpg',
        company: 'Okta'
    },
    {
        name: 'Michael Schoonmaker',
        photo: 'michael-schoonmaker.jpg',
        company: 'Squad'
    },
    {
        name: 'Martin Snyder',
        photo: 'martin-snyder.jpg',
        company: 'Pinnacle 21'
    }
];
exports.speakersList = speakersList;


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode_1 = __webpack_require__(1);
const node_path_1 = __importDefault(__webpack_require__(3));
const speakersList_1 = __webpack_require__(4);
class SpeakersWebviewProvider {
    constructor(extensionUri) {
        this.extensionUri = extensionUri;
        this.registeredCommand = vscode_1.commands.registerCommand("libertyjs.selectSpeaker", (args) => {
            if (!this.webview) {
                vscode_1.window.showErrorMessage("Webview not initialized");
                return;
            }
            const speaker = speakersList_1.speakersList.find((s) => s.name === args.name);
            const photoPath = node_path_1.default.join(__dirname, "..", "resources", "speakers", speaker.photo);
            const photo = this.webview.webview.asWebviewUri(vscode_1.Uri.file(photoPath));
            this.webview.title = speaker.name;
            this.webview.webview.options = {
                enableScripts: true,
                localResourceRoots: [this.extensionUri],
            };
            const script = this.webview.webview.asWebviewUri(vscode_1.Uri.joinPath(this.extensionUri, "dist", "components.js"));
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
        });
    }
    resolveWebviewView(webviewView, context, token) {
        this.webview = webviewView;
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this.extensionUri],
        };
        webviewView.webview.html = `<p>Please select a Speaker</p>`;
    }
}
exports["default"] = SpeakersWebviewProvider;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=extension.js.map