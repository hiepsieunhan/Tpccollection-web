import path from 'path';

import express from 'express';
import swig from 'swig';

const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const port = parseInt(process.env.PORT, 10) || 5000;
const publicPath = path.resolve(__dirname, '../build');

app.use(express.static(publicPath));

// Set view render engine
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('*', (req, res) => {
  res.render('index', { isProduction });
});

// And run the server
app.listen(port, () => {
  console.log('Server running on port ' + port);
});
