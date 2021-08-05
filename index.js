//although apart from EJS there are various other ones which will help to send to data to frontend part
//, but mostly nodejs users use EJS and it is much easier to do so
const express=require("express");
const bodyparser=require("body-parser");
const date=require(__dirname+"/date.js")
const app=express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
let items=[];
app.get("/",function(req,res){
    
    let day=date.getday();
    res.render("index",{kindofday: day, newitem: items});
})
app.post("/",(req,res)=>{
    items.push(req.body.newdata);
    // res.render("index",{newitem: item});
    res.redirect("/");
})
app.listen(3000);