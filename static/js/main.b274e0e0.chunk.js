(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,c){},36:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(37),s=c.n(a),r=c(3),i=c(5),o=(c(26),c(9)),j=c(20),l=c(40),d=c(41),u=c(42),b=c(1);function h(e){var t=e.token,c=e.setToken;return Object(b.jsx)("div",{id:"Nav",children:t?Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"a",children:Object(b.jsxs)(o.b,{to:"/Home",children:[Object(b.jsx)(j.b,{})," ",Object(b.jsx)("img",{src:"iqon.pjg",alt:""})]})}),Object(b.jsx)("li",{className:"a",children:Object(b.jsx)(o.b,{to:"/Job",children:Object(b.jsx)(l.a,{})})}),Object(b.jsx)("li",{className:"a",children:Object(b.jsx)(o.b,{to:"/Account",children:Object(b.jsx)(d.a,{})})}),Object(b.jsx)("li",{className:"a",children:Object(b.jsx)(o.b,{to:"/Like",children:Object(b.jsx)(j.a,{})})}),Object(b.jsx)("li",{className:"a",children:Object(b.jsx)(o.b,{onClick:function(){c("")},to:"/logOut",children:Object(b.jsx)(u.a,{})})})]}):Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"b",children:Object(b.jsx)(o.b,{to:"/login",children:"login"})}),Object(b.jsx)("li",{className:"b",children:Object(b.jsx)(o.b,{to:"/SignUp",children:"SignUp"})})]})})}var O=c(8),p=c(4),x=c.n(p),m=c(6),f=c.n(m);c(36);function v(){var e=Object(i.e)(),t=Object(n.useState)(),c=Object(r.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)(),j=Object(r.a)(o,2),l=j[0],d=j[1],u=Object(n.useState)(),h=Object(r.a)(u,2),p=h[0],m=h[1],v=Object(n.useState)(),g=Object(r.a)(v,2),k=g[0],N=g[1],w=Object(n.useState)(),C=Object(r.a)(w,2),S=C[0],y=C[1],I=function(){var t=Object(O.a)(x.a.mark((function t(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.post("".concat("https://lenkedin-amjad-backend.herokuapp.com","/signUp"),{account:a,email:l,description:p,imageProfile:k,password:S});case 2:201===t.sent.status&&e.push("/logIn");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{id:"sinLog",children:Object(b.jsxs)("div",{className:"sinUp1",children:[Object(b.jsx)("div",{className:"imgSinUp",children:"  "}),Object(b.jsxs)("div",{className:"sinUp",children:[Object(b.jsx)("input",{id:"firstSignupInput",className:"input",onChange:function(e){!function(e){s(e.target.value)}(e)},placeholder:"enter Name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",onChange:function(e){!function(e){d(e.target.value)}(e)},placeholder:"enter Emile"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",onChange:function(e){!function(e){m(e.target.value)}(e)},placeholder:"enter description"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",onChange:function(e){!function(e){N(e.target.value)}(e)},placeholder:"Enter Img Profile"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"input",onChange:function(e){!function(e){y(e.target.value)}(e)},placeholder:"Enter Password"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"button",onClick:function(){I()},children:"signUp"})]})]})})}function g(e){var t=e.setToken,c=e.setAdmin,a=e.admin,s=e.setUserId,o=Object(i.e)(),j=Object(n.useState)(),l=Object(r.a)(j,2),d=l[0],u=l[1],h=Object(n.useState)(),p=Object(r.a)(h,2),m=p[0],v=p[1],g=function(){var e=Object(O.a)(x.a.mark((function e(){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("".concat("https://lenkedin-amjad-backend.herokuapp.com","/logIn"),{account:d,password:m});case 3:n=e.sent,console.log(n.data),t(n.data.token),c(n.data.payload.admin),s(n.data.payload.userId),console.log(a,"aaaa"),o.push("/Home"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("errrrrror");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"loginCaptal",children:[Object(b.jsx)("div",{className:"imgSinUp",children:"  "}),Object(b.jsxs)("div",{className:"logIn",children:[Object(b.jsx)("input",{className:"input2",type:"text",placeholder:"UserName",onChange:function(e){u(e.target.value)}}),Object(b.jsx)("input",{className:"input2",type:"text",placeholder:"Yore password",onChange:function(e){v(e.target.value)}}),Object(b.jsx)("button",{className:"button",onClick:function(){g()},children:"Login"})]})]})}c(71);function k(e){var t=e.token,c=e.userId,a=Object(n.useState)([]),s=Object(r.a)(a,2),i=s[0],o=s[1],j=Object(n.useState)([]),l=Object(r.a)(j,2),d=l[0],u=l[1],h=Object(n.useState)(""),p=Object(r.a)(h,2),m=p[0],v=p[1],g=Object(n.useState)(""),k=Object(r.a)(g,2),N=k[0],w=k[1],C=Object(n.useState)(!1),S=Object(r.a)(C,2),y=S[0],I=S[1],J=Object(n.useState)(""),U=Object(r.a)(J,2),P=U[0],_=U[1];Object(n.useEffect)((function(){var e=function(){var e=Object(O.a)(x.a.mark((function e(){var c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat("https://lenkedin-amjad-backend.herokuapp.com","/posts"),{});case 3:if(c=e.sent,o(c.data),!t){e.next=11;break}return e.next=8,f.a.get("".concat("https://lenkedin-amjad-backend.herokuapp.com","/allFavorite"),{headers:{authorization:"Bearer ".concat(t)}});case 8:n=e.sent,console.log(n.data,"likes"),u(n.data);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("roooooooooooo");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var A=function(){var e=Object(O.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat("https://lenkedin-amjad-backend.herokuapp.com","/addPost"),{text:m,img:N},{headers:{authorization:"Bearer ".concat(t)}});case 2:c=e.sent,o(c.data),w(""),v("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(O.a)(x.a.mark((function e(c){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat("https://lenkedin-amjad-backend.herokuapp.com","/deletePost/").concat(c),{headers:{authorization:"Bearer ".concat(t)}});case 2:n=e.sent,o(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(O.a)(x.a.mark((function e(c){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat("https://lenkedin-amjad-backend.herokuapp.com","/favorite"),{postId:c},{headers:{authorization:"Bearer ".concat(t)}});case 2:n=e.sent,console.log(n.data.favorite),u(n.data.favorite);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){_(e.target.value)},L=function(){var e=Object(O.a)(x.a.mark((function e(c){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(c,"id"),e.next=4,f.a.put("".concat("https://lenkedin-amjad-backend.herokuapp.com","/updatePost/").concat(c),{text:P},{headers:{authorization:"Bearer "+t}});case 4:n=e.sent,o(n.data),console.log(n.data,"postUpdate"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("err");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{id:"Home",children:Object(b.jsxs)("div",{className:"post-container",children:[t?y?"":Object(b.jsx)("button",{className:"buttonAddbost",onClick:function(){I(!y)},children:"ADD Post"}):"",y?Object(b.jsxs)("div",{className:"box-home",children:[Object(b.jsx)("input",{className:"textimg",onChange:function(e){v(e.target.value)},placeholder:"Add text",value:m}),Object(b.jsx)("input",{className:"textimg",onChange:function(e){w(e.target.value)},placeholder:"add img",value:N}),Object(b.jsx)("button",{className:"button",onClick:function(){A()},children:"Add"})]}):"",Object(b.jsx)("div",{className:"divPost",children:Object(b.jsx)("div",{className:"bbb",children:i.map((function(e,t){console.log(e.userId._id==c,"condi");for(var n=0;n<d.length;n++)if(e._id==d[n]._id)return Object(b.jsxs)("div",{className:"div",children:[Object(b.jsx)("h3",{className:"account-post",children:e.userId.account}),Object(b.jsxs)("p",{className:"text-post",children:[e.text,Object(b.jsx)("span",{className:"like-icon",onClick:function(){z(e._id)},children:"\u2764\ufe0f"}),e.img?Object(b.jsx)("img",{className:"imgPost",src:e.img}):"",e.userId._id==c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:function(){L(e._id)},children:"Updat"}),Object(b.jsx)("input",{onChange:function(e){E(e)}}),Object(b.jsx)("button",{className:"btn-delete",onClick:function(){B(e._id)},children:"\u2716\ufe0f"})," "]}):""]})]},t);return Object(b.jsxs)("div",{className:"div",children:[Object(b.jsx)("h3",{className:"account-post",children:e.userId.account}),Object(b.jsxs)("p",{className:"text-post",children:[e.text,Object(b.jsx)("span",{className:"like-icon",onClick:function(){z(e._id)},children:"\ud83d\udda4"}),e.img?Object(b.jsx)("img",{className:"imgPost",src:e.img}):"",e.userId._id==c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:function(){L(e._id)},children:"Updat"}),Object(b.jsx)("input",{onChange:function(e){E(e)}}),Object(b.jsx)("button",{className:"btn-delete",onClick:function(){B(e._id)},children:"\u2716\ufe0f"})," "]}):""]})]},t)}))})})]})})}function N(e){var t=e.token,c=Object(n.useState)([]),a=Object(r.a)(c,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(O.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("https://lenkedin-amjad-backend.herokuapp.com","/allFavorite"),{headers:{authorization:"Bearer ".concat(t)}});case 2:c=e.sent,console.log(c.data),i(c.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsx)("div",{className:"favorite-page",children:Object(b.jsx)("div",{className:"favorite-container",children:s.map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsxs)("p",{className:"fav-text-post",children:[e.text,e.img?Object(b.jsx)("img",{src:e.img}):""]})},t)}))})})}c(72);function w(e){e.token;var t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],s=c[1];Object(i.f)().id;return Object(n.useEffect)((function(){var e=function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("https://lenkedin-amjad-backend.herokuapp.com","/profiles"));case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsx)("div",{className:"account-page",children:Object(b.jsx)("div",{className:"account-container",children:a.map((function(e,t){return Object(b.jsxs)("div",{className:"divv",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"profile-img",src:e.imageProfile}),Object(b.jsx)("h3",{children:e.account}),Object(b.jsx)("p",{children:e.description})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"liked",children:" Liked Post :"}),Object(b.jsx)("p",{children:e.favorite.map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"text-profile",children:e.text})},t)}))})]})]},t)}))})})}c(73);function C(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"about"}),Object(b.jsx)("h3",{children:"linkedin"}),Object(b.jsx)("div",{className:"about1",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("em",{children:"\u0639\u0627\u0645"})}),Object(b.jsx)("br",{}),Object(b.jsx)("li",{children:"\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628"}),Object(b.jsx)("li",{children:"\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629"}),Object(b.jsx)("li",{children:"\u0646\u0628\u0630\u0629 \u0639\u0646"}),Object(b.jsx)("li",{children:"\u0635\u062d\u0627\u0641\u0629"}),Object(b.jsx)("li",{children:"\u0645\u062f\u0648\u0646\u0629"}),Object(b.jsx)("li",{children:"\u0627\u0644\u0645\u0647\u0646"}),Object(b.jsx)("li",{children:"\u0627\u0644\u0645\u0637\u0648\u0631\u0648\u0646"})]})}),Object(b.jsx)("div",{className:"about2",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"\u062a\u0635\u0641\u062d LinkedIn"}),Object(b.jsx)("br",{}),Object(b.jsx)("li",{children:" \u0627\u0644\u062a\u0639\u0644\u064a\u0645"}),Object(b.jsx)("li",{children:"\u0627\u0644\u0648\u0638\u0627\u0626\u0641"}),Object(b.jsx)("li",{children:"\u0627\u0644\u0631\u0627\u062a\u0628"}),Object(b.jsx)("li",{children:"\u0627\u0644\u062c\u0648\u0627\u0644"}),Object(b.jsx)("li",{children:"\u0627\u0644\u062e\u062f\u0645\u0627\u062a"}),Object(b.jsx)("li",{children:"\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a"})]})}),Object(b.jsx)("div",{className:"about3",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"\u062d\u0644\u0648\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629"}),Object(b.jsx)("br",{}),Object(b.jsx)("li",{children:"\u0627\u0644\u0645\u0648\u0627\u0647\u0628"}),Object(b.jsx)("li",{children:"\u0627\u0644\u062a\u0633\u0648\u064a\u0642"}),Object(b.jsx)("li",{children:"\u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a"}),Object(b.jsx)("li",{children:"\u0627\u0644\u062a\u0639\u0644\u064a\u0645"})]})}),Object(b.jsx)("div",{className:"about4",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"\u0627\u0644\u062f\u0644\u064a\u0644"}),Object(b.jsx)("br",{}),Object(b.jsx)("li",{children:" "}),Object(b.jsx)("li",{children:"\u0627\u0644\u0648\u0638\u0627\u0626\u0641"}),Object(b.jsx)("li",{children:"\u0627\u0644\u0634\u0631\u0643\u0627\u062a"}),Object(b.jsx)("li",{children:"\u0627\u0644\u0631\u0648\u0627\u062a\u0628"}),Object(b.jsx)("li",{children:"\u0645\u0646\u0634\u0648\u0631\u0627\u062a"}),Object(b.jsx)("li",{children:"\u0631\u0633\u0627\u0626\u0644 \u0627\u062e\u0628\u0627\u0631\u064a\u0647 "}),Object(b.jsx)("li",{children:"\u062c\u0627\u0645\u0639\u0627\u062a"})]})})]})}var S=c(25);c(74);function y(e){var t=e.token,c=e.admin,a=Object(n.useState)(""),s=Object(r.a)(a,2),i=(s[0],s[1],Object(n.useState)([])),o=Object(r.a)(i,2),j=o[0],l=o[1],d=Object(n.useState)(""),u=Object(r.a)(d,2),h=u[0],p=u[1],m=Object(n.useState)(""),v=Object(r.a)(m,2),g=v[0],k=v[1],N=Object(n.useState)(""),w=Object(r.a)(N,2),C=w[0],y=w[1],I=Object(n.useState)(""),J=Object(r.a)(I,2),U=J[0],P=J[1];console.log(c),Object(n.useEffect)(Object(O.a)(x.a.mark((function e(){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("https://lenkedin-amjad-backend.herokuapp.com","/jobs"),{headers:{authorization:"Bearer "+t}});case 2:c=e.sent,l(c.data);case 4:case"end":return e.stop()}}),e)}))),[]);var _=function(){var e=Object(O.a)(x.a.mark((function e(){var c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat("https://lenkedin-amjad-backend.herokuapp.com","/addJob"),{nameJob:h,descriptionJob:g,salary:C,img:U},{headers:{authorization:"Bearer "+t}});case 2:c=e.sent,(n=Object(S.a)(j)).push(c.data),l(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(O.a)(x.a.mark((function e(c,n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("here in try"),e.next=4,f.a.delete("".concat("https://lenkedin-amjad-backend.herokuapp.com","/jobs/").concat(c),{headers:{authorization:"Bearer ".concat(t)}});case 4:e.sent,(a=Object(S.a)(j)).splice(n,1),l(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{children:1==c?Object(b.jsxs)("div",{children:[j.map((function(e,t){return Object(b.jsx)("div",{className:"divv",children:Object(b.jsxs)("div",{className:"dd",children:[Object(b.jsx)("h1",{className:"nameJob",children:e.nameJob}),Object(b.jsx)("p",{className:"descriptionJob",children:e.descriptionJob}),Object(b.jsx)("p",{className:"salaryJob",children:e.salary}),Object(b.jsx)("img",{className:"imgjob",src:e.img}),Object(b.jsx)("button",{onClick:function(){A(e._id,t)},children:"\u2716\ufe0f"})]})})})),Object(b.jsx)("div",{className:"addjob",children:Object(b.jsxs)("div",{className:"addjob",children:[Object(b.jsx)("input",{placeholder:"job name",onChange:function(e){!function(e){p(e.target.value)}(e)}}),Object(b.jsx)("input",{placeholder:"job describtion",onChange:function(e){!function(e){k(e.target.value)}(e)}}),Object(b.jsx)("input",{placeholder:"job salary",onChange:function(e){!function(e){y(e.target.value)}(e)}}),Object(b.jsx)("input",{placeholder:"job img",onChange:function(e){!function(e){P(e.target.value)}(e)}}),Object(b.jsx)("button",{onClick:function(){_()},children:"add"})]})})]}):Object(b.jsx)("div",{children:j.map((function(e,t){return Object(b.jsxs)("div",{className:"divv",children:[Object(b.jsx)("h1",{className:"nameJob",children:e.nameJob}),Object(b.jsx)("p",{className:"descriptionJob",children:e.descriptionJob}),Object(b.jsx)("p",{className:"salaryJob",children:e.salary}),Object(b.jsx)("img",{className:"imgjob",src:e.img})]})}))})})}c(75).config();var I=function(){console.log("https://lenkedin-amjad-backend.herokuapp.com","backend url");var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),o=Object(r.a)(s,2),j=o[0],l=o[1],d=Object(n.useState)(""),u=Object(r.a)(d,2),O=u[0],p=u[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{token:c,setToken:a,admin:j}),Object(b.jsx)(i.a,{exact:!0,path:"/Home",render:function(){return Object(b.jsx)(k,{userId:O,token:c})}}),Object(b.jsx)(i.a,{exact:!0,path:"/Account",render:function(){return Object(b.jsx)(w,{token:c,admin:j})}}),Object(b.jsx)(i.a,{exact:!0,path:"/Like",render:function(){return Object(b.jsx)(N,{token:c})}}),Object(b.jsx)(i.a,{exact:!0,path:"/Job",render:function(){return Object(b.jsx)(y,{token:c,admin:j})}}),Object(b.jsx)(i.a,{exact:!0,path:"/signUp",component:v}),Object(b.jsx)(i.a,{exact:!0,path:"/LogIn",render:function(){return Object(b.jsx)(g,{setToken:a,setAdmin:l,setUserId:p})}}),Object(b.jsx)(i.a,{exact:!0,path:"/About",render:function(){return Object(b.jsx)(C,{token:c})}})]})};s.a.render(Object(b.jsx)(o.a,{children:Object(b.jsx)(I,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.b274e0e0.chunk.js.map