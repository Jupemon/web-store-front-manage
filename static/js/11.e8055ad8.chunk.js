(window["webpackJsonpweb-store-front-manage"]=window["webpackJsonpweb-store-front-manage"]||[]).push([[11],{307:function(e,a,t){"use strict";t.r(a);var l=t(7),r=t(8),n=t(11),s=t(9),c=t(10),o=t(0),i=t.n(o),m=t(89),d=t(97),u=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(s.a)(a).call(this))).handleSignIn=function(){console.log("signin"),fetch("https://young-bayou-22235.herokuapp.com/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.refs.email.value,password:t.refs.password.value,owner:!0})}).then(function(e){return e.json()}).then(function(e){console.log(typeof e),console.log(e),localStorage.setItem("token",e.token),"Fail"===e?t.refs.helptext.innerHTML="Oops something went wrong, incorrect credentials":"object"===typeof e?(console.log("successfull"),localStorage.getItem("user")?console.log("localstorage user already exists"):localStorage.setItem("user",JSON.stringify(e)),t.setState({loggedIn:!0}),console.log(e.account),t.props.logIn(e.account)):console.log()})},t.state={loggedIn:!1},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"cart-modal"},i.a.createElement("div",{className:"cart-back"},i.a.createElement("div",{className:"cart-title"},i.a.createElement("i",{className:"fas fa-user fa-3x"}),i.a.createElement("h1",{className:"cart-title"},"Sign in"),i.a.createElement(m.a,{variant:"danger",onClick:function(){return e.props.toggleModal("")}},"X")),i.a.createElement("div",{className:"cart-items"},this.state.loggedIn?i.a.createElement("div",null,i.a.createElement("p",null,"Log in successfull")):i.a.createElement(d.a,null,i.a.createElement(d.a.Group,{controlId:"formBasicEmail"},i.a.createElement(d.a.Label,null,"Email address"),i.a.createElement(d.a.Control,{type:"email",placeholder:"Enter email",ref:"email",defaultValue:"owner@gmail.com"}),i.a.createElement(d.a.Text,{className:"text-muted",ref:"helptext"})),i.a.createElement(d.a.Group,{controlId:"formBasicPassword"},i.a.createElement(d.a.Label,null,"Password"),i.a.createElement(d.a.Control,{type:"password",placeholder:"Password",ref:"password",defaultValue:"owner"})),i.a.createElement(d.a.Group,{controlId:"formBasicChecbox"},i.a.createElement(d.a.Check,{type:"checkbox",label:"Check me out"})),i.a.createElement(m.a,{variant:"danger",onClick:function(){e.handleSignIn()}},"Sign In")))))}}]),a}(o.Component);a.default=u},83:function(e,a,t){"use strict";var l=function(){};e.exports=l},89:function(e,a,t){"use strict";var l=t(1),r=t(2),n=t(3),s=t.n(n),c=t(0),o=t.n(c),i=t(4),m=t(29),d=o.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.variant,c=e.size,d=e.active,u=e.className,f=e.block,b=e.type,p=e.as,v=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(i.a)(t,"btn"),O=s()(u,y,d&&"active",y+"-"+n,f&&y+"-block",c&&y+"-"+c);if(v.href)return o.a.createElement(m.a,Object(l.a)({},v,{as:p,ref:a,className:s()(O,v.disabled&&"disabled")}));a&&(v.ref=a),p||(v.type=b);var N=p||"button";return o.a.createElement(N,Object(l.a)({},v,{className:O}))});d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},a.a=d},97:function(e,a,t){"use strict";var l=t(1),r=t(2),n=t(3),s=t.n(n),c=t(0),o=t.n(c),i=t(5),m=t(4),d=o.a.createContext({controlId:void 0}),u=o.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,i=e.children,u=e.controlId,f=e.as,b=void 0===f?"div":f,p=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(m.a)(t,"form-group");var v=Object(c.useMemo)(function(){return{controlId:u}},[u]);return o.a.createElement(d.Provider,{value:v},o.a.createElement(b,Object(l.a)({},p,{ref:a,className:s()(n,t)}),i))});u.displayName="FormGroup";var f=u,b=(t(83),t(18)),p=t.n(b),v={type:p.a.string.isRequired,as:p.a.elementType},y=o.a.forwardRef(function(e,a){var t=e.as,n=void 0===t?"div":t,c=e.className,i=e.type,m=Object(r.a)(e,["as","className","type"]);return o.a.createElement(n,Object(l.a)({},m,{ref:a,className:s()(c,i&&i+"-feedback")}))});y.displayName="Feedback",y.propTypes=v,y.defaultProps={type:"valid"};var O=y,N=o.a.forwardRef(function(e,a){var t,n,i=e.bsPrefix,u=e.type,f=e.size,b=e.id,p=e.className,v=e.isValid,y=e.isInvalid,O=e.plaintext,N=e.readOnly,h=e.as,j=void 0===h?"input":h,x=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),g=Object(c.useContext)(d).controlId;if(i=Object(m.a)(i,"form-control"),O)(n={})[i+"-plaintext"]=!0,t=n;else if("file"===u){var E;(E={})[i+"-file"]=!0,t=E}else{var w;(w={})[i]=!0,w[i+"-"+f]=f,t=w}return o.a.createElement(j,Object(l.a)({},x,{type:u,ref:a,readOnly:N,id:b||g,className:s()(p,t,v&&"is-valid",y&&"is-invalid")}))});N.displayName="FormControl",N.Feedback=O;var h=N,j=o.a.forwardRef(function(e,a){var t=e.id,n=e.bsPrefix,i=e.className,u=e.isValid,f=e.isInvalid,b=e.isStatic,p=Object(r.a)(e,["id","bsPrefix","className","isValid","isInvalid","isStatic"]);n=Object(m.a)(n,"form-check-input");var v=Object(c.useContext)(d),y=v.controlId,O=v.custom;return o.a.createElement("input",Object(l.a)({},p,{ref:a,id:t||y,className:s()(i,!O&&n,O&&"custom-control-input",u&&"is-valid",f&&"is-invalid",b&&"position-static")}))});j.displayName="FormCheckInput",j.defaultProps={type:"checkbox"};var x=j,g=o.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,i=e.htmlFor,u=Object(r.a)(e,["bsPrefix","className","htmlFor"]);t=Object(m.a)(t,"form-check-label");var f=Object(c.useContext)(d),b=f.controlId,p=f.custom;return o.a.createElement("label",Object(l.a)({},u,{ref:a,htmlFor:i||b,className:s()(n,!p&&t,p&&"custom-control-label")}))});g.displayName="FormCheckLabel",g.defaultProps={type:"checkbox"};var E=g,w=o.a.forwardRef(function(e,a){var t=e.id,n=e.bsPrefix,i=e.inline,u=e.disabled,f=e.isValid,b=e.isInvalid,p=e.feedback,v=e.className,y=e.style,N=e.title,h=e.type,j=e.label,g=e.children,w=e.custom,I=Object(r.a)(e,["id","bsPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom"]);n=Object(m.a)(n,"form-check");var P=Object(c.useContext)(d).controlId,k=Object(c.useMemo)(function(){return{controlId:t||P,custom:w}},[P,w,t]),C=null!=j&&!1!==j&&!g,F=o.a.createElement(x,Object(l.a)({},I,{type:h,ref:a,isValid:f,isInvalid:b,isStatic:!C,disabled:u}));return o.a.createElement(d.Provider,{value:k},o.a.createElement("div",{style:y,className:s()(v,!w&&n,w&&"custom-control custom-"+h,i&&(w?"custom-control":n)+"-inline")},g||o.a.createElement(o.a.Fragment,null,F,C&&o.a.createElement(E,{title:N},j),(f||b)&&o.a.createElement(O,{type:f?"valid":"invalid"},p))))});w.displayName="FormCheck",w.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},w.Input=x,w.Label=E;var I=w,P=t(76),k=o.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.column,i=e.srOnly,u=e.className,f=e.htmlFor,b=Object(r.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),p=Object(c.useContext)(d).controlId;t=Object(m.a)(t,"form-label");var v=s()(u,t,i&&"sr-only",n&&"col-form-label");return f=f||p,n?o.a.createElement(P.a,Object(l.a)({as:"label",className:v,htmlFor:f},b)):o.a.createElement("label",Object(l.a)({ref:a,className:v,htmlFor:f},b))});k.displayName="FormLabel",k.defaultProps={column:!1,srOnly:!1};var C=k,F=o.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,c=e.as,i=void 0===c?"small":c,d=e.muted,u=Object(r.a)(e,["bsPrefix","className","as","muted"]);return t=Object(m.a)(t,"form-text"),o.a.createElement(i,Object(l.a)({},u,{ref:a,className:s()(n,t,d&&"text-muted")}))});F.displayName="FormText";var S=F,R=o.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.inline,c=e.className,i=e.validated,d=e.as,u=void 0===d?"form":d,f=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(m.a)(t,"form"),o.a.createElement(u,Object(l.a)({},f,{ref:a,className:s()(c,i&&"was-validated",n&&t+"-inline")}))});R.displayName="Form",R.defaultProps={inline:!1},R.Row=Object(i.a)("form-row"),R.Group=f,R.Control=h,R.Check=I,R.Label=C,R.Text=S;a.a=R}}]);
//# sourceMappingURL=11.e8055ad8.chunk.js.map