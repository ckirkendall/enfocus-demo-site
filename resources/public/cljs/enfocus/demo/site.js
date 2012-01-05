goog.provide('enfocus.demo.site');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('goog.dom');
enfocus.demo.site.scroll_to = (function scroll_to(){
return enfocus.core.chainable_standard.call(null,(function (nod){
return nod.scrollIntoView();
}));
});
enfocus.demo.site.reset_scroll = (function reset_scroll(){
return enfocus.core.chainable_standard.call(null,(function (nod){
return nod.scrollTop = 0;
}));
});
enfocus.demo.site.setup_pane = (function setup_pane(width,height){
var nods__2465__auto____11048 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11047){
enfocus.core.chainable_standard.call(null,(function (pnod__2612__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2465__auto____11050 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"),enfocus.core.en_fade_in.call(null,1000,20,null)));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11049){
return pnod11049;
}),nods__2465__auto____11050));
return enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_style.call(null,"﷐'display","inline"),enfocus.core.en_fade_in.call(null,1000,20,null));
})().call(null,pnod__2612__auto__);
}),1000);
})).call(null,enfocus.core.css_select.call(null,"",pnod11047,cljs.core.Vector.fromArray(["#menu"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.home_page).call(null,enfocus.core.css_select.call(null,"",pnod11047,cljs.core.Vector.fromArray(["#home-button"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.gstarted_page).call(null,enfocus.core.css_select.call(null,"",pnod11047,cljs.core.Vector.fromArray(["#gstarted-button"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_trans_page).call(null,enfocus.core.css_select.call(null,"",pnod11047,cljs.core.Vector.fromArray(["#doc-trans"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_events_page).call(null,enfocus.core.css_select.call(null,"",pnod11047,cljs.core.Vector.fromArray(["#doc-events"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_effects_page).call(null,enfocus.core.css_select.call(null,"",pnod11047,cljs.core.Vector.fromArray(["#doc-effects"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.doc_template_page).call(null,enfocus.core.css_select.call(null,"",pnod11047,cljs.core.Vector.fromArray(["#doc-remote"])));
(function (pnod__2634__auto__){
return enfocus.core.en_resize.call(null,5,height,500,20,null).call(null,pnod__2634__auto__,(function (pnod__2634__auto__){
return enfocus.core.en_resize.call(null,width,"﷐'curheight",500,20,null).call(null,pnod__2634__auto__,(function (pnod__2633__auto__){
return enfocus.core.en_content.call(null,enfocus.demo.site.home.call(null)).call(null,pnod__2633__auto__);
}));
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod11047,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod11047;
}),nods__2465__auto____11048));
return document;
});
enfocus.demo.site.resize_pane = (function resize_pane(width,height){
var nods__2465__auto____11052 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11051){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_resize.call(null,width,height,200,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod11051,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod11051;
}),nods__2465__auto____11052));
return document;
});
enfocus.demo.site.resize_content_pane = (function resize_content_pane(){
var size__11053 = goog.dom.getViewportSize.call(null);
var width__11054 = (size__11053.width - 40);
var height__11055 = (size__11053.height - 70);

return enfocus.demo.site.resize_pane.call(null,width__11054,height__11055);
});
enfocus.demo.site.init_content_pane = (function init_content_pane(){
var size__11058 = goog.dom.getViewportSize.call(null);
var width__11059 = (size__11058.width - 40);
var height__11060 = (size__11058.height - 70);

enfocus.demo.site.setup_pane.call(null,width__11059,height__11060);
enfocus.core.en_listen.call(null,"﷐'resize",enfocus.demo.site.resize_content_pane).call(null,window);
return window;
});
enfocus.demo.site.start = (function start(){
var nods__2465__auto____11062 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11061){
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.init_content_pane).call(null,enfocus.core.css_select.call(null,"",pnod11061,cljs.core.Vector.fromArray(["#inner-circle"])));
enfocus.core.en_listen.call(null,"﷐'mouseenter",(function (p1__11056_SHARP_){
var nods__2465__auto____11064 = enfocus.core.nodes__GT_coll.call(null,p1__11056_SHARP_.currentTarget);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11063){
enfocus.core.en_resize.call(null,"﷐'curwidth",115,500,20,null).call(null,enfocus.core.css_select.call(null,"",pnod11063,cljs.core.Vector.fromArray([".sub"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_add_class.call(null,"blur-highlight"),enfocus.core.chainable_standard.call(null,(function (pnod__2612__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2465__auto____11066 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_remove_class.call(null,"blur-highlight"));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11065){
return pnod11065;
}),nods__2465__auto____11066));
return enfocus.core.en_remove_class.call(null,"blur-highlight");
})().call(null,pnod__2612__auto__);
}),200);
}))).call(null,enfocus.core.css_select.call(null,"",pnod11063,cljs.core.Vector.fromArray(["h3"])));
return pnod11063;
}),nods__2465__auto____11064));
return p1__11056_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod11061,cljs.core.Vector.fromArray([".marea"])));
enfocus.core.en_listen.call(null,"﷐'mouseleave",(function (p1__11057_SHARP_){
var nods__2465__auto____11068 = enfocus.core.nodes__GT_coll.call(null,p1__11057_SHARP_.currentTarget);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11067){
enfocus.core.en_resize.call(null,"﷐'curwidth",0,500,20,null).call(null,enfocus.core.css_select.call(null,"",pnod11067,cljs.core.Vector.fromArray([".sub"])));
return pnod11067;
}),nods__2465__auto____11068));
return p1__11057_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod11061,cljs.core.Vector.fromArray([".marea"])));
return pnod11061;
}),nods__2465__auto____11062));
return document;
});
window.onload = enfocus.demo.site.start;
enfocus.core.load_remote_dom.call(null,"templates/home.html");
enfocus.demo.site.home = (function home(){
var vec__11071__11072 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/home.html");
})]));
var id_sym11069__11073 = cljs.core.nth.call(null,vec__11071__11072,0,null);
var pnod11070__11074 = cljs.core.nth.call(null,vec__11071__11072,1,null);
var pnod11070__11075 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod11070__11074):pnod11070__11074);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym11069__11073,pnod11070__11075);
return enfocus.core.remove_node_return_child.call(null,pnod11070__11075);
} else
{return pnod11070__11075;
}
});
enfocus.demo.site.home_page = (function home_page(){
var nods__2465__auto____11077 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11076){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.home.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod11076,cljs.core.Vector.fromArray(["#content-pane"])));
return pnod11076;
}),nods__2465__auto____11077));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/getting-started.html");
enfocus.demo.site.gstarted = (function gstarted(){
var vec__11081__11082 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/getting-started.html");
})]));
var id_sym11079__11083 = cljs.core.nth.call(null,vec__11081__11082,0,null);
var pnod11080__11084 = cljs.core.nth.call(null,vec__11081__11082,1,null);
var pnod11080__11085 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod11080__11084):pnod11080__11084);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym11079__11083,pnod11080__11085);
return enfocus.core.remove_node_return_child.call(null,pnod11080__11085);
} else
{return pnod11080__11085;
}
});
enfocus.demo.site.gstarted_page = (function gstarted_page(){
var nods__2465__auto____11087 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11086){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.gstarted.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod11086,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (p1__11078_SHARP_){
enfocus.core.en_content.call(null,"I have been clicked").call(null,p1__11078_SHARP_.currentTarget);
return p1__11078_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod11086,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11089 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11088){
(function (pnod__2634__auto__){
return enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,null).call(null,pnod__2634__auto__,(function (pnod__2633__auto__){
return enfocus.core.en_resize.call(null,5,"﷐'curheight",500,20,null).call(null,pnod__2633__auto__);
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod11088,cljs.core.Vector.fromArray(["#rz-demo"])));
return pnod11088;
}),nods__2465__auto____11089));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11086,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.clone_for_demo).call(null,enfocus.core.css_select.call(null,"",pnod11086,cljs.core.Vector.fromArray(["#button3"])));
return pnod11086;
}),nods__2465__auto____11087));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/standard-transforms.html");
enfocus.demo.site.doc_trans = (function doc_trans(){
var vec__11092__11093 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/standard-transforms.html");
})]));
var id_sym11090__11094 = cljs.core.nth.call(null,vec__11092__11093,0,null);
var pnod11091__11095 = cljs.core.nth.call(null,vec__11092__11093,1,null);
var pnod11091__11096 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod11091__11095):pnod11091__11095);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym11090__11094,pnod11091__11096);
return enfocus.core.remove_node_return_child.call(null,pnod11091__11096);
} else
{return pnod11091__11096;
}
});
enfocus.demo.site.content_demo = (function content_demo(){
var nods__2465__auto____11098 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11097){
enfocus.core.en_content.call(null,"I have been clicked").call(null,enfocus.core.css_select.call(null,"",pnod11097,cljs.core.Vector.fromArray(["#button1"])));
return pnod11097;
}),nods__2465__auto____11098));
return document;
});
enfocus.demo.site.html_content_demo = (function html_content_demo(){
var nods__2465__auto____11100 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11099){
enfocus.core.en_html_content.call(null,"<span style='color: #ff3333'>I replaced the text</span>").call(null,enfocus.core.css_select.call(null,"",pnod11099,cljs.core.Vector.fromArray(["#html-content-demo"])));
return pnod11099;
}),nods__2465__auto____11100));
return document;
});
enfocus.demo.site.set_attr_demo = (function set_attr_demo(){
var nods__2465__auto____11102 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11101){
enfocus.core.en_set_attr.call(null,"﷐'foo","bar").call(null,enfocus.core.css_select.call(null,"",pnod11101,cljs.core.Vector.fromArray(["#button3"])));
return pnod11101;
}),nods__2465__auto____11102));
return document;
});
enfocus.demo.site.remove_attr_demo = (function remove_attr_demo(){
var nods__2465__auto____11104 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11103){
enfocus.core.en_remove_attr.call(null,"﷐'foo").call(null,enfocus.core.css_select.call(null,"",pnod11103,cljs.core.Vector.fromArray(["#button4"])));
return pnod11103;
}),nods__2465__auto____11104));
return document;
});
enfocus.demo.site.add_class_demo = (function add_class_demo(){
var nods__2465__auto____11106 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11105){
enfocus.core.en_add_class.call(null,"highlight").call(null,enfocus.core.css_select.call(null,"",pnod11105,cljs.core.Vector.fromArray(["#button5"])));
return pnod11105;
}),nods__2465__auto____11106));
return document;
});
enfocus.demo.site.remove_class_demo = (function remove_class_demo(){
var nods__2465__auto____11108 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11107){
enfocus.core.en_remove_class.call(null,"highlight").call(null,enfocus.core.css_select.call(null,"",pnod11107,cljs.core.Vector.fromArray(["#button6"])));
return pnod11107;
}),nods__2465__auto____11108));
return document;
});
enfocus.demo.site.do_demo = (function do_demo(){
var nods__2465__auto____11110 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11109){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_set_attr.call(null,"﷐'foo","bar"),enfocus.core.en_add_class.call(null,"highlight")).call(null,enfocus.core.css_select.call(null,"",pnod11109,cljs.core.Vector.fromArray(["#button7"])));
return pnod11109;
}),nods__2465__auto____11110));
return document;
});
enfocus.demo.site.append_demo = (function append_demo(){
var nods__2465__auto____11112 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11111){
enfocus.core.en_append.call(null,":append").call(null,enfocus.core.css_select.call(null,"",pnod11111,cljs.core.Vector.fromArray(["#button8"])));
return pnod11111;
}),nods__2465__auto____11112));
return document;
});
enfocus.demo.site.prepend_demo = (function prepend_demo(){
var nods__2465__auto____11114 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11113){
enfocus.core.en_prepend.call(null,"prepend:").call(null,enfocus.core.css_select.call(null,"",pnod11113,cljs.core.Vector.fromArray(["#button9"])));
return pnod11113;
}),nods__2465__auto____11114));
return document;
});
enfocus.demo.site.after_demo = (function after_demo(){
var nods__2465__auto____11116 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11115){
enfocus.core.en_after.call(null,":after").call(null,enfocus.core.css_select.call(null,"",pnod11115,cljs.core.Vector.fromArray(["#button10"])));
return pnod11115;
}),nods__2465__auto____11116));
return document;
});
enfocus.demo.site.before_demo = (function before_demo(){
var nods__2465__auto____11118 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11117){
enfocus.core.en_before.call(null,"before:").call(null,enfocus.core.css_select.call(null,"",pnod11117,cljs.core.Vector.fromArray(["#button11"])));
return pnod11117;
}),nods__2465__auto____11118));
return document;
});
enfocus.demo.site.sub_demo = (function sub_demo(){
var nods__2465__auto____11120 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11119){
enfocus.core.en_substitute.call(null,"I replaced the button").call(null,enfocus.core.css_select.call(null,"",pnod11119,cljs.core.Vector.fromArray(["#button12"])));
return pnod11119;
}),nods__2465__auto____11120));
return document;
});
enfocus.demo.site.clone_for_demo = (function clone_for_demo(){
var fruit_data__11121 = cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":5,"pear":6});

var nods__2465__auto____11123 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11122){
enfocus.core.chainable_standard.call(null,(function (pnod__2562__auto__){
var div__2563__auto____11124 = enfocus.core.create_hidden_dom.call(null,document.createDocumentFragment());

enfocus.core.log_debug.call(null,pnod__2562__auto__);
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,cljs.core.vec.call(null,fruit_data__11121)));
var G__11125__11126 = cljs.core.seq.call(null,cljs.core.vec.call(null,fruit_data__11121));

if(cljs.core.truth_(G__11125__11126))
{var fr__11127 = cljs.core.first.call(null,G__11125__11126);
var G__11125__11128 = G__11125__11126;

while(true){
enfocus.core.en_append.call(null,pnod__2562__auto__.cloneNode(true)).call(null,div__2563__auto____11124);
div__2563__auto____11124;
var nods__2465__auto____11130 = enfocus.core.nodes__GT_coll.call(null,goog.dom.getLastElementChild.call(null,div__2563__auto____11124));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fr__11127,G__11125__11128){
return (function (pnod11129){
enfocus.core.en_content.call(null,cljs.core.first.call(null,fr__11127)).call(null,enfocus.core.css_select.call(null,"",pnod11129,cljs.core.Vector.fromArray(["*:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.second.call(null,fr__11127))).call(null,enfocus.core.css_select.call(null,"",pnod11129,cljs.core.Vector.fromArray(["*:last-child"])));
return pnod11129;
});})(fr__11127,G__11125__11128))
,nods__2465__auto____11130));
goog.dom.getLastElementChild.call(null,div__2563__auto____11124);
var temp__3698__auto____11131 = cljs.core.next.call(null,G__11125__11128);

if(cljs.core.truth_(temp__3698__auto____11131))
{var G__11125__11132 = temp__3698__auto____11131;

{
var G__11133 = cljs.core.first.call(null,G__11125__11132);
var G__11134 = G__11125__11132;
fr__11127 = G__11133;
G__11125__11128 = G__11134;
continue;
}
} else
{}
break;
}
} else
{}
enfocus.core.log_debug.call(null,div__2563__auto____11124);
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,enfocus.core.remove_node_return_child.call(null,div__2563__auto____11124)),enfocus.core.en_remove_node.call(null)).call(null,pnod__2562__auto__);
return pnod__2562__auto__;
})).call(null,enfocus.core.css_select.call(null,"",pnod11122,cljs.core.Vector.fromArray(["#clone-for-demo tbody > tr:first-child"])));
return pnod11122;
}),nods__2465__auto____11123));
return document;
});
enfocus.demo.site.wrap_demo = (function wrap_demo(){
var nods__2465__auto____11136 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11135){
enfocus.core.en_wrap.call(null,"﷐'span",cljs.core.ObjMap.fromObject(["﷐'class"],{"﷐'class":"highlight"})).call(null,enfocus.core.css_select.call(null,"",pnod11135,cljs.core.Vector.fromArray(["#button14"])));
return pnod11135;
}),nods__2465__auto____11136));
return document;
});
enfocus.demo.site.unwrap_demo = (function unwrap_demo(){
var nods__2465__auto____11138 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11137){
enfocus.core.en_unwrap.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11137,cljs.core.Vector.fromArray(["#button15"])));
return pnod11137;
}),nods__2465__auto____11138));
return document;
});
enfocus.demo.site.set_style_demo = (function set_style_demo(){
var nods__2465__auto____11140 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11139){
enfocus.core.en_set_style.call(null,"﷐'border","2px solid blue").call(null,enfocus.core.css_select.call(null,"",pnod11139,cljs.core.Vector.fromArray(["#button16"])));
return pnod11139;
}),nods__2465__auto____11140));
return document;
});
enfocus.demo.site.remove_style_demo = (function remove_style_demo(){
var nods__2465__auto____11142 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11141){
enfocus.core.en_remove_style.call(null,"﷐'border").call(null,enfocus.core.css_select.call(null,"",pnod11141,cljs.core.Vector.fromArray(["#button17"])));
return pnod11141;
}),nods__2465__auto____11142));
return document;
});
enfocus.demo.site.doc_trans_page = (function doc_trans_page(){
var nods__2465__auto____11144 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11143){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_trans.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11146 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11145){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11145,cljs.core.Vector.fromArray(["#doc-at"])));
return pnod11145;
}),nods__2465__auto____11146));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#at-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11148 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11147){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11147,cljs.core.Vector.fromArray(["#doc-content"])));
return pnod11147;
}),nods__2465__auto____11148));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#content-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11150 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11149){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11149,cljs.core.Vector.fromArray(["#doc-html-content"])));
return pnod11149;
}),nods__2465__auto____11150));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#html-content-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11152 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11151){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11151,cljs.core.Vector.fromArray(["#doc-set-attr"])));
return pnod11151;
}),nods__2465__auto____11152));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#set-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11154 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11153){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11153,cljs.core.Vector.fromArray(["#doc-remove-attr"])));
return pnod11153;
}),nods__2465__auto____11154));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#remove-attr-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11156 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11155){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11155,cljs.core.Vector.fromArray(["#doc-add-class"])));
return pnod11155;
}),nods__2465__auto____11156));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#add-class-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11158 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11157){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11157,cljs.core.Vector.fromArray(["#doc-remove-class"])));
return pnod11157;
}),nods__2465__auto____11158));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#remove-class-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11160 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11159){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11159,cljs.core.Vector.fromArray(["#doc-do"])));
return pnod11159;
}),nods__2465__auto____11160));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#do-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11162 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11161){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11161,cljs.core.Vector.fromArray(["#doc-append"])));
return pnod11161;
}),nods__2465__auto____11162));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#append-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11164 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11163){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11163,cljs.core.Vector.fromArray(["#doc-prepend"])));
return pnod11163;
}),nods__2465__auto____11164));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#prepend-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11166 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11165){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11165,cljs.core.Vector.fromArray(["#doc-after"])));
return pnod11165;
}),nods__2465__auto____11166));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#after-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11168 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11167){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11167,cljs.core.Vector.fromArray(["#doc-before"])));
return pnod11167;
}),nods__2465__auto____11168));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#before-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11170 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11169){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11169,cljs.core.Vector.fromArray(["#doc-sub"])));
return pnod11169;
}),nods__2465__auto____11170));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#substitute-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11172 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11171){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11171,cljs.core.Vector.fromArray(["#doc-clone-for"])));
return pnod11171;
}),nods__2465__auto____11172));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#clone-for-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11174 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11173){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11173,cljs.core.Vector.fromArray(["#doc-wrap"])));
return pnod11173;
}),nods__2465__auto____11174));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#wrap-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11176 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11175){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11175,cljs.core.Vector.fromArray(["#doc-unwrap"])));
return pnod11175;
}),nods__2465__auto____11176));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#unwrap-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11178 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11177){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11177,cljs.core.Vector.fromArray(["#doc-set-style"])));
return pnod11177;
}),nods__2465__auto____11178));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#set-style-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11180 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11179){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11179,cljs.core.Vector.fromArray(["#doc-remove-style"])));
return pnod11179;
}),nods__2465__auto____11180));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#remove-style-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.content_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.html_content_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.set_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_attr_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button4"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.add_class_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button5"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_class_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button6"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.do_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button7"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.append_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button8"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.prepend_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button9"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.after_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button10"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.before_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button11"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.sub_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button12"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.clone_for_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button13"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.wrap_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button14"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.unwrap_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button15"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.set_style_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button16"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_style_demo).call(null,enfocus.core.css_select.call(null,"",pnod11143,cljs.core.Vector.fromArray(["#button17"])));
return pnod11143;
}),nods__2465__auto____11144));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/handling-events.html");
enfocus.demo.site.doc_event = (function doc_event(){
var vec__11183__11184 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/handling-events.html");
})]));
var id_sym11181__11185 = cljs.core.nth.call(null,vec__11183__11184,0,null);
var pnod11182__11186 = cljs.core.nth.call(null,vec__11183__11184,1,null);
var pnod11182__11187 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod11182__11186):pnod11182__11186);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym11181__11185,pnod11182__11187);
return enfocus.core.remove_node_return_child.call(null,pnod11182__11187);
} else
{return pnod11182__11187;
}
});
enfocus.demo.site.remove_demo = (function remove_demo(){
var nods__2465__auto____11192 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11191){
enfocus.core.en_remove_listener.call(null,"﷐'mouseenter","﷐'mouseleave").call(null,enfocus.core.css_select.call(null,"",pnod11191,cljs.core.Vector.fromArray(["#remove-demo"])));
return pnod11191;
}),nods__2465__auto____11192));
return document;
});
enfocus.demo.site.doc_events_page = (function doc_events_page(){
var nods__2465__auto____11194 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11193){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_event.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod11193,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11196 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11195){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11195,cljs.core.Vector.fromArray(["#doc-listen"])));
return pnod11195;
}),nods__2465__auto____11196));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11193,cljs.core.Vector.fromArray(["#listen-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11198 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11197){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11197,cljs.core.Vector.fromArray(["#doc-remove"])));
return pnod11197;
}),nods__2465__auto____11198));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11193,cljs.core.Vector.fromArray(["#remove-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11200 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11199){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11199,cljs.core.Vector.fromArray(["#doc-support"])));
return pnod11199;
}),nods__2465__auto____11200));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11193,cljs.core.Vector.fromArray(["#support-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (p1__11188_SHARP_){
enfocus.core.en_content.call(null,"I have been replaced").call(null,p1__11188_SHARP_.currentTarget);
return p1__11188_SHARP_.currentTarget;
})).call(null,enfocus.core.css_select.call(null,"",pnod11193,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_listen.call(null,"﷐'mouseenter",(function (p1__11189_SHARP_){
enfocus.core.en_add_class.call(null,"highlight").call(null,p1__11189_SHARP_.currentTarget);
return p1__11189_SHARP_.currentTarget;
})),enfocus.core.en_listen.call(null,"﷐'mouseleave",(function (p1__11190_SHARP_){
enfocus.core.en_remove_class.call(null,"highlight").call(null,p1__11190_SHARP_.currentTarget);
return p1__11190_SHARP_.currentTarget;
}))).call(null,enfocus.core.css_select.call(null,"",pnod11193,cljs.core.Vector.fromArray(["#remove-demo"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.remove_demo).call(null,enfocus.core.css_select.call(null,"",pnod11193,cljs.core.Vector.fromArray(["#button2"])));
return pnod11193;
}),nods__2465__auto____11194));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/effects-timing.html");
enfocus.demo.site.doc_effect = (function doc_effect(){
var vec__11203__11204 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/effects-timing.html");
})]));
var id_sym11201__11205 = cljs.core.nth.call(null,vec__11203__11204,0,null);
var pnod11202__11206 = cljs.core.nth.call(null,vec__11203__11204,1,null);
var pnod11202__11207 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod11202__11206):pnod11202__11206);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym11201__11205,pnod11202__11207);
return enfocus.core.remove_node_return_child.call(null,pnod11202__11207);
} else
{return pnod11202__11207;
}
});
enfocus.demo.site.resize_demo = (function resize_demo(){
var nods__2465__auto____11209 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11208){
enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,enfocus.core.en_resize.call(null,5,"﷐'curheight",500,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod11208,cljs.core.Vector.fromArray(["#rz-demo"])));
return pnod11208;
}),nods__2465__auto____11209));
return document;
});
enfocus.demo.site.move_demo = (function move_demo(){
var nods__2465__auto____11211 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11210){
enfocus.core.en_move.call(null,300,"﷐'cury",500,20,enfocus.core.en_move.call(null,-20,"﷐'cury",500,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod11210,cljs.core.Vector.fromArray(["#mv-demo"])));
return pnod11210;
}),nods__2465__auto____11211));
return document;
});
enfocus.demo.site.fade_demo = (function fade_demo(){
var nods__2465__auto____11213 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11212){
enfocus.core.en_fade_out.call(null,500,20,enfocus.core.en_fade_in.call(null,500,20,null)).call(null,enfocus.core.css_select.call(null,"",pnod11212,cljs.core.Vector.fromArray(["#fade-demo"])));
return pnod11212;
}),nods__2465__auto____11213));
return document;
});
enfocus.demo.site.delay_demo = (function delay_demo(){
var nods__2465__auto____11215 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11214){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,null),enfocus.core.chainable_standard.call(null,(function (pnod__2612__auto__){
return enfocus.core.setTimeout.call(null,(function (){
return (function (){var nods__2465__auto____11217 = enfocus.core.nodes__GT_coll.call(null,enfocus.core.en_resize.call(null,50,"﷐'curheight",500,20,null));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11216){
return pnod11216;
}),nods__2465__auto____11217));
return enfocus.core.en_resize.call(null,50,"﷐'curheight",500,20,null);
})().call(null,pnod__2612__auto__);
}),2000);
}))).call(null,enfocus.core.css_select.call(null,"",pnod11214,cljs.core.Vector.fromArray(["#delay-demo"])));
return pnod11214;
}),nods__2465__auto____11215));
return document;
});
enfocus.demo.site.chain_demo = (function chain_demo(){
var nods__2465__auto____11219 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11218){
(function (pnod__2634__auto__){
return enfocus.core.en_resize.call(null,200,"﷐'curheight",500,20,null).call(null,pnod__2634__auto__,(function (pnod__2633__auto__){
return enfocus.core.en_resize.call(null,5,"﷐'curheight",500,20,null).call(null,pnod__2633__auto__);
}));
}).call(null,enfocus.core.css_select.call(null,"",pnod11218,cljs.core.Vector.fromArray(["#chain-demo"])));
return pnod11218;
}),nods__2465__auto____11219));
return document;
});
enfocus.demo.site.doc_effects_page = (function doc_effects_page(){
var nods__2465__auto____11221 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11220){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_effect.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod11220,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11223 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11222){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11222,cljs.core.Vector.fromArray(["#doc-resize"])));
return pnod11222;
}),nods__2465__auto____11223));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11220,cljs.core.Vector.fromArray(["#resize-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11225 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11224){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11224,cljs.core.Vector.fromArray(["#doc-move"])));
return pnod11224;
}),nods__2465__auto____11225));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11220,cljs.core.Vector.fromArray(["#move-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11227 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11226){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11226,cljs.core.Vector.fromArray(["#doc-fade"])));
return pnod11226;
}),nods__2465__auto____11227));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11220,cljs.core.Vector.fromArray(["#fade-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11229 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11228){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11228,cljs.core.Vector.fromArray(["#doc-delay"])));
return pnod11228;
}),nods__2465__auto____11229));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11220,cljs.core.Vector.fromArray(["#delay-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11231 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11230){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11230,cljs.core.Vector.fromArray(["#doc-chain"])));
return pnod11230;
}),nods__2465__auto____11231));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11220,cljs.core.Vector.fromArray(["#chain-link"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.resize_demo).call(null,enfocus.core.css_select.call(null,"",pnod11220,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.move_demo).call(null,enfocus.core.css_select.call(null,"",pnod11220,cljs.core.Vector.fromArray(["#button2"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.fade_demo).call(null,enfocus.core.css_select.call(null,"",pnod11220,cljs.core.Vector.fromArray(["#button3"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.delay_demo).call(null,enfocus.core.css_select.call(null,"",pnod11220,cljs.core.Vector.fromArray(["#button4"])));
enfocus.core.en_listen.call(null,"﷐'click",enfocus.demo.site.chain_demo).call(null,enfocus.core.css_select.call(null,"",pnod11220,cljs.core.Vector.fromArray(["#button5"])));
return pnod11220;
}),nods__2465__auto____11221));
return document;
});
enfocus.core.load_remote_dom.call(null,"templates/templates-snippets.html");
enfocus.demo.site.doc_template = (function doc_template(){
var vec__11234__11235 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/templates-snippets.html");
})]));
var id_sym11232__11236 = cljs.core.nth.call(null,vec__11234__11235,0,null);
var pnod11233__11237 = cljs.core.nth.call(null,vec__11234__11235,1,null);
var pnod11233__11238 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod11233__11237):pnod11233__11237);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym11232__11236,pnod11233__11238);
return enfocus.core.remove_node_return_child.call(null,pnod11233__11238);
} else
{return pnod11233__11238;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template-demo.html");
enfocus.demo.site.template_demo = (function template_demo(fruit_data){
var vec__11241__11242 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template-demo.html");
})]));
var id_sym11239__11243 = cljs.core.nth.call(null,vec__11241__11242,0,null);
var pnod11240__11244 = cljs.core.nth.call(null,vec__11241__11242,1,null);
var pnod11240__11245 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod11240__11244):pnod11240__11244);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym11239__11243,pnod11240__11245,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym11239__11243,pnod11240__11245,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.en_remove_node.call(null).call(null,enfocus.core.css_select.call(null,id_sym11239__11243,pnod11240__11245,cljs.core.Vector.fromArray(["tbody > tr:not(:first-child)"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,fruit_data)))).call(null,enfocus.core.css_select.call(null,id_sym11239__11243,pnod11240__11245,cljs.core.Vector.fromArray(["tfoot tr > *:last-child"])));
enfocus.core.chainable_standard.call(null,(function (pnod__2562__auto__){
var div__2563__auto____11246 = enfocus.core.create_hidden_dom.call(null,document.createDocumentFragment());

enfocus.core.log_debug.call(null,pnod__2562__auto__);
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,cljs.core.vec.call(null,fruit_data)));
var G__11247__11248 = cljs.core.seq.call(null,cljs.core.vec.call(null,fruit_data));

if(cljs.core.truth_(G__11247__11248))
{var fr__11249 = cljs.core.first.call(null,G__11247__11248);
var G__11247__11250 = G__11247__11248;

while(true){
enfocus.core.en_append.call(null,pnod__2562__auto__.cloneNode(true)).call(null,div__2563__auto____11246);
div__2563__auto____11246;
var nods__2465__auto____11252 = enfocus.core.nodes__GT_coll.call(null,goog.dom.getLastElementChild.call(null,div__2563__auto____11246));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fr__11249,G__11247__11250){
return (function (pnod11251){
enfocus.core.en_content.call(null,cljs.core.first.call(null,fr__11249)).call(null,enfocus.core.css_select.call(null,"",pnod11251,cljs.core.Vector.fromArray(["*:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.second.call(null,fr__11249))).call(null,enfocus.core.css_select.call(null,"",pnod11251,cljs.core.Vector.fromArray(["*:last-child"])));
return pnod11251;
});})(fr__11249,G__11247__11250))
,nods__2465__auto____11252));
goog.dom.getLastElementChild.call(null,div__2563__auto____11246);
var temp__3698__auto____11253 = cljs.core.next.call(null,G__11247__11250);

if(cljs.core.truth_(temp__3698__auto____11253))
{var G__11247__11254 = temp__3698__auto____11253;

{
var G__11255 = cljs.core.first.call(null,G__11247__11254);
var G__11256 = G__11247__11254;
fr__11249 = G__11255;
G__11247__11250 = G__11256;
continue;
}
} else
{}
break;
}
} else
{}
enfocus.core.log_debug.call(null,div__2563__auto____11246);
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,enfocus.core.remove_node_return_child.call(null,div__2563__auto____11246)),enfocus.core.en_remove_node.call(null)).call(null,pnod__2562__auto__);
return pnod__2562__auto__;
})).call(null,enfocus.core.css_select.call(null,id_sym11239__11243,pnod11240__11245,cljs.core.Vector.fromArray(["tbody > tr:first-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym11239__11243,pnod11240__11245);
return enfocus.core.remove_node_return_child.call(null,pnod11240__11245);
} else
{return pnod11240__11245;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template-demo.html");
enfocus.demo.site.snippet2 = (function snippet2(fruit,quantity){
var vec__11260__11261 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template-demo.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})]));
var id_sym11258__11262 = cljs.core.nth.call(null,vec__11260__11261,0,null);
var pnod11259__11263 = cljs.core.nth.call(null,vec__11260__11261,1,null);
var pnod11259__11264 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod11259__11263):pnod11259__11263);

enfocus.core.en_content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym11258__11262,pnod11259__11264,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym11258__11262,pnod11259__11264,cljs.core.Vector.fromArray(["tr > *:last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym11258__11262,pnod11259__11264);
return enfocus.core.remove_node_return_child.call(null,pnod11259__11264);
} else
{return pnod11259__11264;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template-demo.html");
enfocus.demo.site.template_demo2 = (function template_demo2(fruit_data){
var vec__11267__11268 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template-demo.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template-demo.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template-demo.html");
})]));
var id_sym11265__11269 = cljs.core.nth.call(null,vec__11267__11268,0,null);
var pnod11266__11270 = cljs.core.nth.call(null,vec__11267__11268,1,null);
var pnod11266__11271 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod11266__11270):pnod11266__11270);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym11265__11269,pnod11266__11271,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym11265__11269,pnod11266__11271,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,fruit_data)))).call(null,enfocus.core.css_select.call(null,id_sym11265__11269,pnod11266__11271,cljs.core.Vector.fromArray(["tfoot tr > *:last-child"])));
enfocus.core.en_content.call(null,cljs.core.map.call(null,(function (p1__11257_SHARP_){
return enfocus.demo.site.snippet2.call(null,p1__11257_SHARP_,fruit_data.call(null,p1__11257_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym11265__11269,pnod11266__11271,cljs.core.Vector.fromArray(["tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym11265__11269,pnod11266__11271);
return enfocus.core.remove_node_return_child.call(null,pnod11266__11271);
} else
{return pnod11266__11271;
}
});
enfocus.demo.site.doc_template_page = (function doc_template_page(){
var nods__2465__auto____11273 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11272){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,enfocus.demo.site.doc_template.call(null)),enfocus.demo.site.reset_scroll.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod11272,cljs.core.Vector.fromArray(["#content-pane"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11275 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11274){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11274,cljs.core.Vector.fromArray(["#doc-template"])));
return pnod11274;
}),nods__2465__auto____11275));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11272,cljs.core.Vector.fromArray(["#template-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11277 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11276){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11276,cljs.core.Vector.fromArray(["#doc-snippet"])));
return pnod11276;
}),nods__2465__auto____11277));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11272,cljs.core.Vector.fromArray(["#snippet-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11279 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11278){
enfocus.demo.site.scroll_to.call(null).call(null,enfocus.core.css_select.call(null,"",pnod11278,cljs.core.Vector.fromArray(["#doc-load"])));
return pnod11278;
}),nods__2465__auto____11279));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11272,cljs.core.Vector.fromArray(["#load-link"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11281 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11280){
enfocus.core.en_content.call(null,enfocus.demo.site.template_demo.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":8,"pear":9}))).call(null,enfocus.core.css_select.call(null,"",pnod11280,cljs.core.Vector.fromArray(["#template-demo"])));
return pnod11280;
}),nods__2465__auto____11281));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11272,cljs.core.Vector.fromArray(["#button1"])));
enfocus.core.en_listen.call(null,"﷐'click",(function (){
var nods__2465__auto____11283 = enfocus.core.nodes__GT_coll.call(null,document);

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod11282){
enfocus.core.en_content.call(null,enfocus.demo.site.template_demo2.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":6,"pear":5}))).call(null,enfocus.core.css_select.call(null,"",pnod11282,cljs.core.Vector.fromArray(["#snippet-demo"])));
return pnod11282;
}),nods__2465__auto____11283));
return document;
})).call(null,enfocus.core.css_select.call(null,"",pnod11272,cljs.core.Vector.fromArray(["#button2"])));
return pnod11272;
}),nods__2465__auto____11273));
return document;
});
