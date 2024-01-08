import styles from '../styles/card.module.css'
import { NFT } from "@thirdweb-dev/sdk";
import {
    MARKETPLACE_ADDRESS,
    NFT_CONTRACT_ADDRESS
} from "../constants/addresses";
import { ThirdwebNftMedia, useContract, useValidDirectListings, useValidEnglishAuctions } from "@thirdweb-dev/react";

type Props = {
    nft: NFT;
};

export default function TheNFTs({ nft }: Props) {

    const { contract: marketplace, isLoading: loadingMarketplace } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");

    const { data: directListing, isLoading: loadingDirectListing } =
        useValidDirectListings(marketplace, {
            tokenContract: NFT_CONTRACT_ADDRESS
            ,
            tokenId: nft.metadata.id,
        });

    //Add for auciton section
    const { data: auctionListing, isLoading: loadingAuction } =
        useValidEnglishAuctions(marketplace, {
            tokenContract: NFT_CONTRACT_ADDRESS
            ,
            tokenId: nft.metadata.id,
        });

    return (

        <div className={styles.nft}>
            <div className={styles.main}>
                <ThirdwebNftMedia metadata={nft.metadata} className='rounded-lg' height={"100%"} width={"100%"} />
                <p className={styles.idnfts}>
                    #{nft.metadata.id}
                </p>
                <h2 className='text-lg mb-1 font-bold mx-2'>{nft.metadata.name}</h2>
                <p className={styles.description}>
                    {nft.metadata.description}
                </p>
                <div className={styles.tokenInfo}>
                    <div className={styles.price}>
                        <img className={styles.imgclass}
                            src="./images/xmvl-coin.png"
                            alt="Creator"
                        />
                        <p className='ml-1'>0.1 </p>
                    </div>
                    <div className={styles.duration}>
                        <ins className={styles.insclass}>◷</ins>
                        <p>11 days left</p>
                    </div>
                </div>
                <hr className={styles.hrclass} />

                <>
                    {loadingMarketplace || loadingDirectListing || loadingAuction ? (
                        <div></div>
                    ) : directListing && directListing[0] ? (
                        <div>
                            <div >
                                <div >Price</div>
                                <div >{`${directListing[0]?.currencyValuePerToken.displayValue} ${directListing[0]?.currencyValuePerToken.symbol}`}</div>
                            </div>
                        </div>
                    ) : auctionListing && auctionListing[0] ? (
                        <div>
                            <div >
                                <div>Minimum Bid</div>
                                <div >{`${auctionListing[0]?.minimumBidCurrencyValue.displayValue} ${auctionListing[0]?.minimumBidCurrencyValue.symbol}`}</div>
                            </div>
                        </div>
                    ) : (
                        <>

                        </>
                    )}
                </>
                {/* <div className={styles.creator}>
                    <div className={styles.wrapper}>
                        <img className={styles.imgclass}
                            src="./images/xmvl-coin.png"
                            alt="Creator"
                        />
                    </div>
                    <p>
                        <ins className={styles.insclass}>Creation of</ins > Ximvle
                    </p>
                </div> */}
            </div>
        </div>

    )
}