const express=require("express")
const app=express();

app.get("/",(req,res)=>{
    res.send("This is the get request");
})  


app.listen(3000, () => {
    console.log("App is running and listening on port 3000")
})