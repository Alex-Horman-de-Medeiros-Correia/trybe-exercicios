
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

  const {spring, summer, autumn, winter} = yearSeasons;

  //Posso utilizar o object destructuring para depois me utilizar do spread operator e colocar tudo dentro de um array ou objeto!!!

  const mesesDoAno = [...spring, ...summer, ...autumn, ...winter];

  console.log(mesesDoAno);