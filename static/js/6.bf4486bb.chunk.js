(window.webpackJsonpecommerce=window.webpackJsonpecommerce||[]).push([[6],{107:function(e,t,a){"use strict";var n=a(7),i=a(8),r=a(11),s=a(9),o=a(10),l=a(0),c=a.n(l),u=a(89),d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={input:"+Add",default:"+Add",visible:!1},a.VisibilityToggle=function(e){e.target.classList.toggle("active"),a.setState({visible:!a.state.visible,input:"+Add"})},a.ConfirmButton=function(){if(a.setState({visible:!a.state.visible,input:"+Add"}),a.props.addFilterButton)a.props.addFilterButton(a.state.input);else{console.log("added");var e=localStorage.getItem("token");console.log(a.props.CategoryName),fetch("https://young-bayou-22235.herokuapp.com/addfilter",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({name:a.props.CategoryName,items:[a.state.input]})}).then(function(e){401===e.status?alert("Unathorized accesss, please sign in"):e.json()}).then(function(e){console.log(e)})}},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"purple-button"},c.a.createElement(u.a,{variant:"danger",onClick:function(t){e.VisibilityToggle(t)}},this.state.input)),c.a.createElement("div",{style:this.state.visible?{visibility:"visible"}:{visibility:"hidden",default:this.state.input},className:"add-filter"},c.a.createElement("div",{className:"add-filter-background"},c.a.createElement(u.a,{variant:"danger",onClick:function(){e.ConfirmButton()},className:"filter-item"},"Confirm"),c.a.createElement("input",{onChange:function(t){e.setState({input:t.currentTarget.value})},className:"filter-input filter-item"}),c.a.createElement(u.a,{variant:"danger",onClick:function(){e.setState({input:e.state.default,visible:!e.state.visible})},className:"filter-item"},"Cancel"))))}}]),t}(l.Component);t.a=d},108:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a(8),r=a(11),s=a(9),o=a(10),l=a(0),c=a.n(l),u=(a(108),a(78)),d=a(79),p=a(76),f=a(82),m=a(89),h=(a(166),a(107)),v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this))).addNewFilter=function(){console.log("filter added")},a.state={categories:[]},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://young-bayou-22235.herokuapp.com/getcategories").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({categories:t})})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(p.a,{md:"4"},c.a.createElement(f.a,{style:{width:"12rem"}},c.a.createElement(f.a.Body,{style:{boxShadow:"2.5px 1px 2px 1px rgba(0, 0, 0, 0.15)"}},this.state.categories.map(function(t){return c.a.createElement("div",null,c.a.createElement(f.a.Title,null,t.name),t.items.map(function(a){return c.a.createElement("div",{className:"purple-button"},c.a.createElement(m.a,{variant:"primary",onClick:function(n){e.props.handleFilterProducts(n,a,t.name)}},a))}),c.a.createElement(h.a,{CategoryName:t.name}))})))))}}]),t}(l.Component),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).handleFilterProducts=function(e,t,n){console.log(t,n),e.target.classList.toggle("active");var i=a.state.activeFilters;i.includes(t)?a.setState({activeFilters:i.filter(function(e){return e!==t})},function(){a.filterProducts(t,n)}):(i.push(t),a.setState({activeFilters:i},function(){a.filterProducts(t,n)}))},a.handletheFilterProducts=function(e,t,n){if(a.state.activeFilters.length<=0)a.setState({filteredProducts:a.state.products});else{var i=a.state.filteredProducts.filter(function(e){return a.state.activeFilters.includes(e[n])});console.log(i,"!!!"),a.setState({filteredProducts:i})}},a.filtertheProducts=function(){console.log("products filtered")},a.DeleteProduct=function(e){fetch("https://young-bayou-22235.herokuapp.com/".concat(e),{method:"post"}).then(function(e){400===e.status&&console.log("product deleted")})},a.state={clickedFilter:null,products:[],filteredProducts:[],activeFilters:[]},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.selectedCategory.length>0&&console.log(this.props,"NOT SELECTED THOURGHT CATEGORIES"),this.props.products.forEach(function(e){e.selected=!1}),this.setState({products:this.props.products,filteredProducts:this.props.products})}},{key:"filterProducts",value:function(e,t){var a=this;if(console.log(this.state.filteredProducts,this.state.activeFilters,"HCEK"),this.state.activeFilters.length<=0)this.setState({filteredProducts:this.state.products});else{var n=this.state.products.filter(function(e){if(a.state.activeFilters.includes(e[t]))return e});this.setState({filteredProducts:n})}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,console.log(this.state.filteredProducts,this.props.products),c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(v,{handleFilterProducts:this.handleFilterProducts}),c.a.createElement(p.a,{md:"8"},c.a.createElement("div",{className:"products-holder"},c.a.createElement("div",{className:"products-holder-holder"},this.state.filteredProducts.map(function(t){return c.a.createElement(f.a,{style:{width:"12rem"},key:t.ID},c.a.createElement("div",{className:"outer"},c.a.createElement("div",{style:{right:"0px"},className:"overlay",onClick:function(){return e.props.toggleModal("deleteproduct",t)}},c.a.createElement("i",{style:{paddingTop:"50px",color:"white"},className:"fas fa-trash-alt fa-4x"},c.a.createElement("p",{style:{fontSize:"15px"}},"Delete"))),c.a.createElement("div",{className:"overlay",onClick:function(){return e.props.toggleModal("changeproduct",t)}},c.a.createElement("i",{style:{paddingTop:"50px",color:"white"},className:"fas fa-file-invoice fa-4x"},c.a.createElement("p",{style:{fontSize:"15px"}},"Change Data"))),c.a.createElement(f.a.Img,{variant:"top",style:{width:"190px",height:"190px"},src:"https://young-bayou-22235.herokuapp.com/image/".concat(t.productid)})),c.a.createElement(f.a.Title,null,t.name),Object.entries(t).map(function(e){if("selected"!==e[0])return c.a.createElement(f.a.Text,null,e[0]+" : "+e[1])}))})))))))}}]),t}(l.Component);t.default=g}}]);
//# sourceMappingURL=6.bf4486bb.chunk.js.map