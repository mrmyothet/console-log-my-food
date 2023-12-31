#! /usr/bin/evn node

function myIterator(start, finish) {
  let index = start;
  let count = 0;
  return {
    next() {
      let result;
      if (index < finish) {
        result = { value: index, done: false };

        index += 1;
        count++;
        return result;
      }

      return {
        value: count,
        done: true,
      };
    },
  };
}

// const it = myIterator(0, 10);
// let result = it.next();

// while (!result.done) {
//   console.log(result.value);
//   result = it.next();
// }

const it2 = myIterator(0, 10);
for (let value, result; (result = it2.next()) && !result.done; ) {
  value = result.value;
  console.log(value);
}
