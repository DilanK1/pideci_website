document.addEventListener("DOMContentLoaded", function () {
  // Sayfa tamamen yüklendiğinde bu kod çalışır.

  // Düğme ve bağlantıyı alın
  var konum_button = document.getElementById("konum_button");
  var konum_link = document.getElementById("konum_link");

  // Düğmeye tıklandığında bir olay dinleyici ekleyin
  konum_button.addEventListener("click", function () {
    // Bağlantıyı açmak için window.location.href kullanılır.
    window.location.href = konum_link.getAttribute("href");
  });
  // *************************************
  var menu_button = document.getElementById("menu_button");

  menu_button.addEventListener("click", function () {
    window.location.href = "menu.html"; // Yeni sayfanın URL'sini buraya ekleyin
  });
  // **************************************
  var instagram_button = document.getElementById("instagram_button");
  var instagram_link = document.getElementById("instagram_link");

  instagram_button.addEventListener("click", function () {
    window.location.href = instagram_link.getAttribute("href");
  });

// MENÜ******************

// Düğmeleri ve içerikleri alın
const openCloseButtons = document.querySelectorAll("[id^='acilirButton']");
const openCloseContents = document.querySelectorAll("[id^='acilirIcerik']");
let currentlyOpenMenu = null;

// Her düğme için olay dinleyicisi ekleyin
openCloseButtons.forEach((button, index) => {
    button.addEventListener("click", (event) => {
        event.stopPropagation(); // Düğme tıklaması menü dışındaki tıklamalara etki etmesin
        const openCloseMenu = openCloseContents[index];
        // Eğer zaten başka bir menü açıksa, onu kapat  
        if (currentlyOpenMenu && currentlyOpenMenu !== openCloseMenu) {
            currentlyOpenMenu.style.opacity = "0";
            currentlyOpenMenu.style.visibility = "hidden";
            currentlyOpenMenu.style.marginTop ="-50px"
        }

        if (openCloseMenu.style.visibility === "hidden" || openCloseMenu.style.visibility === "") {
            openCloseMenu.style.opacity = "1";
            openCloseMenu.style.visibility = "visible";
            currentlyOpenMenu = openCloseMenu; // Şu anki menüyü güncelle
            // Menüyü açtığınızda, dışarıya tıklamalarda menünün kapanmasını dinleyin
            document.addEventListener("click", closeMenuOnClickOutside);
        } else {
            openCloseMenu.style.opacity = "0";
            openCloseMenu.style.visibility = "hidden";
        }
    });
});

// Menünün dışına tıklandığında çalışacak fonksiyon
function closeMenuOnClickOutside(event) {
    openCloseContents.forEach((menu) => {
        if (!menu.contains(event.target)) {
            menu.style.opacity = "0";
            menu.style.visibility = "hidden";
            currentlyOpenMenu = null; // Şu anki menüyü sıfırla
            // Menüyü kapatın ve dışarıya tıklamalarda dinlemeyi kaldırın
            document.removeEventListener("click", closeMenuOnClickOutside);
        }
    });
}
 
});
