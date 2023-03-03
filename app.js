const express = require("express");
const morgan = require('morgan');

//express app
const app = express();

//listen for request
app.listen(3000);

app.use(morgan('dev'));

// middleware & static files
app.use(express.static('public'));

// app.use((req, res) => {
//   console.log('new request made:');
//   console.log('host: ', req.hostname);
//   console.log('path: ', req.path);
//   console.log('method: ', req.method);
//   // next();
// });

// app.use((req, res, next) => {
//   console.log('in the next middleware');
//    next();
//  });

//register view engine
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
})




app.get("/", (req, res) => {
  res.render('index', { title: 'Home'});
});

app.get("/about", (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});


// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: '404' });
});


// app.get("/about", (req, res) => {
//   res.sendFile("./views/about.html", { root: __dirname });
// });

// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

//404 page
// app.use((req, res) => {
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
// });
