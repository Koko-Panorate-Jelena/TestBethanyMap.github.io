
// map = new google.maps.Map (document.getElementById('map'), {
//    center: {lat:-43.8859427464520, lng:20.356899288107964},
//   zoom: 8,
//    mapId: '8373531fef93e428'
// });


// 43.88594274645201, 20.356899288107964

function initMap() {
    new google.maps.Map(document.getElementById("map"), {
      mapId: "fe1884329fa294ee",
      center: { lat: 40.20502830903152, lng: -80.55853842938608},
      zoom: 16,
    });
  }
  
  window.initMap = initMap;

  // Bethany College Cord - 40.20541587198075, -80.55798864037283
                            // 40.20502830903152, -80.55853842938608

// let map;

// async function initMap() {
//   const { Map } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// initMap();

// function  initialize () {
//   let mapOptions = {
//     center: new google.maps.LatLng (43.8859427464520, 20.356899288107964),
//     zoom: 8,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   let map = new google.maps.Map(document.getElementById('map'),
//   mapOptions);
// }

// onload = 'initialize()'

// Initialize and add the map
// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

// initMap();

