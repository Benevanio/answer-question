const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
   res.render('index', {});
});

app.get('/answer', (req, res) => {
    const question = req.query.question;
    const answer = Math.random() > 0.5 ? 'Yes' : 'No';
    res.render('answer', {
        question: question,
        answer: answer
    });
});


app.listen(3000, () => {
    try {
        console.log('Server is running on port 3000');
    } catch (error) {
        console.log('Error: ', error);
    }
});