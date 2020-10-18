const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
// const list = data.list;
// const results = [];

// list.forEach(result => {
//   results.push({
//   name: result.name,
//   age: Number(result.age),
//   prof: result.prof
//   });
//  });
// const log = {
//    list: results
// };

console.log(data)

// Решение верное, но не совсем оптимальное - много лишних действий :) JSON.parse по умолчанию создает из JSON-строчки готовый Javascript-объект, заполнять объект вручную (как при работе с XML) нет необходимости. Выше закомментировала всё лишнее