/* Valentin Magry - MMI Bordeaux Montaigne Student - 2019 */
/* Using Barba.js v1 http://barbajs.org/ */

Barba.Pjax.start();



Barba.Pjax.getTransition = function () {
  var newPage = Barba.HistoryManager.currentStatus().url.split('/').pop()
  var prevPage = Barba.HistoryManager.prevStatus().url.split('/').pop()
  console.log("From " + prevPage + " to " + newPage)

  if ( (prevPage === 'home.html' || prevPage === '' ) && newPage === 'about.html') {
    return FromItoA;
  }

  if ( (prevPage === 'about.html' || prevPage === '' ) && newPage === 'home.html') {
    return FromAtoI
  }

  if ( (prevPage === 'index.html' || prevPage === '' ) && newPage === 'works.html') {
    return FromItoW
  }

  if ( (prevPage === 'works.html' || prevPage === '' ) && newPage === 'home.html') {
    return FromWtoI
  }

  if ( (prevPage === 'home.html' || prevPage === '' ) && newPage === 'contact.html') {
    return FromItoC
  }

  if ( (prevPage === 'contact.html' || prevPage === '' ) && newPage === 'home.html') {
    return FromCtoI
  }

  if ( (prevPage === 'home.html' || prevPage === '' ) && newPage === 'index.html') {
    return NONE
  }


  else {
    return fade;
  }
}



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
    startWordSwitch();
    var that = this;

    this.newContainer.addEventListener('animationend', function(){
      that.newContainer.classList.remove("slide-FromLeft");
      that.done();

    });
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
}


});

var NONE = Barba.BaseTransition.extend({

  start: function() {
    Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
  },
  
  fadeOut: function () {
    var oldWrap = this.oldContainer;
    oldWrap.classList.remove('fade-in');
    oldWrap.classList.add('fade-out');
    
    return new Promise(function (resolve, reject) {
      window.setTimeout(function () {
          resolve();
      }, 1500);
    });

  },
  fadeIn: function () {
    document.body.scrollTop = -2;//scroll to top
    document.documentElement.scrollTop = 0;
      
    var newWrap = this.newContainer;
    newWrap.classList.add('fade-in');
    this.done();
  }
  
  
  });


/* Transition Fade for everything else
                                     ----------------------------------------------------------------------------------------------------------------------*/
    var fade = Barba.BaseTransition.extend({
    start: function () {
      Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
    },
  
    fadeOut: function () {
      var oldWrap = this.oldContainer;
      oldWrap.classList.remove('fade-in');
      oldWrap.classList.add('fade-out');
      
      return new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            resolve();
        }, 1500);
      });
  
    },
    fadeIn: function () {
      document.body.scrollTop = -2;//scroll to top
      document.documentElement.scrollTop = 0;
        
      var newWrap = this.newContainer;
      newWrap.classList.add('fade-in');
      this.done();
    }
  });





  var startText = [];
  var el;

  function startWordSwitch(i, delay){

    el = document.getElementsByClassName('word-switch');
  
    for (let i = 0; i < el.length; i++) {
      var delay = i * 2000 + (Math.random() * 1000);
  
      startText[i] = el[i].innerHTML;
      text = startText[i];
      var newtext = text.split(",");
      el[i].innerHTML = newtext[0];

      setTimeout(function(){
        WordSwitch(el[i], i);
      }, delay);
    }
  
  }


 function WordSwitch(el, index){

    

    var text = startText[index];
    var Newtext = text.split(",");
    el.innerHTML = Newtext[0];

    Switch(el, Newtext);

    setInterval(function(){
      Switch(el, Newtext);
    }, 6000);
      
 }

 function Switch(el, text){

  el.classList.remove("word-fadeIn");
  el.classList.remove("word-fadeOut");

    el.classList.add("word-fadeOut");
      setTimeout(function(){
     
        if(el.innerHTML == text[0]){
          el.innerHTML = text[1];
        }
        else {
          el.innerHTML = text[0];
        }

          
          el.classList.add("word-fadeIn");
      }, 2000);

 }
