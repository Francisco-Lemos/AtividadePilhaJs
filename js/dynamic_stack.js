class DynamicStack {
  constructor() {/*Ao criar uma instância de nossa pilha dinâmica, atribuímos null ao topo pois a pilha ainda está vazia
    e zero ao length pois não temos ainda nenhum elemento e este será o nosso contador do total de elementos*/
    this.top = null;
    this.length = 0;
  }

  push(element) {/*Esse método é responsável por inserir um novo elemento em nossa pilha, recebendo o valor como argumento*/
    const newNode = new Node(element);/*Aqui criamos uma instância de Node (O novo nó a ser incluído)*/
    if (this.top)/*Antes de tudo é importante verificar se a nossa pilha está vazia (Se não houver nada no topo é pq está)*/
      newNode.next = this.top;//Se não estiver vazia devemos fazer com que o next de nosso novo nó aponte para o elemento que estava no topo
    this.top = newNode;/*Em seguida devemos fazer com que o novo nó (newNode) ocupe o topo da pilha. Isso deverá ocorrer
    estando a pilha vazia ou não, pois de qualquer modo o novo elemento a ser incluído deverá ocupar o topo*/
    this.length++;// Ao final do processo incrementamos o nosso contador, indicando que temos mais um elemento na pilha
  }

  pop() {//Esse método será responsável por retirar um elemento da pilha (Na pilha sempre retiramos do topo)
    if (this.isEmpty())/*Primeiramente temos que verificar se a pilha está vazia ou não, pois caso esteja iremos lançar um erro
      afinal de contas não há o que retirar da pilha caso a mesma esteja vazia... não é mesmo?*/
      throw new Error("pilha vazia");//Aqui o método é interrompido (sua execução é cessada) e lançamos um erro
    const selected = this.top;//Caso a pilha não esteja vazia prosseguimos identificando o elemento que está no topo
    this.top = selected.next;//Fazemos então com que o topo seja ocupado pelo próximo elemento (o de baixo) pois o que
    //ocupava anteriormente essa posição foi retirado
    selected.next = null;/*Agora é importante desvincular o elemento removido da pilha, esvaziando o seu atributo next*/
    this.length--;// Como removemos um elemento temos que decrementar o nosso contador
    return selected.content;/* O método retorna o conteúdo do elemento removido, que será apresentado ao usuário via comando 
    do arquivo main*/
  }

  peek() {//O objetivo desse método é retornar o conteúdo do topo da lista, caso a mesma não esteja vazia
    if (!this.isEmpty())/* Se a lista não estiver vazia (método definido logo abaixo, retornamos o valor do atributo content)
     do elemento que ocupa o topo... Simples assim!*/
      return this.top.content;

  }

  isEmpty() {// Sei que não é preciso comentar isso mas vamos lá.... Esse método indica se a pilha está vazia ou não
    // Caso o topo seja igual a null quer dizer que não há nada no topo da pilha, logo não há nada na pilha
    //Caso o topo não seja igual a null retornará o valor que está no topo (Que será interpretado como equivalente a True)
    return this.top === null
  }/* Vamos lembrar que null, 0, [], "" são interpetrados como False e 50, "uma string", [1, 2, 3] são interpretados como True
  Caso tais valores venham a ser analisados como Booleanos. A lista que mencionei só cita exemplos.... Temos outras situações*/
  
  size() {// O método size retorna a quantidade de elementos de nossa lista (está sendo contada no attr length, lembra?)
    return this.length;// Faz um métodozinho do tipo get né
  }

  clear() {/*Não é enfadonho dizer que o clear limpa a nossa pilha, retiramos todos os elementos... mas é isso que ele faz*/
    this.top = null;// Como faz? Faz com que o topo aponte para null
    this.length = 0;// e reinicia o nosso contador de elementos para zero
  }

  print(separator = ' - ') {//Esse método é tipo o toString do java.... Ajeita o nosso objeto (digamos assim) para ser apresentado
    let s = '';// BOm... Na variável s temos a exibição de nossa pilha, que inicia com uma string vazia
    for (let i = this.top; i != null; i = i.next) {/*Assim, vamos percurrer a pilha, começando pelo todo e indo para o próximo
      fazendo com que a variável i navegue pela pilha pelo atributo next de casa elemento a cada iteração*/
      s += i.content + separator;/*Enquanto isso, vamos concatenando a nossa mensagem com o conteúdo de cada elemento e o separador*/
    }
    return s.substr(0, (s.length - separator.length));/*Ao final retornamos uma substring de s indo do início (indice 0) até
    o índice correspondente ao final subtraído a quantidade de elementos do separador (final menos a quantidade de elementos do separador)...
     Enfim, o objetivo aqui é subtrair o separador do final (pois ficaria além de feio sem sentido)*/ 
  }

}