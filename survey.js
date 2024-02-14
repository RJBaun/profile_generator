const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Please answer the following questions: `);

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (listensTo) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (mealDay) => {
        rl.question("What's your favourite thing to eat for that meal? ", (mealFood) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log(`${name} loves listening to ${listensTo} while ${activity} and devouring ${mealFood} for ${mealDay}. ${name} prefers ${sport} over any other sport, and is amazing at ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
