# ToDoist

To launch the application
 First install all dependencies for Client and Api folders separately
 - For both Api and Client, Node.js needs to be installed on the system can be found here: https://nodejs.org/en/. I used v8.9.1
 - For Api run "npm install" in cmd or similar, inside folder to install dependencies.
 - For Client run "yarn install" in cmd or similar, inside folder to install dependencies.
 - You'll also need to create a database for your application, this application is setup to use a mongoDB. To create a mongodb, i would suggest using mlabs sandbox solution, at least while developing or testing (link: https://mlab.com/). After creating a database using mlabs steps. You should navigate to the file config-sample.json which can be found inside the api folder, this file should be renamed to config.json, then open the file and insert the URI for your mlab database. 

 Now you should be good to go!
 - For Api to start run "npm start", then the rest-api should be ready on port 8000.
 - For Client to start run "yarn serve", then the frontend should be launched on port 8080.
 - To use the application navigate to localhost:8080 inside your browser, and it should be there to be found. :D  
