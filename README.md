# dom-app

Library of functions for building browser apps.

This is not a framework, it's just where things I've been using a lot lately 
end up.

```js
const elements = [
  header( 
    h1( 
      img( { src: '/img/logo.svg', alt: 'My Logo' } ),
      'My App'       
    ) 
  ),
  main(
    section(
      { class: 'copy' },
      h2( 'About' ),
      p( 'Hullo wurld' )  
    )    
  ),
  footer(
    p( 'Copy me' )
  )
]

const drawingEl = svg(
  { 
    viewBox: [ 0, 0, 100, 100 ].join( ' ' ) 
  },
  
  rect({ x: 0, y: 0, width: 100, height: 100, fill: 'red' }),
  circle({ x: 50, y: 50, r: 50, fill: 'yellow' })
)

document.body.append( ...elements, drawingEl )

const logoEl = strictSelect( 'img' )

const logoImageData = await drawingMapper.htmlImage.imageData( logoEl )

const backgroundImageData = await drawingMapper.svg.imageData( drawingEl )

pasteImageData( logoImageData, backgroundImageData )

const newLogoEl = await drawingMapper.imageData.htmlImage( backgroundImageData )

logoEl.before( newLogoEl )
logoEl.remove()
drawingEl.remove()


```