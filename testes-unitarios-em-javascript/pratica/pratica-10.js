const assert = require('assert');
const greetPeople = (people) => {
    
    let newArray = [];
  
    for (const person in people) {
      newArray.push(`Hello ${people[person]}`);
      
    }
    return newArray;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
  const output = greetPeople(parameter);

  assert.deepStrictEqual(output,result, 'erro');

