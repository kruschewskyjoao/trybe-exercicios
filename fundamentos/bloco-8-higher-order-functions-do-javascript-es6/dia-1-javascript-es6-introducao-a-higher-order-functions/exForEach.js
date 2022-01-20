const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email, lugar, index) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  console.log(`Você passou na posição ${lugar} de um total ${index.length}`);
};

emailListInData.forEach(showEmailList)