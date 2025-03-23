var fs = require('fs');
var postcss = require('postcss');
var pxtorem = require('postcss-pxtorem');
var css = fs.readFileSync('./styles/styles.css', 'utf8');
var options = {
	rootValue: 16,
	unitPrecision: 5,
	propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'word-spacing'],
	selectorBlackList: [],
	replace: true,
	mediaQuery: false,
	minPixelValue: 0,
	exclude: './styles/main-rem.css'
};

var processedCss = postcss(pxtorem(options)).process(css).css;

fs.writeFile('./styles/main.css', processedCss, function (err) {
  if (err) {
    throw err;
  }
  console.log('Rem file written.');
});