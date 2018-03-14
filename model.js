
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    this.shapes=new Array();
    this.addShape=function(shape) {
                      this.shapes.push(shape);
                  }.bind(this);
}

function Shape(color, thickness){
    this.color = color;
    this.thickness =thickness;
}

function Line(x1,y1,x2,y2,color,thickness){
    Shape.Call(this,color,thickness);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}
Line.prototype=new Shape();

function Rectangle(x,y,height,width,color,thickness){
    Shape.Call(this,color,thickness);
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
}
Rectangle.prototype=new Shape();
