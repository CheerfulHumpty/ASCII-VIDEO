let button = document.getElementById("button")
    let ontrue = false;
    let video;
    let density = "Ñ@#W$9876543210?!abc;:+=-,._                      "
    function setup(){
        createCanvas(windowWidth-50,windowHeight-25)
        video  = createCapture(VIDEO)
        video.size(170,150)
        video.hide()
    }
    button.addEventListener("click",()=>{
         if(ontrue==false){
            button.innerHTML = "VIDEO ON"
            button.style.textDecoration = "none"
            video.show()
            ontrue  =  true
         }
         else if(ontrue==true){
            button.innerHTML = "VIDEO OFF"
            button.style.textDecoration = "line-through"
            video.hide()
            ontrue  =  false
         }
    })
    function draw(){
         background(1)
         video.loadPixels()
         var w = width/video.width
         var h = width/video.height
         for(var x=0;x<video.width;x++){
            for(var y=0;y<video.height;y++){
                var index = (x+y*video.width)*4
                var r = video.pixels[index+0]
                var g = video.pixels[index+1]
                var b = video.pixels[index+2]
                var len = density.length
                var com = (r+g+b)/3
                noStroke()
                fill(255)
                var charmap = floor(map(com,0,255,0,len))
                textSize(w*1.5)
                textAlign(CENTER,CENTER)
                text(density.charAt(charmap),x*w+w*0.5,y*h+h*0.5)
            } 
         }
    }
