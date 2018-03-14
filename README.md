TP Web : Javascript et HTML5

Auteurs : Henriot Alexandre, Pelletier Vincent


Q1) Création de la classe DnD contenant les 4 attributs
    this.xStart = 0;
    this.yStart = 0;
    this.xEnd = 0;
    this.yEnd = 0;

Q2) Déclaration des 3 fonctions correspondantes aux 3 actions à gérer (pression, déplacement, relachement)
this.mousePressed = function(evt){
        pressed = true;
        this.xStart=getMousePosition(canvas, evt).x;
        this.yStart=getMousePosition(canvas, evt).y;

        interactor.onInteractionStart(this);

        console.log("Press");
        console.log(this.xStart);
        console.log(this.yStart);
}.bind(this);

etc...

Q3) Liaison des fonctions aux évènements
canvas.addEventListener('mousedown', this.mousePressed, false);
canvas.addEventListener('mousemove', this.mouseMove, false);
canvas.addEventListener('mouseup', this.mouseRelease, false);

Q4) Enregistrement de chaque fonction auprès du canvas

Q5)
console.log("Press");
console.log(this.xStart);
console.log(this.yStart);

Q6) Implémentation des 4 classes dans model.js
-Drawing
-Shape
-Line
-Rectangle

Q7) Fonctions d'affichage

Q8) Test code

Q9) Interaction DnD à Pencil
interactor.onInteractionStart(this);
interactor.onInteractionUpdate(this);
interactor.onInteractionEnd(this);

Q10) Implémentation des fonctions dans Pencil

Q11) Liaison des widgets