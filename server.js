// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/greetings/:username', (req, res) => {
//   const username = req.params.username;
//   const greeting = generateGreeting(username); 

//   res.send(greeting);
// });

// function generateGreeting(username) {
//   const greetings = [
//     `May the Lord bless you and keep you, ${username}; the Lord make his face shine on you and be gracious to you, ${username}; the Lord turn his face toward you and give you peace. - Numbers 6:24-26`,
//     `And my God will meet all your needs, ${username}, according to the riches of his glory in Christ Jesus. - Philippians 4:19`,
//     `${username}, every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change. - James 1:17`,
//     `Give, ${username}, and it will be given to you. Good measure, pressed down, shaken together, and running over, will be poured into your lap, ${username}. For with the measure you use, ${username}, it will be measured to you, ${username}. - Luke 6:38`,
//     `The Lord bless you and keep you, ${username}; the Lord make his face shine on you and be gracious to you, ${username}; the Lord turn his face toward you, ${username} and give you peace. - Numbers 6:24-26`,
//   ];

//   const randomIndex = Math.floor(Math.random() * greetings.length);
//   return greetings[randomIndex];
// }

// app.listen(3000, () => {
//   console.log('Server has ears on port 3000');
// });


// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/roll/:number', (req, res) => {
//   const number = parseInt(req.params.number);

//   if (isNaN(number)) {
//     res.send('You must specify a number.');
//   } else {
//     const randomNum = Math.floor(Math.random() * (number + 2));
//     res.send(`You rolled a ${randomNum}`);
//   }
// });

// app.listen(port, () => {
//   console.log(`We got ears on port ${port}`);
// });

// const express = require('express');
// const app = express();
// const port = 3000;

// const collectibles = [
//   { name: 'shiny ball, set of 2', price: 54275.95 },
//   { name: 'autographed picture of a rabid dog', price: 846710.17 },
//   { name: 'vintage 1970s strawberry yogurt mold SOLD AS-IS', price: 80085.03 }
// ];

// app.get('/collectibles/:index', (req, res) => {
//   const index = parseInt(req.params.index);

//   if (index < 0 || index >= collectibles.length) {
//     res.send('This item is not yet in stock. Check back soon!');
//   } else {
//     const collectible = collectibles[index];
//     res.send(`So, you think you can afford the ${collectible.name}? It's  ${collectible.price}. You don't look like you have the funds, you unworthy peasant, son of a motherless dog!`);
//   }
// });

// app.listen(3000, () => {
//   console.log('Listening on port 3000')
// });

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/hello', (req, res) => {
//   res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
// });

// app.listen(3000, () => {
//   console.log('Listening on port 3000')
// });
const express = require('express');
const app = express();
const port = 3000;

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
  const { minPrice, maxPrice, type } = req.query;

  const filteredShoes = shoes.filter(shoe => {
    if (minPrice && shoe.price < minPrice) return false;
    if (maxPrice && shoe.price > maxPrice) return false;
    if (type && shoe.type !== type) return false;
    return true;
  });

  res.json(filteredShoes);
});

app.listen(3000, () => {
  console.log('Listening on port 3000')
});