window.CHAPTERS = window.CHAPTERS || [];

window.CHAPTERS.push({
  "id": "fundamentos-python",
  "number": "01",
  "title": "Fundamentos de Python",
  "description": "30 questões práticas sobre variáveis, tipos de dados, coleções, operadores, condicionais, loops, funções, módulos e imports.",
  "questions": [
    {
      "type": "Alternativa correta",
      "topic": "Variáveis",
      "prompt": "Qual afirmação descreve corretamente uma variável em Python?",
      "options": [
        "Uma variável só pode armazenar números.",
        "Uma variável é um nome que referencia um valor e pode receber outro valor posteriormente.",
        "Toda variável precisa ter seu tipo declarado antes do uso.",
        "Uma variável em Python não pode mudar de tipo durante a execução."
      ],
      "answer": 1,
      "explanation": "Python possui tipagem dinâmica. O nome da variável referencia um objeto, e esse nome pode ser associado posteriormente a outro valor, inclusive de outro tipo."
    },
    {
      "type": "Resultado do código",
      "topic": "Variáveis",
      "prompt": "Qual será o valor exibido?",
      "code": "x = 10\nx = x + 5\nprint(x)",
      "options": [
        "5",
        "10",
        "15",
        "Erro"
      ],
      "answer": 2,
      "explanation": "Primeiro x recebe 10. Depois, x + 5 resulta em 15 e esse novo valor é atribuído novamente a x."
    },
    {
      "type": "Complete a frase",
      "topic": "Tipos de dados",
      "prompt": "Complete: o tipo usado para representar números inteiros em Python é ____.",
      "options": [
        "float",
        "str",
        "int",
        "bool"
      ],
      "answer": 2,
      "explanation": "int representa números inteiros, como -3, 0 e 42."
    },
    {
      "type": "Alternativa correta",
      "topic": "Tipos de dados",
      "prompt": "Qual valor abaixo é do tipo float?",
      "options": [
        "7",
        "7.0",
        "\"7.0\"",
        "True"
      ],
      "answer": 1,
      "explanation": "7.0 possui parte decimal e é representado como float. Já 7 é int, \"7.0\" é str e True é bool."
    },
    {
      "type": "Resultado do código",
      "topic": "Strings",
      "prompt": "O que será exibido?",
      "code": "nome = 'Python'\nprint(nome[0])",
      "options": [
        "P",
        "y",
        "Python",
        "Erro"
      ],
      "answer": 0,
      "explanation": "Índices de sequências em Python começam em 0. Portanto, nome[0] acessa o primeiro caractere: 'P'."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Booleanos",
      "prompt": "Marque a alternativa INCORRETA sobre valores booleanos.",
      "options": [
        "True e False são valores booleanos.",
        "Comparações como 10 > 3 produzem valores booleanos.",
        "O operador not pode inverter um valor booleano.",
        "Booleanos são escritos obrigatoriamente como strings: 'True' e 'False'."
      ],
      "answer": 3,
      "explanation": "True e False são palavras-chave booleanas, sem aspas. Com aspas, 'True' e 'False' seriam strings."
    },
    {
      "type": "Alternativa correta",
      "topic": "Listas",
      "prompt": "Qual característica é verdadeira sobre listas em Python?",
      "options": [
        "São imutáveis.",
        "Não podem conter valores de tipos diferentes.",
        "São mutáveis e mantêm uma ordem de elementos.",
        "Eliminam automaticamente valores duplicados."
      ],
      "answer": 2,
      "explanation": "Listas são coleções ordenadas e mutáveis. Elas podem conter tipos diferentes e podem possuir valores repetidos."
    },
    {
      "type": "Resultado do código",
      "topic": "Listas",
      "prompt": "Qual será o conteúdo final de numeros?",
      "code": "numeros = [1, 2, 3]\nnumeros.append(4)\nprint(numeros)",
      "options": [
        "[1, 2, 3]",
        "[4, 1, 2, 3]",
        "[1, 2, 3, 4]",
        "Erro"
      ],
      "answer": 2,
      "explanation": "append adiciona um único elemento ao final da lista."
    },
    {
      "type": "Resultado do código",
      "topic": "Listas",
      "prompt": "O que será exibido pelo fatiamento abaixo?",
      "code": "dados = [10, 20, 30, 40, 50]\nprint(dados[1:4])",
      "options": [
        "[10, 20, 30, 40]",
        "[20, 30, 40]",
        "[20, 30, 40, 50]",
        "[30, 40, 50]"
      ],
      "answer": 1,
      "explanation": "No slice [1:4], o índice 1 é incluído e o índice 4 é excluído. Isso retorna 20, 30 e 40."
    },
    {
      "type": "Alternativa correta",
      "topic": "Tuplas",
      "prompt": "Qual é a principal diferença entre uma lista e uma tupla?",
      "options": [
        "Tuplas não podem armazenar números.",
        "Listas são imutáveis e tuplas são mutáveis.",
        "Tuplas são imutáveis, enquanto listas são mutáveis.",
        "Tuplas não possuem ordem."
      ],
      "answer": 2,
      "explanation": "Uma tupla não pode ter seus elementos alterados, adicionados ou removidos diretamente após sua criação."
    },
    {
      "type": "Resultado do código",
      "topic": "Conjuntos",
      "prompt": "Qual será o resultado?",
      "code": "valores = {1, 2, 2, 3, 3, 3}\nprint(len(valores))",
      "options": [
        "3",
        "6",
        "2",
        "Erro"
      ],
      "answer": 0,
      "explanation": "Sets não armazenam elementos duplicados. O conjunto final possui apenas {1, 2, 3}, portanto len retorna 3."
    },
    {
      "type": "Resultado do código",
      "topic": "Conjuntos",
      "prompt": "Qual conjunto representa a interseção?",
      "code": "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)",
      "options": [
        "{1, 4}",
        "{1, 2, 3, 4}",
        "{2, 3}",
        "{1, 2}"
      ],
      "answer": 2,
      "explanation": "O operador & entre conjuntos retorna os elementos presentes em ambos: 2 e 3."
    },
    {
      "type": "Alternativa correta",
      "topic": "Dicionários",
      "prompt": "Como os dados são organizados em um dicionário Python?",
      "options": [
        "Somente por posição numérica.",
        "Em pares chave: valor.",
        "Somente como valores únicos sem chave.",
        "Em linhas e colunas obrigatoriamente."
      ],
      "answer": 1,
      "explanation": "Dicionários armazenam associações entre chaves e valores, como {'nome': 'Ana', 'idade': 20}."
    },
    {
      "type": "Resultado do código",
      "topic": "Dicionários",
      "prompt": "O que será exibido?",
      "code": "aluno = {'nome': 'Ana', 'idade': 20}\nprint(aluno['idade'])",
      "options": [
        "Ana",
        "20",
        "idade",
        "Erro"
      ],
      "answer": 1,
      "explanation": "A chave 'idade' está associada ao valor 20."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Dicionários",
      "prompt": "Marque a alternativa INCORRETA sobre dicionários.",
      "options": [
        "É possível alterar o valor associado a uma chave.",
        "Uma chave identifica um valor dentro do dicionário.",
        "O método get pode ser usado para buscar uma chave.",
        "Dicionários exigem que todas as chaves sejam números inteiros."
      ],
      "answer": 3,
      "explanation": "Chaves podem ser de vários tipos imutáveis, como strings, inteiros e tuplas. Elas não precisam ser inteiros."
    },
    {
      "type": "Resultado do código",
      "topic": "Operadores",
      "prompt": "Qual será o resultado considerando a precedência dos operadores?",
      "code": "resultado = 2 + 3 * 4\nprint(resultado)",
      "options": [
        "20",
        "14",
        "24",
        "9"
      ],
      "answer": 1,
      "explanation": "Multiplicação tem precedência sobre adição: 3 * 4 = 12 e depois 2 + 12 = 14."
    },
    {
      "type": "Alternativa correta",
      "topic": "Operadores",
      "prompt": "Qual operador realiza divisão inteira em Python?",
      "options": [
        "/",
        "//",
        "%",
        "**"
      ],
      "answer": 1,
      "explanation": "// realiza divisão inteira. Por exemplo, 7 // 2 resulta em 3."
    },
    {
      "type": "Resultado do código",
      "topic": "Operadores",
      "prompt": "Qual será o valor de resultado?",
      "code": "resultado = (10 > 5) and (3 < 1)\nprint(resultado)",
      "options": [
        "True",
        "False",
        "1",
        "Erro"
      ],
      "answer": 1,
      "explanation": "A primeira comparação é True e a segunda é False. True and False resulta em False."
    },
    {
      "type": "Resultado do código",
      "topic": "Condicionais",
      "prompt": "Qual texto será exibido?",
      "code": "idade = 17\nif idade >= 18:\n    print('adulto')\nelse:\n    print('menor')",
      "options": [
        "adulto",
        "menor",
        "17",
        "Nada"
      ],
      "answer": 1,
      "explanation": "Como 17 >= 18 é falso, o bloco else é executado e imprime 'menor'."
    },
    {
      "type": "Alternativa correta",
      "topic": "Condicionais",
      "prompt": "Para que serve elif em uma estrutura condicional?",
      "options": [
        "Para finalizar obrigatoriamente o programa.",
        "Para testar uma condição adicional quando condições anteriores não foram satisfeitas.",
        "Para repetir o mesmo bloco indefinidamente.",
        "Para importar outro módulo."
      ],
      "answer": 1,
      "explanation": "elif permite testar condições alternativas em sequência entre if e, opcionalmente, else."
    },
    {
      "type": "Resultado do código",
      "topic": "Loops",
      "prompt": "Quantas vezes o print será executado?",
      "code": "for i in range(3):\n    print(i)",
      "options": [
        "2 vezes",
        "3 vezes",
        "4 vezes",
        "Infinitamente"
      ],
      "answer": 1,
      "explanation": "range(3) produz 0, 1 e 2. Portanto, o corpo do for é executado 3 vezes."
    },
    {
      "type": "Resultado do código",
      "topic": "Loops",
      "prompt": "Qual será a saída final?",
      "code": "x = 0\nwhile x < 3:\n    x += 1\nprint(x)",
      "options": [
        "0",
        "2",
        "3",
        "4"
      ],
      "answer": 2,
      "explanation": "O while incrementa x enquanto x < 3. O laço termina quando x chega a 3."
    },
    {
      "type": "Alternativa correta",
      "topic": "Loops",
      "prompt": "Qual é o efeito da instrução break dentro de um loop?",
      "options": [
        "Pula apenas para a próxima iteração.",
        "Encerra o loop imediatamente.",
        "Reinicia o loop desde o começo.",
        "Transforma o loop em uma função."
      ],
      "answer": 1,
      "explanation": "break interrompe o loop atual imediatamente, seguindo a execução após o laço."
    },
    {
      "type": "Alternativa correta",
      "topic": "Loops",
      "prompt": "Qual é o efeito de continue dentro de um loop?",
      "options": [
        "Encerra o programa.",
        "Encerra definitivamente o loop.",
        "Pula o restante da iteração atual e segue para a próxima.",
        "Repete a mesma iteração sem testar condições."
      ],
      "answer": 2,
      "explanation": "continue ignora o restante do corpo na iteração atual e avança para a próxima iteração do loop."
    },
    {
      "type": "Resultado do código",
      "topic": "Funções",
      "prompt": "O que será exibido?",
      "code": "def soma(a, b):\n    return a + b\n\nprint(soma(2, 5))",
      "options": [
        "2",
        "5",
        "7",
        "None"
      ],
      "answer": 2,
      "explanation": "A função recebe 2 e 5 e retorna a soma, que é 7."
    },
    {
      "type": "Alternativa correta",
      "topic": "Funções",
      "prompt": "Qual é a função de return?",
      "options": [
        "Importar uma biblioteca.",
        "Enviar um valor de volta ao ponto onde a função foi chamada.",
        "Criar automaticamente um loop.",
        "Declarar uma variável global."
      ],
      "answer": 1,
      "explanation": "return encerra a execução da função naquele ponto e disponibiliza um valor ao código que realizou a chamada."
    },
    {
      "type": "Resultado do código",
      "topic": "Funções",
      "prompt": "Qual será a saída?",
      "code": "def saudacao(nome='Python'):\n    return 'Olá, ' + nome\n\nprint(saudacao())",
      "options": [
        "Olá",
        "Olá, Python",
        "Python",
        "Erro"
      ],
      "answer": 1,
      "explanation": "Como nenhum argumento foi informado, o parâmetro utiliza seu valor padrão: 'Python'."
    },
    {
      "type": "Complete a frase",
      "topic": "Módulos",
      "prompt": "Complete: um módulo Python é, em termos simples, um arquivo que pode conter ____ reutilizáveis.",
      "options": [
        "funções, classes e variáveis",
        "somente comentários",
        "somente números inteiros",
        "apenas código HTML"
      ],
      "answer": 0,
      "explanation": "Módulos permitem organizar e reutilizar código, podendo conter funções, classes, variáveis e outras definições Python."
    },
    {
      "type": "Alternativa correta",
      "topic": "Imports",
      "prompt": "Depois de executar import math, qual opção chama corretamente a raiz quadrada de 16?",
      "options": [
        "sqrt(16)",
        "math.sqrt(16)",
        "math->sqrt(16)",
        "import.sqrt(16)"
      ],
      "answer": 1,
      "explanation": "Ao usar import math, as funções do módulo são acessadas pelo namespace math, como math.sqrt(16)."
    },
    {
      "type": "Resultado do código",
      "topic": "Imports",
      "prompt": "Qual alternativa descreve corretamente este import?",
      "code": "from math import sqrt\nprint(sqrt(25))",
      "options": [
        "Importa todo o módulo e exige math.sqrt(25).",
        "Importa diretamente sqrt, permitindo chamar sqrt(25), que retorna 5.0.",
        "Cria uma função chamada math.",
        "Gera erro porque from não pode ser usado com import."
      ],
      "answer": 1,
      "explanation": "from math import sqrt traz sqrt diretamente para o namespace atual. Assim, sqrt(25) é válido e retorna 5.0."
    }
  ]
});
