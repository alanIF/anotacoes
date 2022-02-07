# Introdução
    Ao	projeto	da	conta,	isto	é,	à	definição	da	conta,	damos	o	nome	de	classe.	Ao	que	podemos	construir
a	partir	desse	projeto;	às	contas	de	verdade,	damos	o	nome	de	objetos. A	 palavra	 classe	 vem	 da	 taxonomia	 da	 biologia.	 Todos	 os	 seres	 vivos	 de	 uma	 mesma	 classe biológica	têm	uma	série	de	atributos	e	comportamentos	em	comum,	mas	não	são	iguais,	pois	podem
variar	nos	valores	desses	atributos	e	como	realizam	esses	comportamentos
# Classe
    Dentro	 da	 classe,	 também	 declararemos	 o	 que	 cada	 conta	 faz	 e	 como	 isso	 é	 feito	 -	 os comportamentos	 que	 cada	 classe	 tem.
# Modificadores de Acesso
    - Public
    - Private
    - Protected
# Encapsulamento
    Encapsular,	isto	é,	ocultar	todos	os	membros	de uma	classe	 (como	 vimos	acima),	além	de	esconder	como	 funcionam	as	 rotinas	(no	caso,	método do
nosso	sistema. Encapsular	é	fundamental	para	seu	sistema	ser	suscetível	a	mudanças:	não	precisaremos	mudar	uma regra	 de	 negócio	 em	 vários	 lugares,	 mas,	 sim em	 apenas	 um	 único	 lugar,	 já	 que	 essa	 regra	 está encapsulada.
# Interface
    O	conjunto	de	métodos	públicos	de	uma	classe	é	também	chamado	de	interface	da	classe,	pois	essa é	a	única	maneira	pela	qual	você	se comunica	com	objetos	dessa	classe.
# Get e Set
    O	modificador	 	private		 faz	 com	 que	 ninguém	 consiga	 modificar	 e	tampouco	ler	 o	 atributo	 em
questão.
# Construtores
    Quando	usamos	a	palavra-chave		new	,	estamos	construindo	um	objeto.	Sempre	quando	o		new		 é
chamado,	 ele	 executa	 o	 construtor	 da	 classe.	
    Dar	 possibilidades	 ou	 obrigar	 o	 usuário	 de	 uma	 classe	 a	 passar argumentos	para	o	objeto	durante	o	seu	processo	de	criação.
#  Herança
    Evitar duplicagem de metodos;
    Herança	aumenta	o	acoplamento	entre	as	classes,	isto	é,	o	quanto	uma	classe
 depende	de	outra.	A	relação	entre	as	classes	mãe	e	filha	é	muito	forte	e	isso	acaba	fazendo	com	que o	programador	das	classes	filhas	tenha	de	conhecer	a	implementação	da	classe	mãe,	e	vice-versa	– fica	difícil	fazer	uma	mudança	pontual	no	sistema.
# Polimorfismo
    Polimorfismo	 é	 a	 capacidade	 de	 um	 objeto	 poder	 ser	 referenciado	 de	 várias	 formas	 (cuidado,
polimorfismo	não	quer	dizer	que	o	objeto	fica	se	transformando,	muito	pelo	contrário,	um	objeto	nasce
de	um	tipo	e	morre	daquele	tipo,	o	que	pode	mudar	é	a	maneira	como	nos	referimos	a	ele).
# Abstração
    Nossa	empresa	tem	apenas		Diretores,Gerentes	,	 	Secretárias	,	 etc.	 Ela	 é	 uma	 classe	 que	 apenas	 idealiza	 um	 tipo,	 define	 somente um rascunho.Utilizamos	a	palavra-chave		abstract		para	impedir	que	ela	possa	ser	instanciada.	Esse	é	o	efeito direto	de	se	usar	o modificador		abstract		na	declaração	de	uma	classe. A 	 única	 diferença	 é	 que	 não	 podemos	 instanciar	 um	 objeto	 do	 tipo
	Funcionario	,	que	já	é	de	grande	valia,	dando	mais	consistência	ao	sistema
# Interface
    Pela	 ideia	 base	 de	 uma	 interface,	 ela	 pode	 definir	 uma	 série	 de	 métodos,	mas	 nunca	 conter	 suas
implementações.	Ela	só	expõe	o	que	o	objeto	deve	 fazer,	e	não	como	ele	 o	 faz,	nem	o	que	ele	 tem.
Como	ele	o	faz	será	definido	em	uma	implementação	dessa	interface.
# Classe Abstrata x Interface
Uma classe abstrata pode conter métodos completos ou incompletos. Uma Interface pode conter apenas a assinatura de um método, mas nenhum corpo ou implementação. Portanto, em uma classe abstrata, pode-­se implementar métodos, mas em uma Interface, não. Uma classe abstrata pode conter campos, construtores, ou destrutores e aplicar propriedades. Uma interface não pode conter campos, construtores, ou destrutores. Pode possuir apenas a propriedade da assinatura, mas não a implementação. Uma classe abstrata não suporta múltiplas herança. Assim, uma classe pode implementar várias interfaces, mas apenas herdar de uma classe abstrata. Uma classe que implementa uma interface tem obrigatoriamente que implementar todos os métodos desta, mas o mesmo não é exigido no caso de uma classe abstrata. As classes abstratas são mais rápidas que as interfaces.
