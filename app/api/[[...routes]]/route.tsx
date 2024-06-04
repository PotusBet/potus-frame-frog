/** @jsxImportSource frog/jsx */

import { Button, Frog} from 'frog'
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
        backgroundColor: '#115DFE',                                                                      
        fontFamily: 'Arial, sans-serif',
        fontSize: '44px',
        color: '#fff',
      }}>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>                              
          <span style={{color:'yellow', paddingRight: '14px'}}>ONCHAIN SUMMER</span>
          <span>is Here!</span>
        </div>
        <img src={uncleSamImage} alt="Uncle Sam" style={{ height: '360' }} />
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                     
        }}>
          <span>It's Time To</span>                    
          <span style={{color:'yellow', paddingLeft: '14px', paddingRight:'14px'}}>INVITE</span> 
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>The</span>
          <span style={{color:'yellow', paddingLeft: '14px', paddingRight:'14px'}}>WORLD</span> 
          <span>& The</span>
          <span style={{color:'yellow', paddingLeft: '14px', paddingRight:'14px'}}>POTUS</span> 
          <span>Onchain!</span>
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                                     
        }}>
        
        <span style={{fontSize:'20', marginLeft: '1000px'}}>@onchainpotus</span>    
        </div>
      </div>
    ),
    intents: [      
      <Button action="/invite">Click To Airdrop</Button>,
    ],
  })
})

app.frame('/invite', (c) => {
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
        backgroundColor: '#115DFE',                                                                      
        fontFamily: 'Arial, sans-serif',
        fontSize: '44px',
        color: '#fff',
      }}>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>          
          <span>How we invite the</span>          
          <span style={{color:'yellow', paddingLeft: '14px', paddingRight: '14px'}}>WORLD & POTUS</span>
          <span>Onchain?</span>  
        </div>
        <img src={uncleSamImage} alt="Uncle Sam" style={{ height: '360' }} />
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>By airdrop</span>
          <span style={{color:'yellow', paddingLeft: '14px', paddingRight:'14px'}}>$POTUS</span>          
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>Token to the</span>
          <span style={{color:'yellow', paddingLeft: '14px'}}>WORLD & POTUS.</span>    
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                                     
        }}>

        <span style={{fontSize:'20', marginLeft: '1000px'}}>@onchainpotus</span>
        </div>
      </div>
    ),
    intents: [      
      <Button action="/">Back</Button>,
      <Button action="/mission">Click To Airdrop</Button>,
    ],
  })
})

app.frame('/mission', (c) => {
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
        backgroundColor: '#115DFE',                                                                      
        fontFamily: 'Arial, sans-serif',
        fontSize: '44px',
        color: '#fff',
      }}>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>          
          <span>What is the $POTUS</span>          
          <span style={{color:'yellow', paddingLeft: '14px'}}> PURPOSE?</span>          
        </div>
        <img src={uncleSamImage} alt="Uncle Sam" style={{ height: '360' }} />
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>$POTUS is a</span>
          <span style={{color:'yellow', paddingLeft: '14px'}}>MEME & GAME TOKEN</span>
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>To bring the</span>
          <span style={{color:'yellow', paddingLeft: '14px', paddingRight:'14px'}}>WORLD & POTUS</span>          
          <span>Onchain.</span>
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                                     
        }}>          
        <span style={{fontSize:'20', marginLeft: '1000px'}}>@onchainpotus</span>
        </div>
      </div>
    ),
    intents: [      
      <Button action="/invite">Back</Button>,
      <Button action="/tokenomic">Click To Airdrop</Button>,
    ],
  })
})

app.frame('/tokenomic', (c) => {
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
        backgroundColor: '#115DFE',                                                                      
        fontFamily: 'Arial, sans-serif',
        fontSize: '44px',
        color: '#fff',
      }}>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>          
          <span>What is the $POTUS</span>          
          <span style={{color:'yellow', paddingLeft: '14px'}}>TOKENOMIC?</span>              
        </div>
        <img src={uncleSamImage} alt="Uncle Sam" style={{ height: '360' }} />
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>Liquidity Pool: 10%. Ecosystem: 10%.</span>
          
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>          
          <span style={{color:'yellow'}}>President Airdrop: 10%. World Airdrop: 70%.</span>          
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                                     
        }}>
        <span style={{fontSize:'20', marginLeft: '1000px'}}>@onchainpotus</span>
        </div>
      </div>
    ),
    intents: [      
      <Button action="/mission">Back</Button>,
      <Button action="/airdrop">Click To Airdrop</Button>,
    ],
  })
})


app.frame('/airdrop', (c) => {
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
        backgroundColor: '#115DFE',                                                                      
        fontFamily: 'Arial, sans-serif',
        fontSize: '44px',
        color: '#fff',        
      }}>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>          
          <span>How to get $POTUS</span>          
          <span style={{color:'yellow', paddingLeft: '14px'}}>AIRDROP</span>
          <span>?</span>    
        </div>
        <img src={uncleSamImage} alt="Uncle Sam" style={{ height: '360' }} />
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span style={{color:'yellow', paddingRight: '14px'}}>Snapshot</span>
          <span> Coming.</span>
             
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                            
        }}>
          <span style={{color:'yellow', paddingLeft: '14px'}}>Recast, Follow & Join /onchainpotus NOW.</span>                  
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',   
        }}>
        <span style={{fontSize:'20', marginLeft: '1000px'}}>@onchainpotus</span> 
        </div>
      </div>
    ),
    intents: [      
      <Button.Reset>Reset</Button.Reset>,
      // <Button.Link href="/https://warpcast.com/~/channel/onchainpotus">Join onchainpotus NOW</Button.Link>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
