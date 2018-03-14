
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    this.shapes=new Array();
    this.addShape=function(shape) {
        this.shapes.push(shape);
    }.bind(this);

    this.getShapes = function(){
        return this.shapes;
    }.bind(this);
}

function Shape(thickness, color){
    this.color = color;
    this.thickness =thickness;

    this.getColor = function(){
        return this.color;
    }.bind(this);

    this.getThickness(){
        return this.thickness;
    }.bind(this);
}

function Line(xStart,yStart,xEnd,yEnd,thickness,color){
    Shape.Call(this,thickness,color);
    this.xStart = xStart;
    this.yStart = yStart;
    this.xEnd = xEnd;
    this.yEnd = yEnd;

    this.getXstart = function(){
        return this.xStart;
    }.bind(this);

    this.getYstart = function(){
        return this.yStart;
    }.bind(this);

    this.getXend = function(){
        return this.xEnd;
    }.bind(this);

    this.getYend = function(){
        return this.yEnd;
    }.bind(this);
}
Line.prototype=new Shape();

function Rectangle(x,y,height,width,thickness,color){
    Shape.Call(this,thickness,color);
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    this.getXstart = function () {
        return this.x;
    }.bind(this);

    this.getYstart = function () {
        return this.y;
    }.bind(this);

    this.getXend = function () {
        return this.x + this.width;
    }.bind(this);

    this.getYend = function () {
        return this.y + this.height;
    }.bind(this);
}
Rectangle.prototype=new Shape();
