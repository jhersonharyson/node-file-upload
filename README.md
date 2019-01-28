# node-file-upload

Projeto de upload de imagens com node js

# Instalação
* execute o comando `npm install` no diretorio do projeto
* execute o nomedom com o comando `npm dev` ou para produção `npm start`


# Executando
* faça uma reqisição post para `localhost:3000/posts` enviando um multipart file no body com o nome/key de `file` e o arquivo de imagem no `value`

O servidor armazenará as imagens recebidas pela requisição em `tmp/uploads`
