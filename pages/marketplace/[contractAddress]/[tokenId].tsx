import { MediaRenderer, ThirdwebNftMedia, Web3Button, useContract, useMinimumNextBid, useNFTs, useValidDirectListings, useValidEnglishAuctions } from "@thirdweb-dev/react";
import { NFT, ThirdwebSDK } from "@thirdweb-dev/sdk";
import React, { useState } from "react";
import {
    MARKETPLACE_ADDRESS,
    NFT_CONTRACT_ADDRESS
} from "../../../constants/addresses";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import MyNavbar from "../../../components/Navbar";
import NFTGrid from "../../../components/NFTGrid";

type Props = {
    nft: NFT;
    contractMetadata: any;
};

export default function TokenPage({ nft, contractMetadata }: Props) {
    const { contract } = useContract(NFT_CONTRACT_ADDRESS);
    const { data, isLoading } = useNFTs(contract);

    return (
        <>
            <MyNavbar />
            <div className="flex justify-center mt-10">
                <div className="container flex gap-10  p-10 rounded-xl">
                    <div className="w-1/3 flex flex-col gap-7">
                        <div className="rounded-xl myprofileImage">
                            <img src={`${nft.metadata.image}`} alt="" />
                        </div>
                        <div className="">
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Contract Address</span>
                                    <span className="w-2/6 text-ellipsis  overflow-hidden">{NFT_CONTRACT_ADDRESS}</span>
                                </div>
                                <hr className="border-disable" />
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Token ID</span>
                                    <span className="">{nft.metadata.id}</span>
                                </div>
                                <hr className="border-disable" />

                                <div className="flex justify-between">
                                    <span className="text-gray-400">Token Standard</span>
                                    <span className="">{nft.type}</span>
                                </div>
                                <hr className="border-disable" />

                                <div className="flex justify-between">
                                    <span className="text-gray-400">Blockchain</span>
                                    <span className="">Polygon</span>
                                </div>
                                <hr className="border-disable" />

                                <div className="flex justify-between">
                                    <span className="text-gray-400">Metadata</span>
                                    <span className="">Centralized</span>
                                </div>
                                <hr className="border-disable" />

                                <div className="flex justify-between">
                                    <span className="text-gray-400">Tax</span>
                                    <span className="">0.01%</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="w-2/3 flex flex-col gap-2 ">
                        {/* NFT Name  */}
                        <span className="text-4xl font-bold">{nft.metadata.name} #{nft.metadata.id}</span>
                        {/* Owned  */}
                        <span className="text-gradientprimary"><span className="text-gray-400">Owned by </span> {nft.owner}</span>
                        {/* Price Tag  */}
                        <div className="bg-disableBackground w-full rounded-xl  mt-4 p-8 flex flex-col gap-1">
                            <span className="text-sm text-gray-400">Current Price</span>
                            <span className="text-3xl">1423.1 XMVL</span>
                            <div className="flex gap-3">
                                <button className="bg-gradientprimary py-2 px-7 rounded-md mt-3" >Buy Now</button>
                                <button className="border border-accent py-2 px-7 rounded-md mt-3" >Make Offer</button>
                            </div>

                        </div>
                        {/* about  */}
                        <div className="mt-7 flex flex-col">
                            <span className="text-xl ">About {nft.metadata.name}</span>
                            <span className="text-gray-400 mt-2">{nft.metadata.description}</span>
                        </div>
                        {/* Offers History  */}
                        <div className="flex flex-col gap-3 mt-7">
                            <span className="text-xl ">Offers History</span>

                        </div>
                        {/* Item Activity  */}
                        <div className="flex flex-col gap-3 mt-7">
                            <span className="text-xl ">Item Activity</span>

                        </div>
                    </div>



                </div>
            </div>
        </>
    )
};

export const getStaticProps: GetStaticProps = async (context) => {
    const tokenId = context.params?.tokenId as string;

    const sdk = new ThirdwebSDK("polygon", {
        secretKey: "lvU8G6EDMf_S_P5-wV_rc3sFmyjo-ELMMFSF8Q6X4oeg0qlnmyPgCFeiBa3-FfmKJprD8Qsxglt8-tP6bcla7A",
    });

    const contract = await sdk.getContract(NFT_CONTRACT_ADDRESS);

    const nft = await contract.erc721.get(tokenId);

    let contractMetadata;

    try {
        contractMetadata = await contract.metadata.get();
    } catch (e) { }

    return {
        props: {
            nft,
            contractMetadata: contractMetadata || null,
        },
        revalidate: 1, // https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const sdk = new ThirdwebSDK("polygon", {
        secretKey: "lvU8G6EDMf_S_P5-wV_rc3sFmyjo-ELMMFSF8Q6X4oeg0qlnmyPgCFeiBa3-FfmKJprD8Qsxglt8-tP6bcla7A",
    });

    const contract = await sdk.getContract(NFT_CONTRACT_ADDRESS);

    const nfts = await contract.erc721.getAll();

    const paths = nfts.map((nft) => {
        return {
            params: {
                contractAddress: NFT_CONTRACT_ADDRESS,
                tokenId: nft.metadata.id,
            },
        };
    });

    return {
        paths,
        fallback: "blocking", // can also be true or 'blocking'
    };
};