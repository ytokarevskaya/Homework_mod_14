const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const xmlDom = parser.parseFromString(xmlString, 'text/xml');
const listNode = xmlDom.querySelector("list");
let result = [];
listNode.querySelectorAll("student").forEach(student => {
  
  const nameNode = student.querySelector("name");
 
 result.push({
    name: nameNode.querySelector("first").textContent + " " + nameNode.querySelector("second").textContent,
    age: Number(student.querySelector("age").textContent),
    prof: student.querySelector("prof").textContent,
    lang: nameNode.getAttribute("lang"),
  });
});
console.log(result)

