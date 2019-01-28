#!/usr/bin/env node

const inquirer = require("inquirer");
const cfonts = require("cfonts");
const opn = require("opn");
const boxen = require("boxen");


const options = {
	padding : 1,
	margin : 1,
	borderStyle: 'double'	
}

const actions = {
  Linkedln() {
    opn("http://elijahmanor.com/");
  },
  GitHub() {
    opn("https://github.com/pecoraroFRANCESCO");
  },
  Quit() {
    process.exit();
  }
};

// cfonts.say("Elijah Manor", {
//   font: "chrome",
//   colors: ["blue", "white", "blue"]
// });

console.log(`Pecoraro Francesco - @pecoraroFRANCESCO`);
console.log(`Développeur Junior BeCode chez BeCode.org`);


// const promise = new Promise( function(resolve){

//   resolve('success!'); 

// });

const promise = new Promise(function(){
  console.log('aaaaaaa');
});

promise.then(function(){
  inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      choices: [
        "Linkedln",
        "GitHub",
        "Quit"
      ]
    }
  ])
  .then(answers => {
    actions[answers.choice]();
    process.exit();
  });
})

const promise = new Promise(function (){
  promise.then(function(){
    inquirer
      .prompt([
      {
        type: "list",
        name: "choice",
        choices: [
          "Linkedln",
          "GitHub",
          "Quit"
        ]
      }
    ])
      .then(answers => {
        actions[answers.choice]();
        process.exit();
      })
  })

});
















  prom = new String(promise);
  console.log(boxen(prom, options));



















