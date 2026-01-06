document.addEventListener('DOMContentLoaded', () => {
  const files = [
    'Cement Integrity_Solution_VF1.pdf',
    'Digitization_Solution_VF1.pdf',
    'Module_Manual_1.0_1.pdf',
    'Solutions_VF1_1.pdf',
    'Step_by_step_1.pdf',
    'Logging_Data_159F11B.DLIS',

    '2nd_Opinion_159F11B.csv',
    'CBL_USIT_Logs.pdf',
    'Cement Integrity - Solution.pdf',
    'Completion_159F11B.PDF',
    'Digitalization - Solution.pdf',
    'Logging_Data_159F11B.DLIS',
    'Reference-Cement.pdf',
    'Solutions.pdf',
    'Step by step.pdf',
    'Wellnova_Solutions.pdf',
    'Workshop_Cement Integrity_Wellnova.pdf',
  ];

  const topics = [
    {
      title: 'Material Informativo',
      files: ['Cement Integrity_Solution_VF1.pdf', 'Module_Manual_1.0_1.pdf'],
    },
    {
      title: 'Digitization',
      files: ['Digitization_Solution_VF1.pdf', 'Step_by_step_1.pdf'],
    },
    {
      title: 'General',
      files: ['Solutions_VF1_1.pdf'],
    },
  ];

  const body = document.querySelector('.body');
  if (!body) return;

  body.innerHTML = '';

  topics.forEach((topic) => {
    const topicTitle = document.createElement('h2');
    topicTitle.classList.add('topic-title');
    topicTitle.textContent = topic.title;

    const topicContainer = document.createElement('div');
    topicContainer.classList.add('topic-container');

    topicContainer.appendChild(topicTitle);

    topic.files.forEach((filename, index) => {
      const section = document.createElement('section');

      if (index % 2 === 1) {
        section.classList.add('background-gray');
      }

      const h2 = document.createElement('h2');
      h2.textContent = filename;

      const button = document.createElement('button');
      button.type = 'button';

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

        document.body.appendChild(link);
        link.click();
        link.remove();
      });

      section.appendChild(h2);
      section.appendChild(button);

      topicContainer.appendChild(section);
    });

    body.appendChild(topicContainer);
  });

  console.log('JS carregado!');
});
