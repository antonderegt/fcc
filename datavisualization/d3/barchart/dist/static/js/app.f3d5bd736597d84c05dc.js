webpackJsonp([0,2],[,function(t,e,a){a(7);var n=a(0)(a(4),a(10),null,null);t.exports=n.exports},,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(9),r=a.n(n);e.default={name:"app",components:{Hello:r.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(6);a.n(n);e.default={name:"hello",mounted:function(){this.$http.get("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json").then(function(t){var e=t.data.data,a=1e3,r=500,o=50,i=n.scaleLinear().domain([n.min(e,function(t){return t[0].split("-")[0]}),n.max(e,function(t){return t[0].split("-")[0]})]).range([o,a-o]),s=n.scaleLinear().domain([0,n.max(e,function(t){return t[1]})]).range([o,r-o]),c=n.scaleLinear().domain([0,n.max(e,function(t){return t[1]})]).range([r-o,o]),l=n.select("body").append("svg").attr("width",a).attr("height",r);l.append("text").attr("x",500).attr("y",100).attr("text-anchor","middle").attr("class","title").text("Gross Domestic Product"),l.append("text").attr("x",500).attr("y",r-18).attr("text-anchor","middle").attr("class","desc").text(t.data.description);var u=n.format("$,.2f"),p=n.timeFormat("%Y - %B"),d=n.select("body").append("div").attr("class","tooltip");l.selectAll("rect").data(e).enter().append("rect").attr("x",function(t){var e=t[0].split("-")[0];switch(e=parseInt(e),t[0].split("-")[1]){case"01":break;case"04":e+=.25;break;case"07":e+=.5;break;case"10":e+=.75}return i(e)}).attr("width",4).attr("y",function(t){return r-s(t[1])}).attr("height",function(t){return s(t[1])-o}).attr("class","bar").on("mouseover",function(t){d.style("visibility","visible"),d.html("<b>"+u(t[1])+" Billion</b><br /> "+p(new Date(t[0])))}).on("mousemove",function(t){d.style("top",n.event.pageY-50+"px").style("left",n.event.pageX+5+"px")}).on("mouseout",function(){return d.style("visibility","hidden")});var f=n.axisBottom(i).tickFormat(n.format(""));l.append("g").attr("transform","translate(0,"+(r-o)+")").call(f);var m=n.axisLeft(c);l.append("g").attr("transform","translate("+o+", 0)").call(m),l.append("text").attr("text-anchor","end").attr("y",o).attr("x",-o).attr("dy","1em").attr("transform","rotate(-90)").text("Gross Domestic Product, USA")})}}},,function(t,e){},function(t,e){},function(t,e,a){a(8);var n=a(0)(a(5),a(11),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("hello")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},,,function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),r=a(1),o=a.n(r),i=a(2),s=a.n(i);n.a.use(s.a),n.a.config.productionTip=!1,new n.a({el:"#app",template:"<App/>",components:{App:o.a}})}],[15]);
//# sourceMappingURL=app.f3d5bd736597d84c05dc.js.map