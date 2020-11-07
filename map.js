// Initialize and add the map
function initMap() {
    // The location of csc
    const csc = { lat: 38.107643, lng: -122.569841};
    // The map, centered at csc
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: csc,
    });
    // The marker, positioned at csc
    const marker = new google.maps.Marker({
      position: csc,
      map: map,
    });
  }