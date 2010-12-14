/*
 * jQuery hinttextbox (jQuery Plugin)
 *
 * Copyright (c) 2010 Tom Shimada
 *
 * Depends Script:
 *	jquery.js (1.3.2)
 */

(function($) {
  $.fn.hinttextbox = function(configs){
    var defaults = {
          text: null,
          color: null
        };
    if (!configs) return;
    configs = $.extend(defaults, configs);
    if (typeof(configs.text) !== 'string') return;
    var $textbox = this;
    if (typeof($textbox) !== 'object' || $textbox.length !== 1) return;

    set();

    $textbox.focus(function(){
      unset();
    }).blur(function(){
      set();
    });

    var $form = $textbox.parents('form:first');
    if (typeof($form) === 'object' || $form.length === 1) {
      $form.submit(function(){
        unset();
      });
    }

    function set() {
      var val = $textbox.val();
      if (val && val != configs.text) return;
      $textbox.val(configs.text)
      if (configs.color) $textbox.css('color', configs.color);
    }

    function unset() {
      var val = $textbox.val();
      if (val && val != configs.text) return;
      $textbox.val('').css('color', '');
    }

    return this;
  };
})(jQuery);
