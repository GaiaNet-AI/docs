"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3951],{5147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"tutorial/eliza","title":"Working with eliza","description":"eliza is a simple, fast, and lightweight AI agent framework. Recently, eliza has integrated Gaia as one of the model service provider. This means you can now use Gaia as the LLM service backend for the Eliza framework.","source":"@site/docs/tutorial/eliza.md","sourceDirName":"tutorial","slug":"/tutorial/eliza","permalink":"/tutorial/eliza","draft":false,"unlisted":false,"editUrl":"https://github.com/GaiaNet-AI/docs/edit/main/docs/tutorial/eliza.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Working with Coinbase AgentKit","permalink":"/tutorial/coinbase"},"next":{"title":"GaiaNet: GenAI Agent Network","permalink":"/litepaper"}}');var a=t(4848),r=t(8453);const s={sidebar_position:4},l="Working with eliza",o={},c=[{value:"Build a Trump agent with eliza and Gaia",id:"build-a-trump-agent-with-eliza-and-gaia",level:3},{value:"Set up the environment",id:"set-up-the-environment",level:4},{value:"Choose Gaia as the model service provider",id:"choose-gaia-as-the-model-service-provider",level:4},{value:"Create the Trump agent",id:"create-the-trump-agent",level:4},{value:"Advanced use case",id:"advanced-use-case",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"working-with-eliza",children:"Working with eliza"})}),"\n",(0,a.jsxs)(n.p,{children:["eliza is a simple, fast, and lightweight AI agent framework. Recently, eliza has integrated Gaia as one of the ",(0,a.jsx)(n.a,{href:"https://github.com/elizaOS/eliza/pull/762",children:"model service provider"}),". This means you can now use Gaia as the LLM service backend for the Eliza framework."]}),"\n",(0,a.jsx)(n.h3,{id:"build-a-trump-agent-with-eliza-and-gaia",children:"Build a Trump agent with eliza and Gaia"}),"\n",(0,a.jsxs)(n.p,{children:["This guide demonstrates how to create an agent with Trump-like characteristics using ",(0,a.jsx)(n.a,{href:"https://elizaos.github.io/eliza/docs/quickstart/",children:"the Get Started guide from eliza"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"set-up-the-environment",children:"Set up the environment"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Note: Ensure your Node.js version is above 0.23.0 before proceeding."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Firstly, clone the Eliza repository:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"git clone https://github.com/elizaos/eliza.git\ncd eliza\ngit checkout v0.1.7-alpha.1\n"})}),"\n",(0,a.jsx)(n.p,{children:"Next, install the required dependencies."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pnpm install\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then, build the local libraries."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pnpm build\n"})}),"\n",(0,a.jsx)(n.h4,{id:"choose-gaia-as-the-model-service-provider",children:"Choose Gaia as the model service provider"}),"\n",(0,a.jsx)(n.p,{children:"After that, we will need to configure the environment and use a Gaia node as model service provider."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"cp .env.example .env\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then, edit the ",(0,a.jsx)(n.code,{children:".env"})," file to include Gaia-related configuration values:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"# Gaianet Configuration\nGAIANET_MODEL=llama3b\nGAIANET_SERVER_URL=https://llama3b.gaia.domains/v1\n\nSMALL_GAIANET_MODEL=            # Default: llama3b\nSMALL_GAIANET_SERVER_URL=       # Default: https://llama3b.gaia.domains/v1\nMEDIUM_GAIANET_MODEL=           # Default: llama\nMEDIUM_GAIANET_SERVER_URL=      # Default: https://llama8b.gaia.domains/v1\nLARGE_GAIANET_MODEL=            # Default: qwen72b\nLARGE_GAIANET_SERVER_URL=       # Default: https://qwen72b.gaia.domains/v1\n\nGAIANET_EMBEDDING_MODEL=nomic-embed\nUSE_GAIANET_EMBEDDING=TRUE          # Set to TRUE for GAIANET/768, leave blank for local\n"})}),"\n",(0,a.jsxs)(n.p,{children:["By using this configuration, the system will utilize the Llama 3b Gaia domain as the LLM backend. You can replace ",(0,a.jsx)(n.code,{children:"GAIANET_SERVER_URL"})," with a URL for your custom node or domain."]}),"\n",(0,a.jsx)(n.h4,{id:"create-the-trump-agent",children:"Create the Trump agent"}),"\n",(0,a.jsxs)(n.p,{children:["The default character templates are located in the ",(0,a.jsx)(n.code,{children:"characters"})," folder."]}),"\n",(0,a.jsxs)(n.p,{children:["Update the ",(0,a.jsx)(n.code,{children:"modelProvider"})," for the desired character. For Gaia, the provider name is ",(0,a.jsx)(n.code,{children:"gaianet"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'    "name": "trump",\n    "clients": [],\n    "modelProvider": "gaianet",\n    "settings": {\n        "secrets": {},\n        "voice": {\n            "model": "en_US-male-medium"\n        }\n    },\n    "plugins": [],\n'})}),"\n",(0,a.jsx)(n.p,{children:"Then, we can use the following command line to start running the agent."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'pnpm run dev --character="characters/trump.character.json"\n'})}),"\n",(0,a.jsx)(n.p,{children:"After the service runs successfully, we can launch the client UI to interact with the agent:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pnpm start:client\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Finally, open ",(0,a.jsx)(n.code,{children:"http://localhost:5174/"})," on your browser to start chatting with the agent."]}),"\n",(0,a.jsx)("img",{width:"1274",alt:"image",src:"https://github.com/user-attachments/assets/48474b35-1d40-4334-8ed0-c97f373c2b0b"}),"\n",(0,a.jsx)(n.h3,{id:"advanced-use-case",children:"Advanced use case"}),"\n",(0,a.jsxs)(n.p,{children:["For more inspiration, refer to",(0,a.jsx)(n.a,{href:"https://x.com/dabit3/status/1863772029565981144",children:"Nader Fabit's example on building a Twitter AI bot"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);