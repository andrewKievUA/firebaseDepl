(this["webpackJsonpalarm-stonelight"]=this["webpackJsonpalarm-stonelight"]||[]).push([[0],{227:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(7),c=a(0),s=a(37),i=a.n(s),l=a(1),o=a(2),b=a(5),j=a(4),d=a(24),u=a(229),h=a(230),m=a(92),O=a(3),g=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).props=e,r}return Object(o.a)(a,[{key:"render",value:function(){var e={labels:["\u041e\u043f\u0443\u0441\u043a\u0430\u043d\u0438\u044f \u0432\u0447\u0435\u0440\u0430","\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0432\u0447\u0435\u0440\u0430","\u0421\u043a\u0432\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u0432\u0447\u0435\u0440\u0430","\u041e\u043f\u0443\u0441\u043a\u0430\u043d\u0438\u044f \u043f\u043e\u0437\u0430\u0432\u0447\u0435\u0440\u0430","\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u043f\u043e\u0437\u0430\u0432\u0447\u0435\u0440\u0430","\u0421\u043a\u0432\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u043f\u043e\u0437\u0430\u0432\u0447\u0435\u0440\u0430"],datasets:[{label:"# \u0410\u0432\u0430\u0440\u0438\u0439",data:this.props.data,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("h1",{className:"title",children:"\u0410\u0432\u0430\u0440\u0438\u0438 \u0421\u0431\u043e\u0440\u0449\u0438\u043a\u0430"}),Object(O.jsx)("div",{className:"links"})]}),Object(O.jsx)(m.a,{data:e,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})}}]),a}(c.Component),p=Object(d.b)((function(e){return{data:e[1]}}))(g),f=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).props=e,r}return Object(o.a)(a,[{key:"showThis",value:function(){}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(u.a,{children:["additionalFeature",Object(O.jsx)(p,{}),Object(O.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",size:"222px",responsive:"true",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"First Name"}),Object(O.jsx)("th",{children:"Last Name"})]})}),Object(O.jsx)("tbody",{children:this.props.data[0][2].map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.id}),Object(O.jsx)("td",{children:e.comment}),Object(O.jsx)("td",{children:e.time.replace("T"," ").replace("Z"," ").slice(0,19)})]},t)}))})]})]})})}}]),a}(c.Component),x=Object(d.b)((function(e){return{data:e}}),(function(e){return{calculateDailyTotalAlarms:function(){return e({type:"calculateDailyTotalAlarms"})},getDatastore:function(){return e({type:"getDatastore"})}}}))(f),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,231)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))},y=a(94),k=a(91),D=a.n(k),F=a(93);D.a.get("https://alarmstonelight-default-rtdb.europe-west1.firebasedatabase.app/arrays.json").then((function(e){var t=Object(y.a)((function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.values(e.data),a=arguments.length>1?arguments[1]:void 0,c=0,s=0,i=0,l=0,o=0,b=0,j=(new Date).getDate()-1,d=0;d<t[0][2].length;d++)t[0][2][d].time.slice(8,10)==j&&"\u0410\u0432\u0430\u0440\u0438\u044f \u041e\u043f\u0443\u0441\u043a\u0430\u043d\u0438\u044f"===t[0][2][d].comment&&(c+=1),t[0][2][d].time.slice(8,10)==j&&"\u0410\u0432\u0430\u0440\u0438\u044f \u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f "===t[0][2][d].comment&&s++,t[0][2][d].time.slice(8,10)==j&&"\u0410\u0432\u0430\u0440\u0438\u044f \u041e\u043f\u0443\u0441\u043a\u0430\u043d\u0438\u044f \u0421\u043a\u0432\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d"===t[0][2][d].comment&&i++;for(var u=(new Date).getDate()-2,h=0;h<t[0][2].length;h++)t[0][2][h].time.slice(8,10)==u&&"\u0410\u0432\u0430\u0440\u0438\u044f \u041e\u043f\u0443\u0441\u043a\u0430\u043d\u0438\u044f"===t[0][2][h].comment&&(l+=1),t[0][2][h].time.slice(8,10)==u&&"\u0410\u0432\u0430\u0440\u0438\u044f \u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f "===t[0][2][h].comment&&o++,t[0][2][h].time.slice(8,10)==u&&"\u0410\u0432\u0430\u0440\u0438\u044f \u041e\u043f\u0443\u0441\u043a\u0430\u043d\u0438\u044f \u0421\u043a\u0432\u0438\u0442\u0438\u0440\u043e\u0432\u0430\u043d"===t[0][2][h].comment&&b++;switch(a.type){case"calculateDailyTotalAlarms":return Object(n.a)(Object(n.a)({},t),{},{state:t.calcdata=33});default:return[].concat(Object(r.a)(t),[t.opyskYes=[c,s,i,l,o,b]])}return t}));i.a.render(Object(O.jsxs)(F.a,{children:[Object(O.jsx)(d.a,{store:t,children:Object(O.jsx)(x,{})})," "]}),document.getElementById("root")),1})),v()}},[[227,1,2]]]);
//# sourceMappingURL=main.6d2e49ea.chunk.js.map