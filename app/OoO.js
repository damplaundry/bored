const buttonFunky = document.getElementById('button-funky');

buttonFunky.addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'https://www.youtube.com/watch?v=QX43QTYyV-8';
  link.textContent = 'Take me to funky town';

  document.body.appendChild(link);
});

const buttonFlavor = document.getElementById('button-flavor');

buttonFlavor.addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'https://www.youtube.com/watch?v=qG-04bgXjwc';
  link.textContent = 'Take me to flavor town';

  document.body.appendChild(link);
});

const buttonUpTown = document.getElementById('button-upTown');

buttonUpTown.addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'https://www.youtube.com/watch?v=_4WJCfk0JMQ';
  link.textContent = 'Take me to up town';

  document.body.appendChild(link);
});