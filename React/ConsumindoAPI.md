* Passos
    1- Criar projeto
        npx create-react-app react-axios
    2- Instalar axis
        npm install axios
    3- Arquivo api.js
        import axios from "axios";

        const api = axios.create({
        baseURL: "https://api.github.com",
        });

        export default api;

4- Utilizando API method GET
    import React, { useEffect, useState } from "react";
        import api from "./services/api";

        export default function App() {
        const [user, setUser] = useState();

        useEffect(() => {
            api
            .get("/users/romulo27")
            .then((response) => setUser(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        }, []);

        return (
            <div className="App">
            <p>Usuário: {user?.login}</p>
            <p>Biografia: {user?.bio}</p>
            </div>
        );
    }
5- Requisição POST
        useEffect(() => {
        api
            .post("https://minhaapi/novo-usuario",{
                nome: “Romulo”,
                sobrenome: “Sousa”
        })
            .then((response) => setUser(response.data))
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            });
        }, []);
6- Tipos de Requisições
    // Verbo GET
    api.get(endpoint)

    // Verbo POST
    api.post(endpoint, dados)


    // Verbo DELETE
    api.delete(endpoint, dados)

    // Verbo PUT
    api.put(endpoint, dados)