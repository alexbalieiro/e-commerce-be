import methods from "micro-method-router";
import type { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const query = req.query.q;
    const offset = req.query.offset;
    const limit = req.query.limit;
    res.send(`GET search q=${query}&offset=${offset}&limit=${limit}`);
  },
});
