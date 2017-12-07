$('.popper').popover({
        placement: 'bottom',
        container: 'body',
        html: true,
        content: function () {
            return "<div class='addthis_sharing_toolbox'></div>";
        }
});
