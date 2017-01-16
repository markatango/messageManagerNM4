# messageManagerNM4
This is a working implementation of the code from the Lynda course, "MEAN Stack and MongoDB Development Techniques", 
taught by Alexander Zanfir.  It is parked in this repository so I can continue debugging it as I travel and take advantage of
impromptu gaps in my schedule to do a little development.

My main goal is to streamline the gulp task list and simplify the implementation.

To install:

First install 
* Node version 4.5.0, 
* MongoDB version 3.2.9
* git
* bower
* gulp
. 
You might also need VBuild (Windows) or build-essential (Linux). 
I suggest using these _exact_ versions of Node and MongoDB,only because I continue to have bad experiences relying on npm to get
all the dependencies sorted right, and because one of the well-known idiosyncracies of Node development is the frequent change 
rate and inconsistent forward and backward compatibilities of the modules.

Then:

Open a command prompt window.
```
git clone http://github.com/markatango/messageManagerNM4.git
cd messageManagerNM4
```
Navigate to the ```back-end``` folder.
```
npm install
```
Navigate to the ```front-end``` folder.
```
npm install
bower install
```
Start mongo and confirm it's waiting for a connection.

Go back to the ```back-end``` folder and:
```
node server
```

A server should start up on port 5000 and a message should appear declaring successful connection to MongoDB.

Now open a second command prompt window, navigate to ```front-end```, and:
```
gulp serve
```

Finally, open a browser to localhost:3000, and you should see the application.


