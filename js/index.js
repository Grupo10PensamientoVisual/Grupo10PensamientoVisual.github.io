$('#año').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  

  
  

});
$('#hombre').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=15'}); //'width': '+=20'}); 
      }
    },

    complete: function() {
      $this.text(this.countNum);
      //var h= $this.css('height');
      //var w= $this.css('width');
      //$this.css('height': h, 'width': w});
      //alert('finished');
    }

  });  
  
  

});
$('#mujer').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=5'}); //'width': '+=20'}); 
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#hora1').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=5'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#hora2').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=5'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#hora3').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=10'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#hora4').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=15'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#alcohol').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=10'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#deficiencias').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=5'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#desobediencia').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=10'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#drogas').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=5'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#fallas').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=5'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#imprudenciac').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=15'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#imprudenciap').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=15'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#perdida').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=10'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#velocidad').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=15'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
$('#total').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 10000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
      if(this.countNum & 1){
       $this.css({'font-size': '+=5'});
      }
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
