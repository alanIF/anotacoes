<p>Principais Comandos</p>
<ul>
    <li> Inserir um registro: Insert one . Exemplo: db.pessoas.insertOne({nome:"Teste"})</li>
    <li>Inserir varios registros: insertMany - db.pessoas.insertMany([{nome:"Teste1"},{nome:"Teste2"}]);</li>
    <li>Listar registros: db.pessoas.find().pretty()</li>
    <li>Listar registros com where: db.pessoas.find({idade>30}).pretty()</li>
    <li> Contar registros:  db.pessoas.find({idade>30}).count()</li>
    <li> Apenas um registro:  db.pessoas.findOne({idade>30})</li>
    <li>update one: db.pessoas.updateOne({nome:"Teste"},{$set :{idade:35}})</li>
    <li>update many, serve para criar outros campos na tabela tambem: db.pessoas.updateMany({},{$set :{peso:80}})</li>
    <li>delete One  : db.pessoas.deleteOne({nome:"Teste"})</li>
    <li>delete Many: db.pessoas.deleteMany({nome:"Teste"})</li>
    <li>Operadores:</li>
    <ul>
        <li>gt :maior que db.pessoas.find(idade: {$gte:30})</li>
         <li>lt :menor que db.pessoas.find(idade: {$lte:30})</li>
         <li>inc: incrementar db.pessoas.updateOne({nome:"Teste"}, {$inc : {idade: 1}})</li>
    </ul>
</ul>
<hr>
<p>Tipos dados: string, interior, array,boolean, data, document</p>
<p>Exemplo: db.carros.insertOne({
    nome: "Fiat Uno",
    placa : "111111",
    ipva_pago : true,
    data_veiculo: new Date(),
    proprietario:{
        nome: "Teste",
        cpf: "111111"
    },
    tags : ["azul",2022]
})</p>

<p> Index: db.pessoas.createIndex({"nome": 1}) </p>
<p> Listar indexes - db.pessoas.getIndexes() </p>
<p>Drop index = db.pessoas.dropIndex("nome_1')</p>
<p>Listar collections - show collections</p>
<p>Deletar colection - db.carros.drop()</p>
<p>db.dropDatabase()</p>
<p>Rodar mongo db - mongodb</p>
<p>mongo</p>
<p>criar banco de dados - use pessoas</p>