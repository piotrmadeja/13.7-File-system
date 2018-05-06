var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files){
	if(err) throw err;
	var content = files;
	console.log('List of files in directory :'.cyan)
	
	for(var i=0; i<content.length; i++){
    var row = '\n' + content[i] + ', ';
		console.log(row);
		fs.appendFile('./Directory-content.txt', row , function(err){
			if(err) throw err;
		});
	}
	console.log('\nWriting file list to .txt'.green);
});

fs.writeFile('./Directory-content.txt...', ' ', function(err, data){
  if(err) throw err;
  console.log('\nDone!'.green);
});
