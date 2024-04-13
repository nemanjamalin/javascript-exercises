const findTheOldest = function(people) {
    const oldestAge = people.reduce((acc,person)=>{
        let age = (person.yearOfDeath ? person.yearOfDeath : 2024) - person.yearOfBirth;
        if(acc<age) acc = age;
        return acc;
    },-1);

    const oldestPerson = people.filter((person) =>{
        let age = (person.yearOfDeath ? person.yearOfDeath : 2024) - person.yearOfBirth;
        return age === oldestAge;
    })

    return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;


