const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const app = new express();
const errGif = require('fs').readFileSync('./public/images/404.gif');

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

app.listen(process.env.PORT || 3000)

// app.get('/', (req, res) => res.redirect(301, req.host));
app.get('*', (req, res) => {
    let url = req.originalUrl.replace('/', '');
    axios.get(url, {
        responseType: 'arraybuffer'
      })
    .then(response => {
        if(response['content-type'].split('/')[0] == 'image'){
            res.set('Content-Type', response['content-type']);
            res.send(Buffer.from(response.data, 'binary'));
        }
        else {
            throw new Error();
        }
    })
    .catch(err => {
        res.set('Content-Type', 'image/gif');
        res.send(errGif);
    })
});

