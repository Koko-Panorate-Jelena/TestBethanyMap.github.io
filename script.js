
function initMap() {

  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  let sourceAutocomplete, desAutocomplete;

  const myLatLng = { lat: 40.20502830903152, lng: -80.55853842938608 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    mapId: "fe1884329fa294ee",
    center: myLatLng,
    // disableDefaultUI: true
    // mapTypeId: google.maps.MapTypeId.HYBRID
  });

  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer);
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });



  sourceAutocomplete = new google.maps.places.Autocomplete (document.getElementById('from'));
  desAutocomplete = new google.maps.places.Autocomplete (document.getElementById('to'));

  function calcRoute() {
    var source = document.getElementById('from').value;
    var dest = document.getElementById('to').value;
    var request = {
      origin: source,
      destination: dest,
      travelMode: "DRIVING"
    };
  
    directionsService.route(request, function (result, status) {
      if (status == "OK") {
        directionsRenderer.setDirections(result);
      }
    });
  }
  document.getElementById("calculateRouteBtn").addEventListener("click", function () {
    calcRoute();
  });




  const markers = [
    [
      "Grace Phillips Johnson Visual Arts Center",
      40.20622905066137,
      -80.56075030444904,
      "images/FINE-ARTS.png",
      60,
      60,
      "Grace Phillips Johnson Visual Arts Center (1984) offers facilities for television, painting, sculpture, and design. The Sandra Weiss Berkman Studio for Ceramic Arts is attached to the Center and Bethany's on - campus television studio, located on the ground floor."
    ],
    [
      "Richardson Hall of Science",
      40.205654215090995,
      -80.5609670732336,
      "images/Hall-Of-Science.png",
      60,
      60,
      "Richardson Hall of Science provides facilities for the Chemistry, Physics, and Mathematics departments and houses the Math Learning Center and Academic Computing Center. It is named for Robert Richardson, Bethany’s first science professor."
    ],
    [
      "T.W. Phillips Memorial Library",
      40.20533230504398,
      -80.56187027658983,
      "images/LIBRARY.png",
      60,
      60,
      "T. W. Phillips Memorial Library serves as the hub of an academic information network that provides the campus with over 250 000 itemslocally (books, periodicals, newspapers, audiovisuals, archival materials) and access to information through online subscriptions to ProQuest Direct, Lexis-Nexis Universe, JSTOR, Britannica Online, and many other sources. The library is home to the Mary Cutlip Center for Library and Information Technology Services, which provides technical and information services in both traditional library and digital forms."
    ],
    [
      "Goodnight House",
      40.20621065600143,
      -80.56380915317803,
      "images/DORM-1.png",
      60,
      60,
      "Goodnight House is a two-story co-ed residence hall designed to promote community living. Residents live in cubes consisting of four bedrooms and a common bathroom. Each bedroom contains two single beds, dressers, closet space and a desk with chair. Goodnight features two large lounge spaces with a television located on the upper level. The residence is also equipped with a common kitchen and laundry facility."
    ],
    [
      "Steinman Fine Arts Center",
      40.20660614014581,
      -80.55952194788456,
      "images/FINE-ARTS.png",
      60,
      60,
      "David and Irene Steinman Fine Arts Center provides excellent facilities for music and theatre. A fully equipped theatre occupies the central portion of the building. Teaching studios, studio-classrooms, general rehearsal room for the larger vocal and instrumental groups, and individual practice rooms support instruction in music."
    ],
    [
      "Bethany College - Old Main",
      40.20606367100533,
      -80.55985721011768,
      "images/OLD-MAIN.png",
      60,
      60,
      "Built in 1858, Old Main is the centerpiece of Bethany's campus and academic buildings. The building is one of the earliest examples of collegiate Gothic architecture in the United States and, as such, is listed in the National Register of Historic Places."
    ],
    [
      "Hoag Soccer Field",
      40.20226299388096,
      -80.56546549660865,
      "images/SOCCER.png",
      60,
      60,
      "Hoag Field was originally built in 1982 and is one of the most aesthetic soccer complexes in the Eastern United States. The home of the 1994 men's national championship team, as well as the five-time PAC champion women's soccer program, Hoag Field has hosted numerous NCAA Tournament men's soccer matches, including the epic 1994 NCAA Quarterfinal match against UC-San Diego and all three of Bethany's first round matchups in their recent trips to the playoffs."
    ],
    [
      "Bison Stadium - Coach Don Ault Athletic Field",
      40.2038374090133,
      -80.56609951812203,
      "images/AMERICAN-FOOTBALL.png",
      60,
      60,
      "Bison Stadium underwent significant renovations in the summer of 2021. Changes included the installation of new Field Turf, lighting, a rubberized track, steeplechase pit, and facilities for various track and field events. These upgrades have opened the facility for use by the entire Bethany community, including varsity soccer and lacrosse teams, intramural programs, and local walkers."
    ],
    [
      "Softball Field",
      40.2037311939913,
      -80.56432141169445,
      "images/BASEBALL.png",
      60,
      60,
      "The softball field is home Bethany’s softball team, who boasts an impressive 13 PAC championships and six appearances in the NCAA Tournament."
    ],
    [
      "Campbell Village",
      40.20612328128562,
      -80.56573598700466,
      "images/DORM-1.png",
      60,
      60,
      "Campbell Village is a four-building complex, housing 380 students in suite style living. These apartment - style suites provide the most modern and comfortable accommodations on-campus. The suites are designed for four visitors, each with his or her own bedroom. All bedrooms are furnished with a double bed, dresser, nightstand, mirror/closet, desk, and chair. In each suite visitors share a living area, two bathrooms (one for every two visitors), and a kitchenette (full-sized refrigerator, microwave, sink, and a table and chairs)."
    ],
    [
      "Parking Coal Bowl",
      40.206115799497255,
      -80.5623772158248,
      "images/PARKING.png",
      60,
      60,
      "Parking Lot"
    ],
    [
      "Harlan Hall",
      40.20465543868551,
      -80.56157684144388,
      "images/DORM-1.png",
      60,
      60,
      "The recently renovated Harlan Hall, located in the center section of campus, serves as a freshman residence hall with communal style living for 58 students. Harlan Hall features large double bedrooms equipped with two single beds, dressers, closet space, and desks with chairs. Shared bathroom facilities are located on each floor."
    ],
    [
      "Phillips Hall",
      40.20485778434248,
      -80.56063750995341,
      "images/Hall-2.png",
      60,
      60,
      "Phillips Hall is the all-in-one campus hub with a welcome center for visitors to campus and a student - centric lounge."
    ],
    [
      "Cramblet Hall",
      40.20487617937225,
      -80.55980656286567,
      "images/Hall-2.png",
      60,
      60,
      "Cramblet Hall was constructed in 1909 through a gift from Andrew Carnegie. Originally the library, it was remodeled in 1961 to house administrative offices. It is named in honor of two Presidents of the College, Thomas E. Cramblet and his son, Wilbur Haverfield Cramblet."
    ],
    [
      "Ogden Dining Hall",
      40.205883770657785,
      -80.55806578439638,
      "images/DINING.png",
      60,
      60,
      "Ogden Dining Hall offers a variety of culinary delights. It features a pizza oven, a sandwich station, and a soft-serve ice-cream machine for sweet treats. Additionally, you can enjoy a daily hot-food menu with diverse options, making it a satisfying dining destination for all."
    ],
    [
      "Bethany House",
      40.20545562025743,
      -80.55772919510153,
      "images/ADMIN-HOUSE.png",
      60,
      60,
      "Bethany House features a variety of essential offices and spaces. The Center for Enrollment assists prospective students on their educational journeys. The Office of Student Life fosters a vibrant campus community, connecting students and enabling extracurricular pursuits. The Department of Communications and Media Arts offers educational opportunities for those passionate about media and communication. The Renner Art Gallery serves as a creative hub, showcasing the talent and imagination of artists, both students and professionals alike."
    ]

  ];


  var currentInfoWindow = null;
  const markerObjects = [];


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
      animation: google.maps.Animation.BOUNCE
      // optimized: true
      // label: "Name of the building"
    });
  
    const infowindow = new google.maps.InfoWindow ({
      content: currMarker[6],
    });




    marker.addListener("click", () => {
      if (currentInfoWindow) {
        currentInfoWindow.close();
      }
      infowindow.open (map, marker);
      currentInfoWindow = infowindow;
    });

    setTimeout (() => {
      marker.setAnimation (null);
    }, 3000);

    markerObjects.push(marker);
  }

  function showMarkers(group) {
    hideMarkers();
    for (let i = 0; i < markerObjects.length; i++) {
      const marker = markerObjects[i];
      const isVisible = group.includes(marker.getIcon().url);
      marker.setVisible(isVisible);
    }
  }

  function hideMarkers() {
    for (let i = 0; i < markerObjects.length; i++) {
      const marker = markerObjects[i];
      marker.setVisible(false);
    }

  }

  function showAllMarkers() {
    for (let i = 0; i < markerObjects.length; i++) {
      const marker = markerObjects[i];
      marker.setVisible(true);
    }
  }

  const academicBtns = document.getElementById("academic");
  academicBtns.addEventListener("click", function () {
    showMarkers(["images/FINE-ARTS.png", "images/LIBRARY.png", "images/Hall-Of-Science.png", "images/OLD-MAIN.png"]);
  });

  const administrativeBtns = document.getElementById("administrative");
  administrativeBtns.addEventListener("click", function () {
    showMarkers(["images/Hall-2.png", "images/ADMIN-HOUSE.png"]);
  });

  const studentSpacesBtns = document.getElementById("student-spaces");
  studentSpacesBtns.addEventListener("click", function () {
    showMarkers(["images/DORM-1.png", "images/DINING.png"]);
  });

  const athleticsBtns = document.getElementById("athletics");
  athleticsBtns.addEventListener("click", function () {
    showMarkers(["images/SOCCER.png", "images/BASEBALL.png", "images/SOCCER.png"]);
  });

  const parkingLotBtns = document.getElementById("parking-lot");
  parkingLotBtns.addEventListener("click", function () {
    showMarkers("images/PARKING.png");
  });

  const resetBtn = document.getElementById("reset");
  resetBtn.addEventListener("click", function () {
    showAllMarkers();
  });




  google.maps.event.addListener(map, 'click', function () {
    if (currentInfoWindow) {
      currentInfoWindow.close();
      currentInfoWindow = null;
    }
  });





function calculateAndDisplayRoute(directionsService, directionsRenderer){
  const selectedMode = document.getElementById("mode").value;

  directionsService
  .route({
    origin: document.getElementById("from").value,
    destination: document.getElementById("to").value,

    travelMode: google.maps.TravelMode[selectedMode],

  })
  .then((response) => {
    directionsRenderer.setDirections(response);
  })
  // .catch((e) => window.alert("Direction request failed due to" + status));




  var input1 = document.getElementById("from");
  var input2 = document.getElementById("to");

  document.addEventListener("DOMContentLoaded", function (){
    var autocomplete = new google.maps.places.Autocomplete(input1, input2, {
      types: ['geocode']
    });
    autocomplete.addListener("place_changed", function() {
      var near_place = autocomplete.getPlace(); 
    });
  });

  
  


}


window.initMap = initMap;


}

