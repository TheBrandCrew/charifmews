var TweenMax = require('./gsap/TweenMax.js');
var ScrambleText = require('./gsap/ScrambleTextPlugin.js');
(function(){
    var tl = new TimelineLite();
    tl.to('#logo', 1,{boxShadow:'0 0 15px 0 white', backgroundColor:'rgba(255,0,0,1)'});
    tl.to('#ring3',1,{width:'100px',height:'100px'},'-=0.7');
    tl.to("#authorizer", 2, {scrambleText:{text:"Page not found"}});
    tl.to("#authorizer", 0.4, {color: 'red'});
})();



