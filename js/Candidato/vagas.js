var todasVagas;
var cont = 0;

criaMenuBotoesLetras();
requisicao();

$(document).ready(function() {	
	$("[id^='letra']").click(function(){
		criaTabelaVagas($(this).text().charCodeAt(0));

		$("[id^='flip']").click(function(){
	    	$(this).next().slideToggle("slow");
	 		console.log("clicou");
  		});
 	});

	$("[id^='flip']").click(function(){
    	$(this).next().slideToggle("slow");
 		console.log("clicou");
  	});

});

function requisicao() {
	$.ajax({
        url : "http://localhost/Sistema-Frete/php/vagas.php",
        dataType : "json",

        success : function(data) {
        	todasVagas = data;
        	criaTabelaVagas("");
        },

        error: function(erro) {
        	console.log("Ocorreu um erro");
        }

    });
}

function criaMenuBotoesLetras() {
	var letra = String.fromCharCode(35);
	var conteudo = '<div class="btn btn-primary" id="letra'+letra+'">'+letra+'</div>';

	
	for (var i = 0; i != 26; ++i) {
		letra = String.fromCharCode(i + 65);
		conteudo += '<div class="btn btn-primary" id="letra'+letra+'">'+letra+'</div>';
	}

	$("#menuBotoes").append(conteudo);	
}

function criaTabelaVagas(letra) {
	var tabela = "";

	if(letra == "" || String.fromCharCode(letra) == "#")
		tabela += mostrarTodasVagas();

	else
		tabela += mostrarVagasLetra(letra);

	$("#nada").html(tabela);
}

function mostrarTodasVagas(){
	var str = "";

	for (var i = 0; i != todasVagas.length; i++) {
		if(todasVagas[i].length != 0){
			for(var j= 0; j != todasVagas[i].length; j++){
				str += '<p class="flip" id="flip'+cont+'"> <i class="fa fa-plus"></i> '+todasVagas[i][j].nome+'</p>'+
					    '<div class="panel" id="panel'+cont+'">'+
					    '<p>Empresa: '+todasVagas[i][j].empresa+'</p>'+
					    '<p>Local: '+todasVagas[i][j].local+'</p>'+
					    '<p>Quantidade: '+todasVagas[i][j].qtdade+' vagas</p>'+
					    '</div>';
				cont++;
			}
		}
	}

	return str;
}

function mostrarVagasLetra(letra){
	var str = "";
	letra -=  65;

	if(todasVagas[letra].length != 0){
		for(var j= 0; j != todasVagas[letra].length; j++) {
			str += '<p class="flip" id="flip'+cont+'"> <i class="fa fa-plus"></i> '+todasVagas[letra][j].nome+'</p>'+
				    '<div class="panel" id="panel'+cont+'">'+
				    '<p>Empresa: '+todasVagas[letra][j].empresa+'</p>'+
				    '<p>Local: '+todasVagas[letra][j].local+'</p>'+
				    '<p>Quantidade: '+todasVagas[letra][j].qtdade+' vagas</p>'+
				    '</div>';
			cont++;
		}
	}

	else{
		str += "Não há vagas com a letra "+ String.fromCharCode(letra+65); +" no momento"
	}

	console.log(str);

	return str;
}