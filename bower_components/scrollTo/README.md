## scrollTo
Scrolls to a particular vertical coordinates in the document.   

## Install
```
bower install scrollTo --save
```

## Usage
Include scrollTo.js in your markup. Call `scrollTo` at anytime.
```html
<script type="text/javascript" src="path/to/scrollTo.js"></script>

<script>
  var btn = document.querySelector('button');
  btn.onclick = function (){
    scrollTo(0, 300); // scroll to 0, duration 300 ms
  };
</script>
```

## License
This project is available under the [MIT](https://opensource.org/licenses/mit-license.php) license.
