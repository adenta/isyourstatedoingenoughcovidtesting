(this["webpackJsonpcovid-testing"]=this["webpackJsonpcovid-testing"]||[]).push([[0],{69:function(e,t,a){e.exports=a(86)},74:function(e,t,a){},75:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a.n(s),n=a(29),d=a.n(n),l=(a(74),a(75),a(3)),i=a(40),r=[{postalCode:"AL",stateName:"Alabama",testsNeeded:8817},{postalCode:"AK",stateName:"Alaska",testsNeeded:85},{postalCode:"AZ",stateName:"Arizona",testsNeeded:10743},{postalCode:"AR",stateName:"Arkansas",testsNeeded:2825},{postalCode:"CA",stateName:"California",testsNeeded:42524},{postalCode:"CO",stateName:"Colorado",testsNeeded:22942},{postalCode:"CT",stateName:"Conneticut",testsNeeded:29288},{postalCode:"DE",stateName:"Delaware",testsNeeded:5887},{postalCode:"DC",stateName:"District of Colombia",testsNeeded:5857},{postalCode:"FL",stateName:"Florida",testsNeeded:23937},{postalCode:"GA",stateName:"Georgia",testsNeeded:25979},{postalCode:"HI",stateName:"Hawaii",testsNeeded:164},{postalCode:"ID",stateName:"Idaho",testsNeeded:1032},{postalCode:"IL",stateName:"Illinois",testsNeeded:64167},{postalCode:"IN",stateName:"Indiana",testsNeeded:28829},{postalCode:"IA",stateName:"Iowa",testsNeeded:10266},{postalCode:"KS",stateName:"Kansas",testsNeeded:2812},{postalCode:"KY",stateName:"Kentucky",testsNeeded:4642},{postalCode:"LA",stateName:"Louisiana",testsNeeded:21988},{postalCode:"ME",stateName:"Maine",testsNeeded:1805},{postalCode:"MD",stateName:"Maryland",testsNeeded:27925},{postalCode:"MA",stateName:"Massachusetts",testsNeeded:71748},{postalCode:"MI",stateName:"Michigan",testsNeeded:58081},{postalCode:"MN",stateName:"Minnesota",testsNeeded:13853},{postalCode:"MS",stateName:"Mississippi",testsNeeded:7770},{postalCode:"MO",stateName:"Missouri",testsNeeded:9786},{postalCode:"MT",stateName:"Montana",testsNeeded:124},{postalCode:"NE",stateName:"Nebraska",testsNeeded:2698},{postalCode:"NV",stateName:"Nevada",testsNeeded:5307},{postalCode:"NH",stateName:"New Hampshire",testsNeeded:2632},{postalCode:"NJ",stateName:"New Jersey",testsNeeded:98378},{postalCode:"NM",stateName:"New Mexico",testsNeeded:5193},{postalCode:"NY",stateName:"New York",testsNeeded:112802},{postalCode:"NC",stateName:"North Carolina",testsNeeded:10289},{postalCode:"ND",stateName:"North Dakota",testsNeeded:913},{postalCode:"OH",stateName:"Ohio",testsNeeded:26103},{postalCode:"OK",stateName:"Oklahoma",testsNeeded:5408},{postalCode:"OR",stateName:"Oregon",testsNeeded:2139},{postalCode:"PA",stateName:"Pennsylvania",testsNeeded:62532},{postalCode:"RI",stateName:"Rhode Island",testsNeeded:6723},{postalCode:"SC",stateName:"South Carolina",testsNeeded:8846},{postalCode:"SD",stateName:"South Dakota",testsNeeded:927},{postalCode:"TN",stateName:"Tennessee",testsNeeded:3266},{postalCode:"TX",stateName:"Texas",testsNeeded:27282},{postalCode:"UT",stateName:"Utah",testsNeeded:2022},{postalCode:"VT",stateName:"Vermont",testsNeeded:897},{postalCode:"VA",stateName:"Virginia",testsNeeded:16664},{postalCode:"WA",stateName:"Washington",testsNeeded:6656},{postalCode:"WV",stateName:"West Virginia",testsNeeded:1857},{postalCode:"WI",stateName:"Wisconsin",testsNeeded:3974},{postalCode:"WY",stateName:"Wyoming",testsNeeded:67}],c=a(18),m=a(19),N=a(13),u=a(100),p=a(22),h=function(e){var t=e.isOpen,a=e.setIsOpen;return o.a.createElement(u.a,{onClose:function(){return a(!1)},isOpen:t},o.a.createElement(p.f,null,"How this works"),o.a.createElement(p.e,null,"This webpage is based on"," ",o.a.createElement(m.a,{href:"https://www.npr.org/sections/health-shots/2020/05/07/851610771/u-s-coronavirus-testing-still-falls-short-hows-your-state-doing"},"this")," ","NPR article. Tests per day information is coming from"," ",o.a.createElement(m.a,{href:"https://docs.google.com/spreadsheets/d/1KrhXO7aLH5v1hqJltbxSSIlrp4u2F_TqhQJu9w7z0ow/edit#gid=754849875"},"Harvard"),", and the amount of tests being performed each day is coming from"," ",o.a.createElement(m.a,{href:"https://covidtracking.com/"},"this")," API."," ",o.a.createElement(m.a,{href:"https://linkedin.com/in/adenta"},"I")," am not a medical professional, just a citizen who believes we should focus on how much testing is being done state-by-state, when talking about reopening the country."))},C=a(26),g=a(98),f=a(4),E=function(e){var t=e.selected,a=Object(l.f)(),s=function(){return o.a.createElement(g.a,{placeholder:"State",overrides:{Root:{style:{width:"auto",minWidth:"125px"}}},clearable:!1,searchable:!1,options:r,value:t,onChange:function(e){var t=e.option;t&&a.push("/".concat(t.postalCode))},labelKey:"stateName",valueKey:"postalCode"})};return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement(f.a,{display:["none","none","flex"],alignItems:"flex-start",justifyContent:"center",overrides:{Block:{style:function(e){var t,a=e.$theme;return t={},Object(C.a)(t,a.mediaQuery.large,{fontSize:a.sizing.scale1200}),Object(C.a)(t,a.mediaQuery.medium,{fontSize:a.sizing.scale800}),t}}}},o.a.createElement("span",null,"Is"),"\xa0",o.a.createElement(s,null),"\xa0",o.a.createElement("span",null,"doing enough COVID testing?"))),o.a.createElement(f.a,{display:["block","block","none"]},o.a.createElement(c.b,null,"Is your state doing enough covid testing?"),o.a.createElement(s,null)))},v=new Date(Date.now()-6912e5),w=function(e,t){return e+t},b=function(){var e=Object(N.c)(),t=Object(i.a)(e,1)[0],a=Object(l.g)().postalCode,n=Object(s.useState)([]),d=Object(i.a)(n,2),u=d[0],p=d[1],C=Object(s.useState)(!1),g=Object(i.a)(C,2),f=g[0],b=g[1],y=u.filter((function(e){var t=e.date.toString(),s="".concat(t.substring(0,4),"/").concat(t.substring(4,6),"/").concat(t.substring(6,8)),o=new Date(s);return e.state===a&&o>v})),O=Math.round(y.map((function(e,t){return t===y.length-1?0:e.totalTestResults-y[t+1].totalTestResults})).reduce(w,0)/y.length),I=r.filter((function(e){return e.postalCode===a}));return Object(s.useEffect)((function(){fetch("https://covidtracking.com/api/v1/states/daily.json").then((function(e){return e.json()})).then((function(e){return p(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{isOpen:f,setIsOpen:b}),o.a.createElement(E,{selected:I}),o.a.createElement("div",{className:t({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",height:"100%"})},o.a.createElement("div",{className:t({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"})},o.a.createElement(c.c,null,o.a.createElement("div",{className:t({fontSize:"40vmin",height:"100%",width:"100%",paddingBottom:"10vw",paddingTop:"10vw"})},O>I[0].testsNeeded?"YES":"NO")),o.a.createElement("div",{className:t({display:"flex",flexDirection:"column",alignItems:"flex-end"})},o.a.createElement(c.c,null,"Daily tests needed: ",o.a.createElement("b",null,I[0].testsNeeded)),o.a.createElement(c.c,null,"Daily tests (avg): ",o.a.createElement("b",null,O)))),o.a.createElement(m.a,null,o.a.createElement("span",{onClick:function(){return b(!0)},className:t({cursor:"pointer"})},"How this works."))))};var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f.a,{height:"100%",width:["100%","90%","80%"]},o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/"},o.a.createElement(E,{selected:[]})),o.a.createElement(l.a,{path:"/:postalCode"},o.a.createElement(b,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(62),I=a(97),k=a(99),M=a(23),D=new O.a;d.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N.a,{value:D},o.a.createElement(I.a,{theme:k.a},o.a.createElement(M.a,{basename:"/isyourstatedoingenoughcovidtesting"},o.a.createElement(y,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.61d8875b.chunk.js.map