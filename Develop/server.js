const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const path =require('path');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')))

const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// Set up routes for login and logout
app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  // Handle login logic here
  res.send('Login successful!');
});

app.post('/logout', (req, res) => {
  // Handle logout logic here
  res.send('Logout successful!');
});


app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup', (req, res) => {
  // Handle signup logic here
  const { username, password } = req.body;
  // Process the submitted data, e.g., save it to a database

  res.send('Signup successful!');
});
