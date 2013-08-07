

# small-datalist-polyfill

  Polyfill for implementing HTML5 datalist in unsupported browsers.
  Fallbacks to a select input.

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

## License

  UNLICENSE
