import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_mayans, set_how_many_mayans] = useState(1)

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
  
  async function mintMayan(how_many_mayans) {
    if (mayanContract) {
 
      const price = Number(mayanPrice)  * how_many_mayans 

      const gasAmount = await mayanContract.methods.mintBoringMayan(how_many_mayans).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      mayanContract.methods
            .mintBoringMayan(how_many_mayans)
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
         <link rel="icon" href="/images/favicon.jpg" />

         <meta property="og:title" content="Boring Mayans Co." key="ogtitle" />
         <meta property="og:description" content="Random collection of Generative MayanPunks " key="ogdesc" />
         <meta property="og:type" content="website" key="ogtype" />
         <meta property="og:url" content="https://zib.one/" key="ogurl"/>
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
                     <a href="/" className=""><img src="images/294.png" width="108" alt="" className="logo-image" /></a>
                     <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
                       <a href="#about" className="text-2xl montserrat text-white hover:text-black m-6">About</a>
                       <a href="/mint" className="text-2xl montserrat text-white hover:text-black m-6">Mint</a>
                       <a href="#traits" className="text-2xl montserrat text-white hover:text-black m-6">Mayan Glyphs</a>
                       <a href="#contact" className="text-2xl montserrat text-white hover:text-black m-6">Contact</a>
                     </nav>

                   </div>

        </div>
      <div className="md:w-2/3 w-4/5 " id="about">
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-4xl montserrat text-white ">Cybernetic </h1>
                    <h1 className="text-6xl montserrat text-blau ">Mayan Punks</h1>
                    <p className="text-2xl text-white my-6  montserrat">Here we <span className="text-5xl Poppitandfinch "></span> <span className="text-blau text-5xl Poppitandfinchsans">Mayans</span> <span className="text-5xl Poppitandfinch"></span>, specialize in the world's <span className="text-span-2 font-bold">finest Mayan Glyphs</span>.<br />‍<br />xxxx <br/>‍<span className="text-blau text-5xl Poppitandfinchsans">xx </span><span className="text-5xl Poppitandfinch ">and</span><span className="text-blau text-5xl Poppitandfinchsans"> xx</span> <br/>xx.
                    </p>
                    <p className="text-2xl text-white my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> 29 September 2021. 3PM EST. <br />‍
                    <span className="text-white text-2xl montserrat"><strong>TOTAL SUPPLY: 10000</strong> MayanPunks.<br/><strong>PRICE: 0.05 ETH </strong>each.</span></p>
                    <iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-06-29T21:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe>
                  </div>
                  <img className="lg:w-1/2 w-3/4" img src="images/419.svg" alt="" width="350px" className="feature-image"/>
            </div>
            <div className="flex flex-col items-center">
            <a href="/mint" className="mt-4 montserrat text-5xl border-6 bg-green  text-red hover:text-white p-2 ">Mint Now</a>


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
                                      value={how_many_mayans}
                                      onChange={ e => set_how_many_mayans(e.target.value) }
                                      name="" 
                                      className="Poppitandfinchsans pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
                                  />
                  
                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">MayanPunk</span>
    
                </div>
                {saleStarted ? 
                <button onClick={() => mintMayan(how_many_mayans)} className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">MINT {how_many_mayans} MayanPunk for {(mayanPrice * how_many_mayans) / (10 ** 18)} ETH + GAS</button>
                  : <button className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>        
            
              }
                
            </div> 
            </div>
 
          </div>  
    </div>
    </div>
    )
  }
