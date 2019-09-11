
(function ( $ ) {
 
    var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
    radius = '12em', //distance from center
    start = -90; //shift start from 0
    //$elements = $('li:not(:first-child)'),
    //numberOfElements = (type === 1) ?  $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
    //slice = 360 * type / numberOfElements;
 
    $.fn.incircle = function(options) {
        
        // Default options.
        var settings = $.extend({
            color: "#556b2f",
            backgroundColor: "white",
            top: '200px',
            left: '200px'
        }, options );
        
        this.css({
            'position': 'relative', 
            'top': settings.top,
            'left': settings.left,
            'list-style-type': 'none',
            'margin': 0,
            'padding': 0
            });
        
        $elements = this.children(':not(:first-child)');
        numberOfElements = (type === 1) ?  $elements.length : $elements.length - 1; //adj for even distro of elements when not full circle
        slice = 360 * type / numberOfElements;
        
        $elements.each(function(i) {
            var $self = $(this),
            rotate = slice * i + start,
            rotateReverse = rotate * -1;
    
            $self.css({
                    'position': 'absolute',
                    '-webkit-transition': 'all 2s linear',
                    '-moz-transition': 'all 2s linear',
                    'transition': 'all 2s linear'
            });
    
            $self.css({
                'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
            });
        });
        
        return this;
    };
 
}( jQuery ));
