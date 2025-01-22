"use strict";(self.webpackChunkstatemesh_docs=self.webpackChunkstatemesh_docs||[]).push([[1574],{1574:(e,t,n)=>{n.d(t,{A:()=>U});var r=n(6540),i=n(4164),o=n(5659);function s(e){try{return e.matches(":focus-visible")}catch(t){0}return!1}var u=n(1848),l=n(5669),a=n(690);const c="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;const p=function(e){const t=r.useRef(e);return c((()=>{t.current=e})),r.useRef(((...e)=>(0,t.current)(...e))).current},d={};function h(e,t){const n=r.useRef(d);return n.current===d&&(n.current=e(t)),n}class f{static create(){return new f}static use(){const e=h(f.create).current,[t,n]=r.useState(!1);return e.shouldMount=t,e.setShouldMount=n,r.useEffect(e.mountEffect,[t]),e}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=function(){let e,t;const n=new Promise(((n,r)=>{e=n,t=r}));return n.resolve=e,n.reject=t,n}(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&null!==this.ref.current&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then((()=>this.ref.current?.start(...e)))}stop(...e){this.mount().then((()=>this.ref.current?.stop(...e)))}pulsate(...e){this.mount().then((()=>this.ref.current?.pulsate(...e)))}}var m=n(8587),b=n(8168);var v=n(2892);const g=r.createContext(null);function y(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function M(e,t,n){return null!=n[t]?n[t]:e.props[t]}function x(e,t,n){var i=y(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var s in e)s in t?o.length&&(i[s]=o,o=[]):o.push(s);var u={};for(var l in t){if(i[l])for(r=0;r<i[l].length;r++){var a=i[l][r];u[i[l][r]]=n(a)}u[l]=n(l)}for(r=0;r<o.length;r++)u[o[r]]=n(o[r]);return u}(t,i);return Object.keys(o).forEach((function(s){var u=o[s];if((0,r.isValidElement)(u)){var l=s in t,a=s in i,c=t[s],p=(0,r.isValidElement)(c)&&!c.props.in;!a||l&&!p?a||!l||p?a&&l&&(0,r.isValidElement)(c)&&(o[s]=(0,r.cloneElement)(u,{onExited:n.bind(null,u),in:c.props.in,exit:M(u,"exit",e),enter:M(u,"enter",e)})):o[s]=(0,r.cloneElement)(u,{in:!1}):o[s]=(0,r.cloneElement)(u,{onExited:n.bind(null,u),in:!0,exit:M(u,"exit",e),enter:M(u,"enter",e)})}})),o}var E=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},R=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,v.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,i,o=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,i=s,y(n.children,(function(e){return(0,r.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:M(e,"appear",n),enter:M(e,"enter",n),exit:M(e,"exit",n)})}))):x(e,o,s),firstRender:!1}},n.handleExited=function(e,t){var n=y(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,b.A)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,m.A)(e,["component","childFactory"]),o=this.state.contextValue,s=E(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?r.createElement(g.Provider,{value:o},s):r.createElement(g.Provider,{value:o},r.createElement(t,i,s))},t}(r.Component);R.propTypes={},R.defaultProps={component:"div",childFactory:function(e){return e}};const A=R,k=[];class w{static create(){return new w}currentId=null;start(e,t){this.clear(),this.currentId=setTimeout((()=>{this.currentId=null,t()}),e)}clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function T(){const e=h(w.create).current;var t;return t=e.disposeEffect,r.useEffect(t,k),e}var C=n(7437),S=n(4848);const V=function(e){const{className:t,classes:n,pulsate:o=!1,rippleX:s,rippleY:u,rippleSize:l,in:a,onExited:c,timeout:p}=e,[d,h]=r.useState(!1),f=(0,i.A)(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),m={width:l,height:l,top:-l/2+u,left:-l/2+s},b=(0,i.A)(n.child,d&&n.childLeaving,o&&n.childPulsate);return a||d||h(!0),r.useEffect((()=>{if(!a&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,a,p]),(0,S.jsx)("span",{className:f,style:m,children:(0,S.jsx)("span",{className:b})})};var P=n(8413);const I=(0,P.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),$=C.i7`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,j=C.i7`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,D=C.i7`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,L=(0,u.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),B=(0,u.Ay)(V,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${I.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${$};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${I.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${I.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${I.childLeaving} {
    opacity: 0;
    animation-name: ${j};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${I.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${D};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,N=r.forwardRef((function(e,t){const n=(0,l.b)({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:s={},className:u,...a}=n,[c,p]=r.useState([]),d=r.useRef(0),h=r.useRef(null);r.useEffect((()=>{h.current&&(h.current(),h.current=null)}),[c]);const f=r.useRef(!1),m=T(),b=r.useRef(null),v=r.useRef(null),g=r.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:u}=e;p((e=>[...e,(0,S.jsx)(B,{classes:{ripple:(0,i.A)(s.ripple,I.ripple),rippleVisible:(0,i.A)(s.rippleVisible,I.rippleVisible),ripplePulsate:(0,i.A)(s.ripplePulsate,I.ripplePulsate),child:(0,i.A)(s.child,I.child),childLeaving:(0,i.A)(s.childLeaving,I.childLeaving),childPulsate:(0,i.A)(s.childPulsate,I.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},d.current)])),d.current+=1,h.current=u}),[s]),y=r.useCallback(((e={},t={},n=()=>{})=>{const{pulsate:r=!1,center:i=o||t.pulsate,fakeElement:s=!1}=t;if("mousedown"===e?.type&&f.current)return void(f.current=!1);"touchstart"===e?.type&&(f.current=!0);const u=s?null:v.current,l=u?u.getBoundingClientRect():{width:0,height:0,left:0,top:0};let a,c,p;if(i||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)a=Math.round(l.width/2),c=Math.round(l.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;a=Math.round(t-l.left),c=Math.round(n-l.top)}if(i)p=Math.sqrt((2*l.width**2+l.height**2)/3),p%2==0&&(p+=1);else{const e=2*Math.max(Math.abs((u?u.clientWidth:0)-a),a)+2,t=2*Math.max(Math.abs((u?u.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}e?.touches?null===b.current&&(b.current=()=>{g({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})},m.start(80,(()=>{b.current&&(b.current(),b.current=null)}))):g({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})}),[o,g,m]),M=r.useCallback((()=>{y({},{pulsate:!0})}),[y]),x=r.useCallback(((e,t)=>{if(m.clear(),"touchend"===e?.type&&b.current)return b.current(),b.current=null,void m.start(0,(()=>{x(e,t)}));b.current=null,p((e=>e.length>0?e.slice(1):e)),h.current=t}),[m]);return r.useImperativeHandle(t,(()=>({pulsate:M,start:y,stop:x})),[M,y,x]),(0,S.jsx)(L,{className:(0,i.A)(I.root,s.root,u),ref:v,...a,children:(0,S.jsx)(A,{component:null,exit:!0,children:c})})}));var z=n(7936);function O(e){return(0,z.Ay)("MuiButtonBase",e)}const X=(0,P.A)("MuiButtonBase",["root","disabled","focusVisible"]),F=(0,u.Ay)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${X.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});function Y(e,t,n,r=!1){return p((i=>(n&&n(i),r||e[t](i),!0)))}const U=r.forwardRef((function(e,t){const n=(0,l.b)({props:e,name:"MuiButtonBase"}),{action:u,centerRipple:c=!1,children:d,className:h,component:m="button",disabled:b=!1,disableRipple:v=!1,disableTouchRipple:g=!1,focusRipple:y=!1,focusVisibleClassName:M,LinkComponent:x="a",onBlur:E,onClick:R,onContextMenu:A,onDragLeave:k,onFocus:w,onFocusVisible:T,onKeyDown:C,onKeyUp:V,onMouseDown:P,onMouseLeave:I,onMouseUp:$,onTouchEnd:j,onTouchMove:D,onTouchStart:L,tabIndex:B=0,TouchRippleProps:z,touchRippleRef:X,type:U,...H}=n,K=r.useRef(null),W=f.use(),q=(0,a.A)(W.ref,X),[_,G]=r.useState(!1);b&&_&&G(!1),r.useImperativeHandle(u,(()=>({focusVisible:()=>{G(!0),K.current.focus()}})),[]);const J=W.shouldMount&&!v&&!b;r.useEffect((()=>{_&&y&&!v&&W.pulsate()}),[v,y,_,W]);const Q=Y(W,"start",P,g),Z=Y(W,"stop",A,g),ee=Y(W,"stop",k,g),te=Y(W,"stop",$,g),ne=Y(W,"stop",(e=>{_&&e.preventDefault(),I&&I(e)}),g),re=Y(W,"start",L,g),ie=Y(W,"stop",j,g),oe=Y(W,"stop",D,g),se=Y(W,"stop",(e=>{s(e.target)||G(!1),E&&E(e)}),!1),ue=p((e=>{K.current||(K.current=e.currentTarget),s(e.target)&&(G(!0),T&&T(e)),w&&w(e)})),le=()=>{const e=K.current;return m&&"button"!==m&&!("A"===e.tagName&&e.href)},ae=p((e=>{y&&!e.repeat&&_&&" "===e.key&&W.stop(e,(()=>{W.start(e)})),e.target===e.currentTarget&&le()&&" "===e.key&&e.preventDefault(),C&&C(e),e.target===e.currentTarget&&le()&&"Enter"===e.key&&!b&&(e.preventDefault(),R&&R(e))})),ce=p((e=>{y&&" "===e.key&&_&&!e.defaultPrevented&&W.stop(e,(()=>{W.pulsate(e)})),V&&V(e),R&&e.target===e.currentTarget&&le()&&" "===e.key&&!e.defaultPrevented&&R(e)}));let pe=m;"button"===pe&&(H.href||H.to)&&(pe=x);const de={};"button"===pe?(de.type=void 0===U?"button":U,de.disabled=b):(H.href||H.to||(de.role="button"),b&&(de["aria-disabled"]=b));const he=(0,a.A)(t,K),fe={...n,centerRipple:c,component:m,disabled:b,disableRipple:v,disableTouchRipple:g,focusRipple:y,tabIndex:B,focusVisible:_},me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,s={root:["root",t&&"disabled",n&&"focusVisible"]},u=(0,o.A)(s,O,i);return n&&r&&(u.root+=` ${r}`),u})(fe);return(0,S.jsxs)(F,{as:pe,className:(0,i.A)(me.root,h),ownerState:fe,onBlur:se,onClick:R,onContextMenu:Z,onFocus:ue,onKeyDown:ae,onKeyUp:ce,onMouseDown:Q,onMouseLeave:ne,onMouseUp:te,onDragLeave:ee,onTouchEnd:ie,onTouchMove:oe,onTouchStart:re,ref:he,tabIndex:b?-1:B,type:U,...de,...H,children:[d,J?(0,S.jsx)(N,{ref:q,center:c,...z}):null]})}))},690:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(6540);const i=function(...e){return r.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{!function(e,t){"function"==typeof e?e(t):e&&(e.current=t)}(e,t)}))}),e)}}}]);