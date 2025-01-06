"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3982],{9685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>r,frontMatter:()=>o,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"user-guide/apps/anything_llm","title":"Anything LLM","description":"Anything LLM is the all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities. You can configure Anything LLM using the GaiaNet node as the LLM backend.","source":"@site/versioned_docs/version-1.0.0/user-guide/apps/anything_llm.md","sourceDirName":"user-guide/apps","slug":"/user-guide/apps/anything_llm","permalink":"/1.0.0/user-guide/apps/anything_llm","draft":false,"unlisted":false,"editUrl":"https://github.com/GaiaNet-AI/docs/edit/main/versioned_docs/version-1.0.0/user-guide/apps/anything_llm.md","tags":[],"version":"1.0.0","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Open WebUI","permalink":"/1.0.0/user-guide/apps/openwebui"},"next":{"title":"Cursor AI IDE","permalink":"/1.0.0/user-guide/apps/cursor"}}');var i=t(4848),s=t(8453);const o={sidebar_position:4},d="Anything LLM",c={},h=[{value:"Steps",id:"steps",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"anything-llm",children:"Anything LLM"})}),"\n",(0,i.jsx)(n.p,{children:"Anything LLM is the all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities. You can configure Anything LLM using the GaiaNet node as the LLM backend."}),"\n",(0,i.jsxs)(n.p,{children:["It's recommended to start a node without any snapshots, like ",(0,i.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/node-configs/tree/main/llama-3-8b-instruct",children:"this one"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsx)(n.p,{children:"First, we will need to add GaiaNet Node as the LLM chat model and embedding model."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Go to Settings"}),"\n",(0,i.jsx)(n.li,{children:"Choose Local AI as the LLM provider in the LLM inference section. Then copy and paste the GaiaNet node API base URL in the LocalAI Base URL. The chat model and embedding model along with your node will be loaded automatically. Choose the chat model here and input the context length. Remember to click on Save Changes to make the changes take effect."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(756).A+"",width:"2776",height:"1248"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Then go to the Embedding Preference section and choose LocalAI as the embedding provider. Then copy and paste the GaiaNet node API base URL in the LocalAI Base URL. The chat model and embedding model along with your node will be loaded automatically. Choose the embedding model here and input the max embedding chunk length. Don't forget to click on Save Changes to make the changes take effect."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The above operations make the GaiaNet node as the LLM backend."}),"\n",(0,i.jsx)(n.p,{children:"Second, let's set up the data source. You can upload a file or use the data connectors provided by Anything LLM."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(5247).A+"",width:"2686",height:"1530"})}),"\n",(0,i.jsx)(n.p,{children:"When you move a data source to the workspace, Anything LLM will call the GaiaNet node's embedding API to chunk and compute embeddings for your documentation, which may take some minutes."}),"\n",(0,i.jsx)(n.p,{children:"That's it. When the embedding is done, go back to your workspace and ask a question."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6230).A+"",width:"1892",height:"864"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["You can check out the ",(0,i.jsx)(n.code,{children:"start-llamaedge.log"})," to check what happens."]}),"\n"]})]})}function r(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},756:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/anything-llm-01-f6c30d16fad64e2e6d8d2c0735914a25.png"},5247:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/anything-llm-02-3764f4ddb2aeef48cbd11eead1a2aa57.png"},6230:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/anything-llm-03-3630c1f82a45461237e6a1fcf825a8d3.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var a=t(6540);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);