
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function(DnD){
        // on recupere les boutons de canvas.html
        var butRect = document.getElementById('butRect');
        var butLine = document.getElementById('butLine');
        var spinnerWidth = document.getElementById('spinnerWidth');
        var colour = document.getElementById('colour');

        // on recupere la largeur et la couleur
        this.currLineWidth = spinner.value;
        this.currColour = colour.value;

        // on regarde quelle forme est selectionnee
        if(butLine.checked){
            this.currEditingMode = editingMode.line;
        } else if(butRect.checked){
            this.currEditingMode = editingMode.rect;
        }

        // creation de la forme qui est selectionnee
        switch(this.currEditingMode){

        // le cas ou c'est la ligne
        case editingMode.line:{
            this.currentShape = new Line(DnD.xStart,DnD.yStart,DnD.xEnd,DnD.yEnd,this.currLineWidth,this.currColour);
            break;
        }

        // le cas ou c'est le rectangle
        case editingMode.rect:{
            this.currentShape = new Rectangle(DnD.xStart,DnD.yStart,DnD.xEnd-DnD.xStart,DnD.yEnd-DnD.yStart,this.currLineWidth,this.currColour);
            break;
        }
        }
    }.bind(this);


    this.onInteractionUpdate = function(DnD){
        if (butLine.checked) {
            this.currentShape = new Line(DnD.xStart,DnD.yStart,DnD.xEnd,DnD.yEnd,this.currLineWidth,this.currColour);
        } else if(butRect.checked){
            this.currentShape = new Rectangle(DnD.xStart,DnD.yStart,DnD.xEnd-DnD.xStart,DnD.yEnd-DnD.yStart,this.currLineWidth,this.currColour);
        }

        // reinitialisation du canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.paint(ctx);
        this.currentShape.paint(ctx);

    }.bind(this);

    this.onInteractionEnd = function(DnD){
        if (butLine.checked) {
            this.currentShape = new Line(DnD.xStart,DnD.yStart,DnD.xEnd,DnD.yEnd,this.currLineWidth,this.currColour);
        } else if(butRect.checked){
            this.currentShape = new Rectangle(DnD.xStart,DnD.yStart,DnD.xEnd-DnD.xStart,DnD.yEnd-DnD.yStart,this.currLineWidth,this.currColour);
        }

        // reinitialisation du canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // on ajoute une forme au canvas
        drawing.addShape(this.currentShape);
        // creation de la liste de dessins du canvas
        drawing.paint(ctx, canvas);
        // maj de la liste des formes
        drawing.updateShapeList(this.currentShape);
        // plus aucune forme ne doit etre selectionnee
        this.currentShape=null;
    }
};


