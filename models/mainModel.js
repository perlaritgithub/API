var sqldb = require('../config/dbconnect');
var dbutil = require(appRoot + '/utils/dbutils');
var moment = require('moment');

//Secure start

// exports.getdesignationMdl = function (callback) {

// 	var cntxtDtls = "in getdesignationMdl";
// 	var QRY_TO_EXEC = ` SELECT * from designation where d_in='0';`;
// 	console.log(QRY_TO_EXEC);
// 	if (callback && typeof callback == "function") {
// 		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
// 			callback(err, results);
// 			return;
// 		});
// 	}
// 	else
// 		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
// };
//first post
exports.postsubdataMdl = function (data,  callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in postsubdataMdl";
	var QRY_TO_EXEC = `insert into ksdata (name)values('${data.name}'); `;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.postsubcateMdl = function (data,  callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in postsubcateMdl";
	var QRY_TO_EXEC = `insert into swadata (cate_id,cate_name,Subcategory)values('${data.cate.id}','${data.cate.name}','${data.Subcategory}'); `;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.getsubdataMdl = function (  callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in getsubdataMdl";
	var QRY_TO_EXEC = `select * from swadata  `;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


exports.additemdateMdl = function (data,image,  callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in additemdateMdl";
	// console.log(data);
	var QRY_TO_EXEC = `insert into swadata2 (cate_id,cate_name,sub_cate_id,image, sub_cate_name,ItemName,ItemDescription, 	AddMeasurements,AddKeywords	)
	values('${data.cate_id.id}','${data.cate_id.name}','${data.sub_cate_id.id}','${image}', '${data.sub_cate_id.Subcategory}','${data.ItemName}','${data.ItemDescription}','${data.AddMeasurements}','${data.AddKeywords}'); `;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};





exports.getItemDataMdl = function (  callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in getItemDataMdl";
	var QRY_TO_EXEC = `select * from swadata2  `;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};







exports.getMdl = function (callback) {

	var cntxtDtls = "in getMdl";
	var QRY_TO_EXEC = ` SELECT * from ksdata;`;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
//second post

exports.post1subdataMdl = function (data,  callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in post1subdataMdl";
	var QRY_TO_EXEC = `insert into swadata (Subcategory)values('${data.Subcategory}'); `;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.get1Mdl = function (callback) {

	var cntxtDtls = "in get1Mdl";
	var QRY_TO_EXEC = ` SELECT * from swadata;`;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};


////swathi3


exports.post2subdataMdl = function (data,  callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in post2subdataMdl";
	var QRY_TO_EXEC = `insert into swadata1 (ItemName,ItemDescription,AddMeasurements,AddKeywords)values('${data.ItemName}','${data.ItemDescription}','${data.AddMeasurements}','${data.AddKeyword}'); `;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.get2Mdl = function (callback) {

	var cntxtDtls = "in get2Mdl";
	var QRY_TO_EXEC = ` SELECT * from swadata1;`;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};



//fourth



exports.post2subdataMdl = function (data,  callback) {
	var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
	var cntxtDtls = "in post2subdataMdl";
	var QRY_TO_EXEC = `insert into swadata2 (id,name,Subcategory,ItemName,ItemDescription,AddMeasurements,AddKeywords)values('${data.id}','${data.name}','${data.Subcategory}','${data.ItemName}','${data.ItemDescription}','${data.AddMeasurements}','${data.AddKeyword}'); `;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

exports.get2Mdl = function (callback) {

	var cntxtDtls = "in get2Mdl";
	var QRY_TO_EXEC = ` SELECT * from swadata2;`;
	console.log(QRY_TO_EXEC);
	if (callback && typeof callback == "function") {
		dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
			callback(err, results);
			return;
		});
	}
	else
		return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};




