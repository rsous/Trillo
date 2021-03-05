const hotels = [
  'Russel Erskine Hotel',
  'Victoryland',
  'The Battle House Hotel',
  'Renaissance Riverview Plaza Hotel',
  'Redmont Hotel',
  'Hotel Erskine Hotel',
  'Thomas Jefferson Hotel',
  'Alaskan Hotel and Bar',
  'Van Gilder Hotel',
  'Bergmann Hotel',
  'Millenium Alaskan Hotel',
  '6th Avenue Windsor Hotel',
  'Arizona Biltmore Hotel',
  'Bowman Hotel',
  'Buena Vista Hotel',
  'Camelback Inn',
  'CityNorth',
  'CityScape',
  'Cochise Hotel',
  'Copper Queen Hotel',
  'El Tovar Hotel',
  'Francisco Grande',
  'Grand Canyon Lodge',
  'Hyatt Regency',
  'La Posada Hotel',
  'Mondrian Hotel',
  'Pioneer Hotel',
  'Sheraton Phoenix Downtown',
  'Trump International Hotel & Residence',
  'Weatherford Hotel',
  'Westward Ho',
  'Aztec Hotel',
  'Balboa Inn',
  'Beverly Wilshire Hotel',
  'Carlton Hotel',
  'Carter House Inn',
  'Casa del Mar Hotel',
  'Claremont Resort',
  'Fairmont San Jose',
  'Hilton Anaheim',
  'Hilton San Diego Bayfront',
  'Hilton Waterfront Beach Resort',
  'Holbrooke Hotel',
  'Hollywood Melrose Hotel',
  'Hollywood Plaza Hotel',
  'Hoover Hotel',
  'Hotel Chancellor',
  'Hotel del Coronado',
  'Hotel Léger',
  'Hotel Montgomery',
  'Hotel Sainte Claire',
  'Hotel Woodland',
  'The Keating Hotel',
  'Key Route Inn',
  'La Costa Resort and Spa',
  'La Quinta Resort and Club',
  'Lafayette Hotel & Suites in San Diego',
  'The Langham Huntington, Pasadena',
  'Madonna Inn',
  'Manchester Grand Hyatt Hotel',
  'Park Hyatt Resort Aviara',
  'Pierpoint Inn',
  'San Diego Marriott Hotel and Marina',
  'Sovereign Hotel',
  'Alan Hotel',
  'Ambassador Hotel',
  'Beverly Hills Hotel',
  'Beverly Hilton Hotel',
  'Beverly Wilshire Hotel',
  'Boyle Hotel',
  'Century Plaza Hotel',
  'Chateau Marmont',
  'Culver Hotel',
  'Dunbar Hotel',
  'Hotel Bel-Air',
  'Kyoto Grand Hotel and Gardens',
  'Sheraton Town House',
  'Sheraton West',
  'Sunset Marquis Hotel',
  'Sunset Tower',
  'Westin Bonaventure Hotel',
  'Atlantis House',
  'Breidenbacher Hof, Düsseldorf',
  'Canis Resort, Freising',
  'Cecilienhof, Potsdam',
  'Dom-Hotel, Cologne',
  'Edelweiss Lodge and Resort, Garmisch-Partenkirchen',
  'Edelweiss Vacation Village and Campground',
  "Eh'häusl",
  'Excelsior Hotel Ernst, Cologne',
  'General Walker Hotel, Obersalzberg',
  'Grand Hotel Heiligendamm, Heiligendamm',
  'Gut Weißenhaus',
  'Hotel Atlantic Kempinsk, Hamburg',
  'Hotel Nassauer Hof',
  'Hotel Nikko Düsseldorf',
  'Hotel Petersberg',
  'Hotel Vier Jahreszeiten Kempinski',
  'Hotel Waldkater',
  'Meisdorf House',
  'Radisson Blue Hotel, Bremen',
  'Radisson Blu Hotel, Hamburg',
  'Ringberghaus, Suhl',
  'Schloss Elmau',
  'Schloss Wolfsbrunn',
  'Schlosshotel Kronberg',
  'St Petrus House',
  'Staffelter Hof',
  'Steigenberger Parkhotel Düsseldorf',
  'Taschenbergpalais, Dresden',
  'Zum Roten Bären, Freiburg',
  'Zum Schwan',
  'Meriton Grand Hotel Tallinn',
  'Radisson Blu Hotel Olümpia',
  'Schlössle Hotel',
  'Sokos Hotel Viru',
  'Swissôtel Tallinn',
  'Altus Skyscraper',
  'Monopol Hotel',
  'Sheraton Grand Kraków',
  'Grand Hotel Lublinianka',
  "Andel's Hotel Łódź",
  'Hotel Europejski',
  'Novotel Warszawa Centrum',
  'Hotel Polski',
  'Branicki Residential House',
  'Gola Dzierżoniowska Castle',
  'Książ',
  'Tuczno Castle',
  'Hotel Montesol',
  'Ibiza Gran Hotel',
  'Hotel La Perla',
  'Torre Sacyr Vallehermoso',
  'Çırağan Palace Kempinski Istanbul Hotel',
  'Four Seasons Hotel Istanbul Old City',
  'Four Seasons Hotel Bosphorus',
  'Hotel Pera Palace, Jumeirah',
  'Hotel Yeşil Ev',
  'Legacy Ottoman Hotel',
  'Park Hyatt Hotel Istanbul',
  'Raffles Istanbul',
  'Wyndham Istanbul Old City',
  'Edsa Shangri-La, Manila',
  'InterContinental Manila',
  'Beijing Hotel',
  'China World Hotel',
  'Diaoyutai State Guesthouse',
  'Fairmont Beijing',
  'Grand Hyatt Beijing',
  'Jingxi Hotel',
  'Lusongyuan Hotel',
  'Minzu Hotel',
  'Morgan Plaza',
  'Copacabana Palace',
  'Hotel Arpoador',
  'Hotel Fasano, Rio de Janeiro',
  'Hotel Emiliano, Rio de Janeiro',
  'Hotel Emiliano, São Paulo',
];

// AUTOCOMPLETE SCRIPT

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener('input', function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement('DIV');
    a.setAttribute('id', this.id + 'autocomplete-list');
    a.setAttribute('class', 'autocomplete-items');
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement('DIV');
        /*make the matching letters bold:*/
        b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>';
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener('click', function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName('input')[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener('keydown', function (e) {
    var x = document.getElementById(this.id + 'autocomplete-list');
    if (x) x = x.getElementsByTagName('div');
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add('autocomplete-active');
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('autocomplete-active');
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName('autocomplete-items');
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener('click', function (e) {
    closeAllLists(e.target);
  });
}

autocomplete(document.getElementById('myInput'), hotels);
