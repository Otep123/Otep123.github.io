import {changeContent} from "./app.js";
import Letter from "./letter.js";

const Event = () => {
  document.addEventListener('mouseover', (event) => {
    if (event.target.id === 'envelope') {
      event.target.style.transform = 'translateY(-15px)';
    }
  });

  document.addEventListener('mouseout', (event) => {
    if (event.target.id === 'envelope') {
      event.target.style.transform = 'translateY(0px)';
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target.id === 'envelope') {
      event.target.style.transform = 'translateY(100vh)';
      let letterDemo = new Letter();
      window.setTimeout(function(){changeContent(letterDemo.getDiv())}, 200);

    }
  })
}

export default Event;
