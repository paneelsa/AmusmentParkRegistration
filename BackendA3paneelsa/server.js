const express =require('express');
const cors =require('cors');
const app = express();
const port =3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res,next) => {
    res.send('Server i on');
});

app.post('/register',(req,res,next)=>{
    const { age, weight, height, medicalHistory} =req.body;
    if (age < 18 || age > 60) {
        return res.status(400).send({ message: "Registration rejected due to age." });
    }
    if (weight > 150) {
        return res.status(400).send({ message: "Registration rejected due to weight." });
    }
    if (height < 100) {
        return res.status(400).send({ message: "Registration rejected due to height." });
    }
    if (medicalHistory && medicalHistory.length > 0) {
        return res.status(400).send({ message: "Registration rejected due to medical history." });
    }
    else{
    res.status(200).send({
        message: "Registration successful",
        data: req.body
    });
}
});
app.listen(port,()=> 
    console.log(`server running on http://localhost:${port}`)

);