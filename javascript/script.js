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

        resulatdo.textContent = nome + " você percorreu uma distancia de " + distancia + "km em " + (parseInt(tempo.slice(0,2))) + "horas " + (parseInt(tempo.slice(3,5))) + "minutos " + (parseInt(tempo.slice(6))) + "segundos sua velocidade media foi de " + velocidade + "km/h o que corresponde a um pace de " + pace + "min/km com o peso de " + peso + "kg você queimou " + cal + "cal"
    }
    else
    {
        window.alert("Preencha todos os campos");
    }
}
