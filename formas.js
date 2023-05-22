let cantidadFig;


class Formas {
    constructor(cual,posX,posY) {

                    this.y = posY;
                    this.x = posX;
                    this.esteColor = miPaleta.darColor();
                    this.opacidad = 20;
                    this.ancho=[];
                    this.alto=[];
                    this.cual=[1,2,3,4,5];
                    this.separacion=[];
                    this.cual= cual;

                    this.colorInicial= color(miPaleta.darColor());
                    this.colorFinal= color(miPaleta.darColor());
                    cantidadFig=7;

                    for(let i = 0; i < cantidadFig; i++) {                      
                      this.ancho[i]=int(random(45, 90));
                      this.alto[i]=int(random(80, 90));
                      this.separacion[i]=int(random(30,50));
                      
                    }
    }
    dibujar(){
      push();
      let Yinicial=this.y;
      let cualForma= this.cual;
      
      if(mouseIsPressed){
        this.colorInicial=lerpColor(color(miPaleta.darColor()),color(miPaleta.darColor()),map(mouseY,0,height,0,1));
        console.log(this.colorInicial + mouseY);
        
        for(let i = 0; i < cantidadFig; i++) {                      
          this.ancho[i]=int(random(30, 90));
          this.alto[i]=int(random(80, 90));
          this.separacion[i]=int(random(30,60));  
          // this.x= this.x + random(-5,5);
          this.y= this.y + random(-10,10);
          
        }
        
      }

      for(let i = 0; i < cantidadFig; i++) {
         this.opacidad = map(i,0,cantidadFig-2,10,255);
         let mezcla = map(i,0,cantidadFig-1,0,1);
         
           this.esteColor = lerpColor(this.colorInicial,this.colorFinal,mezcla);
       
           tint(red(this.esteColor), green(this.esteColor), blue(this.esteColor), this.opacidad);

            
           image(imgFormas[cualForma], this.x , Yinicial, this.ancho[i],  this.alto[i]);
           Yinicial = Yinicial- this.separacion[i];
      }
        pop();

    }

  }