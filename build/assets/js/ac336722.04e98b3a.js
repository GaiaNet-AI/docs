"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9940],{2447:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"user-guide/apps/llamaedgebook","title":"LlamaEdgeBook","description":"LlamaEdgeBook, forked from GroqBook, is an open-source tool that scaffolds the creation of books from a one-line prompt using open-source LLMs. You can configure the LlamaEdgeBook framework using any GaiaNet node as the backend LLM API.","source":"@site/docs/user-guide/apps/llamaedgebook.md","sourceDirName":"user-guide/apps","slug":"/user-guide/apps/llamaedgebook","permalink":"/user-guide/apps/llamaedgebook","draft":false,"unlisted":false,"editUrl":"https://github.com/GaiaNet-AI/docs/edit/main/docs/user-guide/apps/llamaedgebook.md","tags":[],"version":"current","sidebarPosition":105,"frontMatter":{"sidebar_position":105},"sidebar":"tutorialSidebar","previous":{"title":"A planning agent","permalink":"/user-guide/apps/gpt-planner"},"next":{"title":"LlamaTutor","permalink":"/user-guide/apps/llamatutor"}}');var s=o(4848),a=o(8453);const r={sidebar_position:105},i="LlamaEdgeBook",d={},c=[{value:"Steps",id:"steps",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"llamaedgebook",children:"LlamaEdgeBook"})}),"\n",(0,s.jsx)(n.p,{children:"LlamaEdgeBook, forked from GroqBook, is an open-source tool that scaffolds the creation of books from a one-line prompt using open-source LLMs. You can configure the LlamaEdgeBook framework using any GaiaNet node as the backend LLM API."}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.p,{children:"First, get the source code of the LlamaEdgeBook. Open your terminal and enter the following command line."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git clone https://github.com/second-state/LlamaEdgeBook\ncd LlamaEdgeBook\n"})}),"\n",(0,s.jsx)(n.p,{children:"Ensure you have Python 3.11 or later installed. Then, install the necessary packages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pip install -r requirements.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, let's configure the GaiaNet node as the LLM backend."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'export OPENAI_BASE_URL="https://gemma.us.gaianet.network/v1"\nexport OPENAI_MODEL_NAME="gemma" \nexport OPENAI_API_KEY="GAIANET" \n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Hint:"})," if you don't know the model name of the GaiaNet node, you can retrieve the model information using:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -X POST https://0x57b00e4f3d040e28dc8aabdbe201212e5fb60ebc.us.gaianet.network/v1/models\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then, use the following command line to run the app."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"streamlit run main.py\n"})}),"\n",(0,s.jsx)(n.p,{children:"When the app runs successfully, the terminal will output the following information."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Collecting usage statistics. To deactivate, set browser.gatherUsageStats to false.\n\n  You can now view your Streamlit app in your browser.\n\n  Local URL: http://localhost:8501\n  Network URL: http://10.128.0.8:8501\n  External URL: http://35.222.115.181:8501\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Finally, you can open the ",(0,s.jsx)(n.code,{children:"http://localhost:8501"})," in your browser to generate a book."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(908).A+"",width:"2824",height:"1176"})}),"\n",(0,s.jsx)(n.p,{children:"The LlamaEdgeBook will first generate an outline based on your prompt, and then create the chapter content based on the outline."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(7319).A+"",width:"1548",height:"1804"})}),"\n",(0,s.jsx)(n.p,{children:"You can also download the book after the generation is complete."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(9006).A+"",width:"1668",height:"1038"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},908:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/book-01-8612df6e0c495f2d68979b76a4cb7ca4.png"},7319:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/book-02-3c158830817920dbdb920985c0dd6ce5.png"},9006:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/book-03-1a63c3c4eb72eaf948d529875ee479a3.png"},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>i});var t=o(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);