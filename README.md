# dom-app

Library of functions for building browser apps

```js
import { $header, $main, $section, $footer, $h1, $h2, $p, $img } from 'dom-app'

const elements = [
  $header( 
    $h1( 
      $img( { src: '/img/logo.svg' alt: 'My Logo' } ),
      'My App'       
    ) 
  ),
  $main(
    $section(
      { class: 'copy' },
      $h2( 'About' ),
      $p( 'Hullo wurld' )  
    )    
  ),
  $footer(
    $p( 'Copy me' )
  )
]

document.body.append( ...elements )
```