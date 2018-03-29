const express = require('express');
const reload = require('reload');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('a');
});

const arrWords = [ 
  { en: 'one', vn: 'một'},
  { en: 'two', vn: 'hai'},
  { en: 'three', vn: 'ba'},
];
app.get('/word', (req, res) => res.render('words', { words: arrWords}));

app.listen(4000, () => console.log('server started!'));
reload(app);