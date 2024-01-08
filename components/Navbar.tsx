import { ConnectWallet, darkTheme, useAddress, useContract, useOwnedNFTs, useTokenBalance } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NFT_CONTRACT_ADDRESS, TOKEN_CONTRACT_ADDRESS } from "../constants/addresses";
import { Base } from "@thirdweb-dev/chains";
import Link from "next/link";


export default function MyNavbar() {
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

    const customTheme = darkTheme({
        fontFamily: "Inter",
        colors: {
            // modalBg: "#FFF",
            primaryText: "#fff",
            walletSelectorButtonHoverBg: "#1b1c22",
            separatorLine: "#262830",
            borderColor: "#262830",

        }
    });
    // , 'stats', 'about', 'support'
    const listMenu = ['marketplace', 'roadmap'];
    const TheMenus = listMenu.map(function (val, index) {
        return (
            <Link href={`/${listMenu[index]}`}
                aria-current="page"
                className="capitalize transition-all duration-200  text-link-gradientprimary"
            >
                {listMenu[index]}
            </Link>
        )
    })

    return (


        <nav className="sticky top-0 z-10 bg-disableBackground backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-textDisable">
            <div className=" mx-auto px-12">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-8">
                        {/* THE LOGO'S ====== */}
                        <Link href="/" className="flex items-center gap-1">
                            <img
                                className="h-8 w-auto"
                                src="./images/logo.png"
                                alt=""
                            />
                            <span className="text-2xl font-semibold">Ximvle</span>
                        </Link>
                        <hr className="h-7 border border-disable" />
                        {/* THE MENU'S ====== */}
                        <div className="flex items-center space-x-6 text-gray-900">
                            {TheMenus}
                        </div>
                    </div>

                    <div className="flex items-center space-x-6 text-gray-900">
                        {/* THE WALLET'S ====== */}
                        <ConnectWallet
                            className={styles.connectButton}
                            btnTitle="Connect Wallet"
                            theme={customTheme}
                            modalTitle="Log in with your wallet"
                            modalTitleIconUrl="/images/logo.png"
                            displayBalanceToken={{
                                137: TOKEN_CONTRACT_ADDRESS,
                            }}
                            supportedTokens={{
                                [137]: [
                                    {
                                        address: TOKEN_CONTRACT_ADDRESS,
                                        name: "XIMVLE",
                                        symbol: "XMVL",
                                        icon: "./images/xmvl-coin.png",
                                    },
                                ],
                            }}
                        />
                        {/* THE PROFILE'S ====== */}
                        <Link href={`/profile`} className="myprofileImage rounded-lg bg-disableBackground h-10 w-10">
                            <img src="./images/CharacterNFTs.png" alt="" />
                        </Link>

                    </div>
                </div>
            </div>
        </nav>




    )
}




{/* <p className="text-3xl font-bold underline">hai semua</p>
{
    address && (
        <>
            {!isNFTLoading ? (
                ownedNFTs && ownedNFTs.length > 0 ? (
                    <p>Total NFTs Owned : {ownedNFTs.length}</p>
                ) : (
                    <p>Total Owned NFTs : 0</p>
                )
            ) : (
                <p>Loading ...</p>
            )}
            {
                !isTokenLoading ? (<p>Token Balance : {tokenBalance?.displayValue}</p>) : (<p>Loading ...</p>)
            }
        </>
    )
}  */}