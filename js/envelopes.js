const Envelopes = () => {
  let content = document.createElement('div');
  content.setAttribute('class', 'content envelopes');

  let letterEnvelopeImage = document.createElement('img');
  letterEnvelopeImage.setAttribute('src', '../img/envelope.png');
  letterEnvelopeImage.setAttribute('class', 'img-link');
  letterEnvelopeImage.setAttribute('id', 'envelope');

  content.appendChild(letterEnvelopeImage);

  return content;
}

export default Envelopes;
