import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">


<Head>
                <title>Zibits</title>
                <link rel="icon" href="/images/favicon-32x32.png" />
                <meta property="og:title" content="Zibit"  key="ogtitle" />
                <meta property="og:description" content="Curated collection of 5555 Zibit NFTs " key="ogdesc" />
                <meta property="og:type" content="website" key="ogtype" />
                <meta property="og:url" content="https://zib.one" key="ogurl"/>
                <meta property="og:site_name" content="https://zib.one/" key="ogsitename" />
                <meta name="twitter:card" content="summary_large_image" key="twcard"/>
                <meta property="twitter:domain" content="Zibits" key="twdomain" />
                <meta property="twitter:url" content="https://zib.one" key="twurl" />
                <meta name="twitter:title" content="Zib0ne" key="twtitle" />
                <meta name="twitter:description" content="Curated collection of 5555 Zibit NFTs" key="twdesc" />
</Head>

          <div >
            <div className="flex items-center justify-between w-full border-b-2	pb-6">
              <a href="/home" className=""><img src="images/502.svg" width="108" alt="" className="logo-image" /></a><span></span>
              <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
                <a href="/home" className="text-2xl Poppitandfinch text-white hover:text-black m-6">Home</a>
                <a href="/mint" className="text-2xl Poppitandfinch text-white hover:text-black m-6">Mint</a>
                <a href="/faq" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
                <a href="https://linktr.ee/zibone" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Zib One</a>
                <a href="/roadmap" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
              </nav>
            </div>
          </div>
             <div className="md:w-2/3 w-4/5 " id="about">
       


    

          <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                   <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-3/4 py-6 "><br></br>

                  <h2 className="text-blau Poppitandfinch text-5xl ">Why MayanPunk</h2>
               
             <br></br>

                   <img className="lg:w-1/2 w-3/4" img src="images/g30.gif" alt="" width="200px" className="feature-image"/>
                     <p className="text-xl text-white my-6  Poppitandfinch"> MayanPunk demonstrate an impressive ability to use word play, iconography, and other linguistic and
visual dimensions to create truly magnificent generative art as rich as Classic Maya art is in its iconographic displays.</p>

              
                       <p className="text-xl text-white my-6  Poppitandfinch"> Classic Maya writing makes use of a range of types of signs, sorne more related to
phonological units, the others more related to conceptual units. These may be called phonetic and
logographic signs, respectively. The same word may be wrinen in the same text in a variety of
ways, making use of the possibilities offered by these two types of signs as well as by graphic
variants and stylistic variations in the visual representation of the individual signs.
  </p>

         </div>
          </div>
        
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/home" className=""><img src="images/502.svg" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="/home" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
             
                <button type="button" className="text-2xl Poppitandfinchsans text-white  m-6">Mint</button>
              <a href="/faq" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
              <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About US</a>
           

              <a href="https://discord.gg/9pNpXBDwqD" className="text-2xl Poppitandfinchsans text-blau   m-6">Discord</a>
              <a href="https://twitter.com/mayanpunk" className="text-2xl Poppitandfinchsans text-blau  m-6">Twitter</a>
             
            </nav>
          </div>
        </div>
        <p className="text-1xl text-white my-6  Poppitandfinch">All rights granted (c) <span className="text-blau text-1xl Poppitandfinchsans">MayanPunk </span> Fork it  <a href="https://github.com/Mayanpunk" className="text-blau text-1xl Poppitandfinchsans">Github </a></p>
     </div>
   
    )
  }
