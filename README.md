# Finanical system simulation

#### How to use!
	This project uses nodejs, angularjs, grunt, node and nodemon. Follow these instruction to setup the project. 

	Start by cloning the project and read this readme.me

	You will need to check if you have Node installed 
		Goto terminal
		
		 	Type: node - v
		
		If node is not present goto nodes website, download node and install

			https://nodejs.org/en/download/ 
		
		Note if you get an error by useing npm <command>, then use sudo.

		Now since node is installed you can install nodemon
			
			Type: npm install nodemon -g

		Now we need to install grunt and grunt-cli 
			
			Type: npm install grunt -g
			Type: npm install grunt-cli -g


	Now the main things should be installed to run the project. 

	Now go into the folder you cloned, it should be named FSIM, in there we need to install dependancy. 

		Type: npm install

	After this the only thing that you should need to do is to be at FSIM folder.

		Type: grunt

	At this point you should get message in terminal that the server is up and running at port 3000.

	Go to browser : http://localhost:3000

	Your'e done! 


#### Folder structure and info
```
.
|
|-- bin				
|    -- www							* Create of server and other things related to it. 
|
|-- node_modules					* node installed dependancy for the project. ( npm install )
| 									
|--	public 							* FRONT END OF THE PROJECT IS ALL HERE. 
|   |
|	|-- assets 							* Here we have all css, image and js files. mainbuild contains js and css code from views.
|   |   |
|   |   |-- css
|	|	|	|-- *.css 						* Extra css and maps needed from bootstrap or other library needed
|	|	|	 -- *.map
|   |   |   
|	|   |-- fonts 							* Fonts of the web..
|	|	|	 -- *.relatedType
|   |   |
|	|	|-- image							* Holds each image needed on the web..
|	|	|	 -- *.type	
|   |   |  
|	|	|-- js  							* Extra js f.x. angular, bootstrap and other library needed. 
|	|	|	|-- *name 						
|	|	|   |   -- *name
|	|	|	 -- *.js
|   |   |
|	|	 -- mainbuild 						* Files from views folder below, see Gruntfile.js concat 
|	|		|-- *.js 							* Concated file from views
|	|		 -- *.css							* Concated file from views
|   |
|	|--	views 							* Main view folder for angular, app route and each component. 
|   |   | 
|	|	|-- components 						* All the controllers, factory, html and css for each webpage.
|	|	| 	 -- *foldername  					* Name of page in the project. e.q. frontpage.
|	|	|		|-- *Controller.js  				* Logic for each part, gets concated to main.js
|	|	|		|-- *Factory.js 					* Bridge between from controller to API, gets concated to main.js 
|	|	|		|-- *.html 							* Html code for the component part
|	|	|		 -- *.css 							* Same as others, gets concated to main.css
|   |   |
|	|	|-- languages 						* Languages are stored here, *.json needs to be same 
|	|	|	 -- *.json							* Is the language files
|   |   |
|	|	|-- angularApp.js 					* Declare all the routes for angular, configure and more.
|   |   |
|	|	 --	error.html 				
|	 -- index.html 					* Master layout for the web, angular get injected here, navbar is here also
|	
|-- routes							* BACK END OF THE PROJECT IS ALL HERE
|	|-- lib 							* Helpers and logic is here, used to reuse the code in http route
|	|	-- *.js 							* Each file has it's purpose, naming describes each part. 
|	 -- *.js 							* Http api routes logic, naming descibes each part.
|
|-- app.js 							* Here we have configure of the server, what to use and more
|
|-- *
|       Other files are used for e.g. grunt, npm "package.json" and other .md files
*
```