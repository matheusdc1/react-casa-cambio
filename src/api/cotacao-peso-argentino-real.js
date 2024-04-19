export const buscarCotacaoPesoArgentinoReal = async () => {
  try {
    // Chama a API da cotação DOLAR-REAL
    const response = await fetch(
      "https://economia.awesomeapi.com.br/json/last/ARS-BRL"
    );

    const data = await response.json();
    const valorBRL = data.ARSBRL.ask;

    // Atualizando o estado com a cotação do Real arredondada para dois dígitos
    const cotacaoArredondada = parseFloat(valorBRL).toFixed(3);

    return cotacaoArredondada;
  } catch (error) {
    console.error("Erro ao buscar a cotação:", error);
    return null;
  }
};
