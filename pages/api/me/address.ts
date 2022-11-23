import methods from "micro-method-router";
import type { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async patch(req: NextApiRequest, res: NextApiResponse) {
    res.send(`PATCH me/address`);
  },
});
