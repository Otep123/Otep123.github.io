import {letter, title} from "./text.js";
import {typeTextEffect} from "./util.js";

class Letter {

  constructor() {
    this.content = document.createElement('div');
    this.content.setAttribute('class', 'content');

    let letterHeader = document.createElement('h1');
    letterHeader.setAttribute('class', 'letter-header cutive-font');
    letterHeader.textContent = title;

    let letterBody = document.createElement('p');
    letterBody.setAttribute('class', 'letter-body cutive-font');
    typeTextEffect(letterBody, letter, 0, 30);

    this.content.appendChild(letterHeader);
    this.content.appendChild(letterBody);
    this.content.appendChild(createPolaroid('../img/pic1.png', "Date"));
    this.content.appendChild(createPolaroid('../img/pic2.png', "Study Call"));
    this.content.appendChild(createPolaroid('../img/pic3.jpg', "Programming With A Model"));
    this.content.appendChild(createPolaroid('../img/pic4.png', "Enthralled"));
    this.content.appendChild(createPolaroid('../img/movie.jpg', 'Green Inferno Date'));
    this.content.appendChild(createPolaroid('../img/mirror.jpg', 'San passenger princess ko?'));
    this.content.appendChild(createPolaroid('../img/jannasr.png', 'Hope to meet her soon!'));
    this.content.appendChild(createPolaroid('../img/babyjanna2.jpg', 'Babe ko rin>:)'));
    this.content.appendChild(createPolaroid('../img/babyjanna.jpg', 'ANG CUTE'));
    this.content.appendChild(createPolaroid('../img/sleep.jpg', 'Love our sleep calls!'));
    this.content.appendChild(createPolaroid('../img/lockedin.jpg', 'LOCKED IN'));
    this.content.appendChild(createPolaroid('../img/makeup.jpg', 'Make up tutorial!'));
    this.content.appendChild(createPolaroid('../img/beauty.jpg', 'Beauty is everywhere, especially in you.'));
    this.content.appendChild(createPolaroid('../img/sleep2.jpg', 'Missing sleep calls:)'));
    this.content.appendChild(createPolaroid('../img/gen.jpg', 'Mine only:)'));
    this.content.appendChild(createPolaroid('../img/softlaunch.jpg', 'Kinilig ako sobra dito istg'));
    this.content.appendChild(createPolaroid('../img/inlove.jpg', 'IN LOVE'));
    this.content.appendChild(createPolaroid('../img/lookingup.jpg', 'Looking up towards our future!'));
    this.content.appendChild(createPolaroid('../img/school.jpg', 'School calls!'));
    this.content.appendChild(createPolaroid('../img/shower.jpg', 'Bro is wet; san nag swimming??'));
    this.content.appendChild(createPolaroid('../img/concealer.jpg', 'Concealer cutiepie'));
    this.content.appendChild(createPolaroid('../img/thinking.jpg', 'Ano kaya iniisip niya?'));
    this.content.appendChild(createPolaroid('../img/milo.jpg', 'MILO FIEND!'));
    this.content.appendChild(createPolaroid('../img/kiss.jpg', 'Need these kisses:)'));

  }

  getDiv() {
    return this.content;
  }
}

const createPolaroid = (srcStr, captionStr) => {
  let item = document.createElement('div');
  item.setAttribute('class', 'item');

  let polaroid = document.createElement('div');
  polaroid.setAttribute('class', 'polaroid')

  let pic = document.createElement('img');
  pic.setAttribute('src', srcStr);

  let caption = document.createElement('div');
  caption.setAttribute('class', 'caption');
  caption.innerHTML = captionStr;

  polaroid.appendChild(pic);
  polaroid.appendChild(caption);
  item.appendChild(polaroid);

  return item;
}

export default Letter;
