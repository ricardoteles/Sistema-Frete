main();

function main() {
	var soma = 0;
	var produto = "computador+500gb+4gbram+18,5pog";
	var objeto = getDataBuscape(0, produto);
	var pages = parseInt(objeto.responseJSON.totalpages);
	var total = parseInt(objeto.responseJSON.totalresultsavailable);
	
	var obj;
	for (var i = 0; i < pages; i++) {
		obj = getDataBuscape(i, produto);
		for (var j = 0; j < obj.responseJSON.totalresultsreturned; j++) {
			soma += parseFloat(obj.responseJSON.offer[j].offer.price.value);
		}
	}

	var resultado = soma/total;

	document.getElementById("ultimo").innerHTML = resultado.toFixed(2);
	if (parseFloat(document.getElementById("valor").innerHTML) > resultado.toFixed(2)){
		document.getElementById("muda").setAttribute("class", "bg-danger text-white");	
		document.getElementById("muda1").innerHTML = "<i class='fa fa-close'></i>";	
	}
}

function getDataBuscape(index, produto) {
	var soma = 0;	
	var url = "http://bws.buscape.com.br/service/findOfferList/lomadee/65717751673178504d42633d/BR/?format=json&results=30&sourceId=35687759&keyword="+produto+"&page="+index;

	return $.ajax({
		url: url,
		success: function(result){
			return result;
		},
		error: function(result){
			console.log("error:", result.statusCode);
			return result;
		},
		async: false
	});
}
	
