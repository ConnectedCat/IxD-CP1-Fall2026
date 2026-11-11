let pColor

let posX, posY, velX, velY

function setup() {
    createCanvas(800, 600)
    colorMode(HSB, TWO_PI, 1, 1, 1)

    pColor = color(0, 0.8, 0.8)

    setInterval(colorChange, 1000)
    setInterval(changeVelocity, 500)

    posX = width*0.5
    posY = height*0.5
    velX = random(-4, 4)
    velY = random(-4, 4)
}

function draw() {
    background(0)

    posX += velX
    posY += velY
    circle(posX, posY, 80)

    if(posX + 40 >= width || posX - 40 <= 0){
        velX *= -1
    }
    if(posY + 40 >= height || posY - 40 <= 0){
        velY *= -1
    }

    push()
    translate(width*0.5, 0)

    rotate( cos(millis()*0.00314) * 0.5 )
    stroke(pColor)
    line(0, 0, 0, 200)
    fill(pColor)
    circle(0, 200, 50)
    pop()
}

function colorChange(){
    pColor = color(random(TWO_PI), 0.8, 0.8)
}

function changeVelocity(){
    velX = random(-4, 4)
    velY = random(-4, 4)
}