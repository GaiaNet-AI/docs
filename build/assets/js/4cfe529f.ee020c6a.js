"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9683],{4756:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"node-guide/install_uninstall","title":"Install and uninstall","description":"The GaiaNet node utilizes version control from its source GitHub repo. You can check out the GaiaNet node versions from the release page.","source":"@site/versioned_docs/version-1.0.0/node-guide/install_uninstall.md","sourceDirName":"node-guide","slug":"/node-guide/install_uninstall","permalink":"/1.0.0/node-guide/install_uninstall","draft":false,"unlisted":false,"editUrl":"https://github.com/GaiaNet-AI/docs/edit/main/versioned_docs/version-1.0.0/node-guide/install_uninstall.md","tags":[],"version":"1.0.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Quick start with GaiaNet Node","permalink":"/1.0.0/node-guide/quick-start"},"next":{"title":"System requirements","permalink":"/1.0.0/node-guide/system-requirements"}}');var a=t(4848),s=t(8453);const l={sidebar_position:2},o="Install and uninstall",r={},d=[{value:"Install",id:"install",level:2},{value:"Install the latest version of GaiaNet node",id:"install-the-latest-version-of-gaianet-node",level:3},{value:"Install the specific version of GaiaNet Node",id:"install-the-specific-version-of-gaianet-node",level:3},{value:"Update the current Gaianet node",id:"update-the-current-gaianet-node",level:2},{value:"Uninstall",id:"uninstall",level:2},{value:"What&#39;s installed",id:"whats-installed",level:2},{value:"CLI options for the installer",id:"cli-options-for-the-installer",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"install-and-uninstall",children:"Install and uninstall"})}),"\n",(0,a.jsxs)(n.p,{children:["The GaiaNet node utilizes version control from ",(0,a.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/gaianet-node",children:"its source GitHub repo"}),". You can check out the GaiaNet node versions from ",(0,a.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/gaianet-node/releases",children:"the release page"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,a.jsx)(n.p,{children:"You can install the WasmEdge Runtime on any generic Linux and MacOS platform."}),"\n",(0,a.jsx)(n.h3,{id:"install-the-latest-version-of-gaianet-node",children:"Install the latest version of GaiaNet node"}),"\n",(0,a.jsx)(n.p,{children:"To install the most recent version of GaiaNet node, run the following command line."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The GaiaNet node will be installed in your ",(0,a.jsx)(n.code,{children:"$HOME/gaianet"})," folder by default."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["If you want to install gaianet in a different directory, you can use ",(0,a.jsx)(n.code,{children:"curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash -s --  --base <Full_Path> "})," to specify where you want to install GaiaNet. Once you use ",(0,a.jsx)(n.code,{children:"--base"})," to define a different directory, you should always add ",(0,a.jsx)(n.code,{children:"--base <Full_Path>"})," to init and start your node.\nHere is an example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"# Assume that you're in the root directory\nmkdir test\ncurl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash -s --  --base $HOME/test\ngaianet init --base $HOME/test\ngaianet start --base $HOME/test\ngaianet stop --base $HOME/test\n"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"install-the-specific-version-of-gaianet-node",children:"Install the specific version of GaiaNet Node"}),"\n",(0,a.jsx)(n.p,{children:"If you want to install a particular GaiaNet node version, change the version number in the following command line."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/download/0.1.3/install.sh' | bash\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Check out the release log ",(0,a.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/gaianet-node/releases",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"update-the-current-gaianet-node",children:"Update the current Gaianet node"}),"\n",(0,a.jsx)(n.p,{children:"Simply run the following command to upgrade your node."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash -s -- --upgrade\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"upgrade"})," option will keep your node id."]}),"\n",(0,a.jsx)(n.h2,{id:"uninstall",children:"Uninstall"}),"\n",(0,a.jsx)(n.p,{children:"To uninstall or clear the environment, run the following command."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/uninstall.sh' | bash\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Important reminder: This command will remove all the GaiaNet-related files, including the ",(0,a.jsx)(n.code,{children:"nodeid.json"}),". It's your responsibility to keep your nodeid.json safe. If you want to run the same node after reinstalling, please save the ",(0,a.jsx)(n.code,{children:"nodeid.json"})," file and ",(0,a.jsx)(n.code,{children:"frpc.toml"})," file carefully."]})}),"\n",(0,a.jsx)(n.h2,{id:"whats-installed",children:"What's installed"}),"\n",(0,a.jsxs)(n.p,{children:["If you install the GaiaNet node in the ",(0,a.jsx)(n.code,{children:"$HOME/gaianet"})," directory by default, you will have the following directories and files after installation:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"$HOME/gaianet/bin"})," directory contains the GaiaNet CLI tool, frpc binary and Qdrant Vector database binary."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"$HOME/gaianet/"})," directory contains the ",(0,a.jsx)(n.code,{children:"llamaedge-api-server.wasm"})," and ",(0,a.jsx)(n.code,{children:"rag-api-server.wasm"})," for the LLM inference, dashboard (chatbot ui), nodeid.json for the registering your node, and gaianet-domain binary."]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.code,{children:"$HOME/.wasmedge/bin"})," directory contains the WasmEdge Runtime CLI executable files, which serve as the LLM runtime."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"cli-options-for-the-installer",children:"CLI options for the installer"}),"\n",(0,a.jsx)(n.p,{children:"You can use the following command line to check out all the available CLI options"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash -s -- --help\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output should be as follows. You can use the following options to customize your installation."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Usage:\n  ./install.sh [Options]\n\nOptions:\n  --config <Url>     Specify a url to the config file\n  --base <Path>      Specify a path to the gaianet base directory\n  --reinstall        Install and download all required deps\n  --tmpdir <Path>    Specify a path to the temporary directory [default: /tmp]\n  --ggmlcuda [11/12] Install a specific CUDA enabled GGML plugin version [Possible values: 11, 12].\n  --enable-vector:   Install vector log aggregator\n  --version          Print version\n  --help             Print usage\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(6540);const a={},s=i.createContext(a);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);