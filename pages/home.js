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
     <button type="button" className="text-2xl Poppitandfinchsans text-white  m-6">Mint</button>
                <a href="/glyphs" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Glyphs</a>
                <a href="/mayans" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Mayans</a>
                <a href="/faq" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>

                <a href="https://linktr.ee/mayanpunk" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Communities</a>

              </nav>
            </div>
          </div>
  <div className="md:w-2/3 w-4/5 " id="about">
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-4xl montserrat text-white ">Introducing</h1>
                    <h1 className="text-6xl montserrat text-blau ">Mayan Punks</h1>
                    <p className="text-2xl text-white my-6  Poppitandfinch">
An experiment involving an alchemy of Generative Art and Ancient Civilization.<br />‍<br />Curated collection of random generated MayanPunk mapped to the real world. <br></br><br/>‍<span className="text-blau text-5xl Poppitandfinchsans">550 </span><span className="text-5xl Poppitandfinch "> Mayan</span><span className="text-blau text-5xl Poppitandfinchsans"> Hieroglyphs </span>
<span className="text-blau text-5xl Poppitandfinchsans">7777 </span><span className="text-5xl Poppitandfinch "> Mayan</span><span className="text-blau text-5xl Poppitandfinchsans"> Punk </span>     </p>
                                </div>
                  <img className="lg:w-1/2 w-3/4" img src="images/15.svg" alt="" width="350px" className="feature-image"/>
            </div>
            </div>
                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="border-4 border-blue-300 p-4"><img src="images/NEW.gif" alt="" width="300px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau montserrat text-6xl text-center">Mayan Glyphs</h2>
                    <p className="text-xl text-white my-6  Poppitandfinch"> MayanPunk is a generative art which is mapped to the real world. Built using Ancient Mayan script which is logosyllabic combining almost 550 logograms representing whole words and syllables used in the Maya Civilization.
                    </p>

                    <p className="text-xl text-white my-6  Poppitandfinch">
The Maya script was a logosyllabic system with some syllabogrammatic elements. Individual glyphs or symbols could represent either a morpheme or a syllable, and the same glyph could often be used for both.
                    </p>
                  </div>
                </div>
                <div id="gallery" className="   mx-6 py-6">

                    <p className="text-blau Montserrat-Light text-4xl text-center"> A logographic sign, a "sign that represents a word" is often simply a
picture of a major element of the act or object represented </p>

                  <div className="flex flex-wrap  items-center mx-6   py-6 ">
                  </div>
                </div>
                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="border-4 border-blue-300 p-4"><img src="images/a1.svg" alt="" width="300px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
          <p className="text-blau Montserrat-Light text-3xl"> Hiero glyphs
                    </p>
                     <p className="text-xl text-white my-6  Poppitandfinch"> The word hieroglyph literally means "sacred carvings". The Mayans first used hieroglyphs exclusively for inscriptions carved.</p>
                    <p className="text-blau Montserrat-Light text-3xl"> Emblem glyphs
                    </p>
                     <p className="text-xl text-white my-6  Poppitandfinch">  the emblem glyph (actually made of several glyphs) is an ancient Maya title. It is understood to translate as "holy lord of such and such place" -- with each city-state's/polity's name put in the "such and such place" spot. When used, an emblem glyph would be placed next to the ruler's name</p><p className="text-blau Montserrat-Light text-3xl"> Logosyllabic glyphs
                    </p>
                    <p className="text-xl text-white my-6  Poppitandfinch"> The Maya writing system is logosyllabic, meaning its symbols can represent sounds in the form of syllables (like “ma” or “tot”), or they might represent whole concepts (like “river” or “house”). This made the language very difficult to decode</p>
                   </div>
                </div>
                <div id="traits" className="flex flex-wrap justify-around  mx-6 py-6">
          <div className="lg:w-/2 w-/4">

                    <p className="text-blau Montserrat-Light text-2xl">Mayan Syllables
                    </p>
                     <p className="text-xl text-white my-6  Poppitandfinch"> Many syllables can be represented by more than one glyph. Mayan script was usually written in paired vertical columns reading from left to right and top to bottom in a zigzag pattern.</p>
                    </div>


                </div>
                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                <div className="border-4 border-blue-300 p-4"><img src="images/g7.gif" alt="" width="110px" className="feature-image"/></div>
                <div className="border-4 border-blue-300 p-4"><img src="images/g31.gif" alt="" width="110px" className="feature-image"/></div>
                <div className="border-4 border-blue-300 p-4"><img src="images/g0.gif" alt="" width="110px" className="feature-image"/></div>
                <div className="border-4 border-blue-300 p-4"><img src="images/g8.gif" alt="" width="110px" className="feature-image"/></div>
                <div className="border-4 border-blue-300 p-4"><img src="images/g16a.gif" alt="" width="110px" className="feature-image"/></div>
                <div className="border-4 border-blue-300 p-4"><img src="images/g25.gif" alt="" width="110px" className="feature-image"/></div>
                </div><div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                <div className="border-4 border-blue-300 p-4"><img src="images/g32.gif" alt="" width="110px" className="feature-image"/></div>
                <div className="border-4 border-blue-300 p-4"><img src="images/g3a.gif" alt="" width="110px" className="feature-image"/></div>
                <div className="border-4 border-blue-300 p-4"><img src="images/g30.gif" alt="" width="110px" className="feature-image"/></div>
                <div className="border-4 border-blue-300 p-4"><img src="images/g26.gif" alt="" width="110px" className="feature-image"/></div>
                <div className="border-4 border-blue-300 p-4"><img src="images/g20.gif" alt="" width="110px" className="feature-image"/></div>
                <div className="border-4 border-blue-300 p-4"><img src="images/g19.gif" alt="" width="110px"  className="feature-image"/></div>
                </div>

                <div id="traits" className="flex flex-wrap justify-around  mx-6 py-6">
          <div className="lg:w-/2 w-/4">

                    <p className="text-blau Montserrat-Light text-2xl"> MayanPunk Tribes
                    </p>
                     <p className="text-xl text-white my-6  Poppitandfinch"> What's more, they were one of only three civilizations that invented a complete system of writing., you will learn about ancient Maya writing and about the ancient Maya civilization.
</p><br></br><br></br>
                <p className="text-blau Montserrat-Light text-2xl"> We are eager to collab with artists and developers.
                    </p>
                    </div>


                </div>

                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 "><img src="images/410.svg" alt="" width="110px" /><p className="text-xl text-white my-6  Montserrat-Light">
                  Drop us a line at <a className="text-blau underline font-bold" target="_blank" href="mailto:mayanpunk@pm.me">neohex@pm.me</a>,<br/>
                                                                                                                                                                                                                      Or alternatively, join our <a className="text-black underline font-bold" target="https://discord.gg/9pNpXBDwqD" href="https://discord.gg/9pNpXBDwqD">Discord Server</a>.
                                                                                                                                                                                                                                 </p>
                 </div>
                                                                                                                                                                                          or alternatively reach out to us on Twitter <a className="text-black underline font-bold" target="_blank" href="https://twitter.com/mayanpunk">@Mayanpunk</a><br/>




           <br></br>
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/home" className=""><img src="images/502.svg" width="110" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="/home" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
              <a href="/gallery" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Collection</a>
       <button type="button" className="text-2xl Poppitandfinchsans text-white  m-6">Mint</button>
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
