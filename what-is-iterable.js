let arr = [0, 3, 6, 4];

for (const element of arr) {
  console.log("element ", element);
}

let it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const map = new Map();
map.set("Key1", "Value1");
map.set("Key2", "Value2");

for (const element of map) {
  console.log(element[0], element[1]);
}

const mapIterator = map[Symbol.iterator]();
console.log(mapIterator.next().value);
console.log(mapIterator.next().value);

for (const [key, value] of map) {
  console.log(`${key}, ${value}`);
}

const set = new Set();
set.add("first");
set.add("second");

for (const element of set) {
  console.log(element);
}

const setIterator = set[Symbol.iterator]();
console.log(setIterator.next().value);
console.log(setIterator.next().value);
console.log(setIterator.next().value);
