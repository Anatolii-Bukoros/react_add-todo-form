(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),s=a(6),c=a(7),o=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user,a=t.email,n=t.name;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},b=function(e){var t=e.todo,a=t.id,n=t.title,i=t.user,r=t.completed,s=u()("TodoInfo",{"TodoInfo--completed":r});return Object(m.jsxs)("article",{className:s,"data-id":a,children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),i&&Object(m.jsx)(j,{user:i})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})};function O(e){return l.find((function(t){return t.id===e}))||null}var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId)})})),p=function(e){return Math.max.apply(Math,Object(s.a)(e.map((function(e){return e.id}))))+1},x=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(f),c=Object(r.a)(i,2),d=c[0],u=c[1],j=Object(o.useState)(0),b=Object(r.a)(j,2),x=b[0],v=b[1],y=Object(o.useState)(!1),S=Object(r.a)(y,2),N=S[0],I=S[1],g=Object(o.useState)(!1),C=Object(r.a)(g,2),_=C[0],k=C[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),a.trim()&&x&&(u((function(e){return[].concat(Object(s.a)(e),[{id:p(e),title:a,completed:!1,userId:x,user:O(x)}])})),n(""),v(0)),a.trim()||k(!0),x||I(!0)},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:["Title:"," ",Object(m.jsx)("input",{name:"title",type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:a,onChange:function(e){n(e.target.value),k(!1)}})]}),_&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("label",{children:["User:"," ",Object(m.jsxs)("select",{"data-cy":"userSelect",value:x,onChange:function(e){v(+e.target.value),I(!1)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),N&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:d})]})};i.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fb01ed4c.chunk.js.map