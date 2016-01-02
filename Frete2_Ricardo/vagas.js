$(document).ready(function() {
	criaMenuBotoesLetras();
	requisicao();

	$("[id^='letra']").click(function(){
		// console.log($(this).text());
         // $("#tabelaVagas").hide();
 	});
});

function criaMenuBotoesLetras() {
	var conteudo = "";
	var letra = '';
	
	for (var i = 0; i != 26; ++i) {
		letra = String.fromCharCode(i + 65);
		conteudo += '<div class="btn btn-primary" id="letra'+letra+'">'+letra+'</div>';
	}

	$("#menuBotoes").append(conteudo);	
}

function requisicao() {
	$.ajax({
        url : "./php/vagas.php",
        dataType : "json",

        success : function(data) {
        	criaTabelaVagas(data);
        	console.log(data);
        }

    });
}

function criaTabelaVagas(data) {
	var tabela = "<thead>"+
				"<tr>"+
			      "<th>Nome</th>"+
			      "<th>Empresa</th>"+
			      "<th>Local</th>"+
			      "<th>Quantidade</th>"+
			    "</tr>"+
			  "</thead>"+
			  "<tbody>";

	for (var i = 0; i != data.length; ++i) {
		tabela += "<tr class='vaga'>"+
	 		      	"<td>"+data[i].nome+"</td>"+
	 		      	"<td>"+data[i].empresa+"</td>"+
	 		      	"<td>"+data[i].local+"</td>"+
	 		      	"<td>"+data[i].qtdade+"</td>"+
 		    	"</tr>";
	}

	tabela +=  "</tbody>";

	$("#tabelaVagas").html(tabela);
}