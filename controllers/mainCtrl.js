/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var appmdl = require('../models/mainModel');
var fs = require('fs');
// frist task
exports.getsubmitdataCtrl = function (req, res) {
    appmdl.getMdl(function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.postdataCtrl = function (req, res) {
    var data=req.body;
    console.log(req);
    appmdl.postsubdataMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.postsubcateCtrl = function (req, res) {
    var data=req.body;
    appmdl.postsubcateMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
exports.getsubcateCtrl = function (req, res) {
    appmdl.getsubdataMdl(function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.getItemDataCtrl = function (req, res) {
    appmdl.getItemDataMdl(function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.additemdateCtrl = function (req, res) {
    var data=req.body;
    var image = data.image;
    var imageupload = '';

    var array = image[0].reviewimg.split(',');
    var datetimestamp = Date.now();
    var random_number = Math.floor(100000 + Math.random() * 900000);
    var unicnumber = random_number + '' + datetimestamp;
    var base64Data = array[1];
    var filetype = image[0].filetype;
    fs.writeFile("../Api/images/" + unicnumber + "." + filetype, base64Data, 'base64', function (err) {
    });
    console.log(filetype);

    imageupload = "http://localhost/Api/images/" + unicnumber + '.' + filetype;

    appmdl.additemdateMdl(data,imageupload,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

//second post
exports.post1dataCtrl = function (req, res) {
    var data=req.body;
    appmdl.post1subdataMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}




exports.get1submitdataCtrl = function (req, res) {
    appmdl.get1Mdl(function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

////swathi 3


exports.post2dataCtrl = function (req, res) {
    var data=req.body;
    appmdl.post2subdataMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.get2submitdataCtrl = function (req, res) {
    appmdl.get2Mdl(function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}





//fourth


exports.post2dataCtrl = function (req, res) {
    var data=req.body;
    appmdl.post2subdataMdl(data,function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

exports.get2submitdataCtrl = function (req, res) {
    appmdl.get2Mdl(function (err, results) {
        if (err) {
            res.send(500, "Server Error");
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

