(this.webpackJsonpbreshow=this.webpackJsonpbreshow||[]).push([[0],{181:function(t,e,c){},184:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(13),s=c.n(r),i=c(18),o=c(57),l=c(99),d=c(76),j=c(8),u="ADD_TO_CART",b="REMOVE_FROM_CART",O="REMOVE_ALL",p={cart:localStorage.getItem("products")?JSON.parse(localStorage.getItem("products")):[]},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:var c=t.cart.find((function(t){return t.id===e.payload.item.id}));if(c){var n=t.cart.map((function(t){return t.id===c.id?Object(j.a)(Object(j.a)({},t),{},{quantity:e.payload.item.quantity}):t}));return localStorage.setItem("products",JSON.stringify(n)),Object(j.a)(Object(j.a)({},t),{},{cart:n})}return localStorage.setItem("products",JSON.stringify([].concat(Object(d.a)(t.cart),[e.payload.item]))),Object(j.a)(Object(j.a)({},t),{},{cart:[].concat(Object(d.a)(t.cart),[e.payload.item])});case b:var a=Object(d.a)(t.cart);if(e.payload.item.quantity<=1){var r=t.cart.findIndex((function(t){return t.id===e.payload.item.id}));return r>=0&&a.splice(r,1),localStorage.setItem("products",JSON.stringify(a)),Object(j.a)(Object(j.a)({},t),{},{cart:a})}var s=t.cart.find((function(t){return t.id===e.payload.item.id})),i=t.cart.map((function(t){return t.id===s.id?Object(j.a)(Object(j.a)({},t),{},{quantity:e.payload.item.quantity}):t}));return localStorage.setItem("products",JSON.stringify(i)),Object(j.a)(Object(j.a)({},t),{},{cart:i});case O:return localStorage.setItem("products",JSON.stringify([])),Object(j.a)(Object(j.a)({},t),{},{cart:[]});default:return t}},m="SET_USER",f={user:localStorage.getItem("client")?JSON.parse(localStorage.getItem("client")):null},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(j.a)(Object(j.a)({},t),{},{user:e.payload.user});default:return t}},v=Object(o.combineReducers)({cart:h,auth:x}),_=Object(o.createStore)(v,Object(l.composeWithDevTools)()),g=c(16),y=c(43);function N(){var t=Object(g.g)().pathname;return Object(n.useEffect)((function(){document.body.scrollTop=0}),[t]),null}var C,S=c(10),q=(c(86),c(232)),A=c(25),I=c(228),k=c(240),E=c(244),w=c(225),F=Object(w.a)({root:{"& .MuiOutlinedInput-input":{fontFamily:"Open Sans !important",color:"#004374",fontWeight:600,fontSize:"0.8rem",backgroundColor:"#fff",borderRadius:20,padding:"10px 0 10px 10px !important",marginTop:"2px"},"& .MuiInputLabel-root":{color:"#0D47A1",fontWeight:600},"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"none !important"},"&:hover .MuiOutlinedInput-input":{color:"#004374"},"&:hover .MuiInputLabel-root":{color:"#004374",fontWeight:600},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"#004374",backgroundColor:"#F9FAFB"},"& .MuiInputLabel-root.Mui-focused":{color:"#004374",fontWeight:600}}}),T=c(2),P=function(t){var e=t.options,c=t.label,a=t.iconScale,r=t.handleChange,s=t.value,i=Object(n.useState)(!1),o=Object(S.a)(i,2),l=o[0],d=o[1],j=F(),u=function(){return d(!l)};return Object(T.jsxs)("div",{className:"orderBy",children:[Object(T.jsx)("p",{className:"orderBy__label",children:c}),Object(T.jsx)("div",{className:"orderBy__select",children:Object(T.jsx)(I.a,{className:"".concat(j.root),variant:"outlined",children:Object(T.jsx)(k.a,{id:c,value:s,onChange:r,open:l,onOpen:u,onClose:u,IconComponent:function(){return Object(T.jsx)(A.a,{style:{transform:"scale(".concat(a,")")},onClick:u})},children:e.map((function(t){return Object(T.jsx)(E.a,{value:t.value,children:t.label},t.value)}))})})})]})},M=c(72),z=c(73),R=z.a.div(C||(C=Object(M.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n\twidth: 100%;\n\n\tsvg {\n\t\tcolor: #fff;\n\t\tbackground-color: #f08e1c;\n\t\tpadding: 8px;\n\t\ttransform: scale(1.3);\n\t\tborder-radius: 50%;\n\t\tz-index: 100;\n\t\ttransition: all 0.3s ease-in-out;\n\n\t\t&:hover {\n\t\t\tcursor: pointer;\n\t\t\ttransform: scale(1.4);\n\t\t}\n\t}\n\n\t.filter__search {\n\t\tbackground-color: #f5d1ae;\n\t\twidth: 90%;\n\t\tposition: relative;\n\t\ttransform: translateX(-10px);\n\n\t\tinput {\n\t\t\tbackground-color: #f5d1ae;\n\t\t\twidth: 100%;\n\t\t\tcolor: #004374;\n\t\t\tpadding: 10px 10px 10px 30px;\n\t\t\tborder: none;\n\t\t\tborder-radius: 20px;\n\t\t\tfont-weight: 600;\n\t\t\tfont-family: 'Open Sans';\n\n\t\t\t&::placeholder {\n\t\t\t\tcolor: #004374;\n\t\t\t}\n\n\t\t\t&:active,\n\t\t\t&:focus {\n\t\t\t\tborder: none;\n\t\t\t\toutline: none;\n\t\t\t}\n\t\t}\n\t}\n"]))),D=[[{value:"1",label:"Nome (A-Z)"},{value:"2",label:"Nome (Z-A)"}],[{value:"10",label:"10"},{value:"20",label:"20"},{value:"40",label:"40"}]];function L(t){var e=t.handleChangeOrder,c=t.handleChangePageSize,n=t.handleSearchString,a=t.handleSearch,r=t.order,s=t.pageSize,i=t.searchString;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(R,{className:"products__searchbox",children:[Object(T.jsx)(A.c,{onClick:function(){return a()}}),Object(T.jsx)("div",{className:"filter__search",children:Object(T.jsx)("input",{type:"text",placeholder:"Pesquisar ... (tamanho, marca, produto, etc)",onChange:function(t){return n(t.target.value)},value:i,onKeyDown:function(t){"Enter"===t.key&&a()},onkey:!0})})]}),Object(T.jsxs)("div",{className:"products__pageOrdenation",children:[Object(T.jsx)(P,{options:D[0],label:"Ordernar por:",iconScale:1,handleChange:e,value:r}),Object(T.jsx)(P,{options:D[1],label:"Exibica\xe7\xe3o:",iconScale:1.6,handleChange:c,value:s})]})]})}var B=c(241),U=c(74),J=c.n(U),V=function(t){return t.toLocaleString("pt-br",{style:"currency",currency:"BRL"})},$=function(t){var e=t.price;return Object(T.jsxs)("div",{className:"detail__base",children:[Object(T.jsx)("p",{className:"detail__title",children:"Pre\xe7o"}),Object(T.jsx)("div",{className:"base__content",children:Object(T.jsx)("span",{children:V(e)})})]})},W=function(t){var e=t.obj;return Object(T.jsxs)("div",{className:"product__bottom",children:[Object(T.jsx)("div",{className:"bottom__chip",children:Object(T.jsx)("p",{children:e.brand})}),Object(T.jsx)("div",{className:"bottom__chip",children:Object(T.jsx)("p",{children:e.type})}),Object(T.jsx)("div",{className:"bottom__chip",children:Object(T.jsx)("p",{children:e.size})})]})},Q=function(t){var e=t.quantityAvailable;return Object(T.jsxs)("div",{className:"detail__storage",children:[Object(T.jsx)("p",{className:"detail__title",children:"Estoque"}),e>=1?Object(T.jsxs)("div",{className:"storage__full",children:[Object(T.jsx)(A.d,{}),Object(T.jsx)("span",{children:"".concat(e," un")})]}):Object(T.jsx)("div",{className:"storage__empty",children:Object(T.jsx)("div",{children:Object(T.jsx)("span",{children:"Sem estoque"})})})]})},Z=function(t){var e=t.obj;return Object(T.jsxs)("div",{className:"card__content",children:[Object(T.jsx)("div",{className:"content__img",children:Object(T.jsx)(J.a,Object(j.a)(Object(j.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:e.photos.map((function(t){return Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:t,alt:t})},t)}))}))}),Object(T.jsxs)("div",{className:"content__info",children:[Object(T.jsx)("div",{className:"product__main",children:Object(T.jsxs)("div",{className:"product__details",children:[Object(T.jsx)($,{price:e.price}),Object(T.jsx)(Q,{quantityAvailable:e.quantity})]})}),Object(T.jsx)(W,{obj:e})]})]})},K=Object(n.memo)((function(t){var e=t.obj;return Object(T.jsx)(y.b,{to:"/product/".concat(e.id),children:Object(T.jsxs)("div",{className:"product__card simple-card",children:[Object(T.jsx)("div",{className:"card__header",children:Object(T.jsxs)("div",{className:"header__info",children:[Object(T.jsx)("div",{className:"header__chip",children:e.condition?"Novo":"Usado"}),Object(T.jsx)("p",{children:e.name})]})}),Object(T.jsx)(Z,{obj:e})]})})})),G=function(t){var e=t.filteredProducts,c=t.pagination,n=t.page,a=t.handleChangePage;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"products__pageContent",children:Object(T.jsx)("div",{className:"products__cards",children:e.length?Object(T.jsx)(T.Fragment,{children:e.map((function(t){return Object(T.jsx)(K,{obj:t},t.id)}))}):Object(T.jsx)("div",{className:"not-found",children:Object(T.jsx)("p",{children:"Resultado n\xe3o encontrado para a busca desejada!"})})})}),Object(T.jsx)("div",{className:"products__pagination",children:Object(T.jsx)(B.a,{count:c,page:n,onChange:a,style:e.length?{display:"block"}:{display:"none"}})})]})},X=c(81);c(179),c(180);X.initializeApp({apiKey:"AIzaSyDTmPOif_aCmN3g8V20nIzZYUD_xjns2cQ",authDomain:"breshow-d6298.firebaseapp.com",projectId:"breshow-d6298",storageBucket:"breshow-d6298.appspot.com",messagingSenderId:"871902688658",appId:"1:871902688658:web:8119112aa6b49a28343d4b"});var Y=X.firestore();var H=function(){var t=Object(n.useState)([]),e=Object(S.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)([]),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)([]),d=Object(S.a)(l,2),u=d[0],b=d[1],O=Object(n.useState)(0),p=Object(S.a)(O,2),h=p[0],m=p[1],f=Object(n.useState)(1),x=Object(S.a)(f,2),v=x[0],_=x[1],g=Object(n.useState)("1"),y=Object(S.a)(g,2),N=y[0],C=y[1],A=Object(n.useState)("10"),I=Object(S.a)(A,2),k=I[0],E=I[1],w=Object(n.useState)(""),F=Object(S.a)(w,2),P=F[0],M=F[1],z=Object(n.useState)(!0),R=Object(S.a)(z,2),D=R[0],B=R[1];Object(n.useEffect)((function(){Y.collection("breshow-clothes").get().then((function(t){var e=[];t.forEach((function(t){e.push(Object(j.a)({},t.data()))})),console.log(e,"newItems"),b(e),J(k,N,e)}))}),[]);var U=function(t,e){_(e);var c=10===e?k:k*(e-1);a(i.slice(1===e?0:c,k*e))},J=function(t,e,c,n){B(!0);var r=function(t,e){return"1"===t?e.sort((function(t,e){return t.name.localeCompare(e.name)})):e.sort((function(t,e){return e.name.localeCompare(t.name)}))}(e,c?n?u:c.filter((function(t){return-1!==t.description.toLowerCase().indexOf(P.toLowerCase())})):i.filter((function(t){return-1!==t.description.toLowerCase().indexOf(P.toLowerCase())})));o(r);var s=r.slice(0,Number(t));setTimeout((function(){a(s),function(t,e){var c=e.length/Number(t);m(Math.ceil(c))}(t,r),_(1),B(!1)}),1500)},V=function(){return Object(T.jsx)(T.Fragment,{children:D?Object(T.jsx)("div",{className:"products__loading",children:Object(T.jsx)(q.a,{})}):Object(T.jsx)(G,{filteredProducts:c,page:v,pagination:h,handleChangePage:U})})};return Object(T.jsx)("div",{className:"products",children:Object(T.jsxs)("div",{className:"products__page",children:[Object(T.jsx)("div",{className:"products__pageFilter",children:Object(T.jsx)(L,{handleChangeOrder:function(t){var e=t.target.value;C(e),J(k,e)},order:N,handleChangePageSize:function(t){var e=t.target.value;E(e),J(e,N)},pageSize:k,handleSearchString:function(t){(M(t),""===t)&&Y.collection("breshow-clothes").get().then((function(t){var e=[];t.forEach((function(t){e.push(Object(j.a)({},t.data()))})),console.log(e,"newItems"),b(e),J(k,N,e,!0)}))},searchString:P,handleSearch:function(){return J(k,N)}})}),Object(T.jsx)(V,{})]})})},tt=c(233),et=c(234),ct=c(235),nt=c(245),at=c(27),rt=c.p+"static/media/logo.04c7e343.png",st=function(t){var e=[];return t.forEach((function(t){if(t.price){var c=t.price*t.quantity;e.push(c)}})),e.reduce((function(t,e){return t+e}),0)},it=Object(i.b)((function(t){return{user:t.auth.user,cart:t.cart.cart}}))((function(t){t.user;var e=t.cart,c=Object(n.useState)(0),a=Object(S.a)(c,2),r=a[0],s=a[1],i=Object(g.f)();return Object(n.useEffect)((function(){e.length?s(st(e)):s(0)}),[e]),Object(T.jsxs)("div",{className:"navbar",children:[Object(T.jsx)("img",{src:rt,alt:"Logo",onClick:function(){return i.push("/")},"aria-hidden":"true"}),Object(T.jsxs)("div",{className:"navbar__info",children:[Object(T.jsxs)("div",{className:"navbar__infoCart",children:[Object(T.jsx)("h1",{children:"Breshow"}),Object(T.jsx)(tt.a,{className:"infoCart__cart",onClick:function(){return i.push("/cart")},children:Object(T.jsx)("p",{children:V(r)})})]}),Object(T.jsxs)("div",{className:"navbar__infoUser",children:[Object(T.jsx)(et.a,{"aria-label":"notification",children:Object(T.jsx)(ct.a,{badgeContent:e.length,color:"secondary",children:Object(T.jsx)(at.e,{})})}),Object(T.jsx)(nt.a,{children:"U"})]})]})]})})),ot=c(110),lt=c(108),dt=c.n(lt),jt=c(243),ut=c(239),bt=c(237),Ot=c(238),pt=c(236),ht=c(230),mt=c(246),ft=["inputRef"];function xt(t){var e=t.inputRef,c=Object(ot.a)(t,ft);return Object(T.jsx)(dt.a,Object(j.a)(Object(j.a)({},c),{},{ref:function(t){e(t?t.inputElement:null)},mask:[/[0-9]/,/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0}))}var vt,_t=function(t){var e=t.open,c=t.setOpen,a=t.cart,r=t.request,s=void 0!==r&&r,i=Object(n.useState)(localStorage.getItem("cep")?localStorage.getItem("cep"):""),o=Object(S.a)(i,2),l=o[0],d=o[1],j=Object(n.useState)("Al\xe9m disso, gostei dos produtos abaixo:"),u=Object(S.a)(j,2),b=u[0],O=u[1],p=Object(n.useState)("Ol\xe1, gostei dos produtos abaixo:%0A"),h=Object(S.a)(p,2),m=h[0],f=h[1];Object(n.useEffect)((function(){d(localStorage.getItem("cep")?localStorage.getItem("cep"):"")}),[e]);var x=function(){!1!==/^-?\d+$/.test(l.split("-")[0])&&!1!==/^-?\d+$/.test(l.split("-")[1])||localStorage.removeItem("cep"),d(""),c(!1)};return Object(n.useEffect)((function(){if(a.length){var t=["Al\xe9m disso, gostei dos produtos abaixo: "],e=["Ol\xe1, gostei dos produtos abaixo:"];a.forEach((function(c,n){t.push("%0A*".concat(n+1,") ").concat(c.name.toUpperCase()," (c\xf3d: ").concat(c.id,")*%0A      Quantidade: ").concat(c.quantity,"%0A      Tamanho: ").concat(c.size,"%0A      Total: *").concat(V(c.quantity*c.price),"*%0A")),e.push("%0A*".concat(n+1,") ").concat(c.name.toUpperCase()," (c\xf3d: ").concat(c.id,")*%0A      Quantidade: ").concat(c.quantity,"%0A      Tamanho: ").concat(c.size,"%0A      Total: *").concat(V(c.quantity*c.price),"*%0A"))}));var c=st(a);t.push("%0A*Valor total: ".concat(V(c)," %2b FRETE* %0A%0A **FRETE: Ipaussu e Chavantes entrega gr\xe1tis. Demais cidades \xe0 combinar.*")),e.push("%0A*Valor total: ".concat(V(c)," %2b FRETE PARA ").concat(l,"* %0A%0A **FRETE: Ipaussu e Chavantes entrega gr\xe1tis. Demais cidades \xe0 combinar.*")),f(e.join("")),O(t.join(""))}}),[a]),Object(T.jsxs)(jt.a,{open:e,onClose:x,"aria-labelledby":"dialog-cep","aria-describedby":"dialog-cep-textfield",children:[Object(T.jsx)(pt.a,{id:"dialog-cep",children:"Informe o seu CEP"}),Object(T.jsx)(bt.a,{children:Object(T.jsxs)(Ot.a,{id:"dialog-cep-textfield",children:[Object(T.jsx)("div",{className:"cep",children:Object(T.jsxs)(I.a,{children:[Object(T.jsx)(mt.a,{htmlFor:"formatted-text-mask-input",children:"CEP"}),Object(T.jsx)(ht.a,{value:l,onChange:function(t){d(t.target.value),!0!==/^-?\d+$/.test(t.target.value.split("-")[0])&&!0!==/^-?\d+$/.test(t.target.value.split("-")[1])||localStorage.setItem("cep",t.target.value)},name:"textmask",variant:"outlined",id:"formatted-text-mask-input",autoFocus:!0,inputComponent:xt})]})}),Object(T.jsx)("div",{className:"correio",children:Object(T.jsx)("div",{children:Object(T.jsx)("span",{children:"*Garantia do produto por hora do pedido"})})})]})}),Object(T.jsxs)(ut.a,{children:[Object(T.jsx)(tt.a,{onClick:x,className:"button__clear button__common",children:Object(T.jsx)("p",{children:"Fechar"})}),Object(T.jsxs)(tt.a,{onClick:function(){localStorage.setItem("cep",l),c(!1)},className:/^-?\d+$/.test(l.split("-")[0])&&/^-?\d+$/.test(l.split("-")[1])?"button__common button__whatsapp":"button__disabled button__common",disabled:!/^-?\d+$/.test(l.split("-")[0])||!/^-?\d+$/.test(l.split("-")[1]),children:[Object(T.jsx)(A.e,{}),Object(T.jsx)("a",{href:"https://wa.me/+5514981333862/?text=".concat(s?m:"Ol\xe1, gostaria de saber mais informa\xe7\xf5es sobre a entrega e frete para o meu CEP: *".concat(l,"*%0A%0A").concat(a.length>0&&b)),target:"_blank",rel:"noreferrer",children:s?"Confirmar e enviar pedido":"Confirmar e enviar CEP"})]})]})]})},gt=function(t){var e=t.handleDeleteItems,c=t.cart,a=t.toPayment,r=Object(g.f)(),s=Object(n.useState)(!1),i=Object(S.a)(s,2),o=i[0],l=i[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"cart__header",children:[Object(T.jsxs)(tt.a,{className:"button__back button__common",onClick:function(){r.push("/")},children:[Object(T.jsx)(at.a,{}),Object(T.jsx)("p",{children:"Voltar"})]}),!!c.length&&Object(T.jsxs)("div",{className:"buttons__right",children:[Object(T.jsxs)(tt.a,{className:a?"button__whatsapp button__common":"button__payment button__common",onClick:function(){!a&&r.push("/cart"),a&&l(!0)},children:[a&&Object(T.jsx)(A.e,{}),a?Object(T.jsx)("p",{children:"Enviar pedido"}):Object(T.jsx)("p",{children:"Ir para o Carrinho"}),Object(T.jsx)(at.b,{})]}),Object(T.jsxs)(tt.a,{onClick:e,className:"button__clear button__common",children:[Object(T.jsx)("p",{children:"Limpar carrinho"}),Object(T.jsx)(at.f,{})]})]})]}),Object(T.jsx)(_t,{open:o,setOpen:l,cart:c,request:!0})]})},yt=function(t){var e=t.tabArray,c=t.activeArray,n=t.handleChangeTab;return Object(T.jsx)("div",{className:"cart__tabs",children:e.map((function(t){return Object(T.jsx)(tt.a,{onClick:function(){return n(t.id)},className:c[t.id]?"button-active":"",children:t.label},t.id)}))})},Nt=[{id:0,label:"Resumo"},{id:1,label:"Produtos"}],Ct=function(t){var e=t.obj;return Object(T.jsxs)("div",{className:"products__info",children:[Object(T.jsx)("p",{className:"product__name",children:e.name}),Object(T.jsxs)("div",{className:"product__data",children:[Object(T.jsxs)("p",{className:"data__values",children:["".concat(e.quantity," un - "),V(e.price*Number(e.quantity))]}),Object(T.jsx)("p",{className:"data__fees",children:"Marca: ".concat(e.brand," - Tamanho: ").concat(e.size)})]})]})},St=function(t){var e=t.items;return Object(T.jsxs)("div",{className:"summary__products",children:[Object(T.jsx)("div",{className:"products__header",children:Object(T.jsx)("div",{className:"header__info",children:Object(T.jsx)("p",{children:"Produtos"})})}),e.length?Object(T.jsx)(T.Fragment,{children:e.map((function(t){return Object(T.jsx)(Ct,{obj:t},t.id)}))}):Object(T.jsx)("div",{className:"products__info",children:Object(T.jsxs)("div",{className:"product__empty",children:[Object(T.jsx)("p",{children:"Carrinho Vazio"}),Object(T.jsx)(A.b,{})]})})]})},qt=z.a.div(vt||(vt=Object(M.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-rows: 1fr 1fr;\n\tp {\n\t\tfont-size: 0.9rem;\n\t\tcolor: #828382;\n\t\tfont-weight: 600;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n\n\t.id__chip {\n\t\tcolor: #ffffff;\n\t\tbackground-color: #004374;\n\t\tborder-radius: 20px;\n\t\tpadding: 3px 15px;\n\t\tfont-size: 0.7rem;\n\t\tmax-width: 50px;\n\t}\n\n\t.info__string {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\ttext-transform: uppercase;\n\t\tfont-size: 0.9rem;\n\t\tcolor: #004374;\n\t\tfont-weight: 600;\n\t}\n\n\t.info__whatsapp {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\t.MuiIconButton-root {\n\t\t\tpadding: 5px !important;\n\t\t\tsvg {\n\t\t\t\tmargin-top: 2px;\n\t\t\t\tcolor: #25d366;\n\t\t\t}\n\t\t}\n\t}\n"]))),At=function(t){var e=t.title,c=t.info,n=t.spanClass,a=t.subtitle;return Object(T.jsxs)(qt,{children:[Object(T.jsxs)("p",{children:[e,a&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("br",{}),a]})]}),Object(T.jsx)("div",{className:"".concat(n),children:c})]})},It=Object(i.b)((function(t){return{cart:t.cart.cart}}))((function(t){var e=t.cart,c=Object(n.useState)(0),a=Object(S.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(!1),o=Object(S.a)(i,2),l=o[0],d=o[1];Object(n.useEffect)((function(){if(e.length){var t=st(e);s(t)}else s(0)}),[e]);return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"summary__products",children:[Object(T.jsx)("div",{className:"products__header",children:Object(T.jsx)("div",{className:"header__info",children:Object(T.jsx)("p",{children:"Valor"})})}),Object(T.jsxs)("div",{className:"products__total",children:[Object(T.jsxs)("div",{className:"fees",children:[Object(T.jsx)(At,{title:"Total",subtitle:"(sem frete)",info:V(r),spanClass:"info__string"}),Object(T.jsx)(At,{title:"Frete",info:Object(T.jsx)(et.a,{children:Object(T.jsx)(A.e,{fontSize:"24px",onClick:function(){d(!0)}})}),spanClass:"info__whatsapp"})]}),Object(T.jsx)(At,{title:"Total:",info:"".concat("".concat(V(r)," + Frete")),spanClass:"info__string"})]})]}),Object(T.jsx)(_t,{open:l,setOpen:d,cart:e})]})})),kt=function(t){var e=t.items,c=t.activeArray;return Object(T.jsxs)("div",{className:"cart__summary",children:[Object(T.jsx)("div",{className:"summary",children:(c[0]||c[1])&&Object(T.jsx)(St,{items:e})}),c[0]&&Object(T.jsx)("div",{className:"total",children:Object(T.jsx)(It,{})})]})},Et=function(t){return{type:b,payload:{item:t}}},wt=function(){return{type:O}},Ft=Object(i.b)((function(t){return{cart:t.cart.cart}}),{removeAllFromCart:wt})((function(t){var e=t.cart,c=t.removeAllFromCart,a=Object(n.useState)([!0,!1,!1]),r=Object(S.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)([]),l=Object(S.a)(o,2),d=l[0],j=l[1];Object(n.useEffect)((function(){j(e)}),[e]);return Object(T.jsxs)("div",{className:"cart",children:[Object(T.jsx)(gt,{handleDeleteItems:c,cart:e,toPayment:!0}),Object(T.jsx)(yt,{tabArray:Nt,activeArray:s,handleChangeTab:function(t){var e=[];Nt.forEach((function(c){return c.id===t?e.push(!0):e.push(!1)})),i(e)}}),Object(T.jsx)(kt,{items:d,activeArray:s})]})})),Tt=c(109),Pt=Object(i.b)(null,{addToCart:function(t){return{type:u,payload:{item:t}}},removeFromCart:Et})((function(t){var e=t.product,c=t.setProduct,n=t.obj,a=t.addToCart,r=t.removeFromCart,s=function(t,e){a(Object(j.a)(Object(j.a)({},t),{},{quantity:e})),c(Object(j.a)(Object(j.a)({},t),{},{quantity:e}))},i=function(t,e){r(Object(j.a)(Object(j.a)({},t),{},{quantity:e})),c(Object(j.a)(Object(j.a)({},t),{},{quantity:e}))},o=function(t){c(Object(j.a)(Object(j.a)({},e),{},{quantity:t<0||"-"==="".concat(t)?"":"".concat(t)}))};return Object(T.jsxs)("div",{className:"detail__quantity",children:[Object(T.jsx)("p",{className:"detail__title",children:"Quantidade (un)"}),Object(T.jsxs)("div",{className:"quantity__content",children:[Object(T.jsx)(et.a,{className:Number(e.quantity)>=1?"minus__active":"",onClick:function(){var t=Number(e.quantity);t<=0||""===e.quantity?i(n,0):("1"===e.quantity&&i(e,0),i(e,t-1))},disabled:!e.quantity||0===e.quantity,children:Object(T.jsx)(at.c,{})}),Object(T.jsxs)("div",{className:"input-div",children:[Object(T.jsx)("input",{min:"0",max:"".concat(n.quantity),type:"number",value:e?e.quantity:0,onChange:function(t){t.target.value<=n.quantity&&o(t.target.value)},onBlur:function(){!function(){var t=Number(e.quantity);t>n.quantity?Object.keys(e).length>1?s(e,n.quantity):s(n,n.quantity):0===t?Object.keys(e).length>1?i(e,0):i(n,0):(Object.keys(e).length>1&&s(e,t),s(n,t))}()}}),Object(T.jsx)("span",{style:"0"!==e.quantity?{display:"block"}:{display:"none"},children:"un"})]}),Object(T.jsx)(et.a,{className:Number(e.quantity)<n.quantity?"plus__active":"",onClick:function(){var t=Number(e.quantity);0===e.quantity||""===e.quantity?s(n,t+1):t+1>n.quantity?s(e,n.quantity):s(e,t+1)},children:Object(T.jsx)(at.d,{})})]})]})})),Mt=function(t){var e=t.product,c=t.obj;return Object(T.jsxs)("div",{className:"detail__value",children:[Object(T.jsx)("p",{className:"detail__title",children:"Valor"}),Object(T.jsx)("div",{className:"base__content",children:Object(T.jsx)("span",{children:Number(e.quantity)>0?V(c.price*Number(e.quantity)):V(0)})})]})},zt=Object(i.b)(null,{removeFromCart:Et})((function(t){var e=t.product,c=t.removeFromCart,n=t.setProduct;return Object(T.jsx)("div",{className:"info__trash",children:Number(e.quantity)>0&&Object(T.jsx)(et.a,{onClick:function(){var t,a;t=e,a=0,c(Object(j.a)(Object(j.a)({},t),{},{quantity:a})),n(Object(j.a)(Object(j.a)({},t),{},{quantity:a}))},children:Object(T.jsx)(at.f,{})})})})),Rt=function(t){var e=t.obj,c=t.product,a=t.setProduct,r=Object(n.useState)(""),s=Object(S.a)(r,2),i=s[0],o=s[1];return Object(T.jsxs)("div",{className:"card__content",children:[Object(T.jsxs)("div",{className:"content__img",children:[Object(T.jsx)(J.a,Object(j.a)(Object(j.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:e.photos.map((function(t){return Object(T.jsx)("div",{onClick:function(){return o(t)},children:Object(T.jsx)("img",{src:t,alt:t})},t)}))})),i.length>0&&Object(T.jsx)(Tt.a,{small:i,large:i,onClose:function(){return o("")},alt:e.name})]}),Object(T.jsxs)("div",{className:"content__info",children:[Object(T.jsxs)("div",{className:"product__main",children:[Object(T.jsxs)("div",{className:"product__details",children:[Object(T.jsx)($,{price:e.price}),Object(T.jsx)(Q,{quantityAvailable:e.quantity}),Object(T.jsx)(Pt,{obj:e,product:c,setProduct:a}),Object(T.jsx)(Mt,{obj:e,product:c})]}),Object(T.jsx)(zt,{setProduct:a,product:c})]}),Object(T.jsx)(W,{obj:e})]})]})},Dt=Object(n.memo)((function(t){var e=t.obj,c=t.cart,a=Object(n.useState)({quantity:""}),r=Object(S.a)(a,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){if(c.length){var t=c.find((function(t){return t.id===e.id}));t&&i(t)}}),[]),Object(n.useEffect)((function(){0===c.length&&i(Object(j.a)(Object(j.a)({},s),{},{quantity:0}))}),[c]),Object(T.jsxs)("div",{className:"product__card",children:[Object(T.jsx)("div",{className:"card__header",children:Object(T.jsxs)("div",{className:"header__info",children:[Object(T.jsx)("div",{className:"header__chip",children:e.condition?"Novo":"Usado"}),Object(T.jsx)("p",{children:e.name})]})}),Object(T.jsx)(Rt,{obj:e,product:s,setProduct:i})]})})),Lt=Object(i.b)((function(t){return{cart:t.cart.cart}}))(Dt),Bt=Object(i.b)((function(t){return{cart:t.cart.cart}}),{removeAllFromCart:wt})((function(t){var e=t.cart,c=t.removeAllFromCart,a=Object(n.useState)(null),r=Object(S.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)(!0),l=Object(S.a)(o,2),d=l[0],j=l[1],u=window.location.pathname,b=u.substring(u.lastIndexOf("/")+1);return Object(n.useEffect)((function(){Y.collection("breshow-clothes").where("id","==","".concat(b)).get().then((function(t){t.forEach((function(t){console.log(t.id," => ",t.data()),i(t.data()),j(!1)}))})).catch((function(t){j(!1)}))}),[]),Object(T.jsx)("div",{className:"products",children:Object(T.jsxs)("div",{className:"products__page",children:[Object(T.jsx)(gt,{handleDeleteItems:c,cart:e,toPayment:!1}),Object(T.jsx)("div",{className:"products__pageContent",children:d?Object(T.jsx)("div",{className:"products__loading",children:Object(T.jsx)(q.a,{})}):Object(T.jsx)(T.Fragment,{children:s?Object(T.jsx)(Lt,{obj:s},b):Object(T.jsx)("div",{className:"products__cards",children:Object(T.jsx)("div",{className:"not-found",children:Object(T.jsxs)("p",{children:["Desculpa, mas o produto procurado n\xe3o p\xf4de ser encontrado ou encontra-se indispon\xedvel em nosso estoque."," "]})})})})})]})})})),Ut=function(){return Object(T.jsx)("div",{className:"products",children:Object(T.jsxs)("div",{className:"products__page",children:[Object(T.jsx)(gt,{cart:[],toPayment:!1}),Object(T.jsx)("div",{className:"products__pageContent",children:Object(T.jsx)("div",{className:"products__cards",children:Object(T.jsx)("div",{className:"not-found",children:Object(T.jsx)("p",{children:"P\xe1gina n\xe3o encontrada."})})})})]})})},Jt=function(){return Object(T.jsx)("div",{className:"footer",children:Object(T.jsxs)("div",{className:"footer__message",children:[Object(T.jsx)("p",{children:"Sobre a entrega dos pedidos"}),Object(T.jsx)(at.b,{}),Object(T.jsx)("p",{children:"Ipaussu e Chavantes: Frete gr\xe1tis. Demais cidades: Entrega e fretes a combinar."})]})})},Vt=[{key:"products",Component:H,path:"/"},{key:"cart",Component:Ft,path:"/cart"},{key:"product-info",Component:Bt,path:"/product/:cod"}],$t=function(){return Object(T.jsxs)(y.a,{children:[Object(T.jsx)(N,{}),Object(T.jsx)(it,{}),Object(T.jsx)("div",{className:"app",children:Object(T.jsxs)("div",{className:"routes",children:[Object(T.jsxs)(g.c,{children:[Vt.map((function(t){return function(t){var e=t.key,c=t.Component,n=t.path;return Object(T.jsx)(g.a,{exact:!0,path:n,component:c},e)}(Object(j.a)({},t))})),Object(T.jsx)(g.a,{path:"*",component:Ut})]}),Object(T.jsx)(Jt,{})]})})]})},Wt=Object(i.b)((function(t){return{user:t.auth.user}}),{setUser:function(t){return{type:m,payload:{user:t}}}})((function(t){t.user,t.setUser;return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)($t,{})})}));c(181),c(182),c(183);s.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(i.a,{store:_,children:Object(T.jsx)(Wt,{})})}),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.7dfdabea.chunk.js.map