const express = require('express');
const app = express();
const port = 3000;

app.get('/greetings/:username', (req, res) => {
  const username = req.params.username;
  const greeting = generateGreeting(username); 

  res.send(greeting);
});

function generateGreeting(username) {
  const greetings = [
    `May the Lord bless you and keep you, ${username}; the Lord make his face shine on you and be gracious to you, ${username}; the Lord turn his face toward you and give you peace. - Numbers 6:24-26`,
    `And my God will meet all your needs, ${username}, according to the riches of his glory in Christ Jesus. - Philippians 4:19`,
    `${username}, every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change. - James 1:17`,
    `Give, ${username}, and it will be given to you. Good measure, pressed down, shaken together, and running over, will be poured into your lap, ${username}. For with the measure you use, ${username}, it will be measured to you, ${username}. - Luke 6:38`,
    `The Lord bless you and keep you, ${username}; the Lord make his face shine on you and be gracious to you, ${username}; the Lord turn his face toward you, ${username} and give you peace. - Numbers 6:24-26`,
  ];

  const randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

app.listen(3000, () => {
  console.log('Server has ears on port 3000');
});
