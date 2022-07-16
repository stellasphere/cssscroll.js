
# cssscroll.js

An easy way to incorporate CSS scrolling effects.

## Installation

Install cssscroll.js via a CDN link or by downloading the script and including it.

```html
<script src="https://cdn.jsdelivr.net/gh/stellasphere/cssscroll.js@main/script.js"></script>
```
    
## Example
[View CodePen Example](https://codepen.io/stellasphere/pen/NWYdxjL)

If you would like to incorporate a scroll effect for a header, where the header shrinks when scrolled down.

**HTML:**  
You need to include a inline class in the HTML with `scroll-` and whatever scroll event you like.
In this case, the header is supposed to shrink when scrolled down, so the `notpagetop` event works best.
(It includes the `not` keyword since using just the `pagetop` event would result in the header shrinking while at the top of the page) 
```html
<header class="scroll-notpagetop">
  <h1>Header</h1>
</header>
```
**CSS:**  
To create scroll effects, you need two different CSS 'rules', one without the active scroll class and one with. 


> For the active scroll class, usually `.scrollactive` will do, but if you have multiple events, you might want to use the more specific class with `-*eventname*` at the end. Ex: `.scrollactive-notpagetop` Either one will work fine. 
```css
header.scrollactive {
  padding: 5px 20px;
  font-size: 15px;
}

header {
  padding: 40px 20px;
  font-size: 20px;
  transition: 1s;
  ...
}
```
**JS:**  
The `cssScroll()` function needs to be called post-on load. 
```js
window.onload = function() {
  cssScroll()
}
```
## Events

All the available scroll events.

| Name | Description                |
| :-------- | :------------------------- |
| `pagetop` | When the user is at the very top of the webpage. (hasn't scrolled down) |
| `intoview` | When the user's browser window scrolls into view of the element. |
| `pastview` | When the user's browser window scrolls past the view of the element. |
| `pagebottom` | When the user is at the very bottom of the webpage. (reached the end of the page) |

> All of the following events can be preceeded by a `not` keyword (ex: `notpagetop`) in order to have the opposite effect.

> For Example: If a element had a `scroll-notpagetop` effect class, it would only take place when the user scrolls the page. (past the very top)