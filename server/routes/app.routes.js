var app = require('../../app.js')
var models = require('../../database/models/models');
var User = models.User;
var Article = models.article;
var Comment = models.Comment
var crypto = require('crypto');

module.exports = function (app) {
    var session = undefined;
    app.get('/',function(req,res){
        res.sendFile("/home/a62527776a/NetBeansProjects/myblog/client/index.html");
    });
    app.post('/api/login',function(req,res){
        var username = req.body.username;
        var password = req.body.password;
        var md5 = crypto.createHash('md5'),
            md5password = md5.update(password).digest('hex');
        User.findOne({username: username}, function(err, user){
            if(err){
                console.error(err);
                res.send([{"login_status":"400","login_info":"登录失败"}])
                return next(err);
            }
            if(!user){
                console.log('用户名不存在');
                res.send([{"login_status":"400","login_info":"登录失败"}])
                return;
            }
            if(user.password !== md5password) {
                console.log('密码错误！');
                res.send([{"login_status":"400","login_info":"登录失败"}])
                return;
            }
            console.log('登录成功');
            res.send([{"login_status":"200","login_info":"登录成功"}])
            user.password = null;
            delete user.password;
            req.session.user = user;
            session = user;
        })
    });
    app.post('/api/register',function(req,res){
        var username = req.body.username;
        var password = req.body.password;
        var passwordrepeat = req.body.passwordrepeat;
        if(password == passwordrepeat){
            console.log('两次密码输入不一致');
            return res.redirect('/register');
        }
        User.findOne({username: username},function(err, user){
            if(err){
                console.error(err);
                return res.redirect('/register');
            }
            if(user){
                console.log('用户名已存在');
                return res.redirect('/register');
            }

            var md5 = crypto.createHash('md5'),
                md5password = md5.update(password).digest('hex');

            var newUser = new User({
                username: username,
                password: md5password
            })

            newUser.save(function(err, doc){
                if(err){
                    console.error(err);
                }
                console.log('注册成功');
                newUser.password = null;
                delete newUser.password;
                req.session.user = new User;
            })
        })
    });

    // app.get('/article_detail/:_id', function(req,res){
    //     Article.findOne({_id: req.params._id})
    //         .exec(function(err,art){
    //             if(err){
    //                 console.error(err);
    //                 return res.redirect('/');
    //             }
    //             res.json(art);
    //             console.log(art);
    //         })
    //     });
    app.get('/article/article_detail/:id',function(req,res){
        Article.findOne({_id: req.params.id}).exec(function(err,art){
            if(err){
                console.log(err);
                return res.redirect('/');
            }
            console.log(art);
            res.send(art);
        });
    })
    app.get('/article/article_upload');
    app.get('/article/article_list',function(req,res){
        Article.find().exec(function(err,arts){
            if(err){
                console.log(err);
            }
            res.send(arts);
        });
    })
    app.post('/article/post',function(req,res){
        var article = new Article({
            title: req.body.article_title,
            content: req.body.article_content
        });

        article.save(function(err, doc){
            if(err){
                console.log(err);
            }
            console.log('文章发表成功');
        })
    })
    app.delete('/article/post/:id',function(req,res){
        var id = req.params.id;
        Article.remove({_id:id}).exec(function(err,arts){
            if(err){
                console.log(err);
            }
            res.send(arts);
        })
    })
    app.get('/api/comment',function(req,res){
        Comment.find().exec(function(err,arts){
            if(err){
                console.log(err);
            }
            res.send(arts);
        });
    })
    app.post('/api/comment',function(req,res){
        var comment = new Comment({
            name: req.body.comment_name,
            content: req.body.comment_content
        });

        comment.save(function(err, doc){
            if(err){
                console.log(err);
            }
            console.log('留言发布成功');
            res.send(doc);
        })
    })
    app.delete('/api/comment/:id',function(req,res){
        var id = req.params.id;
        Comment.remove({_id:id}).exec(function(err,arts){
            if(err){
                console.log(err);
            }
            res.send(arts);
        })
    })
    app.get('/api/ifLogin',function(req,res){
        console.log(session);
        if(!session){
            res.json([{login:'no'}])
        } else {
            res.json([{login:'yes'}])
        }
    })
    app.get('/api/logout',function(req,res){
        session = undefined;
        res.json([{login:'no'}])
    })
}