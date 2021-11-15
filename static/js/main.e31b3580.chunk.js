(this["webpackJsonpwork-portfolio"]=this["webpackJsonpwork-portfolio"]||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var c,a,o=n(0),r=n.n(o),s=n(9),i=n.n(s),l=(n(72),n(73),n(6)),j=n(42),b=n(5),d=n(135),u=n(138),O=n(141),h=n(134),f=n(136),x=n(139),m=n(140),p=n(137),g=n(16),v=n(29),y=n.n(v),C="GET_USERS",E="DELETE_USER",k="ADD_USER",S="UPDATE_USER",w="GET_SINGLE_USER",U=function(){return function(e){y.a.get("".concat("http://localhost:5000/user")).then((function(t){var n;console.log("res",t),e((n=t.data,{type:C,payload:n}))})).catch((function(e){console.log(e)}))}},A=function(e){return function(t){y.a.delete("".concat("http://localhost:5000/user","/").concat(e)).then((function(e){console.log("res",e),t({type:E}),t(U())})).catch((function(e){console.log(e)}))}},T=function(e){return function(t){y.a.post("".concat("http://localhost:5000/user"),e).then((function(e){console.log("res",e),t({type:k})})).catch((function(e){console.log(e)}))}},N=function(e){return function(t){y.a.get("".concat("http://localhost:5000/user","/").concat(e)).then((function(e){var n;console.log("res",e),t((n=e.data,{type:w,payload:n}))})).catch((function(e){console.log(e)}))}},D=function(e,t){return function(n){y.a.put("".concat("http://localhost:5000/user","/").concat(t),e).then((function(e){console.log("res",e),n({type:S})})).catch((function(e){console.log("Xato")}))}},F=n(43),G=n(3),_=Object(b.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(h.a);function z(e,t,n,c,a){return{name:e,calories:t,fat:n,carbs:c,protein:a}}z("Frozen yoghurt",159,6,24,4),z("Ice cream sandwich",237,9,37,4.3),z("Eclair",262,16,24,6),z("Cupcake",305,3.7,67,4.3),z("Gingerbread",356,16,49,3.9);var P=Object(d.a)({table:{marginTop:100,minWidth:900}}),R=F.a.button(c||(c=Object(j.a)(["\n    font-size: 18px;\n    padding: 7px 12px;\n    color: white;\n    background-color: red;\n    border:none;\n    border-radius: 50%;\n    margin-right: 10px;\n"]))),B=F.a.button(a||(a=Object(j.a)(["\n    font-size: 18px;\n    padding: 7px 12px;\n    color: white;\n    background-color: #13d313;\n    border:none;\n    border-radius: 50%;\n"]))),I=function(){var e=P(),t=Object(l.f)(),n=Object(g.b)(),c=Object(g.c)((function(e){return e.data})).users,a=Object(g.c)((function(e){return e.data})).loading;Object(l.e)();Object(o.useEffect)((function(){n(U())}),[a]);return Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{children:Object(G.jsx)("button",{onClick:function(){t("/addUser")},children:"Add User"})}),Object(G.jsx)(f.a,{component:p.a,children:Object(G.jsxs)(u.a,{className:e.table,size:"small","aria-label":"a dense table",children:[Object(G.jsx)(x.a,{children:Object(G.jsxs)(m.a,{children:[Object(G.jsx)(_,{children:"Name"}),Object(G.jsx)(_,{align:"center",children:"Email"}),Object(G.jsx)(_,{align:"center",children:"Contact"}),Object(G.jsx)(_,{align:"center",children:"Address"}),Object(G.jsx)(_,{align:"center",children:"Action"})]})}),Object(G.jsx)(O.a,{children:c&&c.map((function(e){return Object(G.jsxs)(m.a,{children:[Object(G.jsx)(h.a,{component:"th",scope:"row",children:e.name}),Object(G.jsx)(h.a,{align:"center",children:e.email}),Object(G.jsx)(h.a,{align:"center",children:e.contact}),Object(G.jsx)(h.a,{align:"center",children:e.address}),Object(G.jsxs)(h.a,{align:"center",children:[Object(G.jsx)(R,{onClick:function(){return t=e.id,void(window.confirm("Are you  sure wanted to delete the user ?")&&n(A(t)));var t},children:Object(G.jsx)("i",{class:"fas fa-trash-alt"})}),Object(G.jsx)(B,{onClick:function(){return t("/editUser/".concat(e.id))},children:Object(G.jsx)("i",{class:"far fa-edit"})})]})]},e.id)}))})]})})]})},L=n(24),J=n(11),V=n(15),Y=n(142),M=Object(d.a)((function(e){return{root:{marginTop:100,"& > *":{margin:e.spacing(1),width:"45ch"}}}})),W=function(){var e=M(),t=Object(o.useState)({name:"",email:"",contact:"",address:""}),n=Object(V.a)(t,2),c=n[0],a=n[1],r=Object(o.useState)(""),s=Object(V.a)(r,2),i=s[0],j=s[1],b=Object(l.f)(),d=function(){b("/")},u=Object(g.b)(),O=c.name,h=c.email,f=c.contact,x=c.address,m=function(e){var t=e.target,n=t.name,o=t.value;a(Object(J.a)(Object(J.a)({},c),{},Object(L.a)({},n,o)))};return Object(G.jsxs)("div",{children:[Object(G.jsx)("button",{onClick:d,children:"Go Back"}),Object(G.jsx)("h2",{children:"Add User."}),i&&Object(G.jsx)("h3",{style:{color:"red"},children:i}),Object(G.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),O&&x&&h&&f?(u(T(c)),d(),j("")):j("Please enter all input Fields.")},children:[Object(G.jsx)(Y.a,{id:"standart-basic",label:"Name",name:"name",value:O,type:"text",onChange:m}),Object(G.jsx)("br",{}),Object(G.jsx)(Y.a,{id:"standart-basic",label:"Email",name:"email",value:h,type:"email",onChange:m}),Object(G.jsx)("br",{}),Object(G.jsx)(Y.a,{id:"standart-basic",label:"Contact",name:"contact",value:f,type:"number",onChange:m}),Object(G.jsx)("br",{}),Object(G.jsx)(Y.a,{id:"standart-basic",label:"Address",name:"address",value:x,type:"text",onChange:m}),Object(G.jsx)("br",{}),Object(G.jsx)("button",{children:"Yuborish"})]})]})},X=Object(d.a)((function(e){return{root:{marginTop:100,"& > *":{margin:e.spacing(1),width:"45ch"}}}})),q=function(){var e=X(),t=Object(o.useState)({name:"",email:"",contact:"",address:""}),n=Object(V.a)(t,2),c=n[0],a=n[1],r=Object(o.useState)(""),s=Object(V.a)(r,2),i=s[0],j=s[1],b=Object(l.g)().id,d=Object(g.c)((function(e){return e.data})),u=d.user,O=Object(l.f)(),h=function(){O("/")},f=Object(g.b)(),x=c.name,m=c.email,p=c.contact,v=c.address;Object(o.useEffect)((function(){f(N(b))}),[]),Object(o.useEffect)((function(){u&&(console.log("user",u),a(Object(J.a)({},u)))}),[u]);var y=function(e){var t=e.target,n=t.name,o=t.value;a(Object(J.a)(Object(J.a)({},c),{},Object(L.a)({},n,o)))};return Object(G.jsxs)("div",{children:[Object(G.jsx)("button",{onClick:h,children:"Go Back"}),Object(G.jsx)("h2",{children:"Edit User."}),i&&Object(G.jsx)("h3",{style:{color:"red"},children:i}),Object(G.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),x&&v&&m&&p?(f(D(c,b)),h(),j("")):j("Please enter all input Fields.")},children:[Object(G.jsx)(Y.a,{id:"standart-basic",label:"Name",name:"name",value:x||"",type:"text",onChange:y}),Object(G.jsx)("br",{}),Object(G.jsx)(Y.a,{id:"standart-basic",label:"Email",name:"email",value:m||"",type:"email",onChange:y}),Object(G.jsx)("br",{}),Object(G.jsx)(Y.a,{id:"standart-basic",label:"Contact",name:"contact",value:p||"",type:"number",onChange:y}),Object(G.jsx)("br",{}),Object(G.jsx)(Y.a,{id:"standart-basic",label:"Address",name:"address",value:v||"",type:"text",onChange:y}),Object(G.jsx)("br",{}),Object(G.jsx)("button",{children:"Yangilash"})]})]})};var H=function(){return Object(G.jsx)("div",{className:"App",children:Object(G.jsxs)(l.c,{children:[Object(G.jsx)(l.a,{exact:!0,path:"/",element:Object(G.jsx)(I,{})}),Object(G.jsx)(l.a,{exact:!0,path:"/addUser",element:Object(G.jsx)(W,{})}),Object(G.jsx)(l.a,{exact:!0,path:"/editUser/:id",element:Object(G.jsx)(q,{})})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))},Q=n(23),Z=n(31),$=(n(96),n(61)),ee={users:[],user:{},loading:!0},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(J.a)(Object(J.a)({},e),{},{users:t.payload,loading:!1});case E:case k:case S:return Object(J.a)(Object(J.a)({},e),{},{loading:!1});case w:return Object(J.a)(Object(J.a)({},e),{},{user:t.payload,loading:!1});default:return e}},ne=Object(Z.b)({data:te}),ce=[$.a];var ae=Object(Z.c)(ne,Z.a.apply(void 0,ce));i.a.render(Object(G.jsx)(r.a.StrictMode,{children:Object(G.jsx)(Q.a,{children:Object(G.jsx)(g.a,{store:ae,children:Object(G.jsx)(H,{})})})}),document.getElementById("root")),K()}},[[98,1,2]]]);
//# sourceMappingURL=main.e31b3580.chunk.js.map