/** @jsxImportSource frog/jsx */

import { colors, createSystem } from 'frog/ui'


export const {
  Box,
  Columns,
  Column,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Rows,
  Row,
  Spacer,
  Text,
  VStack,
  vars,
} = createSystem({
  // fonts: {
  //   default: [
  //     {
  //       name: 'Open Sans',
  //       source: 'google',
  //       style:'normal',
  //       weight: 400,                
  //     },
  //     {
  //       name: 'Open Sans',
  //       source: 'google',
  //       style:'normal',
  //       weight: 600,        
  //     },
  //     {
  //       name: 'Open Sans',
  //       source: 'google',
  //       style:'normal',     
  //       weight: 700,             
  //     },
  //   ],
  //   madimi: [
  //     {
  //       name: 'Madimi One',
  //       source: 'google',
  //     },
  //   ],
  // },
  
  colors: {
    text: '#000000',
    background: '#ffffff',
    beige: '#E5CDB5',
    white: '#ffffff',
    black: '#000000',
    blue: '#0070f3',
    green: '#00ff00',
    red: '#ff0000',
    orange: '#ffaa00',
}
})