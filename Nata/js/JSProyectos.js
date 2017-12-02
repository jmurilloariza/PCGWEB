
//SIMULADOR DE JSON
var urlProyecto='https://randomuser.me/api/?results=1';
var urlComunas='https://randomuser.me/api/?results=5';

//INSTANCIA DE VUE.JS

var vm= new Vue({
				el:"#rootVueProyecto" ,
				created:function(){
					this.getProyecto();
					this.getPorcentaje();										
				},				
				data:{										
						lists3:[]
																		
					},
				methods:{
					getProyecto: function(){	

						this.$http.get(urlProyecto).then(function(response){															
								this.lists3=response.data.results;								
						});					
					},
					
					getPorcentaje: function(){	

						this.$http.get(urlProyecto).then(function(response){
															
								var elem=response.data.info.results;									
								var input='<input  type="text" value="'+20+'" class="circle">';
								$('#inputPorcentaje').html(input);
								cargarCirculo();
						});
					
					}
					
				
					
				
					}		
		});

//METODO PARA CARGAR LA BARRA DE PROGRESO
function cargarCirculo(){
	var fgColor="";
	var circle= $('.circle');
		if(circle.val()<40){
			fgColor="#EF6C00";
		}else if(circle.val()>=40 && circle.val()<70){
			fgColor="#FFC107";
		}else{
			fgColor="#53b913";		
		}

	 $('.circle').knob({
  	"min":0,
  	"max":100,
  	"width":250,
  	"height":250,
  	"fgColor":fgColor,
  	"readOnly":true,
  	"thickness": 0.3,
  	"inputColor" : "#335b8e",            
       
  });
}


			

		