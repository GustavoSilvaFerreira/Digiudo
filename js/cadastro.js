
var cadastro = [{email:"digiudo@digiudo.com",senha:"digiudo"}];
	function validar(){
		var vnome = document.querySelector('input[name="login"]').value;
		var vsenha = document.querySelector('input[name="senha"]').value;
		var i = 0;
		while( i < cadastro.length){
			if(vnome == cadastro[i].email && vsenha==cadastro[i].senha){
				document.forms.form1.action = "painel.html";
				break;
			}	
			i++;
		}
		if(i>=cadastro.length){
			document.querySelector('input[name="senha"]').className="err";
			document.querySelector('input[name="login"]').className="err";
			return false;
		}
	}
	function novo(){
		var vnome = document.querySelector('input[name="nome"]').value;
		var vsobren = document.querySelector('input[name="sobrenome"]').value;
		var vmail = document.querySelector('input[name="cadastra-e-mail"]').value;
		var vmailconf = document.querySelector('input[name="cadastra-e-mail-conf"]').value;
		var vfone = document.querySelector('input[name="fone"]').value;
		var vsenha = document.querySelector('input[name="criarsenha"]').value;
		var vsenhaconf = document.querySelector('input[name="criarsenha-conf"]').value;		
		if(vsenha!=vsenhaconf&&vsenha!=""&&vsenhaconf!=""){
			document.querySelector('input[name="criarsenha-conf"]').className= "err";
			document.querySelector('input[name="cadastra-e-mail-conf"]').className= "inpcadastrar";
		}else{
			if(vmail!=vmailconf&&vmail!=""&&vmailconf!=""){
				document.querySelector('input[name="cadastra-e-mail-conf"]').className= "err";
				document.querySelector('input[name="criarsenha-conf"]').className= "inpcadastrar";
			}else{
				if(vnome!=""&&vsobren!=""&&vmail!=""&&vmailconf!=""&&vsenha!=""&&vsenhaconf!=""){
					cadastro.push({nome:vnome,sobrenome:vsobren,email:vmail,confemail:vmailconf,telefone:vfone,senha:vsenha,confsenha:vsenhaconf});					
						document.querySelector('input[name="nome"]').value="";
						document.querySelector('input[name="sobrenome"]').value="";		
						document.querySelector('input[name="cadastra-e-mail"]').value="";		
						document.querySelector('input[name="cadastra-e-mail-conf"]').value="";
						document.querySelector('input[name="fone"]').value="";		
						document.querySelector('input[name="criarsenha"]').value="";		
						document.querySelector('input[name="criarsenha-conf"]').value="";						
						document.querySelector('input[name="cadastra-e-mail-conf"]').className= "inpcadastrar";						
						document.querySelector('input[name="criarsenha-conf"]').className= "inpcadastrar";						
				}else{
					alert("Prencha os campos!");
				}
			}
		}		
	}

