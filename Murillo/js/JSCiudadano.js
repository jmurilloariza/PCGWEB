
//SIMULADOR DE JSON
var urlUsers='https://randomuser.me/api/?results=10';
var urlComunas='https://randomuser.me/api/?results=5';

var alerta1='<div class="alert  alert-dismissable letra letraGrande" id="alerta">'+
			'<a href="#" class="close" data-dismiss="alert" aria-label="close">x</a>	'+
			'<strong>Ha ocurrido un error</strong></div>';

var alerta2='<div class="alert  alert-dismissable letra letraGrande" id="alerta">'+
			'<a href="#" class="close" data-dismiss="alert" aria-label="close">x</a>	'+
			'<strong>¡Los campos estan vacios!</strong></div>';
//INSTANCIA DE VUE.JS

var vm= new Vue({
				el:"#rootVueCiudadano" ,
				created: function(){
				},
				data:{					
					nomproyecto:"",
					comunaseleccionada:"",
					mensaje:'',
					proyectos:'',					
					respuesta:[],
					errores:[],
					item:'',
					comuna:[" 1"," 2","3","4","5","6","7","8"," 9","10"," 11"," 12"],
					barrios:[],
					urlBase: "http://localhost:8080/v1/"			
				},
				methods:{
					getProyectos: function(){
					 $.getJSON(vm.urlBase+"proyectos/ciudadano?offset=-1&limit=-1&estado=finalizado&fields=ubicacion",		        
						  function(response){		            					
						  		console.log(response);
						});	
					},
					getBarrios: function(){
						var arrayBarrios = [];
						this.barrios=arrayBarrios;

						var numeroComuna= $('#sel1 option:selected').val();
						alert(numeroComuna);

					 $.getJSON(vm.urlBase+"/comuna/"+numeroComuna+"/barrios?fields=nombre",		        
							function(response){ 
								console.log(response);
								for (var i = 0; i <= response.length; i++) {
									arrayBarrios.push(response[i].nombreBarrio);
								}								
							})

						},
						anterior: function(){
						},
						capturarCredenciales: function (){ 
							var usuario= $('#username').val();
							var password=$('#password').val();

							if(usuario!=''&& password!=''){
									var xhr = new XMLHttpRequest();
									//se ejecuta cuando se haya cargado el resultado de la respuesta
									xhr.addEventListener("load", function () {  
									  if (this.readyState === 4) {
									    if(xhr.status === 200){ 
									    		// si no esta creada la cookie, la crea, en caso contrario la sobreescribe con tiempo de expiracion de una hora
									    		setCookie('token', xhr.getResponseHeader("Authorization"), 0.0416667)
									    		// se redirecciona a la pagina home
									    		window.location.replace('../html/home.html')
									    }else if(xhr.status === 401){
									    	alert('Correo o contraseña invalidos!')
									    }else if(xhr.status === 500){
									    	console.log('Ha ocurrido un error, pro favor intenta mas tarde.')
									    }
									  }
									});
									xhr.open("POST", vm.urlBase+"usuarios/login");
									xhr.setRequestHeader("content-type", "application/json");
									xhr.setRequestHeader("cache-control", "no-cache");
									xhr.withCredentials = false;
									// envia el cuerpo de la peticion en formato json
									xhr.send(JSON.stringify({
									  "username": usuario,
									  "password": password
									}));
							}else{
								this.mensaje="Los campos estan vacios";
								$('#divalerta').html(alerta2);					
								$('#alerta').addClass('alert-warning');
							}
					}

				}

			});
