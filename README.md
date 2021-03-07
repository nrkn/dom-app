# dom-app

Library of functions for building browser apps.

This is not a framework, it's just where things I've been using a lot lately 
end up.

Might be useful to you if you like typescript and you like everything to just
be functions that deal with simple data

Also exports TS typings

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

## exports

### HTML Element factories

Exports all elements currently named in typescript's `HTMLElementTagNameMap`

```ts
import { div, span } from 'dom-app'

const el = div( { id: 'foo' }, span( 'Hello' ), ' World' )
```

Attributes are a `Record<string,string>`

The `style` attribute is treated specially, the value is expected to be 
a `Partial<CSSStyleDeclaration>`:

```ts
const el = div(
  { 
    id: 'foo',
    style: { 
      color: 'blue',
      paddingLeft: '1rem'
    }
  },
  'Hello'
)

```

If you can't find a tag there may be a namespace clash or the tagname matches
a reserved word:

* `$s` - clashes with the SVG factory function name
* `$var` - clashes with reserved word

There are helper functions for creating custom tags, text nodes and fragments:

```ts
import { h, text, fragment } from 'dom-app'

const contents = fragment(
  text( 'Hello' ), ' World'
)

const el = h( 'custom-tagname', { id: 'foo' }, contents )
```

### SVG Element factories

Exports all elements currently named in typescript's `SVGElementTagNameMap`

```ts
import { svg, rect, circle } from 'dom-app'

const el = svg(
  { 
    viewBox: [ 0, 0, 100, 100 ].join( ' ' ) 
  },
  
  rect({ x: 0, y: 0, width: 100, height: 100, fill: 'red' }),
  circle({ x: 50, y: 50, r: 50, fill: 'yellow' })
)
```

Renamed:

* `$a` - clashes with HTML `a` function
* `$script` - clashes with HTML `script` function
* `$style` - clashes with HTML `style` function
* `$switch` - clashes with reserved word
* `$text` - clashes with `text`, the `TextNode` factory function

Custom SVG element:

```ts
import { s } from 'dom-app'

const el = s( 'custom-tagname', { id: 'foo' } )
```

## license

MIT License

Copyright (c) 2021 Nik Coughlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
