(function ($) {
    'use strict';

    $.extend(true, $.trumbowyg, {
        langs: {
            // jshint camelcase:false
            en: {
                fontFamily: 'Font'
            },
            da: {
                fontFamily: 'Skrifttype'
            },
            fr: {
                fontFamily: 'Police'
            },
            de: {
                fontFamily: 'Schriftart'
            },
            nl: {
                fontFamily: 'Lettertype'
            },
            tr: {
                fontFamily: 'Yazı Tipi'
            },
            zh_tw: {
                fontFamily: '字體',
            },
            pt_br: {
                fontFamily: 'Fonte',
            }
        }
    });
    // jshint camelcase:true

    var defaultOptions = {
        fontList: [
            {name: 'NunitoSans', family: 'NunitoSans'},
            {name: 'Arial', family: 'Arial, Helvetica, sans-serif'},
            {name: 'Arial Black', family: '\'Arial Black\', Gadget, sans-serif'},
            {name: 'Comic Sans', family: '\'Comic Sans MS\', Textile, cursive, sans-serif'},
            {name: 'Courier New', family: '\'Courier New\', Courier, monospace'},
            {name: 'Impact', family: 'Impact, Charcoal, sans-serif'},
            {name: 'Lucida Sans', family: '\'Lucida Sans Uncide\', \'Lucida Grande\', sans-serif'},
            {name: 'Tahoma', family: 'Tahoma, Geneva, sans-serif'},
            {name: 'Times New Roman', family: '\'Times New Roman\', Times, serif'}
        ]
    };

    // Add dropdown with web safe fonts
    $.extend(true, $.trumbowyg, {
        plugins: {
            fontfamily: {
                init: function (trumbowyg) {
                    trumbowyg.o.plugins.fontfamily = trumbowyg.o.plugins.fontfamily || defaultOptions;
                    trumbowyg.addBtnDef('fontfamily', {
                        dropdown: buildDropdown(trumbowyg),
                        hasIcon: false,
                        text: trumbowyg.lang.fontFamily
                    });
                }
            }
        }
    });

    function buildDropdown(trumbowyg) {
        var dropdown = [];

        $.each(trumbowyg.o.plugins.fontfamily.fontList, function (index, font) {
            trumbowyg.addBtnDef('fontfamily_' + index, {
                title: '<span style="font-family: ' + font.family + ';">' + font.name + '</span>',
                hasIcon: false,
                fn: function () {
                    trumbowyg.execCmd('fontName', font.family, true);
                }
            });
            dropdown.push('fontfamily_' + index);
        });

        return dropdown;
    }
})(jQuery);
