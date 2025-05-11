import { Router } from "express";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "get all subscription" })
);
subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "get by id subscription" })
);
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "update subscription" })
);
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "delete subscription" })
);
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);


subscriptionRouter.put("/:id/cancel", (req, res) => res.send({ title: "" }));
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "" })
);

export default subscriptionRouter;
