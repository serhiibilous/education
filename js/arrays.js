const cities = [
  { city: "Kyiv", population: 6_000_000 },
  { city: "Tokyo", population: 13_000_000 },
  { city: "New York", population: 22_000_000 },
  { city: "London1", population: 17_000_000 },
  { city: "London2", population: 17_000_000 },
  { city: "London3", population: 17_000_000 },
  { city: "London4", population: 17_000_000 },
  { city: "London5", population: 17_000_000 },
  { city: "London6", population: 17_000_000 },
  { city: "London7", population: 17_000_000 },
  { city: "London8", population: 17_000_000 },
  { city: "London9", population: 17_000_000 },
  { city: "London10", population: 17_000_000 },
];

// function filerCities(population, cities) {
//   return cities
//     .filter((city) => city.population >= population)
//     .map((city) => city.city);
// }

function filerCities(population, cities) {
  let filteredCities = [];
  for (let city of cities) {
    if (city.population >= population) filteredCities.push(city.city);
  }
  return filteredCities;
}

console.time();
const www = filerCities(13_000_001, cities);
console.timeEnd();
console.log(www);
