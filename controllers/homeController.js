const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

//homepage
module.exports.home = function(req, res){
  const directoryPath = path.join(__dirname,'..', 'uploads');

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send(err);
    }
    // Filter out non-CSV files
    const csvFiles = files.filter(file => file.endsWith('.csv'));
    // res.send(files)
    // Render the EJS view with the list of filenames and the upload form
    ejs.renderFile('views/files.ejs', { files: csvFiles }, (err, html) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(html);
    });
  });
}

// display the content of the csv 
module.exports.display =  function(req, res){
  const filename = req.query.file;
  if (!filename) {
    res.send("Don't press enter while searching");
    return;
  }
  const filePath = path.join(__dirname,'..','uploads',filename);
//   console.log(typeof filePath)
  // table data would be stored as row 
  const rows = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      rows.push(row);
    })
    .on('end', () => {
      
      res.render('display.ejs', { 
        data: rows ,
        successMsg: 'File uploaded successfully'});
    });
}

// upload csv file
module.exports.upload = function(req, res){
  if (!req.file) {
    return res.status(400).send('No file was uploaded.');
  }
  return res.redirect('/');

//   return res.redirect('files')
}