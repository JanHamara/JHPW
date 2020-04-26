// Webpack

// Console Output for Dependencies Tests
if (window.jQuery) { console.log('Load jQuery: SUCCESS'); } else { console.log('Load jQuery: FAILED'); }
if (typeof($.fn.modal) === 'undefined') { console.log('Load Bootstrap JS: FAILED'); } else { console.log('Load Bootstrap JS: SUCCESS'); }
if (jQuery('#bootstrapCssTest').is(':visible') === true)  { console.log('Load Bootstrap CSS: FAILED'); } else { console.log('Load Bootstrap CSS: SUCCESS'); }

