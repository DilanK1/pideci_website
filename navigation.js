document.addEventListener("DOMContentLoaded", function() {
    // Sayfa tamamen yüklendiğinde bu kod çalışır.
  
    // Düğme ve bağlantıyı alın
    var konum_button = document.getElementById("konum_button");
    var konum_link = document.getElementById("konum_link");
  
    // Düğmeye tıklandığında bir olay dinleyici ekleyin
    konum_button.addEventListener("click", function() {
      // Bağlantıyı açmak için window.location.href kullanılır.
      window.location.href = konum_link.getAttribute("href");
    });
// *************************************
     var menu_button = document.getElementById("menu_button");
   
     menu_button.addEventListener("click", function() {
       window.location.href = "menu.html"; // Yeni sayfanın URL'sini buraya ekleyin
     });
// **************************************
    var instagram_button = document.getElementById("instagram_button");
    var instagram_link = document.getElementById("instagram_link");
  
    instagram_button.addEventListener("click", function() {
      window.location.href = instagram_link.getAttribute("href");
    });

    var acilirButton = document.getElementById("acilirButton");
        var acilirIcerik = document.getElementById("acilirIcerik");

        acilirButton.addEventListener("click", function () {
            if (acilirIcerik.style.display === "block") {
                acilirIcerik.style.display = "none";
            } else {
                acilirIcerik.style.display = "block";
            }
        });
        
        // Dışa tıklamayı dinle
        document.addEventListener('click', function (event) {
          if (!acilirButton.contains(event.target)) {
              // Açılır menüyü gizle
              acilirIcerik.style.display = 'none';
          }
      });
       // Düğmeye tıklandığında açılır menüyü göster
       acilirButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Dışa tıklamayı engelle
        dropdownContent.style.display = 'block';
    });

    var dropdown = document.querySelector('.acilir-menu');
    var dropdownContent = document.querySelector('.acilir-icerik');

    // Açılır menüyü yukarı doğru açma işlemi
    function openDropdownUpward() {
      var windowHeight = window.innerHeight;
      var dropdownPosition = dropdown.getBoundingClientRect().top;

      if (dropdownPosition + dropdownContent.offsetHeight > windowHeight) {
          dropdownContent.style.top = 'auto';
          dropdownContent.style.bottom = '100%';
      }
  }

  // Düğmeye tıklandığında açılır menüyü yukarı doğru aç
  dropdown.addEventListener('click', function() {
      dropdownContent.style.opacity = '1';
      dropdownContent.style.visibility = 'visible';
      dropdownContent.style.transform = 'translateY(0)';
      
      // Açılır menüyü yukarı doğru açma işlemi
      openDropdownUpward();
  });
      
  });
  