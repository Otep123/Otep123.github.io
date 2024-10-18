import Event from "./event.js";
import Envelopes from "./envelopes.js";

const App = () => {
  changeContent(Envelopes());
}

export const changeContent = (content) => {
  document.body.innerText = '';
  document.body.appendChild(content);
}

document.addEventListener('DOMContentLoaded', () => {
  App();
  Event();
});

