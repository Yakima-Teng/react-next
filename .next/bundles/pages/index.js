
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([2],{203:function(e,t,n){e.exports=n(204)},204:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),i=l(a),u=n(2),r=l(u),o=n(3),d=l(o),s=n(8),c=l(s),f=n(9),_=l(f),m=n(0),h=l(m),y=n(76),g=n(114),p=l(g),v=n(115),E=l(v),b=n(238),M=l(b),A=function(e){function t(){return(0,r.default)(this,t),(0,c.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return h.default.createElement(E.default,{title:"图书商城"},h.default.createElement(M.default,null))}}]),t}(h.default.Component),N=function(e){return{}};t.default=(0,p.default)(y.initStore,null,N)(A)},238:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),i=l(a),u=n(2),r=l(u),o=n(3),d=l(o),s=n(8),c=l(s),f=n(9),_=l(f),m=n(0),h=l(m),y=n(79),g=n(35),p=n(239),v=l(p),E=n(252),b=l(E),M=n(256),A=l(M),N=n(76),k=function(e){function t(e){return(0,r.default)(this,t),(0,c.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e))}return(0,_.default)(t,e),(0,d.default)(t,[{key:"componentWillMount",value:function(){var e=this.props.navMain;0==(void 0===e?[]:e).length&&this.props.getNav()}},{key:"render",value:function(){var e=this,t={background:"#00bb9c"},n=this.props.navMain,l=void 0===n?[]:n;return h.default.createElement("div",null,h.default.createElement(v.default,{title:"react-next服务端渲染",linkTo:"/search",bgColor:t,imgUrl:"/static/home/search.svg"}),h.default.createElement("div",{className:"style_div"},h.default.createElement("ul",{className:"style_ul"},l.map(function(t,n){return h.default.createElement(b.default,{key:n,title:t.text,index:n,handleClick:function(){return e.handleClick()}})}))),h.default.createElement(A.default,null))}}]),t}(h.default.Component),x=function(e){return{navMain:e.navMain}},w=function(e){return{getNav:(0,g.bindActionCreators)(N.getNav,e)}};t.default=(0,y.connect)(x,w)(k)},239:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=l(a),u=n(117),r=l(u),o=n(26),d=l(o),s=n(10),c=(l(s),n(251)),f=l(c),_=function(e){var t=e.title,n=e.imgUrl,l=e.linkTo,a=e.bgColor,u=e.handleClick;return i.default.createElement("header",{className:"header",style:a},i.default.createElement(d.default,null,i.default.createElement("style",{dangerouslySetInnerHTML:{__html:f.default}})),t,i.default.createElement(r.default,{href:l},i.default.createElement("a",{className:"a_link",onClick:function(){return u("left")}},i.default.createElement("img",{src:n||!1,className:"a_img"}))))};t.default=_},251:function(e,t){!function(){"use strict";e.exports=".header {\n  position: relative;\n  width: 100%;\n  color: #fff;\n  height: 3.333rem;\n  line-height: 3.333rem;\n  text-align: center;\n  font-size: 1.4rem; }\n  .header .a_link {\n    position: absolute;\n    display: block;\n    top: 0;\n    color: #6c6c6c;\n    right: 1.25rem;\n    width: 3.1667rem;\n    height: 3.333rem; }\n  .header .a_link .a_img {\n      width: 100%;\n      margin-bottom: 3px;\n      vertical-align: middle;\n      outline: none;\n      height: auto; }\n"}()},252:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,i=n(253),u=l(i),r=n(0),o=l(r),d=n(10),s=(l(d),n(26)),c=l(s),f=n(254),_=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),m=n(255),h=l(m),y=(a={},(0,u.default)(a,_.NAV_IMAGE_1,"/static/home/nsyjr.png"),(0,u.default)(a,_.NAV_IMAGE_2,"/static/home/nlswx.png"),(0,u.default)(a,_.NAV_IMAGE_3,"/static/home/nflwx.png"),(0,u.default)(a,_.NAV_IMAGE_4,"/static/home/nyysj.png"),(0,u.default)(a,_.NAV_IMAGE_5,"/static/home/nxxjs.png"),(0,u.default)(a,_.NAV_IMAGE_6,"/static/home/nyssj.png"),(0,u.default)(a,_.NAV_IMAGE_7,"/static/home/nyyjs.png"),(0,u.default)(a,_.NAV_IMAGE_8,"/static/home/nydjk.png"),(0,u.default)(a,_.NAV_IMAGE_9,"/static/home/nother.png"),a),g=function(e){var t=e.title,n=(e.img,e.index),l=e.handleClick;return[o.default.createElement(c.default,{key:"NavHead"},o.default.createElement("style",{dangerouslySetInnerHTML:{__html:h.default}})),o.default.createElement("li",{className:"style_li",onClick:l,key:"NavLi"},o.default.createElement("img",{src:y[n+1],className:"style_img"}),o.default.createElement("span",{className:"style_span"},t))]};t.default=g},253:function(e,t,n){"use strict";t.__esModule=!0;var l=n(65),a=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=function(e,t,n){return t in e?(0,a.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.NAV_IMAGE_1=1,t.NAV_IMAGE_2=2,t.NAV_IMAGE_3=3,t.NAV_IMAGE_4=4,t.NAV_IMAGE_5=5,t.NAV_IMAGE_6=6,t.NAV_IMAGE_7=7,t.NAV_IMAGE_8=8,t.NAV_IMAGE_9=9},255:function(e,t){!function(){"use strict";e.exports=".style_div {\n  width: 100%;\n  background: #fff;\n  padding: 0.25rem 0;\n  overflow: hidden; }\n  .style_div .style_ul {\n    width: 90%;\n    margin: 0 auto;\n    overflow: hidden;\n    padding: 0; }\n  .style_div .style_ul .style_li {\n      width: 33%;\n      float: left;\n      list-style: none;\n      text-align: center;\n      padding-bottom: 0.833rem;\n      padding-top: 0.41667rem; }\n  .style_div .style_ul .style_li .style_img {\n        width: 35%;\n        height: auto;\n        margin: 0 auto;\n        display: block;\n        margin-bottom: 3px; }\n  .style_div .style_ul .style_li .style_span {\n        color: #3c3c3c;\n        font-size: 1.2rem; }\n"}()},256:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=l(a),u=n(26),r=l(u),o=n(257),d=l(o),s=function(){return i.default.createElement("div",{className:"style_main"},i.default.createElement(r.default,null,i.default.createElement("style",{dangerouslySetInnerHTML:{__html:d.default}})),i.default.createElement("div",{className:"style_div"},i.default.createElement("div",{className:"style_left"},i.default.createElement("img",{src:"/static/home/zht1.jpg",className:"style_img"})),i.default.createElement("div",{className:"style_right"},i.default.createElement("img",{src:"/static/home/zht2.jpg",className:"style_img"}))))};t.default=s},257:function(e,t){!function(){"use strict";e.exports=".style_main {\n  width: 100%;\n  background: #fff;\n  padding: 0.41667rem 0;\n  overflow: hidden; }\n  .style_main .style_div {\n    width: 90%;\n    margin: 0 auto; }\n  .style_main .style_div .style_left {\n      width: 50%;\n      height: auto;\n      display: inline-block;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      float: left;\n      text-align: left; }\n  .style_main .style_div .style_right {\n      width: 50%;\n      height: auto;\n      display: inline-block;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      float: left;\n      text-align: right; }\n  .style_main .style_div .style_img {\n      width: 95%;\n      height: auto;\n      border: 1px solid #e8e8e8;\n      vertical-align: middle;\n      outline: none; }\n"}()}},[203]);
            return { page: comp.default }
          })
        