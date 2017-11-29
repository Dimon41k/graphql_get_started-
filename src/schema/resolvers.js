const persons = [
  {
    id: 1,
    name: 'Sasha',
    description: 25
  },
  {
    id: 2,
    name: 'Kolya',
    age: 24
  },
];

const posts = [
  {
    id: 1,
    name: 'Sasha',
    description: 25
  },
  {
    id: 2,
    name: 'Kolya',
    age: 24
  },
];

module.exports = {
  Query: {
    allPersons: () => persons,
  },
  Mutation: {
      createPerson: (_, data) => {
        const newPerson = Object.assign({id: persons.length + 1}, data);
        persons.push(newPerson);
        return newPerson;
      }
    },
};
