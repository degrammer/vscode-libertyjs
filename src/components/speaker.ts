import { LitElement, html, css } from "lit";

import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

@customElement("speaker-item")
export class SpeakerItem extends LitElement {

 static styles = /* HTML */css`

    .speaker {
      text-align: center;
    }
    img {
      
      height:auto;
      max-width:100%;
      border-radius:10px;
      box-shadow:2px #676464;
    }
 `

  @property()
  name?: string;

  @property()
  photo?: string;

  render() {
    return html`<div class="speaker">
      
        <h2>${this.name}</h2>
        <img src="${this.photo!}" />

    </div>`
  }
}
