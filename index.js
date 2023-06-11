#! /usr/bin/evn/ node

// console.log("Hello World");

const { default: axios } = require("axios");
const { stdin, stdout } = require("process");

/*
Run this app from the command line 
Prompt the user asking what they ate, and how much 
Show the user how many calories are in that food 
Setup database 
*/

const readLine = require("readline").createInterface({
  input: stdin,
  output: stdout,
});

readLine.question(`What would you like to log today? `, async (item) => {
  const { data } = await axios.get("http://localhost:3001/food");

  const it = data[Symbol.iterator]();
  let position = it.next();
  while (!position.done) {
    const food = position.value.name;
    console.log(item, food);
  }

  readLine.close();
});
