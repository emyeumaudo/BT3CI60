import FilmContainer from "./FilmContainer.js";
import FilmList from "./FilmList.js";
import { data } from "./data.js";
let json = JSON.stringify(data);
let $filmlist = document.getElementById("my-list");
$filmlist.setAttribute("films", JSON.stringify(data));
