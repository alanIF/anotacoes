# Motivação
    Existem situações quando é vital a ordem em que as consultas são executadas, e que todos os comandos de query sejam consultados em grupo ou então que nenhum seja efetivado. Por exemplo transferencia de dinheiro, é dois updates.
# ACID 
* Atomicidade: Um átomo é dito como a menor particular possível, ou algo que não pode ser dividido. Atomicidade aplica este princípio para transações de banco de dados. As queries que compõem uma transação devem ser todas elas executadas ou nenhum delas deve ser executada (como o exemplo da Listagem 1).

* Consistência: Isso se refere às regras dos dados. Por exemplo, um corpo de artigo pode precisar de um cabeçalho de artigo associado a ele. Durante a transação (ou seja, dentro desta, durante a sua execução), esta regra pode ser quebrada, mas este estado não deve ser nunca visível de fora da transação.
* Isolamento: simples, os dados que estão sendo usados por uma transação não podem ser usados por qualquer outra transação até que a primeira transação seja completada. No exemplo da Listagem 2, temos inicialmente um saldo de conta com R$ 900,00. Existe um único depósito de R$ 100,00 e um saque de R$100,00, então o saldo da conta ao final deve permanecer o mesmo. No entanto, percebe-se que após sua execução o saldo fica em R$ 800,00, de forma que perdemos R$ 100,00. Essas 2 transações deveriam ter sido isoladas, e o resultado seria fornecido para a Conexão 2 apenas quando a transação da Conexão 1 fosse completada.
* Durabilidade: uma vez que uma transação for completada, seu efeito deve permanecer, e não ser reversível.

# Tipos de Transação
* Quando uma transação é efetuada com sucesso (todas as suas operações são bem-sucedidas), o banco de dados é alterado de forma permanente, com os dados envolvidos na transação persistidos (ou seja, salvos em disco); a essa operação damos o nome de COMMIT.

* Porém, caso haja falha em qualquer uma das operações constituintes da transação, o banco de dados deverá ser retornado ao estado em que se encontrava anteriormente à execução da transação; essa operação é denominada ROLLBACK.
# Exemplo 
*  Transação com rollback
START TRANSACTION;
  DELETE FROM Dados_Livro; # apaga todos registros da tabela, "sem querer"
  INSERT INTO Dados_Livro(NomeLivro,ISBN13, PrecoLivro)
    VALUES ('Ciência de Dados com Python','9876532145632',69.88);
  SELECT * FROM Dados_Livro; # mostra tabela totalmente vazia
ROLLBACK; # desfaz a transação

SELECT * FROM Dados_Livro; # mostra os dados normalmente, pois nada foi comitado.

* Transação com commit
START TRANSACTION;
  DELETE FROM Dados_Livro; # apaga todos registros da tabela
  INSERT INTO Dados_Livro(NomeLivro, ISBN13, PrecoLivro)
    VALUES('Ciência de Dados com Python','9876532145632',69.88);
  SELECT * FROM Dados_Livro; # mostra tabela vazia
COMMIT; # confirma a transação

* Transação em Stored Procedure
DELIMITER //
CREATE PROCEDURE insere_dados()
BEGIN
DECLARE erro_sql TINYINT DEFAULT FALSE;
DECLARE CONTINUE HANDLER FOR SQLEXCEPTION SET erro_sql = TRUE;
START TRANSACTION;
  INSERT INTO Dados_Livro (NomeLivro, ISBN13, PrecoLivro) VALUES
    ('História da Numismática', '9789865321465', 78.60);
  INSERT INTO Dados_Livro (NomeLivro, ISBN13, PrecoLivro) VALUES
    ('Biologia Marinha', '9784233876972', 177.50);
  INSERT INTO Dados_Livro (NomeLivro, ISBN13, PrecoLivro) VALUES
    ('Química Experimental', '9789563210970', 165.32);
  INSERT INTO Dados_Livro (NomeLivro, ISBN13, PrecoLivro) VALUES
    ('Artes Plásticas', '9784523415974', 98,00); # Aqui há um erro que impedirá o COMMIT e provocará o ROLLBACK.
  IF erro_sql = FALSE THEN
    COMMIT;
    SELECT 'Transação efetivada com sucesso.' AS Resultado;
  ELSE
    ROLLBACK;
    SELECT 'Erro na transação' AS Resultado;
  END IF;
END//
DELIMITER ;