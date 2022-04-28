'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var bookListSchema = Schema({
    id: Mixed,
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: Mixed,
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    authors: Mixed,
    categories: Mixed,
});

module.exports = mongoose.model('BookList', bookListSchema);
