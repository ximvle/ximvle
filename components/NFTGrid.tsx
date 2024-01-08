import styles from '../styles/card.module.css'

import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import React from "react";
import Link from "next/link";
import { NFT_CONTRACT_ADDRESS } from "../constants/addresses";
import TheNFTs from "./NFTs";


type Props = {
    isLoading: boolean;
    data: NFTType[] | undefined;
    overrideOnclickBehavior?: (nft: NFTType) => void;
    emptyText?: string;
};

export default function NFTGrid({
    isLoading,
    data,
    overrideOnclickBehavior,
    emptyText = "No NFTs found",
}: Props) {


    return (
        <div className="flex flex-wrap items-center justify-start gap-8">
            {isLoading ? (
                [...Array(20)].map((_, index) => (
                    // <Skeleton key={index} height={"312px"} width={"100%"} />
                    <div className={styles.sekeletonnft}></div>
                ))
            ) : data && data.length > 0 ? (
                data.map((nft) =>
                    !overrideOnclickBehavior ? (
                        <Link
                            href={`/marketplace/${NFT_CONTRACT_ADDRESS}/${nft.metadata.id}`}
                            key={nft.metadata.id}
                        >
                            <TheNFTs nft={nft} />
                        </Link>
                    ) : (
                        <div
                            key={nft.metadata.id}
                            onClick={() => overrideOnclickBehavior(nft)}
                        >
                            <TheNFTs nft={nft} />
                        </div>
                    ))
            ) : (
                <>{emptyText}</>
            )}
        </div>

    )
};