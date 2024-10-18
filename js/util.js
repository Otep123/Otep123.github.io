export const typeTextEffect = (targetElement, message, index, interval) => {
  if (message.length > index) {
    targetElement.append(message[index++]);
    setTimeout(function() {typeTextEffect(targetElement, message, index, interval)}, interval)
  }
}

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}
