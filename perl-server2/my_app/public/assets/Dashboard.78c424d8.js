import{_ as n,r as s,o as r,c,b as e,w as h,d,E as x,e as f,D as b,N as $,a as g}from"./index.9a72980f.js";const v={name:"DashCard",props:{title:String}},N={class:"bg-blue-50 text-center rounded-2xl px-16 py-4 shadow-2xl"},D=d("img",{src:x,alt:"card image",class:"rounded-2xl shadow-2xl"},null,-1);function w(i,l,o,_,p,u){const a=s("RouterLink");return r(),c("div",N,[D,e(a,{to:"/secure/epPlayer",class:"text-4xl w-full bg-zinc-600 text-white"},{default:h(()=>[f(b(o.title),1)]),_:1})])}const C=n(v,[["render",w]]),k={name:"Dashboard",components:{NavHeader:$,NavFooter:g,DashCard:C}},S={class:"bg-amber-300 w-full"},y={class:"grid grid-cols-2 gap-8 m-24"};function B(i,l,o,_,p,u){const a=s("NavHeader"),t=s("DashCard"),m=s("NavFooter");return r(),c("div",S,[e(a),d("div",y,[e(t,{title:"Episodes"}),e(t,{title:"Subscribe"}),e(t,{title:"Cancel Subscription"}),e(t,{title:"Maps"})]),e(m)])}const F=n(k,[["render",B]]);export{F as default};
