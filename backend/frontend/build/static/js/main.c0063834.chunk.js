(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/house.54ad755d.jpg"},47:function(e,t,a){e.exports=a(95)},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(22),c=a.n(s),i=a(6),r=a(5),o=a(2),m=a(8),u=a(16),_=a(7),p=a(4),d=a.n(p),E=a(25),g=a.n(E),h=a(12),f=a.n(h),N=a(18),b=a(97),v=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(l){var n=Object(b.a)();l({type:"SET_ALERT",payload:{msg:e,alertType:t,id:n}}),setTimeout((function(){return l({type:"REMOVE_ALERT",payload:n})}),a)}},y=function(e,t){return function(){var a=Object(N.a)(f.a.mark((function a(l){var n,s,c;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={headers:{"Content-Type":"application/json"}},s=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,d.a.post("/api/token/",s,n);case 5:c=a.sent,l({type:"LOGIN_SUCCESS",payload:c.data}),l(v("Authenticated Successfully","success")),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(2),l({type:"LOGIN_FAIL"}),l(v("Error Authenticating","error"));case 14:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()},j=function(e){var t=Object(l.useState)({sale_type:"For Sale",price:"$0+",bedrooms:"0+",home_type:"House",bathrooms:"0+",sqft:"1000+",days_listed:"1 or less",has_photos:"1+",open_house:"false",keywords:""}),a=Object(o.a)(t,2),s=a[0],c=a[1],i=s.sale_type,r=s.price,m=s.bedrooms,p=s.home_type,E=s.bathrooms,h=s.sqft,f=s.days_listed,N=s.has_photos,b=s.open_house,v=s.keywords,y=Object(l.useState)(!1),j=Object(o.a)(y,2),O=j[0],w=j[1],S=function(e){return c(Object(_.a)(Object(_.a)({},s),{},Object(u.a)({},e.target.name,e.target.value)))};return n.a.createElement("form",{className:"listingform",onSubmit:function(t){return function(t){t.preventDefault(),d.a.defaults.headers={"Content-Type":"application/json"},w(!0),d.a.post("/api/listings/search",{sale_type:i,price:r,bedrooms:m,home_type:p,bathrooms:E,sqft:h,days_listed:f,has_photos:N,open_house:b,keywords:v}).then((function(t){w(!1),e.setListings(t.data),window.scrollTo(0,0)})).catch((function(e){w(!1),window.scrollTo(0,0)}))}(t)}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-1-of-6"},n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"sale_type"},"Sale or Rent"),n.a.createElement("select",{className:"listingform__select",name:"sale_type",onChange:function(e){return S(e)},value:i},n.a.createElement("option",null,"For Sale"),n.a.createElement("option",null,"For Rent"))),n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"sqft"},"Sqft"),n.a.createElement("select",{className:"listingform__select",name:"sqft",onChange:function(e){return S(e)},value:h},n.a.createElement("option",null,"1000+"),n.a.createElement("option",null,"1200+"),n.a.createElement("option",null,"1500+"),n.a.createElement("option",null,"2000+"),n.a.createElement("option",null,"Any")))),n.a.createElement("div",{className:"col-1-of-6"},n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"price"},"Minimum Price"),n.a.createElement("select",{className:"listingform__select",name:"price",onChange:function(e){return S(e)},value:r},n.a.createElement("option",null,"$0+"),n.a.createElement("option",null,"$200,000+"),n.a.createElement("option",null,"$400,000+"),n.a.createElement("option",null,"$600,000+"),n.a.createElement("option",null,"$800,000+"),n.a.createElement("option",null,"$1,000,000+"),n.a.createElement("option",null,"$1,200,000+"),n.a.createElement("option",null,"$1,500,000+"),n.a.createElement("option",null,"Any"))),n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"days_listed"},"Days Listed"),n.a.createElement("select",{className:"listingform__select",name:"days_listed",onChange:function(e){return S(e)},value:f},n.a.createElement("option",null,"1 of less"),n.a.createElement("option",null,"2 of less"),n.a.createElement("option",null,"5 of less"),n.a.createElement("option",null,"10 of less"),n.a.createElement("option",null,"20 of less"),n.a.createElement("option",null,"Any")))),n.a.createElement("div",{className:"col-1-of-6"},n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"bedrooms"},"Bedrooms"),n.a.createElement("select",{className:"listingform__select",name:"bedrooms",onChange:function(e){return S(e)},value:m},n.a.createElement("option",null,"0+"),n.a.createElement("option",null,"1+"),n.a.createElement("option",null,"2+"),n.a.createElement("option",null,"3+"),n.a.createElement("option",null,"4+"),n.a.createElement("option",null,"5+"))),n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"has_photos"},"Has Photos"),n.a.createElement("select",{className:"listingform__select",name:"has_photos",onChange:function(e){return S(e)},value:N},n.a.createElement("option",null,"1+"),n.a.createElement("option",null,"3+"),n.a.createElement("option",null,"5+"),n.a.createElement("option",null,"10+"),n.a.createElement("option",null,"15+")))),n.a.createElement("div",{className:"col-1-of-6"},n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"home_type"},"Home Type"),n.a.createElement("select",{className:"listingform__select",name:"home_type",onChange:function(e){return S(e)},value:p},n.a.createElement("option",null,"House"),n.a.createElement("option",null,"Condo"),n.a.createElement("option",null,"Townhouse"))),n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"keywords"},"Keywords"),n.a.createElement("input",{className:"listingform__input",name:"keywords",type:"text",onChange:function(e){return S(e)},value:v}))),n.a.createElement("div",{className:"col-1-of-6"},n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"bathrooms"},"Bathrooms"),n.a.createElement("select",{className:"listingform__select",name:"bathrooms",onChange:function(e){return S(e)},value:E},n.a.createElement("option",null,"0+"),n.a.createElement("option",null,"1+"),n.a.createElement("option",null,"2+"),n.a.createElement("option",null,"3+"),n.a.createElement("option",null,"4+"))),n.a.createElement("div",{className:"listingform__section"},n.a.createElement("label",{className:"listingform__label",htmlFor:"open_house"},"Open Houses"),n.a.createElement("input",{className:"listingform__checkbox",name:"open_house",type:"checkbox",onChange:function(e){return S(e)},value:b}))),n.a.createElement("div",{className:"col-1-of-6"},O?n.a.createElement("div",{className:"listingform__loader"},n.a.createElement(g.a,{type:"Oval",color:"#424242",height:50,width:50})):n.a.createElement("button",{className:"listingform__button listingform__button--primary"},"Save"))))},O=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("h3",{className:"card__title"},e.title),n.a.createElement("div",{className:"card__header"},n.a.createElement("img",{className:"card__header__photo",src:e.photo,alt:"House"})),n.a.createElement("p",{className:"card__location"},e.address,", ",e.city,", ",e.state),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2-of-3"},n.a.createElement("p",{className:"card__info"},"Price: $",e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),n.a.createElement("p",{className:"card__info"},"Bedrooms: ",e.bedrooms),n.a.createElement("p",{className:"card__info"},"Bathrooms: ",e.bathrooms)),n.a.createElement("div",{className:"col-1-of-3"},n.a.createElement("p",{className:"card__saletype"},e.sale_type),n.a.createElement("p",{className:"card__hometype"},e.home_type),n.a.createElement("p",{className:"card__sqft"},e.sqft))),n.a.createElement(i.b,{className:"card__link",to:"/listing/".concat(e.slug)},"View listing"))},w=function(e){var t=e.listings;return n.a.createElement("div",null,function(){var e=[],a=[];t.map((function(t){return e.push(n.a.createElement(O,{key:t,title:t.title,address:t.address,city:t.city,state:t.state,price:t.price,sale_type:t.sale_type,home_type:t.home_type,bedrooms:t.bedrooms,bathrooms:t.bathrooms,sqft:t.sqft,photo:t.photo_main,slug:t.slug}))}));for(var l=0;l<t.length;l+=3)a.push(n.a.createElement("div",{className:"row",key:l},n.a.createElement("div",{className:"col-1-of-3"},e[l]),n.a.createElement("div",{className:"col-1-of-3"},e[l+1]?e[l+1]:null),n.a.createElement("div",{className:"col-1-of-3"},e[l+2]?e[l+2]:null)));return a}())},S=function(e){return n.a.createElement("div",null,n.a.createElement("div",{onClick:function(){return e.previous()},className:"pagination__number"},"Previous"),function(){for(var t=[],a=e.itemsPerPage,l=1,s=function(a){var s=l,c="pagination__number",i=null;e.active===s?(c="pagination__number pagination__number--active",i=n.a.createElement("div",{key:a,className:c},l)):i=n.a.createElement("div",{key:a,onClick:function(){return e.visitPage(s)},className:c},l),t.push(i),l++},c=0;c<e.count;c+=a)s(c);return t}(),n.a.createElement("div",{onClick:function(){return e.next()},className:"pagination__number"},"Next"))},k=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(l.useState)(1),i=Object(o.a)(c,2),r=i[0],u=i[1],_=Object(l.useState)(3),p=Object(o.a)(_,2),d=p[0],E=(p[1],Object(l.useState)(1)),g=Object(o.a)(E,2),h=g[0],f=g[1],N=r*d,b=N-d,v=a.slice(b,N);return n.a.createElement("main",{className:"home"},n.a.createElement(m.a,null,n.a.createElement("title",null,"Realest Estate - Home"),n.a.createElement("meta",{name:"description",content:"Realest Estate Home Page"})),n.a.createElement("section",{className:"home__form"},n.a.createElement(j,{setListings:s})),n.a.createElement("section",{className:"home__listings"},n.a.createElement(w,{listings:v})),n.a.createElement("section",{className:"home__pagination"},n.a.createElement("div",{className:"row"},0!==a.length?n.a.createElement(S,{itemsPerPage:d,count:a.length,visitPage:function(e){u(e),f(e)},previous:function(){1!==r&&(u(r-1),f(r-1))},next:function(){r!==Math.ceil(a.length/3)&&(u(r+1),f(r+1))},active:h,setActive:f}):null)))},x=a(41),C=a.n(x),A=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(l.useState)([]),i=Object(o.a)(c,2),r=i[0],u=i[1];Object(l.useEffect)((function(){d.a.defaults.headers={"Content-Type":"application/json"},function(){var e=Object(N.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("".concat("","/api/realtors/topseller"));case 3:t=e.sent,s(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(l.useEffect)((function(){d.a.defaults.headers={"Content-Type":"application/json"},function(){var e=Object(N.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("".concat("","/api/realtors/"));case 3:t=e.sent,u(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[]);return n.a.createElement("main",{className:"about"},n.a.createElement(m.a,null,n.a.createElement("title",null,"Realest Estate - About"),n.a.createElement("meta",{name:"description",content:"About us"})),n.a.createElement("header",{className:"about__header"},n.a.createElement("h1",{className:"about__heading"},"About Realest Estate")),n.a.createElement("section",{className:"about__info"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3-of-4"},n.a.createElement("h2",{className:"about__subheading"},"We find the perfect home for you"),n.a.createElement("p",{className:"about__paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ultricies augue. Praesent at iaculis nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero est, luctus sit amet arcu at, finibus commodo ligula. Morbi sapien turpis, mollis vel tempor sit amet, posuere pulvinar purus. Nam lorem dolor, pellentesque quis elementum maximus, venenatis vel justo."),n.a.createElement("div",{className:"about__display"},n.a.createElement("img",{className:"about__display__image",src:C.a,alt:""})),n.a.createElement("p",{className:"about__paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ultricies augue. Praesent at iaculis nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero est, luctus sit amet arcu at, finibus commodo ligula. Morbi sapien turpis, mollis vel tempor sit amet, posuere pulvinar purus. Nam lorem dolor, pellentesque quis elementum maximus, venenatis vel justo. Pellentesque purus turpis, maximus tempor euismod ut, pretium sed libero. Nam at dictum eros. Pellentesque euismod leo urna, et scelerisque lorem consequat vel.")),n.a.createElement("div",{className:"col-1-of-4"},function(){var e=[];return a.map((function(t){return e.push(n.a.createElement(l.Fragment,{key:t.id},n.a.createElement("div",{className:"about__display"},n.a.createElement("img",{className:"about__display__image",src:t.photo,alt:""})),n.a.createElement("h3",{className:"about__topseller"},"Top Seller:"),n.a.createElement("p",{className:"about__contact"},t.name),n.a.createElement("p",{className:"about__contact"},t.phone),n.a.createElement("p",{className:"about__contact"},t.email),n.a.createElement("p",{className:"about__about"},t.description)))})),e}()))),n.a.createElement("section",{className:"about__team"},n.a.createElement("div",{className:"row"},n.a.createElement("h2",{className:"about__subheading"},"Meet out awesome team!")),function(){var e=[],t=[];r.map((function(t){return e.push(n.a.createElement(l.Fragment,{key:t.id},n.a.createElement("div",{className:"about__display"},n.a.createElement("img",{className:"about__display__image",src:t.photo,alt:""})),n.a.createElement("h3",{className:"about__realtor"},t.name),n.a.createElement("p",{className:"about__contact"},t.phone),n.a.createElement("p",{className:"about__contact"},t.email),n.a.createElement("p",{className:"about__about"},t.description)))}));for(var a=0;a<r.length;a+=3)t.push(n.a.createElement("div",{key:a,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},e[a]),n.a.createElement("div",{className:"col-1-of-3"},e[a+1]?e[a+1]:null),n.a.createElement("div",{className:"col-1-of-3"},e[a+2]?e[a+2]:null)));return t}()))},q=a(9),L=Object(q.b)(null,{setAlert:v})((function(e){var t=e.setAlert;Object(l.useEffect)((function(){window.scrollTo(0,0)}),[]);var a=Object(l.useState)({name:"",email:"",subject:"",message:""}),s=Object(o.a)(a,2),c=s[0],i=s[1],r=c.name,p=c.email,E=c.subject,h=c.message,f=Object(l.useState)(!1),N=Object(o.a)(f,2),b=N[0],v=N[1],y=function(e){return i(Object(_.a)(Object(_.a)({},c),{},Object(u.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"contact"},n.a.createElement(m.a,null,n.a.createElement("title",null,"Realest Estate - Contact"),n.a.createElement("meta",{name:"description",content:"Contact us"})),n.a.createElement("form",{className:"contact__form",onSubmit:function(e){return function(e){e.preventDefault(),d.a.defaults.headers={"Content-Type":"application/json"},v(!0),d.a.post("".concat("","/api/contacts/"),{name:r,email:p,subject:E,message:h}).then((function(e){t("Message Sent","success"),v(!1),window.scrollTo(0,0)})).catch((function(e){t("Error with Sending Message","error"),v(!1),window.scrillTo(0,0)}))}(e)}},n.a.createElement("label",{className:"contact__form__label",htmlFor:"name"},"Name*"),n.a.createElement("input",{className:"contact__form__input",name:"name",type:"text",placeholder:"Full Name",onChange:function(e){return y(e)},value:r,required:!0}),n.a.createElement("label",{className:"contact__form__label",htmlFor:"email"},"Email*"),n.a.createElement("input",{className:"contact__form__input",name:"email",type:"email",placeholder:"example@gmail.com",onChange:function(e){return y(e)},value:p,required:!0}),n.a.createElement("label",{className:"contact__form__label",htmlFor:"subject"},"Subject*"),n.a.createElement("input",{className:"contact__form__input",name:"subject",type:"text",placeholder:"Buying Home",onChange:function(e){return y(e)},value:E,required:!0}),n.a.createElement("label",{className:"contact__form__label",htmlFor:"message"},"Message*"),n.a.createElement("textarea",{className:"contact__form__textarea",name:"message",cols:"30",rows:"10",placeholder:"Message",onChange:function(e){return y(e)},value:h}),b?n.a.createElement("div",{className:"contact__form__loader"},n.a.createElement(g.a,{type:"Oval",color:"#424242",height:50,width:50})):n.a.createElement("button",{className:"contact__form__button",htmltype:"submit"},"Send")))})),T=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(l.useState)(0),i=Object(o.a)(c,2),r=i[0],u=i[1],_=Object(l.useState)(""),p=Object(o.a)(_,2),E=p[0],g=p[1],h=Object(l.useState)(""),b=Object(o.a)(h,2),v=b[0],y=b[1],j=Object(l.useState)(1),w=Object(o.a)(j,2),k=w[0],x=w[1];Object(l.useEffect)((function(){window.scrollTo(0,0),function(){var e=Object(N.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("".concat("","/api/listings/?page=1"));case 3:t=e.sent,s(t.data.results),u(t.data.count),g(t.data.previous),y(t.data.next),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[]);return n.a.createElement("div",{className:"listings"},n.a.createElement(m.a,null,n.a.createElement("title",null,"Realest Estate - Listings"),n.a.createElement("meta",{name:"description",content:"Listings page"})),n.a.createElement("section",{className:"listings__listings"},function(){var e=[],t=[];a.map((function(t){return e.push(n.a.createElement(O,{key:t,title:t.title,address:t.address,city:t.city,state:t.state,price:t.price,sale_type:t.sale_type,home_type:t.home_type,bedrooms:t.bedrooms,bathrooms:t.bathrooms,sqft:t.sqft,photo:t.photo_main,slug:t.slug}))}));for(var l=0;l<a.length;l+=3)t.push(n.a.createElement("div",{key:l,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},e[l]),n.a.createElement("div",{className:"col-1-of-3"},e[l+1]?e[l+1]:null),n.a.createElement("div",{className:"col-1-of-3"},e[l+2]?e[l+2]:null)));return t}()),n.a.createElement("section",{className:"listings__pagination"},n.a.createElement("div",{className:"row"},n.a.createElement(S,{itemsPerPage:3,count:r,visitPage:function(e){d.a.get("".concat("","/api/listings/?page=").concat(e)).then((function(t){s(t.data.results),g(t.data.previous),y(t.data.next),x(e)})).catch((function(e){}))},previous:function(){d.a.get(E).then((function(e){s(e.data.results),g(e.data.previous),y(e.data.next),E&&x(k-1)})).catch((function(e){}))},next:function(){d.a.get(v).then((function(e){s(e.data.results),g(e.data.previous),y(e.data.next),v&&x(k+1)})).catch((function(e){}))},active:k,setActive:x}))))},F=function(e){var t=Object(l.useState)({}),a=Object(o.a)(t,2),s=a[0],c=a[1],r=Object(l.useState)({}),u=Object(o.a)(r,2),_=u[0],p=u[1],E=Object(l.useState)(0),g=Object(o.a)(E,2),h=g[0],f=g[1];Object(l.useEffect)((function(){var t=e.match.params.id,a={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}};d.a.get("".concat("","/api/listings/").concat(t),a).then((function(e){c(e.data),f(e.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})).catch((function(e){}))}),[e.match.params.id]),Object(l.useEffect)((function(){var e=s.realtor,t={headers:{Authoriaztion:"Bearer ".concat(localStorage.getItem("token"))}};e&&d.a.get("".concat("","/api/realtors/").concat(e),t).then((function(e){p(e.data)})).catch((function(e){}))}),[s.realtor]);return n.a.createElement("div",{className:"listingdetail"},n.a.createElement(m.a,null,n.a.createElement("title",null,"Realest Estate - listing | ","".concat(s.title)),n.a.createElement("meta",{name:"description",content:"Listing detail"})),n.a.createElement("div",{className:"listingdetail__header"},n.a.createElement("div",{className:"listingdetail__title"},s.title),n.a.createElement("p",{className:"listingdetail__location"},s.city,", ",s.state,s.zipcode)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"listingdetail__breadcrumb"},n.a.createElement(i.b,{className:"listingdetail__breadcrumb__link",to:"/"},"Home")," ","/ ",s.title)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3-of-4"},n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_main,alt:""}))),n.a.createElement("div",{className:"col-1-of-4"},n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:_.photo,alt:""})),n.a.createElement("h3",{className:"listingdetail__realtor"},_.name),n.a.createElement("p",{className:"listingdetail__contact"},_.phone),n.a.createElement("p",{className:"listingdetail__contact"},_.email),n.a.createElement("p",{className:"listingdetail__about"},_.description))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-1-of-2"},n.a.createElement("ul",{className:"listingdetail__list"},n.a.createElement("li",{className:"listingdetail__list__item"},"Home Type: ",s.home_type),n.a.createElement("li",{className:"listingdetail__list__item"},"Price: $",h),n.a.createElement("li",{className:"listingdetail__list__item"},"Bedrooms: ",s.bedrooms),n.a.createElement("li",{className:"listingdetail__list__item"},"Bathrooms: ",s.bathrooms),n.a.createElement("li",{className:"listingdetail__list__item"},"square Feet: ",s.sqft))),n.a.createElement("div",{className:"col-1-of-2"},n.a.createElement("ul",{className:"listingdetail__list"},n.a.createElement("li",{className:"listingdetail__list__item"},"Sale Type: ",s.sale_type),n.a.createElement("li",{className:"listingdetail__list__item"},"Address: ",s.address),n.a.createElement("li",{className:"listingdetail__list__item"},"City: ",s.city),n.a.createElement("li",{className:"listingdetail__list__item"},"State: ",s.state),n.a.createElement("li",{className:"listingdetail__list__item"},"Zipcode: ",s.zipcode)))),n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"listingdetail__description"},s.description)),function(){var e=[];return e.push(n.a.createElement("div",{key:1,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_1?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_1,alt:""})):null,s.photo_2?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_2,alt:""})):null,s.photo_3?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_3,alt:""})):null))),e.push(n.a.createElement("div",{key:2,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_4?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_4,alt:""})):null,s.photo_5?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_5,alt:""})):null,s.photo_6?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_6,alt:""})):null))),e.push(n.a.createElement("div",{key:3,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_7?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_7,alt:""})):null,s.photo_8?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_8,alt:""})):null,s.photo_9?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_9,alt:""})):null))),e.push(n.a.createElement("div",{key:4,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_10?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_10,alt:""})):null,s.photo_11?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_11,alt:""})):null,s.photo_12?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_12,alt:""})):null))),e.push(n.a.createElement("div",{key:5,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_13?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_13,alt:""})):null,s.photo_14?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_14,alt:""})):null,s.photo_15?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_15,alt:""})):null))),e.push(n.a.createElement("div",{key:6,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_16?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_16,alt:""})):null,s.photo_17?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_17,alt:""})):null,s.photo_18?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_18,alt:""})):null))),e.push(n.a.createElement("div",{key:7,className:"row"},n.a.createElement("div",{className:"col-1-of-3"},s.photo_19?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_19,alt:""})):null,s.photo_20?n.a.createElement("div",{className:"listingdetail__display"},n.a.createElement("img",{className:"listingdetail__display__image",src:s.photo_20,alt:""})):null))),e}())},P=Object(q.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e){var t=e.name,a=e.email,l=e.password,n=e.password2;return function(){var e=Object(N.a)(f.a.mark((function e(s){var c,i,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"Content-Type":"application/json"}},i=JSON.stringify({name:t,email:a,password:l,password2:n}),e.prev=2,e.next=5,d.a.post("/api/accounts/signup",i,c);case 5:r=e.sent,s({type:"SIGNUP_SUCCESS",payload:r.data}),s(y(a,l)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),s({type:"SIGNUP_FAIL"}),s(v("Error Authenticating","error"));case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},setAlert:v})((function(e){var t=e.setAlert,a=e.signup,s=e.isAuthenticated,c=Object(l.useState)({name:"",email:"",password:"",password2:""}),p=Object(o.a)(c,2),d=p[0],E=p[1],g=d.name,h=d.email,f=d.password,N=d.password2,b=function(e){return E(Object(_.a)(Object(_.a)({},d),{},Object(u.a)({},e.target.name,e.target.value)))};return s?n.a.createElement(r.a,{to:"/"}):n.a.createElement("div",{className:"auth"},n.a.createElement(m.a,null,n.a.createElement("title",null,"Realest Estate - Sign Up"),n.a.createElement("meta",{name:"description",content:"sign up page"})),n.a.createElement("h1",{className:"auth__title"},"Sign Up"),n.a.createElement("p",{className:"auth__lead"},"Create your account"),n.a.createElement("form",{className:"auth__form",onSubmit:function(e){return function(e){e.preventDefault(),f!==N?t("Passwords do not match","error"):a({name:g,email:h,password:f,password2:N})}(e)}},n.a.createElement("div",{className:"auth__form__group"},n.a.createElement("input",{className:"auth__form__input",type:"text",name:"name",placeholder:"Name",value:g,onChange:function(e){return b(e)},required:!0})),n.a.createElement("div",{className:"auth__form__group"},n.a.createElement("input",{className:"auth__form__input",type:"email",name:"email",placeholder:"Email",value:h,onChange:function(e){return b(e)},required:!0})),n.a.createElement("div",{className:"auth__form__group"},n.a.createElement("input",{className:"auth__form__input",type:"password",name:"password",placeholder:"Password",value:f,onChange:function(e){return b(e)},minLength:"6",required:!0})),n.a.createElement("div",{className:"auth__form__group"},n.a.createElement("input",{className:"auth__form__input",type:"password",name:"password2",placeholder:"Comfirm Password",value:N,onChange:function(e){return b(e)},minLength:"6",required:!0})),n.a.createElement("button",{className:"auth__form__button"},"Register")),n.a.createElement("p",{className:"auth__authtext"},"Already have an account?"," ",n.a.createElement(i.b,{className:"auth__authtext__link",to:"/login"},"Sign In")))})),I=Object(q.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:y})((function(e){var t=e.login,a=e.isAuthenticated,s=Object(l.useState)({email:"",password:""}),c=Object(o.a)(s,2),p=c[0],d=c[1],E=p.email,g=p.password,h=function(e){return d(Object(_.a)(Object(_.a)({},p),{},Object(u.a)({},e.target.name,e.target.value)))};return a?n.a.createElement(r.a,{to:"/"}):n.a.createElement("div",{className:"auth"},n.a.createElement(m.a,null,n.a.createElement("title",null,"Realest Estate - Login"),n.a.createElement("meta",{name:"description",content:"login page"})),n.a.createElement("h1",{className:"auth__title"},"Sign In"),n.a.createElement("p",{className:"auth__lead"},"Sign into your account"),n.a.createElement("form",{className:"auth__form",onSubmit:function(e){return function(e){e.preventDefault(),t(E,g)}(e)}},n.a.createElement("div",{className:"auth__form__group"},n.a.createElement("input",{className:"auth__form__input",type:"email",placeholder:"Email",value:E,name:"email",onChange:function(e){return h(e)},required:!0})),n.a.createElement("div",{className:"auth__form__group"},n.a.createElement("input",{className:"auth__form__input",type:"password",name:"password",placeholder:"Password",value:g,onChange:function(e){return h(e)},minLength:"6",required:!0})),n.a.createElement("button",{className:"auth__form__button"},"Login")),n.a.createElement("p",{className:"auth__authtext"},"Don't have an account?"," ",n.a.createElement(i.b,{className:"auth__authtext__link",to:"/signup"},"Sign Up")))})),R=Object(q.b)((function(e){return{alerts:e.alert}}),null)((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return n.a.createElement("div",{key:e.id,className:"alert alert--".concat(e.alertType)},e.msg)}))})),M=Object(q.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e(v("Logout Successfully","success")),e({type:"LOGOUT"})}}})((function(e){var t=e.auth,a=t.isAuthenticated,s=t.loading,c=e.logout,r=n.a.createElement("a",{className:"navbar__top__auth__link",onClick:c,href:"#!"},"Logout"),o=n.a.createElement(l.Fragment,null,n.a.createElement(i.b,{className:"navbar__top__auth__link",to:"/login"},"Login"),n.a.createElement(i.b,{className:"navbar__top__auth__link",to:"/signup"},"Sign Up"));return n.a.createElement(l.Fragment,null,n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"navbar__top"},n.a.createElement("div",{className:"navbar__top__logo"},n.a.createElement(i.b,{className:"navbar__top__logo__link",to:"/"},"Realest Estate")),n.a.createElement("div",{className:"navbar__top__auth"},!s&&n.a.createElement(l.Fragment,null,a?r:o))),n.a.createElement("div",{className:"navbar__bottom"},n.a.createElement("li",{className:"navbar__bottom__item"},n.a.createElement(i.c,{className:"navbar__bottom__item__link",exact:!0,to:"/"},"Home")),n.a.createElement("li",{className:"navbar__bottom__item"},n.a.createElement(i.c,{className:"navbar__bottom__item__link",exact:!0,to:"/listings"},"Listings")),n.a.createElement("li",{className:"navbar__bottom__item"},n.a.createElement(i.c,{className:"navbar__bottom__item__link",exact:!0,to:"/about"},"About")),n.a.createElement("li",{className:"navbar__bottom__item"},n.a.createElement(i.c,{className:"navbar__bottom__item__link",exact:!0,to:"/contact"},"Contact")))),n.a.createElement(R,null))})),U=function(e){return n.a.createElement("div",null,n.a.createElement(M,null),e.children)},B=function(){return n.a.createElement("div",{className:"notfound"},n.a.createElement("h1",{className:"notfound__heading"},"404 Not Found"),n.a.createElement("p",{className:"notfound__paragraph"},"The link you requested does not exist on our website."))},H=a(46),$=Object(q.b)((function(e){return{auth:e.auth}}),null)((function(e){var t=e.component,a=e.auth,l=a.isAuthenticated,s=a.loading,c=Object(H.a)(e,["component","auth"]);return n.a.createElement(r.b,Object.assign({},c,{render:function(e){return l||s?n.a.createElement(t,e):n.a.createElement(r.a,{to:"/login"})}}))})),G=a(17),D=a(43),z=a(44),J=a(45),W=[],V={token:localStorage.getItem("token"),isAuthenticated:null,loading:!1},K=Object(G.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,a=t.type,l=t.payload;switch(a){case"SET_ALERT":return[].concat(Object(J.a)(e),[l]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==l}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,a=t.type,l=t.payload;switch(a){case"LOGIN_SUCCESS":return localStorage.setItem("token",l.access),Object(_.a)(Object(_.a)({},e),{},{isAuthenticated:!0,loading:!1,token:l.access});case"SIGNUP_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{isAuthenticated:!1,loading:!0});case"SIGNUP_FAIL":case"LOGIN_FAIL":case"LOGOUT":return localStorage.removeItem("token"),Object(_.a)(Object(_.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});default:return e}}}),Z=[z.a],Q=Object(G.createStore)(K,{},Object(D.composeWithDevTools)(G.applyMiddleware.apply(void 0,Z))),X=(a(94),function(){return n.a.createElement(q.a,{store:Q},n.a.createElement(i.a,null,n.a.createElement(U,null,n.a.createElement(r.d,null,n.a.createElement(r.b,{exact:!0,path:"/",component:k}),n.a.createElement(r.b,{exact:!0,path:"/about",component:A}),n.a.createElement(r.b,{exact:!0,path:"/contact",component:L}),n.a.createElement(r.b,{exact:!0,path:"/listings",component:T}),n.a.createElement($,{exact:!0,path:"/listing/:id",component:F}),n.a.createElement(r.b,{exact:!0,path:"/login",component:I}),n.a.createElement(r.b,{exact:!0,path:"/signup",component:P}),n.a.createElement(r.b,{component:B})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.c0063834.chunk.js.map