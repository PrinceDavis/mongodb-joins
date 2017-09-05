# koa-api-starter
Empty app structure for developing web apps and webservices

Simple file structure to get started developing web and api application using nodejs

### Optional Setup Requirement ###
The following component is required to set up the app on any system.

* [ossaijad/node-ready](https://app.vagrantup.com/ossaijad/boxes/node-ready) A vagrant box with configured for developing node application.
* You can pull the box and run the app inside, everything from latest node, redis, mongodb, node reverse proxsy with nginx, rabbitmq etc configured and working

### Running app ###
* Clone repository: ` git clone https://github.com/PrinceDavis/koa-api-starter.git`
* Rename folder
* Switch into project directory
* Create .env file for keep credentails: `touch .env`
* Should you another http framework please remove the koa boilerplate in server.js
* Install dependencies as you see fit
* Start web server: `vagrant up` (Optional)
* Happ coding ):