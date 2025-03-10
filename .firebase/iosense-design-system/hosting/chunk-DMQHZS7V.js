import{a as P,b as T,c as w,d as k,e as D,f as N,g as W}from"./chunk-2ECTIOY4.js";import{Da as c,Ja as d,La as h,Ma as o,Na as n,Pa as M,Qa as m,Ra as x,Va as r,Wa as _,X as v,Xa as f,Y as b,Ya as g,Za as u,_a as C,ob as E,pb as S,qa as a,qb as O,ya as y}from"./chunk-5I5KBWFM.js";function I(l,s){if(l&1&&(o(0,"option",13),r(1),n()),l&2){let t=s.$implicit;d("value",t.name),a(),f(" ",t.name," ")}}function L(l,s){if(l&1&&(o(0,"option",13),r(1),n()),l&2){let t=s.$implicit;d("value",t),a(),f(" ",t," ")}}function R(l,s){if(l&1){let t=M();o(0,"div",17)(1,"div",18)(2,"code"),r(3),n(),o(4,"button",19),m("click",function(){let p=v(t).index,i=x(2);return b(i.removeExample(p))}),r(5,"\xD7"),n()(),o(6,"div",20),r(7),n()()}if(l&2){let t=s.$implicit;a(3),_(t.className),a(3),h(t.className),a(),_(t.text)}}function V(l,s){if(l&1&&(o(0,"div",14)(1,"h3"),r(2,"Examples"),n(),o(3,"div",15),c(4,R,8,4,"div",16),n()()),l&2){let t=x();a(4),d("ngForOf",t.examples)}}var F=class l{manualClass="";customText="";examples=[];defaultText="Elevation Example";selectedCategory="";selectedClass="";classCategories=[{name:"Shadows (Global)",classes:["global-el-ultraLowRaised","global-el-lowRaised","global-el-midRaised","global-el-highRaised","global-el-ultraHighRaised"]}];getSelectedCategoryClasses(){let s=this.classCategories.find(t=>t.name===this.selectedCategory);return s?s.classes:[]}onCategoryChange(){this.selectedClass=""}onClassSelect(){this.selectedClass&&(this.examples.unshift({className:this.selectedClass,text:this.customText||this.defaultText}),this.selectedClass="",this.customText="")}addClass(){this.manualClass&&(this.examples.unshift({className:this.manualClass,text:this.customText||this.defaultText}),this.manualClass="",this.customText="")}removeExample(s){this.examples.splice(s,1)}static \u0275fac=function(t){return new(t||l)};static \u0275cmp=y({type:l,selectors:[["app-elevation-demo"]],decls:23,vars:10,consts:[[1,"elevation-demo"],[1,"input-section"],[1,"manual-input"],[1,"input-group"],[3,"ngModelChange","ngModel"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"ngModelChange","ngModel","disabled"],["type","text","placeholder","Enter custom text (optional)",3,"ngModelChange","ngModel"],[3,"click","disabled"],[1,"manual-class-input"],["type","text","placeholder","Or enter class name manually",3,"ngModelChange","keyup.enter","ngModel"],["class","examples-section",4,"ngIf"],[3,"value"],[1,"examples-section"],[1,"examples-list"],["class","example-item",4,"ngFor","ngForOf"],[1,"example-item"],[1,"example-header"],[1,"remove-btn",3,"click"],[1,"elevation-example"]],template:function(t,e){t&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3"),r(4,"Test Elevation Classes"),n(),o(5,"div",3)(6,"select",4),C("ngModelChange",function(i){return u(e.selectedCategory,i)||(e.selectedCategory=i),i}),m("ngModelChange",function(){return e.onCategoryChange()}),o(7,"option",5),r(8,"Select Category"),n(),c(9,I,2,2,"option",6),n(),o(10,"select",7),C("ngModelChange",function(i){return u(e.selectedClass,i)||(e.selectedClass=i),i}),o(11,"option",5),r(12,"Select Class"),n(),c(13,L,2,2,"option",6),n(),o(14,"input",8),C("ngModelChange",function(i){return u(e.customText,i)||(e.customText=i),i}),n(),o(15,"button",9),m("click",function(){return e.onClassSelect()}),r(16,"Add Class"),n()(),o(17,"div",10)(18,"div",3)(19,"input",11),C("ngModelChange",function(i){return u(e.manualClass,i)||(e.manualClass=i),i}),m("keyup.enter",function(){return e.addClass()}),n(),o(20,"button",9),m("click",function(){return e.addClass()}),r(21,"Add Class"),n()()()()(),c(22,V,5,1,"div",12),n()),t&2&&(a(6),g("ngModel",e.selectedCategory),a(3),d("ngForOf",e.classCategories),a(),g("ngModel",e.selectedClass),d("disabled",!e.selectedCategory),a(3),d("ngForOf",e.getSelectedCategoryClasses()),a(),g("ngModel",e.customText),a(),d("disabled",!e.selectedClass),a(4),g("ngModel",e.manualClass),a(),d("disabled",!e.manualClass),a(2),d("ngIf",e.examples.length>0))},dependencies:[W,D,N,P,k,T,w,O,E,S],styles:[".elevation-demo[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}.input-section[_ngcontent-%COMP%]{background:#f5f5f5;padding:20px;border-radius:8px;margin-bottom:20px}.input-group[_ngcontent-%COMP%]{display:flex;gap:10px;margin-bottom:20px}input[_ngcontent-%COMP%]{padding:8px 12px;border:1px solid #ddd;border-radius:4px;flex:1}button[_ngcontent-%COMP%]{padding:8px 16px;background:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background:#0056b3}.quick-access[_ngcontent-%COMP%]{margin-top:20px}.button-group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#6c757d;font-size:12px}.examples-section[_ngcontent-%COMP%]{background:#fff;padding:20px;border-radius:8px;box-shadow:0 2px 4px #0000001a}.example-item[_ngcontent-%COMP%]{padding:20px;border:1px solid #eee;border-radius:4px;margin-bottom:10px}.example-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}code[_ngcontent-%COMP%]{background:#f8f9fa;padding:4px 8px;border-radius:4px;font-family:monospace}.remove-btn[_ngcontent-%COMP%]{background:#dc3545;width:24px;height:24px;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%}.elevation-example[_ngcontent-%COMP%]{padding:16px;background:#fff;min-height:50px;margin:1rem}.demo-container[_ngcontent-%COMP%]{padding:24px}.demo-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:32px;margin-bottom:48px}.demo-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.example-box[_ngcontent-%COMP%]{padding:24px;background:#fff;border-radius:8px;min-height:100px;display:flex;align-items:center;justify-content:center;text-align:center;font-size:14px;color:#666}h2[_ngcontent-%COMP%]{margin:32px 0 16px;padding-bottom:8px;border-bottom:1px solid #e5e7eb}"]})};export{F as ElevationDemoComponent};
