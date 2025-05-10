import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "get all subscription" })
);
subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "get by id subscription" })
);
subscriptionRouter.post("/", (req, res) =>
  res.send({ title: "create subscription" })
);
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "update subscription" })
);
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "delete subscription" })
);
subscriptionRouter.get("/user/:id", (req, res) =>
  res.send({ title: "get all user subscription" })
);
subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "" })
);
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "" })
);

export default subscriptionRouter;
