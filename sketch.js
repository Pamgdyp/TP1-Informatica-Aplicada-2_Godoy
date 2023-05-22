let imgFormas = [];
let cant=6;
let miPaleta;
let formasInstancia;
let ejecutado = false;
let num = 5;
let conjunto= [];
let cantidad=0;
let cantidadTrazos=0;
let bandera;
let filtro;


function preload() {
  miPaleta = new Paleta ("data/pdecolores.png");
  filtro = loadImage("data/filtro.png");

  for (let i = 1; i < cant; i++) {
    let nombre = "data/formas_00" + i + ".png";
   imgFormas[i] = loadImage(nombre);
  }
}

function setup() {
  createCanvas(350, 650);
  imageMode(CENTER);
  frameRate(60);

    conjunto.push(new Formas(5, 170, 200));
    conjunto.push(new Formas(2, 330, 200));
    conjunto.push(new Formas(5, 300, 300));
    conjunto.push(new Formas(3, 260, 150));
    conjunto.push(new Formas(4,85,230));
    conjunto.push(new Formas(1, 20, 250));
    conjunto.push(new Formas(3, 140, 300));
    conjunto.push(new Formas(1, 220,350));
    conjunto.push(new Formas(2, 40, 400));
    conjunto.push(new Formas(2, 300, 500));
    conjunto.push(new Formas(1, 110, 500));
    conjunto.push(new Formas(3, 270, 600));
    conjunto.push(new Formas(5,230,680));
    conjunto.push(new Formas(4,195,580));
    conjunto.push(new Formas(1, 340, 650));
    conjunto.push(new Formas(2, 160, 700));
    conjunto.push(new Formas(3, 3, 600));
    conjunto.push(new Formas(4,40,650));
    conjunto.push(new Formas(5,100,700));

}
function draw() {
  background(15); 

  for(let i=0;i<conjunto.length;i++){
    conjunto[i].dibujar();
  }
  push();
  tint(255, 50);
  image(filtro,0,0);
  pop();
}

 function keyPressed() {
  if(key ==="-"){
    if(cantidadFig>1){
      cantidadFig--;
    }
  }else if(key ==="+"){
    if(cantidadFig<=5 ){
      cantidadFig++;
    }
  }if (key === '1') {
    // Guardar la imagen con un nombre único, por ejemplo, usando el timestamp actual como nombre de archivo
    let timestamp = year() + nf(month(), 2) + nf(day(), 2) + nf(hour(), 2) + nf(minute(), 2) + nf(second(), 2);
    save(timestamp + ".png");
  }

  
}
