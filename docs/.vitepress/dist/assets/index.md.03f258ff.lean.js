import{d as a,p as i,c as o,o as m}from"./chunks/framework.ec2c51c1.js";function s(){return fetch("https://api.github.com/repos/themusecatcher/vue-amazing-ui/contents/package.json?ref=master",{headers:{Accept:"application/vnd.github.v3.raw"}}).then(e=>e.json()).then(e=>e.version??"").then(e=>{if(!e)return;const t=document.querySelector("div.VPHero.has-image.VPHomeHero > div > div.main > p.tagline"),n=document.createElement("samp");n.classList.add("version-tag"),n.innerText=e,t==null||t.appendChild(n)})}const p=JSON.parse('{"title":"Vue Amazing UI","titleTemplate":"Amazing UI Components Library","description":"","frontmatter":{"layout":"home","title":"Vue Amazing UI","titleTemplate":"Amazing UI Components Library","hero":{"name":"Vue Amazing UI","text":"Amazing UI 组件库","tagline":"基于 Vue3 + TS + Vite 开发","image":{"src":"/logo-with-shadow.png","alt":"Vue Amazing UI"},"actions":[{"theme":"brand","text":"Get Started","link":"/guide/features"},{"theme":"alt","text":"View on GitHub","link":"https://github.com/themusecatcher/vue-amazing-ui"},{"theme":"alt","text":"View on NPM","link":"https://www.npmjs.com/package/vue-amazing-ui"}]}},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),r={name:"index.md"},u=a({...r,setup(e){return i(()=>{s()}),(t,n)=>(m(),o("div"))}});export{p as __pageData,u as default};
