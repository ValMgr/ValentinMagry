var Load;
    
    function myLoader() {
      Load = setTimeout(showPage, 6000);
    }
    
    function showPage() {
      document.getElementById("Loader").style.display = "none";
      document.getElementById("Content").style.display = "block";
    }

