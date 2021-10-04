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