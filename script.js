
// map = new google.maps.Map (document.getElementById('map'), {
//    center: {lat:-43.8859427464520, lng:20.356899288107964},
//   zoom: 8,
//    mapId: '8373531fef93e428'
// });


// 43.88594274645201, 20.356899288107964

// function initMap() {
//     new google.maps.Map(document.getElementById("map"), {
//       mapId: "fe1884329fa294ee",
//       center: {lat: 40.20502830903152, lng: -80.55853842938608},
//       zoom: 16,
//     });
//   }
  
//   window.initMap = initMap;

//   // markers

//   let marker = new google.maps.Marker ({
//     position: {lat: 40.2048316174204, lng: -80.55808664082726},
//     map: map,
//     icon: "https://img.icons8.com/nolan/2x/marker.png"
//   });

function initMap() {
  const myLatLng = { lat: 40.20502830903152, lng: -80.55853842938608 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    mapId: "fe1884329fa294ee",
    center: myLatLng,
  });

  const markers = [
    [
      "Church",
      40.2048316174204,
      -80.55808664082726,
      "icons8-church-100.png",
      70,
      70,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    ],
    [
      "Science Hall",
      40.205638937901476,
      -80.56096129301824,
      "icons8-atom-100.png",
      70,
      70,
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus"
    ],
    [
      "Wellness Center",
      40.20541881270227,
      -80.56342335652832,
      "icons8-swimming-100.png",
      70,
      70,
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish."
    ],
    [
      "Post Office",
      40.2068678386469,
      -80.55663873814818,
      "icons8-letter-100.png",
      70,
      70,
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt."
    ],
    [
      "Arts Center",
      40.20658713970493,
      -80.55907245923623,
      "icons8-krita-100.png",
      70,
      70,
      "Jelena i Kostas se vrlo lepo zabavljaju dok rade ovaj projekat. Jelena vise neko Koki."
    ],
    [
      "Bethany College",
      40.20606367100533,
      -80.55985721011768,
      "icons8-museum-100.png",
      90,
      90,
      "Welcome to Bethany College!"
    ]
  ];

  for (let i=0; i<markers.length; i++){
    const currMarker = markers[i];
    const marker = new google.maps.Marker({
      position: {lat: currMarker[1], lng: currMarker[2]},
      map,
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
      },
      title: currMarker[0],
      animation: google.maps.Animation.DROP
    });
  
    const infowindow = new google.maps.InfoWindow ({
      content: currMarker[6],
    });
  
    marker.addListener("click", () => {
      infowindow.open(map,marker);
    });
  }


}

window.initMap = initMap;

  // Bethany College Cord - 40.20541587198075, -80.55798864037283
                            // 40.20502830903152, -80.55853842938608

// Test custom marker
// var customMarker = {
//   url: 'icons8-church-100.png',
//   size: new google.maps.Size(32, 32),
//   origin: new google.maps.Point (0, 0),
//   anchor: new google.maps.Point (16, 32),
// };

// var marker = new google.maps.Marker ({
//   position: new google.maps.LatLng(40.20502830903152, -80.55853842938608),
//   map,
//   icon: customMarker,
//   title: "Koki"
// });

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



