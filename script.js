

      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

      function imageModalHandler(url){
        document.getElementById("imageModal").style.display = "block";
        var image = document.getElementById("imageModalImage");
        image.src = url;
      }

      function exitImageModal(){
        document.getElementById("imageModal").style.display = "none";
      }
