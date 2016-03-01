var postcss = require('postcss');
var fs = require('fs');

var file = 'css/main.css';
var css = fs.readFileSync(file, 'utf-8');

postcss([
	require('postcss-import'),
	require('postcss-nested'),
	require('autoprefixer')
]).process(css, {
	from: file
}).then(function (result) {
	fs.writeFileSync('css/bundle.css', result.css, 'utf-8');
}).catch(function (err) {
	console.error(err);
});
