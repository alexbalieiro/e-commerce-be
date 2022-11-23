import methods from "micro-method-router";
import type { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.productsId;
    res.send(`GET products/${id}`);
  },
});
