document.addEventListener('DOMContentLoaded', () => {
    // Mapeamento dos elementos do formulário e seções
    const agroForm = document.getElementById('agro-form');
    const simuladorSection = document.getElementById('simulador-section');
    const resultadoSection = document.getElementById('resultado-section');
    const btnVoltar = document.getElementById('btn-voltar');

    // Mapeamento dos textos do resultado
    const txtPorcentagem = document.getElementById('txt-porcentagem');
    const txtStatus = document.getElementById('txt-status');
    const txtDiagnostico = document.getElementById('txt-diagnostico');
    const txtRecomendacao = document.getElementById('txt-recomendacao');

    // Processamento do Diagnóstico Agroecológico
    agroForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Pegar valores digitados pelo usuário
        const nomeProdutor = document.getElementById('produtor').value;
        const totalHectares = document.getElementById('hectares').value;
        const tipoManejo = document.querySelector('input[name="manejo"]:checked').value;

        let pontuacao = 0;
        let statusTexto = "";
        let statusClasse = "";
        let diagnosticoTexto = "";
        let recomendacaoTexto = "";

        // Regras de negócio baseadas na sustentabilidade
        if (tipoManejo === "alto") {
            pontuacao = 98;
            statusTexto = "Altamente Sustentável";
            statusClasse = "bg-green";
            diagnosticoTexto = `A propriedade ${nomeProdutor} com ${totalHectares} hectares está a liderar a transformação ecológica da nossa região. O uso de rotação ativa protege o microbioma do solo e evita a erosão comum nas encostas do Paraná.`;
            recomendacaoTexto = "Mantenha o plano de manejo. Sugerimos que os alunos realizem uma visita de estudo ao seu sítio para mapear e partilhar a sua técnica com os outros produtores da comunidade.";
        } else if (tipoManejo === "medio") {
            pontuacao = 65;
            statusTexto = "Equilíbrio Moderado";
            statusClasse = "bg-orange";
            diagnosticoTexto = `O Sítio ${nomeProdutor} apresenta boas iniciativas de controle biológico em seus ${totalHectares} hectares, mas a falta de diversificação vegetal pode empobrecer os nutrientes do solo a médio prazo.`;
            recomendacaoTexto = "Recomendamos a inserção imediata de adubação verde (plantio de leguminosas) nas entrelinhas e a criação de faixas de retenção de água para evitar o escoamento superficial.";
        } else {
            pontuacao = 28;
            statusTexto = "Alto Impacto Crítico";
            statusClasse = "bg-red";
            diagnosticoTexto = `A análise em ${totalHectares} hectares detetou que a monocultura intensiva do(a) ${nomeProdutor} está a esgotar os recursos hídricos locais e a aumentar a vulnerabilidade a pragas devido à ausência de inimigos naturais.`;
            recomendacaoTexto = "Urgente: Iniciar a transição gradual para o Manejo Integrado (MIP). A nossa Escola do Campo disponibiliza gratuitamente o laboratório de compostagem orgânica para ajudar a reduzir em até 40% o uso de químicos no primeiro ano.";
        }

        // Escrever os resultados na tela
        txtPorcentagem.textContent = `${pontuacao}%`;
        txtStatus.textContent = statusTexto;
        txtStatus.className = `status-badge ${statusClasse}`;
        txtDiagnostico.textContent = diagnosticoTexto;
        txtRecomendacao.textContent = recomendacaoTexto;

        // Alternar visualização (Esconde o simulador e mostra o resultado)
        simuladorSection.classList.add('hidden');
        resultadoSection.classList.remove('hidden');
    });

    // Evento para voltar ao simulador
    btnVoltar.addEventListener('click', () => {
        agroForm.reset();
        resultadoSection.classList.add('hidden');
        simuladorSection.classList.remove('hidden');
    });
});