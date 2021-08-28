# Web3 Metamask

Kept a practice to develop a web app (NodeJS React) connects metamask via web3

* Web App: NodeJS + React framework
* Purpose: Connect to metamask plugin via Web3

## Snippet

### Prep

```bash
npx create-react-app web3-metamask --template typescript
cd web3-metamask
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion @usedapp/core
npm install @ethersproject/units
npm install @metamask/jazzicon
npm install @chakra-ui/icons
```

### Start web server

```bash
npm start
SKIP_PREFLIGHT_CHECK=true npm start
```

## Thanks

* https://dev.to/jacobedawson/build-a-web3-dapp-in-react-login-with-metamask-4chp
  * https://github.com/jacobedawson/connect-metamask-react-dapp
