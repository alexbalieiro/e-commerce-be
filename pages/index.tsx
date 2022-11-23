import type { NextPage } from "next";

const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_PRODUCTION_HOLA);
  const nombre = process.env.NEXT_PUBLIC_PRODUCTION_HOLA;
  return <h1>Hola {nombre}</h1>;
};

export default Home;
