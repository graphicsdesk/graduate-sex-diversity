(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){e.exports=a(258)},125:function(e,t){},127:function(e,t){},162:function(e,t){},163:function(e,t){},258:function(e,t,a){"use strict";a.r(t);for(var n=a(0),i=a.n(n),r=a(112),o=a.n(r),s=a(14),l=a(15),c=a(17),m=a(16),u=a(18),h=a(62),d=a(7),p=a.n(d),f=a(11),g=a(64),b=a(117),y=a(65),x=a(4),E={"Mechanical engineering":[[6,83],[2,80],[6,85],[8,82],[8,67],[7,67],[5,57],[8,40],[6,45],[7,58],[11,56],[9,66],[7,78],[10,87],[20,103],[26,136],[31,141],[28,152],[33,159],[41,171],[48,179],[48,203],[57,269]]},k=a(116),v=a.n(k),O=1994,j=[],w=O;w<2017;w++)j.push(w);var N=[.25,.5,.75],M=v.a.scale(["#2A4858","#F8E800"]).mode("lch").colors(2016-O+1),S=function(e){var t=[];return e.forEach(function(e){t.push(e[0]),t.push(e[1])}),Math.max.apply(Math,t)},I=a(43),L={transition:{transitionDuration:"".concat(630,"ms")}},W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={fadeIn:!1},a.timeoutID=null,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.isVisible&&this.setState({fadeIn:!0})}},{key:"componentDidUpdate",value:function(e){var t=this,a=this.props,n=a.isVisible,i=a.queuePosition,r=e.isVisible;!r&&n&&(this.timeoutID=setTimeout(function(){t.setState({fadeIn:!0})},140*i)),r&&!n&&(clearTimeout(this.timeoutID),this.setState({fadeIn:!1}))}},{key:"render",value:function(){var e=this.state.fadeIn,t=this.props,a=t.classes,n=(t.isVisible,t.queuePosition,t.children),r=Object(I.a)(t,["classes","isVisible","queuePosition","children"]),o=i.a.Children.map(n,function(e){return e?i.a.cloneElement(e,r):null});return i.a.createElement("g",{opacity:e?1:0,className:a.transition},o)}}]),t}(n.Component);W.defaultProps={queuePosition:0};var Y=p()(L)(W),A={stroke:"#111",fill:"none",strokeWidth:1.8},P=function(){return i.a.createElement("marker",{id:"full-pointy-pointy",markerWidth:18,markerHeight:18,refX:9,refY:9,orient:"auto",markerUnits:"userSpaceOnUse"},i.a.createElement("path",{d:"M0 0 L".concat(18," ").concat(9," L0 ").concat(18," z"),fill:"#111"}))},V=p()({label:{fontFamily:"Roboto",fontSize:".97rem",fontWeight:700,textAnchor:"middle"}})(function(e){var t=e.classes,a=e.x,n=e.y,r=e.orient,o=e.line1,s=e.line2,l=7,c=0,m=0;"right"===r?(c=55,l=45):"up"===r&&(m=-55);var u=a,h=n,d={x1:u,y1:h,x2:u+c,y2:h+m};return i.a.createElement("g",null,i.a.createElement("line",Object.assign({},d,A,{markerEnd:"url(#".concat("full-pointy-pointy",")")})),i.a.createElement("text",{className:t.label,x:0,y:0,transform:"translate(".concat(u+(c?-l:0),", ").concat(h+(m?l:0),")")},i.a.createElement("tspan",{x:0,dy:m?"1.3rem":0},o),i.a.createElement("tspan",{x:0,dy:"1.3rem"},s)))}),F=function(){return i.a.createElement("marker",{id:"skinny-pointy-pointy",markerWidth:28,markerHeight:28,refX:14,refY:14,orient:"auto",markerUnits:"userSpaceOnUse"},i.a.createElement("path",Object.assign({d:"M1 1 L".concat(14," ").concat(14," L1 ").concat(27)},A)))},D=p()({label:{fontFamily:"Roboto",fontSize:".97rem",fontWeight:700,textAnchor:"middle"}})(function(e){var t=e.classes,a=e.x,n=e.y,r=e.gHeight,o=e.orient,s=e.label,l=Math.min(32,r/10),c=7;o<0&&(c+=8);var m=a+o*r/8,u=n+o*r/8,h={x1:m,y1:u,x2:m+o*l,y2:u+o*l};return i.a.createElement("g",null,i.a.createElement("line",Object.assign({},h,A,{markerEnd:"url(#".concat("skinny-pointy-pointy",")")})),i.a.createElement("text",{className:t.label,transform:"translate(".concat(m-o*c,", ").concat(u-o*c,") rotate(-45)")},s))}),H={transition:{transitionDuration:"".concat(420,"ms")}},C=function(e){var t=function(t){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={fadeIn:!1},t.timeoutID=null,t}return Object(u.a)(a,t),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.isVisible&&this.setState({fadeIn:!0})}},{key:"componentDidUpdate",value:function(e){var t=this,a=this.props,n=a.isVisible,i=a.queuePosition,r=e.isVisible;!r&&n&&(this.timeoutID=setTimeout(function(){t.setState({fadeIn:!0})},140*i)),r&&!n&&(clearTimeout(this.timeoutID),this.setState({fadeIn:!1}))}},{key:"render",value:function(){var t=this.state.fadeIn,a=this.props,n=a.classes,r=(a.isVisible,a.queuePosition,Object(I.a)(a,["classes","isVisible","queuePosition"]));return i.a.createElement("g",{opacity:t?1:0,className:n.transition},i.a.createElement(e,r))}}]),a}(n.Component);return t.defaultProps={queuePosition:0},p()(H)(t)},R=C(p()({backgroundText:{stroke:"#fff",strokeWidth:2,opacity:.8,strokeLinejoin:"round",strokeLinecap:"round",fontFamily:"Roboto",fontSize:"1rem",textAnchor:"middle",alignmentBaseline:"middle"},text:{fontFamily:"Roboto",fontSize:"1rem",color:"#111",textAnchor:"middle",alignmentBaseline:"middle"},pulsingCircle:{animation:"infinite 1s pulse"},"@keyframes pulse":{from:{strokeWidth:0,strokeOpacity:1},to:{strokeWidth:19,strokeOpacity:0}}})(function(e){var t=e.classes,a=e.x,n=e.y,r=e.fill,o=e.isPulsing,s=e.label,l=e.isLabelVisible,c=e.avoidX,m=e.avoidY,u=a,h=n,d=Math.PI/4,p=Math.PI-Math.atan((m-h)/(c-u));return p<-d&&(p+=2*Math.PI),2e3===s?u-=36:-d<=p&&p<d?u-=36:d<=p&&p<3*d?h+=24:3*d<=p&&p<5*d?u+=36:5*d<=p&&p<7*d&&(h-=24),i.a.createElement("g",null,i.a.createElement("circle",{className:o?t.pulsingCircle:void 0,cx:a,cy:n,r:7,fill:r,stroke:o?r:"#fff",strokeWidth:1.5}),l&&i.a.createElement("text",null,i.a.createElement("tspan",{x:u,y:h,className:t.backgroundText},s),i.a.createElement("tspan",{x:u,y:h,className:t.text},s)))})),z=(a(257),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).ref=i.a.createRef(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.ref.current;if(t)if(!e.isVisible&&this.props.isVisible){var a=t.getTotalLength();Object(x.c)(t).attr("opacity",1).attr("stroke-dasharray",a).attr("stroke-dashoffset",a).transition().duration(2e3).attr("stroke-dashoffset",0)}else e.isVisible&&!this.props.isVisible&&Object(x.c)(t).attr("opacity",1).transition().attr("opacity",0)}},{key:"render",value:function(){return i.a.createElement("path",{ref:this.ref,d:this.props.d,fill:"none",stroke:"#333",strokeWidth:1.2,opacity:0})}}]),t}(n.Component)),G=C(p()({strongLine:{stroke:"#555",strokeWidth:1.8},line:{stroke:"#888",strokeWidth:1},label:{fontFamily:"Roboto",fontSize:".85rem"}})(function(e){var t=e.classes,a=e.line,n=e.upperLimit,r=e.proportion,o=e.id;if(r instanceof Array){if(2!==r.length)return console.error("Proportion array in Guide must be of length 2."),null;r=r[0]/(r[0]+r[1])}if(r<0||r>1)return console.error("Proportion in guide must be between 0 and 1."),null;var s=(1-r)/r,l="".concat((100*r).toFixed(r<.1?1:0),"% FEMALE"),c=n,m=n;return r>.5?c=m/s:r<.5?m=c*s:l="EQUAL NUMBER OF MEN AND WOMEN",i.a.createElement("g",null,i.a.createElement("path",{d:a([[0,0],[c,m]]),className:.5===r?t.strongLine:t.line,id:o,fill:"none",strokeDasharray:.5===r?"5 4":"4 4"}),i.a.createElement("text",{className:t.label,transform:"translate(14, 14)",fill:"#111"},i.a.createElement("textPath",{href:"#".concat(o),startOffset:.5===r?"50%":"22%",textAnchor:"middle"},l)))})),T=6,U=9,q={top:40,right:20,bottom:50,left:60},B=function(e){function t(e){var a;Object(s.a)(this,t),a=Object(c.a)(this,Object(m.a)(t).call(this,e));var n=e.dataName;a.data=E[n];var i=.5*window.innerWidth,r=i,o=i-q.left-q.right,l=r-q.top-q.bottom,u=1.02*S(a.data),h=Object(g.a)().domain([0,u]).range([0,o]),d=Object(g.a)().domain([0,u]).range([l,0]),p=Object(y.a)(h).tickSize(-l).tickPadding(U).ticks(T),f=Object(y.b)(d).tickSize(-o).tickPadding(U).ticks(T);return a.state={width:i,height:r,gWidth:o,gHeight:l,upperLimit:u,xScale:h,yScale:d,xAxis:p,yAxis:f,maxYear:a.props.maxYear,previousMaxYear:O,markedYears:[O]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.width,n=t.height,r=t.gWidth,o=t.gHeight,s=t.upperLimit,l=t.xScale,c=t.yScale,m=t.xAxis,u=t.yAxis,h=t.maxYear,d=t.previousMaxYear,p=t.markedYears,g=this.props,y=g.classes,E=g.showLine,k=g.showAxesIndicators,v=g.showGuides,j=Object(b.a)().x(function(e){return l(e[0])}).y(function(e){return c(e[1])});return i.a.createElement("svg",{width:a,height:n},i.a.createElement("defs",null,i.a.createElement(P,null),i.a.createElement(F,null)),i.a.createElement("g",{transform:"translate(".concat(q.left,", ").concat(q.top,")")},i.a.createElement("g",{ref:function(e){return Object(x.c)(e).call(m)},className:y.axis,transform:"translate(0, ".concat(o,")")}),i.a.createElement("text",{className:y.axisLabel,transform:"translate(".concat(r/2,", ").concat(o+45,")")},"Number of women"),i.a.createElement("g",{ref:function(e){return Object(x.c)(e).call(u)},className:y.axis}),i.a.createElement("text",{className:y.axisLabel,transform:"translate(".concat(-45,", ").concat(o/2,") rotate(-90)")},"Number of men"),N.map(function(e){return i.a.createElement(G,{line:j,upperLimit:s,proportion:e,id:e+"-representation-guide",isVisible:v.includes(e)})}),i.a.createElement(Y,{isVisible:v.length>0},i.a.createElement(D,{x:l(.65*s),y:c(.65*s),gHeight:o,orient:-1,label:"MORE MEN"}),i.a.createElement(D,{x:l(.65*s),y:c(.65*s),gHeight:o,orient:1,label:"MORE WOMEN"})),i.a.createElement(Y,{isVisible:k},i.a.createElement(V,{x:l(s/15),y:c(this.data[0][1]+s/6),gHeight:o,orient:"up",line1:"NUMBER",line2:"OF MEN"}),i.a.createElement(V,{x:l(3*s/10),y:c(this.data[0][1]),gHeight:o,orient:"right",line1:"NUMBER",line2:"OF WOMEN"})),i.a.createElement(z,{d:j(this.data),className:y.line,isVisible:E}),this.data.map(function(t,a){var n=Object(f.a)(t,2),r=n[0],o=n[1],s=O+a,m=e.data[a>=e.data.length-1?a-1:a+1];return i.a.createElement(R,{key:r+"-"+o,x:l(r),y:c(o),fill:M[a],isPulsing:s===h,label:s,isLabelVisible:p.includes(s),avoidX:l(m[0]),avoidY:c(m[1]),isVisible:O+a<=h,queuePosition:O+a-(d<O?O:d)})})))}}]),t}(n.Component);B.getDerivedStateFromProps=function(e,t){var a=e.maxYear,n=t.maxYear,i=t.markedYears;return a!==n?(i.includes(a)||i.push(a),{maxYear:a,previousMaxYear:n,markedYears:i}):null},B.defaultProps={showGuides:[]};var X=p()({line:{fill:"none",stroke:"#333",strokeWidth:1.5},axis:{"& path.domain":{display:"none"},"& g:nth-child(2) > text":{display:"none"},"& text":{fontFamily:"Roboto",fontSize:"0.93rem",color:"#999"},"& > g.tick line":{stroke:"#ccc",strokeWidth:.6}},axisLabel:{fontFamily:"Roboto",fontSize:"1rem",fill:"#999",textAnchor:"middle"}})(B),J=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={stepIndex:0},a.onStepEnter=function(e){var t=e.data,n=e.element;a.setState({stepIndex:t}),n.style.color="#222"},a.onStepExit=function(e){e.element.style.color="#aaa"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.steps,n=a[this.state.stepIndex],r=n.maxYear,o=n.showLine,s=n.showAxesIndicators,l=n.showGuides;return i.a.createElement("div",{className:t.Graphic},i.a.createElement("div",{className:t.stepsContainer},i.a.createElement(h.a,{offset:.4,onStepEnter:this.onStepEnter,onStepExit:this.onStepExit},a.map(function(e,a){return i.a.createElement(h.b,{data:a,key:e.text},i.a.createElement("div",{className:t.step},i.a.createElement("p",{className:t.stepText,dangerouslySetInnerHTML:{__html:e.text}})))}))),i.a.createElement("figure",{className:t.stickyFigure},i.a.createElement(X,{dataName:"Mechanical engineering",maxYear:r,showLine:o,showAxesIndicators:s,showGuides:l})))}}]),t}(n.Component),_=p()({Graphic:{margin:"1.5rem 0",display:"flex",justifyContent:"space-evenly"},stickyFigure:{height:"100vh",top:0,margin:0,position:"sticky",display:"flex",justifyContent:"center",alignItems:"center"},stepsContainer:{margin:"50vh 0"},step:{maxWidth:"350px",margin:"0 auto",paddingBottom:"200px",color:"#aaa",transitionDuration:"0.2s"},stepText:{fontSize:"1.06rem",fontFamily:"Merriweather",fontWeight:400,lineHeight:"1.9rem"}})(J),Q=p()({Header:{marginTop:"4rem",marginBottom:"1.3rem",display:"flex",justifyContent:"center"},headline:{margin:"0 0 1.7rem 0",width:"65vw",maxWidth:"825px",display:"inline-block",fontFamily:"Merriweather",fontSize:"2.6rem",lineHeight:1.4,color:"#333"}})(function(e){var t=e.classes,a=e.headline;return i.a.createElement("div",{className:t.Header},i.a.createElement("p",{className:t.headline},a))}),$={headline:"Gender representation among graduate students in science and engineering",graphic:[{maxYear:1994,showAxesIndicators:!0,text:"In 1994, there were six female and eighty three male graduate students in the mechanical engineering department."},{maxYear:1994,showGuides:[.25,.5,.75],text:"6.7% of the department was female."},{maxYear:2e3,showGuides:[.25,.5,.75],text:"In the next couple of years, the department neared gender parity due to a shrinking male population."},{maxYear:2016,showGuides:[.25,.5,.75],text:"However, during the next decade, the male population would grow at a much faster rate than the female population..."},{maxYear:2016,showLine:!0,showGuides:[.5],text:"...driving Mechanical Engineering away from the gender equality line."}]},K=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(Q,{headline:$.headline}),i.a.createElement(_,{steps:$.graphic}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,1,2]]]);
//# sourceMappingURL=main.2aa5090a.chunk.js.map