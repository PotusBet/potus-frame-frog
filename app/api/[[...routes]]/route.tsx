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
          <span>HOW TO BRING</span>          
          <span style={{color:'red', paddingLeft: '14px'}}>POTUS ONCHAIN?</span>
        </div>
        <img src={uncleSamImage} alt="Uncle Sam" style={{ height: '360' }} />
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>BY AIRDROP</span>
          <span style={{color:'red', paddingLeft: '14px'}}>$POTUS</span>
        </div>
        <div style={{                
          display: 'flex',
          flexDirection: 'row',                                      
        }}>
          <span>TOKEN TO THE </span>
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
      <Button action="/how">Click To Airdrop</Button>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
