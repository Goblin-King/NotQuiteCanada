# NotQuiteCanada
OSTEM-2019-NotQuiteCanada

oSTEM 2019 Hackathon project to improve voter turnout for queer folks in the Detroit area.

Instructions for using this project:
Currently, the project is a very barebones example of what the final product could be. We will explain where things can be built on most efficiently.
To run this site, one must simply download the project from this Github repository and move it into a place in your files you can remember. The machine hosting the site will also need Node.js, which can be installed from plenty of sources. You will also need to install the modules used in the app.js file, which should be easy to do from the command line. To run the site, open up a command line prompt, navigate to the directory with app.js, and run the command
node ./app.js
This will allow the site to listen and respond to requests when people try to access the site. Who can access the site will depend on the rules of the specific machine or network, i.e. whether all IPs are whitelisted or not. The site address will depend on the port specified in the app.js code and the IP address of the machine. On any web browser you should be able to enter it in the following syntax:
		“Host address”:”Port number”
Ex:
		18.191.132.193:3500 
to listen on port 3500 of an AWS EC2 instance we used for testing. The site should work as expected after this.

Changes and future directions:
Currently, the site is very static, but it can have a lot of functionality eventually. Our plan was to connect to a MongoDB database and query information from there, but we ran out of time before being able to add that in. A separate lightweight program would also likely have to be written just to alter the records in the database efficiently when given something like a csv file. This can be done very easily using something like python or even bash. We were using MongoDB Compass to edit and view the records. 
For making the site more aesthetically pleasing, supplementary .css files can be added or modified, but the html files must be used as .ejs so it can be interpreted properly by Express.
