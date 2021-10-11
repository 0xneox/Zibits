import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">


<Head>
                <title>Mayan Punk</title>
                <link rel="icon" href="/images/favicon-32x32.png" />
                <meta property="og:title" content="MayanPunk" key="ogtitle" />
                <meta property="og:description" content="Curated collection of 10000 Generative MayanPunk made from 550 Mayan hieroglyphs. 
         " key="ogdesc" />
                <meta property="og:type" content="website" key="ogtype" />
                <meta property="og:url" content="https://mayanpunk.com/" key="ogurl"/>
                <meta property="og:site_name" content="https://mayanpunk.com/" key="ogsitename" />
                <meta name="twitter:card" content="summary_large_image" key="twcard"/>
                <meta property="twitter:domain" content="MayanPunk" key="twdomain" />
                <meta property="twitter:url" content="https://mayanpunk.com/" key="twurl" />
                <meta name="twitter:title" content="MayanPunk" key="twtitle" />
                <meta name="twitter:description" content="Curated collection of 10000 Generative MayanPunk made from 550 Mayan hieroglyphs. 
         " key="twdesc" />
        
</Head>

          <div >
            <div className="flex items-center justify-between w-full border-b-2	pb-6">
              <a href="/home" className=""><img src="images/502.svg" width="108" alt="" className="logo-image" /></a><span></span>
              <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
                <a href="/home" className="text-2xl Poppitandfinch text-white hover:text-black m-6">Home</a>
                <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
                <a href="/mint" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Mint</a>
                <a href="/glyphs" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Glyphs</a>
                <a href="/mayans" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Mayans</a>
                <a href="/faq" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
                <a href="https://linktr.ee/mayanpunk" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Communities</a>
              
              </nav>
            </div>
          </div>
             <div className="md:w-2/3 w-4/5 " id="about">
       


    

          <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                   <div className="flex flex-col justify-between mx-6 sm:w-/2 w-/4 py-6 "><br></br>
                  <h2 className="text-blau Poppitandfinch text-5xl ">Why MayanPunk</h2>
               
             <br></br>
                     <p className="text-xl text-white my-6  Poppitandfinch"> A universal accept reservation system in the Metaverse in which sysndicate pass access as a security check-in for filtering junks. Zib1 syndicate pass holders can redeem all future drops without spending gas fee.A universal accept reservation system in the Metaverse in which sysndicate pass access as a security check-in for filtering junks. Zib1 syndicate pass holders can redeem all future drops without spending gas fee.A universal accept reservation system in the Metaverse in which sysndicate pass access as a security check-in for filtering junks. Zib1 syndicate pass holders can redeem all future drops without spending gas fee.
</p>
<h2 className="text-blau Poppitandfinch text-5xl ">About us</h2>
              
                       <p className="text-xl text-white my-6  Poppitandfinch"> A universal accept reservation system in the Metaverse in which sysndicate pass access as a security check-in for filtering junks. Zib1 syndicate pass holders can redeem all future drops without spending gas fee.A universal accept reservation system in the Metaverse in which sysndicate pass access as a security check-in for filtering junks. Zib1 syndicate pass holders can redeem all future drops without spending gas fee.A universal accept reservation system in the Metaverse in which sysndicate pass access as a security check-in for filtering junks. Zib1 syndicate pass holders can redeem all future drops without spending gas fee.
  </p>

         </div>
          </div>
        
         <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/home" className=""><img src="images/502.svg" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="/home" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
              <a href="/gallery" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Collection</a>
              <a href="/mint" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Mint</a>
              <a href="/faq" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
              <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About US</a>
              <a href="/roadmap" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
              <a href="https://rinkeby.etherscan.io/address/0x805b19163109aa9506383c28c191f55bb882262f" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Testnet</a>

              <a href="https://discord.gg/9pNpXBDwqD" className="text-2xl Poppitandfinchsans text-blau   m-6">Discord</a>
              <a href="https://twitter.com/mayanpunk" className="text-2xl Poppitandfinchsans text-blau  m-6">Twitter</a>
             
              </nav>
          </div>
        </div>
        <p className="text-1xl text-white my-6  Poppitandfinch">All rights granted (c) <span className="text-blau text-1xl Poppitandfinchsans">MayanPunk </span> Fork it  <a href="https://github.com/Mayanpunk" className="text-blau text-1xl Poppitandfinchsans">Github </a></p>
     </div>
   
    )
  }
