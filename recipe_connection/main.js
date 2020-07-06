const cities = require('cities');
const mod = require('./mod');

const myCity = cities.zip_lookup('10016');
console.log(myCity);
console.log(mod.hoge);
console.log(mod.sum(4,5));