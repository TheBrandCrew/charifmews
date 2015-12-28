var TweenLite = require('./gsap/TweenLite.js');
var TimelineMax = require('./gsap/TimelineMax.js');
var css = require('./gsap/uncompressed/plugins/CSSPlugin.js');
var attr = require('./gsap/uncompressed/plugins/AttrPlugin.js');
var morphSVG = require('./gsap/MorphSVGPlugin.js');
var scrambleText = require('./gsap/ScrambleTextPlugin.js');
var text = require('./gsap/TextPlugin.js');
var ease = require('./gsap/uncompressed/easing/EasePack.js');

require('./css/layout.css');
require('./css/nav.css');
require('./css/cm-section.css');
require('./css/hacker.css');
require('./css/ethics.css');
require('./css/contact.css');
require('./css/keynotes.css');

window.slides = ['#CharifMews','#Hacker','#Ethics','#Contact','#Keynotes'];
var navdots = ['#nav-logo','#nav-hacker','#nav-ethics','#nav-contact','#nav-keynotes'],
    y_pos = null;

(function(){
    var preloader = new TimelineMax();
    if (window.msCrypto || window.crypto){
        preloader.to("#logo", 1,{boxShadow:'0 0 15px 0 white', backgroundColor:'white'});
        preloader.to("#ring2",1,{width:'100px',height:'100px'},'-=0.7');
        preloader.to("#authorizer", 2, {scrambleText:{text:"Access Granted"}});
        preloader.to("#authorizer", 0.4, {color: 'rgba(52,84,180)'});
        preloader.to("#ring1", 0.5,{width:'0',height:'0'},'dis');
        preloader.to("#ring2",0.5,{width:'0',height:'0'},'dis');
        preloader.to('#logo',0.5,{width:'0',height:'0'},'dis');
        preloader.to("#authorizer", 0.4, {opacity:'0',height:'0'},'dis');
        preloader.to('#up',1.2,{height:'0',ease:'Power2.easeInOut'},'open');
        preloader.to("#authorizer", 0, {display:'none'},'open');
        preloader.to('#down',1.2,{height:'0',ease:'Power2.easeInOut'},'open');
        introAnimation();
        hackerAnimation();
        resizer();
    }
    else {
        document.getElementById('ring2').id = 'ring3';
        preloader.to("#logo", 1,{boxShadow:'0 0 15px 0 white', backgroundColor:'white'});
        preloader.to("#ring3",1,{width:'100px',height:'100px'},'-=0.7');
        preloader.to("#authorizer", 2, {scrambleText:{text:"Access Denied <br> <a href='https://browser-update.org/update.html'>Upgrade browser</a>"}});
        preloader.to("#authorizer", 0.4, {color: 'red'});
    }
})();

function introAnimation(){
    var intro_tl = new TimelineMax({repeat:-1, repeatDelay: 2, yoyo:true});
    intro_tl.to('#cm-text', 1.2, {text:"positively impacting the world from my laptop", ease:Linear.easeNone},'ani1');
    intro_tl.to('#cm1-1',1.5,{morphSVG: '#cm2-1'},'ani1');
    intro_tl.to('#cm1-2',1.5,{morphSVG: '#cm2-2'},'ani1');
    intro_tl.to('#cm1-3',1.5,{morphSVG: '#cm2-3'},'ani1');
}

function hackerAnimation(){
    var hacker_tl = new TimelineMax({repeat:-1, repeatDelay: 2, yoyo:true});
    hacker_tl.to('#hacker-text-keyword1', 0.6, {text:"searching for", ease:Linear.easeNone},'search');
    hacker_tl.to('#hacker-text-keyword2', 0.6, {text:"best user-experience", ease:Linear.easeNone},'search');
    hacker_tl.to('#hacker-network',2.5,{morphSVG: '#hacker-search'},'search');
    hacker_tl.to('#hacker-text-keyword1', 0.6, {text:"improving", ease:Linear.easeNone},'improve');
    hacker_tl.to('#hacker-text-keyword2', 0.6, {text:"code", ease:Linear.easeNone},'improve');
    hacker_tl.to('#hacker-network',2.5,{morphSVG: '#hacker-improve'},'improve');
    hacker_tl.to('#hacker-text-keyword1', 0.6, {text:"creating", ease:Linear.easeNone},'love');
    hacker_tl.to('#hacker-text-keyword2', 0.6, {text:"apps people love", ease:Linear.easeNone},'love');
    hacker_tl.to('#hacker-network',2,{opacity: 0},'love');
    hacker_tl.to('#hacker-love',2,{opacity: 1},'love');
}

window.onload = function(){
    navToSlide(Math.max((slides.indexOf(window.location.hash)+1),1));
    document.getElementById('authorizer').className = '';
};

window.navToSlide = function(slideNumber){
    for(var i = 1; i<=slides.length;i++){
        if(i<slideNumber){
            TweenLite.to(slides[i-1].toString(),0.2,{top:'-100%',ease:Expo.easeInOut});
            TweenLite.to(navdots[i-1].toString(),0.2,{backgroundColor:"#fff",ease:Expo.easeInOut});
        }
        else if(i===slideNumber){
            TweenLite.to(slides[slideNumber-1].toString(),1,{top:0,ease:Expo.easeInOut});
            TweenLite.to(navdots[slideNumber-1].toString(),1,{backgroundColor:"#203470",ease:Expo.easeInOut});
            window.location.hash = slides[slideNumber-1].toString();
            if(slideNumber===slides.length){
                TweenLite.to('#arrow-down',0.5,{opacity:0})
            }
            else{
                TweenLite.to('#arrow-down',0.5,{opacity:1})
            }
        }
        else{
            TweenLite.to(slides[i-1].toString(),0.2,{top:'100%',ease:Expo.easeInOut});
            TweenLite.to(navdots[i-1].toString(),0.2,{backgroundColor:"#fff",ease:Expo.easeInOut});
        }
    }
};

window.getNextSlide= function(){
    return Math.min(slides.indexOf(window.location.hash)+2,slides.length);
};

window.getPrevSlide= function(){
    return Math.max((slides.indexOf(window.location.hash)),1);
};

window.nextArticle= function(){
//    TODO: Implement next article function
};

window.prevArticle= function(){
//    TODO: Implement prev article function
};

window.onresize = function(){
    resizer()
};

document.addEventListener("keydown", function(e){
    if(e.keyCode === 38) {
        navToSlide(getPrevSlide());
    }
    if(e.keyCode === 40) {
        navToSlide(getNextSlide());
    }
},false);

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(e) {
    y_pos = e.touches[0].clientY;
};

function handleTouchMove(evt) {
    if ( ! y_pos ) {
        return;
    }

    var y_pos2 = evt.touches[0].clientY,
        y_diff = y_pos - y_pos2;

    if ( y_diff > 0 ) {
        navToSlide(Math.min((slides.indexOf(window.location.hash)+2),slides.length));
    } else {
        navToSlide(Math.max((slides.indexOf(window.location.hash)),1));
    }

    y_pos = null;
};

function resizer(){
    if(window.innerHeight>700){
        TweenLite.to('#cm-svg',1,{attr:{width:"300px",height:"300px"}});
        TweenLite.to('#hacker-svg',1,{attr:{width:"300px",height:"300px"}});
    }
    else if(window.innerHeight<=520){
        TweenLite.to('#cm-svg',1,{attr:{width:"150px",height:"150px"}});
        TweenLite.to('#hacker-svg',1,{attr:{width:"150px",height:"150px"}});
    }
    else{
        TweenLite.to('#cm-svg',1,{attr:{width:"200px",height:"200px"}});
        TweenLite.to('#hacker-svg',1,{attr:{width:"200px",height:"200px"}});
    }
}
