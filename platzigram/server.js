var express = require('express');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads')
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + '.' + ext(file.originalname))
	}
});
var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
	// res.send('Hola mundo!');
	res.render('index', { title: 'Platzigram' });
})

app.get('/signup', function (req, res) {
	res.render('index', { title: 'Platzigram - Singup' });
})

app.get('/signin', function (req, res) {
	res.render('index', { title: 'Platzigram - Singin' });
})

app.get('/api/pictures', function (req, res) {
	var pictures = [
		{
			user: {
				username: 'diego',
				avatar: 'https://fb-s-d-a.akamaihd.net/h-ak-xpf1/v/t1.0-9/15894900_10154204008083321_5514021663377864102_n.jpg?oh=fe58f00095c8ddbe31909cc55e8a569a&oe=59434CB2&__gda__=1497174563_737d9c9abe517e8a69d75a83697aeea9'
			},
			url: 'http://materializecss.com/images/office.jpg',
			likes: 0,
			liked: true,
			createdAt: new Date().getTime()
		},
		{
			user: {
				username: 'diego',
				avatar: 'https://fb-s-d-a.akamaihd.net/h-ak-xpf1/v/t1.0-9/15894900_10154204008083321_5514021663377864102_n.jpg?oh=fe58f00095c8ddbe31909cc55e8a569a&oe=59434CB2&__gda__=1497174563_737d9c9abe517e8a69d75a83697aeea9'
			},
			url: 'http://materializecss.com/images/office.jpg',
			likes: 1,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate() - 10)
		}
	];
	setTimeout(function () {
		res.send(pictures);
	}, 2000);
})

app.post('/api/pictures', function (req, res) {
	upload(req, res, function (err) {
		if (err) {
			return res.send(500, 'Error uploading file')
		}
		res.send('File uploaded');
	});
})

app.listen(8080, function (err) {
	if (err) return console.log('Hubo un error'), process.exit(1);

	console.log('Platzigram escuchando en el puerto 3000');
})