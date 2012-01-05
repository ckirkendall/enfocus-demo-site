goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2434 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2434))
{return or__3548__auto____2434;
} else
{var or__3548__auto____2435 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2435))
{return or__3548__auto____2435;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2436 = coll;

if(cljs.core.truth_(and__3546__auto____2436))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2436;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2437 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2437))
{return or__3548__auto____2437;
} else
{var or__3548__auto____2438 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2438))
{return or__3548__auto____2438;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2439 = coll;

if(cljs.core.truth_(and__3546__auto____2439))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2439;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2440 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2440))
{return or__3548__auto____2440;
} else
{var or__3548__auto____2441 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2441))
{return or__3548__auto____2441;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2442 = coll;

if(cljs.core.truth_(and__3546__auto____2442))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2442;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2443 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2443))
{return or__3548__auto____2443;
} else
{var or__3548__auto____2444 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2444))
{return or__3548__auto____2444;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2451 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2445 = coll;

if(cljs.core.truth_(and__3546__auto____2445))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2445;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2446 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2446))
{return or__3548__auto____2446;
} else
{var or__3548__auto____2447 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2447))
{return or__3548__auto____2447;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2452 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2448 = coll;

if(cljs.core.truth_(and__3546__auto____2448))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2448;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2449 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2449))
{return or__3548__auto____2449;
} else
{var or__3548__auto____2450 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2450))
{return or__3548__auto____2450;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2451.call(this,coll,n);
case  3 :
return _nth__2452.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2454 = coll;

if(cljs.core.truth_(and__3546__auto____2454))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2454;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2455 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2455))
{return or__3548__auto____2455;
} else
{var or__3548__auto____2456 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2456))
{return or__3548__auto____2456;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2457 = coll;

if(cljs.core.truth_(and__3546__auto____2457))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2457;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2458 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2458))
{return or__3548__auto____2458;
} else
{var or__3548__auto____2459 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2459))
{return or__3548__auto____2459;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2466 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2460 = o;

if(cljs.core.truth_(and__3546__auto____2460))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2460;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2461 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2461))
{return or__3548__auto____2461;
} else
{var or__3548__auto____2462 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2462))
{return or__3548__auto____2462;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2467 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2463 = o;

if(cljs.core.truth_(and__3546__auto____2463))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2463;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2464 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2464))
{return or__3548__auto____2464;
} else
{var or__3548__auto____2465 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2465))
{return or__3548__auto____2465;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2466.call(this,o,k);
case  3 :
return _lookup__2467.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2469 = coll;

if(cljs.core.truth_(and__3546__auto____2469))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2469;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2470 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2470))
{return or__3548__auto____2470;
} else
{var or__3548__auto____2471 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2471))
{return or__3548__auto____2471;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2472 = coll;

if(cljs.core.truth_(and__3546__auto____2472))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2472;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2473 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2473))
{return or__3548__auto____2473;
} else
{var or__3548__auto____2474 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2474))
{return or__3548__auto____2474;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2475 = coll;

if(cljs.core.truth_(and__3546__auto____2475))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2475;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2476 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2476))
{return or__3548__auto____2476;
} else
{var or__3548__auto____2477 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2477))
{return or__3548__auto____2477;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2478 = coll;

if(cljs.core.truth_(and__3546__auto____2478))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2478;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2479 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2479))
{return or__3548__auto____2479;
} else
{var or__3548__auto____2480 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2480))
{return or__3548__auto____2480;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2481 = coll;

if(cljs.core.truth_(and__3546__auto____2481))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2481;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2482 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2482))
{return or__3548__auto____2482;
} else
{var or__3548__auto____2483 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2483))
{return or__3548__auto____2483;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2484 = coll;

if(cljs.core.truth_(and__3546__auto____2484))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2484;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2485 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2485))
{return or__3548__auto____2485;
} else
{var or__3548__auto____2486 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2486))
{return or__3548__auto____2486;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2487 = coll;

if(cljs.core.truth_(and__3546__auto____2487))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2487;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2488 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2488))
{return or__3548__auto____2488;
} else
{var or__3548__auto____2489 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2489))
{return or__3548__auto____2489;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2490 = o;

if(cljs.core.truth_(and__3546__auto____2490))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2490;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2491 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2491))
{return or__3548__auto____2491;
} else
{var or__3548__auto____2492 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2492))
{return or__3548__auto____2492;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2493 = o;

if(cljs.core.truth_(and__3546__auto____2493))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2493;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2494 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2494))
{return or__3548__auto____2494;
} else
{var or__3548__auto____2495 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2495))
{return or__3548__auto____2495;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2496 = o;

if(cljs.core.truth_(and__3546__auto____2496))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2496;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2497 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2497))
{return or__3548__auto____2497;
} else
{var or__3548__auto____2498 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2498))
{return or__3548__auto____2498;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2499 = o;

if(cljs.core.truth_(and__3546__auto____2499))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2499;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2500 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2500))
{return or__3548__auto____2500;
} else
{var or__3548__auto____2501 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2501))
{return or__3548__auto____2501;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2508 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2502 = coll;

if(cljs.core.truth_(and__3546__auto____2502))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2502;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2503 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2503))
{return or__3548__auto____2503;
} else
{var or__3548__auto____2504 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2504))
{return or__3548__auto____2504;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2509 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2505 = coll;

if(cljs.core.truth_(and__3546__auto____2505))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2505;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2506 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2506))
{return or__3548__auto____2506;
} else
{var or__3548__auto____2507 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2507))
{return or__3548__auto____2507;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2508.call(this,coll,f);
case  3 :
return _reduce__2509.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2511 = o;

if(cljs.core.truth_(and__3546__auto____2511))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2511;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2512 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2512))
{return or__3548__auto____2512;
} else
{var or__3548__auto____2513 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2513))
{return or__3548__auto____2513;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2514 = o;

if(cljs.core.truth_(and__3546__auto____2514))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2514;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2515 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2515))
{return or__3548__auto____2515;
} else
{var or__3548__auto____2516 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2516))
{return or__3548__auto____2516;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2517 = o;

if(cljs.core.truth_(and__3546__auto____2517))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2517;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2518 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2518))
{return or__3548__auto____2518;
} else
{var or__3548__auto____2519 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2519))
{return or__3548__auto____2519;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2520 = o;

if(cljs.core.truth_(and__3546__auto____2520))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2520;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2521 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2521))
{return or__3548__auto____2521;
} else
{var or__3548__auto____2522 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2522))
{return or__3548__auto____2522;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2523 = d;

if(cljs.core.truth_(and__3546__auto____2523))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2523;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2524 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2524))
{return or__3548__auto____2524;
} else
{var or__3548__auto____2525 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2525))
{return or__3548__auto____2525;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2526 = this$;

if(cljs.core.truth_(and__3546__auto____2526))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2526;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2527 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2527))
{return or__3548__auto____2527;
} else
{var or__3548__auto____2528 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2528))
{return or__3548__auto____2528;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2529 = this$;

if(cljs.core.truth_(and__3546__auto____2529))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2529;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2530 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2530))
{return or__3548__auto____2530;
} else
{var or__3548__auto____2531 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2531))
{return or__3548__auto____2531;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2532 = this$;

if(cljs.core.truth_(and__3546__auto____2532))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2532;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2533 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2533))
{return or__3548__auto____2533;
} else
{var or__3548__auto____2534 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2534))
{return or__3548__auto____2534;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2535 = null;
var G__2535__2536 = (function (o,k){
return null;
});
var G__2535__2537 = (function (o,k,not_found){
return not_found;
});
G__2535 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2535__2536.call(this,o,k);
case  3 :
return G__2535__2537.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2535;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2539 = null;
var G__2539__2540 = (function (_,f){
return f.call(null);
});
var G__2539__2541 = (function (_,f,start){
return start;
});
G__2539 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2539__2540.call(this,_,f);
case  3 :
return G__2539__2541.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2539;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2543 = null;
var G__2543__2544 = (function (_,n){
return null;
});
var G__2543__2545 = (function (_,n,not_found){
return not_found;
});
G__2543 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2543__2544.call(this,_,n);
case  3 :
return G__2543__2545.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2543;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2553 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2547 = cljs.core._nth.call(null,cicoll,0);
var n__2548 = 1;

while(true){
if(cljs.core.truth_((n__2548 < cljs.core._count.call(null,cicoll))))
{{
var G__2557 = f.call(null,val__2547,cljs.core._nth.call(null,cicoll,n__2548));
var G__2558 = (n__2548 + 1);
val__2547 = G__2557;
n__2548 = G__2558;
continue;
}
} else
{return val__2547;
}
break;
}
}
});
var ci_reduce__2554 = (function (cicoll,f,val){
var val__2549 = val;
var n__2550 = 0;

while(true){
if(cljs.core.truth_((n__2550 < cljs.core._count.call(null,cicoll))))
{{
var G__2559 = f.call(null,val__2549,cljs.core._nth.call(null,cicoll,n__2550));
var G__2560 = (n__2550 + 1);
val__2549 = G__2559;
n__2550 = G__2560;
continue;
}
} else
{return val__2549;
}
break;
}
});
var ci_reduce__2555 = (function (cicoll,f,val,idx){
var val__2551 = val;
var n__2552 = idx;

while(true){
if(cljs.core.truth_((n__2552 < cljs.core._count.call(null,cicoll))))
{{
var G__2561 = f.call(null,val__2551,cljs.core._nth.call(null,cicoll,n__2552));
var G__2562 = (n__2552 + 1);
val__2551 = G__2561;
n__2552 = G__2562;
continue;
}
} else
{return val__2551;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2553.call(this,cicoll,f);
case  3 :
return ci_reduce__2554.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2555.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2563 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2576 = null;
var G__2576__2577 = (function (coll,f){
var this__2564 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2564.a[this__2564.i]),(this__2564.i + 1));
});
var G__2576__2578 = (function (coll,f,start){
var this__2565 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2565.i);
});
G__2576 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2576__2577.call(this,coll,f);
case  3 :
return G__2576__2578.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2576;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2566 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2567 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2580 = null;
var G__2580__2581 = (function (coll,n){
var this__2568 = this;
var i__2569 = (n + this__2568.i);

if(cljs.core.truth_((i__2569 < this__2568.a.length)))
{return (this__2568.a[i__2569]);
} else
{return null;
}
});
var G__2580__2582 = (function (coll,n,not_found){
var this__2570 = this;
var i__2571 = (n + this__2570.i);

if(cljs.core.truth_((i__2571 < this__2570.a.length)))
{return (this__2570.a[i__2571]);
} else
{return not_found;
}
});
G__2580 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2580__2581.call(this,coll,n);
case  3 :
return G__2580__2582.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2580;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2572 = this;
return (this__2572.a.length - this__2572.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2573 = this;
return (this__2573.a[this__2573.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2574 = this;
if(cljs.core.truth_(((this__2574.i + 1) < this__2574.a.length)))
{return (new cljs.core.IndexedSeq(this__2574.a,(this__2574.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2575 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2584 = null;
var G__2584__2585 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2584__2586 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2584 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2584__2585.call(this,array,f);
case  3 :
return G__2584__2586.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2584;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2588 = null;
var G__2588__2589 = (function (array,k){
return (array[k]);
});
var G__2588__2590 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2588 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2588__2589.call(this,array,k);
case  3 :
return G__2588__2590.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2588;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2592 = null;
var G__2592__2593 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2592__2594 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2592 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2592__2593.call(this,array,n);
case  3 :
return G__2592__2594.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2592;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____2596 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2596))
{var s__2597 = temp__3698__auto____2596;

return cljs.core._first.call(null,s__2597);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2598 = cljs.core.next.call(null,s);
s = G__2598;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2599 = cljs.core.seq.call(null,x);
var n__2600 = 0;

while(true){
if(cljs.core.truth_(s__2599))
{{
var G__2601 = cljs.core.next.call(null,s__2599);
var G__2602 = (n__2600 + 1);
s__2599 = G__2601;
n__2600 = G__2602;
continue;
}
} else
{return n__2600;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2603 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2604 = (function() { 
var G__2606__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2607 = conj.call(null,coll,x);
var G__2608 = cljs.core.first.call(null,xs);
var G__2609 = cljs.core.next.call(null,xs);
coll = G__2607;
x = G__2608;
xs = G__2609;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2606 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2606__delegate.call(this, coll, x, xs);
};
G__2606.cljs$lang$maxFixedArity = 2;
G__2606.cljs$lang$applyTo = (function (arglist__2610){
var coll = cljs.core.first(arglist__2610);
var x = cljs.core.first(cljs.core.next(arglist__2610));
var xs = cljs.core.rest(cljs.core.next(arglist__2610));
return G__2606__delegate.call(this, coll, x, xs);
});
return G__2606;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2603.call(this,coll,x);
default:
return conj__2604.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2604.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2611 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__2612 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2611.call(this,coll,n);
case  3 :
return nth__2612.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2614 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2615 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2614.call(this,o,k);
case  3 :
return get__2615.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2618 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2619 = (function() { 
var G__2621__delegate = function (coll,k,v,kvs){
while(true){
var ret__2617 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2622 = ret__2617;
var G__2623 = cljs.core.first.call(null,kvs);
var G__2624 = cljs.core.second.call(null,kvs);
var G__2625 = cljs.core.nnext.call(null,kvs);
coll = G__2622;
k = G__2623;
v = G__2624;
kvs = G__2625;
continue;
}
} else
{return ret__2617;
}
break;
}
};
var G__2621 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2621__delegate.call(this, coll, k, v, kvs);
};
G__2621.cljs$lang$maxFixedArity = 3;
G__2621.cljs$lang$applyTo = (function (arglist__2626){
var coll = cljs.core.first(arglist__2626);
var k = cljs.core.first(cljs.core.next(arglist__2626));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2626)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2626)));
return G__2621__delegate.call(this, coll, k, v, kvs);
});
return G__2621;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2618.call(this,coll,k,v);
default:
return assoc__2619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2619.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2628 = (function (coll){
return coll;
});
var dissoc__2629 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2630 = (function() { 
var G__2632__delegate = function (coll,k,ks){
while(true){
var ret__2627 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2633 = ret__2627;
var G__2634 = cljs.core.first.call(null,ks);
var G__2635 = cljs.core.next.call(null,ks);
coll = G__2633;
k = G__2634;
ks = G__2635;
continue;
}
} else
{return ret__2627;
}
break;
}
};
var G__2632 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2632__delegate.call(this, coll, k, ks);
};
G__2632.cljs$lang$maxFixedArity = 2;
G__2632.cljs$lang$applyTo = (function (arglist__2636){
var coll = cljs.core.first(arglist__2636);
var k = cljs.core.first(cljs.core.next(arglist__2636));
var ks = cljs.core.rest(cljs.core.next(arglist__2636));
return G__2632__delegate.call(this, coll, k, ks);
});
return G__2632;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2628.call(this,coll);
case  2 :
return dissoc__2629.call(this,coll,k);
default:
return dissoc__2630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2630.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__321__auto____2637 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2638 = x__321__auto____2637;

if(cljs.core.truth_(and__3546__auto____2638))
{var and__3546__auto____2639 = x__321__auto____2637.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2639))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2637));
} else
{return and__3546__auto____2639;
}
} else
{return and__3546__auto____2638;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__321__auto____2637);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2641 = (function (coll){
return coll;
});
var disj__2642 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2643 = (function() { 
var G__2645__delegate = function (coll,k,ks){
while(true){
var ret__2640 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2646 = ret__2640;
var G__2647 = cljs.core.first.call(null,ks);
var G__2648 = cljs.core.next.call(null,ks);
coll = G__2646;
k = G__2647;
ks = G__2648;
continue;
}
} else
{return ret__2640;
}
break;
}
};
var G__2645 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2645__delegate.call(this, coll, k, ks);
};
G__2645.cljs$lang$maxFixedArity = 2;
G__2645.cljs$lang$applyTo = (function (arglist__2649){
var coll = cljs.core.first(arglist__2649);
var k = cljs.core.first(cljs.core.next(arglist__2649));
var ks = cljs.core.rest(cljs.core.next(arglist__2649));
return G__2645__delegate.call(this, coll, k, ks);
});
return G__2645;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2641.call(this,coll);
case  2 :
return disj__2642.call(this,coll,k);
default:
return disj__2643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2643.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__321__auto____2650 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2651 = x__321__auto____2650;

if(cljs.core.truth_(and__3546__auto____2651))
{var and__3546__auto____2652 = x__321__auto____2650.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2652))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2650));
} else
{return and__3546__auto____2652;
}
} else
{return and__3546__auto____2651;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__321__auto____2650);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__321__auto____2653 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2654 = x__321__auto____2653;

if(cljs.core.truth_(and__3546__auto____2654))
{var and__3546__auto____2655 = x__321__auto____2653.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2655))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2653));
} else
{return and__3546__auto____2655;
}
} else
{return and__3546__auto____2654;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__321__auto____2653);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__321__auto____2656 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2657 = x__321__auto____2656;

if(cljs.core.truth_(and__3546__auto____2657))
{var and__3546__auto____2658 = x__321__auto____2656.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2658))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2656));
} else
{return and__3546__auto____2658;
}
} else
{return and__3546__auto____2657;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__321__auto____2656);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__321__auto____2659 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2660 = x__321__auto____2659;

if(cljs.core.truth_(and__3546__auto____2660))
{var and__3546__auto____2661 = x__321__auto____2659.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2661))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2659));
} else
{return and__3546__auto____2661;
}
} else
{return and__3546__auto____2660;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__321__auto____2659);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__321__auto____2662 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2663 = x__321__auto____2662;

if(cljs.core.truth_(and__3546__auto____2663))
{var and__3546__auto____2664 = x__321__auto____2662.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2664))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2662));
} else
{return and__3546__auto____2664;
}
} else
{return and__3546__auto____2663;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__321__auto____2662);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__321__auto____2665 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2666 = x__321__auto____2665;

if(cljs.core.truth_(and__3546__auto____2666))
{var and__3546__auto____2667 = x__321__auto____2665.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2667))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2665));
} else
{return and__3546__auto____2667;
}
} else
{return and__3546__auto____2666;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__321__auto____2665);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__321__auto____2668 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2669 = x__321__auto____2668;

if(cljs.core.truth_(and__3546__auto____2669))
{var and__3546__auto____2670 = x__321__auto____2668.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2670))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2668));
} else
{return and__3546__auto____2670;
}
} else
{return and__3546__auto____2669;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__321__auto____2668);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2671 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2671.push(key);
}));
return keys__2671;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__321__auto____2672 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2673 = x__321__auto____2672;

if(cljs.core.truth_(and__3546__auto____2673))
{var and__3546__auto____2674 = x__321__auto____2672.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2674))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2672));
} else
{return and__3546__auto____2674;
}
} else
{return and__3546__auto____2673;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__321__auto____2672);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____2675 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2675))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2676 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2676))
{return or__3548__auto____2676;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2675;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2677 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2677))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2677;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2678 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2678))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2678;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____2679 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2679))
{return (n == n.toFixed());
} else
{return and__3546__auto____2679;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2680 = coll;

if(cljs.core.truth_(and__3546__auto____2680))
{var and__3546__auto____2681 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2681))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2681;
}
} else
{return and__3546__auto____2680;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2686 = (function (x){
return true;
});
var distinct_QMARK___2687 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2688 = (function() { 
var G__2690__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2682 = cljs.core.set([y,x]);
var xs__2683 = more;

while(true){
var x__2684 = cljs.core.first.call(null,xs__2683);
var etc__2685 = cljs.core.next.call(null,xs__2683);

if(cljs.core.truth_(xs__2683))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2682,x__2684)))
{return false;
} else
{{
var G__2691 = cljs.core.conj.call(null,s__2682,x__2684);
var G__2692 = etc__2685;
s__2682 = G__2691;
xs__2683 = G__2692;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2690 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2690__delegate.call(this, x, y, more);
};
G__2690.cljs$lang$maxFixedArity = 2;
G__2690.cljs$lang$applyTo = (function (arglist__2693){
var x = cljs.core.first(arglist__2693);
var y = cljs.core.first(cljs.core.next(arglist__2693));
var more = cljs.core.rest(cljs.core.next(arglist__2693));
return G__2690__delegate.call(this, x, y, more);
});
return G__2690;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2686.call(this,x);
case  2 :
return distinct_QMARK___2687.call(this,x,y);
default:
return distinct_QMARK___2688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2688.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2694 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2694)))
{return r__2694;
} else
{if(cljs.core.truth_(r__2694))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2696 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2697 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2695 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2695,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2695);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2696.call(this,comp);
case  2 :
return sort__2697.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2699 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2700 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2699.call(this,keyfn,comp);
case  3 :
return sort_by__2700.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2702 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2703 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2702.call(this,f,val);
case  3 :
return reduce__2703.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2709 = (function (f,coll){
var temp__3695__auto____2705 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2705))
{var s__2706 = temp__3695__auto____2705;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2706),cljs.core.next.call(null,s__2706));
} else
{return f.call(null);
}
});
var seq_reduce__2710 = (function (f,val,coll){
var val__2707 = val;
var coll__2708 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2708))
{{
var G__2712 = f.call(null,val__2707,cljs.core.first.call(null,coll__2708));
var G__2713 = cljs.core.next.call(null,coll__2708);
val__2707 = G__2712;
coll__2708 = G__2713;
continue;
}
} else
{return val__2707;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2709.call(this,f,val);
case  3 :
return seq_reduce__2710.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2714 = null;
var G__2714__2715 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2714__2716 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2714 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2714__2715.call(this,coll,f);
case  3 :
return G__2714__2716.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2714;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2718 = (function (){
return 0;
});
var _PLUS___2719 = (function (x){
return x;
});
var _PLUS___2720 = (function (x,y){
return (x + y);
});
var _PLUS___2721 = (function() { 
var G__2723__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2723 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2723__delegate.call(this, x, y, more);
};
G__2723.cljs$lang$maxFixedArity = 2;
G__2723.cljs$lang$applyTo = (function (arglist__2724){
var x = cljs.core.first(arglist__2724);
var y = cljs.core.first(cljs.core.next(arglist__2724));
var more = cljs.core.rest(cljs.core.next(arglist__2724));
return G__2723__delegate.call(this, x, y, more);
});
return G__2723;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2718.call(this);
case  1 :
return _PLUS___2719.call(this,x);
case  2 :
return _PLUS___2720.call(this,x,y);
default:
return _PLUS___2721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2721.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2725 = (function (x){
return (- x);
});
var ___2726 = (function (x,y){
return (x - y);
});
var ___2727 = (function() { 
var G__2729__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2729 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2729__delegate.call(this, x, y, more);
};
G__2729.cljs$lang$maxFixedArity = 2;
G__2729.cljs$lang$applyTo = (function (arglist__2730){
var x = cljs.core.first(arglist__2730);
var y = cljs.core.first(cljs.core.next(arglist__2730));
var more = cljs.core.rest(cljs.core.next(arglist__2730));
return G__2729__delegate.call(this, x, y, more);
});
return G__2729;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2725.call(this,x);
case  2 :
return ___2726.call(this,x,y);
default:
return ___2727.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2727.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2731 = (function (){
return 1;
});
var _STAR___2732 = (function (x){
return x;
});
var _STAR___2733 = (function (x,y){
return (x * y);
});
var _STAR___2734 = (function() { 
var G__2736__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2736 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2736__delegate.call(this, x, y, more);
};
G__2736.cljs$lang$maxFixedArity = 2;
G__2736.cljs$lang$applyTo = (function (arglist__2737){
var x = cljs.core.first(arglist__2737);
var y = cljs.core.first(cljs.core.next(arglist__2737));
var more = cljs.core.rest(cljs.core.next(arglist__2737));
return G__2736__delegate.call(this, x, y, more);
});
return G__2736;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2731.call(this);
case  1 :
return _STAR___2732.call(this,x);
case  2 :
return _STAR___2733.call(this,x,y);
default:
return _STAR___2734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2734.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2738 = (function (x){
return (1 / x);
});
var _SLASH___2739 = (function (x,y){
return (x / y);
});
var _SLASH___2740 = (function() { 
var G__2742__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2742 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2742__delegate.call(this, x, y, more);
};
G__2742.cljs$lang$maxFixedArity = 2;
G__2742.cljs$lang$applyTo = (function (arglist__2743){
var x = cljs.core.first(arglist__2743);
var y = cljs.core.first(cljs.core.next(arglist__2743));
var more = cljs.core.rest(cljs.core.next(arglist__2743));
return G__2742__delegate.call(this, x, y, more);
});
return G__2742;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2738.call(this,x);
case  2 :
return _SLASH___2739.call(this,x,y);
default:
return _SLASH___2740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2740.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2744 = (function (x){
return true;
});
var _LT___2745 = (function (x,y){
return (x < y);
});
var _LT___2746 = (function() { 
var G__2748__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2749 = y;
var G__2750 = cljs.core.first.call(null,more);
var G__2751 = cljs.core.next.call(null,more);
x = G__2749;
y = G__2750;
more = G__2751;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2748 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2748__delegate.call(this, x, y, more);
};
G__2748.cljs$lang$maxFixedArity = 2;
G__2748.cljs$lang$applyTo = (function (arglist__2752){
var x = cljs.core.first(arglist__2752);
var y = cljs.core.first(cljs.core.next(arglist__2752));
var more = cljs.core.rest(cljs.core.next(arglist__2752));
return G__2748__delegate.call(this, x, y, more);
});
return G__2748;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2744.call(this,x);
case  2 :
return _LT___2745.call(this,x,y);
default:
return _LT___2746.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2746.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2753 = (function (x){
return true;
});
var _LT__EQ___2754 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2755 = (function() { 
var G__2757__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2758 = y;
var G__2759 = cljs.core.first.call(null,more);
var G__2760 = cljs.core.next.call(null,more);
x = G__2758;
y = G__2759;
more = G__2760;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2757 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2757__delegate.call(this, x, y, more);
};
G__2757.cljs$lang$maxFixedArity = 2;
G__2757.cljs$lang$applyTo = (function (arglist__2761){
var x = cljs.core.first(arglist__2761);
var y = cljs.core.first(cljs.core.next(arglist__2761));
var more = cljs.core.rest(cljs.core.next(arglist__2761));
return G__2757__delegate.call(this, x, y, more);
});
return G__2757;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2753.call(this,x);
case  2 :
return _LT__EQ___2754.call(this,x,y);
default:
return _LT__EQ___2755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2755.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2762 = (function (x){
return true;
});
var _GT___2763 = (function (x,y){
return (x > y);
});
var _GT___2764 = (function() { 
var G__2766__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2767 = y;
var G__2768 = cljs.core.first.call(null,more);
var G__2769 = cljs.core.next.call(null,more);
x = G__2767;
y = G__2768;
more = G__2769;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2766 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2766__delegate.call(this, x, y, more);
};
G__2766.cljs$lang$maxFixedArity = 2;
G__2766.cljs$lang$applyTo = (function (arglist__2770){
var x = cljs.core.first(arglist__2770);
var y = cljs.core.first(cljs.core.next(arglist__2770));
var more = cljs.core.rest(cljs.core.next(arglist__2770));
return G__2766__delegate.call(this, x, y, more);
});
return G__2766;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2762.call(this,x);
case  2 :
return _GT___2763.call(this,x,y);
default:
return _GT___2764.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2764.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2771 = (function (x){
return true;
});
var _GT__EQ___2772 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2773 = (function() { 
var G__2775__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2776 = y;
var G__2777 = cljs.core.first.call(null,more);
var G__2778 = cljs.core.next.call(null,more);
x = G__2776;
y = G__2777;
more = G__2778;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2775 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2775__delegate.call(this, x, y, more);
};
G__2775.cljs$lang$maxFixedArity = 2;
G__2775.cljs$lang$applyTo = (function (arglist__2779){
var x = cljs.core.first(arglist__2779);
var y = cljs.core.first(cljs.core.next(arglist__2779));
var more = cljs.core.rest(cljs.core.next(arglist__2779));
return G__2775__delegate.call(this, x, y, more);
});
return G__2775;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2771.call(this,x);
case  2 :
return _GT__EQ___2772.call(this,x,y);
default:
return _GT__EQ___2773.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2773.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2780 = (function (x){
return x;
});
var max__2781 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2782 = (function() { 
var G__2784__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2784 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2784__delegate.call(this, x, y, more);
};
G__2784.cljs$lang$maxFixedArity = 2;
G__2784.cljs$lang$applyTo = (function (arglist__2785){
var x = cljs.core.first(arglist__2785);
var y = cljs.core.first(cljs.core.next(arglist__2785));
var more = cljs.core.rest(cljs.core.next(arglist__2785));
return G__2784__delegate.call(this, x, y, more);
});
return G__2784;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2780.call(this,x);
case  2 :
return max__2781.call(this,x,y);
default:
return max__2782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2782.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2786 = (function (x){
return x;
});
var min__2787 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2788 = (function() { 
var G__2790__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2790 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2790__delegate.call(this, x, y, more);
};
G__2790.cljs$lang$maxFixedArity = 2;
G__2790.cljs$lang$applyTo = (function (arglist__2791){
var x = cljs.core.first(arglist__2791);
var y = cljs.core.first(cljs.core.next(arglist__2791));
var more = cljs.core.rest(cljs.core.next(arglist__2791));
return G__2790__delegate.call(this, x, y, more);
});
return G__2790;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2786.call(this,x);
case  2 :
return min__2787.call(this,x,y);
default:
return min__2788.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2788.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2792 = (n % d);

return cljs.core.fix.call(null,((n - rem__2792) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2793 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2793));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2794 = (function (){
return Math.random.call(null);
});
var rand__2795 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2794.call(this);
case  1 :
return rand__2795.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2797 = (function (x){
return true;
});
var _EQ__EQ___2798 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2799 = (function() { 
var G__2801__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2802 = y;
var G__2803 = cljs.core.first.call(null,more);
var G__2804 = cljs.core.next.call(null,more);
x = G__2802;
y = G__2803;
more = G__2804;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2801 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2801__delegate.call(this, x, y, more);
};
G__2801.cljs$lang$maxFixedArity = 2;
G__2801.cljs$lang$applyTo = (function (arglist__2805){
var x = cljs.core.first(arglist__2805);
var y = cljs.core.first(cljs.core.next(arglist__2805));
var more = cljs.core.rest(cljs.core.next(arglist__2805));
return G__2801__delegate.call(this, x, y, more);
});
return G__2801;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2797.call(this,x);
case  2 :
return _EQ__EQ___2798.call(this,x,y);
default:
return _EQ__EQ___2799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2799.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2806 = n;
var xs__2807 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2808 = xs__2807;

if(cljs.core.truth_(and__3546__auto____2808))
{return (n__2806 > 0);
} else
{return and__3546__auto____2808;
}
})()))
{{
var G__2809 = (n__2806 - 1);
var G__2810 = cljs.core.next.call(null,xs__2807);
n__2806 = G__2809;
xs__2807 = G__2810;
continue;
}
} else
{return xs__2807;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2815 = null;
var G__2815__2816 = (function (coll,n){
var temp__3695__auto____2811 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2811))
{var xs__2812 = temp__3695__auto____2811;

return cljs.core.first.call(null,xs__2812);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2815__2817 = (function (coll,n,not_found){
var temp__3695__auto____2813 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2813))
{var xs__2814 = temp__3695__auto____2813;

return cljs.core.first.call(null,xs__2814);
} else
{return not_found;
}
});
G__2815 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2815__2816.call(this,coll,n);
case  3 :
return G__2815__2817.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2815;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___2819 = (function (){
return "";
});
var str_STAR___2820 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2821 = (function() { 
var G__2823__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2824 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__2825 = cljs.core.next.call(null,more);
sb = G__2824;
more = G__2825;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__2823 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2823__delegate.call(this, x, ys);
};
G__2823.cljs$lang$maxFixedArity = 1;
G__2823.cljs$lang$applyTo = (function (arglist__2826){
var x = cljs.core.first(arglist__2826);
var ys = cljs.core.rest(arglist__2826);
return G__2823__delegate.call(this, x, ys);
});
return G__2823;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___2819.call(this);
case  1 :
return str_STAR___2820.call(this,x);
default:
return str_STAR___2821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2821.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2827 = (function (){
return "";
});
var str__2828 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2829 = (function() { 
var G__2831__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__2831 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2831__delegate.call(this, x, ys);
};
G__2831.cljs$lang$maxFixedArity = 1;
G__2831.cljs$lang$applyTo = (function (arglist__2832){
var x = cljs.core.first(arglist__2832);
var ys = cljs.core.rest(arglist__2832);
return G__2831__delegate.call(this, x, ys);
});
return G__2831;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2827.call(this);
case  1 :
return str__2828.call(this,x);
default:
return str__2829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2829.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2833 = (function (s,start){
return s.substring(start);
});
var subs__2834 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2833.call(this,s,start);
case  3 :
return subs__2834.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2836 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__2837 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2836.call(this,ns);
case  2 :
return symbol__2837.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2839 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2840 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2839.call(this,ns);
case  2 :
return keyword__2840.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2842 = cljs.core.seq.call(null,x);
var ys__2843 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2842)))
{return cljs.core.nil_QMARK_.call(null,ys__2843);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2843)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2842),cljs.core.first.call(null,ys__2843))))
{{
var G__2844 = cljs.core.next.call(null,xs__2842);
var G__2845 = cljs.core.next.call(null,ys__2843);
xs__2842 = G__2844;
ys__2843 = G__2845;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2846_SHARP_,p2__2847_SHARP_){
return cljs.core.hash_combine.call(null,p1__2846_SHARP_,cljs.core.hash.call(null,p2__2847_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__2848__2849 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__2848__2849))
{var G__2851__2853 = cljs.core.first.call(null,G__2848__2849);
var vec__2852__2854 = G__2851__2853;
var key_name__2855 = cljs.core.nth.call(null,vec__2852__2854,0,null);
var f__2856 = cljs.core.nth.call(null,vec__2852__2854,1,null);
var G__2848__2857 = G__2848__2849;

var G__2851__2858 = G__2851__2853;
var G__2848__2859 = G__2848__2857;

while(true){
var vec__2860__2861 = G__2851__2858;
var key_name__2862 = cljs.core.nth.call(null,vec__2860__2861,0,null);
var f__2863 = cljs.core.nth.call(null,vec__2860__2861,1,null);
var G__2848__2864 = G__2848__2859;

var str_name__2865 = cljs.core.name.call(null,key_name__2862);

obj[str_name__2865] = f__2863;
var temp__3698__auto____2866 = cljs.core.next.call(null,G__2848__2864);

if(cljs.core.truth_(temp__3698__auto____2866))
{var G__2848__2867 = temp__3698__auto____2866;

{
var G__2868 = cljs.core.first.call(null,G__2848__2867);
var G__2869 = G__2848__2867;
G__2851__2858 = G__2868;
G__2848__2859 = G__2869;
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
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2870 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2871 = this;
return (new cljs.core.List(this__2871.meta,o,coll,(this__2871.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2872 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2873 = this;
return this__2873.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2874 = this;
return this__2874.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2875 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2876 = this;
return this__2876.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2877 = this;
return this__2877.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2878 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2879 = this;
return (new cljs.core.List(meta,this__2879.first,this__2879.rest,this__2879.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2880 = this;
return this__2880.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2881 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2882 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2883 = this;
return (new cljs.core.List(this__2883.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2884 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2885 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2886 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2887 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2888 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2889 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2890 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2891 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2892 = this;
return this__2892.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2893 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2894){
var items = cljs.core.seq( arglist__2894 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2895 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2896 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2897 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2898 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2898.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2899 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2900 = this;
return this__2900.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2901 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2901.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2901.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2902 = this;
return this__2902.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2903 = this;
return (new cljs.core.Cons(meta,this__2903.first,this__2903.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2904 = null;
var G__2904__2905 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2904__2906 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2904 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2904__2905.call(this,string,f);
case  3 :
return G__2904__2906.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2904;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2908 = null;
var G__2908__2909 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2908__2910 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2908 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2908__2909.call(this,string,k);
case  3 :
return G__2908__2910.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2908;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2912 = null;
var G__2912__2913 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2912__2914 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2912 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2912__2913.call(this,string,n);
case  3 :
return G__2912__2914.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2912;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__2916 = null;
var G__2916__2917 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2916__2918 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2916 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2916__2917.call(this,_,coll);
case  3 :
return G__2916__2918.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2916;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2920 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2920;
} else
{lazy_seq.x = x__2920.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2921 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2922 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2923 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2924 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2924.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2925 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2926 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2927 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2928 = this;
return this__2928.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2929 = this;
return (new cljs.core.LazySeq(meta,this__2929.realized,this__2929.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2930 = cljs.core.array.call(null);

var s__2931 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2931)))
{ary__2930.push(cljs.core.first.call(null,s__2931));
{
var G__2932 = cljs.core.next.call(null,s__2931);
s__2931 = G__2932;
continue;
}
} else
{return ary__2930;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2933 = s;
var i__2934 = n;
var sum__2935 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2936 = (i__2934 > 0);

if(cljs.core.truth_(and__3546__auto____2936))
{return cljs.core.seq.call(null,s__2933);
} else
{return and__3546__auto____2936;
}
})()))
{{
var G__2937 = cljs.core.next.call(null,s__2933);
var G__2938 = (i__2934 - 1);
var G__2939 = (sum__2935 + 1);
s__2933 = G__2937;
i__2934 = G__2938;
sum__2935 = G__2939;
continue;
}
} else
{return sum__2935;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2943 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2944 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2945 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2940 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2940))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2940),concat.call(null,cljs.core.rest.call(null,s__2940),y));
} else
{return y;
}
})));
});
var concat__2946 = (function() { 
var G__2948__delegate = function (x,y,zs){
var cat__2942 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2941 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2941))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2941),cat.call(null,cljs.core.rest.call(null,xys__2941),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2942.call(null,concat.call(null,x,y),zs);
};
var G__2948 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2948__delegate.call(this, x, y, zs);
};
G__2948.cljs$lang$maxFixedArity = 2;
G__2948.cljs$lang$applyTo = (function (arglist__2949){
var x = cljs.core.first(arglist__2949);
var y = cljs.core.first(cljs.core.next(arglist__2949));
var zs = cljs.core.rest(cljs.core.next(arglist__2949));
return G__2948__delegate.call(this, x, y, zs);
});
return G__2948;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2943.call(this);
case  1 :
return concat__2944.call(this,x);
case  2 :
return concat__2945.call(this,x,y);
default:
return concat__2946.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2946.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2950 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2951 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2952 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2953 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2954 = (function() { 
var G__2956__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2956 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2956__delegate.call(this, a, b, c, d, more);
};
G__2956.cljs$lang$maxFixedArity = 4;
G__2956.cljs$lang$applyTo = (function (arglist__2957){
var a = cljs.core.first(arglist__2957);
var b = cljs.core.first(cljs.core.next(arglist__2957));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2957)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2957))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2957))));
return G__2956__delegate.call(this, a, b, c, d, more);
});
return G__2956;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2950.call(this,a);
case  2 :
return list_STAR___2951.call(this,a,b);
case  3 :
return list_STAR___2952.call(this,a,b,c);
case  4 :
return list_STAR___2953.call(this,a,b,c,d);
default:
return list_STAR___2954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2954.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2967 = (function (f,args){
var fixed_arity__2958 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2958 + 1)) <= fixed_arity__2958)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2968 = (function (f,x,args){
var arglist__2959 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2960 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2959,fixed_arity__2960) <= fixed_arity__2960)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2959));
} else
{return f.cljs$lang$applyTo(arglist__2959);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2959));
}
});
var apply__2969 = (function (f,x,y,args){
var arglist__2961 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2962 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2961,fixed_arity__2962) <= fixed_arity__2962)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2961));
} else
{return f.cljs$lang$applyTo(arglist__2961);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2961));
}
});
var apply__2970 = (function (f,x,y,z,args){
var arglist__2963 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2964 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2963,fixed_arity__2964) <= fixed_arity__2964)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2963));
} else
{return f.cljs$lang$applyTo(arglist__2963);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2963));
}
});
var apply__2971 = (function() { 
var G__2973__delegate = function (f,a,b,c,d,args){
var arglist__2965 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2966 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2965,fixed_arity__2966) <= fixed_arity__2966)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2965));
} else
{return f.cljs$lang$applyTo(arglist__2965);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2965));
}
};
var G__2973 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2973__delegate.call(this, f, a, b, c, d, args);
};
G__2973.cljs$lang$maxFixedArity = 5;
G__2973.cljs$lang$applyTo = (function (arglist__2974){
var f = cljs.core.first(arglist__2974);
var a = cljs.core.first(cljs.core.next(arglist__2974));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2974)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2974))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2974)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2974)))));
return G__2973__delegate.call(this, f, a, b, c, d, args);
});
return G__2973;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2967.call(this,f,a);
case  3 :
return apply__2968.call(this,f,a,b);
case  4 :
return apply__2969.call(this,f,a,b,c);
case  5 :
return apply__2970.call(this,f,a,b,c,d);
default:
return apply__2971.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2971.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2975){
var obj = cljs.core.first(arglist__2975);
var f = cljs.core.first(cljs.core.next(arglist__2975));
var args = cljs.core.rest(cljs.core.next(arglist__2975));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2976 = (function (x){
return false;
});
var not_EQ___2977 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2978 = (function() { 
var G__2980__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2980 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2980__delegate.call(this, x, y, more);
};
G__2980.cljs$lang$maxFixedArity = 2;
G__2980.cljs$lang$applyTo = (function (arglist__2981){
var x = cljs.core.first(arglist__2981);
var y = cljs.core.first(cljs.core.next(arglist__2981));
var more = cljs.core.rest(cljs.core.next(arglist__2981));
return G__2980__delegate.call(this, x, y, more);
});
return G__2980;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2976.call(this,x);
case  2 :
return not_EQ___2977.call(this,x,y);
default:
return not_EQ___2978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2978.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2982 = pred;
var G__2983 = cljs.core.next.call(null,coll);
pred = G__2982;
coll = G__2983;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____2984 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2984))
{return or__3548__auto____2984;
} else
{{
var G__2985 = pred;
var G__2986 = cljs.core.next.call(null,coll);
pred = G__2985;
coll = G__2986;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2987 = null;
var G__2987__2988 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2987__2989 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2987__2990 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2987__2991 = (function() { 
var G__2993__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2993 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2993__delegate.call(this, x, y, zs);
};
G__2993.cljs$lang$maxFixedArity = 2;
G__2993.cljs$lang$applyTo = (function (arglist__2994){
var x = cljs.core.first(arglist__2994);
var y = cljs.core.first(cljs.core.next(arglist__2994));
var zs = cljs.core.rest(cljs.core.next(arglist__2994));
return G__2993__delegate.call(this, x, y, zs);
});
return G__2993;
})()
;
G__2987 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2987__2988.call(this);
case  1 :
return G__2987__2989.call(this,x);
case  2 :
return G__2987__2990.call(this,x,y);
default:
return G__2987__2991.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2987.cljs$lang$maxFixedArity = 2;
G__2987.cljs$lang$applyTo = G__2987__2991.cljs$lang$applyTo;
return G__2987;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2995__delegate = function (args){
return x;
};
var G__2995 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2995__delegate.call(this, args);
};
G__2995.cljs$lang$maxFixedArity = 0;
G__2995.cljs$lang$applyTo = (function (arglist__2996){
var args = cljs.core.seq( arglist__2996 );;
return G__2995__delegate.call(this, args);
});
return G__2995;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3000 = (function (){
return cljs.core.identity;
});
var comp__3001 = (function (f){
return f;
});
var comp__3002 = (function (f,g){
return (function() {
var G__3006 = null;
var G__3006__3007 = (function (){
return f.call(null,g.call(null));
});
var G__3006__3008 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3006__3009 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3006__3010 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3006__3011 = (function() { 
var G__3013__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3013 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3013__delegate.call(this, x, y, z, args);
};
G__3013.cljs$lang$maxFixedArity = 3;
G__3013.cljs$lang$applyTo = (function (arglist__3014){
var x = cljs.core.first(arglist__3014);
var y = cljs.core.first(cljs.core.next(arglist__3014));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3014)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3014)));
return G__3013__delegate.call(this, x, y, z, args);
});
return G__3013;
})()
;
G__3006 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3006__3007.call(this);
case  1 :
return G__3006__3008.call(this,x);
case  2 :
return G__3006__3009.call(this,x,y);
case  3 :
return G__3006__3010.call(this,x,y,z);
default:
return G__3006__3011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3006.cljs$lang$maxFixedArity = 3;
G__3006.cljs$lang$applyTo = G__3006__3011.cljs$lang$applyTo;
return G__3006;
})()
});
var comp__3003 = (function (f,g,h){
return (function() {
var G__3015 = null;
var G__3015__3016 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3015__3017 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3015__3018 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3015__3019 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3015__3020 = (function() { 
var G__3022__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3022 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3022__delegate.call(this, x, y, z, args);
};
G__3022.cljs$lang$maxFixedArity = 3;
G__3022.cljs$lang$applyTo = (function (arglist__3023){
var x = cljs.core.first(arglist__3023);
var y = cljs.core.first(cljs.core.next(arglist__3023));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3023)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3023)));
return G__3022__delegate.call(this, x, y, z, args);
});
return G__3022;
})()
;
G__3015 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3015__3016.call(this);
case  1 :
return G__3015__3017.call(this,x);
case  2 :
return G__3015__3018.call(this,x,y);
case  3 :
return G__3015__3019.call(this,x,y,z);
default:
return G__3015__3020.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3015.cljs$lang$maxFixedArity = 3;
G__3015.cljs$lang$applyTo = G__3015__3020.cljs$lang$applyTo;
return G__3015;
})()
});
var comp__3004 = (function() { 
var G__3024__delegate = function (f1,f2,f3,fs){
var fs__2997 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3025__delegate = function (args){
var ret__2998 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2997),args);
var fs__2999 = cljs.core.next.call(null,fs__2997);

while(true){
if(cljs.core.truth_(fs__2999))
{{
var G__3026 = cljs.core.first.call(null,fs__2999).call(null,ret__2998);
var G__3027 = cljs.core.next.call(null,fs__2999);
ret__2998 = G__3026;
fs__2999 = G__3027;
continue;
}
} else
{return ret__2998;
}
break;
}
};
var G__3025 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3025__delegate.call(this, args);
};
G__3025.cljs$lang$maxFixedArity = 0;
G__3025.cljs$lang$applyTo = (function (arglist__3028){
var args = cljs.core.seq( arglist__3028 );;
return G__3025__delegate.call(this, args);
});
return G__3025;
})()
;
};
var G__3024 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3024__delegate.call(this, f1, f2, f3, fs);
};
G__3024.cljs$lang$maxFixedArity = 3;
G__3024.cljs$lang$applyTo = (function (arglist__3029){
var f1 = cljs.core.first(arglist__3029);
var f2 = cljs.core.first(cljs.core.next(arglist__3029));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3029)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3029)));
return G__3024__delegate.call(this, f1, f2, f3, fs);
});
return G__3024;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3000.call(this);
case  1 :
return comp__3001.call(this,f1);
case  2 :
return comp__3002.call(this,f1,f2);
case  3 :
return comp__3003.call(this,f1,f2,f3);
default:
return comp__3004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3004.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3030 = (function (f,arg1){
return (function() { 
var G__3035__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3035 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3035__delegate.call(this, args);
};
G__3035.cljs$lang$maxFixedArity = 0;
G__3035.cljs$lang$applyTo = (function (arglist__3036){
var args = cljs.core.seq( arglist__3036 );;
return G__3035__delegate.call(this, args);
});
return G__3035;
})()
;
});
var partial__3031 = (function (f,arg1,arg2){
return (function() { 
var G__3037__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3037 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3037__delegate.call(this, args);
};
G__3037.cljs$lang$maxFixedArity = 0;
G__3037.cljs$lang$applyTo = (function (arglist__3038){
var args = cljs.core.seq( arglist__3038 );;
return G__3037__delegate.call(this, args);
});
return G__3037;
})()
;
});
var partial__3032 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3039__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3039 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3039__delegate.call(this, args);
};
G__3039.cljs$lang$maxFixedArity = 0;
G__3039.cljs$lang$applyTo = (function (arglist__3040){
var args = cljs.core.seq( arglist__3040 );;
return G__3039__delegate.call(this, args);
});
return G__3039;
})()
;
});
var partial__3033 = (function() { 
var G__3041__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3042__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3042 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3042__delegate.call(this, args);
};
G__3042.cljs$lang$maxFixedArity = 0;
G__3042.cljs$lang$applyTo = (function (arglist__3043){
var args = cljs.core.seq( arglist__3043 );;
return G__3042__delegate.call(this, args);
});
return G__3042;
})()
;
};
var G__3041 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3041__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3041.cljs$lang$maxFixedArity = 4;
G__3041.cljs$lang$applyTo = (function (arglist__3044){
var f = cljs.core.first(arglist__3044);
var arg1 = cljs.core.first(cljs.core.next(arglist__3044));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3044)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3044))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3044))));
return G__3041__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3041;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3030.call(this,f,arg1);
case  3 :
return partial__3031.call(this,f,arg1,arg2);
case  4 :
return partial__3032.call(this,f,arg1,arg2,arg3);
default:
return partial__3033.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3033.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3045 = (function (f,x){
return (function() {
var G__3049 = null;
var G__3049__3050 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3049__3051 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3049__3052 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3049__3053 = (function() { 
var G__3055__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3055 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3055__delegate.call(this, a, b, c, ds);
};
G__3055.cljs$lang$maxFixedArity = 3;
G__3055.cljs$lang$applyTo = (function (arglist__3056){
var a = cljs.core.first(arglist__3056);
var b = cljs.core.first(cljs.core.next(arglist__3056));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3056)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3056)));
return G__3055__delegate.call(this, a, b, c, ds);
});
return G__3055;
})()
;
G__3049 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3049__3050.call(this,a);
case  2 :
return G__3049__3051.call(this,a,b);
case  3 :
return G__3049__3052.call(this,a,b,c);
default:
return G__3049__3053.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3049.cljs$lang$maxFixedArity = 3;
G__3049.cljs$lang$applyTo = G__3049__3053.cljs$lang$applyTo;
return G__3049;
})()
});
var fnil__3046 = (function (f,x,y){
return (function() {
var G__3057 = null;
var G__3057__3058 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3057__3059 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3057__3060 = (function() { 
var G__3062__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3062 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3062__delegate.call(this, a, b, c, ds);
};
G__3062.cljs$lang$maxFixedArity = 3;
G__3062.cljs$lang$applyTo = (function (arglist__3063){
var a = cljs.core.first(arglist__3063);
var b = cljs.core.first(cljs.core.next(arglist__3063));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3063)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3063)));
return G__3062__delegate.call(this, a, b, c, ds);
});
return G__3062;
})()
;
G__3057 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3057__3058.call(this,a,b);
case  3 :
return G__3057__3059.call(this,a,b,c);
default:
return G__3057__3060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3057.cljs$lang$maxFixedArity = 3;
G__3057.cljs$lang$applyTo = G__3057__3060.cljs$lang$applyTo;
return G__3057;
})()
});
var fnil__3047 = (function (f,x,y,z){
return (function() {
var G__3064 = null;
var G__3064__3065 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3064__3066 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3064__3067 = (function() { 
var G__3069__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3069 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3069__delegate.call(this, a, b, c, ds);
};
G__3069.cljs$lang$maxFixedArity = 3;
G__3069.cljs$lang$applyTo = (function (arglist__3070){
var a = cljs.core.first(arglist__3070);
var b = cljs.core.first(cljs.core.next(arglist__3070));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3070)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3070)));
return G__3069__delegate.call(this, a, b, c, ds);
});
return G__3069;
})()
;
G__3064 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3064__3065.call(this,a,b);
case  3 :
return G__3064__3066.call(this,a,b,c);
default:
return G__3064__3067.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3064.cljs$lang$maxFixedArity = 3;
G__3064.cljs$lang$applyTo = G__3064__3067.cljs$lang$applyTo;
return G__3064;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3045.call(this,f,x);
case  3 :
return fnil__3046.call(this,f,x,y);
case  4 :
return fnil__3047.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3073 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3071 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3071))
{var s__3072 = temp__3698__auto____3071;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3072)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3072)));
} else
{return null;
}
})));
});

return mapi__3073.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3074 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3074))
{var s__3075 = temp__3698__auto____3074;

var x__3076 = f.call(null,cljs.core.first.call(null,s__3075));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3076)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3075));
} else
{return cljs.core.cons.call(null,x__3076,keep.call(null,f,cljs.core.rest.call(null,s__3075)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3086 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3083 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3083))
{var s__3084 = temp__3698__auto____3083;

var x__3085 = f.call(null,idx,cljs.core.first.call(null,s__3084));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3085)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3084));
} else
{return cljs.core.cons.call(null,x__3085,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3084)));
}
} else
{return null;
}
})));
});

return keepi__3086.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3131 = (function (p){
return (function() {
var ep1 = null;
var ep1__3136 = (function (){
return true;
});
var ep1__3137 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3138 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3093 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3093))
{return p.call(null,y);
} else
{return and__3546__auto____3093;
}
})());
});
var ep1__3139 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3094 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3094))
{var and__3546__auto____3095 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3095))
{return p.call(null,z);
} else
{return and__3546__auto____3095;
}
} else
{return and__3546__auto____3094;
}
})());
});
var ep1__3140 = (function() { 
var G__3142__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3096 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3096))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3096;
}
})());
};
var G__3142 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3142__delegate.call(this, x, y, z, args);
};
G__3142.cljs$lang$maxFixedArity = 3;
G__3142.cljs$lang$applyTo = (function (arglist__3143){
var x = cljs.core.first(arglist__3143);
var y = cljs.core.first(cljs.core.next(arglist__3143));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3143)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3143)));
return G__3142__delegate.call(this, x, y, z, args);
});
return G__3142;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3136.call(this);
case  1 :
return ep1__3137.call(this,x);
case  2 :
return ep1__3138.call(this,x,y);
case  3 :
return ep1__3139.call(this,x,y,z);
default:
return ep1__3140.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3140.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3132 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3144 = (function (){
return true;
});
var ep2__3145 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3097 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3097))
{return p2.call(null,x);
} else
{return and__3546__auto____3097;
}
})());
});
var ep2__3146 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3098 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3098))
{var and__3546__auto____3099 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3099))
{var and__3546__auto____3100 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3100))
{return p2.call(null,y);
} else
{return and__3546__auto____3100;
}
} else
{return and__3546__auto____3099;
}
} else
{return and__3546__auto____3098;
}
})());
});
var ep2__3147 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3101 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3101))
{var and__3546__auto____3102 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3102))
{var and__3546__auto____3103 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3103))
{var and__3546__auto____3104 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3104))
{var and__3546__auto____3105 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3105))
{return p2.call(null,z);
} else
{return and__3546__auto____3105;
}
} else
{return and__3546__auto____3104;
}
} else
{return and__3546__auto____3103;
}
} else
{return and__3546__auto____3102;
}
} else
{return and__3546__auto____3101;
}
})());
});
var ep2__3148 = (function() { 
var G__3150__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3106 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3106))
{return cljs.core.every_QMARK_.call(null,(function (p1__3077_SHARP_){
var and__3546__auto____3107 = p1.call(null,p1__3077_SHARP_);

if(cljs.core.truth_(and__3546__auto____3107))
{return p2.call(null,p1__3077_SHARP_);
} else
{return and__3546__auto____3107;
}
}),args);
} else
{return and__3546__auto____3106;
}
})());
};
var G__3150 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3150__delegate.call(this, x, y, z, args);
};
G__3150.cljs$lang$maxFixedArity = 3;
G__3150.cljs$lang$applyTo = (function (arglist__3151){
var x = cljs.core.first(arglist__3151);
var y = cljs.core.first(cljs.core.next(arglist__3151));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3151)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3151)));
return G__3150__delegate.call(this, x, y, z, args);
});
return G__3150;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3144.call(this);
case  1 :
return ep2__3145.call(this,x);
case  2 :
return ep2__3146.call(this,x,y);
case  3 :
return ep2__3147.call(this,x,y,z);
default:
return ep2__3148.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3148.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3133 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3152 = (function (){
return true;
});
var ep3__3153 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3108 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3108))
{var and__3546__auto____3109 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3109))
{return p3.call(null,x);
} else
{return and__3546__auto____3109;
}
} else
{return and__3546__auto____3108;
}
})());
});
var ep3__3154 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3110 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3110))
{var and__3546__auto____3111 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3111))
{var and__3546__auto____3112 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3112))
{var and__3546__auto____3113 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3113))
{var and__3546__auto____3114 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3114))
{return p3.call(null,y);
} else
{return and__3546__auto____3114;
}
} else
{return and__3546__auto____3113;
}
} else
{return and__3546__auto____3112;
}
} else
{return and__3546__auto____3111;
}
} else
{return and__3546__auto____3110;
}
})());
});
var ep3__3155 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3115 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3115))
{var and__3546__auto____3116 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3116))
{var and__3546__auto____3117 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3117))
{var and__3546__auto____3118 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3118))
{var and__3546__auto____3119 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3119))
{var and__3546__auto____3120 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3120))
{var and__3546__auto____3121 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3121))
{var and__3546__auto____3122 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3122))
{return p3.call(null,z);
} else
{return and__3546__auto____3122;
}
} else
{return and__3546__auto____3121;
}
} else
{return and__3546__auto____3120;
}
} else
{return and__3546__auto____3119;
}
} else
{return and__3546__auto____3118;
}
} else
{return and__3546__auto____3117;
}
} else
{return and__3546__auto____3116;
}
} else
{return and__3546__auto____3115;
}
})());
});
var ep3__3156 = (function() { 
var G__3158__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3123 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3123))
{return cljs.core.every_QMARK_.call(null,(function (p1__3078_SHARP_){
var and__3546__auto____3124 = p1.call(null,p1__3078_SHARP_);

if(cljs.core.truth_(and__3546__auto____3124))
{var and__3546__auto____3125 = p2.call(null,p1__3078_SHARP_);

if(cljs.core.truth_(and__3546__auto____3125))
{return p3.call(null,p1__3078_SHARP_);
} else
{return and__3546__auto____3125;
}
} else
{return and__3546__auto____3124;
}
}),args);
} else
{return and__3546__auto____3123;
}
})());
};
var G__3158 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3158__delegate.call(this, x, y, z, args);
};
G__3158.cljs$lang$maxFixedArity = 3;
G__3158.cljs$lang$applyTo = (function (arglist__3159){
var x = cljs.core.first(arglist__3159);
var y = cljs.core.first(cljs.core.next(arglist__3159));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3159)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3159)));
return G__3158__delegate.call(this, x, y, z, args);
});
return G__3158;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3152.call(this);
case  1 :
return ep3__3153.call(this,x);
case  2 :
return ep3__3154.call(this,x,y);
case  3 :
return ep3__3155.call(this,x,y,z);
default:
return ep3__3156.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3156.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3134 = (function() { 
var G__3160__delegate = function (p1,p2,p3,ps){
var ps__3126 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3161 = (function (){
return true;
});
var epn__3162 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3079_SHARP_){
return p1__3079_SHARP_.call(null,x);
}),ps__3126);
});
var epn__3163 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3080_SHARP_){
var and__3546__auto____3127 = p1__3080_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3127))
{return p1__3080_SHARP_.call(null,y);
} else
{return and__3546__auto____3127;
}
}),ps__3126);
});
var epn__3164 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3081_SHARP_){
var and__3546__auto____3128 = p1__3081_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3128))
{var and__3546__auto____3129 = p1__3081_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3129))
{return p1__3081_SHARP_.call(null,z);
} else
{return and__3546__auto____3129;
}
} else
{return and__3546__auto____3128;
}
}),ps__3126);
});
var epn__3165 = (function() { 
var G__3167__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3130 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3130))
{return cljs.core.every_QMARK_.call(null,(function (p1__3082_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3082_SHARP_,args);
}),ps__3126);
} else
{return and__3546__auto____3130;
}
})());
};
var G__3167 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3167__delegate.call(this, x, y, z, args);
};
G__3167.cljs$lang$maxFixedArity = 3;
G__3167.cljs$lang$applyTo = (function (arglist__3168){
var x = cljs.core.first(arglist__3168);
var y = cljs.core.first(cljs.core.next(arglist__3168));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3168)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3168)));
return G__3167__delegate.call(this, x, y, z, args);
});
return G__3167;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3161.call(this);
case  1 :
return epn__3162.call(this,x);
case  2 :
return epn__3163.call(this,x,y);
case  3 :
return epn__3164.call(this,x,y,z);
default:
return epn__3165.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3165.cljs$lang$applyTo;
return epn;
})()
};
var G__3160 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3160__delegate.call(this, p1, p2, p3, ps);
};
G__3160.cljs$lang$maxFixedArity = 3;
G__3160.cljs$lang$applyTo = (function (arglist__3169){
var p1 = cljs.core.first(arglist__3169);
var p2 = cljs.core.first(cljs.core.next(arglist__3169));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3169)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3169)));
return G__3160__delegate.call(this, p1, p2, p3, ps);
});
return G__3160;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3131.call(this,p1);
case  2 :
return every_pred__3132.call(this,p1,p2);
case  3 :
return every_pred__3133.call(this,p1,p2,p3);
default:
return every_pred__3134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3134.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3209 = (function (p){
return (function() {
var sp1 = null;
var sp1__3214 = (function (){
return null;
});
var sp1__3215 = (function (x){
return p.call(null,x);
});
var sp1__3216 = (function (x,y){
var or__3548__auto____3171 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3171))
{return or__3548__auto____3171;
} else
{return p.call(null,y);
}
});
var sp1__3217 = (function (x,y,z){
var or__3548__auto____3172 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3172))
{return or__3548__auto____3172;
} else
{var or__3548__auto____3173 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3173))
{return or__3548__auto____3173;
} else
{return p.call(null,z);
}
}
});
var sp1__3218 = (function() { 
var G__3220__delegate = function (x,y,z,args){
var or__3548__auto____3174 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3174))
{return or__3548__auto____3174;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3220 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3220__delegate.call(this, x, y, z, args);
};
G__3220.cljs$lang$maxFixedArity = 3;
G__3220.cljs$lang$applyTo = (function (arglist__3221){
var x = cljs.core.first(arglist__3221);
var y = cljs.core.first(cljs.core.next(arglist__3221));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3221)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3221)));
return G__3220__delegate.call(this, x, y, z, args);
});
return G__3220;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3214.call(this);
case  1 :
return sp1__3215.call(this,x);
case  2 :
return sp1__3216.call(this,x,y);
case  3 :
return sp1__3217.call(this,x,y,z);
default:
return sp1__3218.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3218.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3210 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3222 = (function (){
return null;
});
var sp2__3223 = (function (x){
var or__3548__auto____3175 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3175))
{return or__3548__auto____3175;
} else
{return p2.call(null,x);
}
});
var sp2__3224 = (function (x,y){
var or__3548__auto____3176 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3176))
{return or__3548__auto____3176;
} else
{var or__3548__auto____3177 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3177))
{return or__3548__auto____3177;
} else
{var or__3548__auto____3178 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3178))
{return or__3548__auto____3178;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3225 = (function (x,y,z){
var or__3548__auto____3179 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3179))
{return or__3548__auto____3179;
} else
{var or__3548__auto____3180 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3180))
{return or__3548__auto____3180;
} else
{var or__3548__auto____3181 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3181))
{return or__3548__auto____3181;
} else
{var or__3548__auto____3182 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3182))
{return or__3548__auto____3182;
} else
{var or__3548__auto____3183 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3183))
{return or__3548__auto____3183;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3226 = (function() { 
var G__3228__delegate = function (x,y,z,args){
var or__3548__auto____3184 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3184))
{return or__3548__auto____3184;
} else
{return cljs.core.some.call(null,(function (p1__3087_SHARP_){
var or__3548__auto____3185 = p1.call(null,p1__3087_SHARP_);

if(cljs.core.truth_(or__3548__auto____3185))
{return or__3548__auto____3185;
} else
{return p2.call(null,p1__3087_SHARP_);
}
}),args);
}
};
var G__3228 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3228__delegate.call(this, x, y, z, args);
};
G__3228.cljs$lang$maxFixedArity = 3;
G__3228.cljs$lang$applyTo = (function (arglist__3229){
var x = cljs.core.first(arglist__3229);
var y = cljs.core.first(cljs.core.next(arglist__3229));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3229)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3229)));
return G__3228__delegate.call(this, x, y, z, args);
});
return G__3228;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3222.call(this);
case  1 :
return sp2__3223.call(this,x);
case  2 :
return sp2__3224.call(this,x,y);
case  3 :
return sp2__3225.call(this,x,y,z);
default:
return sp2__3226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3226.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3211 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3230 = (function (){
return null;
});
var sp3__3231 = (function (x){
var or__3548__auto____3186 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3186))
{return or__3548__auto____3186;
} else
{var or__3548__auto____3187 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3187))
{return or__3548__auto____3187;
} else
{return p3.call(null,x);
}
}
});
var sp3__3232 = (function (x,y){
var or__3548__auto____3188 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3188))
{return or__3548__auto____3188;
} else
{var or__3548__auto____3189 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3189))
{return or__3548__auto____3189;
} else
{var or__3548__auto____3190 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3190))
{return or__3548__auto____3190;
} else
{var or__3548__auto____3191 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3191))
{return or__3548__auto____3191;
} else
{var or__3548__auto____3192 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3192))
{return or__3548__auto____3192;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3233 = (function (x,y,z){
var or__3548__auto____3193 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3193))
{return or__3548__auto____3193;
} else
{var or__3548__auto____3194 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3194))
{return or__3548__auto____3194;
} else
{var or__3548__auto____3195 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3195))
{return or__3548__auto____3195;
} else
{var or__3548__auto____3196 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3196))
{return or__3548__auto____3196;
} else
{var or__3548__auto____3197 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3197))
{return or__3548__auto____3197;
} else
{var or__3548__auto____3198 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3198))
{return or__3548__auto____3198;
} else
{var or__3548__auto____3199 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3199))
{return or__3548__auto____3199;
} else
{var or__3548__auto____3200 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3200))
{return or__3548__auto____3200;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3234 = (function() { 
var G__3236__delegate = function (x,y,z,args){
var or__3548__auto____3201 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3201))
{return or__3548__auto____3201;
} else
{return cljs.core.some.call(null,(function (p1__3088_SHARP_){
var or__3548__auto____3202 = p1.call(null,p1__3088_SHARP_);

if(cljs.core.truth_(or__3548__auto____3202))
{return or__3548__auto____3202;
} else
{var or__3548__auto____3203 = p2.call(null,p1__3088_SHARP_);

if(cljs.core.truth_(or__3548__auto____3203))
{return or__3548__auto____3203;
} else
{return p3.call(null,p1__3088_SHARP_);
}
}
}),args);
}
};
var G__3236 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3236__delegate.call(this, x, y, z, args);
};
G__3236.cljs$lang$maxFixedArity = 3;
G__3236.cljs$lang$applyTo = (function (arglist__3237){
var x = cljs.core.first(arglist__3237);
var y = cljs.core.first(cljs.core.next(arglist__3237));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3237)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3237)));
return G__3236__delegate.call(this, x, y, z, args);
});
return G__3236;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3230.call(this);
case  1 :
return sp3__3231.call(this,x);
case  2 :
return sp3__3232.call(this,x,y);
case  3 :
return sp3__3233.call(this,x,y,z);
default:
return sp3__3234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3234.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3212 = (function() { 
var G__3238__delegate = function (p1,p2,p3,ps){
var ps__3204 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3239 = (function (){
return null;
});
var spn__3240 = (function (x){
return cljs.core.some.call(null,(function (p1__3089_SHARP_){
return p1__3089_SHARP_.call(null,x);
}),ps__3204);
});
var spn__3241 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3090_SHARP_){
var or__3548__auto____3205 = p1__3090_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3205))
{return or__3548__auto____3205;
} else
{return p1__3090_SHARP_.call(null,y);
}
}),ps__3204);
});
var spn__3242 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3091_SHARP_){
var or__3548__auto____3206 = p1__3091_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3206))
{return or__3548__auto____3206;
} else
{var or__3548__auto____3207 = p1__3091_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3207))
{return or__3548__auto____3207;
} else
{return p1__3091_SHARP_.call(null,z);
}
}
}),ps__3204);
});
var spn__3243 = (function() { 
var G__3245__delegate = function (x,y,z,args){
var or__3548__auto____3208 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3208))
{return or__3548__auto____3208;
} else
{return cljs.core.some.call(null,(function (p1__3092_SHARP_){
return cljs.core.some.call(null,p1__3092_SHARP_,args);
}),ps__3204);
}
};
var G__3245 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3245__delegate.call(this, x, y, z, args);
};
G__3245.cljs$lang$maxFixedArity = 3;
G__3245.cljs$lang$applyTo = (function (arglist__3246){
var x = cljs.core.first(arglist__3246);
var y = cljs.core.first(cljs.core.next(arglist__3246));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3246)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3246)));
return G__3245__delegate.call(this, x, y, z, args);
});
return G__3245;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3239.call(this);
case  1 :
return spn__3240.call(this,x);
case  2 :
return spn__3241.call(this,x,y);
case  3 :
return spn__3242.call(this,x,y,z);
default:
return spn__3243.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3243.cljs$lang$applyTo;
return spn;
})()
};
var G__3238 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3238__delegate.call(this, p1, p2, p3, ps);
};
G__3238.cljs$lang$maxFixedArity = 3;
G__3238.cljs$lang$applyTo = (function (arglist__3247){
var p1 = cljs.core.first(arglist__3247);
var p2 = cljs.core.first(cljs.core.next(arglist__3247));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3247)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3247)));
return G__3238__delegate.call(this, p1, p2, p3, ps);
});
return G__3238;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3209.call(this,p1);
case  2 :
return some_fn__3210.call(this,p1,p2);
case  3 :
return some_fn__3211.call(this,p1,p2,p3);
default:
return some_fn__3212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3212.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3260 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3248 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3248))
{var s__3249 = temp__3698__auto____3248;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3249)),map.call(null,f,cljs.core.rest.call(null,s__3249)));
} else
{return null;
}
})));
});
var map__3261 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3250 = cljs.core.seq.call(null,c1);
var s2__3251 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3252 = s1__3250;

if(cljs.core.truth_(and__3546__auto____3252))
{return s2__3251;
} else
{return and__3546__auto____3252;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3250),cljs.core.first.call(null,s2__3251)),map.call(null,f,cljs.core.rest.call(null,s1__3250),cljs.core.rest.call(null,s2__3251)));
} else
{return null;
}
})));
});
var map__3262 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3253 = cljs.core.seq.call(null,c1);
var s2__3254 = cljs.core.seq.call(null,c2);
var s3__3255 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3256 = s1__3253;

if(cljs.core.truth_(and__3546__auto____3256))
{var and__3546__auto____3257 = s2__3254;

if(cljs.core.truth_(and__3546__auto____3257))
{return s3__3255;
} else
{return and__3546__auto____3257;
}
} else
{return and__3546__auto____3256;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3253),cljs.core.first.call(null,s2__3254),cljs.core.first.call(null,s3__3255)),map.call(null,f,cljs.core.rest.call(null,s1__3253),cljs.core.rest.call(null,s2__3254),cljs.core.rest.call(null,s3__3255)));
} else
{return null;
}
})));
});
var map__3263 = (function() { 
var G__3265__delegate = function (f,c1,c2,c3,colls){
var step__3259 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3258 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3258)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3258),step.call(null,map.call(null,cljs.core.rest,ss__3258)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3170_SHARP_){
return cljs.core.apply.call(null,f,p1__3170_SHARP_);
}),step__3259.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3265 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3265__delegate.call(this, f, c1, c2, c3, colls);
};
G__3265.cljs$lang$maxFixedArity = 4;
G__3265.cljs$lang$applyTo = (function (arglist__3266){
var f = cljs.core.first(arglist__3266);
var c1 = cljs.core.first(cljs.core.next(arglist__3266));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3266)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3266))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3266))));
return G__3265__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3265;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3260.call(this,f,c1);
case  3 :
return map__3261.call(this,f,c1,c2);
case  4 :
return map__3262.call(this,f,c1,c2,c3);
default:
return map__3263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3263.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3267 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3267))
{var s__3268 = temp__3698__auto____3267;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3268),take.call(null,(n - 1),cljs.core.rest.call(null,s__3268)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3271 = (function (n,coll){
while(true){
var s__3269 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3270 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3270))
{return s__3269;
} else
{return and__3546__auto____3270;
}
})()))
{{
var G__3272 = (n - 1);
var G__3273 = cljs.core.rest.call(null,s__3269);
n = G__3272;
coll = G__3273;
continue;
}
} else
{return s__3269;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3271.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3274 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3275 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3274.call(this,n);
case  2 :
return drop_last__3275.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3277 = cljs.core.seq.call(null,coll);
var lead__3278 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3278))
{{
var G__3279 = cljs.core.next.call(null,s__3277);
var G__3280 = cljs.core.next.call(null,lead__3278);
s__3277 = G__3279;
lead__3278 = G__3280;
continue;
}
} else
{return s__3277;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3283 = (function (pred,coll){
while(true){
var s__3281 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3282 = s__3281;

if(cljs.core.truth_(and__3546__auto____3282))
{return pred.call(null,cljs.core.first.call(null,s__3281));
} else
{return and__3546__auto____3282;
}
})()))
{{
var G__3284 = pred;
var G__3285 = cljs.core.rest.call(null,s__3281);
pred = G__3284;
coll = G__3285;
continue;
}
} else
{return s__3281;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3283.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3286 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3286))
{var s__3287 = temp__3698__auto____3286;

return cljs.core.concat.call(null,s__3287,cycle.call(null,s__3287));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3288 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3289 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3288.call(this,n);
case  2 :
return repeat__3289.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3291 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3292 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3291.call(this,n);
case  2 :
return repeatedly__3292.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3298 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3294 = cljs.core.seq.call(null,c1);
var s2__3295 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3296 = s1__3294;

if(cljs.core.truth_(and__3546__auto____3296))
{return s2__3295;
} else
{return and__3546__auto____3296;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3294),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3295),interleave.call(null,cljs.core.rest.call(null,s1__3294),cljs.core.rest.call(null,s2__3295))));
} else
{return null;
}
})));
});
var interleave__3299 = (function() { 
var G__3301__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3297 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3297)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3297),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3297)));
} else
{return null;
}
})));
};
var G__3301 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3301__delegate.call(this, c1, c2, colls);
};
G__3301.cljs$lang$maxFixedArity = 2;
G__3301.cljs$lang$applyTo = (function (arglist__3302){
var c1 = cljs.core.first(arglist__3302);
var c2 = cljs.core.first(cljs.core.next(arglist__3302));
var colls = cljs.core.rest(cljs.core.next(arglist__3302));
return G__3301__delegate.call(this, c1, c2, colls);
});
return G__3301;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3298.call(this,c1,c2);
default:
return interleave__3299.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3299.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3305 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3303 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3303))
{var coll__3304 = temp__3695__auto____3303;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3304),cat.call(null,cljs.core.rest.call(null,coll__3304),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3305.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3306 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3307 = (function() { 
var G__3309__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3309 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3309__delegate.call(this, f, coll, colls);
};
G__3309.cljs$lang$maxFixedArity = 2;
G__3309.cljs$lang$applyTo = (function (arglist__3310){
var f = cljs.core.first(arglist__3310);
var coll = cljs.core.first(cljs.core.next(arglist__3310));
var colls = cljs.core.rest(cljs.core.next(arglist__3310));
return G__3309__delegate.call(this, f, coll, colls);
});
return G__3309;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3306.call(this,f,coll);
default:
return mapcat__3307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3307.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3311 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3311))
{var s__3312 = temp__3698__auto____3311;

var f__3313 = cljs.core.first.call(null,s__3312);
var r__3314 = cljs.core.rest.call(null,s__3312);

if(cljs.core.truth_(pred.call(null,f__3313)))
{return cljs.core.cons.call(null,f__3313,filter.call(null,pred,r__3314));
} else
{return filter.call(null,pred,r__3314);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3316 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3316.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3315_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3315_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3323 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3324 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3317 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3317))
{var s__3318 = temp__3698__auto____3317;

var p__3319 = cljs.core.take.call(null,n,s__3318);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3319))))
{return cljs.core.cons.call(null,p__3319,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3318)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3325 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3320 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3320))
{var s__3321 = temp__3698__auto____3320;

var p__3322 = cljs.core.take.call(null,n,s__3321);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3322))))
{return cljs.core.cons.call(null,p__3322,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3321)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3322,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3323.call(this,n,step);
case  3 :
return partition__3324.call(this,n,step,pad);
case  4 :
return partition__3325.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3331 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3332 = (function (m,ks,not_found){
var sentinel__3327 = cljs.core.lookup_sentinel;
var m__3328 = m;
var ks__3329 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3329))
{var m__3330 = cljs.core.get.call(null,m__3328,cljs.core.first.call(null,ks__3329),sentinel__3327);

if(cljs.core.truth_((sentinel__3327 === m__3330)))
{return not_found;
} else
{{
var G__3334 = sentinel__3327;
var G__3335 = m__3330;
var G__3336 = cljs.core.next.call(null,ks__3329);
sentinel__3327 = G__3334;
m__3328 = G__3335;
ks__3329 = G__3336;
continue;
}
}
} else
{return m__3328;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3331.call(this,m,ks);
case  3 :
return get_in__3332.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3337,v){
var vec__3338__3339 = p__3337;
var k__3340 = cljs.core.nth.call(null,vec__3338__3339,0,null);
var ks__3341 = cljs.core.nthnext.call(null,vec__3338__3339,1);

if(cljs.core.truth_(ks__3341))
{return cljs.core.assoc.call(null,m,k__3340,assoc_in.call(null,cljs.core.get.call(null,m,k__3340),ks__3341,v));
} else
{return cljs.core.assoc.call(null,m,k__3340,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3342,f,args){
var vec__3343__3344 = p__3342;
var k__3345 = cljs.core.nth.call(null,vec__3343__3344,0,null);
var ks__3346 = cljs.core.nthnext.call(null,vec__3343__3344,1);

if(cljs.core.truth_(ks__3346))
{return cljs.core.assoc.call(null,m,k__3345,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3345),ks__3346,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3345,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3345),args));
}
};
var update_in = function (m,p__3342,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3342, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3347){
var m = cljs.core.first(arglist__3347);
var p__3342 = cljs.core.first(cljs.core.next(arglist__3347));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3347)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3347)));
return update_in__delegate.call(this, m, p__3342, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3348 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3373 = null;
var G__3373__3374 = (function (coll,k){
var this__3349 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3373__3375 = (function (coll,k,not_found){
var this__3350 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3373 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3373__3374.call(this,coll,k);
case  3 :
return G__3373__3375.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3373;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3351 = this;
var new_array__3352 = cljs.core.aclone.call(null,this__3351.array);

(new_array__3352[k] = v);
return (new cljs.core.Vector(this__3351.meta,new_array__3352));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3353 = this;
var new_array__3354 = cljs.core.aclone.call(null,this__3353.array);

new_array__3354.push(o);
return (new cljs.core.Vector(this__3353.meta,new_array__3354));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3377 = null;
var G__3377__3378 = (function (v,f){
var this__3355 = this;
return cljs.core.ci_reduce.call(null,this__3355.array,f);
});
var G__3377__3379 = (function (v,f,start){
var this__3356 = this;
return cljs.core.ci_reduce.call(null,this__3356.array,f,start);
});
G__3377 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3377__3378.call(this,v,f);
case  3 :
return G__3377__3379.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3377;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3357 = this;
if(cljs.core.truth_((this__3357.array.length > 0)))
{var vector_seq__3358 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3357.array.length)))
{return cljs.core.cons.call(null,(this__3357.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3358.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3359 = this;
return this__3359.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3360 = this;
var count__3361 = this__3360.array.length;

if(cljs.core.truth_((count__3361 > 0)))
{return (this__3360.array[(count__3361 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3362 = this;
if(cljs.core.truth_((this__3362.array.length > 0)))
{var new_array__3363 = cljs.core.aclone.call(null,this__3362.array);

new_array__3363.pop();
return (new cljs.core.Vector(this__3362.meta,new_array__3363));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3364 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3365 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3366 = this;
return (new cljs.core.Vector(meta,this__3366.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3367 = this;
return this__3367.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3381 = null;
var G__3381__3382 = (function (coll,n){
var this__3368 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3369 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3369))
{return (n < this__3368.array.length);
} else
{return and__3546__auto____3369;
}
})()))
{return (this__3368.array[n]);
} else
{return null;
}
});
var G__3381__3383 = (function (coll,n,not_found){
var this__3370 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3371 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3371))
{return (n < this__3370.array.length);
} else
{return and__3546__auto____3371;
}
})()))
{return (this__3370.array[n]);
} else
{return not_found;
}
});
G__3381 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3381__3382.call(this,coll,n);
case  3 :
return G__3381__3383.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3381;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3372 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3372.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3385 = null;
var G__3385__3386 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3385__3387 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3385 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3385__3386.call(this,_,k);
case  3 :
return G__3385__3387.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3385;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3389){
var args = cljs.core.seq( arglist__3389 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3390 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3410 = null;
var G__3410__3411 = (function (coll,k){
var this__3391 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3410__3412 = (function (coll,k,not_found){
var this__3392 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3410 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3410__3411.call(this,coll,k);
case  3 :
return G__3410__3412.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3410;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__3393 = this;
var v_pos__3394 = (this__3393.start + key);

return (new cljs.core.Subvec(this__3393.meta,cljs.core._assoc.call(null,this__3393.v,v_pos__3394,val),this__3393.start,((this__3393.end > (v_pos__3394 + 1)) ? this__3393.end : (v_pos__3394 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3395 = this;
return (new cljs.core.Subvec(this__3395.meta,cljs.core._assoc_n.call(null,this__3395.v,this__3395.end,o),this__3395.start,(this__3395.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3414 = null;
var G__3414__3415 = (function (coll,f){
var this__3396 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__3414__3416 = (function (coll,f,start){
var this__3397 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__3414 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3414__3415.call(this,coll,f);
case  3 :
return G__3414__3416.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3414;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3398 = this;
var subvec_seq__3399 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__3398.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__3398.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__3399.call(null,this__3398.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3400 = this;
return (this__3400.end - this__3400.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3401 = this;
return cljs.core._nth.call(null,this__3401.v,(this__3401.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3402 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__3402.start,this__3402.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__3402.meta,this__3402.v,this__3402.start,(this__3402.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3403 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3404 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3405 = this;
return (new cljs.core.Subvec(meta,this__3405.v,this__3405.start,this__3405.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3406 = this;
return this__3406.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3418 = null;
var G__3418__3419 = (function (coll,n){
var this__3407 = this;
return cljs.core._nth.call(null,this__3407.v,(this__3407.start + n));
});
var G__3418__3420 = (function (coll,n,not_found){
var this__3408 = this;
return cljs.core._nth.call(null,this__3408.v,(this__3408.start + n),not_found);
});
G__3418 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3418__3419.call(this,coll,n);
case  3 :
return G__3418__3420.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3418;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3409 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3409.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__3422 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3423 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__3422.call(this,v,start);
case  3 :
return subvec__3423.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__3425 = null;
var G__3425__3426 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3425__3427 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3425 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3425__3426.call(this,_,k);
case  3 :
return G__3425__3427.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3425;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3429 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3430 = array.length;

var i__3431 = 0;

while(true){
if(cljs.core.truth_((i__3431 < len__3430)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3431]))))
{return i__3431;
} else
{{
var G__3432 = (i__3431 + incr);
i__3431 = G__3432;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3434 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3435 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3433 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3433))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3433;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3434.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3435.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3438 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3457 = null;
var G__3457__3458 = (function (coll,k){
var this__3439 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3457__3459 = (function (coll,k,not_found){
var this__3440 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3440.strobj,(this__3440.strobj[k]),not_found);
});
G__3457 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3457__3458.call(this,coll,k);
case  3 :
return G__3457__3459.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3457;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3441 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3442 = goog.object.clone.call(null,this__3441.strobj);
var overwrite_QMARK___3443 = new_strobj__3442.hasOwnProperty(k);

(new_strobj__3442[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3443))
{return (new cljs.core.ObjMap(this__3441.meta,this__3441.keys,new_strobj__3442));
} else
{var new_keys__3444 = cljs.core.aclone.call(null,this__3441.keys);

new_keys__3444.push(k);
return (new cljs.core.ObjMap(this__3441.meta,new_keys__3444,new_strobj__3442));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3441.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3445 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3445.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3446 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3447 = this;
if(cljs.core.truth_((this__3447.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3437_SHARP_){
return cljs.core.vector.call(null,p1__3437_SHARP_,(this__3447.strobj[p1__3437_SHARP_]));
}),this__3447.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3448 = this;
return this__3448.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3449 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3450 = this;
return (new cljs.core.ObjMap(meta,this__3450.keys,this__3450.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3451 = this;
return this__3451.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3452 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3452.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3453 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3454 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3454))
{return this__3453.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3454;
}
})()))
{var new_keys__3455 = cljs.core.aclone.call(null,this__3453.keys);
var new_strobj__3456 = goog.object.clone.call(null,this__3453.strobj);

new_keys__3455.splice(cljs.core.scan_array.call(null,1,k,new_keys__3455),1);
cljs.core.js_delete.call(null,new_strobj__3456,k);
return (new cljs.core.ObjMap(this__3453.meta,new_keys__3455,new_strobj__3456));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3462 = null;
var G__3462__3463 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3462__3464 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3462 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3462__3463.call(this,_,k);
case  3 :
return G__3462__3464.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3462;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3466 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3496 = null;
var G__3496__3497 = (function (coll,k){
var this__3467 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3496__3498 = (function (coll,k,not_found){
var this__3468 = this;
var bucket__3469 = (this__3468.hashobj[cljs.core.hash.call(null,k)]);
var i__3470 = (cljs.core.truth_(bucket__3469)?cljs.core.scan_array.call(null,2,k,bucket__3469):null);

if(cljs.core.truth_(i__3470))
{return (bucket__3469[(i__3470 + 1)]);
} else
{return not_found;
}
});
G__3496 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3496__3497.call(this,coll,k);
case  3 :
return G__3496__3498.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3496;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3471 = this;
var h__3472 = cljs.core.hash.call(null,k);
var bucket__3473 = (this__3471.hashobj[h__3472]);

if(cljs.core.truth_(bucket__3473))
{var new_bucket__3474 = cljs.core.aclone.call(null,bucket__3473);
var new_hashobj__3475 = goog.object.clone.call(null,this__3471.hashobj);

(new_hashobj__3475[h__3472] = new_bucket__3474);
var temp__3695__auto____3476 = cljs.core.scan_array.call(null,2,k,new_bucket__3474);

if(cljs.core.truth_(temp__3695__auto____3476))
{var i__3477 = temp__3695__auto____3476;

(new_bucket__3474[(i__3477 + 1)] = v);
return (new cljs.core.HashMap(this__3471.meta,this__3471.count,new_hashobj__3475));
} else
{new_bucket__3474.push(k,v);
return (new cljs.core.HashMap(this__3471.meta,(this__3471.count + 1),new_hashobj__3475));
}
} else
{var new_hashobj__3478 = goog.object.clone.call(null,this__3471.hashobj);

(new_hashobj__3478[h__3472] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3471.meta,(this__3471.count + 1),new_hashobj__3478));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3479 = this;
var bucket__3480 = (this__3479.hashobj[cljs.core.hash.call(null,k)]);
var i__3481 = (cljs.core.truth_(bucket__3480)?cljs.core.scan_array.call(null,2,k,bucket__3480):null);

if(cljs.core.truth_(i__3481))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3482 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3483 = this;
if(cljs.core.truth_((this__3483.count > 0)))
{var hashes__3484 = cljs.core.js_keys.call(null,this__3483.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3461_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3483.hashobj[p1__3461_SHARP_])));
}),hashes__3484);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3485 = this;
return this__3485.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3486 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3487 = this;
return (new cljs.core.HashMap(meta,this__3487.count,this__3487.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3488 = this;
return this__3488.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3489 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3489.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3490 = this;
var h__3491 = cljs.core.hash.call(null,k);
var bucket__3492 = (this__3490.hashobj[h__3491]);
var i__3493 = (cljs.core.truth_(bucket__3492)?cljs.core.scan_array.call(null,2,k,bucket__3492):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3493)))
{return coll;
} else
{var new_hashobj__3494 = goog.object.clone.call(null,this__3490.hashobj);

if(cljs.core.truth_((3 > bucket__3492.length)))
{cljs.core.js_delete.call(null,new_hashobj__3494,h__3491);
} else
{var new_bucket__3495 = cljs.core.aclone.call(null,bucket__3492);

new_bucket__3495.splice(i__3493,2);
(new_hashobj__3494[h__3491] = new_bucket__3495);
}
return (new cljs.core.HashMap(this__3490.meta,(this__3490.count - 1),new_hashobj__3494));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3500 = ks.length;

var i__3501 = 0;
var out__3502 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3501 < len__3500)))
{{
var G__3503 = (i__3501 + 1);
var G__3504 = cljs.core.assoc.call(null,out__3502,(ks[i__3501]),(vs[i__3501]));
i__3501 = G__3503;
out__3502 = G__3504;
continue;
}
} else
{return out__3502;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3505 = null;
var G__3505__3506 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3505__3507 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3505 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3505__3506.call(this,_,k);
case  3 :
return G__3505__3507.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3505;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3509 = cljs.core.seq.call(null,keyvals);
var out__3510 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3509))
{{
var G__3511 = cljs.core.nnext.call(null,in$__3509);
var G__3512 = cljs.core.assoc.call(null,out__3510,cljs.core.first.call(null,in$__3509),cljs.core.second.call(null,in$__3509));
in$__3509 = G__3511;
out__3510 = G__3512;
continue;
}
} else
{return out__3510;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3513){
var keyvals = cljs.core.seq( arglist__3513 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3514_SHARP_,p2__3515_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3516 = p1__3514_SHARP_;

if(cljs.core.truth_(or__3548__auto____3516))
{return or__3548__auto____3516;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3515_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3517){
var maps = cljs.core.seq( arglist__3517 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3520 = (function (m,e){
var k__3518 = cljs.core.first.call(null,e);
var v__3519 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3518)))
{return cljs.core.assoc.call(null,m,k__3518,f.call(null,cljs.core.get.call(null,m,k__3518),v__3519));
} else
{return cljs.core.assoc.call(null,m,k__3518,v__3519);
}
});
var merge2__3522 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3520,(function (){var or__3548__auto____3521 = m1;

if(cljs.core.truth_(or__3548__auto____3521))
{return or__3548__auto____3521;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3522,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3523){
var f = cljs.core.first(arglist__3523);
var maps = cljs.core.rest(arglist__3523);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3525 = cljs.core.ObjMap.fromObject([],{});
var keys__3526 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3526))
{var key__3527 = cljs.core.first.call(null,keys__3526);
var entry__3528 = cljs.core.get.call(null,map,key__3527,"﷐'user/not-found");

{
var G__3529 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3528,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3525,key__3527,entry__3528):ret__3525);
var G__3530 = cljs.core.next.call(null,keys__3526);
ret__3525 = G__3529;
keys__3526 = G__3530;
continue;
}
} else
{return ret__3525;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3531 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3544 = null;
var G__3544__3545 = (function (coll,v){
var this__3532 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3544__3546 = (function (coll,v,not_found){
var this__3533 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3533.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3544 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3544__3545.call(this,coll,v);
case  3 :
return G__3544__3546.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3544;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3534 = this;
return (new cljs.core.Set(this__3534.meta,cljs.core.assoc.call(null,this__3534.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3535 = this;
return cljs.core.keys.call(null,this__3535.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3536 = this;
return (new cljs.core.Set(this__3536.meta,cljs.core.dissoc.call(null,this__3536.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3537 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3538 = this;
var and__3546__auto____3539 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3539))
{var and__3546__auto____3540 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3540))
{return cljs.core.every_QMARK_.call(null,(function (p1__3524_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3524_SHARP_);
}),other);
} else
{return and__3546__auto____3540;
}
} else
{return and__3546__auto____3539;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3541 = this;
return (new cljs.core.Set(meta,this__3541.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3542 = this;
return this__3542.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3543 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3543.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3548 = null;
var G__3548__3549 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3548__3550 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3548 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3548__3549.call(this,_,k);
case  3 :
return G__3548__3550.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3548;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3553 = cljs.core.seq.call(null,coll);
var out__3554 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3553))))
{{
var G__3555 = cljs.core.rest.call(null,in$__3553);
var G__3556 = cljs.core.conj.call(null,out__3554,cljs.core.first.call(null,in$__3553));
in$__3553 = G__3555;
out__3554 = G__3556;
continue;
}
} else
{return out__3554;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3557 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3558 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3558))
{var e__3559 = temp__3695__auto____3558;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3559));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3557,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3552_SHARP_){
var temp__3695__auto____3560 = cljs.core.find.call(null,smap,p1__3552_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3560))
{var e__3561 = temp__3695__auto____3560;

return cljs.core.second.call(null,e__3561);
} else
{return p1__3552_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3569 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3562,seen){
while(true){
var vec__3563__3564 = p__3562;
var f__3565 = cljs.core.nth.call(null,vec__3563__3564,0,null);
var xs__3566 = vec__3563__3564;

var temp__3698__auto____3567 = cljs.core.seq.call(null,xs__3566);

if(cljs.core.truth_(temp__3698__auto____3567))
{var s__3568 = temp__3698__auto____3567;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3565)))
{{
var G__3570 = cljs.core.rest.call(null,s__3568);
var G__3571 = seen;
p__3562 = G__3570;
seen = G__3571;
continue;
}
} else
{return cljs.core.cons.call(null,f__3565,step.call(null,cljs.core.rest.call(null,s__3568),cljs.core.conj.call(null,seen,f__3565)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3569.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3572 = cljs.core.Vector.fromArray([]);
var s__3573 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3573)))
{{
var G__3574 = cljs.core.conj.call(null,ret__3572,cljs.core.first.call(null,s__3573));
var G__3575 = cljs.core.next.call(null,s__3573);
ret__3572 = G__3574;
s__3573 = G__3575;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3572);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3576 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3576))
{return or__3548__auto____3576;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3577 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3577 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3577 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3578 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3578))
{return or__3548__auto____3578;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3579 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3579 > -1)))
{return cljs.core.subs.call(null,x,2,i__3579);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3582 = cljs.core.ObjMap.fromObject([],{});
var ks__3583 = cljs.core.seq.call(null,keys);
var vs__3584 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3585 = ks__3583;

if(cljs.core.truth_(and__3546__auto____3585))
{return vs__3584;
} else
{return and__3546__auto____3585;
}
})()))
{{
var G__3586 = cljs.core.assoc.call(null,map__3582,cljs.core.first.call(null,ks__3583),cljs.core.first.call(null,vs__3584));
var G__3587 = cljs.core.next.call(null,ks__3583);
var G__3588 = cljs.core.next.call(null,vs__3584);
map__3582 = G__3586;
ks__3583 = G__3587;
vs__3584 = G__3588;
continue;
}
} else
{return map__3582;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3591 = (function (k,x){
return x;
});
var max_key__3592 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3593 = (function() { 
var G__3595__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3580_SHARP_,p2__3581_SHARP_){
return max_key.call(null,k,p1__3580_SHARP_,p2__3581_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3595 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3595__delegate.call(this, k, x, y, more);
};
G__3595.cljs$lang$maxFixedArity = 3;
G__3595.cljs$lang$applyTo = (function (arglist__3596){
var k = cljs.core.first(arglist__3596);
var x = cljs.core.first(cljs.core.next(arglist__3596));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3596)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3596)));
return G__3595__delegate.call(this, k, x, y, more);
});
return G__3595;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3591.call(this,k,x);
case  3 :
return max_key__3592.call(this,k,x,y);
default:
return max_key__3593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3593.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3597 = (function (k,x){
return x;
});
var min_key__3598 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3599 = (function() { 
var G__3601__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3589_SHARP_,p2__3590_SHARP_){
return min_key.call(null,k,p1__3589_SHARP_,p2__3590_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3601 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3601__delegate.call(this, k, x, y, more);
};
G__3601.cljs$lang$maxFixedArity = 3;
G__3601.cljs$lang$applyTo = (function (arglist__3602){
var k = cljs.core.first(arglist__3602);
var x = cljs.core.first(cljs.core.next(arglist__3602));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3602)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3602)));
return G__3601__delegate.call(this, k, x, y, more);
});
return G__3601;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3597.call(this,k,x);
case  3 :
return min_key__3598.call(this,k,x,y);
default:
return min_key__3599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3599.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3605 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3606 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3603 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3603))
{var s__3604 = temp__3698__auto____3603;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3604),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3604)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3605.call(this,n,step);
case  3 :
return partition_all__3606.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3608 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3608))
{var s__3609 = temp__3698__auto____3608;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3609))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3609),take_while.call(null,pred,cljs.core.rest.call(null,s__3609)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3610 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3611 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3627 = null;
var G__3627__3628 = (function (rng,f){
var this__3612 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3627__3629 = (function (rng,f,s){
var this__3613 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3627 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3627__3628.call(this,rng,f);
case  3 :
return G__3627__3629.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3627;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3614 = this;
var comp__3615 = (cljs.core.truth_((this__3614.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3615.call(null,this__3614.start,this__3614.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3616 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3616.end - this__3616.start) / this__3616.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3617 = this;
return this__3617.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3618 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3618.meta,(this__3618.start + this__3618.step),this__3618.end,this__3618.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3619 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3620 = this;
return (new cljs.core.Range(meta,this__3620.start,this__3620.end,this__3620.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3621 = this;
return this__3621.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3631 = null;
var G__3631__3632 = (function (rng,n){
var this__3622 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3622.start + (n * this__3622.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3623 = (this__3622.start > this__3622.end);

if(cljs.core.truth_(and__3546__auto____3623))
{return cljs.core._EQ_.call(null,this__3622.step,0);
} else
{return and__3546__auto____3623;
}
})()))
{return this__3622.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3631__3633 = (function (rng,n,not_found){
var this__3624 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3624.start + (n * this__3624.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3625 = (this__3624.start > this__3624.end);

if(cljs.core.truth_(and__3546__auto____3625))
{return cljs.core._EQ_.call(null,this__3624.step,0);
} else
{return and__3546__auto____3625;
}
})()))
{return this__3624.start;
} else
{return not_found;
}
}
});
G__3631 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3631__3632.call(this,rng,n);
case  3 :
return G__3631__3633.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3631;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3626 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3626.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3635 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3636 = (function (end){
return range.call(null,0,end,1);
});
var range__3637 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3638 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3635.call(this);
case  1 :
return range__3636.call(this,start);
case  2 :
return range__3637.call(this,start,end);
case  3 :
return range__3638.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3640 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3640))
{var s__3641 = temp__3698__auto____3640;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3641),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3641)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3643 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3643))
{var s__3644 = temp__3698__auto____3643;

var fst__3645 = cljs.core.first.call(null,s__3644);
var fv__3646 = f.call(null,fst__3645);
var run__3647 = cljs.core.cons.call(null,fst__3645,cljs.core.take_while.call(null,(function (p1__3642_SHARP_){
return cljs.core._EQ_.call(null,fv__3646,f.call(null,p1__3642_SHARP_));
}),cljs.core.next.call(null,s__3644)));

return cljs.core.cons.call(null,run__3647,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3647),s__3644))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3662 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3658 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3658))
{var s__3659 = temp__3695__auto____3658;

return reductions.call(null,f,cljs.core.first.call(null,s__3659),cljs.core.rest.call(null,s__3659));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3663 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3660 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3660))
{var s__3661 = temp__3698__auto____3660;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3661)),cljs.core.rest.call(null,s__3661));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3662.call(this,f,init);
case  3 :
return reductions__3663.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3666 = (function (f){
return (function() {
var G__3671 = null;
var G__3671__3672 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3671__3673 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3671__3674 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3671__3675 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3671__3676 = (function() { 
var G__3678__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3678 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3678__delegate.call(this, x, y, z, args);
};
G__3678.cljs$lang$maxFixedArity = 3;
G__3678.cljs$lang$applyTo = (function (arglist__3679){
var x = cljs.core.first(arglist__3679);
var y = cljs.core.first(cljs.core.next(arglist__3679));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3679)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3679)));
return G__3678__delegate.call(this, x, y, z, args);
});
return G__3678;
})()
;
G__3671 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3671__3672.call(this);
case  1 :
return G__3671__3673.call(this,x);
case  2 :
return G__3671__3674.call(this,x,y);
case  3 :
return G__3671__3675.call(this,x,y,z);
default:
return G__3671__3676.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3671.cljs$lang$maxFixedArity = 3;
G__3671.cljs$lang$applyTo = G__3671__3676.cljs$lang$applyTo;
return G__3671;
})()
});
var juxt__3667 = (function (f,g){
return (function() {
var G__3680 = null;
var G__3680__3681 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3680__3682 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3680__3683 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3680__3684 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3680__3685 = (function() { 
var G__3687__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3687 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3687__delegate.call(this, x, y, z, args);
};
G__3687.cljs$lang$maxFixedArity = 3;
G__3687.cljs$lang$applyTo = (function (arglist__3688){
var x = cljs.core.first(arglist__3688);
var y = cljs.core.first(cljs.core.next(arglist__3688));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3688)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3688)));
return G__3687__delegate.call(this, x, y, z, args);
});
return G__3687;
})()
;
G__3680 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3680__3681.call(this);
case  1 :
return G__3680__3682.call(this,x);
case  2 :
return G__3680__3683.call(this,x,y);
case  3 :
return G__3680__3684.call(this,x,y,z);
default:
return G__3680__3685.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3680.cljs$lang$maxFixedArity = 3;
G__3680.cljs$lang$applyTo = G__3680__3685.cljs$lang$applyTo;
return G__3680;
})()
});
var juxt__3668 = (function (f,g,h){
return (function() {
var G__3689 = null;
var G__3689__3690 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3689__3691 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3689__3692 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3689__3693 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3689__3694 = (function() { 
var G__3696__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3696 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3696__delegate.call(this, x, y, z, args);
};
G__3696.cljs$lang$maxFixedArity = 3;
G__3696.cljs$lang$applyTo = (function (arglist__3697){
var x = cljs.core.first(arglist__3697);
var y = cljs.core.first(cljs.core.next(arglist__3697));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3697)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3697)));
return G__3696__delegate.call(this, x, y, z, args);
});
return G__3696;
})()
;
G__3689 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3689__3690.call(this);
case  1 :
return G__3689__3691.call(this,x);
case  2 :
return G__3689__3692.call(this,x,y);
case  3 :
return G__3689__3693.call(this,x,y,z);
default:
return G__3689__3694.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3689.cljs$lang$maxFixedArity = 3;
G__3689.cljs$lang$applyTo = G__3689__3694.cljs$lang$applyTo;
return G__3689;
})()
});
var juxt__3669 = (function() { 
var G__3698__delegate = function (f,g,h,fs){
var fs__3665 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3699 = null;
var G__3699__3700 = (function (){
return cljs.core.reduce.call(null,(function (p1__3648_SHARP_,p2__3649_SHARP_){
return cljs.core.conj.call(null,p1__3648_SHARP_,p2__3649_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3665);
});
var G__3699__3701 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3650_SHARP_,p2__3651_SHARP_){
return cljs.core.conj.call(null,p1__3650_SHARP_,p2__3651_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3665);
});
var G__3699__3702 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3652_SHARP_,p2__3653_SHARP_){
return cljs.core.conj.call(null,p1__3652_SHARP_,p2__3653_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3665);
});
var G__3699__3703 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3654_SHARP_,p2__3655_SHARP_){
return cljs.core.conj.call(null,p1__3654_SHARP_,p2__3655_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3665);
});
var G__3699__3704 = (function() { 
var G__3706__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3656_SHARP_,p2__3657_SHARP_){
return cljs.core.conj.call(null,p1__3656_SHARP_,cljs.core.apply.call(null,p2__3657_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3665);
};
var G__3706 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3706__delegate.call(this, x, y, z, args);
};
G__3706.cljs$lang$maxFixedArity = 3;
G__3706.cljs$lang$applyTo = (function (arglist__3707){
var x = cljs.core.first(arglist__3707);
var y = cljs.core.first(cljs.core.next(arglist__3707));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3707)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3707)));
return G__3706__delegate.call(this, x, y, z, args);
});
return G__3706;
})()
;
G__3699 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3699__3700.call(this);
case  1 :
return G__3699__3701.call(this,x);
case  2 :
return G__3699__3702.call(this,x,y);
case  3 :
return G__3699__3703.call(this,x,y,z);
default:
return G__3699__3704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3699.cljs$lang$maxFixedArity = 3;
G__3699.cljs$lang$applyTo = G__3699__3704.cljs$lang$applyTo;
return G__3699;
})()
};
var G__3698 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3698__delegate.call(this, f, g, h, fs);
};
G__3698.cljs$lang$maxFixedArity = 3;
G__3698.cljs$lang$applyTo = (function (arglist__3708){
var f = cljs.core.first(arglist__3708);
var g = cljs.core.first(cljs.core.next(arglist__3708));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3708)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3708)));
return G__3698__delegate.call(this, f, g, h, fs);
});
return G__3698;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3666.call(this,f);
case  2 :
return juxt__3667.call(this,f,g);
case  3 :
return juxt__3668.call(this,f,g,h);
default:
return juxt__3669.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3669.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3710 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3713 = cljs.core.next.call(null,coll);
coll = G__3713;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3711 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3709 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3709))
{return (n > 0);
} else
{return and__3546__auto____3709;
}
})()))
{{
var G__3714 = (n - 1);
var G__3715 = cljs.core.next.call(null,coll);
n = G__3714;
coll = G__3715;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3710.call(this,n);
case  2 :
return dorun__3711.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3716 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3717 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3716.call(this,n);
case  2 :
return doall__3717.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3719 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3719),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3719),1)))
{return cljs.core.first.call(null,matches__3719);
} else
{return cljs.core.vec.call(null,matches__3719);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3720 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3720)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3720),1)))
{return cljs.core.first.call(null,matches__3720);
} else
{return cljs.core.vec.call(null,matches__3720);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3721 = cljs.core.re_find.call(null,re,s);
var match_idx__3722 = s.search(re);
var match_str__3723 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3721))?cljs.core.first.call(null,match_data__3721):match_data__3721);
var post_match__3724 = cljs.core.subs.call(null,s,(match_idx__3722 + cljs.core.count.call(null,match_str__3723)));

if(cljs.core.truth_(match_data__3721))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3721,re_seq.call(null,re,post_match__3724));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3725_SHARP_){
return print_one.call(null,p1__3725_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3726 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3726))
{var and__3546__auto____3730 = (function (){var x__321__auto____3727 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3728 = x__321__auto____3727;

if(cljs.core.truth_(and__3546__auto____3728))
{var and__3546__auto____3729 = x__321__auto____3727.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3729))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____3727));
} else
{return and__3546__auto____3729;
}
} else
{return and__3546__auto____3728;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__321__auto____3727);
}
})();

if(cljs.core.truth_(and__3546__auto____3730))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3730;
}
} else
{return and__3546__auto____3726;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__321__auto____3731 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3732 = x__321__auto____3731;

if(cljs.core.truth_(and__3546__auto____3732))
{var and__3546__auto____3733 = x__321__auto____3731.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3733))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____3731));
} else
{return and__3546__auto____3733;
}
} else
{return and__3546__auto____3732;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__321__auto____3731);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3734 = cljs.core.first.call(null,objs);
var sb__3735 = (new goog.string.StringBuffer());

var G__3736__3737 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3736__3737))
{var obj__3738 = cljs.core.first.call(null,G__3736__3737);
var G__3736__3739 = G__3736__3737;

while(true){
if(cljs.core.truth_((obj__3738 === first_obj__3734)))
{} else
{sb__3735.append(" ");
}
var G__3740__3741 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3738,opts));

if(cljs.core.truth_(G__3740__3741))
{var string__3742 = cljs.core.first.call(null,G__3740__3741);
var G__3740__3743 = G__3740__3741;

while(true){
sb__3735.append(string__3742);
var temp__3698__auto____3744 = cljs.core.next.call(null,G__3740__3743);

if(cljs.core.truth_(temp__3698__auto____3744))
{var G__3740__3745 = temp__3698__auto____3744;

{
var G__3748 = cljs.core.first.call(null,G__3740__3745);
var G__3749 = G__3740__3745;
string__3742 = G__3748;
G__3740__3743 = G__3749;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3746 = cljs.core.next.call(null,G__3736__3739);

if(cljs.core.truth_(temp__3698__auto____3746))
{var G__3736__3747 = temp__3698__auto____3746;

{
var G__3750 = cljs.core.first.call(null,G__3736__3747);
var G__3751 = G__3736__3747;
obj__3738 = G__3750;
G__3736__3739 = G__3751;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3735);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3752 = cljs.core.first.call(null,objs);

var G__3753__3754 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3753__3754))
{var obj__3755 = cljs.core.first.call(null,G__3753__3754);
var G__3753__3756 = G__3753__3754;

while(true){
if(cljs.core.truth_((obj__3755 === first_obj__3752)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3757__3758 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3755,opts));

if(cljs.core.truth_(G__3757__3758))
{var string__3759 = cljs.core.first.call(null,G__3757__3758);
var G__3757__3760 = G__3757__3758;

while(true){
cljs.core.string_print.call(null,string__3759);
var temp__3698__auto____3761 = cljs.core.next.call(null,G__3757__3760);

if(cljs.core.truth_(temp__3698__auto____3761))
{var G__3757__3762 = temp__3698__auto____3761;

{
var G__3765 = cljs.core.first.call(null,G__3757__3762);
var G__3766 = G__3757__3762;
string__3759 = G__3765;
G__3757__3760 = G__3766;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3763 = cljs.core.next.call(null,G__3753__3756);

if(cljs.core.truth_(temp__3698__auto____3763))
{var G__3753__3764 = temp__3698__auto____3763;

{
var G__3767 = cljs.core.first.call(null,G__3753__3764);
var G__3768 = G__3753__3764;
obj__3755 = G__3767;
G__3753__3756 = G__3768;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3769){
var objs = cljs.core.seq( arglist__3769 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3770){
var objs = cljs.core.seq( arglist__3770 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3771){
var objs = cljs.core.seq( arglist__3771 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3772){
var objs = cljs.core.seq( arglist__3772 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3773){
var objs = cljs.core.seq( arglist__3773 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3774 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3774,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3775 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3775))
{var nspc__3776 = temp__3698__auto____3775;

return cljs.core.str.call(null,nspc__3776,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3777 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3777))
{var nspc__3778 = temp__3698__auto____3777;

return cljs.core.str.call(null,nspc__3778,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3779 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3779,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__3780 = this;
var G__3781__3782 = cljs.core.seq.call(null,this__3780.watches);

if(cljs.core.truth_(G__3781__3782))
{var G__3784__3786 = cljs.core.first.call(null,G__3781__3782);
var vec__3785__3787 = G__3784__3786;
var key__3788 = cljs.core.nth.call(null,vec__3785__3787,0,null);
var f__3789 = cljs.core.nth.call(null,vec__3785__3787,1,null);
var G__3781__3790 = G__3781__3782;

var G__3784__3791 = G__3784__3786;
var G__3781__3792 = G__3781__3790;

while(true){
var vec__3793__3794 = G__3784__3791;
var key__3795 = cljs.core.nth.call(null,vec__3793__3794,0,null);
var f__3796 = cljs.core.nth.call(null,vec__3793__3794,1,null);
var G__3781__3797 = G__3781__3792;

f__3796.call(null,key__3795,this$,oldval,newval);
var temp__3698__auto____3798 = cljs.core.next.call(null,G__3781__3797);

if(cljs.core.truth_(temp__3698__auto____3798))
{var G__3781__3799 = temp__3698__auto____3798;

{
var G__3806 = cljs.core.first.call(null,G__3781__3799);
var G__3807 = G__3781__3799;
G__3784__3791 = G__3806;
G__3781__3792 = G__3807;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__3800 = this;
return this$.watches = cljs.core.assoc.call(null,this__3800.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3801 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3801.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3802 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3802.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3803 = this;
return this__3803.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3804 = this;
return this__3804.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3805 = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3814 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3815 = (function() { 
var G__3817__delegate = function (x,p__3808){
var map__3809__3810 = p__3808;
var map__3809__3811 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3809__3810))?cljs.core.apply.call(null,cljs.core.hash_map,map__3809__3810):map__3809__3810);
var validator__3812 = cljs.core.get.call(null,map__3809__3811,"﷐'validator");
var meta__3813 = cljs.core.get.call(null,map__3809__3811,"﷐'meta");

return (new cljs.core.Atom(x,meta__3813,validator__3812,null));
};
var G__3817 = function (x,var_args){
var p__3808 = null;
if (goog.isDef(var_args)) {
  p__3808 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3817__delegate.call(this, x, p__3808);
};
G__3817.cljs$lang$maxFixedArity = 1;
G__3817.cljs$lang$applyTo = (function (arglist__3818){
var x = cljs.core.first(arglist__3818);
var p__3808 = cljs.core.rest(arglist__3818);
return G__3817__delegate.call(this, x, p__3808);
});
return G__3817;
})()
;
atom = function(x,var_args){
var p__3808 = var_args;
switch(arguments.length){
case  1 :
return atom__3814.call(this,x);
default:
return atom__3815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3815.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3819 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3819))
{var validate__3820 = temp__3698__auto____3819;

if(cljs.core.truth_(validate__3820.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",2934))))));
}
} else
{}
var old_value__3821 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3821,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3822 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3823 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3824 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3825 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3826 = (function() { 
var G__3828__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3828 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3828__delegate.call(this, a, f, x, y, z, more);
};
G__3828.cljs$lang$maxFixedArity = 5;
G__3828.cljs$lang$applyTo = (function (arglist__3829){
var a = cljs.core.first(arglist__3829);
var f = cljs.core.first(cljs.core.next(arglist__3829));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3829)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3829))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3829)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3829)))));
return G__3828__delegate.call(this, a, f, x, y, z, more);
});
return G__3828;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3822.call(this,a,f);
case  3 :
return swap_BANG___3823.call(this,a,f,x);
case  4 :
return swap_BANG___3824.call(this,a,f,x,y);
case  5 :
return swap_BANG___3825.call(this,a,f,x,y,z);
default:
return swap_BANG___3826.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3826.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3830){
var iref = cljs.core.first(arglist__3830);
var f = cljs.core.first(cljs.core.next(arglist__3830));
var args = cljs.core.rest(cljs.core.next(arglist__3830));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3831 = (function (){
return gensym.call(null,"G__");
});
var gensym__3832 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3831.call(this);
case  1 :
return gensym__3832.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3834 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3834.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3835 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3835.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3835.state,this__3835.f);
}
return cljs.core.deref.call(null,this__3835.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3836){
var body = cljs.core.seq( arglist__3836 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3837__3838 = options;
var map__3837__3839 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3837__3838))?cljs.core.apply.call(null,cljs.core.hash_map,map__3837__3838):map__3837__3838);
var keywordize_keys__3840 = cljs.core.get.call(null,map__3837__3839,"﷐'keywordize-keys");
var keyfn__3841 = (cljs.core.truth_(keywordize_keys__3840)?cljs.core.keyword:cljs.core.str);
var f__3847 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__385__auto____3846 = (function iter__3842(s__3843){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3843__3844 = s__3843;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3843__3844)))
{var k__3845 = cljs.core.first.call(null,s__3843__3844);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3841.call(null,k__3845),thisfn.call(null,(x[k__3845]))]),iter__3842.call(null,cljs.core.rest.call(null,s__3843__3844)));
} else
{return null;
}
break;
}
})));
});

return iter__385__auto____3846.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3847.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3848){
var x = cljs.core.first(arglist__3848);
var options = cljs.core.rest(arglist__3848);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3849 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3853__delegate = function (args){
var temp__3695__auto____3850 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3849),args);

if(cljs.core.truth_(temp__3695__auto____3850))
{var v__3851 = temp__3695__auto____3850;

return v__3851;
} else
{var ret__3852 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3849,cljs.core.assoc,args,ret__3852);
return ret__3852;
}
};
var G__3853 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3853__delegate.call(this, args);
};
G__3853.cljs$lang$maxFixedArity = 0;
G__3853.cljs$lang$applyTo = (function (arglist__3854){
var args = cljs.core.seq( arglist__3854 );;
return G__3853__delegate.call(this, args);
});
return G__3853;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3856 = (function (f){
while(true){
var ret__3855 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3855)))
{{
var G__3859 = ret__3855;
f = G__3859;
continue;
}
} else
{return ret__3855;
}
break;
}
});
var trampoline__3857 = (function() { 
var G__3860__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3860 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3860__delegate.call(this, f, args);
};
G__3860.cljs$lang$maxFixedArity = 1;
G__3860.cljs$lang$applyTo = (function (arglist__3861){
var f = cljs.core.first(arglist__3861);
var args = cljs.core.rest(arglist__3861);
return G__3860__delegate.call(this, f, args);
});
return G__3860;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3856.call(this,f);
default:
return trampoline__3857.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3857.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3862 = (function (){
return rand.call(null,1);
});
var rand__3863 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3862.call(this);
case  1 :
return rand__3863.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3865 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3865,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3865,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3874 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3875 = (function (h,child,parent){
var or__3548__auto____3866 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3866))
{return or__3548__auto____3866;
} else
{var or__3548__auto____3867 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3867))
{return or__3548__auto____3867;
} else
{var and__3546__auto____3868 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3868))
{var and__3546__auto____3869 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3869))
{var and__3546__auto____3870 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3870))
{var ret__3871 = true;
var i__3872 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3873 = cljs.core.not.call(null,ret__3871);

if(cljs.core.truth_(or__3548__auto____3873))
{return or__3548__auto____3873;
} else
{return cljs.core._EQ_.call(null,i__3872,cljs.core.count.call(null,parent));
}
})()))
{return ret__3871;
} else
{{
var G__3877 = isa_QMARK_.call(null,h,child.call(null,i__3872),parent.call(null,i__3872));
var G__3878 = (i__3872 + 1);
ret__3871 = G__3877;
i__3872 = G__3878;
continue;
}
}
break;
}
} else
{return and__3546__auto____3870;
}
} else
{return and__3546__auto____3869;
}
} else
{return and__3546__auto____3868;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3874.call(this,h,child);
case  3 :
return isa_QMARK___3875.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3879 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3880 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3879.call(this,h);
case  2 :
return parents__3880.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3882 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3883 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3882.call(this,h);
case  2 :
return ancestors__3883.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3885 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3886 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3885.call(this,h);
case  2 :
return descendants__3886.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3896 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3226))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3897 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3230))))));
}
var tp__3891 = "﷐'parents".call(null,h);
var td__3892 = "﷐'descendants".call(null,h);
var ta__3893 = "﷐'ancestors".call(null,h);
var tf__3894 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3895 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3891.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3893.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3893.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3891,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3894.call(null,"﷐'ancestors".call(null,h),tag,td__3892,parent,ta__3893),"﷐'descendants":tf__3894.call(null,"﷐'descendants".call(null,h),parent,ta__3893,tag,td__3892)});
})());

if(cljs.core.truth_(or__3548__auto____3895))
{return or__3548__auto____3895;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3896.call(this,h,tag);
case  3 :
return derive__3897.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3903 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3904 = (function (h,tag,parent){
var parentMap__3899 = "﷐'parents".call(null,h);
var childsParents__3900 = (cljs.core.truth_(parentMap__3899.call(null,tag))?cljs.core.disj.call(null,parentMap__3899.call(null,tag),parent):cljs.core.set([]));
var newParents__3901 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3900))?cljs.core.assoc.call(null,parentMap__3899,tag,childsParents__3900):cljs.core.dissoc.call(null,parentMap__3899,tag));
var deriv_seq__3902 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3888_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3888_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3888_SHARP_),cljs.core.second.call(null,p1__3888_SHARP_)));
}),cljs.core.seq.call(null,newParents__3901)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3899.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3889_SHARP_,p2__3890_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3889_SHARP_,p2__3890_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3902));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3903.call(this,h,tag);
case  3 :
return underive__3904.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3906 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3908 = (cljs.core.truth_((function (){var and__3546__auto____3907 = xprefs__3906;

if(cljs.core.truth_(and__3546__auto____3907))
{return xprefs__3906.call(null,y);
} else
{return and__3546__auto____3907;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3908))
{return or__3548__auto____3908;
} else
{var or__3548__auto____3910 = (function (){var ps__3909 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3909) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3909),prefer_table)))
{} else
{}
{
var G__3913 = cljs.core.rest.call(null,ps__3909);
ps__3909 = G__3913;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3910))
{return or__3548__auto____3910;
} else
{var or__3548__auto____3912 = (function (){var ps__3911 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3911) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3911),y,prefer_table)))
{} else
{}
{
var G__3914 = cljs.core.rest.call(null,ps__3911);
ps__3911 = G__3914;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3912))
{return or__3548__auto____3912;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3915 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3915))
{return or__3548__auto____3915;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3924 = cljs.core.reduce.call(null,(function (be,p__3916){
var vec__3917__3918 = p__3916;
var k__3919 = cljs.core.nth.call(null,vec__3917__3918,0,null);
var ___3920 = cljs.core.nth.call(null,vec__3917__3918,1,null);
var e__3921 = vec__3917__3918;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3919)))
{var be2__3923 = (cljs.core.truth_((function (){var or__3548__auto____3922 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3922))
{return or__3548__auto____3922;
} else
{return cljs.core.dominates.call(null,k__3919,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3921:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3923),k__3919,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3919," and ",cljs.core.first.call(null,be2__3923),", and neither is preferred")));
}
return be2__3923;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3924))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3924));
return cljs.core.second.call(null,best_entry__3924);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3925 = mf;

if(cljs.core.truth_(and__3546__auto____3925))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3925;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3926 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3926))
{return or__3548__auto____3926;
} else
{var or__3548__auto____3927 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3927))
{return or__3548__auto____3927;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3928 = mf;

if(cljs.core.truth_(and__3546__auto____3928))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3928;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3929 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3929))
{return or__3548__auto____3929;
} else
{var or__3548__auto____3930 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3930))
{return or__3548__auto____3930;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3931 = mf;

if(cljs.core.truth_(and__3546__auto____3931))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3931;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3932 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3932))
{return or__3548__auto____3932;
} else
{var or__3548__auto____3933 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3933))
{return or__3548__auto____3933;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3934 = mf;

if(cljs.core.truth_(and__3546__auto____3934))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3934;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3935 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3935))
{return or__3548__auto____3935;
} else
{var or__3548__auto____3936 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3936))
{return or__3548__auto____3936;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3937 = mf;

if(cljs.core.truth_(and__3546__auto____3937))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3937;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3938 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3938))
{return or__3548__auto____3938;
} else
{var or__3548__auto____3939 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3939))
{return or__3548__auto____3939;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3940 = mf;

if(cljs.core.truth_(and__3546__auto____3940))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3940;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3941 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3941))
{return or__3548__auto____3941;
} else
{var or__3548__auto____3942 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3942))
{return or__3548__auto____3942;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3943 = mf;

if(cljs.core.truth_(and__3546__auto____3943))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3943;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3944 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3944))
{return or__3548__auto____3944;
} else
{var or__3548__auto____3945 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3945))
{return or__3548__auto____3945;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3946 = mf;

if(cljs.core.truth_(and__3546__auto____3946))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3946;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3947 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3947))
{return or__3548__auto____3947;
} else
{var or__3548__auto____3948 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3948))
{return or__3548__auto____3948;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3949 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3950 = cljs.core._get_method.call(null,mf,dispatch_val__3949);

if(cljs.core.truth_(target_fn__3950))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3949)));
}
return cljs.core.apply.call(null,target_fn__3950,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3951 = this;
cljs.core.swap_BANG_.call(null,this__3951.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3951.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3951.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3951.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3952 = this;
cljs.core.swap_BANG_.call(null,this__3952.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3952.method_cache,this__3952.method_table,this__3952.cached_hierarchy,this__3952.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3953 = this;
cljs.core.swap_BANG_.call(null,this__3953.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3953.method_cache,this__3953.method_table,this__3953.cached_hierarchy,this__3953.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3954 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3954.cached_hierarchy),cljs.core.deref.call(null,this__3954.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3954.method_cache,this__3954.method_table,this__3954.cached_hierarchy,this__3954.hierarchy);
}
var temp__3695__auto____3955 = cljs.core.deref.call(null,this__3954.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3955))
{var target_fn__3956 = temp__3695__auto____3955;

return target_fn__3956;
} else
{var temp__3695__auto____3957 = cljs.core.find_and_cache_best_method.call(null,this__3954.name,dispatch_val,this__3954.hierarchy,this__3954.method_table,this__3954.prefer_table,this__3954.method_cache,this__3954.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3957))
{var target_fn__3958 = temp__3695__auto____3957;

return target_fn__3958;
} else
{return cljs.core.deref.call(null,this__3954.method_table).call(null,this__3954.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3959 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3959.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3959.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3959.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3959.method_cache,this__3959.method_table,this__3959.cached_hierarchy,this__3959.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3960 = this;
return cljs.core.deref.call(null,this__3960.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3961 = this;
return cljs.core.deref.call(null,this__3961.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3962 = this;
return cljs.core.do_invoke.call(null,mf,this__3962.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3963__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3963 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3963__delegate.call(this, _, args);
};
G__3963.cljs$lang$maxFixedArity = 1;
G__3963.cljs$lang$applyTo = (function (arglist__3964){
var _ = cljs.core.first(arglist__3964);
var args = cljs.core.rest(arglist__3964);
return G__3963__delegate.call(this, _, args);
});
return G__3963;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
