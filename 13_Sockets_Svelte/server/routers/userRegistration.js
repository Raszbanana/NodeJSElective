import { Router } from 'express';

const userRouter = Router();

userRouter.get("/api/fetchUser", (req, res) => {
    res.send({data: req.session.username});
});

userRouter.get("/api/logout", (req, res) => {
    req.session.destroy(() => {
        res.send({data: "Sad to see you go"});
    });
    res.redirect("/")
})

userRouter.post("/api/registerUser", (req, res) => {
    console.log(req.body);
    req.session.username = req.body.username;
    
    res.redirect("/")
})

export default userRouter;

