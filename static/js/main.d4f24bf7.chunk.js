(this.webpackJsonpyalantis_test=this.webpackJsonpyalantis_test||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(1),s=r.n(n),c=r(6),o=r.n(c),i=(r(14),r(7)),l=r(8),d=r(4);function u(e){return Object(a.jsxs)("span",{children:[e.data.lastName,"\xa0",e.data.firstName]})}var m=function(e){var t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];return Object(d.a)(e.data,t,"current.lastName.charAt(0) === compareElement","a.lastName.localeCompare(b.lastName)").map((function(r,n){return Object(a.jsxs)("div",{className:"list_submassive",children:[Object(a.jsxs)("h3",{className:"litera_header",children:[" ",t[n]," "]}),0===r.length?"-----":r.map((function(t,r){return Object(a.jsxs)("li",{id:t.id,children:[Object(a.jsx)(u,{data:t}),Object(a.jsx)("input",{type:"checkbox",defaultChecked:t.checked,onChange:e.handler})]},r)}))]},n)}))};var h=function(e){var t=["January","February","March","April","May","June","July","August","September","October","November","December"],r=[0,1,2,3,4,5,6,7,8,9,10,11],n=function(){var t=[];return(e.data?e.data:[]).forEach((function(e){e.checked&&(e.mob=new Date(e.dob).getMonth(),t.push(e))})),function(e){var t="new Date (current.dob).getMonth() === compareElement",a="new Date (a.dob).getDate() > new Date (b.dob).getDate() ? 1 : -1";return Object(d.a)(e,r,t,a)}(t)};return 0===n().length?Object(a.jsx)("div",{className:"selected_submassive",children:"No selected employees"}):n().map((function(e,r){return 0===e.length?null:Object(a.jsxs)("div",{className:"selected_submassive",children:[Object(a.jsxs)("h3",{className:"month_header",children:[" ",t[r]," "]}),e.map((function(e,t){return Object(a.jsxs)("li",{id:e.id,children:[Object(a.jsx)(u,{data:e}),"  -  ",(r=e.dob,new Date(r).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}))]},t);var r}))]},r)}))};var b=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),r=t[0],s=t[1];return Object(n.useEffect)((function(){if(null===sessionStorage.getItem("userdata"))fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){return e.json()})).then((function(e){sessionStorage.setItem("userdata",JSON.stringify(e)),s(e)})).catch((function(e){return console.error(e)}));else{var e=sessionStorage.getItem("userdata");s(JSON.parse(e))}}),[]),Object(a.jsxs)("div",{className:"page_parent_component",children:[Object(a.jsxs)("div",{className:"employees_list_component",children:[Object(a.jsx)("h2",{children:"Employees "}),Object(a.jsx)("ul",{className:"employees_ul",children:r?Object(a.jsx)(m,{data:r,handler:function(e){for(var t=[],a=0;a<r.length;a++)r[a].id===e.target.parentElement.id&&(t=r[a]);t.checked=e.target.checked,s(Object(i.a)(r)),sessionStorage.setItem("userdata",JSON.stringify(r))}}):"loading..."})]}),Object(a.jsxs)("div",{className:"selected_employees_component",children:[Object(a.jsx)("h2",{className:"selected_employees_header",children:"Employees birthday"}),Object(a.jsx)("ul",{className:"selected_list",children:Object(a.jsx)(h,{data:r})})]})]})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root"))},4:function(module,__webpack_exports__,__webpack_require__){"use strict";function customComparator(dataArray,arrayToCompare,filterCondition,sorterCondition){function filter(){if(0===dataArray.length||0===arrayToCompare||!Array.isArray(dataArray)||!Array.isArray(arrayToCompare)||"string"!==typeof filterCondition||"string"!==typeof sorterCondition||""===filterCondition||""===sorterCondition)return[];var filtered=[];return arrayToCompare.forEach((function(compareElement){filtered.push(dataArray.filter((function(current){return eval(filterCondition)})))})),filtered}function sorted(){var sorted=filter();return sorted.forEach((function(current){current.sort((function(a,b){return eval(sorterCondition)}))})),sorted}return sorted()}__webpack_require__.d(__webpack_exports__,"a",(function(){return customComparator}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d4f24bf7.chunk.js.map