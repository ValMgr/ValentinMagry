/* Valentin Magry - MMI Bordeaux Montaigne Student - 2019 */
/* Using Barba.js http://barbajs.org/ */

Barba.Pjax.start();


/* Transition From Index to Contact
                                     ----------------------------------------------------------------------------------------------------------------------*/
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

  valid: function(){

    var prev = Barba.HistoryManager.prevStatus();
    var next = location.pathname.substr(1);
    
    console.log(prev.namespace + ' to ' + next);

    return prev.namespace === 'index' && next ===  'http://valentin-magry.fr/contact.html';

  }


});


/* Transition From Contact to Index
                                     ----------------------------------------------------------------------------------------------------------------------*/
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

  valid: function(){

    var prev = Barba.HistoryManager.prevStatus();
    var next = location.pathname.substr(1);
    
    console.log(prev.namespace + ' to ' + next);

    return prev.namespace === 'contact' && next === 'http://valentin-magry.fr/index.html';

  }


});



/* Transition From Index to About
                                     ----------------------------------------------------------------------------------------------------------------------*/
var FromItoA = Barba.BaseTransition.extend({

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

  valid: function(){

    var prev = Barba.HistoryManager.prevStatus();
    var next = location.pathname.substr(1);
    
    console.log(prev.namespace + ' to ' + next);

    return prev.namespace === 'index' && next === 'http://valentin-magry.fr/about.html';

  }


});

/* Transition From About to Index
                                     ----------------------------------------------------------------------------------------------------------------------*/
var FromAtoI = Barba.BaseTransition.extend({

start: function() {
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

valid: function(){

  var prev = Barba.HistoryManager.prevStatus();
  var next = location.pathname.substr(1);
  
  console.log(prev.namespace + ' to ' + next);

  return prev.namespace === 'about' && next === 'http://valentin-magry.fr/index.html';

}


});

/* Transition From Index to Works
                                     ----------------------------------------------------------------------------------------------------------------------*/
var FromItoW = Barba.BaseTransition.extend({

start: function() {
Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
},

fadeOut: function() {
  this.oldContainer.classList.add("slide-ToTop");

  this.oldContainer.addEventListener('animationstart', function(){
    this.oldContainer.classList.remove("slide-ToTop");
    this.done();
  });
},

fadeIn: function() {
  this.newContainer.classList.add("slide-FromBottom");

  var that = this;

  this.newContainer.addEventListener('animationend', function(){
    that.newContainer.classList.remove("slide-FromBottom");
    that.done();
  });
},

valid: function(){

  var prev = Barba.HistoryManager.prevStatus();
  var next = location.pathname.substr(1);
  
  console.log(prev.namespace + ' to ' + next);

  return prev.namespace === 'index' && next === 'http://valentin-magry.fr/works.html';

}


});

/* Transition From Works to Index
                                     ----------------------------------------------------------------------------------------------------------------------*/
var FromWtoI = Barba.BaseTransition.extend({

start: function() {
Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
},

fadeOut: function() {
  this.oldContainer.classList.add("slide-ToBottom");

  this.oldContainer.addEventListener('animationstart', function(){
    this.oldContainer.classList.remove("slide-ToBottom");
    this.done();
  });
},

fadeIn: function() {
  this.newContainer.classList.add("slide-FromTop");

  var that = this;

  this.newContainer.addEventListener('animationend', function(){
    that.newContainer.classList.remove("slide-FromTop");
    that.done();
  });
},

valid: function(){

  var prev = Barba.HistoryManager.prevStatus();
  var next = location.pathname.substr(1);
  
  console.log(prev.namespace + ' to ' + next);

  return prev.namespace === 'works' && next === 'http://valentin-magry.fr/index.html';

}


});





/* Appel des transitions en fonctions des pages actuels et cibles */

Barba.Pjax.getTransition = function() {
  

if(FromCtoI.valid()){
  return FromCtoI;
}

if(FromItoC.valid()){
  return FromItoC;
}

if(FromItoA.valid()){
  return FromItoA;
}

if(FromAtoI.valid()){
  return FromAtoI;
}

if(FromItoW.valid()){
  return FromItoW;
}

if(FromWtoI.valid()){
  return FromWtoI;
}
  
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
