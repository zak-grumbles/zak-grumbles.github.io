import{m as c,i as v,u as d}from"./_plugin-vue_export-helper-d4f35ec9.js";import{p as m,x as h,n as u,z as g,y as x,c as y,e as r,q as C}from"./index-97d8f50e.js";const V=m({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...c(),...h()},"VDivider"),D=u()({name:"VDivider",props:V(),setup(e,a){let{attrs:t}=a;const{themeClasses:o}=g(e),{textColorClasses:s,textColorStyles:n}=v(x(e,"color")),l=y(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=r(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=r(e.thickness)),i});return d(()=>C("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,s.value,e.class],style:[l.value,n.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{D as V};
