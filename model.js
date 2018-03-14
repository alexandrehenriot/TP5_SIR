
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    this.shapes=new Array();
    this.addShape=function(shape) {
        this.shapes.push(shape);
    }.bind(this);

    this.removeShape=function(id) {
            this.shapes.splice(id,1);
    }.bind(this);

    this.getShapes = function(){
        return this.shapes;
    }.bind(this);
}

function Shape(thickness, color){
    this.color = color;
    this.thickness =thickness;
}

function Line(xStart,yStart,xEnd,yEnd,thickness,color){
    Shape.Call(this,thickness,color);
    this.xStart = xStart;
    this.yStart = yStart;
    this.xEnd = xEnd;
    this.yEnd = yEnd;
}
Line.prototype=new Shape();

function Rectangle(x,y,height,width,thickness,color){
    Shape.Call(this,thickness,color);
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
}
Rectangle.prototype=new Shape();
