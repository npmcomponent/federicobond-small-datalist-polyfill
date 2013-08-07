'use strict';

var SmallDatalistPolyfill = {

    enable: function(force) {
        var supported = !!(document.createElement('datalist') && window.HTMLDataListElement);
        if (supported && !force) { return; }

        var inputs = this.selectorEngine('input[list]');

        for (var i = 0; i < inputs.length; i++) {

            var input = inputs[0],
                listId = input.getAttribute('list'),
                placeholder = input.getAttribute("data-select-placeholder"),
                submitOnChange = input.getAttribute("data-select-submit") || "true",
                options = document.getElementById(listId).children,
                select = document.createElement('select'),
                defaultOpt;

            // Handle placeholder value for select
            if (placeholder !== null) {
                defaultOpt = document.createElement('option');
                defaultOpt.value = "";
                defaultOpt.innerHTML = placeholder;
                select.appendChild(defaultOpt);
            }

            // Generate a select element to use instead of the input
            for (var j = 0; j < options.length; j++) {

                var elem = options[j],
                    opt = document.createElement('option');

                opt.value = opt.innerHTML = elem.value;

                if (opt.value == input.value) {
                    opt.selected = true;
                }

                select.appendChild(opt);
            }

            // Forward select value to the input and submit the associated form
            var handler = function(e) {
                input.value = select.value;
                if (submitOnChange) {
                    input.form.submit();
                }
            };

            if (select.addEventListener) {
                select.addEventListener('change', handler, false);
            } else if (select.attachEvent)  {
                select.attachEvent('onchange', handler);
            }

            // Hide the input and insert the newly created select
            input.style.display = 'none';
            input.parentNode.insertBefore(select, input);
        }
    },

    selectorEngine: document.querySelectorAll ?
                    function(sel) { return document.querySelectorAll(sel); } :
                    function() { throw new Error("No selector engine installed"); },

    setSelectorEngine: function(s) {
        this.selectorEngine = s;
    }
};

module.exports = SmallDatalistPolyfill;
