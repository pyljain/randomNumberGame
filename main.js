const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Break the function down to separate recursive conditions from the parent condition, hence gameLoop was created to mimic a while loop
const secretNumber = Math.floor((Math.random() * 20) + 1);
rl.question('Let us Play. Can you guess what number I have in mind?', gameLoop);

function gameLoop(answer) {

    if(secretNumber > answer) {
      rl.question('Let us try again with a larger number? ', gameLoop);
    } else if (secretNumber < answer) {
      console.log('In lesser than condition');
      rl.question('Let us try again with a smaller number?', gameLoop);
    } else if(secretNumber == answer){
      console.log('In equal to condition');
      console.log('Bingo, you got it!');
      rl.close() //This needs to be in the condition as otherwise the engine goes on processing sequentially while function values
      //are processed synchronously.

    }
};
