(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687],{51553:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mint",function(){return n(98736)}])},98736:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(35666),i=n.n(a),s=n(85893),r=n(9008),p=n(3283),o=n.n(p),u=n(67294),l="0xB9aB19454ccb145F9643214616c5571B8a4EF4f2",y=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"_by",type:"address"},{indexed:!1,internalType:"uint256",name:"_tokenId",type:"uint256"},{indexed:!1,internalType:"string",name:"_name",type:"string"}],name:"bananaNameChange",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"_licenseText",type:"string"}],name:"licenseisLocked",type:"event"},{inputs:[],name:"BANANA_PROVENANCE",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"LICENSE_TEXT",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_BANANAS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"bananaNames",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"bananaNamesOfOwner",outputs:[{internalType:"string[]",name:"",type:"string[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"bananaPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bananaReserve",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"string",name:"_name",type:"string"}],name:"changeBananaName",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_license",type:"string"}],name:"changeLicense",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"flipSaleState",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"lockLicense",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"maxBananaPurchase",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"numberOfTokens",type:"uint256"}],name:"mintBoringBanana",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_reserveAmount",type:"uint256"}],name:"reserveBananas",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"saleIsActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"provenanceHash",type:"string"}],name:"setProvenanceHash",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenLicense",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"tokensOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"viewBananaName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}];function d(e,t,n,a,i,s,r){try{var p=e[s](r),o=p.value}catch(u){return void n(u)}p.done?t(o):Promise.resolve(o).then(a,i)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var s=e.apply(t,n);function r(e){d(s,a,i,r,p,"next",e)}function p(e){d(s,a,i,r,p,"throw",e)}r(void 0)}))}}function m(){var e=(0,u.useState)(!1),t=e[0],n=e[1],a=(0,u.useState)(null),p=a[0],d=a[1],m=(0,u.useState)(1),f=m[0],x=m[1],h=(0,u.useState)(null),b=h[0],w=h[1],v=(0,u.useState)(0),g=v[0],T=v[1],k=(0,u.useState)(!1),N=k[0],M=k[1],j=(0,u.useState)(0),P=j[0],_=j[1];function A(){return I.apply(this,arguments)}function I(){return(I=c(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"undefined"!==typeof window.web3?window.web3=new(o())(window.ethereum):alert("No Ethereum interface injected into browser. Read-only access"),window.ethereum.enable().then((function(e){window.web3.eth.net.getNetworkType().then((function(e){console.log(e),"rinkeby"!=e&&alert("You are on "+e+" network. Change network to mainnet or you won't be able to do anything here")}));var t=e[0];d(t),n(!0),O(t)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return E.apply(this,arguments)}function E(){return(E=c(i().mark((function e(t){var n,a,s,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new window.web3.eth.Contract(y,l),w(n),e.next=4,n.methods.saleIsActive().call();case 4:return a=e.sent,M(a),e.next=8,n.methods.totalSupply().call();case 8:return s=e.sent,T(s),e.next=12,n.methods.mayanPrice().call();case 12:r=e.sent,_(r);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=c(i().mark((function e(t){var n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=10;break}return n=Number(P)*t,e.next=4,b.methods.mintMayan(t).estimateGas({from:p,value:n});case 4:a=e.sent,console.log("estimated gas",a),console.log({from:p,value:n}),b.methods.mint(t).send({from:p,value:n,gas:String(a)}).on("transactionHash",(function(e){console.log("transactionHash",e)})),e.next=11;break;case 10:console.log("Wallet not connected");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,u.useEffect)(c(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A();case 1:case"end":return e.stop()}}),e)}))),[]),(0,s.jsxs)("div",{id:"bodyy",className:"flex flex-col items-center justify-center min-h-screen py-2",children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:"Mayan Punk"}),(0,s.jsx)("link",{rel:"icon",href:"/images/favicon-32x32.png"}),(0,s.jsx)("meta",{property:"og:title",content:"MayanPunk"},"ogtitle"),(0,s.jsx)("meta",{property:"og:description",content:"Curated collection of 10000 Generative MayanPunk made from 550 Mayan hieroglyphs. "},"ogdesc"),(0,s.jsx)("meta",{property:"og:type",content:"website"},"ogtype"),(0,s.jsx)("meta",{property:"og:url",content:"https://mayanpunk.com/"},"ogurl"),(0,s.jsx)("meta",{property:"og:site_name",content:"https://mayanpunk.com/"},"ogsitename"),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"},"twcard"),(0,s.jsx)("meta",{property:"twitter:domain",content:"MayanPunk"},"twdomain"),(0,s.jsx)("meta",{property:"twitter:url",content:"https://mayanpunk.com/"},"twurl"),(0,s.jsx)("meta",{name:"twitter:title",content:"MayanPunk"},"twtitle"),(0,s.jsx)("meta",{name:"twitter:description",content:"Curated collection of 10000 Generative MayanPunk made from 550 Mayan hieroglyphs. "},"twdesc")]}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex items-center justify-between w-full border-b-2 pb-6",children:[(0,s.jsx)("a",{href:"/home",className:"",children:(0,s.jsx)("img",{src:"images/502.svg",width:"108",alt:"",className:"logo-image"})}),(0,s.jsx)("span",{}),(0,s.jsxs)("nav",{className:"flex flex-wrap flex-row justify-around Poppitandfinchsans",children:[(0,s.jsx)("a",{href:"/home",className:"text-2xl Poppitandfinch text-white hover:text-black m-6",children:"Home"}),(0,s.jsx)("a",{href:"/about",className:"text-2xl Poppitandfinchsans text-white hover:text-black m-6",children:"About"}),(0,s.jsx)("a",{href:"/mint",className:"text-2xl Poppitandfinchsans text-white hover:text-black m-6",children:"Mint"}),(0,s.jsx)("a",{href:"/glyphs",className:"text-2xl Poppitandfinchsans text-white hover:text-black m-6",children:"Glyphs"}),(0,s.jsx)("a",{href:"/mayans",className:"text-2xl Poppitandfinchsans text-white hover:text-black m-6",children:"Mayans"}),(0,s.jsx)("a",{href:"/faq",className:"text-2xl Poppitandfinchsans text-white hover:text-black m-6",children:"FAQ"}),(0,s.jsx)("a",{href:"https://linktr.ee/mayanpunk",className:"text-2xl Poppitandfinchsans text-white hover:text-black m-6",children:"Communities"})]})]})}),(0,s.jsxs)("div",{className:"md:w-2/3 w-4/5 ",id:"about",children:[(0,s.jsx)("div",{className:"md:w-2/3 w-4/5",children:(0,s.jsx)("div",{className:"mt-6 border-b-2 py-6",children:(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsxs)("span",{className:"flex Poppitandfinchsans text-3xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ",children:["Net Mayan Punk Minted :  ",(0,s.jsxs)("span",{className:"text-blau text-6xl",children:[" ",t?(0,s.jsx)(s.Fragment,{children:g}):(0,s.jsx)(s.Fragment,{children:"-"})," / 10000"]})]}),(0,s.jsxs)("div",{id:"mint",className:"flex justify-around mt-8 mx-6",children:[(0,s.jsx)("span",{className:"flex Poppitandfinchsans text-3xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3",children:"GIMME"}),(0,s.jsx)("input",{type:"number",min:"1",max:"20",value:f,onChange:function(e){return x(e.target.value)},name:"",className:"Poppitandfinchsans pl-4 text-4xl inline bg-grey-lighter py-2 font-normal rounded text-grey-darkest font-bold"}),(0,s.jsx)("span",{className:"flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold",children:"MayanPunk"})]}),N?(0,s.jsxs)("button",{onClick:function(){return function(e){return S.apply(this,arguments)}(f)},className:"mt-4 Poppitandfinchsans text-4xl border-6 bg-blau text-white ",children:["MINT ",f," MayanPunk for ",P*f/Math.pow(10,18)," ETH + GAS"]}):(0,s.jsx)("button",{className:"mt-4 Poppitandfinchsans text-4xl border-6 bg-blau text-white ",children:"SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED"})]})})}),(0,s.jsxs)("div",{className:"flex items-center justify-between w-full border-b-2 pb-6",children:[(0,s.jsx)("a",{href:"/home",className:"",children:(0,s.jsx)("img",{src:"images/502.svg",width:"108",alt:"",className:"logo-image"})}),(0,s.jsxs)("nav",{className:"flex flex-wrap flex-row justify-around Poppitandfinchsans",children:[(0,s.jsx)("a",{href:"/home",className:"text-2xl Poppitandfinchsans text-white hover:text-black m-6",children:"Home"}),(0,s.jsx)("a",{href:"/gallery",className:"text-2xl Poppitandfinchsans text-white hover:text-black m-6",children:"Collection"}),(0,s.jsx)("a",{href:"/mint",className:"text-2xl Poppitandfinchsans text-white hover:text-black m-6",children:"Mint"}),(0,s.jsx)("a",{href:"/faq",className:"text-2xl Poppitandfinchsans text-white hover:text-black m-6",children:"FAQ"}),(0,s.jsx)("a",{href:"/about",className:"text-2xl Poppitandfinchsans text-white hover:text-black m-6",children:"About US"}),(0,s.jsx)("a",{href:"/roadmap",className:"text-2xl Poppitandfinchsans text-white hover:text-black m-6",children:"Roadmap"}),(0,s.jsx)("a",{href:"https://rinkeby.etherscan.io/address/0x805b19163109aa9506383c28c191f55bb882262f",className:"text-2xl Poppitandfinchsans text-white hover:text-black m-6",children:"Testnet"}),(0,s.jsx)("a",{href:"https://discord.gg/9pNpXBDwqD",className:"text-2xl Poppitandfinchsans text-blau m-6",children:"Discord"}),(0,s.jsx)("a",{href:"https://twitter.com/mayanpunk",className:"text-2xl Poppitandfinchsans text-blau m-6",children:"Twitter"})]})]})]}),(0,s.jsxs)("p",{className:"text-1xl text-white my-6 Poppitandfinch",children:["All rights granted (c) ",(0,s.jsx)("span",{className:"text-blau text-1xl Poppitandfinchsans",children:"MayanPunk "})," Fork it  ",(0,s.jsx)("a",{href:"https://github.com/Mayanpunk",className:"text-blau text-1xl Poppitandfinchsans",children:"Github "})]})]})}},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},52361:function(){},94616:function(){},6567:function(){}},function(e){e.O(0,[482,6,774,888,179],(function(){return t=51553,e(e.s=t);var t}));var t=e.O();_N_E=t}]);