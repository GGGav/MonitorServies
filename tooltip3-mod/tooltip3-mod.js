/* ================================================
 * bootstrap4-tooltip-custom-class.js v0.0.1
 *
 * Extend Bootstrap 4 Tooltip plugin by adding custom classes.
 * Custom classes can be added by using `customClass` paramater or via `data-custom-class` attribute.
 * There are 5 predefined custom classes in CSS: .tooltip-primary, .tooltip-success, .tooltip-info, .tooltip-warning, .tooltip-danger.
 * ============================================= */

;(function($) {

  if (typeof $.fn.tooltip.Constructor === 'undefined') {
    throw new Error('Bootstrap Tooltip must be included first!');
  }

  var Tooltip = $.fn.tooltip.Constructor;

  // add customClass option to Bootstrap Tooltip
  $.extend( Tooltip.Default, {
      customClass: ''
  });

  var _show = Tooltip.prototype.show;

  Tooltip.prototype.show = function () {

    // invoke parent method
    _show.apply(this,Array.prototype.slice.apply(arguments));

    if ( this.config.customClass ) {
      var tip = this.getTipElement();
      $(tip).addClass(this.config.customClass);
    }

  };

})(window.jQuery);


/** **/
$(document).ready(function(){
  $('.tt-nic-up').tooltip({
    customClass: 'tooltip-nic-up'
  });
  $('.tt-nic-down').tooltip({
    customClass: 'tooltip-nic-down'
  });
  $('.tt-nic-missing').tooltip({
    customClass: 'tooltip-nic-missing'
  });
  $('.tt-disk-good').tooltip({
    customClass: 'tooltip-disk-good'
  });
  $('.tt-disk-full').tooltip({
    customClass: 'tooltip-disk-full'
  });
  $('.tt-disk-warning').tooltip({
    customClass: 'tooltip-disk-warning'
  });
  $('.tt-service-up').tooltip({
    customClass: 'tooltip-service-up'
  });
  $('.tt-service-down').tooltip({
    customClass: 'tooltip-service-down'
  });
  $('.tt-service-watcher-failed').tooltip({
    customClass: 'tooltip-service-watcher-failed'
  });
  $('.tt-service-unknown').tooltip({
    customClass: 'tooltip-service-unknown'
  });
});
