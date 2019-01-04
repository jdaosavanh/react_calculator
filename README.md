# React Calculator
Implementation of calculator using react

Node version 10 should be installed and NPM version 6

To install all packages go to into react-calculator directory and run "npm run install"
To run app run "npm run start"
It will run on localhost port 3000 by default
Go to localhost:3000 to see UI

# Docker
This is an example of how you could build a docker image and run a container with the app in it in detached mode
Run cmd "docker build -t react-calculator ." to build react calculator image
Run cmd "docker run -itd -p 3000:3000 --name calc react-calculator" to build container of program