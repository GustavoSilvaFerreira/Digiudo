$(main);
function main(){
	var x = document.querySelector('input[type="search"]');
	$(window).ready(function(){
		if($(window).width()<660){
				x.placeholder = "";
			}else{
				x.placeholder = "Pesquisar";
			}
		if($(window).width()<=480){
			$(".cabeca2").css("cursor","pointer");
			$(".lis2").hide();
			$(".cabeca2").css("background-image","url(imagens/icones/seta_baixo_branco.png)");
			$(".cabeca2").click(function(){	
				$(".lis2").slideToggle(500);
				$('li[class="lis2"]:even').css("background-color","#f7f7f7");
				$('li[class="lis2"]:odd').css("background-color","#f9f9f9");
				var aux = $(".cabeca2").css("background-image").split("/");
					var x = aux[aux.length-1].replace(")","");
					if(x == "seta_baixo_branco.png"){
						$(".cabeca2").css("background-image","url(imagens/icones/seta_cima_branco.png)");
					}else{
						$(".cabeca2").css("background-image","url(imagens/icones/seta_baixo_branco.png)");
					}
			});
		}else{
			$(".cabeca2").css("background-image","url()");
			$(".cabeca2").css("cursor","default");
			$(".cabeca2").unbind("click");
			$(".lis2").show();
		}
	});
	$(window).resize(function(){
			if($(window).width()>480){
				$(".cabeca").show();
				$(".lis").show();
				$(".lis2").show();
				$(".lis").load().css('display','inline');
				$(".cabeca2").css("cursor","default");
				$(".cabeca2").unbind("click");
				$(".cabeca2").css("background-image","url()");
			}else{	
				$(".lis2").hide();
				$(".cabeca2").css("background-image","url(imagens/icones/seta_baixo_branco.png)");
				$(".cabeca2").bind("click",function(){	
					$('li[class="lis2"]:even').css("background-color","#f7f7f7");
					$('li[class="lis2"]:odd').css("background-color","#f9f9f9");
					var aux = $(".cabeca2").css("background-image").split("/");
					var x = aux[aux.length-1].replace(")","");
					if(x == "seta_baixo_branco.png"){
						$(".lis2").slideToggle(500);
						$(".cabeca2").css("background-image","url(imagens/icones/seta_cima_branco.png)");	
					}else{
						$(".lis2").slideToggle(500);
						$(".cabeca2").css("background-image","url(imagens/icones/seta_baixo_branco.png)");					
					}
					//isso resolveu
					$(".lis2").stop(false,true);
				});
				$(".cabeca2").css("cursor","pointer");
				$(".lis").load().css('display','block');
				$(".lis").hide();
			}						
			if($(window).width()<660){
				x.placeholder = "";
			}else{
				x.placeholder = "Pesquisar";
			}	
	});	
		$(".cabeca").click(function(){	
			$(".lis").slideToggle(500);
			$('li[class="lis"]:even').css("background-color","#252525");
			$('li[class="lis"]:odd').css("background-color","#242424");
		});
}