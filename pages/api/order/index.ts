import methods from "micro-method-router";
import type { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.productId;
    res.send(`POST order?productId=${id}`);
  },
});
