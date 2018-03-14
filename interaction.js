
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.xStart = 0;
    this.yStart = 0;
    this.xEnd = 0;
    this.yEnd = 0;

    var pressed = false;

	// Developper les 3 fonctions gérant les événements
    this.mousePressed = function(evt){
        pressed = true;
        this.xStart=this.xEnd=getMousePosition(canvas, evt).x;
        this.yStart=this.yEnd=getMousePosition(canvas, evt).y;
    }.bind(this);

    this.mouseMove = function(evt){
        if(pressed==true){
            this.xEnd=getMousePosition(canvas, evt).x;
            this.yEnd=getMousePosition(canvas, evt).y;
        }
    }.bind(this);

    this.mouseRelease = function(evt){
        if(pressed==true){
            pressed=false;
        }
    }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', this.mousePressed, false);
    canvas.addEventListener('mousemove', this.mouseMove, false);
    canvas.addEventListener('mouseup', this.mouseRelease, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



