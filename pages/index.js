import Head from 'next/head'

export default function Home() {

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



    

                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="border-4 border-blue-300 p-4"><img src="images/NEW.gif" alt="" width="300px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau montserrat text-6xl text-center">Mayan Variants</h2>
                    <p className="text-xl text-white my-6  montserrat"> Following the recent worldwide pandemic, <span className="font-bold"> emerging reports </span>  suggest that several <span className="font-bold"> banana species </span> have begun exhibiting <span className="font-bold"> strange characteristics. </span> Our research team located across the globe has commenced efforts to <span className="font-bold"> study and document </span>  these unusual phenomena.   
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Concerned about parties trying to suppress our research, the team has opted to store our findings on the blockchain to prevent interference. Although this is a costly endeavour, our mission has never been clearer.   
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> The fate of the world's bananas depends on it.
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Your support in this time of need is greatly appreciated!   
                    </p>
                  </div>
                </div>
                <div id="gallery" className="   mx-6 py-6">
                    <h2 className="text-blau Montserrat-Light text-7xl text-center">Signature Series </h2>
                  <div className="flex flex-wrap  items-center mx-6   py-6 ">
                    <div className="md:w-1/2">
                      <div className=" border-blue-300 p-2"><img src="images/518.svg" alt="" width="600px" className="feature-image"/></div>

                    </div>
                    <div className="md:w-1/2 flex flex-wrap">
                      <div className=" p-2 w-1/2"><img src="images/502.svg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/477.svg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/789.svg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/481.svg" alt="" width="400px" className="feature-image"/></div>

                    </div>
                  </div>
                </div>

              

                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="border-4 border-blue-300 p-4"><img src="images/429.svg" alt="" width="300px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
          
                    <p className="text-xl text-black my-6  montserrat"> Universal Metaverse:
                    </p>
                     <p className="text-xl text-white my-6  montserrat"> A universal accept reservation system in the Metaverse in which sysndicate pass access as a security check-in for filtering junks. Zib1 syndicate pass holders can redeem all future drops without spending gas fee.
</p>
                    <p className="text-xl text-black my-6  montserrat"> Fractional Existence
                    </p>
                     <p className="text-xl text-white my-6  montserrat"> Zentians exhibit properties of Zentianbits which are fractionalized zentians with unique and distinctive traits and attributes which is randomly combined to generate Zentian.</p>
                    <p className="text-xl text-black my-6  montserrat"> Integrated Composition
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Each Zentianz consists of multiple aspects in various combinations. Within the same experience, one can see,multiple iterations. Also they are irreducible to non-interdependent components.
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Your support in this time of need is greatly appreciated!   
                    </p>
                  </div>
                </div>
                            

                <div className="md:w-2/3 w-4/5 " id="about">
       
        
       <div className="mt-6 border-b-2 py-6">
         <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
               <div className="lg:w-1/2 w-3/4">
                 <h1 className="text-4xl montserrat text-white ">Cybernetic </h1>
        
                 <p className="text-2xl text-white my-6  montserrat">Here we <span className="text-5xl Poppitandfinch "></span> <span className="text-blau text-5xl Poppitandfinchsans">Mayans</span> <span className="text-5xl Poppitandfinch"></span>, specialize in the world's <span className="text-span-2 font-bold">finest Mayan Glyphs</span>.<br />‍<br />xxxx <br/>‍<span className="text-blau text-5xl Poppitandfinchsans">xx </span><span className="text-5xl Poppitandfinch ">and</span><span className="text-blau text-5xl Poppitandfinchsans"> xx</span> <br/>xx.
                 </p>
              </div>
               <img className="lg:w-1/2 w-3/4" img src="images/181.svg" alt="" width="350px" className="feature-image"/>
         </div>
      
         </div>


            </div>
              <div id="contact" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className=" p-4"><img src="images/410.svg" alt="" width="150px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau montserrat text-6xl text-center">Contact</h2>
                    <p className="text-xl text-white my-6  montserrat"> We'd love to hear from you! 
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Drop us a line at <a className="text-black underline font-bold" target="_blank" href="mailto:mayanpunk@pm.me">mayanpunk@pm.me</a>,<br/>
                    or alternatively reach out to us on Twitter <a className="text-black underline font-bold" target="_blank" href="https://twitter.com/mayanpunk">@Mayanpunk</a><br/>
                    Or alternatively, join our <a className="text-black underline font-bold" target="_blank" href="">Discord Server</a>.
                    </p>
                  </div>
                  </div>
              </div>
            </div>
       


            
   
    )
  }
