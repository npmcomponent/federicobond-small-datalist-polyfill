*This repository is a mirror of the [component](http://component.io) module [federicobond/small-datalist-polyfill](http://github.com/federicobond/small-datalist-polyfill). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/federicobond-small-datalist-polyfill`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# small-datalist-polyfill

  Polyfill for implementing HTML5 datalist in unsupported browsers, using a select
  input as fallback. The polyfill is written in pure JavaScript (no Modernizr or
  jQuery needed).

  *Note*: it currently submits the associated form when the select changes.
  You can disable this behavior by setting `data-select-submit="true"` on
  the input.

  To configure an empty value for the select, set `data-select-placeholder` on
  the input.


## Installation

  Install with [component(1)](http://component.io):

    $ component install federicobond/small-datalist-polyfill

## API

### enable(force)

  Applies the polyfill. Set the `force` parameter to `true` to apply it even on
  supported browsers (useful for testing).

### setSelectorEngine(selectorEngine)

  Configure the selector engine that the polyfill should use.
  Defaults to `document.querySelectorAll`.

## Example

    var smallDatalistPolyfill = require("small-datalist-polyfill");
    smallDatalistPolyfill.setSelectorEngine(qwery);
    smallDatalistPolyfill.enable();

## License

  UNLICENSE
