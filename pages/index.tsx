import type { NextPage } from "next";
import useContentful from "../data/useContentful";

const Home: NextPage = () => {
  const { getSolarSystem } = useContentful();
  getSolarSystem().then((res: any) => {
    console.log(res);
  });
  return <h1>Hola</h1>;
};

export default Home;
