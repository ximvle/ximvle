import { ConnectWallet, useAddress, useContract, useNFTs, useOwnedNFTs, useTokenBalance } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { NFT_CONTRACT_ADDRESS, TOKEN_CONTRACT_ADDRESS } from "../constants/addresses";
import MyNavbar from "../components/Navbar";
import TopHolder from "../components/TopHolder";
import NFTGrid from "../components/NFTGrid";


const Home: NextPage = () => {
  const address = useAddress();

  const {
    contract: nftContract
  } = useContract(NFT_CONTRACT_ADDRESS);
  const {
    contract: tokenContract
  } = useContract(TOKEN_CONTRACT_ADDRESS);

  const {
    data: ownedNFTs,
    isLoading: isNFTLoading,
  } = useOwnedNFTs(nftContract, address);
  const {
    data: tokenBalance,
    isLoading: isTokenLoading,
  } = useTokenBalance(tokenContract, address);


  const { contract } = useContract(NFT_CONTRACT_ADDRESS);
  const { data, isLoading } = useNFTs(contract);




  // the main 
  const products = ['', '', '', '', '', '', '', ''];
  // const listNFTs = products.map(product => <TheNFTs />)
  const listTopHolder = products.map(product => <TopHolder />)

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
