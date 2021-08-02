const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.static('nong'));


// app.listen(PORT, () => console.log(`Listening on ${PORT}`));
app.listen(9000, function() {
    console.log('Listening on http://localhost:9000/');
});