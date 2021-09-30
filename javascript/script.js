function calcular() 
{
    const nome = document.getElementById('nome').value;
    const distancia = document.getElementById('distancia').value;
    const tempo = document.getElementById('tempo').value;
    const peso = document.getElementById('peso').value;
    const resulatdo = document.getElementById('resultado');

    if (nome != "" || peso != "" || tempo != "" || distancia != "")
    {
		const horas = (parseInt(tempo.slice(0,2)) + (parseInt(tempo.slice(3,5)) / 60) + (parseInt(tempo.slice(6)) / 3600))

		const min = (horas * 60)
		
		const velocidade = (distancia / horas).toFixed(2)

		const pace = (min / distancia).toFixed(2)

		const cal = (velocidade * peso * 0.0175 * min).toFixed(0)

        resulatdo.textContent = nome + " você percorreu uma distancia de " + distancia + "Km em " + tempo + " sua velocidade media foi de " + velocidade + "Km/h o que corresponde a um pace de " + pace + "min/Km com o peso de " + peso + "Kg você queimou " + cal + "cal"
    }
    else
    {
        window.alert("Preencha todos os campos");
    }
}

function mascara_tempo()
{
	var tempo_formatado = document.getElementById("tempo").value

	if (tempo_formatado[0] == ":" | tempo_formatado[1] == ":" | tempo_formatado[3] == ":" | tempo_formatado[4] == ":")
	{

	}
	else
	{
		if (tempo_formatado[2] != ":")
		{
			if (tempo_formatado[2] != undefined) 
			{
				document.getElementById("tempo").value = tempo_formatado.slice(0,2) + ":" + tempo_formatado[2];
			}
		}
		
		if (tempo_formatado[2] != undefined)
		{
			if (tempo_formatado[2] >= 6) 
			{
				document.getElementById("tempo").value = (parseInt(tempo_formatado.slice(0,2)) + 1 ) + ":" + (parseInt(tempo_formatado[2]) - 6);
			}
		}

		if (tempo_formatado[5] != ":")
		{
			if (tempo_formatado[5] != undefined) 
			{
				document.getElementById("tempo").value = tempo_formatado.slice(0,5) + ":" + tempo_formatado[5];
			}
		}

		if (tempo_formatado[5] != undefined)
		{
			if (tempo_formatado[5] >= 6) 
			{
				document.getElementById("tempo").value = tempo_formatado.slice(0,2) + ":" + (parseInt(tempo_formatado.slice(3,5)) + 1 ) + ":" + (parseInt(tempo_formatado[5]) - 6);
			}
		}
	}
}
