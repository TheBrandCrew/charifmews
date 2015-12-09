var autoprefixer = require('autoprefixer');
var browserlist = [
    'ie 11',
    'ff >= 21',
    'chrome >= 11',
    'safari >= 6.1',
    'ios >= 7.1',
    "android >= 4.4",
    'bb >=10',
    'ie_mob 11'
];

module.exports = {
    entry: './start.js',
    output: {
        filename: 'final.js'
    },
    module:{
        loaders:[
            { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' }
        ]
    },
    postcss: [ autoprefixer({ browsers: browserlist }) ]
};

