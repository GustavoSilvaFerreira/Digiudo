
//Anuncios
$(anuncios);
function anuncios(){
	//muda só o caminho
	var img = [{caminho:"imagens/comprar/energizesuavidasquared.jpg",coment:"Imagem do produto energize sua vida", classe:"anuncio1"},
				{caminho:"imagens/comprar/hm_dreamweaver.jpg" ,coment:"Imagem do produto dreamweaver total", classe:"anuncio1"},
				{caminho:"imagens/comprar/capahotmart.jpg",coment:"Imagem do produto máquina de falar inglês", classe:"anuncio1"},
				{caminho:"imagens/comprar/AudioJusLogo.jpg" ,coment:"Imagem do produto concurso publico", classe:"anuncio1"},
				{caminho:"imagens/comprar/Semtitulo.jpg" ,coment:"Imagem do produto super planilha de custo", classe:"anuncio1"},
				{caminho:"imagens/comprar/capalivro.jpg" ,coment:"Imagem do produto cuide bem de seu carro", classe:"anuncio1"},
				{caminho:"imagens/comprar/fujii.jpg" ,coment:"Imagem do produto decorações com balões", classe:"anuncio1"},
				{caminho:"imagens/comprar/bonecas.jpg" ,coment:"Imagem do produto boneca de pano", classe:"anuncio1"},
				{caminho:"imagens/comprar/bannerhotmart.jpg" ,coment:"Imagem do produto danos morais", classe:"anuncio1"},];
	//muda só o conteudo
	var h2 = [{classe:"dest",conteudo:"Energize Sua Vida"}, 
				{classe:"dest",conteudo:"Dreamweaver Total"},
				{classe:"dest",conteudo:"Máquina de Falar Inglês"},
				{classe:"dest",conteudo:"Concurso Publico"},
				{classe:"dest",conteudo:"Super Planilha de Custo"},
				{classe:"dest",conteudo:"Cuide Bem do Seu Carro"},
				{classe:"dest",conteudo:"Decoração com Balões"},
				{classe:"dest",conteudo:"Bonecas de Pano Artesanais"},
				{classe:"dest",conteudo:"Danos Morais - Guia Prático"},];
	// muda só o conteudo
	var p1 = [{classe:"tvideo",conteudo:"eBook"},
				{classe:"tvideo",conteudo:"Video"},
				{classe:"tvideo",conteudo:"Video"},
				{classe:"tvideo",conteudo:"Áudio"},
				{classe:"tvideo",conteudo:"Video"},
				{classe:"tvideo",conteudo:"eBook"},
				{classe:"tvideo",conteudo:"Video"},
				{classe:"tvideo",conteudo:"Video"},
				{classe:"tvideo",conteudo:"eBook"},];
	// Muda só o preço
	var p2 = [{conteudo:"Por apenas:",preco:"R$ 36,89."},
				{conteudo:"Por apenas:",preco:"R$ 91,69."},
				{conteudo:"Por apenas:",preco:"R$ 56,99."},
				{conteudo:"Por apenas:",preco:"R$ 11,59."},
				{conteudo:"Por apenas:",preco:"R$ 15,00."},
				{conteudo:"Por apenas:",preco:"R$ 3,45."},
				{conteudo:"Por apenas:",preco:"R$ 12,91."},
				{conteudo:"Por apenas:",preco:"R$ 18,55."},
				{conteudo:"Por apenas:",preco:"R$ 16,89."}];
	//igual para todos
	var input = [{tipo:"submit",valor:"Adicionar ao Carrinho",classe:"boton"},
				{tipo:"submit",valor:"Adicionar ao Carrinho",classe:"boton"},
				{tipo:"submit",valor:"Adicionar ao Carrinho",classe:"boton"},
				{tipo:"submit",valor:"Adicionar ao Carrinho",classe:"boton"},
				{tipo:"submit",valor:"Adicionar ao Carrinho",classe:"boton"},
				{tipo:"submit",valor:"Adicionar ao Carrinho",classe:"boton"},
				{tipo:"submit",valor:"Adicionar ao Carrinho",classe:"boton"},
				{tipo:"submit",valor:"Adicionar ao Carrinho",classe:"boton"},
				{tipo:"submit",valor:"Adicionar ao Carrinho",classe:"boton"}];
	//igual para todos
	var a = [{site:"#",classe:"link",conteudo:"Ver mais detalhes"},
				{site:"#",classe:"link",conteudo:"Ver mais detalhes"},
				{site:"#",classe:"link",conteudo:"Ver mais detalhes"},
				{site:"#",classe:"link",conteudo:"Ver mais detalhes"},
				{site:"#",classe:"link",conteudo:"Ver mais detalhes"},
				{site:"#",classe:"link",conteudo:"Ver mais detalhes"},
				{site:"#",classe:"link",conteudo:"Ver mais detalhes"},
				{site:"#",classe:"link",conteudo:"Ver mais detalhes"},
				{site:"#",classe:"link",conteudo:"Ver mais detalhes"}];
	var prin = document.querySelector("#dinamico");
	vBusca = [];
	for(var i=0; i<img.length; i++){
		var div = document.createElement('div');
		div.className = "anuncio";
		var imgs = document.createElement('img');
		imgs.src = img[i].caminho;
		imgs.alt = img[i].coment;
		imgs.className = img[i].classe;
		var h = document.createElement('h2');
		h.className = h2[i].classe;
		h.innerHTML = h2[i].conteudo;
		var par1 = document.createElement('p');
		par1.className = p1[i].classe;
		par1.innerHTML = p1[i].conteudo;
		var par2 = document.createElement('p');
		par2.innerHTML = p2[i].conteudo+"<br><span>"+p2[i].preco+"</span>";
		var inp = document.createElement('input');
		inp.type = input[i].tipo;
		inp.value = input[i].valor;
		inp.className = input[i].classe;
		var a1 = document.createElement('a');
		a1.href = a[i].site;
		a1.className = a[i].classe;
		a1.innerHTML = a[i].conteudo;
		div.appendChild(imgs);
		div.appendChild(h);
		div.appendChild(par1);
		div.appendChild(par2);
		div.appendChild(inp);
		div.appendChild(a1);
		prin.appendChild(div);
		vBusca.push(div);
	}
}
//Pesquisa
function busca(val){
	var res = [];
	var valor = val;
	var pesq = vBusca;
	for(var i=0; i<pesq.length;i++){
		var x = pesq[i].querySelector('h2').innerHTML;
		var y = x.toLowerCase();
		var val = valor.toLowerCase();
		if(valor != "" && y.indexOf(val) >=0){
			res.push(pesq[i]);
		}
	}
	if(res.length == 0){
		alert("Nenhum resultado encontrado!!!");
	}else{
		var prin = document.querySelector("#dinamico");
		prin.innerHTML = "";
		for(var j=0; j<res.length;j++){
			var div = document.createElement('div');
			div.innerHTML += res[j].innerHTML;
			div.className = "anuncio";
			prin.appendChild(div);
		}
	}
}
function buscaHead(){
	var valor = document.querySelector('#pesq').value;
	$('#busc').val("");
	busca(valor);
}
function buscaPrinc(){
	var valor = document.querySelector('#busc').value;
	$('#pesq').val("");
	busca(valor);
}
