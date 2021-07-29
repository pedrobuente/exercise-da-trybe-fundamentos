const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
// //   Adicione se código aqui
  people.sort((a,b) => {
      if (a.name < b.name){
          return -1;
      }else{
          return true;
      }
  });
  console.log(people);

  