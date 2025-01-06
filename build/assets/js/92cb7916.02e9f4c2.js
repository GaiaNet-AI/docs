"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3324],{9950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"user-guide/apps/agent-zero","title":"Agent Zero","description":"Agent Zero is a general purpose AI agent application. You can simply ask it to accomplish tasks on the command line.","source":"@site/versioned_docs/version-1.0.0/user-guide/apps/agent-zero.md","sourceDirName":"user-guide/apps","slug":"/user-guide/apps/agent-zero","permalink":"/1.0.0/user-guide/apps/agent-zero","draft":false,"unlisted":false,"editUrl":"https://github.com/GaiaNet-AI/docs/edit/main/versioned_docs/version-1.0.0/user-guide/apps/agent-zero.md","tags":[],"version":"1.0.0","sidebarPosition":103,"frontMatter":{"sidebar_position":103},"sidebar":"tutorialSidebar","previous":{"title":"LlamaCoder","permalink":"/1.0.0/user-guide/apps/llamacoder"},"next":{"title":"Translation Agent  + GaiaNet","permalink":"/1.0.0/user-guide/apps/translation-agent"}}');var i=t(4848),a=t(8453);const r={sidebar_position:103},c="Agent Zero",l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure the agent",id:"configure-the-agent",level:2},{value:"Run the agent",id:"run-the-agent",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"Example 4",id:"example-4",level:3},{value:"Example 5",id:"example-5",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"agent-zero",children:"Agent Zero"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/frdel/agent-zero",children:"Agent Zero"})," is a general purpose AI agent application. You can simply ask it to accomplish tasks on the command line.\nIt is designed to be dynamic, organically growing, and learning as users use it. It leverages your computer as a tool to accomplish your tasks."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"You will need a Gaia node to provide LLM services to the agent app. You can"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/1.0.0/node-guide/quick-start",children:"run your own node"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/1.0.0/user-guide/nodes",children:"use a public node"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial, we will use the public ",(0,i.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/node-configs/tree/main/llama-3.1-8b-instruct",children:"Llama-3.1-8B node"})," to power the Agent Zero."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Model type"}),(0,i.jsx)(n.th,{children:"API base URL"}),(0,i.jsx)(n.th,{children:"Model name"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Chat"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://llama.us.gaianet.network/v1/",children:"https://llama.us.gaianet.network/v1/"})}),(0,i.jsx)(n.td,{children:"llama"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Embedding"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://llama.us.gaianet.network/v1/",children:"https://llama.us.gaianet.network/v1/"})}),(0,i.jsx)(n.td,{children:"nomic-embed"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"You will also need to make sure your Docker engine is running."})," Because the Agent Zero framework will leverage Docker to execute the generated code."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["You can start a local LLM service using ",(0,i.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/node-configs/tree/main/llama-3.1-8b-instruct",children:"Gaia"})," or ",(0,i.jsx)(n.a,{href:"https://llamaedge.com/docs/user-guide/quick-start-command",children:"LlamaEdge"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/moxin-org/moxin",children:"Moxin"}),", and then use ",(0,i.jsx)(n.code,{children:"http://localhost:8080/v1/"})," as the LLM API service endpoint URL."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configure-the-agent",children:"Configure the agent"}),"\n",(0,i.jsx)(n.p,{children:"First, we will need to get the source code of a Gaia-compatible version of Agent Zero."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/JYC0413/agent-zero-gaia.git\ncd agent-zero-gaia\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then, let's install the required dependencies."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pip install -r requirements.txt\n"})}),"\n",(0,i.jsx)(n.p,{children:"Next, let's configure the gaia node and other parameters."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cp example.env .env\n"})}),"\n",(0,i.jsx)(n.p,{children:"You will need to configure the following items:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CHAT_MODEL_BASE_URL"}),": URL for the LLM API base URL. E.g., ",(0,i.jsx)(n.code,{children:"https://llama.us.gaianet.network/v1/"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CHAT_MODEL_NAME"}),": Name of the chat model to be used. E.g., ",(0,i.jsx)(n.code,{children:"llama"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CHAT_API_KEY"}),": An API key to access the LLM services. You can enter several random characters here. E.g., ",(0,i.jsx)(n.code,{children:"GAIA"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EMBEDDING_MODEL_BASE_URL"}),": URL for the embedding model API base URL. E.g., ",(0,i.jsx)(n.code,{children:"https://llama.us.gaianet.network/v1/"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EMBEDDING_MODEL_NAME"}),": Name of the embedding model name. E.g., ",(0,i.jsx)(n.code,{children:"nomic-embed"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"EMBEDDING_API_KEY"}),": An API key to access the embedding services. You can enter several random characters here. E.g., ",(0,i.jsx)(n.code,{children:"GAIA"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"run-the-agent",children:"Run the agent"}),"\n",(0,i.jsxs)(n.p,{children:["Finally, let's run the Agent Zero application backed by the ",(0,i.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/node-configs/tree/main/llama-3.1-8b-instruct",children:"Llama 3.1 8b"})," Gaia node."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"python main.py\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can interact with Agent Zero via the command line. You will see the Agent Zero framework will call the related tools and execute some code to complete your task."}),"\n",(0,i.jsx)(n.h3,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.p,{children:"Get the time in berlin and seattle"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6918).A+"",width:"1570",height:"598"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(8541).A+"",width:"1421",height:"515"})}),"\n",(0,i.jsx)(n.p,{children:"Save the above result in a file using node.js"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(8596).A+"",width:"1452",height:"942"})}),"\n",(0,i.jsx)(n.h3,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(n.p,{children:["Install ",(0,i.jsx)(n.a,{href:"https://midnight-commander.org/",children:"mc"}),". do not use ",(0,i.jsx)(n.code,{children:"-y"})," flag"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(251).A+"",width:"964",height:"549"})}),"\n",(0,i.jsx)(n.h3,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"top"}),", show the system load"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6034).A+"",width:"917",height:"525"})}),"\n",(0,i.jsx)(n.h3,{id:"example-4",children:"Example 4"}),"\n",(0,i.jsx)(n.p,{children:"Memorize my openai api key - 563434643464"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6745).A+"",width:"996",height:"676"})}),"\n",(0,i.jsx)(n.h3,{id:"example-5",children:"Example 5"}),"\n",(0,i.jsxs)(n.p,{children:["Extract an mp3 audio track from a mp4 video file using ffmpeg. You will need to put an mp4 file (e.g., ",(0,i.jsx)(n.code,{children:"video.mp4"}),") into the ",(0,i.jsx)(n.code,{children:"work_dir"})," and tell the agent about it."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(1920).A+"",width:"244",height:"276"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6151).A+"",width:"886",height:"202"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(7838).A+"",width:"1930",height:"1040"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},6918:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/agent-zero-01-5977b5b913065e4d018f6154a23ee527.png"},8541:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/agent-zero-02-7043b5f92118e22f7fc418c131c35965.png"},8596:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/agent-zero-03-b5ebd8903dbb3ebdc2a9b01b9b8d522e.png"},251:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/agent-zero-04-169d90a36a516babfd2025f500ce5cc9.png"},6034:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/agent-zero-05-8f884d2fdad5e381880fb9fde3c1c14b.png"},6745:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/agent-zero-06-865e4e1235f0eceec9395c8d85a01db9.png"},1920:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,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"},6151:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/agent-zero-08-f040087da5fa37caa0fa94399e22e464.png"},7838:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/agent-zero-09-f745e0628a6fafe58231ca5987e2bad3.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);