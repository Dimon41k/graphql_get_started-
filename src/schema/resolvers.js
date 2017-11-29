let persons = [
  {
    id: 1,
    name: 'Sasha',
    age: 25
  },
  {
    id: 2,
    name: 'Kolya',
    age: 24
  },
];

let posts = [
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
      },
      deletePerson: (_, data) => {
	person = persons.find(function(x){
		return x.id === data.id
	});
	persons = persons.filter(function(x){
        return x.id !== data.id;
	});
	return person;
      },
      updatePerson: (_, data) => {

	person = persons.find(function(x){
		return x.id == data.id
	});
console.log(person, data);
	persons = persons.map(function(x){
	if(x.id  == data.id)
        return data;
	else return x;
	});
	return person;
      }
    },
};
