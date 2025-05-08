import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send({ title: "user" }));
userRouter.get("/:id", (req, res) => res.send({ title: "user" }));
userRouter.post("/", (req, res) => res.send({ title: "user" }));
userRouter.put("/:id", (req, res) => res.send({ title: "user" }));
userRouter.delete("/:id", (req, res) => res.send({ title: "user" }));

export default userRouter;
