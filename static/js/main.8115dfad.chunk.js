(this["webpackJsonpsocialape-client"]=this["webpackJsonpsocialape-client"]||[]).push([[0],{105:function(e,a){},126:function(e,a,t){e.exports=t(177)},154:function(e,a,t){},177:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),c=t.n(o),l=t(18),i=t(19),s=t(21),m=t(20),u=t(17),d=t(11),p=t(102),h=t.n(p),g=t(31),E=t.n(g),f=t(29),b=t(41),A=t(104),v=t(13),y={loading:!1,authenticated:!1,credentials:{},likes:[],notifications:[]},O=t(105),w=t.n(O),j={loading:!1,errors:{}},T=[A.a],N=Object(b.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_AUTHENTICATED":return Object(v.a)(Object(v.a)({},e),{},{authenticated:!0});case"SET_UNAUTHENTICATED":return y;case"SET_USER":return Object(v.a)({authenticated:!0},a.payload);case"LOADING_USER":return Object(v.a)(Object(v.a)({},e),{},{loading:!0});default:return e}},data:w.a,UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_ERRORS":return Object(v.a)(Object(v.a)({},e),{},{loading:!1,errors:a.payload});case"CLEAR_ERRORS":return Object(v.a)(Object(v.a)({},e),{},{loading:!1,errors:{}});case"LOADING_UI":return Object(v.a)(Object(v.a)({},e),{},{loading:!0});default:return e}}}),S=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):b.d)(b.a.apply(void 0,T)),C=Object(b.e)(N,{},S),x=function(){return function(e){e({type:"LOADING_USER"}),E.a.get("/user").then((function(a){e({type:"SET_USER",payload:a.data})})).catch((function(e){return console.log(e)}))}},U=function(){return function(e){e({type:"CLEAR_ERRORS"})}},R=function(e){var a="Bearer ".concat(e);localStorage.setItem("FBIdToken",a),E.a.defaults.headers.common.Authorization=a},I=t(210),k=t(111),B=(t(154),t(215)),D=t(36),L=t.n(D),Q=t(52),F=t.n(Q),P=t(106),M=t.n(P),Y=t(206),G=t(209),H=t(208),W=t(181),V=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){F.a.extend(M.a);var e=this.props,a=e.classes,t=e.scream,n=t.body,o=t.userHandle,c=t.createdAt,l=t.userImage;return r.a.createElement(Y.a,{className:a.card},r.a.createElement(H.a,{image:l,title:"Profile image",className:a.image}),r.a.createElement(G.a,{className:a.content},r.a.createElement(W.a,{variant:"h5",component:u.b,to:"/user/".concat(o),color:"primary"},o),r.a.createElement(W.a,{variant:"body2",color:"textSecondary"},F()(c).fromNow()),r.a.createElement(W.a,{variant:"body1"},n)))}}]),t}(n.Component),q=L()({card:{display:"flex",marginButton:20},image:{minWidth:200},content:{padding:25,objectFit:"cover"}})(V),z=t(4),J=t.n(z),Z=t(113),X=t(214),K=t(213),_=t(212),$=t(221),ee=t(109),ae=t.n(ee),te=t(110),ne=t.n(te),re=t(108),oe=t.n(re),ce=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleImageChange=function(e){},e.handleEditPicture=function(){document.getElementById("imageInput").click()},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.user,o=t.authenticated,c=t.credentials,l=c.handle,i=c.imageUrl,s=c.createdAt;return t.loading?r.a.createElement("p",null,"loading..."):o?r.a.createElement(Z.a,{className:a.paper},r.a.createElement("div",{className:a.profile},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:i,alt:"avatar",className:"profile-image"}),r.a.createElement("input",{type:"file",name:"file",id:"imageInput",onChange:this.handleImageChange,hidden:"hidden"}),r.a.createElement($.a,{title:"Edit profile picture",placement:"top"},r.a.createElement(_.a,{className:"button",onClick:this.handleEditPicture},r.a.createElement(oe.a,{color:"primary"})))),r.a.createElement("div",{className:"profile-details"},r.a.createElement(K.a,{component:u.b,to:"/users/".concat(l),color:"primary",variant:"h5"},"@",l),r.a.createElement("hr",null),r.a.createElement(n.Fragment,null,r.a.createElement(ae.a,{color:"primary"})," ",r.a.createElement("span",null,"VietNam"),r.a.createElement("hr",null)),r.a.createElement(n.Fragment,null,r.a.createElement(ne.a,{color:"primary"})," ",r.a.createElement("span",null,"Joined ",F()(s).format("MMM YYYY")),r.a.createElement("hr",null))))):r.a.createElement(Z.a,{className:a.paper},r.a.createElement(W.a,{variant:"body2",align:"center"},"You don't have a account, please"),r.a.createElement("div",{className:a.buttons},r.a.createElement(X.a,{variant:"contained",color:"primary",component:u.b,to:"/login",className:"btn"},"Login"),r.a.createElement(X.a,{variant:"contained",color:"secondary",component:u.b,to:"/signup",className:"btn"},"Signup")))}}]),t}(n.Component);ce.protoType={classes:J.a.object.isRequired,user:J.a.object.isRequired};var le=Object(f.b)((function(e){return{user:e.user}}))(L()((function(e){return Object(v.a)({},e.spreadProfile)}))(ce)),ie=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={screams:null},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/screams").then((function(a){e.setState({screams:a.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.screams?this.state.screams.map((function(e,a){return r.a.createElement(q,{key:a,scream:e})})):r.a.createElement("p",null,"Loading...");return r.a.createElement(B.a,{container:!0,spacing:2},r.a.createElement(B.a,{item:!0,sm:8,xs:12},e),r.a.createElement(B.a,{item:!0,sm:4,xs:12},r.a.createElement(le,null)))}}]),t}(n.Component),se=t(47),me=t(68),ue=t.n(me),de=t(219),pe=t(216),he=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleSubmit=function(e){e.preventDefault();var a={email:n.state.email,password:n.state.password};n.props.loginUser(a,n.props.history)},n.handleChange=function(e){var a=e.target.name,t=e.target.value;n.setState(Object(se.a)({},a,t))},n.state={email:"",password:""},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.clearError()}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.UI,n=t.loading,o=t.errors;return r.a.createElement(B.a,{container:!0},r.a.createElement(B.a,{item:!0,sm:!0,xs:12}),r.a.createElement(B.a,{item:!0,sm:!0,xs:12,className:a.form},r.a.createElement("img",{src:ue.a,alt:"Login icon"}),r.a.createElement(W.a,{variant:"h4",className:a.titleForm},"Login"),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(de.a,{id:"email",name:"email",type:"email",label:"Email",className:a.TextField,value:this.state.email,onChange:this.handleChange,fullWidth:!0,helperText:o.email,error:!!o.email}),r.a.createElement(de.a,{id:"password",name:"password",type:"password",label:"Password",className:a.TextField,value:this.state.password,onChange:this.handleChange,autoComplete:"on",fullWidth:!0,helperText:o.password,error:!!o.password}),o.error&&r.a.createElement(W.a,{variant:"body2",className:a.customError},o.error),r.a.createElement(X.a,{type:"submit",variant:"contained",color:"primary",className:a.button,disabled:n},"Login",n&&r.a.createElement(pe.a,{size:30,className:a.progress})),r.a.createElement("small",{className:a.small},"If you don't have an account, sign up"," ",r.a.createElement(u.b,{to:"/signup",className:a.link},"here")))),r.a.createElement(B.a,{item:!0,sm:!0,xs:12}))}}]),t}(n.Component),ge={loginUser:function(e,a){return function(t){t({type:"LOADING_UI"}),E.a.post("/login",e).then((function(e){R(e.data.token),t(x()),t({type:"CLEAR_ERRORS"}),a.push("/")})).catch((function(e){t({type:"SET_ERRORS",payload:e.response.data})}))}},clearError:U},Ee=Object(f.b)((function(e){return{user:e.user,UI:e.UI}}),ge)(L()((function(e){return Object(v.a)({},e.spreadThis)}))(he)),fe=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.setState({loading:!0});var a={email:n.state.email,password:n.state.password,confirmPassword:n.state.confirmPassword,handle:n.state.handle};n.props.signupUser(a,n.props.history)},n.handleChange=function(e){var a=e.target.name,t=e.target.value;n.setState(Object(se.a)({},a,t))},n.state={email:"",password:"",confirmPassword:"",handle:""},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.clearError()}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.UI,n=t.loading,o=t.errors;return r.a.createElement(B.a,{container:!0},r.a.createElement(B.a,{item:!0,sm:!0,xs:12}),r.a.createElement(B.a,{item:!0,sm:!0,xs:12,className:a.form},r.a.createElement("img",{src:ue.a,alt:"Signup icon"}),r.a.createElement(W.a,{variant:"h4",className:a.titleForm},"Signup"),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(de.a,{id:"email",name:"email",type:"email",label:"Email",className:a.TextField,value:this.state.email,onChange:this.handleChange,fullWidth:!0,helperText:o.email,error:!!o.email}),r.a.createElement(de.a,{id:"password",name:"password",type:"password",label:"Password",className:a.TextField,value:this.state.password,onChange:this.handleChange,autoComplete:"on",fullWidth:!0,helperText:o.password,error:!!o.password}),r.a.createElement(de.a,{id:"confirmPassword",name:"confirmPassword",type:"password",label:"Confirm password",className:a.TextField,value:this.state.confirmPassword,onChange:this.handleChange,autoComplete:"on",fullWidth:!0,helperText:o.confirmPassword,error:!!o.confirmPassword}),r.a.createElement(de.a,{id:"handle",name:"handle",type:"handle",label:"Username",className:a.TextField,value:this.state.handle,onChange:this.handleChange,autoComplete:"on",fullWidth:!0,helperText:o.handle,error:!!o.handle}),o.error&&r.a.createElement(W.a,{variant:"body2",className:a.customError},o.error),o.general&&r.a.createElement(W.a,{variant:"body2",className:a.customError},o.general),r.a.createElement(X.a,{type:"submit",variant:"contained",color:"primary",className:a.button,disabled:n},"Signup",n&&r.a.createElement(pe.a,{size:30,className:a.progress})),r.a.createElement("small",{className:a.small},"If you have an account, login"," ",r.a.createElement(u.b,{to:"/login",className:a.link},"here")))),r.a.createElement(B.a,{item:!0,sm:!0,xs:12}))}}]),t}(n.Component),be={signupUser:function(e,a){return function(t){t({type:"LOADING_UI"}),E.a.post("/signup",e).then((function(e){R(e.data.token),t(x()),t({type:"CLEAR_ERRORS"}),a.push("/")})).catch((function(e){console.log(e.response),t({type:"SET_ERRORS",payload:e.response.data})}))}},clearError:U},Ae=Object(f.b)((function(e){return{UI:e.UI}}),be)(L()((function(e){return Object(v.a)({},e.spreadThis)}))(fe)),ve=t(217),ye=t(218),Oe=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ve.a,null,r.a.createElement(ye.a,{className:"nav-container"},r.a.createElement(X.a,{color:"inherit",component:u.b,to:"/"},"Home"),r.a.createElement(X.a,{color:"inherit",component:u.b,to:"/login"},"Login"),r.a.createElement(X.a,{color:"inherit",component:u.b,to:"/signup"},"Signup"))))}}]),t}(n.Component),we=t(112),je=Object(f.b)((function(e){return{authenticated:e.user.authenticated}}))((function(e){var a=e.component,t=e.authenticated,n=Object(we.a)(e,["component","authenticated"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return!0===t?r.a.createElement(d.a,{to:"/"}):r.a.createElement(a,e)}}))})),Te=Object(k.a)({palette:{primary:{light:"#33c9dc",main:"#00bcd4",dark:"#008394",contrastText:"#fff"},secondary:{light:"#ff6333",main:"#ff3d00",dark:"#b22a00",contrastText:"#fff"}},typography:{useNextVariants:!0},spreadThis:{form:{textAlign:"center",padding:15},TextField:{marginBottom:20},titleForm:{marginBottom:20},button:{marginTop:20,position:"relative"},customError:{color:"red"},small:{display:"block",marginTop:15},link:{color:"#00bcd4"},progress:{position:"absolute"}},spreadProfile:{paper:{padding:"1rem"},buttons:{marginTop:".5rem",textAlign:"center","& .btn":{margin:".5rem"}},profile:{textAlign:"center","& .image-wrapper":{textAlign:"center",position:"relative"},"& .profile-image":{width:200,height:200,objectFit:"cover",maxWidth:"100%",borderRadius:"50%"},"& .button":{position:"absolute",top:"80%",left:"70%"},"& .profile-details":{textAlign:"center","& span, svg":{verticalAlign:"middle"},"& a":{color:"#00bcd4"}},"& hr":{border:"none",margin:"0 0 10px 0"}}}}),Ne=localStorage.FBIdToken;Ne&&(1e3*h()(Ne).exp<Date.now()?(C.dispatch((function(e){localStorage.removeItem("FBIdToken"),delete E.a.defaults.headers.common.Authorization,e({type:"SET_UNAUTHENTICATED"})})),window.location.href="/login"):(C.dispatch({type:"SET_AUTHENTICATED"}),E.a.defaults.headers.common.Authorization=Ne,C.dispatch(x())));var Se=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(I.a,{theme:Te},r.a.createElement(f.a,{store:C},r.a.createElement(u.a,null,r.a.createElement(Oe,null),r.a.createElement("div",{className:"container"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:ie}),r.a.createElement(je,{exact:!0,path:"/login",component:Ee}),r.a.createElement(je,{exact:!0,path:"/signup",component:Ae}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,a){e.exports="data:image/png;base64,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"}},[[126,1,2]]]);
//# sourceMappingURL=main.8115dfad.chunk.js.map