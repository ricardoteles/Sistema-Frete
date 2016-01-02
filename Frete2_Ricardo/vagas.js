var todasVagas;

$(document).ready(function() {
	criaMenuBotoesLetras();
	requisicao();

	$("[id^='letra']").click(function(){
		criaTabelaVagas($(this).text().charCodeAt(0));
 	});
});

function requisicao() {
	$.ajax({
        url : "./php/vagas.php",
        dataType : "json",

        success : function(data) {
        	todasVagas = data;
        	criaTabelaVagas("");
        }

    });
}

function criaMenuBotoesLetras() {
	var conteudo = "";
	var letra = '';
	
	for (var i = 0; i != 26; ++i) {
		letra = String.fromCharCode(i + 65);
		conteudo += '<div class="btn btn-primary" id="letra'+letra+'">'+letra+'</div>';
	}

	$("#menuBotoes").append(conteudo);	
}

function criaTabelaVagas(letra) {
	var tabela = "<thead>"+
				"<tr>"+
			      "<th>Nome</th>"+
			      "<th>Empresa</th>"+
			      "<th>Local</th>"+
			      "<th>Quantidade</th>"+
			    "</tr>"+
			  "</thead>"+
			  "<tbody>";

	if(letra == "")
		tabela += mostrarTodasVagas();

	else
		tabela += mostrarVagasLetra(letra);

	tabela +=  "</tbody>";

	$("#tabelaVagas").html(tabela);
}

function mostrarTodasVagas(){
	var str = "";


	for (var i = 0; i != todasVagas.length; i++) {
		if(todasVagas[i].length != 0){
			for(var j= 0; j != todasVagas[i].length; j++)
			str += "<tr class='vaga'>"+
		 		      	"<td>"+todasVagas[i][j].nome+"</td>"+
		 		      	"<td>"+todasVagas[i][j].empresa+"</td>"+
		 		      	"<td>"+todasVagas[i][j].local+"</td>"+
		 		      	"<td>"+todasVagas[i][j].qtdade+"</td>"+
	 		    	"</tr>";
		}
	}

	return str;
}

function mostrarVagasLetra(letra){
	var str = "";
	letra -=  65;

	if(todasVagas[letra].length != 0){
		for(var j= 0; j != todasVagas[letra].length; j++)
			str += "<tr class='vaga'>"+
		 		      	"<td>"+todasVagas[letra][j].nome+"</td>"+
		 		      	"<td>"+todasVagas[letra][j].empresa+"</td>"+
		 		      	"<td>"+todasVagas[letra][j].local+"</td>"+
		 		      	"<td>"+todasVagas[letra][j].qtdade+"</td>"+
	 		    	"</tr>";
	}

	return str;
}