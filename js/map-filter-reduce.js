"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//=== Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const threeLanguages = users.filter(user => user.languages.length >= 3);

console.log(threeLanguages);


//=== Use .map to create an array of strings where each element is a user's email address

const userEmail = users.map(user => user.email);
console.log(userEmail);

//=== Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce((totalSoFar, user) => {
    return totalSoFar + user.yearsOfExperience;
}, 0);
const average = totalYears / users.length;
console.log(totalYears);

//=== Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((longestEmailSoFar, user) => {
    if (user.email.length > longestEmailSoFar.length) {
        return user.email;
    }
    return longestEmailSoFar
}, '');

console.log(longestEmail);


//=== Use .reduce to get the longest name from the list of users.

const longestName = users.reduce((longestNameSoFar, user) => {
    if (user.name.length > longestNameSoFar.length) {
        return user.name ;
    }
    return longestNameSoFar;
}, '');
console.log(longestName);


//=== Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const names = users.reduce((namesSOFar, user) => {
    if (namesSOFar.length > 0) {
        // if not the first iteration then prepend a comma ,
        namesSOFar += ", ";
    }
    return namesSOFar + user.name;
}, '')
console.log(`Your instructors are: ${names}`)


//--------------- additional way of solving the above problem
//below we use .map to create a new array with just the user.names
const names2 = users.map(user => {
    return user.name;
});
//  we log the new array of user.names, and .join to create and returns a new string by concatenating all of the elements in this array, separated by commas
console.log(names2.join(", "));


//=== BONUS: Use .reduce to get the unique list of languages from the list of users.

const languageSet = users.reduce((setSoFar, user) => {
    for (let i = 0; i < user.languages.length; i++) {
        setSoFar.add(user.languages[i])
    }
    return setSoFar;
}, new Set());
console.log(languageSet);