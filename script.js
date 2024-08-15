const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




 function circlemousefollower(xscale,yscale){
window.addEventListener("mousemove", function(dets){
this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`;

})
}

 circlemousefollower();

function firstpageanim(){
    var tl = gsap.timeline()
    
    tl.from("#nav",{
        y: "-10",
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })

    tl.to(".boundingelem",{
        y:0,
        ease: Expo.easeInOut,
        delay: -1,
        duration:2,
        stagger: .2
    })

    tl.from("#herofooter",{
        y:'10',
        opacity: 0,
        delay: -1,
        duration:1.1,
        ease: Expo.easeInOut
    })
}
firstpageanim()
var timeout;

function mousechapta(){
    //defining default scale value
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
   window.addEventListener("mousemove", function(dets){
    clearTimeout(timeout);
       xscale = gsap.utils.clamp(0.8,1.2,dets.clientX - xprev)
      xprev = dets.clientX;
      yscale = gsap.utils.clamp(0.8,1.2,dets.clientY - yprev)
      yprev = dets.clientY;
      
      
      circlemousefollower(xscale,yscale);
     timeout = this.setTimeout(function () { 
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${1},${1})`;
        
     }, 100)

   })
}

mousechapta();



document.querySelectorAll(".elem").forEach(
    (elem) => {
        var rotate = 0;
        var difference = 0;

        elem.addEventListener("mousemove", (dets)=> {

            
       var diff = dets.clientY - elem.getBoundingClientRect().top;
        difference = dets.clientX - rotate;
        rotate = dets.clientX;
        
           gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power4,
            top:diff,
            left:dets.clientX,
           rotate: gsap.utils.clamp(-20,20, difference * 0.9),
          
           })
           
            

        })
       
        elem.addEventListener("mouseleave", (dets)=> {
             
            gsap.to(elem.querySelector("img"),{
                opacity: 0,
               })
        })
    
});