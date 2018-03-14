
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Shape.prototype.paint = function(ctx){
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
};

Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
    Shape.prototype.paint.call(this, ctx);
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.beginPath();
    Shape.prototype.paint.call(this, ctx);
    ctx.moveTo(this.xStart, this.yStart);
    ctx.lineTo(this.xEnd, this.yEnd);
    ctx.stroke();
};


Drawing.prototype.paint = function(ctx) {
    console.log(this.getShapes());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getShapes().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

Drawing.prototype.majShapeList = function(form){
    var ListShape = document.getElementById('shapeList');
};