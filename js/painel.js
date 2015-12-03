// JavaScript Document
$(menu);
function menu(){
		$("#subMenu-minha-conta").hide();
		$("#menu-minha-conta").click(function(){
			var aux = $("#menu-minha-conta").css("background-image").split("/");
			var x = aux[aux.length-1].replace(")","");
			if(x == "seta_baixo.png"){
				$("#menu-minha-conta").css("background-image","url(imagens/icones/seta_cima.png)");
			}else{
				$("#menu-minha-conta").css("background-image","url(imagens/icones/seta_baixo.png)");
			}
			$("#subMenu-minha-conta").slideToggle(500);
		});	
		if($(window).width()<=480){
			$("#menu-superior").hide();
		}	
		var cont=0;
		$(".burger").click(function(){
			$("#menu-superior").slideToggle(500);
			if(cont==0){
				$("#menu-superior").css("border-top"," solid 2px #f70");
				$("#perfil").css("marginTop","60px");
				$("#perfil").css("transition","0.65s");
				$("div#breadcrumbs").css("border-top","none");
				$("div#breadcrumbs").css("top","222px");
				$("div#breadcrumbs").css("transition","0.65s");
				cont++;
			}else{
				$("#perfil").css("marginTop","-90px");
				$("#perfil").css("transition","0.75s");
				$("div#breadcrumbs").css("border-top"," solid 2px #f70");
				$("div#breadcrumbs").css("top","60px");
				$("div#breadcrumbs").css("transition","0.75s");
				cont--;
			}	
		});	
}


	
	