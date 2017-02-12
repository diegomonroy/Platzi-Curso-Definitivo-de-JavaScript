var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
	title('Platzigram');
	var main = document.getElementById('main-container');
	var pictures = [
		{
			user: {
				username: 'diego',
				avatar: 'https://fb-s-d-a.akamaihd.net/h-ak-xpf1/v/t1.0-9/15894900_10154204008083321_5514021663377864102_n.jpg?oh=fe58f00095c8ddbe31909cc55e8a569a&oe=59434CB2&__gda__=1497174563_737d9c9abe517e8a69d75a83697aeea9'
			},
			url: 'http://materializecss.com/images/office.jpg',
			likes: 10,
			liked: true
		},
		{
			user: {
				username: 'diego',
				avatar: 'https://fb-s-d-a.akamaihd.net/h-ak-xpf1/v/t1.0-9/15894900_10154204008083321_5514021663377864102_n.jpg?oh=fe58f00095c8ddbe31909cc55e8a569a&oe=59434CB2&__gda__=1497174563_737d9c9abe517e8a69d75a83697aeea9'
			},
			url: 'http://materializecss.com/images/office.jpg',
			likes: 2,
			liked: true
		}
	]
	empty(main).appendChild(template(pictures));
})