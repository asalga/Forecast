(function(){var t={7623:function(t){t.exports={celciusToFahrenheit(t){return 1.8*t+32},fahrenheitToCelcius(t){return 5/9*(t-32)}}},2699:function(t){const e={getDayName:t=>{const e=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];return e[new Date(t).getDay()]},formatDate:t=>{let n=t.split("-"),r=parseInt(n[1],10)-1,a=parseInt(n[2],10);const i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${e.getDayName(t)} ${i[r]} ${a}`}};t.exports=e},6194:function(t,e,n){n(1703),t.exports={getDataByCityName(t){let e="b35827e52f2e77d232dfbb7634a24a99";const n=40,r=new Promise(((r,a)=>{const i=new XMLHttpRequest;i.onload=()=>{r(JSON.parse(i.responseText).list)},i.onerror=()=>{console.log("XHR ON ERROR"),a("error")};const o=["http://api.openweathermap.org/data/2.5/forecast?",`q=${t}`,"&units=metric",`&cnt=${n}`,`&appid=${e}`].join("");i.open("GET",o,!0),i.onloadend=()=>{if(404===i.status)throw new Error("404 - ",o)},i.send()}));return r}}},9377:function(t,e,n){"use strict";var r=n(9242),a=n(1373),i=n(3396),o=n(7139);const s={class:"max-w-3xl mx-auto"},u={class:"text-3xl font-bold underline text-center"},c={class:"mb-4"},l=["placeholder"],p={class:"container"},d={class:"mx-auto grid gap-4 md:grid-cols-5 sm:grid-cols-2 grid-cols-1 w-1/2 md:w-full"};function m(t,e,n,a,m,h){const f=(0,i.up)("temperature-unit"),g=(0,i.up)("WeatherCard");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("h1",u,(0,o.zw)(h.formatCityName(m.cityHeader))+" Forecast ",1),(0,i.Wm)(f,{ref:"temperatureUnit"},null,512),(0,i._)("form",{onSubmit:e[2]||(e[2]=(0,r.iM)(((...t)=>h.onSubmit&&h.onSubmit(...t)),["prevent"])),class:"bg-white rounded px-8 pt-6 pb-8 mb-4"},[(0,i._)("div",c,[(0,i.wy)((0,i._)("input",{ref:"city",class:(0,o.C_)(["shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",{error:!m.isValid}]),id:"city",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>m.currCity=t),placeholder:m.defaultCity},null,10,l),[[r.nr,m.currCity]]),(0,i._)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:e[1]||(e[1]=(...t)=>h.updateData&&h.updateData(...t))}," Go ")])],32),(0,i._)("div",p,[(0,i._)("ul",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.weatherData,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t},[(0,i.Wm)(g,{tempData:t,unit:this.$refs.temperatureUnit.getUnit()},null,8,["tempData","unit"])])))),128))])])])}var h=n(4806),f=n.n(h);const g={class:"weather-card rounded-lg text-center border-gray-300 mx-auto"},y={class:"day"},w={class:"feels-like"},v=["src"],b={class:"min-max"};function x(t,e,n,r,a,s){return(0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("h1",y,(0,o.zw)(s.formatDate(n.tempData.dt_txt)),1),(0,i._)("h1",null,(0,o.zw)(n.tempData.weather[0].description),1),(0,i._)("h2",w," feels like: "+(0,o.zw)(this.feelsLike)+"°"+(0,o.zw)(this.tempUnit),1),(0,i._)("img",{src:this.getIcon(n.tempData.weather[0].icon),class:"icon mx-auto"},null,8,v),(0,i._)("div",b,(0,o.zw)(this.tempMin)+"°"+(0,o.zw)(this.tempUnit)+" / "+(0,o.zw)(this.tempMax)+"°"+(0,o.zw)(this.tempUnit),1)])}var D=n(2699),_=n(7623),U={name:"WeatherCard",created(){this.updateView(),this.emitter.on("change-temp",(t=>{this.tempUnit=t.data,this.updateView()}))},data:function(){return{tempUnit:this.unit,feelsLike:0,tempMin:0,tempMax:0}},methods:{updateView(){this.feelsLike=this.toUserPrefTemp(this.tempData.main.feels_like),this.tempMin=this.toUserPrefTemp(this.tempData.main.daily_min),this.tempMax=this.toUserPrefTemp(this.tempData.main.daily_max)},getIcon:t=>`http://openweathermap.org/img/wn/${t}@2x.png`,toUserPrefTemp(t){let e=t;return"F"===this.tempUnit&&(e=(0,_.celciusToFahrenheit)(e)),Math.round(e)},formatDate:D.formatDate},props:{tempData:Object,unit:String}},C=n(89);const M=(0,C.Z)(U,[["render",x],["__scopeId","data-v-1fb64652"]]);var T=M;const O=(0,i.Uk)(" unit: "),k=(0,i.Uk)(" | ");function F(t,e,n,r,a,s){return(0,i.wg)(),(0,i.iD)("div",{class:"unit",onClick:e[0]||(e[0]=t=>s.changeTempUnit())},[O,(0,i._)("span",{class:(0,o.C_)({selected:"C"===a.currUnit})},"°C",2),k,(0,i._)("span",{class:(0,o.C_)({selected:"F"===a.currUnit})},"°F",2)])}var $={name:"TemperatureUnit",methods:{getUnit(){return this.currUnit},changeTempUnit(){this.currUnit="C"===this.currUnit?"F":"C",this.emitter.emit("change-temp",{data:this.currUnit})}},data(){return{currUnit:"C"}}};const j=(0,C.Z)($,[["render",F],["__scopeId","data-v-4d2aa22c"]]);var z=j,N=n(6194),S=n.n(N);const P="Toronto";var V={name:"App",components:{WeatherCard:T,TemperatureUnit:z},mounted(){this.updateData()},methods:{formatCityName(t){return t[0].toUpperCase()+t.substring(1)},decorateDailyMinMaxTemps(t){let e=f().groupBy(t,(t=>t.dt_txt.split(" ")[0])),n=Object.values(e),r=n.map((t=>{let e=f().min(t.map((t=>t.main.temp_min))),n=f().max(t.map((t=>t.main.temp_max)));return{dailyMin:e,dailyMax:n}})),a=t.filter(((t,e)=>e%8===0));return a.forEach(((t,e)=>{t.main.daily_min=r[e].dailyMin,t.main.daily_max=r[e].dailyMax})),a},onSubmit(){this.updateData()},updateData(){S().getDataByCityName(this.$refs.city.value).then((t=>{this.weatherData=this.decorateDailyMinMaxTemps(t),this.currCity=this.cityHeader=this.$refs.city.value,this.isValid=!0})).catch((()=>{this.isValid=!1}))}},data(){return{defaultCity:P,currCity:P,cityHeader:P,isValid:!0,weatherData:[]}}};const H=(0,C.Z)(V,[["render",m]]);var I=H;const W=(0,a.Z)(),E=(0,r.ri)(I);E.config.globalProperties.emitter=W,E.mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var o=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],i=t[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,i<o&&(o=i));if(s){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,o=r[0],s=r[1],u=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var l=u(n)}for(e&&e(r);c<o.length;c++)i=o[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkforecast"]=self["webpackChunkforecast"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9377)}));r=n.O(r)})();
//# sourceMappingURL=app.82614884.js.map