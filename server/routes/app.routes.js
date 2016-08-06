var app = require('../../app.js')
var checkLogin = require('../script/checklogin');
var models = require('../../database/models/models');
var User = models.User;
var Article = models.article;

module.exports = function (app) {

    app.get('/',function(req,res){
        res.sendFile("/home/a62527776a/NetBeansProjects/myblog/client/index.html");
    });
    app.get('/login',checkLogin.login);
    app.post('/api/login',function(req,res){
        var username = req.body.username;
        var password = req.body.password;

        User.findOne({username: username}, function(err, user){
            if(err){
                console.error(err);
                return next(err);
            }
            if(!username){
                console.log('用户名不存在');
                return res.redirect('/login');
            }
            var md5 = crypto.createHash('md5'),
                md5password = md5.update(password).digest('hex');
            if(user.password !== user.password){
                console.log('密码错误!');
                return res.redirect('/login');
            }
            console.log('登录成功');
            user.password = null;
            delete user.password;
            req.session.user = user;
            return redirect('/');
        })
    });
    app.get('/register',checkLogin.login);
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
                    return res.redirect('/register');
                }
                console.log('注册成功');
                newUser.password = null;
                delete newUser.password;
                req.session.user = new User;
                return res.redirect('/');
            })
        })
    });

    app.get('/article_detail/:_id', function(req,res){
        Article.findOne({_id: req.params._id})
            .exec(function(err,art){
                if(err){
                    console.error(err);
                    return res.redirect('/');
                }
                res.json(art);
                console.log(art);
            })
        });


    app.get('/article/article_upload',checkLogin.nologin);
    app.get('/article/article_list',function(req,res){
        Article.find().exec(function(err,arts){
            if(err){
                console.log(err);
                return res.redirect('/');
            }
            console.log(arts);
        })
    })
    app.post('/api/article/article_upload',function(req,res){
        var article = new Article({
            title: req.body.title,
            author: req.session.user,
            tag: req.body.tag,
            content: req.body.content
        });

        article.save(function(err, doc){
            if(err){
                console.log(err);
                return res.redirect('/article');
            }
            console.log('文章发表成功');
            return res.redirect('/');
        })
    })
}