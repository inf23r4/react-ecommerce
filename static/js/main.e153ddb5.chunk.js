(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{104:function(e,t,a){e.exports=a(119)},109:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(109),a(10)),i=a(13),m=a(20),s=a(11),u=a(88),d=a(188),p=a(164),f=a(165),g=a(91),E=a(159),b=a(83),h=a.n(b),y=a(162),x=a(82),v=a.n(x),j=r.a.createContext(),w=function(){var e=r.a.useContext(j).cantTotal;return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(y.a,{badgeContent:e(),color:"secondary",showZero:!0},r.a.createElement(v.a,{style:{color:"white"}}))))},C=a(25),k=a(163),O=Object(k.a)((function(e){var t;return t={root:{flexGrow:1,position:"fixed",width:"100%"},appBar:{backgroundColor:"black"},title:{flexGrow:1,padding:"7px",height:"43px"},formControl:{margin:e.spacing(1),minWidth:180},categoria:{color:"white",textDecoration:"none"},categoriaMobile:{color:"black",textDecoration:"none"},sectionDesktop:Object(C.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"})},Object(C.a)(t,"sectionDesktop",Object(C.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"})),Object(C.a)(t,"sectionMobile",Object(C.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})),t})),S=a(41),N=(a(78),S.initializeApp({apiKey:"AIzaSyCQWAnM8Svs3PfRB0ImV_KWrmTPW3y-HHk",authDomain:"react-ecommerce-740c2.firebaseapp.com",databaseURL:"https://react-ecommerce-740c2.firebaseio.com",projectId:"react-ecommerce-740c2",storageBucket:"react-ecommerce-740c2.appspot.com",messagingSenderId:"381973464289",appId:"1:381973464289:web:fc3a2065c6796f9ec823a0",measurementId:"G-GPGYL05WW9"}));function D(){return S.firestore(N)}var I=function(){var e=O(),t=Object(n.useState)([]),a=Object(s.a)(t,2),o=(a[0],a[1]);Object(n.useEffect)((function(){D().collection("categories").get().then((function(e){0===e.size&&console.log("no results"),o(e.docs.map((function(e){return Object(m.a)({},e.data(),{id:e.id})})))})).catch((function(e){console.log("Error searching categories",e)}))}),[]);var c=r.a.useState(null),i=Object(s.a)(c,2),b=i[0],y=(i[1],r.a.useState(null)),x=Object(s.a)(y,2),v=x[0],j=x[1],C=(Boolean(b),Boolean(v)),k=function(){j(null)},S=r.a.createElement(u.a,{anchorEl:v,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:C,onClose:k},r.a.createElement(l.b,{className:e.categoriaMobile,to:"/categories/notebooks"},r.a.createElement(d.a,null,"Notebooks")),r.a.createElement(l.b,{className:e.categoriaMobile,to:"/categories/audio"},r.a.createElement(d.a,null,"Audio")),r.a.createElement(l.b,{className:e.categoriaMobile,to:"/categories/smartwatches"},r.a.createElement(d.a,null,"Smartwatches")));return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,{position:"static",className:e.appBar},r.a.createElement(f.a,null,r.a.createElement(g.a,{variant:"h6",className:e.title},r.a.createElement(l.c,{to:"/"},r.a.createElement("img",{className:e.title,src:"https://d26lpennugtm8s.cloudfront.net/stores/001/063/033/themes/common/logo-1421680389-1571774718-1624cbbd901c2cf55aa291fb448a8c991571774719.png?"}))),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(l.b,{className:e.categoria,to:"/"},r.a.createElement(d.a,null,"Home")),r.a.createElement(l.b,{className:e.categoria,to:"/categories/notebooks"},r.a.createElement(d.a,null,"Notebooks")),r.a.createElement(l.b,{className:e.categoria,to:"/categories/audio"},r.a.createElement(d.a,null,"Audio")),r.a.createElement(l.b,{className:e.categoria,to:"/categories/smartwatches"},r.a.createElement(d.a,null,"Smartwatches"))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(E.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},color:"inherit"},r.a.createElement(h.a,null))),r.a.createElement(l.c,{to:"/cart"},r.a.createElement(w,null)))),S)},W=a(184),B=a(166),T=function(e){var t=e.item,a=t.id,n=t.name,o=(t.description,t.price),c=t.img;return r.a.createElement(W.a,{flexDirection:"colum",marginTop:"60px"},r.a.createElement("h2",null,n),r.a.createElement("span",null,"Price :",o),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/item/".concat(a)}," ",r.a.createElement("img",{src:c,alt:"img",width:"350"}))),r.a.createElement(B.a,{variant:"contained",style:{backgroundColor:"#f7d04b"}},r.a.createElement(l.b,{to:"/item/".concat(a),style:{textDecoration:"none",color:"black"}}," ","Details"," ")))},M=function(e){var t=e.list;return r.a.createElement(W.a,{display:"flex",justifyContent:"space-around",flexWrap:"wrap",marginBottom:"100px"},t.map((function(e){return r.a.createElement(T,{key:e.id,item:e})})))},F=[{idCategory:"notebooks",img:"https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},{idCategory:"audio",img:"https://images.unsplash.com/photo-1528148343865-51218c4a13e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},{idCategory:"smartwatches",img:"https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"}],A=function(e){var t=e.imgCategory,a=F.filter((function(e){return e.idCategory==t}));return console.log("img",a),r.a.createElement(r.a.Fragment,null,a.length>0&&r.a.createElement("div",null,r.a.createElement("img",{src:a[0].img,alt:"Imagen-categorias",style:{width:"100%",height:"420px",objectFit:"cover"}})))},H=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(i.f)().categoryId;return console.log("cat1",c),Object(n.useEffect)((function(){var e=D();(c?e.collection("items").where("categoryId","==",c):e.collection("items")).get().then((function(e){0===e.size&&console.log("No existen resultados"),o(e.docs.map((function(e){return Object(m.a)({},e.data(),{id:e.id})})))}))}),[c]),console.log("cat2",c),r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{imgCategory:c}),r.a.createElement(M,{list:a}))},G=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:"https://d319yleido6tgg.cloudfront.net/stores/001/063/033/themes/cubo/slide-1571835719477-7385694174-9537d0d86060d32ec8c5dc6d975ab9741571835723-1920-1920.jpg?755810131",alt:"image-main",style:{width:"100%",height:"520px",objectFit:"cover"}}))},V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement(H,null))},z=a(67),P=a.n(z),R=a(84),q=a(183),L=a(187),Y=a(171),X=a(169),J=a(170),K=a(168),Z=a(167),$=r.a.forwardRef((function(e,t){return r.a.createElement(Z.a,Object.assign({direction:"up",ref:t},e))})),_=function(e){var t=e.open,a=e.setOpen,n=function(){a(!1)};return r.a.createElement("div",null,r.a.createElement(B.a,{variant:"outlined",color:"primary",onClick:function(){a(!0)}},"Finalizar compra"),r.a.createElement(L.a,{open:t,TransitionComponent:$,keepMounted:!0,onClose:n,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(K.a,{id:"alert-dialog-slide-title"},"Aviso para continuar compra"),r.a.createElement(X.a,null,r.a.createElement(J.a,{id:"alert-dialog-slide-description"},"Error! Los mails no son iguales")),r.a.createElement(Y.a,null,r.a.createElement(B.a,{onClick:n,color:"primary"},"Cancelar"),r.a.createElement(B.a,{onClick:n,color:"primary"},"Aceptar"))))},Q=function(e){var t=e.createOrder,a=Object(k.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"36ch"}}}})),o=Object(n.useState)({name:"",email:"",emailConfirmation:"",phone:""}),c=Object(s.a)(o,2),l=c[0],i=c[1],u=r.a.useState(!1),d=Object(s.a)(u,2),p=d[0],f=d[1],g=function(e){var t=e.target,a=t.name,n=t.value;i((function(e){return Object(m.a)({},e,Object(C.a)({},a,n))}))},E=a(),b=!(l.email.length&&l.name.length&&l.emailConfirmation.length&&l.phone.length>0&&l.email===l.emailConfirmation);return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{display:"flex",justifyContent:"center"},r.a.createElement("form",{className:E.root,noValidate:!0,autoComplete:"off",fullWidth:!0},r.a.createElement(W.a,null,r.a.createElement(q.a,{required:!0,label:"Nombre y Apellido",Value:l.name,placeholder:"Nombre y Apellido",multiline:!0,name:"name",variant:"outlined",onChange:g}),r.a.createElement(q.a,{required:!0,label:"Email",Value:l.email,placeholder:"Email",multiline:!0,name:"email",variant:"outlined",onChange:g})),r.a.createElement(W.a,null,r.a.createElement(q.a,{required:!0,label:"Repetir email",Value:l.emailConfirmation,placeholder:"Confirma tu email",multiline:!0,name:"emailConfirmation",variant:"outlined",onChange:g}),r.a.createElement(q.a,{required:!0,label:"Tel\xe9fono de contacto",Value:l.phone,placeholder:"Tel\xe9fono de contacto",multiline:!0,name:"phone",variant:"outlined",onChange:g})))),r.a.createElement(W.a,{display:"flex",justifyContent:" flex-end",p:1},b?r.a.createElement(_,{open:p,setOpen:f}):r.a.createElement(B.a,{variant:"contained",color:"secondary",onClick:function(){var e=l.name,a=l.email,n=l.phone;t({name:e,email:a,phone:n})}},"Finalizar compra")))},U=a(186),ee=function(){return r.a.createElement("div",{style:{paddingTop:"70px",marginBottom:"300px"}},r.a.createElement(U.a,{severity:"warning"},r.a.createElement("div",{style:{marginBottom:"20px"}},"\xa1No se tiene productos seleccionados!"),r.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(B.a,{variant:"contained",color:"primary"},"Ver productos"))))},te=function(e){var t=e.orderId;return r.a.createElement("div",{style:{paddingTop:"70px"}},r.a.createElement(U.a,{severity:"success"},"Tu orden de compra es: ",t))},ae=a(173),ne=a(176),re=a(177),oe=a(172),ce=a(174),le=a(175),ie=a(121),me=function(e){return Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS"}).format(e)},se=Object(k.a)({root:{width:"80%",margin:"auto"},container:{maxHeight:440},table:{marginTop:"80px"}}),ue=function(){var e=r.a.useContext(j),t=e.cartItem,a=e.costoTotal,n=r.a.useState(0),o=Object(s.a)(n,2),c=o[0],l=(o[1],r.a.useState(10)),i=Object(s.a)(l,2),m=i[0],u=(i[1],se());return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,{className:u.root},r.a.createElement(oe.a,{className:u.container},r.a.createElement(ae.a,{className:u.table,stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(ce.a,null,r.a.createElement(le.a,null,r.a.createElement(ne.a,{style:{minWidth:170}},"Producto"),r.a.createElement(ne.a,{style:{minWidth:170}},"Nombre"),r.a.createElement(ne.a,{align:"right",style:{minWidth:100}},"Cantidad"),r.a.createElement(ne.a,{align:"right",style:{minWidth:170}},"precio"))),r.a.createElement(re.a,null,t.slice(c*m,c*m+m).map((function(e){return r.a.createElement(le.a,{key:e.id},r.a.createElement(ne.a,{component:"th",scope:"row"},r.a.createElement("img",{src:e.img,alt:"img",style:{width:"82px"}})),r.a.createElement(ne.a,null,e.name),r.a.createElement(ne.a,{align:"right"},e.count),r.a.createElement(ne.a,{align:"right"},me(e.price)))})))),r.a.createElement(W.a,{display:"flex",justifyContent:"flex-end",p:1},"Costo total: ",a()))))},de=(Object(k.a)({root:{width:"100%"},container:{maxHeight:440}}),function(){var e=r.a.useContext(j),t=e.cartItem,a=e.costoTotal,o=e.resetCantCart,c=Object(n.useState)(!1),i=Object(s.a)(c,2),u=i[0],d=i[1],p=Object(n.useState)(null),f=Object(s.a)(p,2),g=f[0],E=f[1];if(0===t.length&&null===g)return r.a.createElement(ee,null);function b(){return(b=Object(R.a)(P.a.mark((function e(n){var r,c,l,i,s,u,d,p,f;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=D(),c=r.collection("orders"),l={buyer:n,cartItem:t,date:S.firestore.FieldValue.serverTimestamp(),total:a()},e.prev=3,e.next=6,c.add(l);case 6:i=e.sent,s=i.id,E(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("Error");case 14:return u=r.collection("items").where(S.firestore.FieldPath.documentId(),"in",t.map((function(e){return e.id}))),e.next=17,u.get();case 17:if(d=e.sent,p=r.batch(),f=[],d.docs.forEach((function(e,a){e.data().stock>=t[a].count?p.update(e.ref,{stock:e.data().stock-t[a].count}):f.push(Object(m.a)({},e.data(),{id:e.id}))})),0!==f.length){e.next=24;break}return e.next=24,p.commit();case 24:o();case 25:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}return g?r.a.createElement(te,{orderId:g}):r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null),r.a.createElement(W.a,{display:"flex",justifyContent:" flex-end",p:1},r.a.createElement(B.a,{variant:"contained",color:"primary",onClick:function(){return d(!0)}},"checkout")),r.a.createElement(W.a,{display:"flex",justifyContent:" flex-end",p:1,mb:10},r.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(B.a,{variant:"contained",color:"primary"},"Seguir comprando"))),u&&r.a.createElement(Q,{createOrder:function(e){return b.apply(this,arguments)}}))}),pe=a(178),fe=a(86),ge=a.n(fe),Ee=function(e){var t=e.min,a=e.stock,n=e.count,o=e.setCount;return r.a.createElement(W.a,{flexDirection:"colum",width:"185px",height:"100px"},r.a.createElement(W.a,{display:"flex",justifyContent:"space-between",border:"solid 1px black",borderRadius:"8px"},a>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ge.a,{style:{fontSize:30},onClick:function(){n>t&&o(n-1)}}),r.a.createElement("span",null,n),r.a.createElement(pe.a,{style:{fontSize:30},disabled:n===a,onClick:function(){n<a&&o(n+1)}},"add_circle"))))},be=function(e){var t=e.item,a=r.a.useState(1),n=Object(s.a)(a,2),o=n[0],c=n[1],i=r.a.useState(!1),m=Object(s.a)(i,2),u=m[0],d=m[1],p=r.a.useContext(j).productsAdd;return r.a.createElement(W.a,{display:"flex",justifyContent:"center",margin:"auto",flexWrap:"wrap",marginBottom:"150px"},r.a.createElement(W.a,{flexDirection:"colum",marginTop:"60px"},r.a.createElement("h2",null,t.name),r.a.createElement("img",{src:t.img,alt:"img",width:"350"})),r.a.createElement(W.a,{paddingTop:10,margin:5},r.a.createElement("div",{style:{fontWeight:"bold"}},t.description),r.a.createElement("p",null,"Precio: $ ",Intl.NumberFormat().format(t.price)),r.a.createElement("p",null,"Stock disponible: ",t.stock),r.a.createElement(Ee,{setCount:c,count:o,min:1,stock:t.stock}),u?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(l.b,{style:{textDecoration:"none"},to:"/cart"},r.a.createElement(B.a,{variant:"contained",color:"secondary",style:{marginBottom:"20px"}},"Terminar Compra"))),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(B.a,{variant:"contained",color:"primary",style:{textDecoration:"none"}},"Seguir comprando")))):r.a.createElement(B.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:function(){o>0&&(d(!0),p({id:t.id,name:t.name,img:t.img,count:o,price:t.price,stock:t.stock}))},disabled:0===t.stock},"Agregar a carrito")))},he=a(179);function ye(){return r.a.createElement("div",{style:{marginLeft:"50%",paddingTop:"15%",marginBottom:"28%"}},r.a.createElement(he.a,{disableShrink:!0}))}var xe=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1]),o=Object(n.useState)([]),c=Object(s.a)(o,2),l=c[0],u=c[1],d=Object(i.f)().productId;return Object(n.useEffect)((function(){D().collection("items").doc(d).get().then((function(e){a(!1),u(Object(m.a)({id:e.id},e.data()))}))}),[d]),r.a.createElement(r.a.Fragment,null,0===l.length?r.a.createElement(ye,null):r.a.createElement(be,{item:l}))};a(180),a(181),a(182),a(87),Object(k.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:e.palette.primary.light},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}}));var ve=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{style:{background:"black",height:"60px",color:"white",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("span",null,"Designed and built by Roc\xedo Esteban")))},je=a(89),we=function(e){var t=e.children,a=Object(n.useState)([]),o=Object(s.a)(a,2),c=o[0],l=o[1];return r.a.createElement(j.Provider,{value:{cartItem:c,productsAdd:function(e){if(c.find((function(t){return t.id===e.id}))){var t=c.map((function(t){return t.id===e.id?Object(m.a)({},t,{count:e.count+t.count}):t}));l(t)}else l((function(t){return[].concat(Object(je.a)(t),[e])}))},costoTotal:function(){var e=c.reduce((function(e,t){return e+t.price*t.count}),0);return me(e)},cantTotal:function(){return c.reduce((function(e,t){return e+t.count}),0)},resetCantCart:function(){l([])}}},t)};var Ce=function(){return r.a.createElement(we,null,r.a.createElement(l.a,null,r.a.createElement(I,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(V,null)),r.a.createElement(i.a,{path:"/categories/:categoryId"},r.a.createElement(H,null)),r.a.createElement(i.a,{exact:!0,path:"/cart"},r.a.createElement(de,null)),r.a.createElement(i.a,{exact:!0,path:"/item/:productId"},r.a.createElement(xe,null))),r.a.createElement(ve,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.e153ddb5.chunk.js.map