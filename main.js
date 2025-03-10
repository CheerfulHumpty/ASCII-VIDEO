let button = document.getElementById("button")
    let ontrue = false;
    let video;
    let density = "Ñ@#W$9876543210?!abc;:+=-,._                     "
    let canvasWidth, canvasHeight;
    
    function setup(){
        canvasWidth = windowWidth - 50;
        canvasHeight = windowHeight - 50;
        createCanvas(canvasWidth, canvasHeight)
        video  = createCapture(VIDEO)
        video.size(100,100)
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

    let slider = document.getElementById("range")
    let value = slider.value * 0.3
    let slider1 = document.getElementById("range2")
    let value1 = slider1.value
    let slider2 = document.getElementById("range3")
    let value2 = slider2.value
    let slider3 = document.getElementById("range4")
    let value3 = slider3.value
    slider3.addEventListener("input",()=>{
        value3 = slider3.value
    })
    slider.addEventListener("input",()=>{
        value = slider.value * 0.3
    })

    slider1.addEventListener("input",()=>{
        value1 = slider1.value
    })

    slider2.addEventListener("input",()=>{
        value2 = slider2.value
    })

    function draw(){
         background(0) 
         video.size(value1, value2)
         video.loadPixels()
         let w = canvasWidth / video.width;
         let h = canvasHeight / video.height;
         for (let x = 0; x < video.width; x++) {
            for (let y = 0; y < video.height; y++) {
                let index = (x + y * video.width) * 4
                let r = video.pixels[index + 0]
                let g = video.pixels[index + 1]
                let b = video.pixels[index + 2]
                let brightness = (r + g + b) / 3
                let len = density.length
                let charIndex = floor(map(brightness, 0, 255, 0, len))
                noStroke()
                fill(value3)
                textSize(value)
                textAlign(CENTER, CENTER)
                let posx = x * w + w * 0.5;
                let posy = y * h + h * 0.5;
                if (posx < canvasWidth && posy < canvasHeight) {
                    text(density.charAt(charIndex), posx, posy)
                }
            }
         }
    }
