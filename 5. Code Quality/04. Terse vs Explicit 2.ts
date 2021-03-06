// Needlessly explicit
function updatePosition(x, y){
    this.x = x;
    this.y = y;
    this.distanceFromOrigin = Math.sqrt(xPosition ** 2 + posY ** 2);
}

// It's hard to notice that the xPosition was used twice, because the names all look the same

// Better:
function updatePositionTerse(x, y){
    this.xPosition = x;
    this.yPosition = y;
    this.distanceFromOrigin = Math.sqrt(x ** 2 + y ** 2);
}
