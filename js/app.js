let mySlider=[
   'image/collosseum.jpg',
   'image/download.jpg',
   'image/images.jpg',
   'image/slider2.jpg',
   'image/thumb2.jpg'
]
let myDots=[
 'dot active-dot',
 'dot active-dot',
 'dot active-dot',
 'dot active-dot',
 'dot active-dot'
]
let img=document.querySelector('.slider img');
let dots=document.querySelector('.slider-nav')
let slide=0;
let dot=0
img.src=mySlider[slide]
dot.src=myDots[dot]
let next=document.querySelector('.next');
let previus=document.querySelector('.previus')
next.addEventListener('click', function(){
slide++;
if(slide>=mySlider.length-1){
slide=0;
}
img.src=mySlider[slide]
})
previus.addEventListener('click',function(){
    slide--;
    if(slide===-1){
        slide=mySlider.length-1
    }
    img.src=mySlider[slide]
})
function AutoPlay(){
    slide++;
    if(slide>=mySlider.length-1){
    slide=0;
    }
    img.src=mySlider[slide]
}
setInterval(()=>{
    AutoPlay();
    
},2000)

function Dots(){
dots++;
for (let i = 0; i <myDots.length; i++) {
if(myDots.length-1==mySlider.length-1){
    myDots[0]=mySlider[0]
}
dot.src=mySlider[slide]
}
dots.addEventListener('click', function(){
    dot++;
    if(dot>=mySlider.length-1){
        dot=0;
        }
        dot.src=mySlider[slide]
        })
    }

    function AutoPlayDot(){
        dot++;
        if(dot>=myDots.length-1){
        dot=0;
        }
        dot.src=mySlider[slide]
    }