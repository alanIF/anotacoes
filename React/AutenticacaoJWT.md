* Funcionamento
É comum certos recursos serem protegidos para que somente usuários autenticados tenham acesso. Nesses casos os Tokens são utilizados para enviar uma requisição.

O Token é gerado por serviços de autenticação, como JWT, Passport, entre outros. Ele é enviado dentro do headers da requisição.

api.defaults.headers.authorization = `Bearer ${token}`;

Essa validação deve ser inserida no arquivo de configuração da API (services/api.js). Ela vai funcionar como um validador para o usuário. Caso ele tenha um token ativo, libera o acesso para usar um endpoint da API.

* Exemplo
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

api.interceptors.request.use(async config => {
  // Declaramos um token manualmente para teste.
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9";

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;