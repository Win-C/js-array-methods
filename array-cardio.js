"use strict";

// Data for the array methods below
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 
  'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 
  'Beethoven, Ludwig', 'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 
  'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 
  'Berlin, Irving', 'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 
  'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 
  'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano', 'Berne, Eric', 
  'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 
  'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 
  'Biondo, Frank',
];

const boulevardsInParis = [
 "Boulevards of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles V",
  "Wall of Philip II Augustus",
  "City gates of Paris",
  "Haussmann's renovation of Paris",
  "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
]

const transportation = [
  'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 
  'car', 'van', 'car', 'truck',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let inventors15thCentury = inventors.filter(inventor => (
  inventor.year >=1500 && inventor.year <=1599
));
console.table(inventors15thCentury);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
let inventorsByName = inventors.map(inventor => (
  `${inventor.first}, ${inventor.last}`
));
console.log(inventorsByName);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let inventorsSortedByAge = inventors.sort((a, b) => (
  a.year - b.year
));
console.log(inventorsSortedByAge);


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let inventorsTotalYearsLived = inventors.reduce((sum, inventor) => {
  const inventorYearsLived = inventor.passed - inventor.year;
  return sum + inventorYearsLived;
}, 0);
console.log(inventorsTotalYearsLived);


// 5. Sort the inventors by years lived
inventors.map((inventor) => {
  inventor['yearsLived'] = inventor.passed - inventor.year
});
let inventorsSortedByYearsLived = inventors.sort((a, b) => (
  a.yearsLived - b.yearsLived
));
// Alternative option that does not alter inventor object
// let inventorsSortedByYearsLived = inventors.sort((inventorA, inventorB) => {
//   (inventorA.passed - inventorA.year) - (inventorB.passed - inventorB.year)
// });
console.log(inventorsSortedByYearsLived);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
let boulevardsFiltered = boulevardsInParis.filter(b => b.includes('de'));
console.log(boulevardsFiltered);

// From actual browser page
// const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')];
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));


// 7. sort Exercise
// Sort the people alphabetically by last name
let peopleSortedByLastName = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(', ');
  const [bLast, bFirst] = b.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log(peopleSortedByLastName);


// 8. Reduce Exercise
// Sum up the instances of each transportation method
// const transpoSet = new Set(transportation);
// const transpoInstances = {};

// for (let method of transpoSet){
//   const count = transportation.reduce((sum, elem) => {
//     return elem === method? sum + 1 : sum;
//   }, 0);
//   transpoInstances[method] = count;
// }

const transpoInstances = transportation.reduce((obj, item) => {
  obj[item] = (obj[item] || 0 ) + 1;
  return obj;
}, {});

console.log(transpoInstances);
