const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyparser=require("body-parser");

//db connection
require("./mongo")

//models
require("./models/post");

app.use(bodyparser.json())

const Post=mongoose.model("Post");

app.get("/posts",async(req,res) => {
    try{
         const posts=await Post.find({})
         res.send(posts)
    }catch(error)
    {
        res.status(500)
    }
});

app.post("/posts", (req,res) => {
 // console.log(req.body)

 const post=new Post();
 post.title=req.body.title;
 post.content=req.body.content;

 post.save();
})

app.listen(3001,function(){
    console.log("server is running on port 3001");
})