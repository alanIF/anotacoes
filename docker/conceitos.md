# Containers
* Container é o nome dado para a segregação de processos no mesmo kernel, de forma que o processo seja isolado o máximo possível de todo o resto do ambiente. Em termos práticos são File Systems, criados a partir de uma "imagem" e que podem possuir também algumas características próprias.
# Imagens
* Uma imagem Docker é a materialização de um modelo de um sistema de arquivos, modelo este produzido através de um processo chamado build. Esta imagem é representada por um ou mais arquivos e pode ser armazenada em um repositório.
# Arquitetura
* De maneira simplificada podemos dizer que o uso mais básico do Docker consiste em:
 * Ter o serviço Docker Engine rodando
*  Ter acesso a API Rest do Docker Engine, normalmente através do Docker Client
* Baixar uma imagem do Docker Registry, normalmente do registry público oficial:
https://hub.docker.com

* Instanciar um container a partir da imagem baixada

# Comandos
* Criação do container: docker container create
* Execução do container: docker container start
* Uso do modo interativo: docker container exec