
//SIMULADOR DE JSON
var urlUsers='https://randomuser.me/api/?results=10';


//INSTANCIA DE VUE.JS

var vm= new Vue({
				el:"#rootVueHome" ,
				
				data:{																	
					proyectoselect:"",	
					lists:[]				
					},
				methods:{
					getUsers: function(){											
						this.$http.get(urlUsers).then(function(response){
							$('#listadoProyectos').css('display','block');
							this.lists=response.data.results;
							
						});
					},
				 crearComboAnidado: function() {
	
					    var idOpcion = $('#select1').val();
					    					    
					    if(idOpcion==1){
				    		$('#select1').css('display','block'); 
				    		$('#fechas').css('display','none');
					    	
				        		
				        }else if(idOpcion==2){
				        	$('#fechas').css('display','');
			        		$('#fecha1').css('display','block'); 
			        		$('#fecha2').css('display','block'); 
					    	$('#select2').css('display','none');

				        }else if(idOpcion==3){
			        		$('#select2').css('display','');
			        		$('#fechas').css('display','none');
					    	
				        }else if(idOpcion==4){
				        	$('#select2').css('display','');
				        	$('#fechas').css('display','none');
					    		        		
					    }else{
					    	$('#select2').css('display','');
				        	$('#fechas').css('display','none');
					    	$('#select2').html();
					    }		    
					}
				},	
							
		});


	
			




		