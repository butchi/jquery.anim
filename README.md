jquery.anim
=================

jQuery animation plug-in.

## Sample
demo is [here](http://butchi.github.io/jquery.anim/) http://butchi.github.io/jquery.anim/

```html
<p class="elm-1">This is an example of jQuery.anim plug-in.</p>
<p class="elm-2">This is an example of jQuery.anim plug-in.</p>
<p class="elm-3">This is an example of jQuery.anim plug-in.</p>
<p class="elm-4">This is an example of jQuery.anim plug-in.</p>
```

```js
var $elm1 = $('.elm-1');
var width1 = $elm1.width();
$elm1.anim({
duration: 5000,
step: function(t) {
  $(this).css({
    'clip': 'rect(0 ' + (t * width1) + 'px 100px 0)'
  });
},
complete: function() {
  console.log('Thanks, world! 1');
}
});

var $elm2 = $('.elm-2');
var width2 = $elm2.width();
$elm2.anim({
duration: 5000,
easing: 'easeInExpo',
step: function(t) {
  $(this).css({
    'clip': 'rect(0 ' + (t * width2) + 'px 100px 0)'
  });
},
complete: function() {
  console.log('Thanks, world! 2');
}
});

var $elm3 = $('.elm-3');
var txtElm3 = $elm3.text();
var txtElm3Len = txtElm3.length;
$elm3.anim({
duration: 5000,
step: function(t) {
    $(this).text(txtElm3.slice(0, Math.floor(txtElm3Len * t) + 1));
}
});

var $elm4 = $('.elm-4');
$elm4.anim({
easing: 'easeOutBounce',
step: function(t) {
  $(this).css({
    'transform' : 'scale(' + t + ')',
    '-o-transform' : 'scale(' + t + ')',
    'msTransform' : 'scale(' + t + ')',
    '-moz-transform' : 'scale(' + t + ')',
    '-webkit-transform' : 'scale(' + t + ')',
  });
}
});
```
