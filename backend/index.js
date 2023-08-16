import express from "express";
import cors from "cors"


const Productdata = [
    {
        id :1,
        name:'Krunch Burger',
        desc:'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
        img:'https://res.cloudinary.com/dwpzz0bpw/image/upload/v1691795436/online-shop/images_8_tu8msk.png',
        price:250
    },
    {
        id :2,
        name:'Hot Wings Bucket',
        desc:'10 Pcs of our Signature Hot & Crispy Wings',
        img:'https://res.cloudinary.com/dwpzz0bpw/image/upload/v1691795436/online-shop/images_9_wfaasr.png',
        price:600
    },
    {
        id :3,
        name:'Krunch Combo',
        desc:'1 Krunch burger + 1 Regular fries + 1 Regular drink',
        img:'https://res.cloudinary.com/dwpzz0bpw/image/upload/v1691795436/online-shop/images_7_m0qfa0.png',
        price:550
    },
    {
        id :3,
        name:'Krunch Combo',
        desc:'1 Krunch burger + 1 Regular fries + 1 Regular drink',
        img:'https://res.cloudinary.com/dwpzz0bpw/image/upload/v1691795436/online-shop/images_7_m0qfa0.png',
        price:550
    },
    {
        id :3,
        name:'Krunch Combo',
        desc:'1 Krunch burger + 1 Regular fries + 1 Regular drink',
        img:'https://res.cloudinary.com/dwpzz0bpw/image/upload/v1691795436/online-shop/images_7_m0qfa0.png',
        price:550
    },
   
]



const app = express();
app.use(express.json());
app.use(cors());



app.get('/product',(req ,res)=>{
    res.send(Productdata)
    
})

app.listen(5000,()=>{
    console.log('the server will be start');
})