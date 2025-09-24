const Questionario = [
  {
    pergunta: "Qual é a fórmula química do Nitreto de Gálio?",
    opcoes: ["GaN", "GN", "Ga3N2", "GdN", "N2Ga"],
    resposta: 0,
    texto: "Continue, muito bem! A fórmula do composto formado por um átomo de gálio e um átomo de nitrogênio é GaN. Notação simples, muito usada em literatura e indústria — “GaN” também é o nome comum do material em eletrônica/optoeletrônica."
  },
  {
    pergunta: "Qual é a estrutura cristalina mais estável do GaN em condições ambientais?",
    opcoes: ["Cúbica Amorfa", "Zink-blende (Cúbica)", "Rômboédrica", "Monoclínica", "Wurtzita (hexagonal)"],
    resposta: 4,
    texto: "Continue, muito bem! O GaN cristaliza predominantemente na forma wurtzita (hexagonal); a forma zinc-blende existe, mas é menos comum/estável. Na wurtzita cada átomo tem coordenação tetraédrica (4 vizinhos). Essa anisotropia estrutural gera efeitos de polarização que impactam o projeto de heteroestruturas e dispositivos (por exemplo HEMTs)."
  },
  {
    pergunta: "A largura da banda proibida (band gap) do GaN (wurtzita) é aproximadamente:",
    opcoes: ["1,1 eV", "3,4 eV", "2,0 eV", "5,8 eV", "0,5 eV"],
    resposta: 1,
    texto: "Continue, muito bem! O GaN tem uma banda proibida direta ≈ 3,4 eV, caracterizando-o como semicondutor de banda larga. Por ser direto e relativamente larga, é ideal para emissão eficiente na faixa azul/UV; também suporta altas tensões e operação em altas temperaturas, útil em eletrônica de potência."
  },
  {
    pergunta: "Qual descrição melhor define o tipo de ligação predominante no GaN?",
    opcoes: ["Metálica não-direcional", "Iônica pura", "Forças de van der Waals entre moléculas", "Covalmente com caráter parcialmente iônico (polar)", "Ligação por hidrogênio"],
    resposta: 3,
    texto: "Continue, muito bem! Os átomos compartilham elétrons (caráter covalente), porém a diferença de eletronegatividade entre N e Ga dá polarização parcial — não é puramente iônico. Esse caráter gera ligações direcionais e influência nas propriedades eletrônicas; em dispositivos, a polaridade cristalina influencia campos internos e desempenho de heterojunções."
  },
  {
    pergunta: "Qual método é comumente usado na indústria para crescer camadas finas de GaN para LEDs e dispositivos?",
    opcoes: ["MOCVD (Metal-Organic Chemical Vapor Deposition)", "Eletrólise em solução aquosa", "Fusão do composto em cadinhos a 500 ºC", "Cristalização por congelamento lento em água", "Sputtering sem controle de precursores"],
    resposta: 0,
    texto: "Continue, muito bem! MOCVD é o processo padrão para deposição epitaxial controlada de GaN usando precursores organometálicos (ex.: trimetilgálio) e NH₃. Outro método importante é HVPE (para camadas mais espessas). Substratos típicos: safira, SiC, ou silício; camadas buffer e condições de crescimento controladas reduzem defeitos."
  },
  {
    pergunta: "Quem, entre as opções, está corretamente associado ao desenvolvimento prático dos LEDs azuis baseados em GaN e ao Nobel correspondente?",
    opcoes: ["Thomas Edison", "Alexander Graham Bell", "Shuji Nakamura; Isamu Akasaki; Hiroshi Amano", "Marie Curie", "Nikola Tesla"],
    resposta: 2,
    texto: "Continue, muito bem! Os três foram reconhecidos com o Prêmio Nobel de Física (2014) pelo desenvolvimento dos LEDs azuis eficientes usando GaN, que possibilitaram iluminação branca eficiente. A invenção do LED azul levou ao avanço das fontes de luz branca de alta eficiência e transformou iluminação, displays e muitos dispositivos optoeletrônicos."
  },
  {
    pergunta: "Qual afirmação sobre o comportamento térmico do GaN é correta?",
    opcoes: ["GaN funde facilmente abaixo de 300 ºC.", "GaN tende a decompor-se antes de fundir; ponto de fusão efetivo é muito elevado (>~2500ºC).", "GaN é líquido à temperatura ambiente.", "GaN sublimará a 100 ºC sem decomposição.", "GaN derrete e solidifica várias vezes sem decomposição comum."],
    resposta: 1,
    texto: "Continue, muito bem! O GaN é termicamente muito estável; em pressão ambiente ele frequentemente se decompõe em vez de exibir um ponto de fusão bem definido abaixo de temperaturas muito altas (ordem de milhares de °C). Essa resistência térmica é útil em aplicações de alta temperatura, mas o comportamento complexo requer processos de fabricação e encapsulamento adequados."
  },
  {
    pergunta: "Qual alternativa lista aplicações principais do GaN de forma mais adequada?",
    opcoes: ["Fertilizantes e alimentos processados", "LEDs azuis/UV. transitores de potência (HEMTs/MOSFETs) e amplificadores RF para telecomunicações", "Vidro comum e cerâmica de cozinha", "Combustível automotivo e solventes e industriais", "Têxteis e pigmentos para tinta"],
    resposta: 1,
    texto: "Essas aplicações tiram proveito das propriedades ópticas (band gap direto para luz azul/UV), elétricas (alta ruptura de campo, operação em alta frequência) e térmicas do GaN. Exemplos práticos: LEDs e lasers azuis/violeta (iluminação, Blu-ray), carregadores rápidos e inversores mais compactos (eletrônica de potência), e amplificadores de potência RF para 5G e radar. LEDs UV de GaN também são usados para esterilização/filtração."
  }
];

let PerguntaAgora = 0;

function PerguntaAtual() 
{
  const OpcaoEscolhida = document.getElementById("Resultado");
  const Questao = Questionario[PerguntaAgora];

  OpcaoEscolhida.innerHTML = `
    <p><b>${Questao.pergunta}</b></p>
    ${Questao.opcoes.map((c, i) => `<div class="escolha" onclick="RespostaCerta(${i})">${c}</div>`).join("")}
    <div id="Conclusao"></div>
  `;
}

function RespostaCerta(selected) 
{
  const Questao = Questionario[PerguntaAgora];
  const Conclusao = document.getElementById("Conclusao");

  if (selected === Questao.resposta) 
    {
    Conclusao.innerHTML = `<p class="certo">Parabéns! ${Questao.texto}</p>`;
    setTimeout(() => 
        {
        PerguntaAgora++;
        if (PerguntaAgora < Questionario.length) 
            {
            PerguntaAtual();
            }  
        else   
            {
                document.getElementById("Resultado").innerHTML = "<p>🎉 Parabéns, você concluiu o questionário 🧐!</p>";
            }
        }, 
        5500);
    } 
    else 
    {
        Conclusao.innerHTML = `<p class="errado">❌ Errado! Continue tentando.</p>`;
    }
}

window.onload = PerguntaAtual;

