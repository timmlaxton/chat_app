const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE)

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

//middleware
const {auth} = require('./middleware/auth');
const {admin} = require('./middleware/admin');

//Models

const {User} = require('./models/user');
const {Publisher} = require('./models/publisher');
const {Genre} = require('./models/genre');



//Genre

app.post('/api/product/genre',auth,admin,(req,res)=> {

    const genre = new Genre(req.body);

    genre.save((err,doc)=> {
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            genre: doc
        })
    })

});

app.get('/api/product/genres',(req,res)=> {
    Genre.find({},(err,genres)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(genres)

    })
})

//Publisher

app.post('/api/product/publisher',auth,admin,(req,res)=>{
    const publisher = new Publisher(req.body);

    publisher.save((err,doc)=>{
        if(err) return res.json({success:false,err});
            res.status(200).json({
                success: true,
                publisher:doc
            })
    })
})

app.get('/api/product/publishers',(req,res)=>{
    Publisher.find({},(err,publishers)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(publishers)
    })
})
// USERS //

app.get('/api/users/auth',auth,(req,res)=>{

    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        cart: req.user.cart,
        history: req.user.history
    })


})



app.post('/api/users/register', (req, res)=> {
    const user = new User(req.body);

    user.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,
           
        })
    })

});

app.post('/api/users/login',(req,res)=>{
    
    
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({loginSuccess:false,message:"Authentication failed, email not found"});

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({loginSuccess:false,message:'Password incorrect'});

            user.generateToken((err, user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('w_auth',user.token).status(200).json({
                    loginSuccess: true
                })

            })

        })
    })

})

app.get('/api/user/logged',auth,(req, res)=>{

User.findOneAndUpdate(
{_id:req.user._id },
{token: ""},
(_err,doc)=>{
if(err) return res.json({success:false,err});
return res.status(200).send({
    success: true
        })
    }
)


})


const port = process.envPORT || 3002;

app.listen(port,()=> {
    console.log(`Server Running at ${port}`);
    
})