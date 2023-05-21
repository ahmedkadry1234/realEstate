const mongoose = require('mongoose');
const GridFs = require('gridfs-stream');
const keys = require('../config/keys')

const db = mongoose.connect(keys.mongoURI);

const bucket = new GridFs(db, "files");

module.exports = bucket;