import { MediaRenderer, ThirdwebNftMedia, Web3Button, useAddress, useContract, useContractMetadata, useMinimumNextBid, useNFT, useNFTBalance, useOwnedNFTs, useTokenBalance, useValidDirectListings, useValidEnglishAuctions } from "@thirdweb-dev/react";
import { NFT as NFTType, ThirdwebSDK } from "@thirdweb-dev/sdk";
import React, { useState } from "react";
import {
    MARKETPLACE_ADDRESS,
    NFT_CONTRACT_ADDRESS,
    TOKEN_CONTRACT_ADDRESS
} from "../constants/addresses";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import MyNavbar from "../components/Navbar";
import { useRouter } from 'next/router';
import NFTGrid from "../components/NFTGrid";

export default function ProfilePage() {
    const { contract: nftContract } = useContract(NFT_CONTRACT_ADDRESS);
    const { contract: tokenContract } = useContract(TOKEN_CONTRACT_ADDRESS);
    const address = useAddress();
    const { data, isLoading } = useOwnedNFTs(nftContract, address);

    const [selectedNFT, setSelectedNFT] = useState<NFTType>();
    const {
        data: tokenBalance,
        isLoading: isTokenLoading,
    } = useTokenBalance(tokenContract, address);



    return (
        <div className="h-screen">
            <MyNavbar />
            <div className="container px-6 mx-auto my-5">
                <div className="lg:flex gap-5 lg:-mx-2">
                    <div className="space-y-3 lg:w-1/4 lg:space-y-4 sticky  ">
                        <div className="myprofileImage rounded-xl w-full bg-grey">
                            <img src="./images/logo-black.png" alt="" />
                        </div>
                        <p className="text-3xl font-bold text-center">Ranaufal Muha</p>
                        <p className=" font-bold text-textDisable text-center">0xbefqwefqwbivyr3789g</p>
                    </div>
                    <div className='px-5 mx-auto w-full max-w-screen-md md:top-6 lg:max-w-screen-lg  2xl:max-w-screen-xl '>
                        <div className="">
                            <p className="text-3xl text-textDisable">Balance</p>
                            <span className="text-4xl font-bold">{tokenBalance?.displayValue}</span> &nbsp;
                            <span className="text-4xl font-bold">{tokenBalance?.symbol}</span>
                        </div>

                        <div className="mb-5"></div>
                        <NFTGrid
                            isLoading={isLoading}
                            data={data}
                            emptyText={"No NFTs found"}
                        />
                    </div>
                </div>
            </div>
            {/* <main className="flex flex-col items-center justify-center">
                <div className="lg:max-w-screen-lg xl:max-w-screen-xl  2xl:max-w-screen-2xl w-full px-4 sm:max-w-screen-sm md:max-w-screen-md  bg-accent">
                    {
                        !selectedNFT ? (
                            <>
                                <NFTGrid
                                    data={data}
                                    isLoading={isLoading}
                                    overrideOnclickBehavior={(nft) => {
                                        setSelectedNFT(nft);
                                    }}
                                    emptyText={"You don't own any NFT's yet from this collection"}
                                />
                            </>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </main> */}

        </div>
    )
};
