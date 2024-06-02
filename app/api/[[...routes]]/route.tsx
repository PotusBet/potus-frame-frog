/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'
import whyImage from "./Slide1.png"
// import { frogUi } from 'frog/ui'
import { Box, Heading, Text, VStack, Rows, Image, Row, HStack, vars } from './ui.ts'
import { Span } from 'next/dist/trace'

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
        padding="4"
      >
        <Rows gap="8" grow>        
          <Row backgroundColor="beige" height="2/20">
            <HStack gap="8" grow alignHorizontal="center" >
              <Text size="28">
                SO
              </Text>
              <Text color="red" size="28" style='bold'>
                ONCHAIN SUMMER
              </Text>
              <Text size="28">
                BEGINS!
              </Text>
            </HStack>  
          </Row>
          <Row backgroundColor="beige" height="12/20" alignHorizontal="center" > 
            <Image src="/uncleSamTransparent.png" width={'256'}/>
          </Row>
          <Row backgroundColor="beige" height="6/20" >
            <VStack gap="0" grow alignVertical="center">
              <HStack gap="8" grow alignHorizontal="center" >
                  <Text size="28">
                    I WANT
                  </Text>                  
                  <Text color="red" size="28">
                    YOU
                  </Text>  
                </HStack>
                <HStack gap="8" grow alignHorizontal="center" >
                  <Text size="28">
                    TO BRING
                  </Text>
                  <Text color="red"size="28">
                    POTUS
                  </Text>
                  <Text size="28">
                    ONCHAIN!
                  </Text>
                </HStack>
              </VStack>    
          </Row>
          <Row backgroundColor="beige" height="1/20" fontSize={'12'} alignHorizontal="center"> POTUS.BET</Row>
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
        padding="4"
      >
        <Rows gap="8" grow>        
          <Row backgroundColor="beige" height="2/20">
            <HStack gap="8" grow alignHorizontal="center" >
              <Text size="28">
                HOW TO BRING
              </Text>
              <Text color="red" size="28" style='bold'>
                POTUS
              </Text>
              <Text size="28">
                ONCHAIN?
              </Text>
            </HStack>  
          </Row>
          <Row backgroundColor="beige" height="12/20" alignHorizontal="center" > 
            <Image src="/uncleSamTransparent.png" width={'256'}/>
          </Row>
          <Row backgroundColor="beige" height="6/20" >
            <VStack gap="0" grow alignVertical="center">
              <HStack gap="8" grow alignHorizontal="center" >
                  <Text size="28">
                    BY AIRDROP
                  </Text>                  
                  <Text color="red" size="28">
                    $POTUS
                  </Text>  
                </HStack>
                <HStack gap="8" grow alignHorizontal="center" >                  
                  <Text size="28">
                    TOKEN TO THE   
                  </Text>
                  <Text color="red"size="28">
                    PRESIDENT.
                  </Text>                                 
                </HStack>
              </VStack>    
          </Row>
          <Row backgroundColor="beige" height="1/20" fontSize={'12'} alignHorizontal="center"> POTUS.BET</Row>
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
          <Row backgroundColor="beige" height="2/20">
            <HStack gap="8" grow alignHorizontal="center" >
              <Text size="28">
                WHAT CAN
              </Text>
              <Text color="red" size="28" style='bold'>
                YOU
              </Text>
              <Text size="28">
                DO?
              </Text>
            </HStack>  
          </Row>
          <Row backgroundColor="beige" height="12/20" alignHorizontal="center" > 
            <Image src="/uncleSamTransparent.png" width={'256'}/>
          </Row>
          <Row backgroundColor="beige" height="6/20" >
            <VStack gap="0" grow alignVertical="center">
              <HStack gap="8" grow alignHorizontal="center" >
                  <Text size="28">
                    LIKE, RECAST, & 
                  </Text>                  
                  <Text color="red" size="28">
                    FOLLOW
                  </Text>  
                </HStack>
                <HStack gap="8" grow alignHorizontal="center" >                  
                  <Text size="28">
                    TO RECEIVE
                  </Text>
                  <Text color="red"size="28">
                    $POTUS
                  </Text>
                  <Text size="28">
                    BEFORE THE PRESIDENT.
                  </Text>                               
                </HStack>
              </VStack>    
          </Row>
          <Row backgroundColor="beige" height="1/20" fontSize={'12'} alignHorizontal="center"> POTUS.BET</Row>
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