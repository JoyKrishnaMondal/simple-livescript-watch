
module.exports = function(cwd){


	fs = require('fs');
	livescriptCompiler = require("livescript");

	var listOfStuff = fs.readdirSync('\.');
	var size = listOfStuff.length;

	var re = /(.*)\.ls/

	var White = "\033[0;37m";
	var LightGreen = "\033[1;32m";
	var Green = "\033[0;32m";
	var RedLight = "\033[0;31m";
	var Red = "\033[1;31m";
	var Brown = "\033[0;33m";

	var log = function(string)
	{
		process.stdout.clearLine();
		process.stdout.cursorTo(0);
		process.stdout.write(string);
	}

	var SetUpWatch = function(File)
	{
		fs.watch(File,function(err){
		if (err !== "change") return
		try{
		  var file = fs.readFileSync(File);
			var compiled = livescriptCompiler.compile(file.toString());
			fs.writeFileSync(File.match(re)[1] +".js",compiled);
			log ((Green + "LiveScript compilation for " + LightGreen + File + Green + " is complete." + White));

		}catch (e)
		{
			var string1 = (Red + File + RedLight + " : " );

			var string = e.toString();

			log ( string1 + RedLight + string.replace(/(line\s\d*)/,function(x){return (Red + x + RedLight);}) + White);
		}
	});

	}



	var Fn = function(path,File){




		var absFile = path +'\\'+ File;

		var Val = re.test(absFile);

		if (Val == true)
		{
			SetUpWatch(absFile);
		}
		else if( Val == false)
		{

			if ((fs.statSync(absFile)).isDirectory()== true)
			{
				(fs.readdirSync(absFile)).map(function(x){Fn(absFile,x)});
			}
			else return
		}


	};


	process.stdout.write(Brown+"Searching..");
	listOfStuff.map(function(x){Fn(process.cwd(),x);});
	process.stdout.write("Done. Any " + Green +".ls" + Brown +" save will result in compilation. \n"+White);

	};
