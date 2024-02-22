import express from 'express';

const app = express();

app.get('/api', (req, res) => {
    res.send('<h1>Server is Reade</h1>')
});

app.get('/api/jokes', (req, res) => {
    const joke = [
        {
            id: '1',
            title: 'joke A',
            content: 'midiem joke'
        },
        {
            id: '2',
            title: 'joke B',
            content: 'funy joke'
        },
        {
            id: '3',
            title: 'joke C',
            content: 'very funy joke'
        },
        {
            id: '4',
            title: 'joke D',
            content: 'extray funy joke'
        },
        {
            id: '5',
            title: 'joke E',
            content: 'lafing joke'
        },
    ];

    res.send(joke)

})

const port = process.env.PORT || 3000

app.listen(port, () => {
console.log(`sever at http://localhost:${port}`);
})