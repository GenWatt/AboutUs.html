const conteiner=document.querySelector(".conteiner");
const name=document.querySelectorAll(".name");
const secondName=document.querySelectorAll(".second-name");
const text=document.querySelector(".text");
const card=document.querySelector(".card");
const path={curviness:2,autoRotate:false,values:[
    {x:100,y:40},
    {x:200,y:60},
    {x:250,y:80},
    {x:650,y:0}
]}
const pathCard={curviness:2,autoRotate:false,values:[
    {x:0,y:40},
    {x:200,y:60},
    {x:250,y:120},
    {x:500,y:0}
]}
var tl = new TimelineMax();
tl.fromTo(conteiner,0.2, {borderRadius:"0px"},{borderRadius:"50%"})
.fromTo(conteiner,0.2, {width:"0px"},{width:"300px"},"-0.3s")
.fromTo(conteiner,0.3, {height:"0px"},{height:"300px"},"-0.7s")
.fromTo(conteiner,0.7, {borderRadius:"50%"},{borderRadius:"0"})
.fromTo(conteiner, 0.2, {width:"400px"},{width:"100%"},"-0.6s")
.fromTo(secondName, 0.4, {color:"black"},{color:"#03afff"})
.fromTo(text, 0.4, {left:"-800px"},{left:"0"},"-0,4s")
.fromTo(text, 0.2, {color:"black"},{color:"white"})
const tween= new TimelineLite();
tween.add(
    TweenLite.to(name,2,{
    bezier:path,ease:Power1.easeInOut})
);
tween.add(
    TweenLite.to(card,2,{
    bezier:pathCard,ease:Power1.easeInOut }) 
    );
