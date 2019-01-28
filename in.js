#!/usr/bin/env node
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

  module.exports = in;