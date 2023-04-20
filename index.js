const express = require('express');
const fs = require('fs');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');

const app = express();


// setup sassmiddleware

app.use(sassMiddleware({
  src: path.join(__dirname, 'public/sass'),
  dest: path.join(__dirname, 'public/css'),
  debug: false,
  outputStyle: 'compressed',
  prefix:  '/css' ,
//   force:true
}));

// Serve static files from the 'public' folder
app.use(express.static('public')); 

// setup view
app.set('view engine', 'ejs');

// routers
app.use('/',require('./routers/index'))

//setup port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
