import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("youtube-player")
export class SimpleGreeting extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  // Declare reactive properties
  @property()
  video_id?: string = "HSC9cgvtkRs";

  // Render the UI as a function of component state
  render() {
    return html`<iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/${this.video_id}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`;
  }
}
