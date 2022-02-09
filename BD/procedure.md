* Exemplo

CREATE PROCEDURE uspRetornaIdade
@CodigoCliente int
AS
SELECT Clientes.ClienteNome, YEAR(GETDATE())-YEAR(ClienteNascimento) AS IDADE
FROM Clientes
INNER JOIN Contas ON Clientes.ClienteCodigo=Contas.ClienteCodigo
WHERE Clientes.ClienteCodigo = @CodigoCliente;

exec uspRetornaIdade 1;
