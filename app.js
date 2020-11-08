const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/public',express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.render('home');
});

const PORT = 3000;
app.listen(PORT,function(){
    console.log(`Server is running at http://localhost:${PORT}`);
})