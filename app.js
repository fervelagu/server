const express = require ('express');
const app = express();
require('hbs');
//importamos mongoose otra vez
const mongoose = require ('mongoose');
//importamos el modelo
const User = require ('./models/User');

//configuramos hbs (handlebars)
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

//necesitamos conectarnos a la bd
mongoose.connect('mongodb://localhost:27017/CandyIndependenceDay', (err)=>{
    if (err) return console.log(err);
    return console.log("Conectado a la DB");
});

app.use(express.static(__dirname + '/public'));

//ruta para crear usuarios
app.get('/usuarios', (req, res)=>{
    User.find({}, (err, users)=>{
        if (err) return res.status(404).send(err);
        res.render('usuarios', {users});
    });
});

app.get('/users', (req, res)=>{
var lista = [
    {
        name: 'fers',
        age: 31,
        job: 'junior dev',
    },
    {
        name:"Blissito",
        age:15,
    },
    {
        name:"Bloss",
        age:50,
    },
    {
        name:"Bless",
        age:25,
    },
];
    res.render('users', {lista})
});

app.get('/template', (req, res)=>{
    var name = 'bliss';
    var active = true;
    const user = {
        name, //si tu llave y valor son lo mismo puedes poner solo la llave
        calories: 31,
        job: 'teacher',
        active,
    }
    res.render('profile', user);//mandar objeto al render
})
app.get('/new', (req,res)=>{
    User.create({email:"lili@hotmail.com"});
    res.send("Usuario Creado");
})
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "index.html");
})
app.get("/diego",(req,res)=>{
    res.sendFile(__dirname + "/public/diego.html");
})
app.get("/bliss",(req,res)=>{
    res.send("Hola Crayola");
});
app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});