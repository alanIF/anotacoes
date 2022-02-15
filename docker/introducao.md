- Criação do container: docker container create
* Execução do container: docker container start
* Uso do modo interativo: docker container exec

- Portas
* Mapear: docker container run -p 8080:80 nginx

- Docker Composer
* O Docker Compose é uma ferramenta para definir e gerenciar aplicações docker com múltiplos
containers. Neste contexto os containers são chamados de serviços.

- Imagem bd
* docker-compose.yml
   version: '2'
    services:
    db:
    image: postgres:9.6     
* run.sh
    docker-compose up -d
    docker-compose ps
    echo "Aguardando a carga do postgres"
    sleep 5
    docker-compose exec db psql -U postgres -c '\l'
    docker-compose down
- Volumes 
* docker-compose.yml
    version: '2'
    volumes:
    dados:
    services:
    db:
    image: postgres:9.6
    volumes:
    # Volume dos dados
    - dados:/var/lib/postgresql/data
    # Scripts
    - ./scripts:/scripts
    - ./scripts/init.sql:/docker-entrypoint-initdb.d/init.sql
* docker-compose exec db psql -U postgres -f /scripts/check.sql
