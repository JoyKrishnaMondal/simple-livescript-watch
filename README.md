

```javascript
npm install simple-livescript-watch
```

Very simple livescript build that starts a watch and compile process for any `.ls` scripts in your directory structure, The only dependencies is the livescript compiler that needs to be installed locally.
If you are not too sure about how to install the livescrip compiler just run
```javascript
npm update
```

and npm will magically install all the requried dependencies

*Note:*If you add a new livescript file you need to restart the function/process.

to run simply

```javascript
require("simple-livescript-watch")()
```

IF you like your command line to have a black background, I have also tried to make it beautiful to your eyes. If someone knows how to add templates to command lines stuff please send me an email !

![alt text](http://i.imgur.com/tXZXFFD.png)

If you want to report any bug or want me to add any feature that you would like, please send me an email, I am really interested in hearing from you !

I have customized it slighly with file deletion and creation since I dont like to pollute my directory with many javascript files.

If you are interested for me to upload the customized version please send me a email ! I do not want to make it any more complicated that what it right now. Its made for people who want to quickly get started with livescript without having to write a lot of config or build files.





