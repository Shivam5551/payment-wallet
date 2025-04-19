import express from 'express';

const app = express();

const PORT = process.env.PORT || "4000";

app.use(express.json());

app.post("/", async (req, res) => {
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.userId,
        amount: req.body.amount
    }

});


app.listen(PORT, () => {
    console.log(`Server is Listening at PORT ${PORT}`);
    
})