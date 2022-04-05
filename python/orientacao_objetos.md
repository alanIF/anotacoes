* funcoes
def    velocidade(espaco,    tempo):
                                v    =    espaco/tempo
                                print('velocidade:    {}    m/s'.format(v))
def    velocidade(espaco,    tempo):
                                v    =    espaco/tempo
                                return    v
* Orientações objetos
* Classe e Construtor
class Conta:
                def    init(self,    numero,    titular,    saldo,    limite):
                                self.numero    =    numero
                                self.titular    =    titular
                                self.saldo    =    saldo
                                self.limite    =    limite 
* Importando classe
from    conta    import    Conta
                conta    =    Conta()
                print(type(conta))
                #<class    'main.Conta'>
* Inserindo metodos na classe
class Conta:
                #    outros    métodos    omitidos
                def    saca(self,    valor):
                                self.saldo    -=    valor
                def    extrato(self):
                                print("numero:    {}    \nsaldo:    {}".format(self.numero,    self.saldo))
def    transfere(self,    destino,    valor):
                                retirou    =    self.saca(valor)
                                if    (retirou    ==    False):
                                                return False
                                else:
                                                destino.deposita(valor)
                                                return True 
* Modificadores de acesso
- private exemplo
class Pessoa:
                def    init(self,    idade):
                                self.__idade    =    idade
alantavares — Hoje às 13:47
* decorator
class Conta:
                def    init(self,    saldo=0.0):
                                self._saldo    =    saldo
                @property
                def    saldo(self):
                                return    self._saldo
                @saldo.setter
                def    saldo(self,    saldo):
                                if(saldo    <    0):
                                                print("saldo    não    pode    ser    negativo")
                                else:
                                                self._saldo    =    saldo
alantavares — Hoje às 14:08
* Herança
class Funcionario:
                def    init(self,    nome,    cpf,    salario):
                                self._nome    =    nome
                                self._cpf    =    cpf
                                self._salario    =    salario
class Gerente(Funcionario):
                def    init(self,    senha,    qtd_funcionarios):
                                self._senha    =    senha
                                self._qtd_funcionarios    =    qtd_funcionarios
                def    autentica(self,    senha):
                                if    self._senha    ==    senha:
                                                print("acesso    permitido")
                                                return True
                                else:
                                                print("acesso    negado")
                                                return False
* super
class Gerente(Funcionario):
                def    init(self,    nome,    cpf,    salario,    senha,    qtd_funcionarios):
                                super().init(nome,    cpf,    salario)
                                self._senha    =    senha
                                self._qtd_funcionarios    =    qtd_funcionarios
* Polimorfismo
* classe abtrata
import    abc
class Funcionario(abc.ABC):
                @abc.abstractmethod
                def    get_bonificacao(self):
                                pass 
* herança  multiplica
class Gerente(Funcionario,    Autenticavel):
* excessoes
try:
                                for    i    in    range(1,15):
                                                cc.deposita(i    +    1000)
                                                print(cc.saldo)
                                                if    (i    ==    5):
                                                cc    =    None
                except:
                                print('erro')
