import { NextPage } from "next";
import MyNavbar from "../components/Navbar";


const Home: NextPage = () => {

  return (
    <div className="h-screen">
      {/* Header  */}
      <MyNavbar />
      <main className="flex items-center justify-center h-80vh">

        <div className="flex flex-col text-landing font-semibold ">
          <span>trade for safety</span>
        </div>

      </main>
      <div className="absolute bottom-0 row p-12 col-md-12">
        <div className="col-md-4  ">
          <p className="text-4xl font-bold">50,000,000</p>
          <p>coins</p>
          <div className="mb-10"></div>
          <p className="text-4xl font-bold">135,244</p>
          <p>users</p>
        </div>
        <div className="col-md-4 flex items-end justify-center ">
          <p className="max-w-sm">Enjoy true ownership of in-game assets and a community-driven ecosystem that puts the power back in the hands of players.</p>
        </div>
        <div className="col-md-4 justify-end flex items-end">
          <img src="./images/xmvl-coin.png" className="rounded-lg myimg-rotation" alt="" />
        </div>
      </div>

    </div>
  );
};

export default Home;
