<div id='introducao'>

O **React real chart** é uma aplicação voltada para o apredizando de socket tanto no front quanto no back utilizando o mínimo de pacotes e bilbiotecas possíveis, dando foco em utilizar o React e JavaScript.

</div>

## Tópicos

- [Introdução](#introducao)
- [Instalar e rodar o projeto localmente](#instalacao)
- [Stack utilizada](#stack_utilizada)
- [Demonstração](#demonstração)
- [Aprendizados](#aprendizados)

<div id='instalacao'>

## Instalando e rodando o projeto localmente:

Para rodar o **React real chart** em sua máquina é bem simples.

Você precisa ter instalado:

- Node.js v16
- Yarn ou NPM para a instalação dos pacotes (projeto desenvolvido com Yarn)

Para a instalação dos pacotes você deve entrar em cada pasta individualmente
e rodar o comando `yarn install` ou `npm install`, pois neste projeto temos o _backend_ e o _frontend_.

Navegue para `../server` e rode no terminal o comando:

```bash
yarn install
```

Repita esse passo para `../frontend`.

### Rotas

Lembre-se de alterar as rotas da aplicação nos arquivos.

</div>

E mais um detalhe, a porta padrão do _frontend_ foi definida para `:3000`, e do _backend_ para `:3001`.

Pronto, agora você está preparado para utilizar esta aplicação.
Para iniciar o _backend_ basta rodar `npm run dev`.
E para iniciar o _frontend_ basta rodar `yarn dev` em sua respectiva pasta.

</div>

<div id='stack_utilizada'>
<h2>Stack utilizada</h2>

**Front-end:**

<ul id="frontend-stack">
	<li>React</li>
	<li>Tailwind css</li>
	<li>socket.io</li>
</ul>

**Back-end:**

<ul id="backend-stack">
	<li>Node.js</li>
	<li>Express</li>
	<li>socket.io</li>
</ul>

<div id='demonstração'>
<h2>Demonstração</h2>

Ao entrar na aplicação pela primeira vez, você se encontra-rá a tela de usuário.

1. Na tela inicial com um nome qualquer.

<p align="center">
  <img width="800" height="450" src="https://private-user-images.githubusercontent.com/78622036/286434868-f82b6925-eb7c-4805-87f7-1987846d69f4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMTcwNTIsIm5iZiI6MTcwMTIxNjc1MiwicGF0aCI6Ii83ODYyMjAzNi8yODY0MzQ4NjgtZjgyYjY5MjUtZWI3Yy00ODA1LTg3ZjctMTk4Nzg0NmQ2OWY0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI5VDAwMTIzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY5M2Y4Nzc3MzI5OTY0MjJlNTJkZWFiZjg3ODUyYWY0ODQ5MDJmMGY0YzJiZjQ0ZTcwOGIwMzYwODFlMTg5ZjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.a0sfS1MrLtAbRZ3Y0H6t5LgX0gukWd6P28Yc9w5ssGA"/>  
</p>

2.abra outro janela do navagador e faça o mesmo processo.

<p align="center">
  <img width="800" height="450" src="https://private-user-images.githubusercontent.com/78622036/286435155-caf50b8b-78d5-4cf4-8f2d-dde1b97a353e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMTcwODQsIm5iZiI6MTcwMTIxNjc4NCwicGF0aCI6Ii83ODYyMjAzNi8yODY0MzUxNTUtY2FmNTBiOGItNzhkNS00Y2Y0LThmMmQtZGRlMWI5N2EzNTNlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI5VDAwMTMwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJjNDljNzZlZjRjOTNlMWEwMmZjNWE3NzYxZmFiYjIzNmMwODUxZWRkZjc5YzczMDk5ZWNjZDBiMTE2N2Y4YzcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.7Mozw9iN-K-GE0h2J_iXkOyShKD8jTZ4r3-KhwixwQ4"/>  
</p>

3. Estando nessa tela nas duas janelas ja pode comecar a escrever.

<p align="center">
  <img width="800" height="450" src="https://private-user-images.githubusercontent.com/78622036/286435166-a41f0ca4-3e37-40e2-86fb-a871e94d70ea.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMTcwODQsIm5iZiI6MTcwMTIxNjc4NCwicGF0aCI6Ii83ODYyMjAzNi8yODY0MzUxNjYtYTQxZjBjYTQtM2UzNy00MGUyLTg2ZmItYTg3MWU5NGQ3MGVhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI5VDAwMTMwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk1MWQ2MjU2OTRlMTgwNDlmZWUxZjU3NmUzOWEzZTM4N2E5NzA1NDgyYzliYzU0ZWI2NjYxODc3MTNjMGIzOTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.8HiNWKd550l5j8oR0ffQIIEMS706TzY-_YDa8u8rwhE"/>  
</p>

</div>
