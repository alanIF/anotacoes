# Tratamento de Exceções
* try, catch, finally: Cada uma dessas palavras, juntas, definem blocos para o tratamento de exceções.

* throws: Declara que um método pode lançar uma ou várias exceções.

* throw: Lança explicitamente uma exception.
* Cláusula throw: Para lançar exceções explicitamente, use a cláusula throw.

# Unchecked Exception e Checked Exception
* Errors e RuntimeExceptions são considerados uncheked, portanto o compilador não obriga que exista tratamento para eles.
* Unchecked Exception: Herdam da classe RuntimeException ou da classe Error. O compilador não verifica o código para ver se a exceção foi capturada ou declarada. Se uma exceção não-verificada ocorrer e não tiver sido capturada, o programa terminará ou executará com resultados inesperados. Em geral, podem ser evitadas com uma codificação adequada.
* Checked Exception: As exceções que são herdadas da classe Exception, mas não de RuntimeException. O compilador impõe um requisito do tipo ‘capturar ou declarar’. O compilador verifica cada chamada de método e declaração de método para determinar se o método lança (throws) exceções verificadas. Se lançar, o compilador assegura que a exceção verificada é capturada ou declarada em uma cláusula throws. Caso não capturada nem declarada, ocorre um erro de compilação.

