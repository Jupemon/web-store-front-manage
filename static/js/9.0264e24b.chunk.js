(window.webpackJsonpecommerce=window.webpackJsonpecommerce||[]).push([[9],{165:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);var c=a(7),r=a(8),n=a(11),s=a(9),o=a(10),l=a(0),i=a.n(l),d=a(89),u=a(82),p=(a(165),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(n.a)(this,Object(s.a)(t).call(this))).sendDeleteProduct=function(){console.log("product deleted");var e=localStorage.getItem("token");fetch("https://young-bayou-22235.herokuapp.com/deleteproduct/".concat(a.props.selectedProduct.productid),{headers:{Authorization:"Bearer ".concat(e)},method:"post"}).then(function(e){200===e.status?(a.props.GetProducts(),a.setState({productDeleted:!0})):401===e.status&&alert("unauthorized access, please sign in")})},a.state={productDeleted:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"cart-modal"},i.a.createElement("div",{className:"cart-back"},i.a.createElement("div",{className:"cart-title"},i.a.createElement("i",{style:{marginRight:"15px"},className:"fas fa-shopping-cart fa-3x"}),i.a.createElement("div",{style:{}}),i.a.createElement("h1",{className:"cart-title"},"Delete Product"),i.a.createElement(d.a,{variant:"danger",onClick:function(){return e.props.toggleModal("")}},"X")),i.a.createElement("div",{className:"cart-items"},this.state.productDeleted?i.a.createElement("div",null,"Product Deleted"):i.a.createElement(u.a,{style:{width:"12rem"},key:this.props.selectedProduct.productid},i.a.createElement(u.a.Img,{variant:"top",style:{width:"190px",height:"190px"},src:"https://young-bayou-22235.herokuapp.com/image/".concat(this.props.selectedProduct.productid)}),i.a.createElement(u.a.Title,null,this.props.selectedProduct.name),i.a.createElement(u.a.Text,null,this.props.selectedProduct.price),i.a.createElement("div",{className:"delete-confirmation",style:{}},"Are you sure you want to delete this product?",i.a.createElement(d.a,{onClick:function(){e.sendDeleteProduct()},variant:"danger",className:"delete-confirmation-button"},"Confirm"))))))}}]),t}(l.Component));t.default=p},89:function(e,t,a){"use strict";var c=a(1),r=a(2),n=a(3),s=a.n(n),o=a(0),l=a.n(o),i=a(4),d=a(29),u=l.a.forwardRef(function(e,t){var a=e.bsPrefix,n=e.variant,o=e.size,u=e.active,p=e.className,m=e.block,h=e.type,f=e.as,b=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(i.a)(a,"btn"),y=s()(p,v,u&&"active",v+"-"+n,m&&v+"-block",o&&v+"-"+o);if(b.href)return l.a.createElement(d.a,Object(c.a)({},b,{as:f,ref:t,className:s()(y,b.disabled&&"disabled")}));t&&(b.ref=t),f||(b.type=h);var E=f||"button";return l.a.createElement(E,Object(c.a)({},b,{className:y}))});u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=u}}]);
//# sourceMappingURL=9.0264e24b.chunk.js.map