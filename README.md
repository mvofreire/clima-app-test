## Pré Requisitos Mínimos

- Node 8
- Yarn 

## Scripts disponíveis

Entre no diretoria da aplicação para ficar disponivel os seguintes comandos:

### `yarn install`

Instala todas as dependencias da aplicação

### `yarn start`

Roda a aplicação em modo de desenvolvimento.<br>

### `yarn test`

Inicia os teste.<br>

### `yarn test:watch`

Inicia os teste em modo de exibição interativo.<br>

### `yarn test:coverage`

Inicia os teste e mostra cobertura para aplicação<br>

### `yarn build`

Builda a aplicação para modo de `production` na pasta `build`
ele corretamente agrupa e otimiza os arquivos para melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes. <br>
Aplicativo está pronto para ser implantado!

## Instalação
- Entre no diretorio root da aplicação
- Rode o comando `yarn install`
- Rode o comando `yarn start`
- Abra [http://localhost:3000](http://localhost:3000) para ver no browser aplicação rodando.

- Para Produção rode `yarn build` - apos build a aplicação estara disponivel dentro da past `build`

## Técnologias Utilizadas

- ReactJs para desenvolvimento de aplicação - https://reactjs.org/
- LocalStorage para manter cache e timer
- Jest, Enzyme - Para desenvolvimento de testes - https://jestjs.io/
- OPenWeatherMap - para fornecimento de dados API - https://openweathermap.org/
- React Grid System - para estrutura de grid da aplicacao - https://jsxmachina.github.io/react-grid-system/
- EsLint - para validação de manutenção do código - https://eslint.org/
- ReactJss - Para tematizar e extração e isolação de css para aplicação - https://cssinjs.org/benefits?v=v9.8.7
