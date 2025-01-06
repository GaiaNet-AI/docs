"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3889],{3912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"user-guide/apps/continue","title":"AI coding assistant: Continue","description":"Continue is the leading open-source AI code assistant.","source":"@site/docs/user-guide/apps/continue.md","sourceDirName":"user-guide/apps","slug":"/user-guide/apps/continue","permalink":"/user-guide/apps/continue","draft":false,"unlisted":false,"editUrl":"https://github.com/GaiaNet-AI/docs/edit/main/docs/user-guide/apps/continue.md","tags":[],"version":"current","sidebarPosition":102,"frontMatter":{"sidebar_position":102},"sidebar":"tutorialSidebar","previous":{"title":"CodeGPT","permalink":"/user-guide/apps/codegpt"},"next":{"title":"LlamaCoder","permalink":"/user-guide/apps/llamacoder"}}');var s=t(4848),o=t(8453);const d={sidebar_position:102},r="AI coding assistant: Continue",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Continue",id:"install-continue",level:2},{value:"Configure Continue",id:"configure-continue",level:2},{value:"Use the plugin",id:"use-the-plugin",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ai-coding-assistant-continue",children:"AI coding assistant: Continue"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/continuedev/continue",children:"Continue"})," is the leading open-source AI code assistant.\nIt is a copilot-like plugin for VSCode and JetBrains to provide custom autocomplete and chat experiences inside\nthose IDEs. You can easily configure it to use Gaia nodes as LLM backends. In fact, you can choose different Gaia\nnodes for"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The autocomplete model for coding tasks."}),"\n",(0,s.jsx)(n.li,{children:"The chat model for understanding and discussing code."}),"\n",(0,s.jsx)(n.li,{children:"The embedding model to provide chat context based on local files."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"You will need a Gaia node ready to provide LLM services through a public URL. You can"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/node-guide/quick-start",children:"Run your own node"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/user-guide/nodes",children:"Use a public node"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In this tutorial, we will use public nodes to power the Continue plugin."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Model type"}),(0,s.jsx)(n.th,{children:"API base URL"}),(0,s.jsx)(n.th,{children:"Model name"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Chat"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://gemma.us.gaianet.network/v1/",children:"https://gemma.us.gaianet.network/v1/"})}),(0,s.jsx)(n.td,{children:"gemma"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Embedding"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://gemma.us.gaianet.network/v1/",children:"https://gemma.us.gaianet.network/v1/"})}),(0,s.jsx)(n.td,{children:"nomic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Autocompletion"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://codestral.us.gaianet.network/v1/",children:"https://codestral.us.gaianet.network/v1/"})}),(0,s.jsx)(n.td,{children:"codestral"})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["It is important to note that Continue requires the API endpoint to include a ",(0,s.jsx)(n.code,{children:"/"})," at the end."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"install-continue",children:"Install Continue"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=Continue.continue",children:"Load this link"})," to install the Continue IDE plugin.",(0,s.jsx)(n.br,{}),"\n","It will open up your VSCode when you click on the ",(0,s.jsx)(n.strong,{children:"Install"})," button on the web page. When you are\nasked to configure Continue, just click on ",(0,s.jsx)(n.strong,{children:"Skip"})," and finish the installation without selecting a local model."]}),"\n",(0,s.jsx)(n.h2,{id:"configure-continue",children:"Configure Continue"}),"\n",(0,s.jsxs)(n.p,{children:["Click on the gear icon on the toolbar to load the ",(0,s.jsx)(n.code,{children:"config.json"})," file for the Continue plugin. The file is located\nin your own home directory ",(0,s.jsx)(n.code,{children:"$HOME/.continue/config.json"}),".\nYou can now change the ",(0,s.jsx)(n.code,{children:"config.json"})," file as follows.\nIt asks the Continue plugin to use different public Gaia nodes and models for\nchat, code autocomplete and embeddings."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "models": [\n    {\n      "model": "gemma",\n      "title": "LlamaEdge",\n      "apiBase": "https://gemma.us.gaianet.network/v1/",\n      "provider": "openai"\n    }\n  ],\n  "tabAutocompleteModel": {\n      "title": "Autocomplete",\n      "apiBase": "https://codestral.us.gaianet.network/v1/",\n      "model": "codestral",\n      "provider": "openai"\n  },\n  "embeddingsProvider": {\n    "provider": "openai",\n    "model": "nomic-embed",\n    "apiBase": "https://gemma.us.gaianet.network/v1/"\n  },\n  "customCommands": [\n    {\n      "name": "test",\n      "prompt": "{{{ input }}}\\n\\nWrite a comprehensive set of unit tests for the selected code. It should setup, run tests that check for correctness including important edge cases, and teardown. Ensure that the tests are complete and sophisticated. Give the tests just as chat output, don\'t edit any file.",\n      "description": "Write unit tests for highlighted code"\n    }\n  ],\n  "allowAnonymousTelemetry": true\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Save the ",(0,s.jsx)(n.code,{children:"config.json"})," file and you are done!"]}),"\n",(0,s.jsx)(n.h2,{id:"use-the-plugin",children:"Use the plugin"}),"\n",(0,s.jsx)(n.p,{children:"The following screenshot shows how you can chat with an error message\ninside the IDE."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(9936).A+"",width:"1609",height:"1051"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9936:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/continue-01-e2a5bd512068829ed1debacc682accc7.png"},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function d(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);