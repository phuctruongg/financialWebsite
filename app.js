const express = require('express');
const exphbs = require('express-handlebars');
var mailer = require('./utils/mailer');
const app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/public',express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.render('home');
});

app.post('/send',jsonParser, function(req, res)
{
    console.log(req.body);
    /*mailer.send({
        from: 'tintuc14web@gmail.com',
        to: `baoanh2003199@gmail.com`,
        // to: `${email}`,
        subject: 'Xác minh địa chỉ email của bạn',
        html: `
        Xin chào abc, cảm ơn bạn đã đăng ký 1 tài khoản ở trang Tin tức 14.
        (Đây là thư tự động vui lòng không phản hồi)
        `
    });*/
});




const PORT = 3000;
app.listen(PORT,function(){
    console.log(`Server is running at http://localhost:${PORT}`);
})