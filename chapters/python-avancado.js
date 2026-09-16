window.CHAPTERS = window.CHAPTERS || [];

window.CHAPTERS.push({
  "id": "python-avancado",
  "number": "04",
  "title": "Python Mais Avançado",
  "description": "30 questões práticas sobre iteradores, generators, decorators, context managers, type hints, dataclasses, programação funcional, memória e complexidade de código.",
  "questions": [
    {
      "type": "Alternativa correta",
      "topic": "Iteradores",
      "prompt": "Qual afirmação descreve corretamente um iterador em Python?",
      "options": [
        "É um objeto que produz elementos um por vez por meio de __next__().",
        "É qualquer objeto que obrigatoriamente armazena todos os elementos em memória.",
        "É uma função que só pode retornar listas.",
        "É um objeto que sempre pode ser percorrido infinitas vezes sem recriação."
      ],
      "answer": 0,
      "explanation": "Um iterador implementa o protocolo de iteração, normalmente com __iter__() e __next__(). Ele fornece um item por vez e pode se esgotar."
    },
    {
      "type": "Resultado do código",
      "topic": "Iteradores",
      "prompt": "O que será exibido?",
      "code": "valores = [10, 20, 30]\nit = iter(valores)\nprint(next(it))\nprint(next(it))",
      "options": [
        "10 e depois 20",
        "10 e depois 10",
        "20 e depois 30",
        "Uma lista [10, 20]"
      ],
      "answer": 0,
      "explanation": "iter(valores) cria um iterador. Cada chamada a next() avança para o próximo elemento: primeiro 10, depois 20."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Iteradores",
      "prompt": "Marque a alternativa INCORRETA sobre iteráveis e iteradores.",
      "options": [
        "Uma lista é iterável.",
        "iter(objeto) tenta obter um iterador a partir de um iterável.",
        "next(iterador) solicita o próximo item.",
        "Todo iterável é necessariamente o próprio iterador e possui o mesmo estado de percurso."
      ],
      "answer": 3,
      "explanation": "Iterável e iterador não são sinônimos. Uma lista é iterável, mas iter(lista) cria um objeto iterador separado que mantém o estado do percurso."
    },
    {
      "type": "Resultado do código",
      "topic": "Iteradores",
      "prompt": "O que acontece após o iterador ser completamente consumido?",
      "code": "it = iter([1])\nprint(next(it))\nprint(next(it))",
      "options": [
        "Imprime 1 duas vezes.",
        "A segunda chamada levanta StopIteration.",
        "A segunda chamada retorna None.",
        "O iterador reinicia automaticamente."
      ],
      "answer": 1,
      "explanation": "Quando não há mais elementos, __next__() sinaliza o fim da iteração levantando StopIteration."
    },
    {
      "type": "Alternativa correta",
      "topic": "Generators",
      "prompt": "Qual é a principal característica de uma função generator?",
      "options": [
        "Usa yield para produzir valores de forma preguiçosa e preservar o estado entre iterações.",
        "Sempre retorna uma lista completa.",
        "Só pode produzir números inteiros.",
        "Executa todo o corpo da função no momento em que é criada."
      ],
      "answer": 0,
      "explanation": "Uma função com yield retorna um objeto generator. Os valores são produzidos sob demanda e a execução continua do ponto em que parou."
    },
    {
      "type": "Resultado do código",
      "topic": "Generators",
      "prompt": "Qual será a saída?",
      "code": "def numeros():\n    yield 1\n    yield 2\n\ng = numeros()\nprint(next(g))\nprint(next(g))",
      "options": [
        "1 e depois 2",
        "[1, 2]",
        "2 e depois 1",
        "None e depois None"
      ],
      "answer": 0,
      "explanation": "Cada next(g) executa o generator até o próximo yield. O primeiro produz 1 e o segundo produz 2."
    },
    {
      "type": "Alternativa correta",
      "topic": "Generators",
      "prompt": "Qual cenário tende a favorecer o uso de generator em vez de criar uma lista completa?",
      "options": [
        "Processar uma sequência muito grande item a item sem manter todos os itens simultaneamente em memória.",
        "Precisar acessar repetidamente qualquer elemento por índice em O(1).",
        "Precisar ordenar todos os valores antes de qualquer processamento.",
        "Precisar necessariamente conhecer len() sem consumir a sequência."
      ],
      "answer": 0,
      "explanation": "Generators são úteis para processamento preguiçoso, especialmente quando os dados são grandes ou podem ser produzidos sob demanda."
    },
    {
      "type": "Resultado do código",
      "topic": "Generators",
      "prompt": "Qual será o conteúdo de resultado?",
      "code": "g = (x * 2 for x in range(3))\nresultado = list(g)\nprint(resultado)",
      "options": [
        "[0, 2, 4]",
        "[2, 4, 6]",
        "(0, 2, 4)",
        "[0, 1, 2]"
      ],
      "answer": 0,
      "explanation": "A expressão generator produz x * 2 para 0, 1 e 2. list(g) consome o generator e cria [0, 2, 4]."
    },
    {
      "type": "Alternativa correta",
      "topic": "Decorators",
      "prompt": "Em termos gerais, o que um decorator faz?",
      "options": [
        "Recebe um objeto, frequentemente uma função ou classe, e devolve outro objeto que altera ou estende seu comportamento.",
        "Converte qualquer função em método estático automaticamente.",
        "Substitui a necessidade de parâmetros em funções.",
        "Executa uma função apenas durante a importação do módulo."
      ],
      "answer": 0,
      "explanation": "Decorators permitem envolver ou transformar funções e classes. A sintaxe @decorador aplica essa transformação de forma declarativa."
    },
    {
      "type": "Resultado do código",
      "topic": "Decorators",
      "prompt": "O que será exibido?",
      "code": "def dobro_resultado(func):\n    def wrapper():\n        return func() * 2\n    return wrapper\n\n@dobro_resultado\ndef valor():\n    return 5\n\nprint(valor())",
      "options": [
        "5",
        "10",
        "25",
        "Erro"
      ],
      "answer": 1,
      "explanation": "@dobro_resultado equivale a valor = dobro_resultado(valor). A função wrapper chama a função original e multiplica seu retorno por 2."
    },
    {
      "type": "Complete a frase",
      "topic": "Decorators",
      "prompt": "Para preservar metadados como __name__ e __doc__ da função original dentro de um decorator, é comum usar ______.",
      "options": [
        "functools.wraps",
        "itertools.chain",
        "dataclasses.field",
        "contextlib.contextmanager"
      ],
      "answer": 0,
      "explanation": "@functools.wraps(func) copia metadados relevantes da função decorada para a função wrapper."
    },
    {
      "type": "Alternativa correta",
      "topic": "Decorators",
      "prompt": "Qual é uma aplicação comum de decorators?",
      "options": [
        "Adicionar logging, validação, autorização ou medição de tempo sem alterar diretamente o corpo principal da função.",
        "Forçar toda variável a ser global.",
        "Eliminar a pilha de chamadas do Python.",
        "Garantir que qualquer algoritmo tenha complexidade O(1)."
      ],
      "answer": 0,
      "explanation": "Decorators são muito usados para preocupações transversais, como logs, autenticação, cache, validação e instrumentação."
    },
    {
      "type": "Alternativa correta",
      "topic": "Context managers",
      "prompt": "Qual é a principal vantagem de usar with ao trabalhar com recursos como arquivos?",
      "options": [
        "Garantir uma etapa de finalização do recurso mesmo quando ocorre uma exceção dentro do bloco.",
        "Transformar automaticamente o arquivo em JSON.",
        "Impedir qualquer exceção de acontecer.",
        "Carregar obrigatoriamente todo o arquivo em memória."
      ],
      "answer": 0,
      "explanation": "O context manager controla entrada e saída do contexto. No caso de arquivos, isso normalmente garante o fechamento correto do arquivo ao sair do bloco."
    },
    {
      "type": "Resultado do código",
      "topic": "Context managers",
      "prompt": "Qual método de um context manager baseado em classe é chamado ao entrar no bloco with?",
      "options": [
        "__enter__",
        "__start__",
        "__open__",
        "__begin__"
      ],
      "answer": 0,
      "explanation": "O protocolo de context manager usa __enter__() na entrada e __exit__() na saída do bloco with."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Context managers",
      "prompt": "Marque a alternativa INCORRETA sobre context managers.",
      "options": [
        "Podem ser usados para arquivos, locks e conexões.",
        "Podem ser implementados com __enter__ e __exit__.",
        "contextlib.contextmanager permite criar context managers com uma função generator apropriada.",
        "O bloco with impede que qualquer exceção seja levantada."
      ],
      "answer": 3,
      "explanation": "with não impede exceções. O context manager pode decidir tratá-las ou propagá-las, mas sua função principal é controlar corretamente a entrada e a saída do contexto."
    },
    {
      "type": "Alternativa correta",
      "topic": "Type hints",
      "prompt": "O que a anotação abaixo comunica?",
      "code": "def soma(a: int, b: int) -> int:\n    return a + b",
      "options": [
        "A intenção de que a e b sejam int e de que o retorno seja int.",
        "Que o Python impedirá em tempo de execução qualquer chamada com float.",
        "Que a função será compilada automaticamente para código nativo.",
        "Que a função só pode ser usada dentro de uma classe."
      ],
      "answer": 0,
      "explanation": "Type hints documentam tipos esperados e ajudam ferramentas estáticas e IDEs. Por padrão, o Python não impõe essas anotações automaticamente em runtime."
    },
    {
      "type": "Alternativa correta",
      "topic": "Type hints",
      "prompt": "Qual anotação representa uma lista de inteiros em Python moderno?",
      "options": [
        "list[int]",
        "list(integer)",
        "array<int>",
        "int[]"
      ],
      "answer": 0,
      "explanation": "Em versões modernas do Python, tipos genéricos embutidos podem ser anotados diretamente, como list[int], dict[str, int] e tuple[int, ...]."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Type hints",
      "prompt": "Marque a alternativa INCORRETA sobre type hints.",
      "options": [
        "Podem melhorar documentação e legibilidade.",
        "Podem ser usados por ferramentas como verificadores estáticos.",
        "Podem ajudar IDEs com autocompletar e análise.",
        "Garantem por si só que tipos incompatíveis nunca serão usados durante a execução."
      ],
      "answer": 3,
      "explanation": "As anotações de tipo não são, por padrão, uma barreira de runtime. Ferramentas externas podem verificar inconsistências estaticamente."
    },
    {
      "type": "Resultado do código",
      "topic": "Dataclasses",
      "prompt": "Qual benefício principal @dataclass fornece neste exemplo?",
      "code": "from dataclasses import dataclass\n\n@dataclass\nclass Produto:\n    nome: str\n    preco: float",
      "options": [
        "Geração automática de métodos úteis como __init__ e __repr__ com base nos campos declarados.",
        "Transformação automática da classe em um dicionário global.",
        "Persistência automática dos objetos em banco de dados.",
        "Imutabilidade obrigatória da classe."
      ],
      "answer": 0,
      "explanation": "@dataclass reduz código repetitivo em classes voltadas a dados, gerando métodos como __init__, __repr__ e __eq__ conforme a configuração."
    },
    {
      "type": "Alternativa correta",
      "topic": "Dataclasses",
      "prompt": "Como criar uma dataclass imutável no sentido de impedir atribuições normais aos campos após a criação?",
      "options": [
        "@dataclass(frozen=True)",
        "@dataclass(readonly=True)",
        "@dataclass(const=True)",
        "@frozen_dataclass"
      ],
      "answer": 0,
      "explanation": "frozen=True adiciona proteção contra atribuições normais aos campos após a inicialização, aproximando o objeto de uma estrutura imutável."
    },
    {
      "type": "Alternativa correta",
      "topic": "Dataclasses",
      "prompt": "Qual é a forma recomendada de definir uma lista vazia diferente para cada instância de uma dataclass?",
      "options": [
        "field(default_factory=list)",
        "lista = [] como valor padrão simples",
        "field(default=list)",
        "default_factory = []"
      ],
      "answer": 0,
      "explanation": "default_factory=list cria uma nova lista para cada instância e evita o compartilhamento acidental de um mesmo objeto mutável."
    },
    {
      "type": "Resultado do código",
      "topic": "Programação funcional",
      "prompt": "Qual será a saída?",
      "code": "from functools import reduce\n\nvalores = [1, 2, 3, 4]\nresultado = reduce(lambda a, b: a + b, valores)\nprint(resultado)",
      "options": [
        "10",
        "24",
        "[1, 2, 3, 4]",
        "4"
      ],
      "answer": 0,
      "explanation": "reduce aplica cumulativamente a função aos elementos: ((1 + 2) + 3) + 4 = 10."
    },
    {
      "type": "Alternativa correta",
      "topic": "Programação funcional",
      "prompt": "O que caracteriza uma função pura em programação funcional?",
      "options": [
        "Para os mesmos argumentos, tende a produzir o mesmo resultado e não depende de efeitos colaterais observáveis.",
        "Sempre modifica alguma variável global.",
        "Obrigatoriamente usa lambda.",
        "Nunca recebe parâmetros."
      ],
      "answer": 0,
      "explanation": "Funções puras dependem essencialmente de suas entradas e evitam efeitos colaterais, o que facilita testes e raciocínio sobre o código."
    },
    {
      "type": "Alternativa correta",
      "topic": "Programação funcional",
      "prompt": "Qual conceito descreve uma função que recebe outra função como argumento ou devolve uma função?",
      "options": [
        "Função de ordem superior",
        "Função recursiva obrigatória",
        "Método abstrato",
        "Context manager"
      ],
      "answer": 0,
      "explanation": "Funções de ordem superior manipulam funções como valores, recebendo-as como argumentos ou retornando-as. map, filter e decorators exploram esse conceito."
    },
    {
      "type": "Alternativa correta",
      "topic": "Gerenciamento de memória",
      "prompt": "O que del x faz, de forma geral, quando x referencia um objeto?",
      "options": [
        "Remove o nome x daquele escopo; o objeto só pode ser liberado se não houver referências relevantes restantes.",
        "Apaga imediatamente e obrigatoriamente o objeto da memória, mesmo que outras variáveis o referenciem.",
        "Zera todos os atributos do objeto.",
        "Move o objeto para o disco."
      ],
      "answer": 0,
      "explanation": "del remove uma referência ou associação de nome. Se outras referências ainda apontarem para o objeto, ele continua acessível e não pode ser simplesmente descartado."
    },
    {
      "type": "Resultado do código",
      "topic": "Gerenciamento de memória",
      "prompt": "Qual será a saída?",
      "code": "a = [1, 2]\nb = a\nb.append(3)\nprint(a)",
      "options": [
        "[1, 2, 3]",
        "[1, 2]",
        "[3]",
        "Erro, pois duas variáveis não podem referenciar a mesma lista"
      ],
      "answer": 0,
      "explanation": "a e b referenciam a mesma lista mutável. Alterar o objeto por meio de b também é observado por a."
    },
    {
      "type": "Alternativa correta",
      "topic": "Gerenciamento de memória",
      "prompt": "Além da contagem de referências usada pela implementação CPython, qual mecanismo ajuda a lidar com ciclos de referências?",
      "options": [
        "Garbage collector de ciclos.",
        "O operador yield.",
        "O módulo csv.",
        "O decorador @property."
      ],
      "answer": 0,
      "explanation": "CPython combina contagem de referências com um coletor de lixo capaz de detectar determinados ciclos de objetos que não são mais alcançáveis."
    },
    {
      "type": "Alternativa correta",
      "topic": "Complexidade de código",
      "prompt": "Considerando complexidade média, qual é a complexidade típica de consultar uma chave em um dict do Python?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n²)"
      ],
      "answer": 0,
      "explanation": "Dicionários são implementados com tabelas hash e, em condições típicas, busca, inserção e remoção por chave têm custo médio O(1)."
    },
    {
      "type": "Resultado do código",
      "topic": "Complexidade de código",
      "prompt": "Qual é a complexidade assintótica deste trecho em função de n?",
      "code": "for i in range(n):\n    for j in range(n):\n        total += i + j",
      "options": [
        "O(n²)",
        "O(n)",
        "O(log n)",
        "O(1)"
      ],
      "answer": 0,
      "explanation": "O laço externo executa n vezes e, para cada iteração, o laço interno também executa n vezes, totalizando aproximadamente n² operações."
    },
    {
      "type": "Alternativa correta",
      "topic": "Complexidade de código",
      "prompt": "Qual afirmação é correta sobre operações comuns em listas Python?",
      "options": [
        "append() possui custo amortizado O(1), enquanto procurar um valor com x in lista é O(n) no pior caso típico.",
        "append() é sempre O(n²) e busca por valor é O(1).",
        "Toda operação de lista é O(1).",
        "Buscar um valor em uma lista não depende da quantidade de elementos."
      ],
      "answer": 0,
      "explanation": "Adicionar ao fim de uma lista dinâmica é amortizadamente O(1). Já uma busca por valor pode precisar examinar os elementos sequencialmente, resultando em O(n)."
    }
  ]
});
