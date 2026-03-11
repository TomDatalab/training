document.addEventListener('DOMContentLoaded', () => {
  const files = [
    'Cement_Integrity-R_Aboud_Ouronova.pptx',
    'Cement_Integrity.pdf',
    'Consult_Material_Aboud.pdf',
    'Digitization.pdf',
    'Flyer-New_Project.pdf',
    'Passo_a_passo-PT_2.pdf',
    'Step_by_step-EN_3.pdf',
    'TECH_DAY.pdf',
    'Wellnova_Solutions.pdf',
  ];

  const topics = [
    {
      title: 'Informative Material',
      files: [
        'Cement_Integrity-R_Aboud_Ouronova.pptx',
        'Cement_Integrity.pdf',
        'Consult_Material_Aboud.pdf',
        'Digitization.pdf',
        'Flyer-New_Project.pdf',
      ],
    },
    {
      title: 'Hands-on Files ',
      files: [
        'Logging_Data_159F11B.DLIS',
        '2nd_Opinion_159F11B.csv',
        'Passo_a_passo-PT_2.pdf',
        'Step_by_step-EN_3.pdf',
        'TECH_DAY.pdf',
        'Wellnova_Solutions.pdf',
      ],
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
