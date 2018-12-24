var json2csv = require('json2csv');

exports.get = function(req, res) {

	//var fields = Object.keys(Author.schema.obj);
	var fields = [
		'UserName',
		'Moc',
		'BitBerryID',
		'Mog'
	];

	//var csv = json2csv({ data: '', fields: fields });
	var csv = json2csv({ data: '', fields: fields });
	res.set("Content-Disposition", "attachment;filename=authors.csv");
	res.set("Content-Type", "application/octet-stream");

	res.send(csv);

};