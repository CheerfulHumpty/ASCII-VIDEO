let button = document.getElementById("button")
let ontrue = false;
let video;
let density = "Ñ@#W$9876543210?!abc;:+=-,._                     " // ASCII characters 
let canvasWidth, canvasHeight;
    function setup(){
        canvasWidth = windowWidth - 50;
        canvasHeight = windowHeight - 50;
        createCanvas(canvasWidth, canvasHeight)
        video  = createCapture(VIDEO)//Capturing the video
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
    let coloron = false;
    let button1 = document.getElementById("button1")
    button1.addEventListener("click",()=>{
        if(coloron==false){
            coloron =true
        }
        else if(coloron==true){
            coloron =false
        }
    })
    function draw(){
         background(0) 
         video.size(value1, value2)
         video.loadPixels()
         let w = canvasWidth / video.width;
         let h = canvasHeight / video.height;
         for (let x = 0; x < video.width; x++) {
            for (let y = 0; y < video.height; y++) {
                let index = (x + y * video.width) * 4// we are finding the different pixels across the row and column(or the width and height)
                let r = video.pixels[index + 0]//index of r(red)
                let g = video.pixels[index + 1]//index of g(green)
                let b = video.pixels[index + 2]//index of b(blue)
                let avg = (r + g + b) / 3// taking the average values to find the avg levels of differnet pixels
                let len = density.length
                let char = floor(map(avg, 0, 255, 0, len))   // maps the different characters in density with the different avg levels of the respective pixels
                noStroke()
                if(coloron==false){
                    fill(r,g,b)
                }
                else if(coloron==true){
                     fill(value3)
                }
                textSize(value)
                textAlign(CENTER, CENTER)
                let posx = x * w + w * 0.5;
                let posy = y * h + h * 0.5;
                if (posx < canvasWidth && posy < canvasHeight) {//checks for the position and ensure that it is within the given parameters
                    text(density.charAt(char), posx, posy)
                }
            }
         }
    }
