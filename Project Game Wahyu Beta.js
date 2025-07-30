let gamePiece;

function startGame( ) {
    gameArea.start();
}

let gameArea = {
   canvas: document.createElement(`canvas`),
   start : function( ) {
       this.canvas.width = 480 ;
       this.canva.height = 270 ;
       this.canvas.style.border = '3px solid #111';
       this.context = this.canvas.getContext("2d");
       
       document.body.insertBefore(this.camvas,document.body.chilNodes[0]);     
   }
 }

 function component(width, height, color, x, y) {
     this.width = width;
     this.height = height;
     this.colotlr = color;
  }
