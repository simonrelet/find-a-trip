(this["webpackJsonpfind-a-trip"]=this["webpackJsonpfind-a-trip"]||[]).push([[0],{28:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(29),r=n(30),o=n(33),i=n(31),c=n(35),l=n(0),s=n.n(l),u=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={error:!1},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error(e),console.error(t)}},{key:"render",value:function(){return this.state.error?s.a.createElement("p",null,"Oups something went wrong"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{error:!0}}}]),t}(s.a.Component)},32:function(e,t,n){"use strict";var a=n(24),r=n(3),o=n(0),i=n.n(o),c=n(9),l=n(14),s=n(4),u=n.n(s),p=i.a.createContext(null),d="token",m={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({grant_type:"client_credentials",client_id:"dummy-client",client_secret:"UizxdvqmPxhO7s3IPqy9C5bkmTU9B0zL",scopes:["SCOPE_TRIP_DRIVER","DEFAULT","SCOPE_INTERNAL_CLIENT"]})};function f(e){var t=e.children;var n=i.a.useRef(localStorage.getItem(d)),a=i.a.useCallback((function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(fetch("https://edge.blablacar.com/token",m));case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Could not get token: ".concat(e.statusText||e.status));case 5:return t.next=7,u.a.awrap(e.json());case 7:n.current=t.sent.access_token,localStorage.setItem(d,n.current);case 9:case"end":return t.stop()}}))}),[]),r=i.a.useCallback((function(e){var t,r,o,i,s,p,d=arguments;return u.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(s=function(){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(fetch(e,Object(c.a)({},i,{headers:Object(c.a)({},o,{Authorization:"Bearer ".concat(n.current)})})));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},t=d.length>1&&void 0!==d[1]?d[1]:{},r=t.headers,o=void 0===r?{}:r,i=Object(l.a)(t,["headers"]),p=null,null==n.current){m.next=8;break}return m.next=7,u.a.awrap(s());case 7:p=m.sent;case 8:if(null!=n.current&&401!==p.status){m.next=14;break}return m.next=11,u.a.awrap(a());case 11:return m.next=13,u.a.awrap(s());case 13:p=m.sent;case 14:return m.abrupt("return",p);case 15:case"end":return m.stop()}}))}),[a]),o=i.a.useMemo((function(){return{fetchAPI:r}}),[r]);return i.a.createElement(p.Provider,{value:o,children:t})}var h=n(18),g=n(66);var b="none",y=["Paris","Lyon","Marseille","Rennes","Bordeaux","Lille","Nantes"],v=r.b.select.withConfig({displayName:"CityInput__Select",componentId:"hjcaoc-0"})(["height:2em;border:1px solid #ccc;border-radius:","em;background:white;color:inherit;font:inherit;cursor:pointer;"],.25);function _(e){var t=e.value,n=e.onChange,a=Object(l.a)(e,["value","onChange"]);return i.a.createElement(v,Object.assign({},a,{value:t||b,onChange:function(e){n(e.target.value===b?"":e.target.value)}}),i.a.createElement("option",{value:b},"Select a city..."),y.map((function(e){return i.a.createElement("option",{key:e,value:e,children:e})})))}var w=r.b.section.withConfig({displayName:"SearchForm__Form",componentId:"sc-15p5asm-0"})(["display:flex;align-items:center;","{margin-left:","em;}"],"& > *:not(:first-child)",1),E=r.b.div.withConfig({displayName:"SearchForm__Field",componentId:"sc-15p5asm-1"})(["min-width:0;flex:1;display:flex;flex-direction:column;","{margin-top:","em;}"],"& > *:not(:first-child)",.5),x=r.b.label.withConfig({displayName:"SearchForm__Label",componentId:"sc-15p5asm-2"})(["color:",";"],"#555");function C(e){var t=e.departure,n=e.setDeparture,a=e.destination,r=e.setDestination;return i.a.createElement(w,null,i.a.createElement(E,null,i.a.createElement(x,{htmlFor:"departure"},"Departure"),i.a.createElement(_,{id:"departure",value:t,onChange:n})),i.a.createElement(E,null,i.a.createElement(x,{htmlFor:"destination"},"Destination"),i.a.createElement(_,{id:"destination",value:a,onChange:r})))}var I=n(63),j=n(64),k=n(65),O=r.b.a.withConfig({displayName:"UserInfo__UserInfoWrapper",componentId:"bs1fdn-0"})(["display:inline-flex;align-items:center;color:inherit;text-decoration:none;","{margin-left:","em;}"],"& > *:not(:first-child)",.5),N=r.b.img.withConfig({displayName:"UserInfo__Avatar",componentId:"bs1fdn-1"})(["width:2em;height:2em;object-fit:contain;border-radius:50%;"]);function S(e){var t=e.user;return i.a.createElement(O,{href:t.links._front,target:"_blank",rel:"noopener noreferrer"},t.has_picture&&i.a.createElement(N,{src:t.picture,alt:t.display_name}),i.a.createElement("span",null,t.display_name))}var P=new Date,A="dd/MM/yyyy HH:mm:ss",F="HH:mm",T="EEEE do",D=r.b.div.withConfig({displayName:"TripCard__Card",componentId:"sc-1hl03w8-0"})(["padding:","em;background-color:white;box-shadow:0px 2px 6px 0px rgba(0,0,0,0.23);border-radius:","em;display:flex;flex-direction:column;align-items:stretch;","{margin-top:","em;}"],1,.25,"& > *:not(:first-child)",1),R=r.b.div.withConfig({displayName:"TripCard__CardContent",componentId:"sc-1hl03w8-1"})(["display:flex;align-items:flex-start;justify-content:space-between;","{margin-left:","em;}"],"& > *:not(:first-child)",.5),z=r.b.div.withConfig({displayName:"TripCard__CardFooter",componentId:"sc-1hl03w8-2"})(["display:flex;align-items:center;justify-content:space-between;","{margin-left:","em;}"],"& > *:not(:first-child)",.5),L=r.b.span.withConfig({displayName:"TripCard__DepartureDate",componentId:"sc-1hl03w8-3"})(["font-size:1.25em;"]),U=r.b.div.withConfig({displayName:"TripCard__TripInfo",componentId:"sc-1hl03w8-4"})(["display:flex;flex-direction:column;","{margin-top:","em;}"],"& > *:not(:first-child)",.5),B=r.b.span.withConfig({displayName:"TripCard__Price",componentId:"sc-1hl03w8-5"})(["font-size:1.25em;font-weight:bold;"]);function M(e){var t=e.trip,n=Object(I.a)(t.departure_date,A,P),a=Object(j.a)(n,F);if(!Object(k.a)(n,P)){var r=Object(j.a)(n,T);a="".concat(a," - ").concat(r)}return i.a.createElement(D,null,i.a.createElement(R,null,i.a.createElement(U,null,i.a.createElement(L,null,a),i.a.createElement("span",null,t.departure_place.city_name," - ",t.arrival_place.city_name)),i.a.createElement(B,null,t.price.string_value)),i.a.createElement(z,null,i.a.createElement(S,{user:t.user}),i.a.createElement("a",{href:t.links._front,target:"_blank",rel:"noopener noreferrer"},"See more on BlaBlaCar")))}var H=r.b.ul.withConfig({displayName:"SearchResults__Results",componentId:"sc-17vrzmx-0"})(["list-style:none;margin:0;padding:0;","{margin-top:","em;}"],"& > *:not(:first-child)",1.5),J=r.b.p.withConfig({displayName:"SearchResults__ResultsCount",componentId:"sc-17vrzmx-1"})(["color:",";"],"#555");function q(e){var t=e.results,n=t.pager,a=t.trips;return i.a.createElement("section",null,i.a.createElement(J,null,"Found ",n.total," results"),i.a.createElement(H,null,a.map((function(e){return i.a.createElement("li",{key:e.permanent_id},i.a.createElement(M,{trip:e}))}))))}var V=n(27),W={_format:"json",locale:"fr_FR",cur:"EUR"},G={headers:{Accept:"application/json","Accept-Language":"fr","cache-control":"no-cache"}};function K(e){var t,n,a,r,o;return u.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.departure,n=e.destination,a=e.fetchAPI,r=Object(V.stringify)(Object(c.a)({},W,{fn:t,tn:n})),i.next=4,u.a.awrap(a("".concat("https://edge.blablacar.com/api/v2/trips","?").concat(r),G));case 4:if((o=i.sent).ok){i.next=7;break}throw new Error("Could not search trips: ".concat(o.statusText||o.status));case 7:return i.next=9,u.a.awrap(o.json());case 9:return i.abrupt("return",i.sent);case 10:case"end":return i.stop()}}))}var Q=r.b.hr.withConfig({displayName:"Search__Separator",componentId:"sc-1prn7g1-0"})(["margin:0;border:none;border-top:1px solid #eee;"]),X=r.b.p.withConfig({displayName:"Search__Helper",componentId:"sc-1prn7g1-1"})(["text-align:center;color:",";"],"#555"),Y=r.b.p.withConfig({displayName:"Search__Placeholder",componentId:"sc-1prn7g1-2"})(["color:",";"],"#555");function Z(){var e=function(){var e=i.a.useContext(p);if(null==e)throw new Error("useAPI cannot be used outside of an <APIProvider />");return e}().fetchAPI,t=i.a.useState(""),n=Object(h.a)(t,2),a=n[0],r=n[1],o=i.a.useState(""),c=Object(h.a)(o,2),l=c[0],s=c[1],d=Object(g.a)((function(){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==a&&""!==l){t.next=2;break}return t.abrupt("return",null);case 2:return t.next=4,u.a.awrap(K({departure:a,destination:l,fetchAPI:e}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}))}),[a,l,e]),m=Object(h.a)(d,2),f=m[0],b=m[1],y=null;return""===a||""===l?y=i.a.createElement(X,null,"Enter a departure and destination city above"):null!=b.error?y=i.a.createElement("p",null,b.error.message):b.pending?y=i.a.createElement(Y,null,"Loading..."):null!=f&&(y=i.a.createElement(q,{results:f})),i.a.createElement(i.a.Fragment,null,i.a.createElement(C,{departure:a,setDeparture:r,destination:l,setDestination:s}),i.a.createElement(Q,null),y)}function $(){var e=Object(a.a)(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-size: 16px;\n    color: ",";\n  }\n"]);return $=function(){return e},e}var ee=Object(r.a)($(),"#333"),te=r.b.main.withConfig({displayName:"App__AppWrapper",componentId:"a5uzll-0"})(["margin:0 auto;width:90%;max-width:960px;padding:","em 0;","{margin-top:","em;}"],2,"& > *:not(:first-child)",2),ne=r.b.h1.withConfig({displayName:"App__Title",componentId:"a5uzll-1"})(["margin:0;font-size:3em;font-weight:normal;"]);function ae(){return i.a.createElement(te,null,i.a.createElement(ee,null),i.a.createElement(ne,null,"Find a trip"),i.a.createElement(f,null,i.a.createElement(Z,null)))}n.d(t,"a",(function(){return ae}))},37:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n.n(t),r=n(23),o=n.n(r),i=n(32),c=n(28);e.APP_VERSION="1.0.0",e.APP_NAME="Find a trip",o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,null,a.a.createElement(i.a,null))),document.getElementById("root"))}.call(this,n(39))}},[[37,1,2]]]);
//# sourceMappingURL=main.134d06d2.chunk.js.map