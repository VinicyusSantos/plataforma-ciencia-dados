window.CHAPTERS = window.CHAPTERS || [];

window.CHAPTERS.push({
  id: "roadmap",
  kind: "content",
  navLabel: "ROADMAP",
  number: "",
  sectionLabel: "Guia de estudos",
  title: "ROADMAP",
  description: "Roadmap completo de Ciência de Dados para orientar a sequência dos estudos.",
  navMeta: "Guia de estudos",
  contentHtml: `
    <div class="roadmap-shell">
      <section class="roadmap-intro">
        <p class="eyebrow">Roadmap completo de Ciência de Dados</p>
        <h3>Da fundação à IA moderna</h3>
        <p>Use esta seção como referência contínua para decidir o que estudar em seguida. O conteúdo abaixo mantém a sequência e os tópicos definidos no roadmap original.</p>
      </section>

      <section class="roadmap-practical-order">
        <div class="roadmap-section-heading">
          <p class="eyebrow">A ordem que eu usaria na prática</p>
          <h3>6 níveis de progressão</h3>
        </div>

        <div class="roadmap-level-grid">
          <article class="roadmap-level-card">
            <span class="roadmap-level-number">Nível 1</span>
            <h4>Fundação</h4>
            <p>Python · Git · Linux · NumPy · Pandas · SQL</p>
          </article>
          <article class="roadmap-level-card">
            <span class="roadmap-level-number">Nível 2</span>
            <h4>Ciência de Dados</h4>
            <p>Probabilidade · Estatística · Visualização · EDA · Limpeza de dados · Feature Engineering</p>
          </article>
          <article class="roadmap-level-card">
            <span class="roadmap-level-number">Nível 3</span>
            <h4>Machine Learning</h4>
            <p>Regressão · Classificação · Árvores · Random Forest · XGBoost · Clustering · PCA · Avaliação · Cross-validation · Hyperparameter tuning · SHAP</p>
          </article>
          <article class="roadmap-level-card">
            <span class="roadmap-level-number">Nível 4</span>
            <h4>Data Scientist profissional</h4>
            <p>APIs · FastAPI · Docker · PostgreSQL · Cloud · Data pipelines · Testes · MLOps · MLflow · Monitoramento</p>
          </article>
          <article class="roadmap-level-card">
            <span class="roadmap-level-number">Nível 5</span>
            <h4>Especialização</h4>
            <p>Séries temporais · NLP · Computer Vision · Recommender Systems · Causal Inference · Experimentação · Deep Learning</p>
          </article>
          <article class="roadmap-level-card">
            <span class="roadmap-level-number">Nível 6</span>
            <h4>IA moderna</h4>
            <p>Transformers · LLMs · Embeddings · Vector databases · RAG · LLM Evaluation · Tool Calling · AI Agents · AI Engineering</p>
          </article>
        </div>
      </section>

      <section class="roadmap-full">
        <div class="roadmap-section-heading">
          <p class="eyebrow">Roadmap detalhado</p>
          <h3>50 tópicos</h3>
        </div>

        <div class="roadmap-topic-list">
          <article class="roadmap-topic"><span class="roadmap-topic-number">01</span><div><h4>Python</h4><p><strong>Fundamentos:</strong> variáveis, tipos (<code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>), listas, tuplas, conjuntos, dicionários, operadores, condicionais, loops, funções, módulos, imports.</p><p><strong>Intermediário:</strong> list comprehensions, dictionary comprehensions, funções lambda, <code>map</code>, <code>filter</code>, tratamento de exceções, leitura e escrita de arquivos, JSON, CSV, datas e horários, <code>datetime</code>, manipulação de strings, regex.</p><p><strong>Orientação a objetos:</strong> classes, objetos, atributos, métodos, herança, composição, encapsulamento.</p><p><strong>Avançado:</strong> iteradores, generators, decorators, context managers, type hints, <code>dataclasses</code>, programação funcional básica, gerenciamento de memória, complexidade de código.</p><p><strong>Ambiente:</strong> <code>pip</code>, <code>venv</code>, Poetry/uv, Jupyter, organização de projetos, requirements e packaging básico.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">02</span><div><h4>Git e desenvolvimento</h4><p>Git, GitHub/GitLab, <code>clone</code>, <code>add</code>, <code>commit</code>, <code>push</code>, <code>pull</code>, branches, merge, rebase básico, <code>.gitignore</code>, pull requests e resolução de conflitos.</p><p>Terminal Linux, Bash, SSH, variáveis de ambiente, permissões, processos e organização de arquivos.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">03</span><div><h4>NumPy</h4><p>Arrays, dimensões, shape, dtype, indexing, slicing, boolean indexing, broadcasting, operações vetorizadas, agregações, máscaras, matrizes, random e álgebra linear com NumPy.</p><p>Entender por que operações vetorizadas são preferíveis a loops Python.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">04</span><div><h4>Pandas</h4><p>Series, DataFrame, Index, <code>loc</code>, <code>iloc</code>, filtros, ordenação, <code>rename</code>, <code>drop</code>, <code>replace</code>, <code>apply</code>, <code>map</code>, <code>groupby</code>, <code>agg</code>, <code>transform</code>, pivot tables, <code>merge</code>, <code>join</code>, <code>concat</code>.</p><p>Dados ausentes, duplicados, inconsistências, tipos incorretos, strings, categorias, datas, wide → long, long → wide, pivot, melt, datetime, resampling, rolling windows, shifting e lags.</p><p>Depois, Polars.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">05</span><div><h4>SQL</h4><p><strong>Básico:</strong> <code>SELECT</code>, <code>FROM</code>, <code>WHERE</code>, <code>ORDER BY</code>, <code>GROUP BY</code>, <code>HAVING</code>.</p><p><strong>Agregações:</strong> <code>COUNT</code>, <code>SUM</code>, <code>AVG</code>, <code>MIN</code>, <code>MAX</code>.</p><p><strong>JOINs:</strong> INNER, LEFT, RIGHT, FULL.</p><p><strong>Intermediário:</strong> subqueries, CTE, <code>CASE WHEN</code>, views, UNION.</p><p><strong>Avançado:</strong> Window Functions, <code>ROW_NUMBER</code>, <code>RANK</code>, <code>LAG</code>, <code>LEAD</code>, partitions, query plans, índices e otimização.</p><p>Modelagem relacional, primary/foreign keys, normalização, transações, ACID e PostgreSQL.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">06</span><div><h4>Matemática para Data Science</h4><p><strong>Álgebra linear:</strong> escalares, vetores, matrizes, operações matriciais, produto escalar e matricial, transposição, inversa, sistemas lineares, norma, distância e independência linear.</p><p>Depois: autovalores, autovetores, decomposição de matrizes e SVD. Aplicações em PCA, regressão, embeddings e redes neurais.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">07</span><div><h4>Cálculo</h4><p>Funções, limites conceitualmente, derivadas, derivadas parciais, gradiente, regra da cadeia e otimização.</p><p>Depois: máximos e mínimos, gradient descent e funções multivariadas.</p><p>Não precisa começar estudando integrais extremamente complexas; derivadas, gradientes e otimização são mais importantes.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">08</span><div><h4>Probabilidade</h4><p>Espaço amostral, eventos, probabilidade condicional, independência, teorema de Bayes, variáveis aleatórias, esperança, variância e covariância.</p><p>Distribuições Bernoulli, Binomial, Poisson, Uniforme, Normal e Exponencial.</p><p>Depois: distribuições conjuntas, distribuições condicionais, Lei dos Grandes Números e Teorema Central do Limite.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">09</span><div><h4>Estatística</h4><p><strong>Descritiva:</strong> média, mediana, moda, quartis, percentis, variância, desvio padrão, amplitude, assimetria e curtose.</p><p><strong>Inferência:</strong> população, amostra, estimadores, intervalo de confiança e erro padrão.</p><p><strong>Testes de hipóteses:</strong> hipótese nula, hipótese alternativa, p-value, nível de significância, erro tipo I, erro tipo II e poder estatístico.</p><p>Conheça teste t, qui-quadrado, ANOVA e testes não paramétricos.</p><p><strong>Relação entre variáveis:</strong> covariância, correlação de Pearson, Spearman e causalidade × correlação.</p><p>Depois: bootstrap, sampling, experimentação e testes A/B.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">10</span><div><h4>Visualização de dados</h4><p>Bibliotecas: Matplotlib, Seaborn e Plotly.</p><p>Aprenda quando utilizar histogramas, boxplots, scatter plots, line charts, bar charts, heatmaps e violin plots.</p><p>Mais importante: “O que este gráfico está tentando mostrar?”</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">11</span><div><h4>EDA</h4><p><strong>Estrutura:</strong> quantidade de registros, tipos das variáveis e cardinalidade.</p><p><strong>Qualidade:</strong> missing values, duplicatas, valores impossíveis e erros de coleta.</p><p><strong>Distribuições:</strong> média, mediana, dispersão, skewness e outliers.</p><p><strong>Relações:</strong> correlações, tendências, agrupamentos e relações não lineares.</p><p><strong>Tempo:</strong> tendência, sazonalidade e mudança estrutural.</p><p>Detectar <strong>data leakage</strong>.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">12</span><div><h4>Feature Engineering</h4><p>Criação de variáveis; encoding: One-Hot, Ordinal e Target; scaling: StandardScaler e MinMaxScaler; normalização; transformações log; binning.</p><p>Valores ausentes: remoção, imputação e imputação estatística.</p><p>Para tempo: lag features, rolling averages, diferenças, crescimento percentual, mês, trimestre, dia da semana e sazonalidade.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">13</span><div><h4>Fundamentos de Machine Learning</h4><p><strong>Tipos:</strong> supervisionado, não supervisionado, semi-supervisionado e reinforcement learning conceitualmente.</p><p><strong>Problemas:</strong> regressão, classificação, clustering, redução de dimensionalidade e detecção de anomalias.</p><p><strong>Conceitos:</strong> features, target, treino, validação, teste, generalização, underfitting, overfitting, bias e variance.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">14</span><div><h4>Regressão</h4><p>Regressão linear, mínimos quadrados, coeficientes, resíduos, interpretação e pressupostos.</p><p>Regressão polinomial, Ridge, Lasso e Elastic Net.</p><p><strong>Métricas:</strong> MAE, MSE, RMSE, MAPE e R².</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">15</span><div><h4>Classificação</h4><p>Regressão logística, KNN, Naive Bayes, Decision Tree, Random Forest e SVM.</p><p><strong>Métricas:</strong> accuracy, precision, recall, specificity, F1-score, ROC, AUC, PR-AUC e matriz de confusão.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">16</span><div><h4>Árvores e Ensemble Learning</h4><p><strong>Decision Trees:</strong> splits, Gini, entropy, profundidade e pruning.</p><p><strong>Bagging:</strong> Random Forest.</p><p><strong>Boosting:</strong> AdaBoost, Gradient Boosting, XGBoost, LightGBM e CatBoost.</p><p>Especialmente relevantes para dados tabulares.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">17</span><div><h4>Avaliação correta de modelos</h4><p><strong>Holdout:</strong> treino, validação e teste.</p><p><strong>Cross-validation:</strong> K-Fold, Stratified K-Fold, Group K-Fold e Time Series Split.</p><p><strong>Hyperparameter tuning:</strong> Grid Search, Random Search, Bayesian Optimization e Optuna.</p><p>Baseline, comparação justa, leakage, overfitting, threshold e calibração de probabilidade.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">18</span><div><h4>Pipelines</h4><p>Dados → Limpeza → Imputação → Encoding → Scaling → Feature Engineering → Modelo.</p><p><code>Pipeline</code> e <code>ColumnTransformer</code>. Usar pipelines também para evitar leakage.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">19</span><div><h4>Machine Learning não supervisionado</h4><p><strong>Clustering:</strong> K-Means, DBSCAN, Hierarchical Clustering e Gaussian Mixture Models.</p><p>Aprenda distância euclidiana, silhouette score e escolha de clusters.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">20</span><div><h4>Redução de dimensionalidade</h4><p><strong>PCA:</strong> componentes principais, variância explicada, autovetores e projeções.</p><p>Depois: t-SNE e UMAP; úteis especialmente para visualização, não como substitutos genéricos do PCA.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">21</span><div><h4>Detecção de anomalias</h4><p>Aplicações em fraude, segurança, sensores e operações financeiras.</p><p>Z-score, IQR, Isolation Forest, Local Outlier Factor e One-Class SVM.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">22</span><div><h4>Séries temporais</h4><p>Tendência, sazonalidade, ciclo, ruído, estacionariedade e autocorrelação.</p><p>ACF, PACF, lag e differencing.</p><p>Naive Forecast, Moving Average, Exponential Smoothing, AR, MA, ARMA, ARIMA, SARIMA e Holt-Winters.</p><p>Depois: Prophet e XGBoost para séries temporais; posteriormente LSTM e Temporal Transformers.</p><p>Jamais fazer split aleatório indiscriminadamente.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">23</span><div><h4>Interpretabilidade de modelos</h4><p>Feature importance, permutation importance, Partial Dependence Plot e ICE plots.</p><p>Depois SHAP: Shapley Values, explicações globais e locais e dependence plots.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">24</span><div><h4>Engenharia de dados básica</h4><p>CSV, JSON, Parquet e Avro conceitualmente.</p><p>ETL/ELT: Fonte → Extract → Transform → Load → Data Warehouse.</p><p>Data Lake, Data Warehouse, Lakehouse, OLTP e OLAP.</p><p>Posteriormente: Airflow, Dagster, dbt e Spark.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">25</span><div><h4>APIs</h4><p>HTTP, REST, GET, POST, PUT, DELETE, JSON, headers, status codes, autenticação e tokens.</p><p>Python: <code>requests</code> e FastAPI.</p><p>Fluxo: Cliente → POST <code>/predict</code> → API → Modelo ML → Previsão.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">26</span><div><h4>Docker</h4><p>Containers, images, Dockerfile, volumes, networks e Docker Compose.</p><p>Objetivo: Modelo + API + dependências → Docker → roda em qualquer servidor.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">27</span><div><h4>Cloud</h4><p>Escolher AWS, Azure ou GCP.</p><p>Compute, storage, banco de dados, containers, IAM, networking e secrets.</p><p>Na AWS: EC2, S3, RDS, IAM e ECR; depois SageMaker.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">28</span><div><h4>MLOps</h4><p>Manter modelos em produção.</p><p><strong>Experiment tracking:</strong> parâmetros, métricas, modelos, datasets e experimentos.</p><p><strong>MLflow:</strong> experiments, runs, artifacts, model registry e versionamento.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">29</span><div><h4>Ciclo de vida do modelo</h4><p>Dados → Treinamento → Experimentação → Validação → Registro → Deploy → Monitoramento → Retreinamento.</p><p>Aprender model drift, data drift, concept drift, performance degradation e retraining.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">30</span><div><h4>CI/CD para Machine Learning</h4><p>GitHub Actions, pipelines, testes automatizados, linting e deploy automático.</p><p>Não precisa aprofundar como DevOps inicialmente.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">31</span><div><h4>Testes</h4><p>pytest, unit tests e integration tests.</p><p>Testar funções, transformações, schemas, dados e APIs.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">32</span><div><h4>Deep Learning</h4><p>Perceptron.</p><p>Redes neurais: neurônio, pesos, bias, activation function, forward propagation, loss, backpropagation e gradient descent.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">33</span><div><h4>Funções de ativação</h4><p>Sigmoid, Tanh, ReLU, Leaky ReLU e Softmax.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">34</span><div><h4>Treinamento de redes</h4><p>Loss functions, batch, epoch, learning rate e optimizer.</p><p>SGD, Momentum e Adam.</p><p>Depois: dropout, batch normalization, early stopping e regularization.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">35</span><div><h4>PyTorch</h4><p>Tensors, datasets, dataloaders, models, loss, optimizers, training loop e GPU.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">36</span><div><h4>CNN</h4><p>Convolução, kernel, pooling, feature maps e CNN.</p><p>LeNet, AlexNet, VGG e ResNet.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">37</span><div><h4>NLP</h4><p>Tokenização, normalização, stopwords, stemming e lemmatization.</p><p>Bag of Words, TF-IDF, n-grams, Word2Vec, GloVe e embeddings.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">38</span><div><h4>Redes para sequências</h4><p>RNN, LSTM e GRU.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">39</span><div><h4>Transformers</h4><p>Tokens, embeddings, positional encoding, attention, self-attention, multi-head attention, encoder e decoder.</p><p>Depois: BERT, GPT e T5.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">40</span><div><h4>LLMs</h4><p>Tokens, tokenização, context window, embeddings, inference, temperature, sampling e hallucination.</p><p>Depois: prompting, structured outputs, tool calling e function calling.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">41</span><div><h4>Embeddings</h4><p>Representações vetoriais e semânticas, cosine similarity, semantic search e vector representations.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">42</span><div><h4>Vector Databases</h4><p>pgvector, FAISS, Qdrant, Pinecone e Milvus.</p><p>Começar com PostgreSQL + pgvector.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">43</span><div><h4>RAG</h4><p>Documentos → Chunking → Embeddings → Vector Database.</p><p>Pergunta → embedding → busca → contexto → LLM → resposta.</p><p>Estudar chunking, embeddings, retrieval, similarity search, metadata filtering e reranking.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">44</span><div><h4>Avaliação de LLMs</h4><p>Hallucination, factualidade, relevância, groundedness, answer correctness, retrieval quality, test datasets, human evaluation e LLM-as-a-judge, com suas limitações.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">45</span><div><h4>AI Agents</h4><p>Depois de LLM + RAG.</p><p>LLM → reasoning/planejamento → tool → API → resultado → LLM.</p><p>Tools, function calling, memory, planning, orchestration, workflows e multi-agent systems.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">46</span><div><h4>Data Science aplicado a negócios</h4><p>Problema empresarial → Pergunta analítica → Dados → Modelo → Decisão → Impacto.</p><p>Escolher o modelo depois de definir o problema.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">47</span><div><h4>Métricas de negócio</h4><p>Receita, margem, churn, LTV, CAC, conversão, ROI e retenção.</p><p>Produzir resultado mensurável.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">48</span><div><h4>Experimentação</h4><p>A/B testing, hipótese, grupo controle, grupo tratamento, tamanho da amostra, significância estatística, poder estatístico e efeito mínimo detectável.</p><p>Depois: experimentos multivariados, sequential testing e causal inference.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">49</span><div><h4>Inferência causal</h4><p>Depois de estatística sólida, estudar correlação × causalidade, confounders, DAGs, treatment/control, propensity scores, matching, difference-in-differences e instrumental variables.</p></div></article>

          <article class="roadmap-topic"><span class="roadmap-topic-number">50</span><div><h4>Otimização</h4><p>Função objetivo, restrições, otimização linear, otimização inteira e programação matemática.</p><p><strong>Ferramentas:</strong> SciPy Optimize, OR-Tools e PuLP.</p></div></article>
        </div>
      </section>
    </div>
  `,
  questions: []
});
