export const buscarCotacaoEuroReal = async () => {
  try {
    // Chama a API da cotação EURO-REAL
    const response = await fetch(
      "https://economia.awesomeapi.com.br/json/last/EUR-BRL"
    );

    const data = await response.json();
    const valorBRL = data.EURBRL.ask;

    // Atualizando o estado com a cotação do Real arredondada para dois dígitos
    const cotacaoArredondada = parseFloat(valorBRL).toFixed(2);

    return cotacaoArredondada;
  } catch (error) {
    console.error("Erro ao buscar a cotação:", error);
    return null;
  }
};
