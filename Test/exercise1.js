function findAllHobbyists(hobby, hobbies) {
    let persons = [];
    for (const person in hobbies) {
        for (let i = 0; i< hobbies[person].length; i++) {
            if (0 == hobby.localeCompare(hobbies[person][i])) {
                persons.push(person);
            }
        }
    }
    return persons;
  }
  var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading','a'],
    "Patty": ['Drama', 'Magic', 'Pets','a'],
    "Chad": ['Puzzles', 'Pets', 'Yoga','a']
  };
  console.log(findAllHobbyists('a', hobbies));