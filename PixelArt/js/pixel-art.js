function crearPaletaColores(){
  for(i = 0; i < nombreColores.length; i++){
    var nuevoColor = document.createElement('div');
    nuevoColor.style.backgroundColor = nombreColores[i];
    nuevoColor.className = "color-paleta";
    nuevoColor.addEventListener('click', seleccionarColor);
    paleta.appendChild(nuevoColor);
  }
 }
 
 window.onload = function() {
   $("body").fadeIn(2000);
   crearPaletaColores();
   crearGrillaPixeles();
 }
 
 var nombreColores = ['White', 'LightYellow',
   'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
   'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
   'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
   'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
   'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
   'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
   'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
   'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
   'LightGreen', 'PaleGreen', 'PaleTurquoise',
   'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
   'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
   'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
   'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
   'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
   'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
   'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
   'BlueViolet', 'DarkViolet', 'DarkOrchid',
   'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
   'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
 ];
 
 // Variable para guardar el elemento 'color-personalizado'
 var colorPersonalizado = document.getElementById('color-personalizado');
 
 colorPersonalizado.addEventListener('change', 
   (function() {
     // Se guarda el color de la rueda en colorActual
     colorActual = colorPersonalizado.value;
     indicador.style.backgroundColor = colorActual;
 
   })
 );
 
 var paleta = document.getElementById('paleta');
 var grillaPixeles = document.getElementById('grilla-pixeles');
 var indicador = document.getElementById('indicador-de-color');
 
 
 function crearPaletaColores(){
   for(i = 0; i < nombreColores.length; i++){
     var nuevoColor = document.createElement('div');
     nuevoColor.style.backgroundColor = nombreColores[i];
     nuevoColor.className = "color-paleta";
     nuevoColor.addEventListener('click', seleccionarColor);
     paleta.appendChild(nuevoColor);
   }
 }
 
 function crearGrillaPixeles(){
   for(i = 0; i < 1750; i++){
     var nuevoPixel = document.createElement('div');
     nuevoPixel.addEventListener('mousemove', pintar);
     grillaPixeles.appendChild(nuevoPixel);
   }
 }
 
 function seleccionarColor(e){
   indicador.style.backgroundColor = e.target.style.backgroundColor;
 }
 
 function pintar(e){
   if (mouseApretado === true){
     e.target.style.backgroundColor = indicador.style.backgroundColor;
   }
 }
 
 var mouseApretado = false;
 
 document.addEventListener('mousedown', clickApretado);
 document.addEventListener('mouseup', clickLiberado);
 
 function clickLiberado(){
   mouseApretado = false;
 }
 
 function clickApretado(){
   mouseApretado = true;
 }
 
 //Funciones para cargar a los distintos personajes:
 $("#batman").click(function cargarBatman(){
   cargarSuperheroe(batman);
 });
 
 $("#wonder").click(function cargarWonder(){
   cargarSuperheroe(wonder);
 });
 
 $("#flash").click(function cargarFlash(){
   cargarSuperheroe(flash);
 });
 
 $("#invisible").click(function cargarInvisible(){
   cargarSuperheroe(invisible);
 });
 
 $("#guardar").click(function guardarPixel(){
   guardarPixelArt();
 });
 
 
 //Funcionalidad nueva para borrar toda la grilla:
 
 $("#borrar").click(function borrarGrilla() {
   var grilla = $("#grilla-pixeles");
   var grillaPixeles = grilla.children();
   grillaPixeles.animate({"background-color": "white"}, 1000);
 });
 
 //Funcionalidad nueva para pintar todo el fondo de un color:
 
 $("#balde").click(function pintarFondo(){
   var grilla = $("#grilla-pixeles");
   var grillaPixeles = grilla.children();
   grillaPixeles.css({"background-color": indicador.style.backgroundColor});
 });
 
 alert('Bienvenidos al juego Pixel Art');
 

