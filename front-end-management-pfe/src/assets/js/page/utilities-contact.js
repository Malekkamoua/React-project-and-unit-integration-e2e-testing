"use strict";

// initialize map
var map = new GMaps({
  div: "#map",
  lat: -6.5637928,
  lng: 106.7535061,
  zoomControl: false,
  fullscreenControl: false,
  mapTypeControl: true,
  mapTypeControlOptions: {
    mapTypeIds: [],
  },
});
// Added a overlay to the map
map.drawOverlay({
  lat: -6.5637928,
  lng: 106.7535061,
  content:
    '<div className="popover" style="width:250px;"><div className="manual-arrow"><i className="fas fa-caret-down"></i></div><div className="popover-body"><b>Multinity</b><p><small>Jl. HM. Syarifudin, Bubulak, Bogor Bar., <br>Kota Bogor, Jawa Barat 16115</p><p><a target="_blank" href="http://multinity.com">Website</a></small></p></div></div>',
});
