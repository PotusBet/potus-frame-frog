/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'
// import whyImage from "./Slide1.png"

// Uncle Sam IPFS URL
const uncleSamImage = "https://bafybeifg6bm334q2eozek2kqnwlwafz3gsstlyeqxo7aegsfbziiqqxeme.ipfs.w3s.link/uncleSamTransparent.png";

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, status } = c
  return c.res({
    image: (
      <div style={{
        alignItems: 'center',        
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',        
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#E5CDB5',                                                                      
        fontFamily: 'Arial, sans-serif',
        fontSize: '48px',
        color: '#000',
      }}>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>          
          <span>IT'S</span>          
          <span style={{color:'red', paddingLeft: '14px'}}>ONCHAIN SUMMER!</span>
        </div>
        <img src={uncleSamImage} alt="Uncle Sam" style={{ height: '360' }} />
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>I WANT </span>          
          <span style={{color:'red', paddingLeft: '14px'}}>YOU</span>
          
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>TO BRING</span>
          <span style={{color:'red', paddingLeft: '14px', paddingRight:'14px'}}>POTUS</span> 
          <span>ONCHAIN.</span>        
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                                     
        }}>
          <span style={{fontSize:'20'}}>POTUS.BET</span>    
        </div>
      </div>
    ),
    intents: [      
      <Button action="/how">Click To Airdrop</Button>,
    ],
  })
})

app.frame('/how', (c) => {
  const { buttonValue, status } = c
  return c.res({
    image: (
      <div style={{
        alignItems: 'center',        
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',        
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#E5CDB5',                                                                      
        fontFamily: 'Arial, sans-serif',
        fontSize: '48px',
        color: '#000',
      }}>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>          
          <span>HOW TO BRING</span>          
          <span style={{color:'red', paddingLeft: '14px'}}>POTUS ONCHAIN?</span>
        </div>
        <img src={uncleSamImage} alt="Uncle Sam" style={{ height: '360' }} />
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>BY AIRDROP</span>
          <span style={{color:'red', paddingLeft: '14px', paddingRight:'14px'}}>$POTUS</span>
          <span>TOKEN</span>
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>TO THE NEXT</span>
          <span style={{color:'red', paddingLeft: '14px'}}>US PRESIDENT.</span>      
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                                     
        }}>
          <span style={{fontSize:'20'}}>POTUS.BET</span>    
        </div>
      </div>
    ),
    intents: [      
      <Button action="/">Back</Button>,
      <Button action="/whatareutilities">Click To Airdrop</Button>,
    ],
  })
})

app.frame('/whatareutilities', (c) => {
  const { buttonValue, status } = c
  return c.res({
    image: (
      <div style={{
        alignItems: 'center',        
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',        
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#E5CDB5',                                                                      
        fontFamily: 'Arial, sans-serif',
        fontSize: '48px',
        color: '#000',
      }}>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>          
          <span>WHAT ARE THE</span>          
          <span style={{color:'red', paddingLeft: '14px', paddingRight:'14px'}}>$POTUS</span>
          <span>UTILITIES?</span>          
        </div>
        <img src={uncleSamImage} alt="Uncle Sam" style={{ height: '360' }} />
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>$POTUS ARE BOTH</span>
          <span style={{color:'red', paddingLeft: '14px'}}>MEME COIN</span>
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>AND</span>
          <span style={{color:'red', paddingLeft: '14px', paddingRight:'14px'}}>GAME TOKEN</span>          
          <span>ON POTUS.BET.</span>
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                                     
        }}>
          <span style={{fontSize:'20'}}>POTUS.BET.</span>    
        </div>
      </div>
    ),
    intents: [      
      <Button action="/how">Back</Button>,
      <Button action="/whataretokenomics">Click To Airdrop</Button>,
    ],
  })
})

app.frame('/whataretokenomics', (c) => {
  const { buttonValue, status } = c
  return c.res({
    image: (
      <div style={{
        alignItems: 'center',        
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',        
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#E5CDB5',                                                                      
        fontFamily: 'Arial, sans-serif',
        fontSize: '48px',
        color: '#000',
      }}>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>          
          <span>WHAT ARE THE</span>          
          <span style={{color:'red', paddingLeft: '14px', paddingRight:'14px'}}>$POTUS</span>
          <span>TOKENOMICS?</span>          
        </div>
        <img src={uncleSamImage} alt="Uncle Sam" style={{ height: '360' }} />
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>LP: 10%.</span>
          <span style={{color:'red', paddingLeft: '14px'}}>PRESIDENT AIRDROP: 10%.</span>
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>ECOSYSTEM: 10%.</span>
          <span style={{color:'red', paddingLeft: '14px'}}>COMMUNITY AIRDROP: 70%.</span>                 
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                                     
        }}>
          <span style={{fontSize:'20'}}>POTUS.BET</span>    
        </div>
      </div>
    ),
    intents: [      
      <Button action="/whatareutilities">Back</Button>,
      <Button action="/howtogetairdrop">Click To Airdrop</Button>,
    ],
  })
})


app.frame('/howtogetairdrop', (c) => {
  const { buttonValue, status } = c
  return c.res({
    image: (
      <div style={{
        alignItems: 'center',        
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',        
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        backgroundColor: '#E5CDB5',                                                                      
        fontFamily: 'Arial, sans-serif',
        fontSize: '48px',
        color: '#000',
      }}>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>          
          <span>HOW TO RECEIVE</span>          
          <span style={{color:'red', paddingLeft: '14px', paddingRight:'14px'}}>$POTUS AIDROP?</span>
          
        </div>
        <img src={uncleSamImage} alt="Uncle Sam" style={{ height: '360' }} />
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>Like, Recast, &</span>
          <span style={{color:'red', paddingLeft: '14px'}}>FOLLOW</span>
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>TO GET YOUR AIRDROP</span>
          <span style={{color:'red', paddingLeft: '14px', paddingRight:'14px'}}>BEFORE</span>
          <span>THE PRESIDENT.</span>           
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                                     
        }}>
          <span style={{fontSize:'20'}}>POTUS.BET</span>    
        </div>
      </div>
    ),
    intents: [      
      <Button action="/whataretokenomics">Back</Button>,
      <Button action="/howtogetairdrop">Click To Airdrop</Button>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
