
    $(function() {
      $('.chosen-select').chosen();
      $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
    });

    $(function() {  
      if ($('.summernote').length !== 0){
        $('.summernote').summernote({
          height: 200,
          tabsize: 2,
          codemirror: {
            theme: 'monokai'
          }
        });
      };
    });  

    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
    
    $('ul.dropdown-menu [data-toggle=dropdown]').on('hover', function(event) {
    // Avoid following the href location when clicking
    event.preventDefault(); 
    // Avoid having the menu to close when clicking
    event.stopPropagation(); 
    // If a menu is already open we close it
    $('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
    // opening the one you clicked on
    $(this).parent().addClass('open');

    var menu = $(this).parent().find("ul");
    var menupos = menu.offset();
  
    if ((menupos.left + menu.width()) + 30 > $(window).width()) {
        var newpos = - menu.width();      
    } else {
        var newpos = $(this).parent().width();
    }
    menu.css({ left:newpos });

});
    
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
    // Code for docs demos
    function createColorpickers() {
        // Api demo
        var bodyStyle = $('body')[0].style;
        if ($('#demo_apidemo').length !== 0)
        $('#demo_apidemo').colorpicker({
            color: bodyStyle.backgroundColor
        }).on('changeColor', function(ev) {
            bodyStyle.backgroundColor = ev.color.toHex();
        });

        // Horizontal mode
        if ($('#demo_forceformat').length !== 0)
        $('#demo_forceformat').colorpicker({
            format: 'rgba', // force this format
            horizontal: true
        });
        if ($('.demo-auto').length !== 0)
        $('.demo-auto').colorpicker();

        // Disabled / enabled triggers
        $(".disable-button").click(function(e) {
            e.preventDefault();
            if ($('#demo_endis').length !== 0)
            $("#demo_endis").colorpicker('disable');
        });

        $(".enable-button").click(function(e) {
            e.preventDefault();
            $("#demo_endis").colorpicker('enable');
        });
    }

    createColorpickers();

    // Create / destroy instances
    $('.demo-destroy').click(function(e) {
        e.preventDefault();
        $('.demo').colorpicker('destroy');
        $(".disable-button, .enable-button").off('click');
    });

    $('.demo-create').click(function(e) {
        e.preventDefault();
        createColorpickers();
    });
});

(function ($) {
    if ($('#dl-menu').length !== 0)
	   $( '#dl-menu' ).dlmenu();
    if ($('ul.dl-menu li a').length !== 0)
	   $('ul.dl-menu li a').smoothScroll();
	//animation
	new WOW().init();

})(jQuery);
if ($('.parallax').length !== 0)
    $('.parallax').scrolly({bgParallax: true});