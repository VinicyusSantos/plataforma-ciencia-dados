window.CHAPTERS = window.CHAPTERS || [];

window.CHAPTERS.push({
  "id": "projeto-gridload",
  "number": "05",
  "sectionLabel": "Módulo",
  "title": "Projeto — GridLoad Intelligence BR",
  "description": "50 questões para fixar o escopo, arquitetura, decisões metodológicas, módulos, métricas, cronograma e limites do GridLoad Intelligence BR.",
  "material": {
    "title": "GridLoad Intelligence BR — Escopo Completo",
    "description": "Documento-base do projeto. Use-o para leitura e consulta durante as revisões.",
    "path": "materials/gridload-intelligence-br-escopo-completo.pdf"
  },
  "questions": [
    {
      "type": "Alternativa correta",
      "topic": "Visão geral",
      "prompt": "Qual descrição representa melhor o GridLoad Intelligence BR?",
      "options": [
        "Uma plataforma de Ciência de Dados para analisar a carga, prever sua evolução, antecipar situações relevantes e gerar alertas interpretáveis.",
        "Um sistema de controle em tempo real para decidir o despacho de usinas do SIN.",
        "Uma ferramenta exclusivamente meteorológica.",
        "Um projeto de Deep Learning apenas para anomalias."
      ],
      "answer": 0,
      "explanation": "O projeto combina dados reais, EDA, feature engineering e Machine Learning para previsão, picos, rampas, anomalias e alertas interpretáveis. Controle real da rede não faz parte do escopo.",
      "reference": "Seções 1, 20 e 31 — Ideia do projeto e limites do escopo."
    },
    {
      "type": "Alternativa correta",
      "topic": "GridAlert",
      "prompt": "Qual é o papel do GridAlert?",
      "options": [
        "Treinar um novo modelo que substitui os demais módulos.",
        "Consolidar Forecast, Peak Risk, Ramp Risk e Anomaly Score em um estado interpretável.",
        "Executar despacho ótimo de geração.",
        "Coletar os dados brutos do ONS e INMET."
      ],
      "answer": 1,
      "explanation": "O GridAlert é a camada final de interpretação. Ele transforma sinais técnicos em NORMAL, ATENÇÃO ou CRÍTICO, sem exigir outro modelo complexo.",
      "reference": "Seções 1, 16 e 18 — Função do GridAlert."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Problema",
      "prompt": "Marque a pergunta que NÃO pertence ao problema que o GridLoad pretende responder.",
      "options": [
        "Qual será a demanda nas próximas horas?",
        "Estamos caminhando para um pico incomum?",
        "Qual usina deve ser ligada imediatamente para atender a demanda?",
        "A carga está aumentando mais rapidamente que o habitual?"
      ],
      "answer": 2,
      "explanation": "O projeto faz previsão, monitoramento e classificação de condições. Ele não toma decisões operacionais como indicar qual usina deve ser acionada.",
      "reference": "Seções 2, 20 e 31 — Perguntas do projeto e limites operacionais."
    },
    {
      "type": "Alternativa correta",
      "topic": "Objetivos",
      "prompt": "Qual alternativa resume o objetivo geral?",
      "options": [
        "Prever apenas a carga de uma hora à frente.",
        "Analisar e prever a demanda, antecipar picos e rampas, detectar anomalias e consolidar resultados em alertas.",
        "Otimizar o SIN em tempo real.",
        "Classificar apenas dias quentes e frios."
      ],
      "answer": 1,
      "explanation": "O objetivo geral reúne análise, previsão, picos, rampas, anomalias e um sistema de alertas para apoio ao monitoramento.",
      "reference": "Seção 3 — Objetivo geral."
    },
    {
      "type": "Alternativa correta",
      "topic": "Fontes de dados",
      "prompt": "Qual combinação de fontes está prevista?",
      "options": [
        "ONS para carga elétrica e INMET para meteorologia.",
        "ANEEL para carga horária e IBGE para temperatura.",
        "INMET para carga e ONS para precipitação.",
        "Somente dados sintéticos."
      ],
      "answer": 0,
      "explanation": "O ONS é a principal fonte da curva de carga; o INMET fornece variáveis meteorológicas.",
      "reference": "Seção 5 — Fontes de dados."
    },
    {
      "type": "Alternativa correta",
      "topic": "Escopo inicial",
      "prompt": "Como o documento recomenda começar em relação aos subsistemas?",
      "options": [
        "Com todos os subsistemas simultaneamente.",
        "Com um único subsistema, provavelmente Nordeste ou Sudeste/Centro-Oeste, ampliando depois se estiver estável.",
        "Somente Norte durante todo o projeto.",
        "Sem usar a informação de subsistema."
      ],
      "answer": 1,
      "explanation": "A estratégia é reduzir a complexidade inicial começando por um subsistema e expandir depois.",
      "reference": "Seção 5 — Subsistemas."
    },
    {
      "type": "Alternativa correta",
      "topic": "Meteorologia",
      "prompt": "Qual variável meteorológica deve ser estudada primeiro?",
      "options": [
        "Temperatura",
        "Pressão atmosférica",
        "Velocidade do vento",
        "Radiação solar"
      ],
      "answer": 0,
      "explanation": "O documento prioriza temperatura e recomenda não adicionar muitas variáveis climáticas apenas porque estão disponíveis.",
      "reference": "Seção 5 — INMET e priorização da temperatura."
    },
    {
      "type": "Complete a frase",
      "topic": "Features temporais",
      "prompt": "load_lag_168h representa a carga de aproximadamente ______ antes.",
      "options": [
        "uma semana",
        "um dia",
        "seis horas",
        "um mês"
      ],
      "answer": 0,
      "explanation": "168 horas correspondem a sete dias, permitindo comparação com o mesmo horário da semana anterior.",
      "reference": "Seções 6 e 9 — Lags temporais."
    },
    {
      "type": "Alternativa correta",
      "topic": "Dataset",
      "prompt": "O que representa target_load_6h?",
      "options": [
        "A carga observada seis horas atrás.",
        "A carga alvo para previsão seis horas à frente.",
        "A média móvel das últimas seis horas.",
        "Um indicador binário de pico."
      ],
      "answer": 1,
      "explanation": "target_load_1h, target_load_6h e target_load_24h são alvos para diferentes horizontes futuros.",
      "reference": "Seção 6 — Dataset final."
    },
    {
      "type": "Alternativa correta",
      "topic": "Dataset",
      "prompt": "Qual coluna é proposta como alvo binário de pico nas próximas três horas?",
      "options": [
        "peak_next_3h",
        "ramp_1h",
        "rolling_mean_3h",
        "target_load_24h"
      ],
      "answer": 0,
      "explanation": "peak_next_3h é o target 0/1 do problema de classificação antecipada de picos.",
      "reference": "Seções 6 e 10 — Dataset e Peak Intelligence."
    },
    {
      "type": "Alternativa correta",
      "topic": "EDA",
      "prompt": "Por que o EDA é realizado antes da modelagem?",
      "options": [
        "Porque substitui os modelos preditivos.",
        "Porque permite entender a carga e ajuda a definir o que significa pico e rampa elevada.",
        "Porque serve apenas para desenhar o dashboard.",
        "Porque remove a necessidade de dados meteorológicos."
      ],
      "answer": 1,
      "explanation": "O EDA investiga padrões horários, semanais, sazonais, distribuição, rampas, picos, temperatura e autocorrelação; também fundamenta os limites de pico e rampa.",
      "reference": "Seção 7 — Módulo 1: EDA."
    },
    {
      "type": "Alternativa correta",
      "topic": "EDA",
      "prompt": "Qual comparação temporal é explicitamente sugerida?",
      "options": [
        "t apenas com t-1 minuto.",
        "t com t-24h e t-168h.",
        "Somente anos diferentes, sem considerar a hora.",
        "Carga com variáveis financeiras."
      ],
      "answer": 1,
      "explanation": "Comparar t com 24h e 168h antes ajuda a observar repetição diária e semanal.",
      "reference": "Seção 7 — Análises principais do EDA."
    },
    {
      "type": "Alternativa correta",
      "topic": "EDA",
      "prompt": "Qual item também aparece entre as análises principais do EDA?",
      "options": [
        "Horários mais comuns de pico e rampas positivas/negativas.",
        "Despacho ótimo de geração.",
        "Fluxo de potência do SIN.",
        "Otimização de bateria."
      ],
      "answer": 0,
      "explanation": "O EDA inclui horários de pico, rampas positivas e negativas, distribuição da carga, relação com temperatura e autocorrelação.",
      "reference": "Seção 7 — Análises principais do EDA."
    },
    {
      "type": "Alternativa correta",
      "topic": "Load Forecast",
      "prompt": "Quais horizontes foram escolhidos para o núcleo preditivo?",
      "options": [
        "t+1h, t+6h e t+24h",
        "t+5min, t+10min e t+15min",
        "t+7d e t+30d",
        "somente t+1h"
      ],
      "answer": 0,
      "explanation": "Esses horizontes permitem comparar previsões de curto prazo com a previsão do dia seguinte.",
      "reference": "Seção 8 — Horizontes do Load Forecast."
    },
    {
      "type": "Interpretação de fórmula",
      "topic": "Baseline",
      "prompt": "No baseline L̂(t+1)=L(t), qual é a ideia?",
      "options": [
        "Prever a próxima carga como igual à carga atual.",
        "Prever a próxima carga como zero.",
        "Usar apenas a temperatura.",
        "Usar a média anual."
      ],
      "answer": 0,
      "explanation": "É o baseline de persistence: o valor atual é usado como previsão do próximo passo.",
      "reference": "Seção 8 — Baseline."
    },
    {
      "type": "Alternativa correta",
      "topic": "Baseline",
      "prompt": "Qual condição o projeto estabelece para o modelo de ML?",
      "options": [
        "Ele precisa superar os baselines.",
        "Ele precisa ter mais parâmetros que a regressão linear.",
        "Ele deve ser Deep Learning.",
        "Ele pode ser pior que o baseline se o dashboard for melhor."
      ],
      "answer": 0,
      "explanation": "Os baselines definem uma referência mínima; a complexidade do modelo só se justifica se houver ganho real.",
      "reference": "Seção 8 — Baselines e modelos."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Modelos",
      "prompt": "Marque a alternativa INCORRETA sobre a estratégia de modelagem.",
      "options": [
        "Começar com Linear Regression.",
        "Usar XGBoost ou LightGBM.",
        "Random Forest pode entrar como comparação.",
        "Comparar obrigatoriamente 15 algoritmos e incluir Deep Learning no MVP."
      ],
      "answer": 3,
      "explanation": "O documento evita competição excessiva. Deep Learning fica fora do MVP e o conjunto de modelos é propositalmente enxuto.",
      "reference": "Seção 8 — Modelos."
    },
    {
      "type": "Resultado do código",
      "topic": "Features temporais",
      "prompt": "Qual é a finalidade conceitual deste encoding?",
      "options": [
        "Representar a natureza cíclica das horas do dia.",
        "Converter MW em GW.",
        "Criar média móvel de 24h.",
        "Calcular residual."
      ],
      "answer": 0,
      "explanation": "Seno e cosseno representam a hora de modo cíclico, preservando a proximidade entre 23h e 0h.",
      "reference": "Seção 9 — Encoding cíclico da hora.",
      "code": "hour_sin = sin(2*pi*h/24)\nhour_cos = cos(2*pi*h/24)"
    },
    {
      "type": "Alternativa correta",
      "topic": "Rolling features",
      "prompt": "O que rolling_mean_6h resume?",
      "options": [
        "O nível médio recente da carga em uma janela de seis horas.",
        "A diferença entre a carga atual e a de seis dias atrás.",
        "A probabilidade de pico nas próximas seis horas.",
        "O número de feriados nos últimos seis meses."
      ],
      "answer": 0,
      "explanation": "Rolling means resumem o comportamento recente em uma janela móvel. O projeto propõe médias de 3h, 6h e 24h.",
      "reference": "Seção 9 — Rolling features."
    },
    {
      "type": "Alternativa correta",
      "topic": "Features temporais",
      "prompt": "Qual grupo contém somente features de calendário citadas?",
      "options": [
        "hour, weekday, month, weekend, holiday",
        "RMSE, MAE, MAPE, F1, PR-AUC",
        "peak_next_3h, high_ramp_next_3h, target_load_6h",
        "residual, anomaly_score, peak_risk"
      ],
      "answer": 0,
      "explanation": "O projeto usa hora, dia da semana, mês, fim de semana e feriado como features derivadas de calendário.",
      "reference": "Seções 5 e 9 — Calendário."
    },
    {
      "type": "Alternativa correta",
      "topic": "Features temporais",
      "prompt": "Qual conjunto contém lags explicitamente listadas?",
      "options": [
        "1h, 2h, 3h, 24h, 48h e 168h",
        "5min, 10min, 15min e 30min",
        "7d, 30d e 365d apenas",
        "Somente 1h e 24h"
      ],
      "answer": 0,
      "explanation": "A lista proposta inclui lags curtas e referências diária e semanal.",
      "reference": "Seção 9 — Lags."
    },
    {
      "type": "Alternativa correta",
      "topic": "Peak Intelligence",
      "prompt": "Como o documento exemplifica a classificação inicial por percentis?",
      "options": [
        "Abaixo de P90 normal; P90–P97 elevado; a partir de P97 muito elevado.",
        "Abaixo de P50 crítico; P50–P75 elevado; acima de P75 normal.",
        "Todo valor acima da média é crítico.",
        "Limites fixos em MW independentes do histórico."
      ],
      "answer": 0,
      "explanation": "P90 e P97 são exemplos iniciais; os limites exatos devem ser definidos após análise dos dados.",
      "reference": "Seção 10 — Peak Intelligence."
    },
    {
      "type": "Alternativa correta",
      "topic": "Peak Intelligence",
      "prompt": "Qual é a saída desejada do target peak_next_3h?",
      "options": [
        "Probabilidade de pico nas próximas três horas.",
        "Valor exato da umidade de amanhã.",
        "Usina que deve ser acionada.",
        "Preço de energia."
      ],
      "answer": 0,
      "explanation": "O módulo trata a antecipação de picos como um problema de classificação binária e produz uma probabilidade de pico.",
      "reference": "Seção 10 — Problema de ML do Peak Intelligence."
    },
    {
      "type": "Alternativa correta",
      "topic": "Peak Intelligence",
      "prompt": "Qual conjunto contém apenas entradas citadas para o Peak Intelligence?",
      "options": [
        "Carga atual, lags, médias móveis, temperatura, hora e dia.",
        "Preço da soja, câmbio e taxa Selic.",
        "Fluxo de potência e despacho de usinas.",
        "Somente o nome do subsistema."
      ],
      "answer": 0,
      "explanation": "Essas são as entradas exemplificadas para antecipar picos nas próximas três horas.",
      "reference": "Seção 10 — Entradas do Peak Intelligence."
    },
    {
      "type": "Cenário aplicado",
      "topic": "Peak Intelligence",
      "prompt": "Se uma carga futura prevista está acima do P97 histórico, como a abordagem inicial a classificaria?",
      "options": [
        "Muito elevada",
        "Normal",
        "Obrigatoriamente anômala",
        "Sem classificação"
      ],
      "answer": 0,
      "explanation": "Na regra ilustrativa, valores iguais ou superiores ao P97 entram na faixa muito elevada. Isso não equivale automaticamente a anomalia.",
      "reference": "Seção 10 — Percentis históricos para pico."
    },
    {
      "type": "Interpretação de fórmula",
      "topic": "Ramp Intelligence",
      "prompt": "O que uma Ramp_t positiva indica em Ramp_t=L_t-L_(t-1)?",
      "options": [
        "A carga aumentou em relação ao período anterior.",
        "A carga ficou constante.",
        "A previsão ficou acima da carga real.",
        "O dia é feriado."
      ],
      "answer": 0,
      "explanation": "A rampa mede a variação entre instantes consecutivos; valor positivo significa aumento da carga.",
      "reference": "Seção 11 — Ramp Intelligence."
    },
    {
      "type": "Cálculo aplicado",
      "topic": "Ramp Intelligence",
      "prompt": "Às 18h a carga era 41.200 MW e às 19h passou para 44.000 MW. Qual é a Ramp_19h?",
      "options": [
        "+2.800 MW/h",
        "+44.000 MW/h",
        "-2.800 MW/h",
        "+85.200 MW/h"
      ],
      "answer": 0,
      "explanation": "44.000 - 41.200 = +2.800 MW/h, exatamente o exemplo usado no documento.",
      "reference": "Seção 11 — Exemplo de rampa."
    },
    {
      "type": "Alternativa correta",
      "topic": "Ramp Intelligence",
      "prompt": "Qual regra inicial de Ramp Risk é sugerida?",
      "options": [
        "Ramp < P90 normal; P90–P97 elevada; acima de P97 muito elevada.",
        "Qualquer rampa positiva é crítica.",
        "Ramp < P10 crítica e acima de P20 normal.",
        "Não usar histórico."
      ],
      "answer": 0,
      "explanation": "A ideia é comparar a variação atual com percentis históricos para detectar variações excepcionalmente rápidas.",
      "reference": "Seção 11 — Ramp Risk."
    },
    {
      "type": "Alternativa correta",
      "topic": "Ramp Intelligence",
      "prompt": "Para que serve high_ramp_next_3h=0/1?",
      "options": [
        "Criar um target de classificação antecipada de rampa elevada nas próximas três horas.",
        "Armazenar a média das últimas três horas.",
        "Indicar se a temperatura é positiva.",
        "Medir o erro absoluto do forecast."
      ],
      "answer": 0,
      "explanation": "É um target binário proposto para prever antecipadamente uma rampa elevada.",
      "reference": "Seções 6 e 11 — Dataset e Ramp Intelligence."
    },
    {
      "type": "Interpretação de fórmula",
      "topic": "Anomaly Detection",
      "prompt": "Como é calculado o residual na versão simples?",
      "options": [
        "Carga real menos carga prevista.",
        "Carga prevista menos temperatura.",
        "Carga real dividida por P97.",
        "Média móvel menos lag semanal."
      ],
      "answer": 0,
      "explanation": "Residual_t = Load_real,t - Load_previsto,t. Desvios muito fora do padrão histórico podem sinalizar comportamento incomum.",
      "reference": "Seção 12 — Anomaly Detection."
    },
    {
      "type": "Cálculo aplicado",
      "topic": "Anomaly Detection",
      "prompt": "Se o previsto era 38.500 MW e o real foi 43.200 MW, qual residual?",
      "options": [
        "+4.700 MW",
        "-4.700 MW",
        "+81.700 MW",
        "+1,12 MW"
      ],
      "answer": 0,
      "explanation": "43.200 - 38.500 = +4.700 MW.",
      "reference": "Seção 12 — Exemplo de residual."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Anomaly Detection",
      "prompt": "Marque a alternativa INCORRETA sobre o plano de anomalias.",
      "options": [
        "Começar com estatística dos resíduos.",
        "Isolation Forest pode ser extensão.",
        "Autoencoder é obrigatório no MVP.",
        "O forecast fornece referência do comportamento esperado."
      ],
      "answer": 2,
      "explanation": "A versão é propositalmente simples. Autoencoder fica de fora; Isolation Forest é apenas extensão se houver tempo.",
      "reference": "Seção 12 — Estratégia de Anomaly Detection."
    },
    {
      "type": "Alternativa correta",
      "topic": "Weather Intelligence",
      "prompt": "Qual experimento mede a contribuição da meteorologia?",
      "options": [
        "Comparar histórico+calendário contra histórico+calendário+temperatura+umidade.",
        "Treinar somente com temperatura.",
        "Adicionar todas as variáveis climáticas sem comparação.",
        "Comparar modelos apenas pela quantidade de features."
      ],
      "answer": 0,
      "explanation": "A proposta é um experimento A/B para verificar objetivamente se variáveis meteorológicas melhoram o forecast.",
      "reference": "Seção 13 — Weather Intelligence."
    },
    {
      "type": "Alternativa correta",
      "topic": "Weather Intelligence",
      "prompt": "Quais métricas são usadas nesse experimento?",
      "options": [
        "MAE, RMSE e MAPE",
        "Accuracy, Recall e F1",
        "Lead Time e False Alert Rate",
        "P90, P95 e P97"
      ],
      "answer": 0,
      "explanation": "Como o experimento mede melhora no forecast, a comparação usa as métricas de erro de previsão.",
      "reference": "Seção 13 — Comparação dos modelos."
    },
    {
      "type": "Alternativa correta",
      "topic": "Temperatura",
      "prompt": "Qual postura metodológica é recomendada para Load=f(Temperature)?",
      "options": [
        "Não assumir previamente a direção da relação; deixar os dados responderem.",
        "Assumir que temperatura sempre aumenta carga.",
        "Assumir que temperatura sempre reduz carga.",
        "Ignorar manhã, tarde, noite e tipo de dia."
      ],
      "answer": 0,
      "explanation": "A sensibilidade deve ser investigada empiricamente, inclusive por período do dia ou dias úteis/finais de semana.",
      "reference": "Seção 14 — Sensibilidade à temperatura."
    },
    {
      "type": "Alternativa correta",
      "topic": "Explainable AI",
      "prompt": "Qual pergunta é de explicabilidade LOCAL?",
      "options": [
        "Por que esta previsão específica de +6h ficou tão alta?",
        "Quais features são mais importantes globalmente?",
        "Qual subsistema tem maior carga média anual?",
        "Quantos alertas houve no mês?"
      ],
      "answer": 0,
      "explanation": "Explicabilidade local justifica uma previsão específica; a análise global resume importância das features no conjunto.",
      "reference": "Seção 15 — Explainable AI."
    },
    {
      "type": "Alternativa correta",
      "topic": "Explainable AI",
      "prompt": "Qual ferramenta está prevista para explicar as previsões?",
      "options": [
        "SHAP",
        "Autoencoder",
        "K-Means",
        "Grid Search como explicador"
      ],
      "answer": 0,
      "explanation": "SHAP é a ferramenta citada para análise global e local das previsões.",
      "reference": "Seção 15 — Explainable AI."
    },
    {
      "type": "Alternativa correta",
      "topic": "GridAlert",
      "prompt": "Quais sinais alimentam diretamente o GridAlert?",
      "options": [
        "Forecast, Peak Risk, Ramp Risk e Anomaly Score.",
        "Somente temperatura e umidade.",
        "Despacho de geração e fluxo de potência.",
        "Apenas carga atual."
      ],
      "answer": 0,
      "explanation": "O GridAlert consolida esses resultados para produzir uma interpretação única.",
      "reference": "Seção 16 — Entradas do GridAlert."
    },
    {
      "type": "Alternativa correta",
      "topic": "GridAlert",
      "prompt": "Qual cenário é compatível com NORMAL?",
      "options": [
        "Carga esperada, sem pico significativo, sem rampa elevada e sem anomalia relevante.",
        "Peak Risk muito alto + Ramp Risk muito alto.",
        "Qualquer indicador elevado.",
        "Toda previsão acima da carga atual."
      ],
      "answer": 0,
      "explanation": "NORMAL representa acompanhamento usual sem sinais relevantes.",
      "reference": "Seção 17 — Estado NORMAL."
    },
    {
      "type": "Alternativa correta",
      "topic": "GridAlert",
      "prompt": "Qual cenário pode levar a ATENÇÃO?",
      "options": [
        "Algum indicador importante, como Peak Risk ou Ramp Risk, está elevado.",
        "Todos os indicadores estão baixos.",
        "Somente falha do banco de dados.",
        "Apenas solicitação manual do operador."
      ],
      "answer": 0,
      "explanation": "ATENÇÃO sinaliza que algum indicador relevante merece acompanhamento ampliado.",
      "reference": "Seção 17 — Estado ATENÇÃO."
    },
    {
      "type": "Alternativa correta",
      "topic": "GridAlert",
      "prompt": "Qual cenário é exemplo de CRÍTICO?",
      "options": [
        "Peak Risk muito alto combinado com Ramp Risk muito alto.",
        "Carga real igual à prevista.",
        "Anomaly normal e nenhum pico previsto.",
        "Qualquer fim de semana."
      ],
      "answer": 0,
      "explanation": "CRÍTICO deve ser reservado para combinações excepcionalmente elevadas, evitando banalizar o alerta.",
      "reference": "Seção 17 — Estado CRÍTICO."
    },
    {
      "type": "Resultado do código",
      "topic": "GridAlert",
      "prompt": "Com peak_risk=0.85 e ramp_risk=0.82, qual status esta regra produz?",
      "options": [
        "CRITICO",
        "ATENCAO",
        "NORMAL",
        "Nenhum"
      ],
      "answer": 0,
      "explanation": "Os dois riscos são >=0,8, então a segunda condição é satisfeita.",
      "reference": "Seção 18 — Exemplo de regra do GridAlert.",
      "code": "if peak_risk < 0.5 and ramp_risk < 0.5:\n    status = 'NORMAL'\nelif peak_risk >= 0.8 and ramp_risk >= 0.8:\n    status = 'CRITICO'\nelse:\n    status = 'ATENCAO'"
    },
    {
      "type": "Alternativa incorreta",
      "topic": "GridAlert",
      "prompt": "Qual ação NÃO deve ser realizada pelo GridAlert?",
      "options": [
        "Classificar um período como ATENÇÃO.",
        "Explicar que pico e rampa estão elevados.",
        "Priorizar um período para acompanhamento ampliado.",
        "Ordenar que uma usina específica seja ligada imediatamente."
      ],
      "answer": 3,
      "explanation": "O GridAlert não dá ordens ao sistema; faz classificação e priorização de condições previstas.",
      "reference": "Seções 19 e 20 — Explicação e limites do GridAlert."
    },
    {
      "type": "Alternativa correta",
      "topic": "Dashboard",
      "prompt": "Quais três páginas principais são propostas?",
      "options": [
        "Overview, Analytics e Alerts",
        "Home, Billing e Users",
        "Train, Validation e Test",
        "Load, Solar e Wind"
      ],
      "answer": 0,
      "explanation": "Overview concentra os indicadores atuais; Analytics, os gráficos e análises; Alerts, o histórico e detalhes de eventos.",
      "reference": "Seção 22 — Dashboard."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Validação temporal",
      "prompt": "Marque a alternativa INCORRETA para a validação do projeto.",
      "options": [
        "Respeitar a ordem temporal.",
        "Separar treino, validação e teste por períodos cronológicos.",
        "Usar train_test_split(shuffle=True) para misturar passado e futuro.",
        "Evitar vazamento de informação futura."
      ],
      "answer": 2,
      "explanation": "O documento diz explicitamente para não usar shuffle=True; a separação precisa respeitar o tempo.",
      "reference": "Seção 23 — Validação temporal."
    },
    {
      "type": "Alternativa correta",
      "topic": "Métricas",
      "prompt": "Qual associação está correta?",
      "options": [
        "Forecast: MAE/RMSE/MAPE; Peak/Ramp: Precision/Recall/F1/PR-AUC.",
        "Forecast: Accuracy; Peak/Ramp: RMSE apenas.",
        "Forecast: Silhouette; Peak/Ramp: MAPE.",
        "Todos os módulos: somente Accuracy."
      ],
      "answer": 0,
      "explanation": "Forecast é regressão; Peak/Ramp tendem a ser classificação desbalanceada. Por isso o conjunto de métricas é diferente.",
      "reference": "Seção 24 — Métricas."
    },
    {
      "type": "Cálculo aplicado",
      "topic": "GridAlert",
      "prompt": "Se o alerta é emitido às 16:00 e o pico ocorre às 19:00, qual Lead Time?",
      "options": [
        "3 horas",
        "19 horas",
        "16 horas",
        "1 hora"
      ],
      "answer": 0,
      "explanation": "Lead Time mede a antecedência do alerta em relação ao evento; neste caso são três horas.",
      "reference": "Seção 24 — Lead Time."
    },
    {
      "type": "Alternativa correta",
      "topic": "Arquitetura e tecnologias",
      "prompt": "Qual afirmação está alinhada ao desenho final e à stack proposta?",
      "options": [
        "ONS+INMET alimentam pipeline/dataset/features/modelos; Streamlit é sugerido para o produto e FastAPI/PostgreSQL são opcionais no início.",
        "FastAPI e PostgreSQL precisam ser implantados antes do EDA.",
        "O produto depende obrigatoriamente de Deep Learning e Kubernetes.",
        "A arquitetura começa pelo GridAlert e só depois coleta os dados."
      ],
      "answer": 0,
      "explanation": "A arquitetura parte dos dados, passa por pipeline, features e módulos de ML até o GridAlert e dashboard. A stack é enxuta e infraestrutura adicional fica opcional.",
      "reference": "Seções 25 e 26 — Arquitetura final e tecnologias."
    },
    {
      "type": "Alternativa correta",
      "topic": "Organização e cronograma",
      "prompt": "Qual alternativa combina corretamente organização e planejamento?",
      "options": [
        "O repositório separa data/raw, interim e processed, notebooks/src/models/dashboard/reports; semanas 1–2 focam dados e 3–4 EDA+features.",
        "Tudo fica em um único app.py e a semana 1 começa pelo GridAlert.",
        "Não há pasta de dados e o cronograma começa por Docker.",
        "O repositório é dividido por algoritmo e as primeiras semanas são de Deep Learning."
      ],
      "answer": 0,
      "explanation": "O documento propõe separação por estágio dos dados e componentes do projeto. O cronograma começa por dados e só depois avança para EDA e features.",
      "reference": "Seções 27 e 28 — Estrutura do repositório e cronograma."
    },
    {
      "type": "Cenário aplicado",
      "topic": "MVP e escopo",
      "prompt": "Se o tempo apertar, qual decisão é mais coerente com o escopo fechado?",
      "options": [
        "Preservar ONS+INMET, EDA, Forecast 1h/6h/24h, Peak, Ramp, GridAlert e Dashboard; deixar API, múltiplos subsistemas e automação para depois.",
        "Remover Forecast e manter apenas PostgreSQL e API.",
        "Adicionar Grid Balance Intelligence, clustering e change point detection antes do MVP.",
        "Transformar o GridAlert em sistema de despacho e controle real da rede."
      ],
      "answer": 0,
      "explanation": "O MVP obrigatório concentra o fluxo central. Extensões como API, PostgreSQL, Docker, múltiplos subsistemas e atualização automática entram somente depois. Grid Balance, clustering, change point e controle real ficam fora do escopo.",
      "reference": "Seções 29, 30, 31, 32 e 33 — MVP, complementos, exclusões e resultado esperado."
    }
  ]
});
