"use strict";(self.webpackChunkldo_docs=self.webpackChunkldo_docs||[]).push([[5335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8506:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},s="02-MySQL",l={unversionedId:"Expense-Project-V2/mysql",id:"Expense-Project-V2/mysql",title:"02-MySQL",description:"Developer has chosen the database MySQL. Hence, we are trying to install it up and configure it.",source:"@site/docs/Expense-Project-V2/mysql.md",sourceDirName:"Expense-Project-V2",slug:"/Expense-Project-V2/mysql",permalink:"/learndevopsonline/build/docs/Expense-Project-V2/mysql",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Expense-Project-V2/mysql.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"01-Frontend",permalink:"/learndevopsonline/build/docs/Expense-Project-V2/frontend"},next:{title:"03-Backend",permalink:"/learndevopsonline/build/docs/Expense-Project-V2/backend"}},i={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"02-mysql"},"02-MySQL"),(0,o.kt)("p",null,"Developer has chosen the database MySQL. Hence, we are trying to install it up and configure it."),(0,o.kt)("admonition",{title:"Hint",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Versions of the DB Software you will get context from the developer, Meaning we need to check with developer."))),(0,o.kt)("p",null,"Install MySQL Server 8.0.x"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install mysql-server -y\n")),(0,o.kt)("p",null,"Start MySQL Service "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable mysqld\nsystemctl start mysqld  \n")),(0,o.kt)("p",null,"Next, We need to change the default root password in order to start using the database service. Use password ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ExpenseApp@1"))," or any other as per your choice. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mysql_secure_installation --set-root-pass ExpenseApp@1\n")))}u.isMDXComponent=!0}}]);