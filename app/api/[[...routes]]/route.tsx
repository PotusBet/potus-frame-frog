/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'
import whyImage from "./Slide1.png"

import { Box, Heading, Text, VStack, Rows, Image, Row, HStack, vars } from './ui'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  ui: { vars },
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, status } = c
  return c.res({    
    image: (      
      <Box
        grow
        alignVertical="center"
        backgroundColor="beige"        
        padding="6"
      >
        <Rows gap="8" grow>        
          <Row backgroundColor="beige" height='1/7'>
            <HStack gap="8" grow alignHorizontal="center" >
              <Text size="24">
                IT'S
              </Text>
              <Text color="red" size="24">
                ONCHAIN SUMMER!
              </Text>              
            </HStack>  
          </Row>
          <Row backgroundColor="beige" alignHorizontal="center" height='5/7' alignVertical="center"> 
            <Image src="/uncleSamTransparent.png" width={'256'}/>
          </Row>
          <Row backgroundColor="beige" height='2/7'>
            <VStack gap="0" grow alignVertical="center">
              <HStack gap="8" grow alignHorizontal="center" >
                <Text size="24">
                  I WANT
                </Text>                  
                <Text color="red" size="24">
                  YOU
                </Text>  
              </HStack>
              <HStack gap="8" grow alignHorizontal="center" >
                <Text size="24">
                  TO BRING
                </Text>
                <Text color="red"size="24">
                  POTUS ONCHAIN!
                </Text>                
              </HStack>
              <HStack gap="8" grow alignHorizontal="right" alignVertical='top'>
                <Text size="12">
                POTUS.BET
                </Text>                  
              </HStack>
            </VStack>  
          </Row>
        </Rows>        
      </Box>
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
      <Box
        grow
        alignVertical="center"
        backgroundColor="beige"
        padding="6"
      >
        <Rows gap="8" grow>        
          <Row backgroundColor="beige" height="1/7">
            <HStack gap="8" grow alignHorizontal="center" >
              <Text size="24">
                HOW TO BRING
              </Text>
              <Text color="red" size="24" style='bold'>
                POTUS ONCHAIN?
              </Text>              
            </HStack>  
          </Row>
          <Row backgroundColor="beige" height="5/7" alignHorizontal="center" alignVertical='center'> 
            <Image src="/uncleSamTransparent.png" width={'256'}/>
          </Row>
          <Row backgroundColor="beige" height="2/7" >
            <VStack gap="0" grow alignVertical="center">
              <HStack gap="8" grow alignHorizontal="center" >
                  <Text size="24">
                    BY AIRDROP
                  </Text>
                  <Text color="red" size="24">
                    $POTUS
                  </Text>  
                </HStack>
                <HStack gap="8" grow alignHorizontal="center" >                  
                  <Text size="24">
                    TOKEN TO THE   
                  </Text>
                  <Text color="red" size="24">
                    PRESIDENT.
                  </Text>                                 
                </HStack>
                <HStack gap="8" grow alignHorizontal="right" >
                  <Text size="12">
                  POTUS.BET
                  </Text>                  
                </HStack>
              </VStack>    
          </Row>          
        </Rows>        
      </Box>
    ),
    intents: [   
      <Button action="/">Back</Button>,     
      <Button action="/what">Click To Airdrop</Button>, 
    ],
  })
})

app.frame('/what', (c) => {
  const { buttonValue, status } = c
  return c.res({
    image: (      
      <Box
        grow
        alignVertical="center"
        backgroundColor="beige"
        padding="4"
      >
        <Rows gap="8" grow>        
          <Row backgroundColor="beige" height="1/7">
            <HStack gap="8" grow alignHorizontal="center" >
              <Text size="24">
                WHAT CAN
              </Text>
              <Text color="red" size="24">
                YOU
              </Text>
              <Text size="24">
                DO?
              </Text>
            </HStack>  
          </Row>
          <Row backgroundColor="beige" height="5/7" alignHorizontal="center" alignVertical='center'> 
            <Image src="/uncleSamTransparent.png" width={'256'}/>
          </Row>
          <Row backgroundColor="beige" height="2/7" >
            <VStack gap="0" grow alignVertical="center">
              <HStack gap="8" grow alignHorizontal="center" >
                  <Text size="24">
                    LIKE, RECAST, & 
                  </Text>                  
                  <Text color="red" size="24">
                    FOLLOW
                  </Text>  
                </HStack>
                <HStack gap="8" grow alignHorizontal="center" >                  
                  <Text size="24">
                    TO RECEIVE
                  </Text>
                  <Text color="red" size="24">
                    $POTUS
                  </Text>
                  <Text size="24">
                    BEFORE THE PRESIDENT.
                  </Text>                               
                </HStack>
                <HStack gap="8" grow alignHorizontal="right" >
                  <Text size="12">
                  POTUS.BET
                  </Text>                  
                </HStack>
              </VStack>    
          </Row>          
        </Rows>        
      </Box>
    ),
    intents: [      
      <Button.Reset>Reset</Button.Reset>,  
      <Button.Link href="https://warpcast.com/~/channel/potus">Coming Airdrop on /POTUS</Button.Link>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)