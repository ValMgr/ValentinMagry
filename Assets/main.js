/* Valentin Magry - MMI Bordeaux Montaigne Student - 2019 */
/* Using Barba.js http://barbajs.org/ */

Barba.Pjax.start();

/* Transition From Index to Contacts */
var FromItoC = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    this.oldContainer.classList.add("slide-ToLeft");

    this.oldContainer.addEventListener('animationstart', function(){
      this.oldContainer.classList.remove("slide-ToLeft");
      this.done();
    });
  },

  fadeIn: function() {
    this.newContainer.classList.add("slide-FromRight");

    var that = this;

    this.newContainer.addEventListener('animationend', function(){
      that.newContainer.classList.remove("slide-FromRight");
      that.done();
    });
  },




});


/* Transition From Contacts to Index */
var FromCtoI = Barba.BaseTransition.extend({

  start: function() {
  Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    this.oldContainer.classList.add("slide-ToRight");

    this.oldContainer.addEventListener('animationstart', function(){
      this.oldContainer.classList.remove("slide-ToRight");
      this.done();
    });
  },

  fadeIn: function() {
    this.newContainer.classList.add("slide-FromLeft");

    var that = this;

    this.newContainer.addEventListener('animationend', function(){
      that.newContainer.classList.remove("slide-FromLeft");
      that.done();
    });
  },


  

});


 



/* Appel des transitions en fonctions des pages actuels et cibles */

Barba.Pjax.getTransition = function() {
   
return FromCtoI;
  
};
































// Loader
/*var Load;
    
    function myLoader() {
      Load = setTimeout(showPage, 6000);
    }
    
    function showPage() {
      document.getElementById("Loader").style.display = "none";
      document.getElementById("Content").style.display = "block";
    }
*/
