import{d as u,o as r,c as i,r as k,u as m,F as p,b as _,e as d,f,w as g,g as y,t as n}from"./index-BGKJ6ac-.js";const B=u({__name:"list",setup(h){const a=Object.keys(localStorage).reduce((t,o)=>{const e=localStorage.getItem(o);return e&&e.includes("title")&&e.includes("key")&&e.includes("imgs")&&t.push(JSON.parse(e)),t},[]),l=_();return console.log("rt: ",l),(t,o)=>{const e=d("router-link");return r(!0),i(p,null,k(m(a),(s,c)=>(r(),f(e,{key:c,class:"li",to:{name:"home",query:{key:s.key}}},{default:g(()=>[y(n(s.title)+" - "+n(s.key),1)]),_:2},1032,["to"]))),128)}}});export{B as default};
