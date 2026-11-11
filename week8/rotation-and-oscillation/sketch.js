let angle = 0.01

function setup() {
    createCanvas(800, 600)
}

function draw() {
    background(220)

    push()
    translate(width*0.5, height*0.5)
    rotate( sin( millis()*0.01 ) * 0.1 )
    rect(-100, -75, 200, 150)
    pop()

    //angle += 0.01
}

function createGrid(gridResolution = 10){
    for(let i = -gridResolution*0.5; i <= gridResolution*0.5; i++){
        let x = i * width/gridResolution
        stroke(0)
        line(x, -height*0.5, x, height*0.5)
    }
    for(let i = -gridResolution*0.5; i <= gridResolution*0.5; i++){
        let y = i * height/gridResolution
        stroke(0)
        line(-width*0.5, y, width*0.5, y)
    }
}