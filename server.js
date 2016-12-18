const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const port = 9000;

app.use(compression());
app.use(express.static('./build'));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(port, () => {
	console.log(`Listening on port ${port} (http://localhost:${port})`);
});