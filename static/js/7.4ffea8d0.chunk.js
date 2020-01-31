(window["webpackJsonpecommerce-manage"]=window["webpackJsonpecommerce-manage"]||[]).push([[7],{303:function(e,a,t){"use strict";t.r(a);var r=t(7),n=t(8),c=t(11),l=t(9),o=t(10),s=t(0),i=t.n(s),u=t(89),m=t(97),d=t(76),p=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(c.a)(this,Object(l.a)(a).call(this))).updateProductData=function(e,a){var r=t.state.productData;console.log(t.state.productAmount,t.state.productPrice,t.state.productName),t.state.productData.has(e)||r.append(e,a),t.setState({productData:r})},t.SendProduct=function(){var e=t.state.productData;e.append("name",t.state.productName),e.append("amount",t.state.productAmount),e.append("price",t.state.productPrice),e.append("productImage",t.state.productImage),console.log("product adding");var a=!0,r=!1,n=void 0;try{for(var c,l=t.state.productData.entries()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var o=c.value;console.log(o[0]+" : "+o[1])}}catch(i){r=!0,n=i}finally{try{a||null==l.return||l.return()}finally{if(r)throw n}}var s=localStorage.getItem("token");fetch("https://young-bayou-22235.herokuapp.com/addproduct",{headers:{Authorization:"Bearer ".concat(s)},body:e,method:"post"}).then(function(e){console.log(e,"DATA OF THE RESPONSE"),400===e.status?t.setState({productSent:!0}):401===e.status?alert("unauthorized access, please sign in"):t.setState({productSentError:!0})})},t.state={productSentError:!1,productSent:!1,productName:"",productPrice:"",productAmount:"",productImage:null,productData:new FormData,categories:[],colors:["Red","Black","Brown","Yellow","Pink","Blue","Green","Orange","White"],tastes:["Sour","Fruity","Chocolate","Liquorice"],shapes:["Ball","Animal","Cylinder","Skull","Bottle","Brick","Ring"],manufacturer:["Panda","Fazer"]},t}return Object(o.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://young-bayou-22235.herokuapp.com/getcategories",{method:"get"}).then(function(e){return e.json()}).then(function(a){var t=e.state.categories;console.log(a),a.map(function(e){t.push(e)}),e.setState({categories:t})})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"cart-modal"},i.a.createElement("div",{className:"cart-back"},i.a.createElement("div",{className:"cart-title"},i.a.createElement("i",{style:{marginRight:"15px"},className:"fas fa-shopping-cart fa-3x"}),i.a.createElement("div",{style:{}},i.a.createElement(u.a,{onClick:function(){e.SendProduct()},variant:"danger"},"Save Product")),i.a.createElement("h1",{className:"cart-title"},"Add Product"),i.a.createElement(u.a,{variant:"danger",onClick:function(){return e.props.toggleModal("")}},"X")),this.state.productSent?i.a.createElement("div",{className:"cart-items"},"Product saved succesfully"):i.a.createElement("div",{className:"cart-items"},i.a.createElement(m.a,null,i.a.createElement(m.a.Group,{controlId:"formBasicEmail"},i.a.createElement(m.a.Label,null,"Name"),i.a.createElement(m.a.Control,{type:"text",placeholder:"Enter product name",onChange:function(a){e.setState({productName:a.currentTarget.value})}}),i.a.createElement(m.a.Label,null,"Amount"),i.a.createElement(m.a.Control,{type:"number",placeholder:"Enter Amount",onChange:function(a){e.setState({productAmount:a.currentTarget.value})}}),i.a.createElement(m.a.Label,null,"\u20ac price"),i.a.createElement(m.a.Control,{type:"number",min:"0",step:"0.10",max:"99",onChange:function(a){e.setState({productPrice:a.currentTarget.value})}})),i.a.createElement(m.a.Group,{as:d.a,controlId:"formGridState"},this.state.categories.map(function(a){return i.a.createElement("div",null,i.a.createElement(m.a.Label,null,a.name),i.a.createElement(m.a.Control,{as:"select",onChange:function(t){e.updateProductData(a.name,t.currentTarget.value)}},i.a.createElement("option",null,"Pick "," ",a.name),a.items.map(function(e){return i.a.createElement("option",{key:e},e)})))}),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{for:"exampleFormControlFile1"},"Add image"),i.a.createElement("input",{type:"file",className:"form-control-file",id:"exampleFormControlFile1",onChange:function(a){e.setState({productImage:a.currentTarget.files[0]})}})))))))}}]),a}(s.Component);a.default=p},83:function(e,a,t){"use strict";var r=function(){};e.exports=r},89:function(e,a,t){"use strict";var r=t(1),n=t(2),c=t(3),l=t.n(c),o=t(0),s=t.n(o),i=t(4),u=t(29),m=s.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.variant,o=e.size,m=e.active,d=e.className,p=e.block,f=e.type,b=e.as,v=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(i.a)(t,"btn"),h=l()(d,y,m&&"active",y+"-"+c,p&&y+"-block",o&&y+"-"+o);if(v.href)return s.a.createElement(u.a,Object(r.a)({},v,{as:b,ref:a,className:l()(h,v.disabled&&"disabled")}));a&&(v.ref=a),b||(v.type=f);var N=b||"button";return s.a.createElement(N,Object(r.a)({},v,{className:h}))});m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},a.a=m},97:function(e,a,t){"use strict";var r=t(1),n=t(2),c=t(3),l=t.n(c),o=t(0),s=t.n(o),i=t(5),u=t(4),m=s.a.createContext({controlId:void 0}),d=s.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.className,i=e.children,d=e.controlId,p=e.as,f=void 0===p?"div":p,b=Object(n.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(u.a)(t,"form-group");var v=Object(o.useMemo)(function(){return{controlId:d}},[d]);return s.a.createElement(m.Provider,{value:v},s.a.createElement(f,Object(r.a)({},b,{ref:a,className:l()(c,t)}),i))});d.displayName="FormGroup";var p=d,f=(t(83),t(18)),b=t.n(f),v={type:b.a.string.isRequired,as:b.a.elementType},y=s.a.forwardRef(function(e,a){var t=e.as,c=void 0===t?"div":t,o=e.className,i=e.type,u=Object(n.a)(e,["as","className","type"]);return s.a.createElement(c,Object(r.a)({},u,{ref:a,className:l()(o,i&&i+"-feedback")}))});y.displayName="Feedback",y.propTypes=v,y.defaultProps={type:"valid"};var h=y,N=s.a.forwardRef(function(e,a){var t,c,i=e.bsPrefix,d=e.type,p=e.size,f=e.id,b=e.className,v=e.isValid,y=e.isInvalid,h=e.plaintext,N=e.readOnly,E=e.as,O=void 0===E?"input":E,g=Object(n.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),j=Object(o.useContext)(m).controlId;if(i=Object(u.a)(i,"form-control"),h)(c={})[i+"-plaintext"]=!0,t=c;else if("file"===d){var x;(x={})[i+"-file"]=!0,t=x}else{var P;(P={})[i]=!0,P[i+"-"+p]=p,t=P}return s.a.createElement(O,Object(r.a)({},g,{type:d,ref:a,readOnly:N,id:f||j,className:l()(b,t,v&&"is-valid",y&&"is-invalid")}))});N.displayName="FormControl",N.Feedback=h;var E=N,O=s.a.forwardRef(function(e,a){var t=e.id,c=e.bsPrefix,i=e.className,d=e.isValid,p=e.isInvalid,f=e.isStatic,b=Object(n.a)(e,["id","bsPrefix","className","isValid","isInvalid","isStatic"]);c=Object(u.a)(c,"form-check-input");var v=Object(o.useContext)(m),y=v.controlId,h=v.custom;return s.a.createElement("input",Object(r.a)({},b,{ref:a,id:t||y,className:l()(i,!h&&c,h&&"custom-control-input",d&&"is-valid",p&&"is-invalid",f&&"position-static")}))});O.displayName="FormCheckInput",O.defaultProps={type:"checkbox"};var g=O,j=s.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.className,i=e.htmlFor,d=Object(n.a)(e,["bsPrefix","className","htmlFor"]);t=Object(u.a)(t,"form-check-label");var p=Object(o.useContext)(m),f=p.controlId,b=p.custom;return s.a.createElement("label",Object(r.a)({},d,{ref:a,htmlFor:i||f,className:l()(c,!b&&t,b&&"custom-control-label")}))});j.displayName="FormCheckLabel",j.defaultProps={type:"checkbox"};var x=j,P=s.a.forwardRef(function(e,a){var t=e.id,c=e.bsPrefix,i=e.inline,d=e.disabled,p=e.isValid,f=e.isInvalid,b=e.feedback,v=e.className,y=e.style,N=e.title,E=e.type,O=e.label,j=e.children,P=e.custom,k=Object(n.a)(e,["id","bsPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom"]);c=Object(u.a)(c,"form-check");var C=Object(o.useContext)(m).controlId,I=Object(o.useMemo)(function(){return{controlId:t||C,custom:P}},[C,P,t]),F=null!=O&&!1!==O&&!j,S=s.a.createElement(g,Object(r.a)({},k,{type:E,ref:a,isValid:p,isInvalid:f,isStatic:!F,disabled:d}));return s.a.createElement(m.Provider,{value:I},s.a.createElement("div",{style:y,className:l()(v,!P&&c,P&&"custom-control custom-"+E,i&&(P?"custom-control":c)+"-inline")},j||s.a.createElement(s.a.Fragment,null,S,F&&s.a.createElement(x,{title:N},O),(p||f)&&s.a.createElement(h,{type:p?"valid":"invalid"},b))))});P.displayName="FormCheck",P.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},P.Input=g,P.Label=x;var k=P,C=t(76),I=s.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.column,i=e.srOnly,d=e.className,p=e.htmlFor,f=Object(n.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),b=Object(o.useContext)(m).controlId;t=Object(u.a)(t,"form-label");var v=l()(d,t,i&&"sr-only",c&&"col-form-label");return p=p||b,c?s.a.createElement(C.a,Object(r.a)({as:"label",className:v,htmlFor:p},f)):s.a.createElement("label",Object(r.a)({ref:a,className:v,htmlFor:p},f))});I.displayName="FormLabel",I.defaultProps={column:!1,srOnly:!1};var F=I,S=s.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.className,o=e.as,i=void 0===o?"small":o,m=e.muted,d=Object(n.a)(e,["bsPrefix","className","as","muted"]);return t=Object(u.a)(t,"form-text"),s.a.createElement(i,Object(r.a)({},d,{ref:a,className:l()(c,t,m&&"text-muted")}))});S.displayName="FormText";var w=S,R=s.a.forwardRef(function(e,a){var t=e.bsPrefix,c=e.inline,o=e.className,i=e.validated,m=e.as,d=void 0===m?"form":m,p=Object(n.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(u.a)(t,"form"),s.a.createElement(d,Object(r.a)({},p,{ref:a,className:l()(o,i&&"was-validated",c&&t+"-inline")}))});R.displayName="Form",R.defaultProps={inline:!1},R.Row=Object(i.a)("form-row"),R.Group=p,R.Control=E,R.Check=k,R.Label=F,R.Text=w;a.a=R}}]);
//# sourceMappingURL=7.4ffea8d0.chunk.js.map