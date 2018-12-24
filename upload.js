var csv = require('fast-csv');
var mongoose = require('mongoose');
var Gem = require('./gem');
exports.post = function (req, res) {
	if (!req.files)
        return res.status(400).send('No files were uploaded.');
     /*   
      mongoose.connection.collections['Gem'].drop(function(err){
          console.log('collection dropped');
        });
	*/
	var gemFile = req.files.file;

    var Gems = [];
	
	csv
	 .fromString(gemFile.data.toString(), {
		 headers: true,
		 ignoreEmpty: true
	 })
	 .on("data", function(data){
		 data['_id'] = new mongoose.Types.ObjectId();
		 
		 Gems.push(data);
     })
	 .on("end", function(){
        Gem.create(Gems, function(err, documents) {
			if (err) throw err;
			res.send(Gems.length + '업데이트 완료');
		 });
	 });
};


