import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_mayan, set_how_many_mayan] = useState(1)

  const [mayanContract, setMayanContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [mayanPrice, setMayanPrice] = useState(0)

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
    const mayanContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setMayanContract(mayanContract)

    const salebool = await mayanContract.methods.saleIsActive().call() 
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await mayanContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)

    const mayanPrice = await mayanContract.methods.mayanPrice().call() 
    setMayanPrice(mayanPrice)
   
  }
  
  async function mintMayan(how_many_mayan) {
    if (mayanContract) {
 
      const price = Number(mayanPrice)  * how_many_mayan

      const gasAmount = await mayanContract.methods.mintMayanPunk(how_many_mayan).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      mayanContract.methods
            .mint(how_many_mayan)
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
                <title>Mayan Punk</title>
                <link rel="icon" href="/images/favicon-32x32.png" />
                <meta property="og:title" content="MayanPunk" key="ogtitle" />
                <meta property="og:description" content="Curated collection of Generative MayanPunk made from 550 Mayan hieroglyphs. 
         " key="ogdesc" />
                <meta property="og:type" content="website" key="ogtype" />
                <meta property="og:url" content="https://mayanpunk.com/" key="ogurl"/>
                <meta property="og:site_name" content="https://mayanpunk.com/" key="ogsitename" />
                <meta name="twitter:card" content="summary_large_image" key="twcard"/>
                <meta property="twitter:domain" content="MayanPunk" key="twdomain" />
                <meta property="twitter:url" content="https://mayanpunk.com/" key="twurl" />
                <meta name="twitter:title" content="MayanPunk" key="twtitle" />
                <meta name="twitter:description" content="Curated collection of Generative MayanPunk made from 550 Mayan hieroglyphs. 
         " key="twdesc" />
        
          </Head>

          <div >
            <div className="flex items-center justify-between w-full border-b-2	pb-6">
              <a href="/" className=""><img src="images/502.svg" width="108" alt="" className="logo-image" /></a>
              <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
                <a href="#home" className="text-2xl Poppitandfinch text-white hover:text-black m-6">Home</a>
                <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
                <a href="/mint" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Mint</a>
                <a href="/features" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Features</a>
                <a href="/mayans" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Mayans</a>
                <a href="/roadmap" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
                <a href="https://linktr.ee/mayanpunk" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Communities</a>
                <a href="/provision" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Provision</a>
                <a href="/contract" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Contract</a>
              </nav>
            </div>
          </div>
      <div className="md:w-2/3 w-4/5 " id="about">
  


        <div className="md:w-2/3 w-4/5">
       
        
          <div className="mt-6 border-b-2 py-6">

            <div className="flex flex-col items-center">

                <span className="flex Poppitandfinchsans text-3xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">Net Mayan Punk Minted :  <span className="text-blau text-6xl"> {!signedIn ?  <>-</>  :  <>{totalSupply}</> } / 10000</span></span>

                <div id="mint" className="flex justify-around  mt-8 mx-6">
                  <span className="flex Poppitandfinchsans text-3xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3">GIMME</span>
                  
                  <input 
                                      type="number" 
                                      min="1"
                                      max="20"
                                      value={how_many_mayan}
                                      onChange={ e => set_how_many_mayan(e.target.value) }
                                      name="" 
                                      className="Poppitandfinchsans pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
                                  />
                  
                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">MayanPunk</span>
    
                </div>
                {saleStarted ? 
                <button onClick={() => mintMayan(how_many_mayan)} className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white  ">MINT {how_many_mayan} MayanPunk for {(mayanPrice * how_many_mayan) / (10 ** 18)} ETH + GAS</button>
                  : <button className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>        
            
              }
                
            </div> 
            </div>
 
          </div>  
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/502.svg" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="#home" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
              <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
              <a href="/mint" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Mint</a>
              <a href="/features" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
              <a href="/mayans" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">User Guide</a>
              <a href="/roadmap" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Mint Guide</a>
              <a href="/linktree" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Communities</a>
            </nav>
          </div>
              </div>
              
    </div>

    )
  }