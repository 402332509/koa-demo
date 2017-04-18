var fn_index = async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome'
    });
}

var fn_signin = async (ctx, next) => {
    var
        email = ctx.request.body.email || '',
        password = ctx.request.body.password || '';
    console.log(`signin with email: ${email}, password: ${password}`);
    if (email === '402332509@qq.com' && password === 'harry') {
        ctx.render('signin-ok.html',{
            name: email
        });
    } else {
        ctx.render('signin-failed.html',{});
    }
};



module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};