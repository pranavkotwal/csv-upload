## About 
csv-upload app with two views
- Home View for showing upload form and uploaded files
- display view for displaying the csv in table form

## How-To-Use

- Clone this project
- Start by installing npm
- Navigate to Project Directory
    ```
    cd upload-csv
    ```
- run following commands :
    ```
    npm install 
    ```
    ```
    npm start
    ```

# Folder Structure 
```
csv-upload
    |-----public
    |       |--- css
    |       |     |-- display.css
    |       |     |-- file.css
    |       |     
    |       |--- js
    |       |     |-- search.js
    |       |     
    |       |--- sass
    |             |-- display.scss
    |             |-- file.scss
    |             
    |------ config
    |         └--- mongoose.js
    |------ controllers
    |         └--- homeControllers.js
    |------ models
    |         └--- csvfile.js
    |------ routers
    |         └--- index.js
    |------ views
    |         |--- display.ejs
    |         |--- file.ejs
    |         
    |------ .gitignore
    |------ index.js
    |------ package.json
    |------ package-lock.json
    └------ README.md

