//= require_tree ./app

var scriptLoad = document.createEvent('Events');
scriptLoad.initEvent('script:load', true, true);

var customEvents = {
  scriptLoad: scriptLoad
}

$(document).on('ready page:load', function () {
  var script = window[$('body').data('route')];

  if (script !== undefined && script.init !== undefined) {
    script.init();
  }
});

function dispatchBodyEvents() {
  document.querySelector('body').dispatchEvent(customEvents.scriptLoad);
}