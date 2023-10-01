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
     var menu_link = document.getElementById("menu_link");
   
     menu_button.addEventListener("click", function() {
       window.location.href = menu_link.getAttribute("href");
     });
// **************************************
    var instagram_button = document.getElementById("instagram_button");
    var instagram_link = document.getElementById("instagram_link");
  
    instagram_button.addEventListener("click", function() {
      window.location.href = instagram_link.getAttribute("href");
    });
  });
  