
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/pay', (req, res) => {
    const { cardNumber, amount } = req.body;
    if (!cardNumber || !amount) {
        return res.status(400).json({ status: "failed", message: "Invalid request" });
    }
    // Simulate payment processing
    const approved = Math.random() > 0.2;
    if (approved) {
        res.json({ status: "success", transactionId: Date.now(), amount });
    } else {
        res.status(500).json({ status: "failed", message: "Payment declined" });
    }
});

app.get('/health', (req, res) => {
    res.json({ status: "ok" });
});

app.listen(port, () => {
    console.log(`Payment app running on port ${port}`);
});
