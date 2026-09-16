window.CHAPTERS = window.CHAPTERS || [];

window.CHAPTERS.push({
  "id": "python-intermediario",
  "number": "02",
  "title": "Python Intermediário",
  "description": "30 questões práticas sobre comprehensions, lambda, map, filter, exceções, arquivos, JSON, CSV, datas, datetime, strings e regex.",
  "questions": [
    {
      "type": "Resultado do código",
      "topic": "List comprehensions",
      "prompt": "Qual será o valor de quadrados?",
      "code": "quadrados = [x ** 2 for x in range(4)]\nprint(quadrados)",
      "options": [
        "[1, 4, 9, 16]",
        "[0, 1, 4, 9]",
        "[0, 2, 4, 6]",
        "[0, 1, 2, 3]"
      ],
      "answer": 1,
      "explanation": "range(4) produz 0, 1, 2 e 3. A compreensão calcula x ** 2 para cada valor, gerando [0, 1, 4, 9]."
    },
    {
      "type": "Alternativa correta",
      "topic": "List comprehensions",
      "prompt": "Qual compreensão cria uma lista apenas com os números pares de 0 a 9?",
      "options": [
        "[x for x in range(10) if x % 2 == 0]",
        "[x if x % 2 == 0 for x in range(10)]",
        "[x for x in range(10) if x % 2]",
        "[x % 2 == 0 for x in range(10)]"
      ],
      "answer": 0,
      "explanation": "A condição vem depois do for quando funciona como filtro: [expressao for item in iteravel if condicao]."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "List comprehensions",
      "prompt": "Marque a alternativa INCORRETA sobre list comprehensions.",
      "options": [
        "Podem substituir certos loops simples que constroem listas.",
        "Podem conter uma condição para filtrar elementos.",
        "Sempre são mais legíveis que qualquer loop equivalente.",
        "Podem transformar cada elemento antes de adicioná-lo à lista."
      ],
      "answer": 2,
      "explanation": "List comprehensions podem ser muito concisas, mas expressões complexas podem ficar menos legíveis que um loop convencional. Elas não são sempre a melhor escolha."
    },
    {
      "type": "Resultado do código",
      "topic": "Dictionary comprehensions",
      "prompt": "Qual dicionário será criado?",
      "code": "dados = {x: x * 10 for x in range(1, 4)}\nprint(dados)",
      "options": [
        "{1: 10, 2: 20, 3: 30}",
        "{10: 1, 20: 2, 30: 3}",
        "{1, 10, 2, 20, 3, 30}",
        "{1: 1, 2: 4, 3: 9}"
      ],
      "answer": 0,
      "explanation": "Em {chave: valor for ...}, x é usado como chave e x * 10 como valor para x igual a 1, 2 e 3."
    },
    {
      "type": "Alternativa correta",
      "topic": "Dictionary comprehensions",
      "prompt": "Qual expressão cria um dicionário apenas com os itens de notas cujo valor seja maior ou igual a 7?",
      "code": "notas = {'Ana': 8, 'Bruno': 5, 'Carla': 9}",
      "options": [
        "{nome: nota for nome, nota in notas.items() if nota >= 7}",
        "[nome: nota for nome, nota in notas.items() if nota >= 7]",
        "{nome for nome, nota in notas.items() if nota >= 7}",
        "{notas.items() if nota >= 7}"
      ],
      "answer": 0,
      "explanation": "A compreensão de dicionário usa {chave: valor for ...}. O if ao final filtra os pares cuja nota é pelo menos 7."
    },
    {
      "type": "Resultado do código",
      "topic": "Funções lambda",
      "prompt": "O que será exibido?",
      "code": "dobro = lambda x: x * 2\nprint(dobro(6))",
      "options": [
        "6",
        "8",
        "12",
        "Erro, porque lambda não pode receber argumentos"
      ],
      "answer": 2,
      "explanation": "A lambda recebe x e retorna automaticamente o valor da expressão x * 2. Para x = 6, o resultado é 12."
    },
    {
      "type": "Complete a frase",
      "topic": "Funções lambda",
      "prompt": "Complete: uma função lambda em Python é normalmente usada para criar uma função ______ de expressão única.",
      "options": [
        "anônima",
        "assíncrona obrigatória",
        "recursiva obrigatória",
        "sem retorno"
      ],
      "answer": 0,
      "explanation": "Lambda cria uma pequena função anônima baseada em uma única expressão, embora ela também possa ser atribuída a uma variável."
    },
    {
      "type": "Alternativa correta",
      "topic": "Funções lambda",
      "prompt": "Em qual situação lambda é particularmente útil?",
      "options": [
        "Para definir funções longas com vários blocos de comandos.",
        "Como função curta passada como argumento, por exemplo em sorted().",
        "Para substituir todos os usos de def em qualquer programa.",
        "Para importar módulos sem usar import."
      ],
      "answer": 1,
      "explanation": "Lambdas são úteis para comportamentos curtos e locais, como uma função key passada para sorted, map ou filter. Para lógicas maiores, def costuma ser mais claro."
    },
    {
      "type": "Resultado do código",
      "topic": "map",
      "prompt": "Qual será a saída?",
      "code": "numeros = [1, 2, 3]\nresultado = list(map(lambda x: x + 1, numeros))\nprint(resultado)",
      "options": [
        "[1, 2, 3]",
        "[2, 3, 4]",
        "[2, 4, 6]",
        "map(2, 3, 4)"
      ],
      "answer": 1,
      "explanation": "map aplica a função a cada elemento. A lambda soma 1 a 1, 2 e 3, produzindo 2, 3 e 4. list materializa o iterador em uma lista."
    },
    {
      "type": "Alternativa correta",
      "topic": "map",
      "prompt": "Qual afirmação descreve corretamente map em Python 3?",
      "options": [
        "Retorna sempre uma lista pronta.",
        "Aplica uma função aos elementos de um ou mais iteráveis e retorna um iterador.",
        "Remove automaticamente todos os elementos falsos.",
        "Só funciona com funções criadas por lambda."
      ],
      "answer": 1,
      "explanation": "map retorna um objeto iterador em Python 3 e aceita qualquer função apropriada, não apenas lambdas. list(map(...)) é uma forma comum de materializar o resultado."
    },
    {
      "type": "Resultado do código",
      "topic": "filter",
      "prompt": "Qual será o resultado?",
      "code": "valores = [1, 2, 3, 4, 5]\npares = list(filter(lambda x: x % 2 == 0, valores))\nprint(pares)",
      "options": [
        "[1, 3, 5]",
        "[2, 4]",
        "[False, True, False, True, False]",
        "[1, 2, 3, 4, 5]"
      ],
      "answer": 1,
      "explanation": "filter mantém os elementos para os quais a função retorna um valor verdadeiro. Apenas 2 e 4 satisfazem x % 2 == 0."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "filter",
      "prompt": "Marque a alternativa INCORRETA sobre filter.",
      "options": [
        "Pode receber uma função que retorna True ou False para cada item.",
        "Retorna um iterador em Python 3.",
        "Serve principalmente para transformar cada elemento em outro valor.",
        "Pode ser convertido em lista com list()."
      ],
      "answer": 2,
      "explanation": "A função principal de filter é selecionar elementos. Transformar cada elemento é o papel típico de map ou de uma comprehension."
    },
    {
      "type": "Resultado do código",
      "topic": "Tratamento de exceções",
      "prompt": "O que será exibido?",
      "code": "try:\n    numero = int('abc')\nexcept ValueError:\n    print('valor inválido')",
      "options": [
        "abc",
        "0",
        "valor inválido",
        "O programa encerra sem executar o except"
      ],
      "answer": 2,
      "explanation": "int('abc') gera ValueError. Como essa exceção é capturada pelo except ValueError, a mensagem 'valor inválido' é exibida."
    },
    {
      "type": "Alternativa correta",
      "topic": "Tratamento de exceções",
      "prompt": "Qual é a função do bloco finally em uma estrutura try/except?",
      "options": [
        "Executar somente se nenhuma exceção ocorrer.",
        "Executar somente se uma exceção ocorrer.",
        "Executar ao final, tenha ocorrido uma exceção ou não, salvo interrupções excepcionais do processo.",
        "Substituir obrigatoriamente o bloco except."
      ],
      "answer": 2,
      "explanation": "finally é usado para ações de finalização que devem ocorrer independentemente do sucesso ou falha do bloco try, como liberar certos recursos."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Tratamento de exceções",
      "prompt": "Marque a alternativa INCORRETA.",
      "options": [
        "except ValueError pode tratar erros específicos de conversão de valores.",
        "É possível ter vários blocos except para tipos diferentes de exceção.",
        "Capturar Exception indiscriminadamente é sempre a melhor prática.",
        "O bloco else pode ser executado quando o try termina sem lançar uma exceção."
      ],
      "answer": 2,
      "explanation": "Capturar Exception de forma ampla pode esconder erros que deveriam ser tratados especificamente. Em geral, é preferível capturar as exceções esperadas e relevantes."
    },
    {
      "type": "Alternativa correta",
      "topic": "Leitura e escrita de arquivos",
      "prompt": "Qual opção abre um arquivo texto para leitura usando um gerenciador de contexto?",
      "options": [
        "with open('dados.txt', 'r', encoding='utf-8') as arquivo:",
        "open with 'dados.txt' as arquivo:",
        "with read('dados.txt') as arquivo:",
        "file('dados.txt', mode='read')"
      ],
      "answer": 0,
      "explanation": "with open(...) as arquivo é a forma idiomática. O gerenciador de contexto fecha o arquivo automaticamente ao sair do bloco."
    },
    {
      "type": "Alternativa correta",
      "topic": "Leitura e escrita de arquivos",
      "prompt": "Qual modo de abertura sobrescreve o conteúdo existente de um arquivo texto ao escrever?",
      "options": [
        "'r'",
        "'a'",
        "'w'",
        "'x+' obrigatoriamente"
      ],
      "answer": 2,
      "explanation": "O modo 'w' abre para escrita e trunca um arquivo existente. Já 'a' adiciona conteúdo ao final e 'r' é leitura."
    },
    {
      "type": "Resultado do código",
      "topic": "Leitura e escrita de arquivos",
      "prompt": "Supondo que dados.txt contenha exatamente duas linhas, 'A' e 'B', o que linhas = arquivo.readlines() normalmente retorna?",
      "code": "with open('dados.txt', 'r', encoding='utf-8') as arquivo:\n    linhas = arquivo.readlines()",
      "options": [
        "Uma única string 'AB'",
        "Uma lista de strings, normalmente preservando os caracteres de quebra de linha",
        "Um dicionário com uma chave para cada linha",
        "A quantidade de linhas como inteiro"
      ],
      "answer": 1,
      "explanation": "readlines() retorna uma lista em que cada elemento corresponde a uma linha. Em geral, o caractere de nova linha permanece no fim dos elementos quando existe no arquivo."
    },
    {
      "type": "Resultado do código",
      "topic": "JSON",
      "prompt": "O que json.loads recebe e retorna neste exemplo?",
      "code": "import json\ntexto = '{\"nome\": \"Ana\", \"idade\": 20}'\ndados = json.loads(texto)\nprint(dados['nome'])",
      "options": [
        "Recebe um arquivo e retorna CSV; imprime Ana.",
        "Recebe uma string JSON e retorna um objeto Python; imprime Ana.",
        "Recebe um dicionário Python e retorna bytes; imprime nome.",
        "Recebe apenas listas; gera erro."
      ],
      "answer": 1,
      "explanation": "json.loads desserializa uma string JSON para objetos Python. Nesse caso, resulta em um dicionário e dados['nome'] vale 'Ana'."
    },
    {
      "type": "Alternativa correta",
      "topic": "JSON",
      "prompt": "Qual função do módulo json grava um objeto Python diretamente em um arquivo aberto?",
      "options": [
        "json.load",
        "json.loads",
        "json.dump",
        "json.parse"
      ],
      "answer": 2,
      "explanation": "json.dump(objeto, arquivo) serializa e escreve no arquivo. json.dumps retorna uma string; load e loads fazem desserialização."
    },
    {
      "type": "Alternativa correta",
      "topic": "CSV",
      "prompt": "Ao usar csv.DictReader, como cada linha de dados é normalmente representada?",
      "options": [
        "Como um inteiro.",
        "Como um dicionário em que os cabeçalhos são usados como chaves.",
        "Como uma única string sem separação de campos.",
        "Como um conjunto sem ordem."
      ],
      "answer": 1,
      "explanation": "csv.DictReader usa os nomes das colunas, normalmente provenientes do cabeçalho, como chaves e retorna cada linha como um mapeamento."
    },
    {
      "type": "Resultado do código",
      "topic": "CSV",
      "prompt": "Qual é a finalidade principal de newline='' ao abrir arquivos CSV com o módulo csv, especialmente para escrita?",
      "options": [
        "Fazer o CSV usar apenas números.",
        "Permitir que o módulo csv controle corretamente as quebras de linha e evitar linhas extras em alguns ambientes.",
        "Converter automaticamente o arquivo para JSON.",
        "Desativar completamente todas as quebras de linha do arquivo."
      ],
      "answer": 1,
      "explanation": "A documentação recomenda abrir arquivos CSV com newline='' para que o módulo csv gerencie as convenções de fim de linha corretamente, evitando problemas como linhas em branco extras."
    },
    {
      "type": "Alternativa correta",
      "topic": "Datas e horários",
      "prompt": "Qual módulo da biblioteca padrão é usado com frequência para lidar com datas, horários e intervalos de tempo?",
      "options": [
        "datetime",
        "random",
        "pathlib apenas",
        "statistics"
      ],
      "answer": 0,
      "explanation": "O módulo datetime fornece classes como date, time, datetime e timedelta para trabalhar com datas e horários."
    },
    {
      "type": "Resultado do código",
      "topic": "Datas e horários",
      "prompt": "Qual data será representada por fim?",
      "code": "from datetime import date, timedelta\ninicio = date(2026, 9, 16)\nfim = inicio + timedelta(days=7)\nprint(fim)",
      "options": [
        "2026-09-17",
        "2026-09-21",
        "2026-09-23",
        "2026-10-16"
      ],
      "answer": 2,
      "explanation": "timedelta(days=7) representa sete dias. Somando sete dias a 16 de setembro de 2026, chegamos a 23 de setembro de 2026."
    },
    {
      "type": "Resultado do código",
      "topic": "datetime",
      "prompt": "O que será exibido?",
      "code": "from datetime import datetime\ndata = datetime(2026, 9, 16, 14, 30)\nprint(data.strftime('%d/%m/%Y %H:%M'))",
      "options": [
        "16/09/2026 14:30",
        "2026-09-16 14:30",
        "09/16/2026 02:30",
        "16-09-26"
      ],
      "answer": 0,
      "explanation": "strftime formata um datetime. %d é dia, %m mês, %Y ano com quatro dígitos, %H hora em 24 horas e %M minutos."
    },
    {
      "type": "Alternativa correta",
      "topic": "datetime",
      "prompt": "Para que serve datetime.strptime?",
      "options": [
        "Transformar um objeto datetime em uma string formatada.",
        "Interpretar uma string de data/hora segundo um formato e produzir um datetime.",
        "Calcular exclusivamente a diferença entre duas datas.",
        "Obter obrigatoriamente a hora atual da internet."
      ],
      "answer": 1,
      "explanation": "strptime faz o caminho de string para datetime de acordo com um formato. strftime faz o caminho oposto, de datetime para string formatada."
    },
    {
      "type": "Resultado do código",
      "topic": "Manipulação de strings",
      "prompt": "Qual será a saída?",
      "code": "texto = '  Python,SQL,Pandas  '\nitens = texto.strip().split(',')\nprint(itens)",
      "options": [
        "['  Python', 'SQL', 'Pandas  ']",
        "['Python', 'SQL', 'Pandas']",
        "'Python SQL Pandas'",
        "['Python,SQL,Pandas']"
      ],
      "answer": 1,
      "explanation": "strip remove os espaços externos da string inteira. Depois split(',') separa pelos caracteres de vírgula, gerando as três strings sem aqueles espaços das extremidades."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Manipulação de strings",
      "prompt": "Marque a alternativa INCORRETA sobre strings em Python.",
      "options": [
        "Strings são imutáveis.",
        "replace retorna uma nova string com as substituições realizadas.",
        "lower pode produzir uma versão em minúsculas da string.",
        "É possível alterar diretamente texto[0] com uma atribuição, como texto[0] = 'A'."
      ],
      "answer": 3,
      "explanation": "Strings são imutáveis. Seus caracteres não podem ser alterados por atribuição de índice; é necessário construir uma nova string."
    },
    {
      "type": "Resultado do código",
      "topic": "Regex",
      "prompt": "O que a expressão regular abaixo procura?",
      "code": "import re\npadrao = r'\\d+'\nresultado = re.findall(padrao, 'Pedido 12, lote 345')\nprint(resultado)",
      "options": [
        "Sequências de uma ou mais letras; retorna ['Pedido', 'lote'].",
        "Sequências de um ou mais dígitos; retorna ['12', '345'].",
        "Apenas o primeiro dígito de cada número; retorna ['1', '3'].",
        "Espaços em branco; retorna dois espaços."
      ],
      "answer": 1,
      "explanation": "\\d representa um dígito e + significa uma ou mais ocorrências. findall encontra todas as sequências correspondentes, resultando em '12' e '345'."
    },
    {
      "type": "Alternativa correta",
      "topic": "Regex",
      "prompt": "Qual é a diferença principal entre re.match e re.search?",
      "options": [
        "re.match tenta casar a partir do início da string, enquanto re.search procura uma correspondência em qualquer posição.",
        "re.search só funciona com números e re.match só com letras.",
        "re.match retorna sempre uma lista e re.search sempre uma string.",
        "Não existe diferença entre as duas funções."
      ],
      "answer": 0,
      "explanation": "re.match verifica uma correspondência começando no início da string. re.search percorre a string em busca da primeira correspondência possível."
    }
  ]
});
