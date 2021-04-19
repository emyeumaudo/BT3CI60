import FilmContainer from "./FilmContainer.js";

const $template = document.createElement("template");
$template.innerHTML = `<div class="film-list">
   
</div>`;

export default class FilmList extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$list = this.querySelector(".film-list");
  }
  static get obvervedAttributes() {
    return ["films"];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attr == "film") {
      console.log(newValue);
      let data = JSON.parse(newValue);
      console.log(data);

      for (let filmData of data) {
        let $filmContainer = new FilmContainer();
        $filmContainer.setAttribute("id", filmData.id);
        $filmContainer.setAttribute("name", filmData.name);
        $filmContainer.setAttribute("original-Name", filmData.originalName);
        $filmContainer.setAttribute("image", filmData.image);
        $filmContainer.setAttribute("duration", filmData.duration);
        $filmContainer.setAttribute("type", filmData.type);
        this.$list.appendChild($filmContainer);
      }
    }
  }
}
window.customElements.define("film-list", FilmList);
