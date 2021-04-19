const $template = document.createElement("template");
$template.innerHTML = `<div class="content">
<film-list id="my-list"></film-list>
</div>`;

export default class FilmContainer extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$originalName = this.querySelector(".film-originalName");
    this.$name = this.querySelector(".film-name");
    this.$image = this.querySelector(".film-image");
    this.$duration = this.querySelector(".film-duration");
    this.$type = this.querySelector(".film-type");
  }
  static get observedAttributes() {
    return ["original-Name", "name", "image", "duration", "type"];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "original-Name") {
      this.$originalName.innerHTML = newValue;
    } else if (attrName == "name") {
      this.$name.innerHTML = newValue;
    } else if (attrName == "duration") {
      this.$duration.innerHTML = newValue;
    } else if (attrName == "image") {
      this.$image.getElementsByClassName.backgroundImage = `url('${newValue}')`;
    } else if (attrName == "type") {
      this.$type.innerHTML = newValue;
    }
  }
}

window.customElements.define("film-container", FilmContainer);
