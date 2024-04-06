
    var popUp = document.getElementById("pop-up");
    var clickElements = document.getElementsByClassName("click");
    var clos = document.getElementById("close");
  

    Array.from(clickElements).forEach(function (clickElement) {
        clickElement.addEventListener("click", function (event) {
            popUp.style.marginLeft = "-1%";
            popUp.style.transform = "scale(1)";
            popUp.style.display = "block";
            popUp.style.transition = "ease-in-out";
            
        });
    });
  
    clos.addEventListener("click", function (event) {

        popUp.style.marginLeft = "100%";
        popUp.style.display = "none";
        
        
        // popUp.style.display = "none"
        // popUp.style.transform = "scale(0.5)";
        // popUp.style.position = "relative%";
        // popUp.style.marginleft = "100%";
        // console.clear();
        // console.log("Close event triggered");
      
    });

    document.addEventListener("DOMContentLoaded", function() {
        const menuToggle = document.getElementById("menu-toggle");
        const dropdownMenu = document.getElementById("dropdown-menu");
    
    
        const initialDisplay = window.getComputedStyle(dropdownMenu).display;
    
        menuToggle.addEventListener("click", function() {
            const currentDisplay = window.getComputedStyle(dropdownMenu).display;
            dropdownMenu.style.display = (currentDisplay === "none") ? "block" : "none";
        });
    });


  

  
  