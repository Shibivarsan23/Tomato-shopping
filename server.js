const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const accountSid = 'AC7cd086c408403d2ee400df5084564a26';
const authToken = 'af226cc8280930d7feef1b06a6fecc44';
const client = require('twilio')(accountSid, authToken);

const sendSMS = async (body) => {
    let msgOptions = {
        from: '+16263250315',
        to: '+918056613792',
        body
    }
    try {
        const message = await client.messages.create(msgOptions);
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

app.post('/call-node-function', (req, res) => {
    sendSMS(req.body.pass);
    res.json({
        message: 'Password received successfully!'
    });
});

// sendSMS('string msg');

app.listen(3000, () => {
    console.log("Server started");
    
});