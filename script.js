const files = [
  '2nd_Opinion_159F11B.csv',
  'CBL_USIT_Logs.pdf',
  'Completion_159F11B.PDF',
  'Reference-Ouronova-EN-us.pdf',
  'Training_CO2H2S_wellnova_EN-us.pdf',
  'Wellnova Software Teaser EN.jpg',
  'workshop_reference_wellnova.pdf',
  'Logging_Data_159F11B.DLIS',
];

const body = document.querySelector('.body');

files.forEach((filename, index) => {
  const section = document.createElement('section');

  if (index % 2 === 1) {
    section.classList.add('background-gray');
  }

  const h2 = document.createElement('h2');
  h2.textContent = filename;

  const button = document.createElement('button');
  const img = document.createElement('img');
  img.src = './img/Download.svg';
  img.alt = 'Download';

  button.appendChild(img);

  button.addEventListener('click', () => {
    const link = document.createElement('a');

    if (filename === 'Logging_Data_159F11B.DLIS') {
      link.href = 'https://buronius.com/Logging_Data_159F11B.DLIS';
    } else {
      link.href = `./files/${filename}`;
    }

    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  });

  section.appendChild(h2);
  section.appendChild(button);
  body.appendChild(section);
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS carregado!');
});
