import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_bananas, set_how_many_bananas] = useState(1)

  const [bananaContract, setBananaContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [bananaPrice, setBananaPrice] = useState(0)

  useEffect( async() => { 

    signIn()

  }, [])

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
     
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
        .then((network) => {console.log(network);if(network != "main"){alert("You are on " + network+ " network. Change network to mainnet or you won't be able to do anything here")} });  
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

  })
  .catch(function (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
  })
  }

//

  async function signOut() {
    setSignedIn(false)
  }
  
  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const bananaContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setBananaContract(bananaContract)

    const salebool = await bananaContract.methods.saleIsActive().call() 
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await bananaContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)

    const bananaPrice = await bananaContract.methods.bananaPrice().call() 
    setBananaPrice(bananaPrice)
   
  }
  
  async function mintBanana(how_many_bananas) {
    if (bananaContract) {
 
      const price = Number(bananaPrice)  * how_many_bananas 

      const gasAmount = await bananaContract.methods.mintBoringBanana(how_many_bananas).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      bananaContract.methods
            .mintBoringBanana(how_many_bananas)
            .send({from: walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }
    
  };

  



  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Mayan Glyphs</title>
        <link rel="icon" href="/images/favicon.jpg" />

        <meta property="og:title" content="Boring Bananas Co." key="ogtitle" />
        <meta property="og:description" content="Random collection of Generative Mayan Glyphs stored onchain " key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://zib.one/" key="ogurl"/>
        <meta property="og:image" content="https://boringbananas.co/images/Hola.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://zib.one/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="Mayan Glyphs" key="twdomain" />
        <meta property="twitter:url" content="https://zib.one/" key="twurl" />
        <meta name="twitter:title" content="Mayan Glyphs" key="twtitle" />
        <meta name="twitter:description" content="Random collection of Generative Mayan Glyphs stored onchain " key="twdesc" />
        <meta name="twitter:image" content="https://zib.one/images/Hola.gif" key="twimage" />
      </Head>


   <div >
           <div className="flex items-center justify-between w-full border-b-2	pb-6">
             <a href="/" className=""><img src="images/2.png" width="108" alt="" className="logo-image" /></a>
             <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
               <a href="#about" className="text-4xl montserrat text-white hover:text-black m-6">About</a>
               <a href="/mint" className="text-4xl montserrat text-white hover:text-black m-6">Mint</a>
               <a href="#traits" className="text-4xl montserrat text-white hover:text-black m-6">Mayan Glyphs</a>
               <a href="#roadmap" className="text-4xl montserrat text-white hover:text-black m-6">Roadmap</a>
               <a href="#team" className="text-4xl montserrat text-white hover:text-black m-6">Team</a>
               <a href="#contact" className="text-4xl montserrat text-white hover:text-black m-6">Contact</a>
             </nav>

           </div>

        </div>

        <div className="md:w-2/3 w-4/5">
       
        
          <div className="mt-6 border-b-2 py-6">

            <div className="flex flex-col items-center">

                <span className="flex montserrat text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">Net Mayan Punk Minted :  <span className="text-blau text-6xl"> {!signedIn ?  <>-</>  :  <>{totalSupply}</> } / 10000</span></span>

                <div id="mint" className="flex justify-around  mt-8 mx-6">
                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">GIMME</span>
                  
                  <input 
                                      type="number" 
                                      min="1"
                                      max="20"
                                      value={how_many_bananas}
                                      onChange={ e => set_how_many_bananas(e.target.value) }
                                      name="" 
                                      className="Poppitandfinchsans pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
                                  />
                  
                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">MayanPunk</span>
    
                </div>
                {saleStarted ? 
                <button onClick={() => mintBanana(how_many_bananas)} className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">MINT {how_many_bananas} MayanPunk for {(bananaPrice * how_many_bananas) / (10 ** 18)} ETH + GAS</button>
                  : <button className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>        
            
              }
                
            </div> 
            </div>
 
          </div>  
    </div>  
    )
  }