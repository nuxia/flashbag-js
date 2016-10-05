(function($) {

    var FlashBag = function() {
        var _this = this;

        var enabled = false;
        var autoCloseDelay = 4000;
        var $flashBagSkeleton;
        var html;

        _this.init = function() {
            $flashBagSkeleton = $('#flashbag-skeleton');
            if ($flashBagSkeleton.length) {
                $flashBagSkeleton.hide();
                enabled = true;
                html = $flashBagSkeleton.html();
            }
        };

        _this.add = function(type, message, options) {
            if (!enabled) {
                console.warn('flashbag.js : You must define a #flashbag-skeleton element in your template');
                return false;
            }

            options = $.extend({
                autoclose: false
            }, options);

            var $flashBag = $flashBagSkeleton
                .clone()
                .removeAttr('id')
                .addClass('flashbag')
                .html(html.replace('%message%', message));

            var classAttr = $flashBag.attr('class');
            $flashBag.attr('class', classAttr.replace('%type%', type));

            $flashBagSkeleton.after($flashBag);
            $flashBag.show();

            if (options.autoclose) {
                closeFlashBag($flashBag, autoCloseDelay);
            }

            return $flashBag;
        };

        _this.close = function(selector) {
            closeFlashBag($(selector), autoCloseDelay);
        }
    };

    $(document).ready(function() {
        $.FlashBag = new FlashBag();
        $.FlashBag.init();
    });
}(jQuery));

function closeFlashBag($element, delay, fadeOut) {
    $element.delay(delay || 0).fadeOut(fadeOut || 2000, function() {
        $element.remove();
    });
}
