Imagem para BD

- Montar Imagem
    * docker build -t mysql-image -f api/db/DockerFile .
- ver imagens para uso
    * docker image ls
- Montar container
    *  docker run -d --rm --name mysql-container mysql-image 

- Executar comandos dentro de um container
    * docker exec -i mysql-container mysql -u root --bdteste > api/db/script.sql
    *    docker exec -it mysql-container /bin/bash  
