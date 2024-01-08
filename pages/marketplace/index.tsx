import { useContract, useNFTs } from "@thirdweb-dev/react";
import { NFT_CONTRACT_ADDRESS } from "../../constants/addresses";
import NFTGrid from "../../components/NFTGrid";
import MyNavbar from "../../components/Navbar";
import Link from "next/link";


export default function Marketplace() {
    const { contract } = useContract(NFT_CONTRACT_ADDRESS);
    const { data, isLoading } = useNFTs(contract);

    const listSidebar = ['cummon', 'uncummon', 'epic', 'legend'];
    const TheSidebar = listSidebar.map(function (val, index) {
        return (
            // <>
            //     <input type="checkbox" id="myCheck" onClick={asd} ></input>
            // </>

            <Link
                href={`/marketplace/${listSidebar[index]}`}
                className="block capitalize font-medium text-gray-500 dark:text-gray-300 hover:text-accent"
            >
                {listSidebar[index]}
            </Link>
        )
    })
    return (
        <>
            <MyNavbar />
            <section className=" dark:bg-gray-900">
                <div className="container px-6 mx-auto">
                    <div className="lg:flex lg:-mx-2">
                        <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 mt-16">
                            <span className="text-2xl font-bold" >FILTER</span>
                            <hr className="border-textDisable" />
                            {TheSidebar}
                        </div>
                        <div className=' inset-x-0 mt-7  px-5 mx-auto w-full max-w-screen-md py-8 md:top-6 md:rounded-2xl lg:max-w-screen-lg  2xl:max-w-screen-xl'>
                            <span className="text-2xl font-bold" >NFT</span>
                            <div className="mb-3"></div>
                            <hr className="border-textDisable" />

                            <div className="mb-4"></div>
                            <NFTGrid
                                isLoading={isLoading}
                                data={data}
                                emptyText={"No NFTs found"}
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

function asd() {

}