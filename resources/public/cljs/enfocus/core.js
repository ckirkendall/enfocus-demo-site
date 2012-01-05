goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.debug.Logger');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.net.XhrIo');
goog.require('goog.debug');
enfocus.core.debug = true;
enfocus.core.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____2683 = enfocus.core.debug;

if(cljs.core.truth_(and__3546__auto____2683))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____2683;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){
return (new goog.async.Delay(func,ttime)).start();
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
return goog.dom.isNodeLike.call(null,tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){
return cljs.core.instance_QMARK_.call(null,NodeList,tst);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,nl)))
{return cljs.core.Vector.fromArray([]);
} else
{if(cljs.core.truth_(enfocus.core.node_QMARK_.call(null,nl)))
{return cljs.core.Vector.fromArray([nl]);
} else
{if(cljs.core.truth_((window === nl)))
{return cljs.core.Vector.fromArray([nl]);
} else
{if(cljs.core.truth_((function (){var or__3548__auto____2685 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3548__auto____2685))
{return or__3548__auto____2685;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__385__auto____2690 = (function iter__2686(s__2687){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2687__2688 = s__2687;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2687__2688)))
{var x__2689 = cljs.core.first.call(null,s__2687__2688);

return cljs.core.cons.call(null,(nl[x__2689]),iter__2686.call(null,cljs.core.rest.call(null,s__2687__2688)));
} else
{return null;
}
break;
}
})));
});

return iter__385__auto____2690.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__2684_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__2684_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__2684_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__2684_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a javascript object
* Returns the original object (js-set obj :attr value)
*/
enfocus.core.style_set = (function style_set(obj,values){
var G__2691__2692 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

if(cljs.core.truth_(G__2691__2692))
{var G__2694__2696 = cljs.core.first.call(null,G__2691__2692);
var vec__2695__2697 = G__2694__2696;
var attr__2698 = cljs.core.nth.call(null,vec__2695__2697,0,null);
var value__2699 = cljs.core.nth.call(null,vec__2695__2697,1,null);
var G__2691__2700 = G__2691__2692;

var G__2694__2701 = G__2694__2696;
var G__2691__2702 = G__2691__2700;

while(true){
var vec__2703__2704 = G__2694__2701;
var attr__2705 = cljs.core.nth.call(null,vec__2703__2704,0,null);
var value__2706 = cljs.core.nth.call(null,vec__2703__2704,1,null);
var G__2691__2707 = G__2691__2702;

goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__2705),value__2706);
var temp__3698__auto____2708 = cljs.core.next.call(null,G__2691__2707);

if(cljs.core.truth_(temp__3698__auto____2708))
{var G__2691__2709 = temp__3698__auto____2708;

{
var G__2710 = cljs.core.first.call(null,G__2691__2709);
var G__2711 = G__2691__2709;
G__2694__2701 = G__2710;
G__2691__2702 = G__2711;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){
var G__2712__2713 = cljs.core.seq.call(null,values);

if(cljs.core.truth_(G__2712__2713))
{var attr__2714 = cljs.core.first.call(null,G__2712__2713);
var G__2712__2715 = G__2712__2713;

while(true){
if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__2714),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr__2714));
}
var temp__3698__auto____2716 = cljs.core.next.call(null,G__2712__2715);

if(cljs.core.truth_(temp__3698__auto____2716))
{var G__2712__2717 = temp__3698__auto____2716;

{
var G__2718 = cljs.core.first.call(null,G__2712__2717);
var G__2719 = G__2712__2717;
attr__2714 = G__2718;
G__2712__2715 = G__2719;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){
return cljs.core.str.call(null,"__ef_effect_",etype);
});
enfocus.core.get_mills = (function get_mills(){
return (new Date()).getMilliseconds();
});
/**
* returns true if the node(child) is a child of parent
*/
enfocus.core.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.truth_(cljs.core.not.call(null,child)))
{return false;
} else
{if(cljs.core.truth_((parent === child)))
{return false;
} else
{if(cljs.core.truth_((child.parentNode === parent)))
{return true;
} else
{if(cljs.core.truth_("﷐'else"))
{{
var G__2720 = parent;
var G__2721 = child.parentNode;
parent = G__2720;
child = G__2721;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of
* :mouseenter and :mouseleave events
*/
enfocus.core.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re__2722 = e.relatedTarget;
var this$__2723 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____2724 = cljs.core.not.call(null,(re__2722 === this$__2723));

if(cljs.core.truth_(and__3546__auto____2724))
{return cljs.core.not.call(null,enfocus.core.child_of_QMARK_.call(null,this$__2723,re__2722));
} else
{return and__3546__auto____2724;
}
})()))
{return func.call(null,e);
} else
{return null;
}
});
});
enfocus.core.pix_round = (function pix_round(step){
if(cljs.core.truth_((step < 0)))
{return Math.floor.call(null,step);
} else
{return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2744 = (function (elem,ats){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,ats)))
{var G__2725__2726 = cljs.core.seq.call(null,ats);

if(cljs.core.truth_(G__2725__2726))
{var G__2728__2730 = cljs.core.first.call(null,G__2725__2726);
var vec__2729__2731 = G__2728__2730;
var k__2732 = cljs.core.nth.call(null,vec__2729__2731,0,null);
var v__2733 = cljs.core.nth.call(null,vec__2729__2731,1,null);
var G__2725__2734 = G__2725__2726;

var G__2728__2735 = G__2728__2730;
var G__2725__2736 = G__2725__2734;

while(true){
var vec__2737__2738 = G__2728__2735;
var k__2739 = cljs.core.nth.call(null,vec__2737__2738,0,null);
var v__2740 = cljs.core.nth.call(null,vec__2737__2738,1,null);
var G__2725__2741 = G__2725__2736;

add_map_attrs.call(null,elem,k__2739,v__2740);
var temp__3698__auto____2742 = cljs.core.next.call(null,G__2725__2741);

if(cljs.core.truth_(temp__3698__auto____2742))
{var G__2725__2743 = temp__3698__auto____2742;

{
var G__2747 = cljs.core.first.call(null,G__2725__2743);
var G__2748 = G__2725__2743;
G__2728__2735 = G__2747;
G__2725__2736 = G__2748;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__2745 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case  2 :
return add_map_attrs__2744.call(this,elem,k);
case  3 :
return add_map_attrs__2745.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is
* loaded and decremented when it is added to the dom
* cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.hide_style = cljs.core.ObjMap.fromObject(["style"],{"style":"display: none; width: 0px; height: 0px"}).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this
* has to be done because css selectors do not work unless we have
* it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__2749 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__2749.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__2749);
return div__2749;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__2750 = div.childNodes;
var frag__2751 = document.createDocumentFragment();

goog.dom.append.call(null,frag__2751,child__2750);
goog.dom.removeNode.call(null,div);
return frag__2751;
});
/**
* replaces all the ids in a string html fragement/template
* with a generated symbol appended on to a existing id
* this is done to make sure we don't have id colisions
* during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__2753 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__2754 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__2754),text.replace(re__2753,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__2754,c,d);
}))]);
});
/**
* before adding the transformed dom back into the live dom we
* reset the ids back to their original values
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__2755 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__2756 = enfocus.core.nodes__GT_coll.call(null,id_nodes__2755);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2752_SHARP_){
var id__2757 = p1__2752_SHARP_.getAttribute("id");
var rid__2758 = id__2757.replace(sym,"");

return p1__2752_SHARP_.setAttribute("id",rid__2758);
}),nod_col__2756));
});
/**
* loads a remote file into the cache, before adding to the
* cache we replace the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__2759 = (new goog.net.XhrIo());
var callback__2769 = (function (req){
var text__2761 = req.getResponseText();
var vec__2760__2762 = enfocus.core.replace_ids.call(null,text__2761);
var sym__2763 = cljs.core.nth.call(null,vec__2760__2762,0,null);
var txt__2764 = cljs.core.nth.call(null,vec__2760__2762,1,null);
var data__2765 = goog.dom.htmlToDocumentFragment.call(null,txt__2764);
var body__2766 = cljs.core.first.call(null,enfocus.core.nodes__GT_coll.call(null,enfocus.core.css_select.call(null,data__2765,"body")));

if(cljs.core.truth_(body__2766))
{var frag__2767 = document.createDocumentFragment();
var childs__2768 = frag__2767.childNodes;

goog.dom.append.call(null,frag__2767,childs__2768);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__2763,frag__2767]));
} else
{return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__2763,data__2765]));
}
});

goog.events.listen.call(null,req__2759,goog.net.EventType.COMPLETE,(function (){
callback__2769.call(null,req__2759);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__2759.send(uri,"GET");
} else
{return null;
}
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__2770 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__2770))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__2770),cljs.core.second.call(null,nod__2770).cloneNode(true)]);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the
* cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__2771 = enfocus.core.create_sel_str.call(null,sel);
var cache__2772 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__2771)));

if(cljs.core.truth_(cache__2772))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__2772),cljs.core.second.call(null,cache__2772).cloneNode(true)]);
} else
{var vec__2773__2774 = enfocus.core.get_cached_dom.call(null,uri);
var sym__2775 = cljs.core.nth.call(null,vec__2773__2774,0,null);
var tdom__2776 = cljs.core.nth.call(null,vec__2773__2774,1,null);
var dom__2777 = enfocus.core.create_hidden_dom.call(null,tdom__2776);
var tsnip__2778 = enfocus.core.css_select.call(null,dom__2777,sel_str__2771);
var snip__2779 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__2778))?cljs.core.first.call(null,tsnip__2778):tsnip__2778);

enfocus.core.remove_node_return_child.call(null,dom__2777);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__2771),cljs.core.Vector.fromArray([sym__2775,snip__2779]));
return cljs.core.Vector.fromArray([sym__2775,snip__2779]);
}
});
/**
* takes a function an returns a function that
* applys a given function on all nodes returned
* by a given selector
*/
enfocus.core.multi_node_proc = (function() {
var multi_node_proc = null;
var multi_node_proc__2782 = (function (func){
return multi_node_proc.call(null,func,null);
});
var multi_node_proc__2783 = (function (func,callback1){
return (function() {
var trans = null;
var trans__2785 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__2786 = (function (pnodes,callback2){
var pnod_col__2780 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__2781 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__2780));

return cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__2780));
});
trans = function(pnodes,callback2){
switch(arguments.length){
case  1 :
return trans__2785.call(this,pnodes);
case  2 :
return trans__2786.call(this,pnodes,callback2);
}
throw('Invalid arity: ' + arguments.length);
};
return trans;
})()
});
multi_node_proc = function(func,callback1){
switch(arguments.length){
case  1 :
return multi_node_proc__2782.call(this,func);
case  2 :
return multi_node_proc__2783.call(this,func,callback1);
}
throw('Invalid arity: ' + arguments.length);
};
return multi_node_proc;
})()
;
/**
* takes a function an returns a function that
* applys a given function on all nodes returned
* by a given selector
*/
enfocus.core.chainable_standard = (function chainable_standard(func){
return (function() {
var trans = null;
var trans__2790 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__2791 = (function (pnodes,chain){
var pnod_col__2789 = enfocus.core.nodes__GT_coll.call(null,pnodes);

cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__2789));
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__2790.call(this,pnodes);
case  2 :
return trans__2791.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
return trans;
})()
});
/**
* takes a function an returns a function that
* applys a given function on all nodes returned
* by a given selector
*/
enfocus.core.chainable_effect = (function chainable_effect(func,callback){
return (function() {
var trans = null;
var trans__2797 = (function (pnodes){
return trans.call(null,pnodes,null);
});
var trans__2798 = (function (pnodes,chain){
var pnod_col__2794 = enfocus.core.nodes__GT_coll.call(null,pnodes);
var cnt__2795 = cljs.core.atom.call(null,cljs.core.count.call(null,pnod_col__2794));
var partial_cback__2796 = (function (){
cljs.core.swap_BANG_.call(null,cnt__2795,cljs.core.dec);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,cnt__2795))))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,callback))))
{callback.call(null,pnodes);
} else
{}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,chain))))
{return chain.call(null,pnodes);
} else
{return null;
}
} else
{return null;
}
});

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2788_SHARP_){
return func.call(null,p1__2788_SHARP_,partial_cback__2796);
}),pnod_col__2794));
});
trans = function(pnodes,chain){
switch(arguments.length){
case  1 :
return trans__2797.call(this,pnodes);
case  2 :
return trans__2798.call(this,pnodes,chain);
}
throw('Invalid arity: ' + arguments.length);
};
return trans;
})()
});
/**
* HOF to remove the duplicate code in transformation that
* handle creating a fragment and applying it in some way
* to the selected node
*/
enfocus.core.content_based_trans = (function content_based_trans(values,func){
var fnodes__2800 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__2801 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2793_SHARP_){
return goog.dom.appendChild.call(null,frag__2801,p1__2793_SHARP_.cloneNode(true));
}),fnodes__2800));
return func.call(null,pnod,frag__2801);
}));
});
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_content = (function() { 
var en_content__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
goog.dom.removeChildren.call(null,pnod);
return goog.dom.appendChild.call(null,pnod,frag);
}));
};
var en_content = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_content__delegate.call(this, values);
};
en_content.cljs$lang$maxFixedArity = 0;
en_content.cljs$lang$applyTo = (function (arglist__2802){
var values = cljs.core.seq( arglist__2802 );;
return en_content__delegate.call(this, values);
});
return en_content;
})()
;
/**
* Replaces the content of the element with the dom structure
* represented by the html string passed
*/
enfocus.core.en_html_content = (function en_html_content(txt){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__2803 = goog.dom.htmlToDocumentFragment.call(null,txt);

goog.dom.removeChildren.call(null,pnod);
return goog.dom.append.call(null,pnod,frag__2803);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var at_lst__2805 = cljs.core.partition.call(null,2,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__2806){
var vec__2807__2808 = p__2806;
var a__2809 = cljs.core.nth.call(null,vec__2807__2808,0,null);
var v__2810 = cljs.core.nth.call(null,vec__2807__2808,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__2809),v__2810);
}),at_lst__2805));
}));
};
var en_set_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_attr__delegate.call(this, values);
};
en_set_attr.cljs$lang$maxFixedArity = 0;
en_set_attr.cljs$lang$applyTo = (function (arglist__2811){
var values = cljs.core.seq( arglist__2811 );;
return en_set_attr__delegate.call(this, values);
});
return en_set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_attr = (function() { 
var en_remove_attr__delegate = function (values){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2804_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__2804_SHARP_));
}),values));
}));
};
var en_remove_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_attr__delegate.call(this, values);
};
en_remove_attr.cljs$lang$maxFixedArity = 0;
en_remove_attr.cljs$lang$applyTo = (function (arglist__2812){
var values = cljs.core.seq( arglist__2812 );;
return en_remove_attr__delegate.call(this, values);
});
return en_remove_attr;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
var regex__2814 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",cls,"(\\s|$)")));
var cur_cls__2815 = el.className;

return cur_cls__2815.match(regex__2814);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.en_add_class = (function() { 
var en_add_class__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var cur_cls__2817 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2813_SHARP_){
if(cljs.core.truth_(cljs.core.not.call(null,enfocus.core.has_class.call(null,pnod,p1__2813_SHARP_))))
{return pnod.className = cljs.core.str.call(null,cur_cls__2817," ",p1__2813_SHARP_);
} else
{return null;
}
}),values));
}));
};
var en_add_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_add_class__delegate.call(this, values);
};
en_add_class.cljs$lang$maxFixedArity = 0;
en_add_class.cljs$lang$applyTo = (function (arglist__2818){
var values = cljs.core.seq( arglist__2818 );;
return en_add_class__delegate.call(this, values);
});
return en_add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_class = (function() { 
var en_remove_class__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var cur__2820 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2816_SHARP_){
if(cljs.core.truth_(enfocus.core.has_class.call(null,pnod,p1__2816_SHARP_)))
{var regex__2821 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",p1__2816_SHARP_,"(\\s|$)")));

return pnod.className = cur__2820.replace(regex__2821," ");
} else
{return null;
}
}),values));
}));
};
var en_remove_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_class__delegate.call(this, values);
};
en_remove_class.cljs$lang$maxFixedArity = 0;
en_remove_class.cljs$lang$applyTo = (function (arglist__2822){
var values = cljs.core.seq( arglist__2822 );;
return en_remove_class__delegate.call(this, values);
});
return en_remove_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.en_do__GT_ = (function() { 
var en_do__GT___delegate = function (forms){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2819_SHARP_){
return p1__2819_SHARP_.call(null,pnod);
}),forms));
}));
};
var en_do__GT_ = function (var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_do__GT___delegate.call(this, forms);
};
en_do__GT_.cljs$lang$maxFixedArity = 0;
en_do__GT_.cljs$lang$applyTo = (function (arglist__2823){
var forms = cljs.core.seq( arglist__2823 );;
return en_do__GT___delegate.call(this, forms);
});
return en_do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_append = (function() { 
var en_append__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.appendChild.call(null,pnod,frag);
}));
};
var en_append = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_append__delegate.call(this, values);
};
en_append.cljs$lang$maxFixedArity = 0;
en_append.cljs$lang$applyTo = (function (arglist__2824){
var values = cljs.core.seq( arglist__2824 );;
return en_append__delegate.call(this, values);
});
return en_append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_prepend = (function() { 
var en_prepend__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
var nod__2825 = pnod.firstChild;

return pnod.insertBefore(frag,nod__2825);
}));
};
var en_prepend = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_prepend__delegate.call(this, values);
};
en_prepend.cljs$lang$maxFixedArity = 0;
en_prepend.cljs$lang$applyTo = (function (arglist__2826){
var values = cljs.core.seq( arglist__2826 );;
return en_prepend__delegate.call(this, values);
});
return en_prepend;
})()
;
/**
* inserts the content before the selected node.  Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_before = (function() { 
var en_before__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.insertSiblingBefore.call(null,frag,pnod);
}));
};
var en_before = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_before__delegate.call(this, values);
};
en_before.cljs$lang$maxFixedArity = 0;
en_before.cljs$lang$applyTo = (function (arglist__2827){
var values = cljs.core.seq( arglist__2827 );;
return en_before__delegate.call(this, values);
});
return en_before;
})()
;
/**
* inserts the content after the selected node.  Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_after = (function() { 
var en_after__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.insertSiblingAfter.call(null,frag,pnod);
}));
};
var en_after = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_after__delegate.call(this, values);
};
en_after.cljs$lang$maxFixedArity = 0;
en_after.cljs$lang$applyTo = (function (arglist__2828){
var values = cljs.core.seq( arglist__2828 );;
return en_after__delegate.call(this, values);
});
return en_after;
})()
;
/**
* substitutes the content for the selected node.  Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_substitute = (function() { 
var en_substitute__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.replaceNode.call(null,frag,pnod);
}));
};
var en_substitute = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_substitute__delegate.call(this, values);
};
en_substitute.cljs$lang$maxFixedArity = 0;
en_substitute.cljs$lang$applyTo = (function (arglist__2829){
var values = cljs.core.seq( arglist__2829 );;
return en_substitute__delegate.call(this, values);
});
return en_substitute;
})()
;
/**
* removes the selected nodes from the dom
* @param {...*} var_args
*/
enfocus.core.en_remove_node = (function() { 
var en_remove_node__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return goog.dom.removeNode.call(null,pnod);
}));
};
var en_remove_node = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_node__delegate.call(this, values);
};
en_remove_node.cljs$lang$maxFixedArity = 0;
en_remove_node.cljs$lang$applyTo = (function (arglist__2830){
var values = cljs.core.seq( arglist__2830 );;
return en_remove_node__delegate.call(this, values);
});
return en_remove_node;
})()
;
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.en_wrap = (function en_wrap(elm,mattr){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var elem__2831 = goog.dom.createElement.call(null,cljs.core.name.call(null,elm));

enfocus.core.add_map_attrs.call(null,elem__2831,mattr);
enfocus.core.en_content.call(null,pnod.cloneNode(true)).call(null,elem__2831);
elem__2831;
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,elem__2831),enfocus.core.en_remove_node.call(null)).call(null,pnod);
return pnod;
}));
});
/**
* replaces a node with all its children
*/
enfocus.core.en_unwrap = (function en_unwrap(){
return enfocus.core.chainable_standard.call(null,(function (pnod){
var frag__2832 = document.createDocumentFragment();

enfocus.core.en_append.call(null,pnod.childNodes).call(null,frag__2832);
frag__2832;
enfocus.core.log_debug.call(null,frag__2832);
enfocus.core.log_debug.call(null,pnod);
enfocus.core.log_debug.call(null,pnod.childNodes);
return goog.dom.replaceNode.call(null,frag__2832,pnod);
}));
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_set_style = (function() { 
var en_set_style__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return enfocus.core.style_set.call(null,pnod,values);
}));
};
var en_set_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_style__delegate.call(this, values);
};
en_set_style.cljs$lang$maxFixedArity = 0;
en_set_style.cljs$lang$applyTo = (function (arglist__2833){
var values = cljs.core.seq( arglist__2833 );;
return en_set_style__delegate.call(this, values);
});
return en_set_style;
})()
;
/**
* remove a list style elements from the selected nodes
* note: you can only remove styles that are inline styles
* set in css need to overridden through set-style
* @param {...*} var_args
*/
enfocus.core.en_remove_style = (function() { 
var en_remove_style__delegate = function (values){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return enfocus.core.style_remove.call(null,pnod,values);
}));
};
var en_remove_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_style__delegate.call(this, values);
};
en_remove_style.cljs$lang$maxFixedArity = 0;
en_remove_style.cljs$lang$applyTo = (function (arglist__2834){
var values = cljs.core.seq( arglist__2834 );;
return en_remove_style__delegate.call(this, values);
});
return en_remove_style;
})()
;
enfocus.core.view_port_monitor = cljs.core.atom.call(null,null);
/**
* needed to support window :resize
*/
enfocus.core.get_vp_monitor = (function get_vp_monitor(){
if(cljs.core.truth_(cljs.core.deref.call(null,enfocus.core.view_port_monitor)))
{return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
} else
{cljs.core.swap_BANG_.call(null,enfocus.core.view_port_monitor,(function (){
return (new goog.dom.ViewportSizeMonitor());
}));
return cljs.core.deref.call(null,enfocus.core.view_port_monitor);
}
});
/**
* adding an event to the selected nodes
*/
enfocus.core.en_listen = (function en_listen(event,func){
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'mouseenter",event)))
{return en_listen.call(null,"﷐'mouseover",enfocus.core.mouse_enter_leave.call(null,func));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'mouseleave",event)))
{return en_listen.call(null,"﷐'mouseout",enfocus.core.mouse_enter_leave.call(null,func));
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.chainable_standard.call(null,(function (pnod){
if(cljs.core.truth_((function (){var and__3546__auto____2836 = cljs.core._EQ_.call(null,"﷐'resize",event);

if(cljs.core.truth_(and__3546__auto____2836))
{return (window === pnod);
} else
{return and__3546__auto____2836;
}
})()))
{return goog.events.listen.call(null,enfocus.core.get_vp_monitor.call(null),"resize",func);
} else
{return goog.events.listen.call(null,pnod,cljs.core.name.call(null,event),func);
}
}));
} else
{return null;
}
}
}
});
/**
* adding an event to the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_remove_listener = (function() { 
var en_remove_listener__delegate = function (event_list){
return enfocus.core.chainable_standard.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2835_SHARP_){
return goog.events.removeAll.call(null,pnod,cljs.core.name.call(null,p1__2835_SHARP_));
}),event_list));
}));
};
var en_remove_listener = function (var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_listener__delegate.call(this, event_list);
};
en_remove_listener.cljs$lang$maxFixedArity = 0;
en_remove_listener.cljs$lang$applyTo = (function (arglist__2837){
var event_list = cljs.core.seq( arglist__2837 );;
return en_remove_listener__delegate.call(this, event_list);
});
return en_remove_listener;
})()
;
enfocus.core.start_effect = (function start_effect(pnod,etype){
enfocus.core.log_debug.call(null,cljs.core.str.call(null,"start-effect",pnod,":",etype));
var effs__2838 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);
var eff_id__2839 = cljs.core.gensym.call(null,"efid_");

if(cljs.core.truth_(effs__2838))
{cljs.core.swap_BANG_.call(null,effs__2838,cljs.core.conj,eff_id__2839);
return eff_id__2839;
} else
{(pnod[enfocus.core.get_eff_prop_name.call(null,etype)] = cljs.core.atom.call(null,cljs.core.set([eff_id__2839])));
return eff_id__2839;
}
});
enfocus.core.check_effect = (function check_effect(pnod,etype,sym){
var effs__2840 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);

if(cljs.core.truth_((function (){var and__3546__auto____2841 = effs__2840;

if(cljs.core.truth_(and__3546__auto____2841))
{return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,effs__2840),sym);
} else
{return and__3546__auto____2841;
}
})()))
{return true;
} else
{return false;
}
});
enfocus.core.finish_effect = (function finish_effect(pnod,etype,sym){
enfocus.core.log_debug.call(null,cljs.core.str.call(null,"finish-effect",pnod,":",etype,":",sym));
var effs__2843 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);

if(cljs.core.truth_(effs__2843))
{return cljs.core.swap_BANG_.call(null,effs__2843,cljs.core.disj,sym);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.en_stop_effect = (function() { 
var en_stop_effect__delegate = function (etypes){
return (function (pnod){
enfocus.core.log_debug.call(null,cljs.core.pr_str.call(null,"stop-effect",pnod,":",etypes));
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2842_SHARP_){
return (pnod[enfocus.core.get_eff_prop_name.call(null,p1__2842_SHARP_)] = cljs.core.atom.call(null,cljs.core.set([])));
}),etypes));
});
};
var en_stop_effect = function (var_args){
var etypes = null;
if (goog.isDef(var_args)) {
  etypes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_stop_effect__delegate.call(this, etypes);
};
en_stop_effect.cljs$lang$maxFixedArity = 0;
en_stop_effect.cljs$lang$applyTo = (function (arglist__2844){
var etypes = cljs.core.seq( arglist__2844 );;
return en_stop_effect__delegate.call(this, etypes);
});
return en_stop_effect;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_out = (function en_fade_out(ttime,step,callback){
var incr__2845 = (1 / (ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2591__auto__,pcallback__2592__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'fade-in").call(null,pnod__2591__auto__);
var start__2593__auto____2846 = enfocus.core.get_mills.call(null);
var eff_id__2594__auto____2847 = enfocus.core.start_effect.call(null,pnod__2591__auto__,"﷐'fade-out");
var eff__2595__auto____2854 = (function run__2596__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____2848 = enfocus.core.check_effect.call(null,pnod__2591__auto__,"﷐'fade-out",eff_id__2594__auto____2847);

if(cljs.core.truth_(and__3546__auto____2848))
{return cljs.core.not.call(null,(function (pnod,etime){
var op__2849 = goog.style.getOpacity.call(null,pnod);

return (op__2849 <= 0);
}).call(null,pnod__2591__auto__,(enfocus.core.get_mills.call(null) - start__2593__auto____2846)));
} else
{return and__3546__auto____2848;
}
})()))
{(function (){var nods__2465__auto____2852 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var op__2851 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__2851)))
{return goog.style.setOpacity.call(null,pnod,(1 - incr__2845));
} else
{if(cljs.core.truth_((0 < op__2851)))
{return goog.style.setOpacity.call(null,pnod,(op__2851 - incr__2845));
} else
{return null;
}
}
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2850){
return pnod2850;
}),nods__2465__auto____2852));
return (function (pnod){
var op__2853 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__2853)))
{return goog.style.setOpacity.call(null,pnod,(1 - incr__2845));
} else
{if(cljs.core.truth_((0 < op__2853)))
{return goog.style.setOpacity.call(null,pnod,(op__2853 - incr__2845));
} else
{return null;
}
}
});
})().call(null,pnod__2591__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2596__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2591__auto__,"﷐'fade-out",eff_id__2594__auto____2847);
return pcallback__2592__auto__.call(null);
}
});

return eff__2595__auto____2854.call(null,0);
}),callback);
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,step,callback){
var incr__2855 = (1 / (ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2591__auto__,pcallback__2592__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'fade-out").call(null,pnod__2591__auto__);
var start__2593__auto____2856 = enfocus.core.get_mills.call(null);
var eff_id__2594__auto____2857 = enfocus.core.start_effect.call(null,pnod__2591__auto__,"﷐'fade-in");
var eff__2595__auto____2864 = (function run__2596__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____2858 = enfocus.core.check_effect.call(null,pnod__2591__auto__,"﷐'fade-in",eff_id__2594__auto____2857);

if(cljs.core.truth_(and__3546__auto____2858))
{return cljs.core.not.call(null,(function (pnod,etime){
var op__2859 = goog.style.getOpacity.call(null,pnod);

return (op__2859 >= 1);
}).call(null,pnod__2591__auto__,(enfocus.core.get_mills.call(null) - start__2593__auto____2856)));
} else
{return and__3546__auto____2858;
}
})()))
{(function (){var nods__2465__auto____2862 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var op__2861 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__2861)))
{return goog.style.setOpacity.call(null,pnod,incr__2855);
} else
{if(cljs.core.truth_((1 > op__2861)))
{return goog.style.setOpacity.call(null,pnod,(op__2861 + incr__2855));
} else
{return null;
}
}
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2860){
return pnod2860;
}),nods__2465__auto____2862));
return (function (pnod){
var op__2863 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__2863)))
{return goog.style.setOpacity.call(null,pnod,incr__2855);
} else
{if(cljs.core.truth_((1 > op__2863)))
{return goog.style.setOpacity.call(null,pnod,(op__2863 + incr__2855));
} else
{return null;
}
}
});
})().call(null,pnod__2591__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2596__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2591__auto__,"﷐'fade-in",eff_id__2594__auto____2857);
return pcallback__2592__auto__.call(null);
}
});

return eff__2595__auto____2864.call(null,0);
}),callback);
});
/**
* resizes the selected elements to a width and height in px
* optional time series data
*/
enfocus.core.en_resize = (function en_resize(wth,hgt,ttime,step,callback){
var orig_sym__2865 = cljs.core.gensym.call(null,"orig-size");
var steps__2868 = (cljs.core.truth_((function (){var or__3548__auto____2866 = (ttime === 0);

if(cljs.core.truth_(or__3548__auto____2866))
{return or__3548__auto____2866;
} else
{var or__3548__auto____2867 = (step === 0);

if(cljs.core.truth_(or__3548__auto____2867))
{return or__3548__auto____2867;
} else
{return (ttime <= step);
}
}
})())?1:(ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2591__auto__,pcallback__2592__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'resize").call(null,pnod__2591__auto__);
var start__2593__auto____2869 = enfocus.core.get_mills.call(null);
var eff_id__2594__auto____2870 = enfocus.core.start_effect.call(null,pnod__2591__auto__,"﷐'resize");
var eff__2595__auto____2916 = (function run__2596__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____2871 = enfocus.core.check_effect.call(null,pnod__2591__auto__,"﷐'resize",eff_id__2594__auto____2870);

if(cljs.core.truth_(and__3546__auto____2871))
{return cljs.core.not.call(null,(function (pnod,etime){
var csize__2872 = goog.style.getSize.call(null,pnod);
var osize__2873 = (pnod[cljs.core.name.call(null,orig_sym__2865)]);
var osize__2874 = (cljs.core.truth_(osize__2873)?osize__2873:(pnod[cljs.core.name.call(null,orig_sym__2865)] = csize__2872));
var wth__2875 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__2874.width:wth);
var hgt__2876 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__2874.height:hgt);
var wstep__2877 = enfocus.core.pix_round.call(null,((wth__2875 - osize__2874.width) / steps__2868));
var hstep__2878 = enfocus.core.pix_round.call(null,((hgt__2876 - osize__2874.height) / steps__2868));

if(cljs.core.truth_((function (){var and__3546__auto____2883 = (function (){var or__3548__auto____2879 = (wstep__2877 === 0);

if(cljs.core.truth_(or__3548__auto____2879))
{return or__3548__auto____2879;
} else
{var or__3548__auto____2881 = (function (){var and__3546__auto____2880 = (wstep__2877 < 0);

if(cljs.core.truth_(and__3546__auto____2880))
{return (wth__2875 >= csize__2872.width);
} else
{return and__3546__auto____2880;
}
})();

if(cljs.core.truth_(or__3548__auto____2881))
{return or__3548__auto____2881;
} else
{var and__3546__auto____2882 = (wstep__2877 > 0);

if(cljs.core.truth_(and__3546__auto____2882))
{return (wth__2875 <= csize__2872.width);
} else
{return and__3546__auto____2882;
}
}
}
})();

if(cljs.core.truth_(and__3546__auto____2883))
{var or__3548__auto____2884 = (hstep__2878 === 0);

if(cljs.core.truth_(or__3548__auto____2884))
{return or__3548__auto____2884;
} else
{var or__3548__auto____2886 = (function (){var and__3546__auto____2885 = (hstep__2878 < 0);

if(cljs.core.truth_(and__3546__auto____2885))
{return (hgt__2876 >= csize__2872.height);
} else
{return and__3546__auto____2885;
}
})();

if(cljs.core.truth_(or__3548__auto____2886))
{return or__3548__auto____2886;
} else
{var and__3546__auto____2887 = (hstep__2878 > 0);

if(cljs.core.truth_(and__3546__auto____2887))
{return (hgt__2876 <= csize__2872.height);
} else
{return and__3546__auto____2887;
}
}
}
} else
{return and__3546__auto____2883;
}
})()))
{(pnod[cljs.core.name.call(null,orig_sym__2865)] = null);
goog.style.setWidth.call(null,pnod,wth__2875);
goog.style.setHeight.call(null,pnod,hgt__2876);
return true;
} else
{return false;
}
}).call(null,pnod__2591__auto__,(enfocus.core.get_mills.call(null) - start__2593__auto____2869)));
} else
{return and__3546__auto____2871;
}
})()))
{(function (){var nods__2465__auto____2902 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var csize__2889 = goog.style.getSize.call(null,pnod);
var osize__2890 = (pnod[cljs.core.name.call(null,orig_sym__2865)]);
var osize__2891 = (cljs.core.truth_(osize__2890)?osize__2890:(pnod[cljs.core.name.call(null,orig_sym__2865)] = csize__2889));
var wth__2892 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__2891.width:wth);
var hgt__2893 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__2891.height:hgt);
var wstep__2894 = enfocus.core.pix_round.call(null,((wth__2892 - osize__2891.width) / steps__2868));
var hstep__2895 = enfocus.core.pix_round.call(null,((hgt__2893 - osize__2891.height) / steps__2868));

if(cljs.core.truth_((function (){var or__3548__auto____2897 = (function (){var and__3546__auto____2896 = (wstep__2894 < 0);

if(cljs.core.truth_(and__3546__auto____2896))
{return (wth__2892 < csize__2889.width);
} else
{return and__3546__auto____2896;
}
})();

if(cljs.core.truth_(or__3548__auto____2897))
{return or__3548__auto____2897;
} else
{var and__3546__auto____2898 = (wstep__2894 > 0);

if(cljs.core.truth_(and__3546__auto____2898))
{return (wth__2892 > csize__2889.width);
} else
{return and__3546__auto____2898;
}
}
})()))
{goog.style.setWidth.call(null,pnod,(csize__2889.width + wstep__2894));
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____2900 = (function (){var and__3546__auto____2899 = (hstep__2895 < 0);

if(cljs.core.truth_(and__3546__auto____2899))
{return (hgt__2893 < csize__2889.height);
} else
{return and__3546__auto____2899;
}
})();

if(cljs.core.truth_(or__3548__auto____2900))
{return or__3548__auto____2900;
} else
{var and__3546__auto____2901 = (hstep__2895 > 0);

if(cljs.core.truth_(and__3546__auto____2901))
{return (hgt__2893 > csize__2889.height);
} else
{return and__3546__auto____2901;
}
}
})()))
{return goog.style.setHeight.call(null,pnod,(csize__2889.height + hstep__2895));
} else
{return null;
}
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2888){
return pnod2888;
}),nods__2465__auto____2902));
return (function (pnod){
var csize__2903 = goog.style.getSize.call(null,pnod);
var osize__2904 = (pnod[cljs.core.name.call(null,orig_sym__2865)]);
var osize__2905 = (cljs.core.truth_(osize__2904)?osize__2904:(pnod[cljs.core.name.call(null,orig_sym__2865)] = csize__2903));
var wth__2906 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__2905.width:wth);
var hgt__2907 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__2905.height:hgt);
var wstep__2908 = enfocus.core.pix_round.call(null,((wth__2906 - osize__2905.width) / steps__2868));
var hstep__2909 = enfocus.core.pix_round.call(null,((hgt__2907 - osize__2905.height) / steps__2868));

if(cljs.core.truth_((function (){var or__3548__auto____2911 = (function (){var and__3546__auto____2910 = (wstep__2908 < 0);

if(cljs.core.truth_(and__3546__auto____2910))
{return (wth__2906 < csize__2903.width);
} else
{return and__3546__auto____2910;
}
})();

if(cljs.core.truth_(or__3548__auto____2911))
{return or__3548__auto____2911;
} else
{var and__3546__auto____2912 = (wstep__2908 > 0);

if(cljs.core.truth_(and__3546__auto____2912))
{return (wth__2906 > csize__2903.width);
} else
{return and__3546__auto____2912;
}
}
})()))
{goog.style.setWidth.call(null,pnod,(csize__2903.width + wstep__2908));
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____2914 = (function (){var and__3546__auto____2913 = (hstep__2909 < 0);

if(cljs.core.truth_(and__3546__auto____2913))
{return (hgt__2907 < csize__2903.height);
} else
{return and__3546__auto____2913;
}
})();

if(cljs.core.truth_(or__3548__auto____2914))
{return or__3548__auto____2914;
} else
{var and__3546__auto____2915 = (hstep__2909 > 0);

if(cljs.core.truth_(and__3546__auto____2915))
{return (hgt__2907 > csize__2903.height);
} else
{return and__3546__auto____2915;
}
}
})()))
{return goog.style.setHeight.call(null,pnod,(csize__2903.height + hstep__2909));
} else
{return null;
}
});
})().call(null,pnod__2591__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2596__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2591__auto__,"﷐'resize",eff_id__2594__auto____2870);
return pcallback__2592__auto__.call(null);
}
});

return eff__2595__auto____2916.call(null,0);
}),callback);
});
/**
* moves the selected elements to a x and y in px
* optional time series data
*/
enfocus.core.en_move = (function en_move(xpos,ypos,ttime,step,callback){
var orig_sym__2918 = cljs.core.gensym.call(null,"orig-pos");
var steps__2921 = (cljs.core.truth_((function (){var or__3548__auto____2919 = (ttime === 0);

if(cljs.core.truth_(or__3548__auto____2919))
{return or__3548__auto____2919;
} else
{var or__3548__auto____2920 = (step === 0);

if(cljs.core.truth_(or__3548__auto____2920))
{return or__3548__auto____2920;
} else
{return (ttime <= step);
}
}
})())?1:(ttime / step));

return enfocus.core.chainable_effect.call(null,(function (pnod__2591__auto__,pcallback__2592__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'move").call(null,pnod__2591__auto__);
var start__2593__auto____2922 = enfocus.core.get_mills.call(null);
var eff_id__2594__auto____2923 = enfocus.core.start_effect.call(null,pnod__2591__auto__,"﷐'move");
var eff__2595__auto____2972 = (function run__2596__auto__(){
if(cljs.core.truth_((function (){var and__3546__auto____2924 = enfocus.core.check_effect.call(null,pnod__2591__auto__,"﷐'move",eff_id__2594__auto____2923);

if(cljs.core.truth_(and__3546__auto____2924))
{return cljs.core.not.call(null,(function (pnod,etime){
var cpos__2925 = goog.style.getPosition.call(null,pnod);
var opos__2926 = (pnod[cljs.core.name.call(null,orig_sym__2918)]);
var opos__2927 = (cljs.core.truth_(opos__2926)?opos__2926:(pnod[cljs.core.name.call(null,orig_sym__2918)] = cpos__2925));
var xpos__2928 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__2927.x:xpos);
var ypos__2929 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__2927.y:ypos);
var xstep__2930 = enfocus.core.pix_round.call(null,((xpos__2928 - opos__2927.x) / steps__2921));
var ystep__2931 = enfocus.core.pix_round.call(null,((ypos__2929 - opos__2927.y) / steps__2921));
var clone__2932 = cpos__2925.clone;

if(cljs.core.truth_((function (){var and__3546__auto____2937 = (function (){var or__3548__auto____2933 = (xstep__2930 === 0);

if(cljs.core.truth_(or__3548__auto____2933))
{return or__3548__auto____2933;
} else
{var or__3548__auto____2935 = (function (){var and__3546__auto____2934 = (xstep__2930 < 0);

if(cljs.core.truth_(and__3546__auto____2934))
{return (xpos__2928 >= cpos__2925.x);
} else
{return and__3546__auto____2934;
}
})();

if(cljs.core.truth_(or__3548__auto____2935))
{return or__3548__auto____2935;
} else
{var and__3546__auto____2936 = (xstep__2930 > 0);

if(cljs.core.truth_(and__3546__auto____2936))
{return (xpos__2928 <= cpos__2925.x);
} else
{return and__3546__auto____2936;
}
}
}
})();

if(cljs.core.truth_(and__3546__auto____2937))
{var or__3548__auto____2938 = (ystep__2931 === 0);

if(cljs.core.truth_(or__3548__auto____2938))
{return or__3548__auto____2938;
} else
{var or__3548__auto____2940 = (function (){var and__3546__auto____2939 = (ystep__2931 < 0);

if(cljs.core.truth_(and__3546__auto____2939))
{return (ypos__2929 >= cpos__2925.y);
} else
{return and__3546__auto____2939;
}
})();

if(cljs.core.truth_(or__3548__auto____2940))
{return or__3548__auto____2940;
} else
{var and__3546__auto____2941 = (ystep__2931 > 0);

if(cljs.core.truth_(and__3546__auto____2941))
{return (ypos__2929 <= cpos__2925.y);
} else
{return and__3546__auto____2941;
}
}
}
} else
{return and__3546__auto____2937;
}
})()))
{(pnod[cljs.core.name.call(null,orig_sym__2918)] = null);
clone__2932.x = xpos__2928;
clone__2932.y = ypos__2929;
goog.style.setPosition.call(null,pnod,clone__2932.x,clone__2932.y);
return true;
} else
{return false;
}
}).call(null,pnod__2591__auto__,(enfocus.core.get_mills.call(null) - start__2593__auto____2922)));
} else
{return and__3546__auto____2924;
}
})()))
{(function (){var nods__2465__auto____2957 = enfocus.core.nodes__GT_coll.call(null,(function (pnod){
var cpos__2943 = goog.style.getPosition.call(null,pnod);
var opos__2944 = (pnod[cljs.core.name.call(null,orig_sym__2918)]);
var opos__2945 = (cljs.core.truth_(opos__2944)?opos__2944:(pnod[cljs.core.name.call(null,orig_sym__2918)] = cpos__2943));
var xpos__2946 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__2945.x:xpos);
var ypos__2947 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__2945.y:ypos);
var xstep__2948 = enfocus.core.pix_round.call(null,((xpos__2946 - opos__2945.x) / steps__2921));
var ystep__2949 = enfocus.core.pix_round.call(null,((ypos__2947 - opos__2945.y) / steps__2921));
var clone__2950 = cpos__2943.clone;

if(cljs.core.truth_((function (){var or__3548__auto____2952 = (function (){var and__3546__auto____2951 = (xstep__2948 < 0);

if(cljs.core.truth_(and__3546__auto____2951))
{return (xpos__2946 < cpos__2943.x);
} else
{return and__3546__auto____2951;
}
})();

if(cljs.core.truth_(or__3548__auto____2952))
{return or__3548__auto____2952;
} else
{var and__3546__auto____2953 = (xstep__2948 > 0);

if(cljs.core.truth_(and__3546__auto____2953))
{return (xpos__2946 > cpos__2943.x);
} else
{return and__3546__auto____2953;
}
}
})()))
{clone__2950.x = (cpos__2943.x + xstep__2948);
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____2955 = (function (){var and__3546__auto____2954 = (ystep__2949 < 0);

if(cljs.core.truth_(and__3546__auto____2954))
{return (ypos__2947 < cpos__2943.y);
} else
{return and__3546__auto____2954;
}
})();

if(cljs.core.truth_(or__3548__auto____2955))
{return or__3548__auto____2955;
} else
{var and__3546__auto____2956 = (ystep__2949 > 0);

if(cljs.core.truth_(and__3546__auto____2956))
{return (ypos__2947 > cpos__2943.y);
} else
{return and__3546__auto____2956;
}
}
})()))
{clone__2950.y = (cpos__2943.y + ystep__2949);
} else
{}
return goog.style.setPosition.call(null,pnod,clone__2950.x,clone__2950.y);
}));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (pnod2942){
return pnod2942;
}),nods__2465__auto____2957));
return (function (pnod){
var cpos__2958 = goog.style.getPosition.call(null,pnod);
var opos__2959 = (pnod[cljs.core.name.call(null,orig_sym__2918)]);
var opos__2960 = (cljs.core.truth_(opos__2959)?opos__2959:(pnod[cljs.core.name.call(null,orig_sym__2918)] = cpos__2958));
var xpos__2961 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__2960.x:xpos);
var ypos__2962 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__2960.y:ypos);
var xstep__2963 = enfocus.core.pix_round.call(null,((xpos__2961 - opos__2960.x) / steps__2921));
var ystep__2964 = enfocus.core.pix_round.call(null,((ypos__2962 - opos__2960.y) / steps__2921));
var clone__2965 = cpos__2958.clone;

if(cljs.core.truth_((function (){var or__3548__auto____2967 = (function (){var and__3546__auto____2966 = (xstep__2963 < 0);

if(cljs.core.truth_(and__3546__auto____2966))
{return (xpos__2961 < cpos__2958.x);
} else
{return and__3546__auto____2966;
}
})();

if(cljs.core.truth_(or__3548__auto____2967))
{return or__3548__auto____2967;
} else
{var and__3546__auto____2968 = (xstep__2963 > 0);

if(cljs.core.truth_(and__3546__auto____2968))
{return (xpos__2961 > cpos__2958.x);
} else
{return and__3546__auto____2968;
}
}
})()))
{clone__2965.x = (cpos__2958.x + xstep__2963);
} else
{}
if(cljs.core.truth_((function (){var or__3548__auto____2970 = (function (){var and__3546__auto____2969 = (ystep__2964 < 0);

if(cljs.core.truth_(and__3546__auto____2969))
{return (ypos__2962 < cpos__2958.y);
} else
{return and__3546__auto____2969;
}
})();

if(cljs.core.truth_(or__3548__auto____2970))
{return or__3548__auto____2970;
} else
{var and__3546__auto____2971 = (ystep__2964 > 0);

if(cljs.core.truth_(and__3546__auto____2971))
{return (ypos__2962 > cpos__2958.y);
} else
{return and__3546__auto____2971;
}
}
})()))
{clone__2965.y = (cpos__2958.y + ystep__2964);
} else
{}
return goog.style.setPosition.call(null,pnod,clone__2965.x,clone__2965.y);
});
})().call(null,pnod__2591__auto__);
return enfocus.core.setTimeout.call(null,(function (){
return run__2596__auto__.call(null);
}),step);
} else
{enfocus.core.finish_effect.call(null,pnod__2591__auto__,"﷐'move",eff_id__2594__auto____2923);
return pcallback__2592__auto__.call(null);
}
});

return eff__2595__auto____2972.call(null,0);
}),callback);
});
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* takes a string to append to all ids so they do not conflict with
* existing ids in the live dom
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__2973 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2974 = (function (id_scope_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__2917_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__2917_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__2917_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__2917_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__2917_SHARP_).replace("#",cljs.core.str.call(null,"#",id_scope_sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__2917_SHARP_)))
{return create_sel_str.call(null,p1__2917_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__2917_SHARP_)))
{return p1__2917_SHARP_.replace("#",cljs.core.str.call(null,"#",id_scope_sym));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_scope_sym,css_sel){
switch(arguments.length){
case  1 :
return create_sel_str__2973.call(this,id_scope_sym);
case  2 :
return create_sel_str__2974.call(this,id_scope_sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and
* returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__2978 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__2979 = (function (id_scope_sym,dom_node,css_sel){
var sel__2976 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,id_scope_sym,css_sel)," :",":"));
var ret__2977 = goog.dom.query.call(null,sel__2976,dom_node);

return ret__2977;
});
css_select = function(id_scope_sym,dom_node,css_sel){
switch(arguments.length){
case  2 :
return css_select__2978.call(this,id_scope_sym,dom_node);
case  3 :
return css_select__2979.call(this,id_scope_sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return css_select;
})()
;
enfocus.core.css_syms = cljs.core.HashMap.fromArrays(["﷑'first-child","﷑'last-child"],[" *:first-child"," *:last-child"]);
/**
* Matches any E element that contains att attribute:
* css -> E[att][att2]...
* @param {...*} var_args
*/
enfocus.core.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (kys){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__2981_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__2981_SHARP_),"]");
}),kys));
};
var attr_QMARK_ = function (var_args){
var kys = null;
if (goog.isDef(var_args)) {
  kys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return attr_QMARK___delegate.call(this, kys);
};
attr_QMARK_.cljs$lang$maxFixedArity = 0;
attr_QMARK_.cljs$lang$applyTo = (function (arglist__2982){
var kys = cljs.core.seq( arglist__2982 );;
return attr_QMARK___delegate.call(this, kys);
});
return attr_QMARK_;
})()
;
/**
* Matches any E element whose att attribute value equals 'val':
* css -> E[att=val][att2=val2]...
* @param {...*} var_args
*/
enfocus.core.attr_EQ_ = (function() {
var attr_EQ_ = null;
var attr_EQ___2983 = (function (){
return "";
});
var attr_EQ___2984 = (function() { 
var G__2986__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__2986 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2986__delegate.call(this, ky, txt, forms);
};
G__2986.cljs$lang$maxFixedArity = 2;
G__2986.cljs$lang$applyTo = (function (arglist__2987){
var ky = cljs.core.first(arglist__2987);
var txt = cljs.core.first(cljs.core.next(arglist__2987));
var forms = cljs.core.rest(cljs.core.next(arglist__2987));
return G__2986__delegate.call(this, ky, txt, forms);
});
return G__2986;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___2983.call(this);
default:
return attr_EQ___2984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___2984.cljs$lang$applyTo;
return attr_EQ_;
})()
;
/**
* Matches any E element that is the n-th child of its parent:
* css -> E:nth-child(x) or E:nth-child(xn+y)
*/
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__2988 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__2989 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__2988.call(this,x);
case  2 :
return nth_child__2989.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_child;
})()
;
/**
* Matches any E element that is the n-th sibling of its type:
* css -> E:nth-of-type(x) or E:nth-of-type(xn+y)
*/
enfocus.core.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__2991 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__2992 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__2991.call(this,x);
case  2 :
return nth_of_type__2992.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_of_type;
})()
;
/**
* Matches any E element that is the n-th child of its parent,
* counting from the last child.
* css -> E:nth-last-child(x) or E:nth-last-child(xn+y)
*/
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__2994 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__2995 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__2994.call(this,x);
case  2 :
return nth_last_child__2995.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_child;
})()
;
/**
* Matches any E element that is the n-th sibling of its type
* counting from the last child:
* css -> E:nth-last-of-type(x) or E:nth-last-of-type(xn+y)
*/
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__2997 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__2998 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__2997.call(this,x);
case  2 :
return nth_last_of_type__2998.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
