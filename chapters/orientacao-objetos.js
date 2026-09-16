window.CHAPTERS = window.CHAPTERS || [];

window.CHAPTERS.push({
  "id": "orientacao-objetos",
  "number": "03",
  "title": "Orientação a Objetos",
  "description": "30 questões práticas sobre classes, objetos, atributos, métodos, herança, composição e encapsulamento.",
  "questions": [
    {
      "type": "Resultado do código",
      "topic": "Classes e objetos",
      "prompt": "O que será exibido pelo código abaixo?",
      "code": "class Pessoa:\n    pass\n\np = Pessoa()\nprint(type(p).__name__)",
      "options": [
        "Pessoa",
        "object",
        "class",
        "p"
      ],
      "answer": 0,
      "explanation": "p é uma instância da classe Pessoa. type(p).__name__ retorna o nome da classe do objeto, portanto 'Pessoa'."
    },
    {
      "type": "Alternativa correta",
      "topic": "Classes e objetos",
      "prompt": "Qual alternativa cria corretamente um objeto da classe Carro?",
      "code": "class Carro:\n    pass",
      "options": [
        "carro = Carro()",
        "carro = class Carro()",
        "carro = new Carro()",
        "carro = object(Carro)"
      ],
      "answer": 0,
      "explanation": "Em Python, uma instância é criada chamando a classe como uma função: Carro()."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Classes e objetos",
      "prompt": "Marque a alternativa INCORRETA sobre classes e objetos.",
      "options": [
        "Uma classe funciona como um molde para criar objetos.",
        "Objetos diferentes da mesma classe podem armazenar valores diferentes em seus atributos.",
        "Uma classe só pode gerar um único objeto durante a execução do programa.",
        "Um objeto é uma instância de uma classe."
      ],
      "answer": 2,
      "explanation": "Uma classe pode gerar quantas instâncias forem necessárias. Cada objeto criado a partir dela é uma instância independente."
    },
    {
      "type": "Resultado do código",
      "topic": "Classes e objetos",
      "prompt": "Qual será o resultado?",
      "code": "class Produto:\n    def __init__(self, nome):\n        self.nome = nome\n\np1 = Produto('Mouse')\np2 = Produto('Teclado')\nprint(p1.nome, p2.nome)",
      "options": [
        "Mouse Mouse",
        "Teclado Teclado",
        "Mouse Teclado",
        "Produto Produto"
      ],
      "answer": 2,
      "explanation": "p1 e p2 são objetos diferentes e cada um recebe seu próprio valor para o atributo nome."
    },
    {
      "type": "Complete a frase",
      "topic": "Classes e objetos",
      "prompt": "Complete: o método ______ é normalmente executado quando uma nova instância da classe é criada.",
      "options": [
        "__init__",
        "__main__",
        "__class__",
        "__new_object__"
      ],
      "answer": 0,
      "explanation": "__init__ é o inicializador usado para configurar o estado inicial da instância após sua criação."
    },
    {
      "type": "Alternativa correta",
      "topic": "Classes e objetos",
      "prompt": "No método abaixo, qual é o papel de self?",
      "code": "class Conta:\n    def exibir_saldo(self):\n        return self.saldo",
      "options": [
        "Representar a instância atual sobre a qual o método foi chamado.",
        "Representar sempre a classe Conta, e não um objeto.",
        "Importar automaticamente os atributos da classe.",
        "Ser uma palavra reservada obrigatória da linguagem."
      ],
      "answer": 0,
      "explanation": "self referencia a instância atual. O nome 'self' é uma convenção fortemente adotada, embora tecnicamente não seja uma palavra reservada."
    },
    {
      "type": "Resultado do código",
      "topic": "Atributos",
      "prompt": "O que será exibido?",
      "code": "class Aluno:\n    escola = 'UPE'\n\n    def __init__(self, nome):\n        self.nome = nome\n\na = Aluno('Ana')\nprint(a.nome, a.escola)",
      "options": [
        "Ana UPE",
        "UPE Ana",
        "Ana Ana",
        "Erro, pois escola não pertence ao objeto"
      ],
      "answer": 0,
      "explanation": "nome é um atributo de instância e escola é um atributo de classe, acessível pela instância quando não há um atributo de instância com o mesmo nome."
    },
    {
      "type": "Alternativa correta",
      "topic": "Atributos",
      "prompt": "Qual linha cria um atributo de instância chamado idade dentro de __init__?",
      "options": [
        "self.idade = idade",
        "idade.self = idade",
        "class.idade = idade",
        "idade = self"
      ],
      "answer": 0,
      "explanation": "Atribuir a self.idade associa o atributo à instância atual."
    },
    {
      "type": "Resultado do código",
      "topic": "Atributos",
      "prompt": "Qual será a saída?",
      "code": "class Item:\n    categoria = 'geral'\n\nx = Item()\ny = Item()\ny.categoria = 'especial'\nprint(x.categoria, y.categoria)",
      "options": [
        "geral geral",
        "especial especial",
        "geral especial",
        "Erro"
      ],
      "answer": 2,
      "explanation": "y.categoria cria/sobrescreve o atributo na instância y. x continua encontrando o atributo de classe 'geral'."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Atributos",
      "prompt": "Marque a alternativa INCORRETA.",
      "options": [
        "Atributos podem representar o estado de um objeto.",
        "self.nome normalmente indica um atributo da instância.",
        "Atributos de classe são necessariamente copiados fisicamente para cada objeto.",
        "Objetos distintos podem ter valores diferentes em atributos de instância."
      ],
      "answer": 2,
      "explanation": "Atributos de classe pertencem à classe e são consultados pelas instâncias; eles não precisam ser copiados para cada objeto."
    },
    {
      "type": "Resultado do código",
      "topic": "Métodos",
      "prompt": "O que será exibido?",
      "code": "class Calculadora:\n    def dobro(self, valor):\n        return valor * 2\n\nc = Calculadora()\nprint(c.dobro(5))",
      "options": [
        "5",
        "10",
        "25",
        "Erro"
      ],
      "answer": 1,
      "explanation": "O método dobro recebe 5 em valor e retorna 5 * 2, que é 10."
    },
    {
      "type": "Alternativa correta",
      "topic": "Métodos",
      "prompt": "Qual definição representa corretamente um método de instância que altera o saldo do próprio objeto?",
      "options": [
        "def depositar(self, valor): self.saldo += valor",
        "def depositar(valor): saldo += valor",
        "method depositar(self, valor): self.saldo += valor",
        "def depositar(cls, valor): Conta.saldo += valor"
      ],
      "answer": 0,
      "explanation": "Um método de instância recebe self e pode modificar o estado daquele objeto por meio de self.saldo."
    },
    {
      "type": "Resultado do código",
      "topic": "Métodos",
      "prompt": "Qual será a saída?",
      "code": "class Contador:\n    def __init__(self):\n        self.valor = 0\n\n    def incrementar(self):\n        self.valor += 1\n\nc = Contador()\nc.incrementar()\nc.incrementar()\nprint(c.valor)",
      "options": [
        "0",
        "1",
        "2",
        "Erro"
      ],
      "answer": 2,
      "explanation": "Cada chamada de incrementar soma 1 ao atributo valor. Após duas chamadas, valor é 2."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Métodos",
      "prompt": "Marque a alternativa INCORRETA sobre métodos de instância.",
      "options": [
        "Podem ler atributos da própria instância usando self.",
        "Podem alterar atributos da própria instância.",
        "Precisam obrigatoriamente retornar algum valor com return.",
        "São chamados normalmente por meio de um objeto."
      ],
      "answer": 2,
      "explanation": "Um método pode não usar return. Nesse caso, como qualquer função Python sem retorno explícito, ele retorna None."
    },
    {
      "type": "Resultado do código",
      "topic": "Herança",
      "prompt": "O que será exibido?",
      "code": "class Animal:\n    def falar(self):\n        return 'som'\n\nclass Cachorro(Animal):\n    pass\n\nc = Cachorro()\nprint(c.falar())",
      "options": [
        "som",
        "Cachorro",
        "None",
        "Erro, pois Cachorro não define falar"
      ],
      "answer": 0,
      "explanation": "Cachorro herda de Animal. Como não sobrescreve falar, utiliza o método definido na classe pai."
    },
    {
      "type": "Alternativa correta",
      "topic": "Herança",
      "prompt": "Qual sintaxe define corretamente Funcionario como subclasse de Pessoa?",
      "options": [
        "class Funcionario(Pessoa):",
        "class Funcionario inherits Pessoa:",
        "class Funcionario -> Pessoa:",
        "class Pessoa(Funcionario):"
      ],
      "answer": 0,
      "explanation": "Em Python, as classes-base aparecem entre parênteses após o nome da subclasse."
    },
    {
      "type": "Resultado do código",
      "topic": "Herança",
      "prompt": "Qual será a saída?",
      "code": "class Animal:\n    def falar(self):\n        return 'som genérico'\n\nclass Gato(Animal):\n    def falar(self):\n        return 'miau'\n\nprint(Gato().falar())",
      "options": [
        "som genérico",
        "miau",
        "Animal",
        "Erro por redefinir falar"
      ],
      "answer": 1,
      "explanation": "Gato sobrescreve o método falar herdado de Animal. A chamada usa a implementação da subclasse."
    },
    {
      "type": "Alternativa correta",
      "topic": "Herança",
      "prompt": "Para que serve super() no exemplo abaixo?",
      "code": "class Funcionario(Pessoa):\n    def __init__(self, nome, cargo):\n        super().__init__(nome)\n        self.cargo = cargo",
      "options": [
        "Permitir chamar a implementação da classe-base seguindo a ordem de resolução de métodos.",
        "Transformar Funcionario em classe abstrata.",
        "Apagar os atributos herdados.",
        "Criar automaticamente uma segunda instância de Pessoa."
      ],
      "answer": 0,
      "explanation": "super() permite delegar para a implementação da classe-base de acordo com a MRO. Aqui ele inicializa a parte Pessoa da instância."
    },
    {
      "type": "Resultado do código",
      "topic": "Herança",
      "prompt": "Qual será o valor impresso?",
      "code": "class Base:\n    def __init__(self):\n        self.x = 10\n\nclass Filha(Base):\n    def __init__(self):\n        super().__init__()\n        self.x += 5\n\nprint(Filha().x)",
      "options": [
        "5",
        "10",
        "15",
        "Erro"
      ],
      "answer": 2,
      "explanation": "super().__init__() define x como 10. Depois self.x += 5 altera o valor para 15."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Herança",
      "prompt": "Marque a alternativa INCORRETA sobre herança.",
      "options": [
        "Uma subclasse pode reutilizar métodos da classe-base.",
        "Uma subclasse pode sobrescrever métodos herdados.",
        "Herança pode representar uma relação do tipo 'é um'.",
        "Toda reutilização de código entre duas classes deve obrigatoriamente usar herança."
      ],
      "answer": 3,
      "explanation": "Herança não é a única forma de reutilização. Em muitos casos, composição é mais adequada, especialmente para relações do tipo 'tem um'."
    },
    {
      "type": "Alternativa correta",
      "topic": "Composição",
      "prompt": "Qual exemplo representa melhor composição?",
      "options": [
        "class Carro: def __init__(self, motor): self.motor = motor",
        "class Carro(Veiculo): pass",
        "class Veiculo(Carro): pass",
        "Carro = Veiculo"
      ],
      "answer": 0,
      "explanation": "Na composição, um objeto contém ou utiliza outro objeto. Carro 'tem um' motor, representado por self.motor."
    },
    {
      "type": "Resultado do código",
      "topic": "Composição",
      "prompt": "O que será exibido?",
      "code": "class Motor:\n    def ligar(self):\n        return 'motor ligado'\n\nclass Carro:\n    def __init__(self):\n        self.motor = Motor()\n\n    def ligar(self):\n        return self.motor.ligar()\n\nprint(Carro().ligar())",
      "options": [
        "Carro",
        "Motor",
        "motor ligado",
        "Erro"
      ],
      "answer": 2,
      "explanation": "Carro contém uma instância de Motor e delega a ela a operação ligar. O retorno final é 'motor ligado'."
    },
    {
      "type": "Alternativa correta",
      "topic": "Composição",
      "prompt": "Quando a composição tende a ser mais natural que a herança?",
      "options": [
        "Quando existe uma relação 'tem um', como Pedido tem Cliente.",
        "Sempre que duas classes possuem qualquer atributo com o mesmo nome.",
        "Somente quando nenhuma classe possui métodos.",
        "Apenas para classes sem __init__."
      ],
      "answer": 0,
      "explanation": "Composição modela relações em que um objeto usa ou contém outro, frequentemente descritas como 'tem um'."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Composição",
      "prompt": "Marque a alternativa INCORRETA.",
      "options": [
        "Composição permite combinar objetos com responsabilidades diferentes.",
        "Um objeto composto pode delegar tarefas a outro objeto.",
        "Composição exige que a classe interna seja uma subclasse da classe externa.",
        "Composição pode reduzir acoplamento quando comparada a hierarquias de herança mal planejadas."
      ],
      "answer": 2,
      "explanation": "Composição não exige relação de herança entre as classes. O ponto central é um objeto conter, receber ou utilizar outro."
    },
    {
      "type": "Alternativa correta",
      "topic": "Encapsulamento",
      "prompt": "Qual nome segue a convenção Python para indicar que um atributo é de uso interno da classe ou módulo?",
      "options": [
        "_saldo",
        "public_saldo",
        "saldo_public",
        "#saldo"
      ],
      "answer": 0,
      "explanation": "Um único sublinhado inicial, como _saldo, é uma convenção indicando uso interno. Não cria privacidade rígida."
    },
    {
      "type": "Resultado do código",
      "topic": "Encapsulamento",
      "prompt": "Qual será o resultado da expressão conta.saldo?",
      "code": "class Conta:\n    def __init__(self):\n        self._saldo = 100\n\n    @property\n    def saldo(self):\n        return self._saldo\n\nconta = Conta()\nprint(conta.saldo)",
      "options": [
        "100",
        "<property>",
        "None",
        "Erro, porque saldo deveria ser chamado com parênteses"
      ],
      "answer": 0,
      "explanation": "@property permite acessar o método como se fosse um atributo. conta.saldo executa o getter e retorna 100."
    },
    {
      "type": "Alternativa correta",
      "topic": "Encapsulamento",
      "prompt": "Qual é uma utilidade comum de @property?",
      "options": [
        "Controlar o acesso a um atributo por meio de lógica de leitura sem mudar a interface de acesso.",
        "Tornar qualquer atributo absolutamente inacessível fora da classe.",
        "Substituir completamente __init__.",
        "Fazer uma classe herdar automaticamente de object."
      ],
      "answer": 0,
      "explanation": "@property permite expor uma interface de atributo enquanto a classe executa lógica no acesso, validação ou cálculo."
    },
    {
      "type": "Resultado do código",
      "topic": "Encapsulamento",
      "prompt": "O que acontece ao tentar acessar diretamente obj.__valor?",
      "code": "class Exemplo:\n    def __init__(self):\n        self.__valor = 10\n\nobj = Exemplo()\nprint(obj.__valor)",
      "options": [
        "Imprime 10 normalmente.",
        "Gera AttributeError no acesso direto com esse nome.",
        "Imprime None.",
        "Gera SyntaxError na definição da classe."
      ],
      "answer": 1,
      "explanation": "Dois sublinhados iniciais acionam name mangling. O atributo não fica disponível diretamente como obj.__valor e esse acesso gera AttributeError."
    },
    {
      "type": "Alternativa incorreta",
      "topic": "Encapsulamento",
      "prompt": "Marque a alternativa INCORRETA sobre atributos com dois sublinhados iniciais, como __saldo.",
      "options": [
        "Python aplica name mangling ao nome.",
        "Isso ajuda a evitar colisões acidentais em subclasses.",
        "Isso cria privacidade absoluta e torna impossível acessar o valor por qualquer meio externo.",
        "O nome interno costuma ser transformado para algo relacionado ao nome da classe."
      ],
      "answer": 2,
      "explanation": "Name mangling não é um mecanismo de segurança nem cria privacidade absoluta. O atributo ainda pode ser acessado deliberadamente pelo nome transformado."
    },
    {
      "type": "Resultado do código",
      "topic": "Encapsulamento",
      "prompt": "Qual será a saída?",
      "code": "class Produto:\n    def __init__(self, preco):\n        self._preco = preco\n\n    @property\n    def preco(self):\n        return self._preco\n\n    @preco.setter\n    def preco(self, valor):\n        if valor < 0:\n            raise ValueError('preço inválido')\n        self._preco = valor\n\np = Produto(10)\np.preco = 20\nprint(p.preco)",
      "options": [
        "10",
        "20",
        "preço inválido",
        "Erro por usar setter"
      ],
      "answer": 1,
      "explanation": "A atribuição p.preco = 20 chama o setter, que aceita o valor por ser não negativo e atualiza _preco para 20."
    }
  ]
});
