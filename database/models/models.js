var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    createTime: {
        type: Date,
        default: Date.now()
    }
});

var articleSchema = new Schema({
    title: String,
    author: String,
    tag: String,
    content: String,
    createTime: {
        type: Date,
        default: Date.now()
    }
});

var commentSchema = new Schema({
    name:String,
    content:String,
    createTime: {
        type: Date,
        default: Date.now()
    }
})

exports.User = mongoose.model('User',userSchema);
exports.article = mongoose.model('Article',articleSchema);
exports.Comment = mongoose.model('Comment',commentSchema);