import React, { useState } from 'react';
import { Stack, Box, Heading, Input, Flex, Button } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function EditButton() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [color, setColor] = useState('black');
  const [fontSize, setFontSize] = useState(16);
  const [text, setText] = useState('Button');
  const [margin, setMargin] = useState({
    top: '0',
    right: '0',
    bottom: '0',
    left: '0'
  });
  const [padding, setPadding] = useState({
    top: '0',
    right: '0',
    bottom: '0',
    left: '0'
  });
  const [borderRadius, setBorderRadius] = useState({
    topLeft: '0',
    topRight: '0',
    bottomRight: '0',
    bottomLeft: '0'
  });
  const [boxShadow, setBoxShadow] = useState({
    x: '0',
    y: '0',
    blur: '0',
    spread: '0',
    color: 'rgba(0, 0, 0, 0.25)'
  });
  const [border, setBorder] = useState({
    width: '1px',
    style: 'solid',
    color: 'black'
  });
  const [styles, setStyles] = useState({
    color: color,
    backgroundColor: backgroundColor,
    fontSize: `${fontSize}px`,
    border: `${border.width}px ${border.style} ${border.color}`,
    borderRadius: `${borderRadius.topLeft}px ${borderRadius.topRight}px ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px`,
    boxShadow: `${boxShadow.x}px ${boxShadow.y}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`,
    padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
    margin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`
  });

  return (
    <div>
      <button style={styles}>{text}</button>
      <Stack maxW='container.lg' spacing={10} marginTop={10}>
        <Box>
          <Heading as="h5" size="lg" fontWeight="medium" marginBottom={4}>Text</Heading>
          <Input placeholder='Enter button text...' value={text} onChange={input => setText(input.target.value)} />
        </Box>

        <Box>
          <Heading as="h5" size="lg" fontWeight="medium" marginBottom={4}>Font Size</Heading>
          <Input placeholder='Enter Font Size' value={fontSize} onChange={input => {
            setFontSize(input.target.value);
            setStyles({
              ...styles, fontSize: `${input.target.value}px`
            });
          }} />
        </Box>

        <Box>
          <Heading as="h5" size="lg" fontWeight="medium" marginBottom={4}>Color</Heading>
          <Input w={'20'} type='color' value={color} onChange={input => {
            setColor(input.target.value);
            setStyles({
              ...styles, color: input.target.value
            });
          }} />
        </Box>

        <Box>
          <Heading as="h5" size="lg" fontWeight="medium" marginBottom={4}>Background</Heading>
          <Input w={'20'} type='color' value={backgroundColor} onChange={input => {
            setBackgroundColor(input.target.value);
            setStyles({
              ...styles, backgroundColor: input.target.value
            });
          }} />
        </Box>

        <Box>
          <Heading as="h5" size="lg" fontWeight="medium" marginBottom={4}>Padding</Heading>
          <Flex>
            <Input w={'40'} type='number' onChange={input => {
              setPadding({
                ...padding, top: input.target.value
              });
              setStyles({
                ...styles, padding: `${input.target.value}px ${padding.right}px ${padding.bottom}px ${padding.left}px`
              });
            }} marginRight={5} placeholder='top-left' />
            <Input w={'40'} type='number' onChange={input => {
              setPadding({
                ...padding, right: input.target.value
              });
              setStyles({
                ...styles, padding: `${padding.top}px ${input.target.value}px ${padding.bottom}px ${padding.left}px`
              });
            }} marginRight={5} placeholder='top-right' />
            <Input w={'40'} type='number' onChange={input => {
              setPadding({
                ...padding, bottom: input.target.value
              });
              setStyles({
                ...styles, padding: `${padding.top}px ${padding.right}px ${input.target.value}px ${padding.left}px`
              });
            }} marginRight={5} placeholder='bottom-right' />
            <Input w={'40'} type='number' onChange={input => {
              setPadding({
                ...padding, left: input.target.value
              });
              setStyles({
                ...styles, padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${input.target.value}px`
              });
            }} marginRight={5} placeholder='bottom-left' />
          </Flex>
        </Box>

        <Box>
          <Heading as="h5" size="lg" fontWeight="medium" marginBottom={4}>Margin</Heading>
          <Flex>
            <Input w={'40'} type='number' onChange={input => {
              setMargin({
                ...margin, top: input.target.value
              });
              setStyles({
                ...styles, margin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`
              });
            }} marginRight={5} placeholder='top-left' />
            <Input w={'40'} type='number' onChange={input => {
              setMargin({
                ...margin, right: input.target.value
              });
              setStyles({
                ...styles, margin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`
              });
            }} marginRight={5} placeholder='top-right' />
            <Input w={'40'} type='number' onChange={input => {
              setMargin({
                ...margin, bottom: input.target.value
              });
              setStyles({
                ...styles, margin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`
              });
            }} marginRight={5} placeholder='bottom-right' />
            <Input w={'40'} type='number' onChange={input => {
              setMargin({
                ...margin, left: input.target.value
              });
              setStyles({
                ...styles, margin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`
              });
            }} marginRight={5} placeholder='bottom-left' />
          </Flex>
        </Box>

        <Box>
          <Heading as="h5" size="lg" fontWeight="medium" marginBottom={4}>Border Style</Heading>
          <Flex>
            <Input w={'40'} type='number' marginRight={5} placeholder='width' onChange={input => {
              setBorder({
                ...border, width: input.target.value+'px'
              });
              setStyles({
                ...styles, border: `${input.target.value} ${border.style} ${border.color}`
              });
            }} />
            <Input w={'40'} marginRight={5} placeholder='style' onChange={input => {
              setBorder({
                ...border, style: input.target.value
              });
              setStyles({
                ...styles, border: `${border.width} ${input.target.value} ${border.color}`
              });
            }} />
            <Input w={'20'} marginRight={5} type='color' onChange={input => {
              setBorder({
                ...border, color: input.target.value
              });
              setStyles({
                ...styles, border: `${border.width} ${border.style} ${input.target.value}`
              });
            }} />
          </Flex>
        </Box>

        <Box>
          <Heading as="h5" size="lg" fontWeight="medium" marginBottom={4}>Border Radius</Heading>
          <Flex>
            <Input w={'40'} type='number' marginRight={5} placeholder='top-left' onChange={input => {
              setBorderRadius({
                ...borderRadius, topLeft: input.target.value
              });
              setStyles({
                ...styles, borderRadius: `${input.target.value}px ${borderRadius.topRight}px ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px`
              });
            }} />
            <Input w={'40'} type='number' marginRight={5} placeholder='top-right' onChange={input => {
              setBorderRadius({
                ...borderRadius, topRight: input.target.value
              });
              setStyles({
                ...styles, borderRadius: `${borderRadius.topLeft}px ${input.target.value}px ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px`
              });
            }} />
            <Input w={'40'} type='number' marginRight={5} placeholder='bottom-right' onChange={input => {
              setBorderRadius({
                ...borderRadius, bottomRight: input.target.value
              });
              setStyles({
                ...styles, borderRadius: `${borderRadius.topLeft}px ${borderRadius.topRight}px ${input.target.value}px ${borderRadius.bottomLeft}px`
              });
            }} />
            <Input w={'40'} type='number' marginRight={5} placeholder='bottom-left' onChange={input => {
              setBorderRadius({
                ...borderRadius, bottomLeft: input.target.value
              });
              console.log(borderRadius);
              setStyles({
                ...styles, borderRadius: `${borderRadius.topLeft}px ${borderRadius.topRight}px ${borderRadius.bottomRight}px ${input.target.value}px`
              });
            }} />
          </Flex>
        </Box>

        <Box>
          <Heading as="h5" size="lg" fontWeight="medium" marginBottom={4}>Box Shadow</Heading>
          <Flex>
            <Input w={'40'} type='number' marginRight={5} placeholder='shadow-x' onChange={input => {
              setBoxShadow({
                ...boxShadow, x: input.target.value
              });
              setStyles({
                ...styles, boxShadow: `${input.target.value}px ${boxShadow.y}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`
              });
            }} />
            <Input w={'40'} type='number' marginRight={5} placeholder='shadow-y' onChange={input => {
              setBoxShadow({
                ...boxShadow, y: input.target.value
              });
              setStyles({
                ...styles, boxShadow: `${boxShadow.x}px ${input.target.value}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color}`
              });
            }} />
            <Input w={'40'} type='number' marginRight={5} placeholder='blur-radius' onChange={input => {
              setBoxShadow({
                ...boxShadow, blur: input.target.value
              });
              setStyles({
                ...styles, boxShadow: `${boxShadow.x}px ${boxShadow.y}px ${input.target.value}px ${boxShadow.spread}px ${boxShadow.color}`
              });
            }} />
            <Input w={'40'} type='number' marginRight={5} placeholder='spread-radius' onChange={input => {
              setBoxShadow({
                ...boxShadow, spread: input.target.value
              });
              setStyles({
                ...styles, boxShadow: `${boxShadow.x}px ${boxShadow.y}px ${boxShadow.blur}px ${input.target.value}px ${boxShadow.color}`
              });
            }} />
            <Input w={'40'} marginRight={5} type='color' onChange={input => {
              setBoxShadow({
                ...boxShadow, color: input.target.value
              });
              setStyles({
                ...styles, boxShadow: `${boxShadow.x}px ${boxShadow.y}px ${boxShadow.blur}px ${boxShadow.spread}px ${input.target.value}`
              });
            }} />
          </Flex>
        </Box>

        <Box>
          <Button disabled>Code</Button>
          <SyntaxHighlighter language='html' style={docco}>
            {`
            <button>${text}</button>
            <style>
            button{
                    color: ${styles.color};
                    background-color: ${styles.backgroundColor};
                    font-size: ${styles.fontSize};
                    padding: ${styles.padding};
                    margin: ${styles.margin};
                    border: ${styles.border};
                    border-radius: ${styles.borderRadius};
                    box-shadow: ${styles.boxShadow};
                  }
            </style>
                    `}
          </SyntaxHighlighter>
        </Box>
      </Stack>
    </div>
  )
}

export default EditButton