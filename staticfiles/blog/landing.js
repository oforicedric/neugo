window.object_name="muzzle",
/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e);
// Pass this if window is not defined yet
}("undefined"!=typeof window?window:this,function(_,e){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";function m(e,t){var n=(t=t||ne).createElement("script");n.text=e,t.head.appendChild(n).parentNode.removeChild(n)}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
function s(e){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=me.type(e);return"function"!==n&&!me.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function c(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}
// Implement the identical functionality for filter and not
function t(e,n,o){return me.isFunction(n)?me.grep(e,function(e,t){return!!n.call(e,t,e)!==o}):
// Single element
n.nodeType?me.grep(e,function(e){return e===n!==o}):
// Arraylike of elements (jQuery, arguments, Array)
"string"!=typeof n?me.grep(e,function(e){return-1<se.call(n,e)!==o}):
// Simple selector that can be filtered directly, removing non-Elements
ke.test(n)?me.filter(n,e,o):(
// Complex selector, compare the two sets, removing non-Elements
n=me.filter(n,e),me.grep(e,function(e){return-1<se.call(n,e)!==o&&1===e.nodeType}))}function n(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}
// Convert String-formatted options into Object-formatted ones
function l(e){var n={};return me.each(e.match(Ae)||[],function(e,t){n[t]=!0}),n}
/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */function f(e){return e}function d(e){throw e}function u(e,t,n,o){var i;try{
// Check for promise aspect first to privilege synchronous behavior
e&&me.isFunction(i=e.promise)?i.call(e).done(t).fail(n):e&&me.isFunction(i=e.then)?i.call(e,t,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(o));
// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}
// The ready event handler and self cleanup method
function o(){ne.removeEventListener("DOMContentLoaded",o),_.removeEventListener("load",o),me.ready()}
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
function i(){this.expando=me.expando+i.uid++}function r(e){return"true"===e||"false"!==e&&("null"===e?null:
// Only convert to a number if it doesn't change the string
e===+e+""?+e:Me.test(e)?JSON.parse(e):e)}function p(e,t,n){var o;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(o="data-"+t.replace(Re,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(o))){try{n=r(n)}catch(e){}
// Make sure we set the data so it isn't changed later
Pe.set(e,t,n)}else n=void 0;return n}function h(e,t,n,o){var i,r=1,a=20,s=o?function(){return o.cur()}:function(){return me.css(e,t,"")},u=s(),c=n&&n[3]||(me.cssNumber[t]?"":"px"),
// Starting value computation is required for potential unit mismatches
l=(me.cssNumber[t]||"px"!==c&&+u)&&Ie.exec(me.css(e,t));if(l&&l[3]!==c)for(
// Trust units reported by jQuery.css
c=c||l[3],
// Make sure we update the tween properties later on
n=n||[],
// Iteratively approximate from a nonzero starting point
l=+u||1;
// Adjust and apply
l/=
// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
r=r||".5",me.style(e,t,l+c),r!==(r=s()/u)&&1!==r&&--a;);return n&&(l=+l||+u||0,
// Apply relative offset (+=/-=) if specified
i=n[1]?l+(n[1]+1)*n[2]:+n[2],o&&(o.unit=c,o.start=l,o.end=i)),i}function g(e){var t,n=e.ownerDocument,o=e.nodeName,i=Xe[o];return i||(t=n.body.appendChild(n.createElement(o)),i=me.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),Xe[o]=i)}function v(e,t){
// Determine new display value for elements that need to change
for(var n,o,i=[],r=0,a=e.length;r<a;r++)(o=e[r]).style&&(n=o.style.display,t?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(i[r]=Fe.get(o,"display")||null,i[r]||(o.style.display="")),""===o.style.display&&Be(o)&&(i[r]=g(o))):"none"!==n&&(i[r]="none",
// Remember what we're overwriting
Fe.set(o,"display",n)));
// Set the display of the elements in a second loop to avoid constant reflow
for(r=0;r<a;r++)null!=i[r]&&(e[r].style.display=i[r]);return e}function y(e,t){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&c(e,t)?me.merge([e],n):n}
// Mark scripts as having already been evaluated
function b(e,t){for(var n=0,o=e.length;n<o;n++)Fe.set(e[n],"globalEval",!t||Fe.get(t[n],"globalEval"))}function w(e,t,n,o,i){for(var r,a,s,u,c,l,f=t.createDocumentFragment(),d=[],p=0,h=e.length;p<h;p++)if((r=e[p])||0===r)
// Add nodes directly
if("object"===me.type(r))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
me.merge(d,r.nodeType?[r]:r);
// Convert non-html into a text node
else if(Ye.test(r)){for(a=a||f.appendChild(t.createElement("div")),
// Deserialize a standard representation
s=(Qe.exec(r)||["",""])[1].toLowerCase(),u=Ge[s]||Ge._default,a.innerHTML=u[1]+me.htmlPrefilter(r)+u[2],
// Descend through wrappers to the right content
l=u[0];l--;)a=a.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
me.merge(d,a.childNodes),
// Ensure the created nodes are orphaned (#12392)
(
// Remember the top-level container
a=f.firstChild).textContent=""}else d.push(t.createTextNode(r));
// Convert html into DOM nodes
// Remove wrapper from fragment
for(f.textContent="",p=0;r=d[p++];)
// Skip elements already in the context collection (trac-4087)
if(o&&-1<me.inArray(r,o))i&&i.push(r);else
// Capture executables
if(c=me.contains(r.ownerDocument,r),
// Append to fragment
a=y(f.appendChild(r),"script"),
// Preserve script evaluation history
c&&b(a),n)for(l=0;r=a[l++];)Ve.test(r.type||"")&&n.push(r);return f}function a(){return!0}function x(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function T(){try{return ne.activeElement}catch(e){}}function C(e,t,n,o,i,r){var a,s;
// Types can be a map of types/handlers
if("object"==typeof t){for(s in
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
o=o||n,n=void 0),t)C(e,s,n,o,t[s],r);return e}if(null==o&&null==i?(
// ( types, fn )
i=n,o=n=void 0):null==i&&("string"==typeof n?(
// ( types, selector, fn )
i=o,o=void 0):(
// ( types, data, fn )
i=o,o=n,n=void 0)),!1===i)i=x;else if(!i)return e;return 1===r&&(a=i,
// Use same guid so caller can remove using origFn
(i=function(e){
// Can use an empty set, since event contains the info
return me().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=me.guid++)),e.each(function(){me.event.add(this,t,i,o,n)})}
/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
// Prefer a tbody over its parent table for containing new rows
function k(e,t){return c(e,"table")&&c(11!==t.nodeType?t:t.firstChild,"tr")&&me(">tbody",e)[0]||e}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function j(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function E(e){var t=st.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function S(e,t){var n,o,i,r,a,s,u,c;if(1===t.nodeType){
// 1. Copy private data: events, handlers, etc.
if(Fe.hasData(e)&&(r=Fe.access(e),a=Fe.set(t,r),c=r.events))for(i in delete a.handle,a.events={},c)for(n=0,o=c[i].length;n<o;n++)me.event.add(t,i,c[i][n]);
// 2. Copy user data
Pe.hasData(e)&&(s=Pe.access(e),u=me.extend({},s),Pe.set(t,u))}}
// Fix IE bugs, see support tests
function N(e,t){var n=t.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&Ue.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function D(n,o,i,r){
// Flatten any nested arrays
o=re.apply([],o);var e,t,a,s,u,c,l=0,f=n.length,d=f-1,p=o[0],h=me.isFunction(p);
// We can't cloneNode fragments that contain checked, in WebKit
if(h||1<f&&"string"==typeof p&&!pe.checkClone&&at.test(p))return n.each(function(e){var t=n.eq(e);h&&(o[0]=p.call(this,e,t.html())),D(t,o,i,r)});if(f&&(t=(e=w(o,n[0].ownerDocument,!1,n,r)).firstChild,1===e.childNodes.length&&(e=t),t||r)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(s=(a=me.map(y(e,"script"),j)).length;l<f;l++)u=e,l!==d&&(u=me.clone(u,!0,!0),
// Keep references to cloned scripts for later restoration
s&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
me.merge(a,y(u,"script"))),i.call(n[l],u,l);if(s)
// Evaluate executable scripts on first document insertion
for(c=a[a.length-1].ownerDocument,
// Reenable scripts
me.map(a,E),l=0;l<s;l++)u=a[l],Ve.test(u.type||"")&&!Fe.access(u,"globalEval")&&me.contains(c,u)&&(u.src?
// Optional AJAX dependency, but won't run scripts if not present
me._evalUrl&&me._evalUrl(u.src):m(u.textContent.replace(ut,""),c))}return n}function A(e,t,n){for(var o,i=t?me.filter(t,e):e,r=0;null!=(o=i[r]);r++)n||1!==o.nodeType||me.cleanData(y(o)),o.parentNode&&(n&&me.contains(o.ownerDocument,o)&&b(y(o,"script")),o.parentNode.removeChild(o));return e}function q(e,t,n){var o,i,r,a,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
s=e.style;
// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
return(n=n||ft(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||me.contains(e.ownerDocument,e)||(a=me.style(e,t)),
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
!pe.pixelMarginRight()&&lt.test(a)&&ct.test(t)&&(
// Remember the original values
o=s.width,i=s.minWidth,r=s.maxWidth,
// Put in the new values to get a computed value out
s.minWidth=s.maxWidth=s.width=a,a=n.width,
// Revert the changed values
s.width=o,s.minWidth=i,s.maxWidth=r)),void 0!==a?
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
a+"":a}function L(e,t){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(!e())
// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments);
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get}}}
// Return a css property mapped to a potentially vendor prefixed property
function H(e){
// Shortcut for names that are not vendor prefixed
if(e in vt)return e;
// Check for vendor prefixed names
for(var t=e[0].toUpperCase()+e.slice(1),n=gt.length;n--;)if((e=gt[n]+t)in vt)return e}
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function O(e){var t=me.cssProps[e];return t||(t=me.cssProps[e]=H(e)||e),t}function F(e,t,n){
// Any relative (+/-) values have already been
// normalized at this point
var o=Ie.exec(t);return o?
// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,o[2]-(n||0))+(o[3]||"px"):t}function P(e,t,n,o,i){var r,a=0;
// If we already have the right measurement, avoid augmentation
for(r=n===(o?"border":"content")?4:"width"===t?1:0;r<4;r+=2)
// Both box models exclude margin, so add it if we want it
"margin"===n&&(a+=me.css(e,n+$e[r],!0,i)),o?(
// border-box includes padding, so remove it if we want content
"content"===n&&(a-=me.css(e,"padding"+$e[r],!0,i)),
// At this point, extra isn't border nor margin, so remove border
"margin"!==n&&(a-=me.css(e,"border"+$e[r]+"Width",!0,i))):(
// At this point, extra isn't content, so add padding
a+=me.css(e,"padding"+$e[r],!0,i),
// At this point, extra isn't content nor padding, so add border
"padding"!==n&&(a+=me.css(e,"border"+$e[r]+"Width",!0,i)));return a}function M(e,t,n){
// Start with computed style
var o,i=ft(e),r=q(e,t,i),a="border-box"===me.css(e,"boxSizing",!1,i);
// Computed unit is not pixels. Stop here and return.
return lt.test(r)?r:(
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
o=a&&(pe.boxSizingReliable()||r===e.style[t]),
// Fall back to offsetWidth/Height when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===r&&(r=e["offset"+t[0].toUpperCase()+t.slice(1)]),(
// Normalize "", auto, and prepare for extra
r=parseFloat(r)||0)+P(e,t,n||(a?"border":"content"),o,i)+"px")}function R(e,t,n,o,i){return new R.prototype.init(e,t,n,o,i)}function W(){bt&&(!1===ne.hidden&&_.requestAnimationFrame?_.requestAnimationFrame(W):_.setTimeout(W,me.fx.interval),me.fx.tick())}
// Animations created synchronously will run synchronously
function I(){return _.setTimeout(function(){yt=void 0}),yt=me.now()}
// Generate parameters to create a standard animation
function $(e,t){var n,o=0,i={height:e};
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
for(t=t?1:0;o<4;o+=2-t)i["margin"+(n=$e[o])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function B(e,t,n){for(var o,i=(U.tweeners[t]||[]).concat(U.tweeners["*"]),r=0,a=i.length;r<a;r++)if(o=i[r].call(n,t,e))
// We're done with this property
return o}function z(e,t,n){var o,i,r,a,s,u,c,l,f="width"in t||"height"in t,d=this,p={},h=e.style,m=e.nodeType&&Be(e),g=Fe.get(e,"fxshow");
// Queue-skipping animations hijack the fx hooks
// Detect show/hide animations
for(o in n.queue||(null==(a=me._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,d.always(function(){
// Ensure the complete handler is called before this completes
d.always(function(){a.unqueued--,me.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[o],wt.test(i)){if(delete t[o],r=r||"toggle"===i,i===(m?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==i||!g||void 0===g[o])continue;m=!0}p[o]=g&&g[o]||me.style(e,o)}
// Bail out if this is a no-op like .hide().hide()
if((u=!me.isEmptyObject(t))||!me.isEmptyObject(p))for(o in
// Restrict "overflow" and "display" styles during box animations
f&&1===e.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 13
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY
n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(
// Identify a display type, preferring old show/hide data over the CSS cascade
c=g&&g.display)&&(c=Fe.get(e,"display")),"none"===(l=me.css(e,"display"))&&(c?l=c:(
// Get nonempty value(s) by temporarily forcing visibility
v([e],!0),c=e.style.display||c,l=me.css(e,"display"),v([e]))),
// Animate inline elements as inline-block
("inline"===l||"inline-block"===l&&null!=c)&&"none"===me.css(e,"float")&&(
// Restore the original display value at the end of pure show/hide animations
u||(d.done(function(){h.display=c}),null==c&&(l=h.display,c="none"===l?"":l)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",d.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),
// Implement show/hide animations
u=!1,p)
// General show/hide setup for this element animation
u||(g?"hidden"in g&&(m=g.hidden):g=Fe.access(e,"fxshow",{display:c}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
r&&(g.hidden=!m),
// Show elements before animating them
m&&v([e],!0)
/* eslint-disable no-loop-func */,d.done(function(){for(o in
/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
m||v([e]),Fe.remove(e,"fxshow"),p)me.style(e,o,p[o])})),
// Per-property setup
u=B(m?g[o]:0,o,d),o in g||(g[o]=u.start,m&&(u.end=u.start,u.start=0))}function X(e,t){var n,o,i,r,a;
// camelCase, specialEasing and expand cssHook pass
for(n in e)if(i=t[o=me.camelCase(n)],r=e[n],Array.isArray(r)&&(i=r[1],r=e[n]=r[0]),n!==o&&(e[o]=r,delete e[n]),(a=me.cssHooks[o])&&"expand"in a)
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in r=a.expand(r),delete e[o],r)n in e||(e[n]=r[n],t[n]=i);else t[o]=i}function U(a,e,t){var n,s,o=0,i=U.prefilters.length,u=me.Deferred().always(function(){
// Don't match elem in the :animated selector
delete r.elem}),r=function(){if(s)return!1;for(var e=yt||I(),t=Math.max(0,c.startTime+c.duration-e),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
n,o=1-(t/c.duration||0),i=0,r=c.tweens.length;i<r;i++)c.tweens[i].run(o);
// If there's more to do, yield
return u.notifyWith(a,[c,o,t]),o<1&&r?t:(
// If this was an empty animation, synthesize a final progress notification
r||u.notifyWith(a,[c,1,0]),
// Resolve the animation and report its conclusion
u.resolveWith(a,[c]),!1)},c=u.promise({elem:a,props:me.extend({},e),opts:me.extend(!0,{specialEasing:{},easing:me.easing._default},t),originalProperties:e,originalOptions:t,startTime:yt||I(),duration:t.duration,tweens:[],createTween:function(e,t){var n=me.Tween(a,c.opts,e,t,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(n),n},stop:function(e){var t=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
n=e?c.tweens.length:0;if(s)return this;for(s=!0;t<n;t++)c.tweens[t].run(1);
// Resolve when we played the last frame; otherwise, rejectica
return e?(u.notifyWith(a,[c,1,0]),u.resolveWith(a,[c,e])):u.rejectWith(a,[c,e]),this}}),l=c.props;for(X(l,c.opts.specialEasing);o<i;o++)if(n=U.prefilters[o].call(c,a,l,c.opts))return me.isFunction(n.stop)&&(me._queueHooks(c.elem,c.opts.queue).stop=me.proxy(n.stop,n)),n;return me.map(l,B,c),me.isFunction(c.opts.start)&&c.opts.start.call(a,c),
// Attach callbacks from options
c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),me.fx.timer(me.extend(r,{elem:a,anim:c,queue:c.opts.queue})),c}
// Strip and collapse whitespace according to HTML spec
// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
function Q(e){var t;return(e.match(Ae)||[]).join(" ")}function V(e){return e.getAttribute&&e.getAttribute("class")||""}function G(n,e,o,i){var t;if(Array.isArray(e))
// Serialize array item.
me.each(e,function(e,t){o||Ht.test(n)?
// Treat each array item as a scalar.
i(n,t):
// Item is non-scalar (array or object), encode its numeric index.
G(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,o,i)});else if(o||"object"!==me.type(e))
// Serialize scalar item.
i(n,e);else
// Serialize object item.
for(t in e)G(n+"["+t+"]",e[t],o,i)}
// Serialize an array of form elements or a set of
// key/values into a query string
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function Y(r){
// dataTypeExpression is optional and defaults to "*"
return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,o=0,i=e.toLowerCase().match(Ae)||[];if(me.isFunction(t))
// For each dataType in the dataTypeExpression
for(;n=i[o++];)
// Prepend if requested
"+"===n[0]?(n=n.slice(1)||"*",(r[n]=r[n]||[]).unshift(t)):(r[n]=r[n]||[]).push(t)}}
// Base inspection function for prefilters and transports
function J(t,i,r,a){function s(e){var o;return u[e]=!0,me.each(t[e]||[],function(e,t){var n=t(i,r,a);return"string"!=typeof n||c||u[n]?c?!(o=n):void 0:(i.dataTypes.unshift(n),s(n),!1)}),o}var u={},c=t===Ut;return s(i.dataTypes[0])||!u["*"]&&s("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function K(e,t){var n,o,i=me.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:o||(o={}))[n]=t[n]);return o&&me.extend(!0,e,o),e}
/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function Z(e,t,n){
// Remove auto dataType and get content-type in the process
for(var o,i,r,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===o&&(o=e.mimeType||t.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(o)for(i in s)if(s[i]&&s[i].test(o)){u.unshift(i);break}
// Check to see if we have a response for the expected dataType
if(u[0]in n)r=u[0];else{
// Try convertible dataTypes
for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){r=i;break}a||(a=i)}
// Or just use first one
r=r||a}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(r)return r!==u[0]&&u.unshift(r),n[r]}
/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function ee(e,t,n,o){var i,r,a,s,u,c={},
// Work with a copy of dataTypes in case we need to modify it for conversion
l=e.dataTypes.slice();
// Create converters map with lowercased keys
if(l[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];
// Convert to each sequential dataType
for(r=l.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),
// Apply the dataFilter if provided
!u&&o&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=r,r=l.shift())
// There's only work to do if current dataType is non-auto
if("*"===r)r=u;
// Convert response if prev dataType is non-auto and differs from current
else if("*"!==u&&u!==r){
// If none found, seek a pair
if(!(
// Seek a direct converter
a=c[u+" "+r]||c["* "+r]))for(i in c)if((
// If conv2 outputs current
s=i.split(" "))[1]===r&&(
// If prev can be converted to accepted input
a=c[u+" "+s[0]]||c["* "+s[0]])){
// Condense equivalence converters
!0===a?a=c[i]:!0!==c[i]&&(r=s[0],l.unshift(s[1]));break}
// Apply converter (if not an equivalence)
if(!0!==a)
// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+r}}}return{state:"success",data:t}}var te=[],ne=_.document,oe=Object.getPrototypeOf,ie=te.slice,re=te.concat,ae=te.push,se=te.indexOf,ue={},ce=ue.toString,le=ue.hasOwnProperty,fe=le.toString,de=fe.call(Object),pe={},he="3.2.1",
// Define a local copy of jQuery
me=function(e,t){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new me.fn.init(e,t)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
ge=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
// Matches dashed string for camelizing
ve=/^-ms-/,ye=/-([a-z])/g,
// Used by jQuery.camelCase as callback to replace()
be=function(e,t){return t.toUpperCase()};me.fn=me.prototype={
// The current version of jQuery being used
jquery:he,constructor:me,
// The default length of a jQuery object is 0
length:0,toArray:function(){return ie.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return all the elements in a clean array
return null==e?ie.call(this):e<0?this[e+this.length]:this[e];
// Return just the one element from the set
},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){
// Build a new jQuery matched element set
var t=me.merge(this.constructor(),e);
// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return t.prevObject=this,t},
// Execute a callback for every element in the matched set.
each:function(e){return me.each(this,e)},map:function(n){return this.pushStack(me.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ie.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ae,sort:te.sort,splice:te.splice},me.extend=me.fn.extend=function(e){var t,n,o,i,r,a,s=e||{},u=1,c=arguments.length,l=!1;
// Handle a deep copy situation
for("boolean"==typeof s&&(l=s,
// Skip the boolean and the target
s=arguments[u]||{},u++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof s||me.isFunction(s)||(s={}),
// Extend jQuery itself if only one argument is passed
u===c&&(s=this,u--);u<c;u++)
// Only deal with non-null/undefined values
if(null!=(t=arguments[u]))
// Extend the base object
for(n in t)o=s[n],
// Prevent never-ending loop
s!==(i=t[n])&&(
// Recurse if we're merging plain objects or arrays
l&&i&&(me.isPlainObject(i)||(r=Array.isArray(i)))?(a=r?(r=!1,o&&Array.isArray(o)?o:[]):o&&me.isPlainObject(o)?o:{},
// Never move original objects, clone them
s[n]=me.extend(l,a,i)):void 0!==i&&(s[n]=i));
// Return the modified object
return s},me.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(he+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===me.type(e)},isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=me.type(e);return("number"===t||"string"===t)&&
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,n;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
return!(!e||"[object Object]"!==ce.call(e))&&(
// Objects with no prototype (e.g., `Object.create( null )`) are plain
!(t=oe(e))||"function"==typeof(
// Objects with prototype are plain iff they were constructed by a global Object function
n=le.call(t,"constructor")&&t.constructor)&&fe.call(n)===de)},isEmptyObject:function(e){
/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ue[ce.call(e)]||"object":typeof e;
// Support: Android <=2.3 only (functionish RegExp)
},
// Evaluates a script in a global context
globalEval:function(e){m(e)},
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 13
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(e){return e.replace(ve,"ms-").replace(ye,be)},each:function(e,t){var n,o=0;if(s(e))for(n=e.length;o<n&&!1!==t.call(e[o],o,e[o]);o++);else for(o in e)if(!1===t.call(e[o],o,e[o]))break;return e},
// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(ge,"")},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(s(Object(e))?me.merge(n,"string"==typeof e?[e]:e):ae.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,o=0,i=e.length;o<n;o++)e[i++]=t[o];return e.length=i,e},grep:function(e,t,n){
// Go through the array, only saving the items
// that pass the validator function
for(var o,i=[],r=0,a=e.length,s=!n;r<a;r++)(o=!t(e[r],r))!==s&&i.push(e[r]);return i},
// arg is for internal usage only
map:function(e,t,n){var o,i,r=0,a=[];
// Go through the array, translating each of the items to their new values
if(s(e))for(o=e.length;r<o;r++)null!=(i=t(e[r],r,n))&&a.push(i);
// Go through every key on the object,
else for(r in e)null!=(i=t(e[r],r,n))&&a.push(i);
// Flatten any nested arrays
return re.apply([],a)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(e,t){var n,o,i;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),me.isFunction(e))
// Simulated bind
return o=ie.call(arguments,2),
// Set the guid of unique handler to the same of original handler, so it can be removed
(i=function(){return e.apply(t||this,o.concat(ie.call(arguments)))}).guid=e.guid=e.guid||me.guid++,i},now:Date.now,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:pe}),"function"==typeof Symbol&&(me.fn[Symbol.iterator]=te[Symbol.iterator]),
// Populate the class2type map
me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ue["[object "+t+"]"]=t.toLowerCase()});var we=
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(n){function w(e,t,n,o){var i,r,a,s,u,c,l,f=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
d=t?t.nodeType:9;
// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==d&&9!==d&&11!==d)return n;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!o&&((t?t.ownerDocument||t:I)!==L&&q(t),t=t||L,O)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==d&&(u=ve.exec(e)))
// ID selector
if(i=u[1]){
// Document context
if(9===d){if(!(a=t.getElementById(i)))return n;
// Element context
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(a.id===i)return n.push(a),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(f&&(a=f.getElementById(i))&&R(t,a)&&a.id===i)return n.push(a),n;
// Type selector
}else{if(u[2])return K.apply(n,t.getElementsByTagName(e)),n;
// Class selector
if((i=u[3])&&T.getElementsByClassName&&t.getElementsByClassName)return K.apply(n,t.getElementsByClassName(i)),n}
// Take advantage of querySelectorAll
if(T.qsa&&!U[e+" "]&&(!F||!F.test(e))){if(1!==d)f=t,l=e;else if("object"!==t.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(s=t.getAttribute("id"))?s=s.replace(xe,Te):t.setAttribute("id",s=W),r=(
// Prefix every selector in the list
c=j(e)).length;r--;)c[r]="#"+s+" "+h(c[r]);l=c.join(","),
// Expand context for sibling selectors
f=ye.test(e)&&p(t.parentNode)||t}if(l)try{return K.apply(n,f.querySelectorAll(l)),n}catch(e){}finally{s===W&&t.removeAttribute("id")}}}
// All others
return S(e.replace(se,"$1"),t,n,o)}
/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function e(){function n(e,t){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
return o.push(e+" ")>_.cacheLength&&
// Only keep the most recent entries
delete n[o.shift()],n[e+" "]=t}var o=[];return n}
/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function u(e){return e[W]=!0,e}
/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function i(e){var t=L.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{
// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),
// release memory in IE
t=null}}
/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function t(e,t){for(var n=e.split("|"),o=n.length;o--;)_.attrHandle[n[o]]=t}
/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function c(e,t){var n=t&&e,o=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(o)return o;
// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}
/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function o(n){return function(e){var t;return"input"===e.nodeName.toLowerCase()&&e.type===n}}
/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function r(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}
/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function a(t){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(e){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
return"form"in e?
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
e.parentNode&&!1===e.disabled?
// Option elements defer to a parent optgroup if present
"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||
// Where there is no isDisabled, check manually
/* jshint -W018 */
e.isDisabled!==!t&&Ce(e)===t:e.disabled===t:"label"in e&&e.disabled===t;
// Remaining elements are neither :enabled nor :disabled
}}
/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function s(a){return u(function(r){return r=+r,u(function(e,t){
// Match elements found at the specified indexes
for(var n,o=a([],e.length,r),i=o.length;i--;)e[n=o[i]]&&(e[n]=!(t[n]=e[n]))})})}
/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function p(e){return e&&void 0!==e.getElementsByTagName&&e}
// Expose support vars for convenience
// Easy API for creating new setFilters
function l(){}function h(e){for(var t=0,n=e.length,o="";t<n;t++)o+=e[t].value;return o}function f(s,e,t){var u=e.dir,c=e.next,l=c||u,f=t&&"parentNode"===l,d=B++;return e.first?
// Check against closest ancestor/preceding element
function(e,t,n){for(;e=e[u];)if(1===e.nodeType||f)return s(e,t,n);return!1}:
// Check against all ancestor/preceding elements
function(e,t,n){var o,i,r,a=[$,d];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(n){for(;e=e[u];)if((1===e.nodeType||f)&&s(e,t,n))return!0}else for(;e=e[u];)if(1===e.nodeType||f)if(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(r=e[W]||(e[W]={}))[e.uniqueID]||(r[e.uniqueID]={}),c&&c===e.nodeName.toLowerCase())e=e[u]||e;else{if((o=i[l])&&o[0]===$&&o[1]===d)
// Assign to newCache so results back-propagate to previous elements
return a[2]=o[2];
// A match means we're done; a fail means we have to keep checking
if((
// Reuse newcache so results back-propagate to previous elements
i[l]=a)[2]=s(e,t,n))return!0}return!1}}function d(i){return 1<i.length?function(e,t,n){for(var o=i.length;o--;)if(!i[o](e,t,n))return!1;return!0}:i[0]}function y(e,t,n){for(var o=0,i=t.length;o<i;o++)w(e,t[o],n);return n}function x(e,t,n,o,i){for(var r,a=[],s=0,u=e.length,c=null!=t;s<u;s++)(r=e[s])&&(n&&!n(r,o,i)||(a.push(r),c&&t.push(s)));return a}function b(p,h,m,g,v,e){return g&&!g[W]&&(g=b(g)),v&&!v[W]&&(v=b(v,e)),u(function(e,t,n,o){var i,r,a,s=[],u=[],c=t.length,
// Get initial elements from seed or context
l=e||y(h||"*",n.nodeType?[n]:n,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
f=!p||!e&&h?l:x(l,s,p,n,o),d=m?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
v||(e?p:c||g)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
t:f;
// Find primary matches
// Apply postFilter
if(m&&m(f,d,n,o),g)for(i=x(d,u),g(i,[],n,o),
// Un-match failing elements by moving them back to matcherIn
r=i.length;r--;)(a=i[r])&&(d[u[r]]=!(f[u[r]]=a));if(e){if(v||p){if(v){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
i=[],r=d.length;r--;)(a=d[r])&&
// Restore matcherIn since elem is not yet a final match
i.push(f[r]=a);v(null,d=[],i,o)}
// Move matched elements from seed to results to keep them synchronized
for(r=d.length;r--;)(a=d[r])&&-1<(i=v?ee(e,a):s[r])&&(e[i]=!(t[i]=a))}
// Add elements to results, through postFinder if defined
}else d=x(d===t?d.splice(c,d.length):d),v?v(null,t,d,o):K.apply(t,d)})}function m(e){for(var i,t,n,o=e.length,r=_.relative[e[0].type],a=r||_.relative[" "],s=r?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
u=f(function(e){return e===i},a,!0),c=f(function(e){return-1<ee(i,e)},a,!0),l=[function(e,t,n){var o=!r&&(n||t!==N)||((i=t).nodeType?u(e,t,n):c(e,t,n));
// Avoid hanging onto element (issue #299)
return i=null,o}];s<o;s++)if(t=_.relative[e[s].type])l=[f(d(l),t)];else{
// Return special upon seeing a positional matcher
if((t=_.filter[e[s].type].apply(null,e[s].matches))[W]){for(
// Find the next relative operator (if any) for proper handling
n=++s;n<o&&!_.relative[e[n].type];n++);return b(1<s&&d(l),1<s&&h(
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(se,"$1"),t,s<n&&m(e.slice(s,n)),n<o&&m(e=e.slice(n)),n<o&&h(e))}l.push(t)}return d(l)}function g(g,v){var y=0<v.length,b=0<g.length,e=function(e,t,n,o,i){var r,a,s,u=0,c="0",l=e&&[],f=[],d=N,
// We must always have either seed elements or outermost context
p=e||b&&_.find.TAG("*",i),
// Use integer dirruns iff this is the outermost matcher
h=$+=null==d?1:Math.random()||.1,m=p.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(i&&(N=t===L||t||i);c!==m&&null!=(r=p[c]);c++){if(b&&r){for(a=0,t||r.ownerDocument===L||(q(r),n=!O);s=g[a++];)if(s(r,t||L,n)){o.push(r);break}i&&($=h)}
// Track unmatched elements for set filters
y&&(
// They will have gone through all possible matchers
(r=!s&&r)&&u--,
// Lengthen the array for every element, matched or not
e&&l.push(r))}
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(u+=c,y&&c!==u){for(a=0;s=v[a++];)s(l,f,t,n);if(e){
// Reintegrate element matches to eliminate the need for sorting
if(0<u)for(;c--;)l[c]||f[c]||(f[c]=Y.call(o));
// Discard index placeholder values to get only actual matches
f=x(f)}
// Add matches to results
K.apply(o,f),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
i&&!e&&0<f.length&&1<u+v.length&&w.uniqueSort(o)}
// Override manipulation of globals by nested matchers
return i&&($=h,N=d),l};return y?u(e):e}var v,T,_,C,k,j,E,S,N,D,A,
// Local document vars
q,L,H,O,F,P,M,R,
// Instance-specific data
W="sizzle"+1*new Date,I=n.document,$=0,B=0,z=e(),X=e(),U=e(),Q=function(e,t){return e===t&&(A=!0),0},
// Instance methods
V={}.hasOwnProperty,G=[],Y=G.pop,J=G.push,K=G.push,Z=G.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
ee=function(e,t){for(var n=0,o=e.length;n<o;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
ne="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
oe="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
ie="\\["+ne+"*("+oe+")(?:"+ne+
// Operator (capture 2)
"*([*^$|!~]?=)"+ne+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+oe+"))|)"+ne+"*\\]",re=":("+oe+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ae=new RegExp(ne+"+","g"),se=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),le=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(re),de=new RegExp("^"+oe+"$"),pe={ID:new RegExp("^#("+oe+")"),CLASS:new RegExp("^\\.("+oe+")"),TAG:new RegExp("^("+oe+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
be=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),we=function(e,t,n){var o="0x"+t-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return o!=o||n?t:o<0?
// BMP codepoint
String.fromCharCode(o+65536):
// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(o>>10|55296,1023&o|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
xe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Te=function(e,t){return t?
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;
// Other potentially-special ASCII characters get backslash-escaped
},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
_e=function(){q()},Ce=f(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{K.apply(G=Z.call(I.childNodes),I.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
G[I.childNodes.length].nodeType}catch(e){K={apply:G.length?
// Leverage slice if possible
function(e,t){J.apply(e,Z.call(t))}:
// Support: IE<9
// Otherwise append directly
function(e,t){
// Can't trust NodeList.length
for(var n=e.length,o=0;e[n++]=t[o++];);e.length=n-1}}}
// Add button/input type pseudos
for(v in T=w.support={},
/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
k=w.isXML=function(e){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},
/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
q=w.setDocument=function(e){var t,n,o=e?e.ownerDocument||e:I;
// Return early if doc is invalid or already selected
return o!==L&&9===o.nodeType&&o.documentElement&&(
// Update global variables
H=(L=o).documentElement,O=!k(L),
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
I!==L&&(n=L.defaultView)&&n.top!==n&&(
// Support: IE 11, Edge
n.addEventListener?n.addEventListener("unload",_e,!1):n.attachEvent&&n.attachEvent("onunload",_e)),
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
T.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
T.getElementsByTagName=i(function(e){return e.appendChild(L.createComment("")),!e.getElementsByTagName("*").length}),
// Support: IE<9
T.getElementsByClassName=ge.test(L.getElementsByClassName),
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
T.getById=i(function(e){return H.appendChild(e).id=W,!L.getElementsByName||!L.getElementsByName(W).length}),
// ID filter and find
T.getById?(_.filter.ID=function(e){var t=e.replace(be,we);return function(e){return e.getAttribute("id")===t}},_.find.ID=function(e,t){if(void 0!==t.getElementById&&O){var n=t.getElementById(e);return n?[n]:[]}}):(_.filter.ID=function(e){var n=e.replace(be,we);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},
// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
_.find.ID=function(e,t){if(void 0!==t.getElementById&&O){var n,o,i,r=t.getElementById(e);if(r){if((
// Verify the id attribute
n=r.getAttributeNode("id"))&&n.value===e)return[r];
// Fall back on getElementsByName
for(i=t.getElementsByName(e),o=0;r=i[o++];)if((n=r.getAttributeNode("id"))&&n.value===e)return[r]}return[]}}),
// Tag
_.find.TAG=T.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):T.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,o=[],i=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
r=t.getElementsByTagName(e);
// Filter out possible comments
if("*"!==e)return r;for(;n=r[i++];)1===n.nodeType&&o.push(n);return o},
// Class
_.find.CLASS=T.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&O)return t.getElementsByClassName(e)},
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
P=[],
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
F=[],(T.qsa=ge.test(L.querySelectorAll))&&(
// Build QSA regex
// Regex strategy adopted from Diego Perini
i(function(e){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
H.appendChild(e).innerHTML="<a id='"+W+"'></a><select id='"+W+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowcapture^='']").length&&F.push("[*^$]="+ne+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||F.push("\\["+ne+"*(?:value|"+te+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
e.querySelectorAll("[id~="+W+"-]").length||F.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||F.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
e.querySelectorAll("a#"+W+"+*").length||F.push(".#.+[+~]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=L.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&F.push("name"+ne+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==e.querySelectorAll(":enabled").length&&F.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
H.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&F.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),F.push(",.*:")})),(T.matchesSelector=ge.test(M=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&i(function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
T.disconnectedMatch=M.call(e,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
M.call(e,"[s!='']:x"),P.push("!=",re)}),F=F.length&&new RegExp(F.join("|")),P=P.length&&new RegExp(P.join("|")),
/* Contains
	---------------------------------------------------------------------- */
t=ge.test(H.compareDocumentPosition),
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
R=t||ge.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,o=t&&t.parentNode;return e===o||!(!o||1!==o.nodeType||!(n.contains?n.contains(o):e.compareDocumentPosition&&16&e.compareDocumentPosition(o)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
Q=t?function(e,t){
// Flag for duplicate removal
if(e===t)return A=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(
// Disconnected nodes
1&(
// Calculate position if both inputs belong to the same document
n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):
// Otherwise we know they are disconnected
1)||!T.sortDetached&&t.compareDocumentPosition(e)===n?
// Choose the first element that is related to our preferred document
e===L||e.ownerDocument===I&&R(I,e)?-1:t===L||t.ownerDocument===I&&R(I,t)?1:D?ee(D,e)-ee(D,t):0:4&n?-1:1)}:function(e,t){
// Exit early if the nodes are identical
if(e===t)return A=!0,0;var n,o=0,i=e.parentNode,r=t.parentNode,a=[e],s=[t];
// Parentless nodes are either documents or disconnected
if(!i||!r)return e===L?-1:t===L?1:i?-1:r?1:D?ee(D,e)-ee(D,t):0;
// If the nodes are siblings, we can do a quick check
// Otherwise we need full lists of their ancestors for comparison
if(i===r)return c(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);
// Walk down the tree looking for a discrepancy
for(;a[o]===s[o];)o++;return o?
// Do a sibling check if the nodes have a common ancestor
c(a[o],s[o]):
// Otherwise nodes in our document sort first
a[o]===I?-1:s[o]===I?1:0}),L},w.matches=function(e,t){return w(e,null,null,t)},w.matchesSelector=function(e,t){if(
// Set document vars if needed
(e.ownerDocument||e)!==L&&q(e),
// Make sure that attribute selectors are quoted
t=t.replace(le,"='$1']"),T.matchesSelector&&O&&!U[t+" "]&&(!P||!P.test(t))&&(!F||!F.test(t)))try{var n=M.call(e,t);
// IE 9's matchesSelector returns false on disconnected nodes
if(n||T.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<w(t,L,null,[e]).length},w.contains=function(e,t){
// Set document vars if needed
return(e.ownerDocument||e)!==L&&q(e),R(e,t)},w.attr=function(e,t){
// Set document vars if needed
(e.ownerDocument||e)!==L&&q(e);var n=_.attrHandle[t.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
o=n&&V.call(_.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==o?o:T.attributes||!O?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},w.escape=function(e){return(e+"").replace(xe,Te)},w.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},
/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
w.uniqueSort=function(e){var t,n=[],o=0,i=0;
// Unless we *know* we can detect duplicates, assume their presence
if(A=!T.detectDuplicates,D=!T.sortStable&&e.slice(0),e.sort(Q),A){for(;t=e[i++];)t===e[i]&&(o=n.push(i));for(;o--;)e.splice(n[o],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return D=null,e},
/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
C=w.getText=function(e){var t,n="",o=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;
// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue;
// Do not include comment or processing instruction nodes
}else
// If no nodeType, this is expected to be an array
for(;t=e[o++];)
// Do not traverse comment nodes
n+=C(t);return n},(_=w.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:u,match:pe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,we),
// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(be,we),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){
/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(
// nth-* requires argument
e[3]||w.error(e[0]),
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&w.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return pe.CHILD.test(e[0])?null:(
// Accept quoted arguments as-is
e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(
// Get excess from tokenize (recursively)
t=j(n,!0))&&(
// advance to the next closing parenthesis
t=n.indexOf(")",n.length-t)-n.length)&&(
// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,we).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,o,i){return function(e){var t=w.attr(e,n);return null==t?"!="===o:!o||(t+="","="===o?t===i:"!="===o?t!==i:"^="===o?i&&0===t.indexOf(i):"*="===o?i&&-1<t.indexOf(i):"$="===o?i&&t.slice(-i.length)===i:"~="===o?-1<(" "+t.replace(ae," ")+" ").indexOf(i):"|="===o&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,m,g){var v="nth"!==h.slice(0,3),y="last"!==h.slice(-4),b="of-type"===e;return 1===m&&0===g?
// Shortcut for :nth-*(n)
function(e){return!!e.parentNode}:function(e,t,n){var o,i,r,a,s,u,c=v!==y?"nextSibling":"previousSibling",l=e.parentNode,f=b&&e.nodeName.toLowerCase(),d=!n&&!b,p=!1;if(l){
// :(first|last|only)-(child|of-type)
if(v){for(;c;){for(a=e;a=a[c];)if(b?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
u=c="only"===h&&!u&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(u=[y?l.firstChild:l.lastChild],y&&d){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
p=(s=(o=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(r=(a=l)[W]||(a[W]={}))[a.uniqueID]||(r[a.uniqueID]={}))[h]||[])[0]===$&&o[1])&&o[2],a=s&&l.childNodes[s];a=++s&&a&&a[c]||(
// Fallback to seeking `elem` from the start
p=s=0)||u.pop();)
// When found, cache indexes on `parent` and break
if(1===a.nodeType&&++p&&a===e){i[h]=[$,s,p];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
d&&(p=s=(o=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(r=(
// ...in a gzip-friendly way
a=e)[W]||(a[W]={}))[a.uniqueID]||(r[a.uniqueID]={}))[h]||[])[0]===$&&o[1]),!1===p)
// Use the same loop as above to seek `elem` from the start
for(;(a=++s&&a&&a[c]||(p=s=0)||u.pop())&&((b?a.nodeName.toLowerCase()!==f:1!==a.nodeType)||!++p||(
// Cache the index of each encountered element
d&&((
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=(r=a[W]||(a[W]={}))[a.uniqueID]||(r[a.uniqueID]={}))[h]=[$,p]),a!==e)););
// Incorporate the offset, then check against cycle size
return(p-=g)===m||p%m==0&&0<=p/m}}},PSEUDO:function(e,r){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var t,a=_.pseudos[e]||_.setFilters[e.toLowerCase()]||w.error("unsupported pseudo: "+e);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
return a[W]?a(r):
// But maintain support for old signatures
1<a.length?(t=[e,e,"",r],_.setFilters.hasOwnProperty(e.toLowerCase())?u(function(e,t){for(var n,o=a(e,r),i=o.length;i--;)e[n=ee(e,o[i])]=!(t[n]=o[i])}):function(e){return a(e,0,t)}):a}},pseudos:{
// Potentially complex pseudos
not:u(function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var o=[],i=[],s=E(e.replace(se,"$1"));return s[W]?u(function(e,t,n,o){
// Match elements unmatched by `matcher`
for(var i,r=s(e,null,o,[]),a=e.length;a--;)(i=r[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return o[0]=e,s(o,null,n,i),
// Don't keep the element (issue #299)
o[0]=null,!i.pop()}}),has:u(function(t){return function(e){return 0<w(t,e).length}}),contains:u(function(t){return t=t.replace(be,we),function(e){return-1<(e.textContent||e.innerText||C(e)).indexOf(t)}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:u(function(n){
// lang value must be a valid identifier
return de.test(n||"")||w.error("unsupported lang: "+n),n=n.replace(be,we).toLowerCase(),function(e){var t;do{if(t=O?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),
// Miscellaneous
target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===H},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:a(!1),disabled:a(!0),checked:function(e){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},
// Contents
empty:function(e){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!_.pseudos.empty(e)},
// Element/input types
header:function(e){return me.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
// Position-in-collection
first:s(function(){return[0]}),last:s(function(e,t){return[t-1]}),eq:s(function(e,t,n){return[n<0?n+t:n]}),even:s(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:s(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:s(function(e,t,n){for(var o=n<0?n+t:n;0<=--o;)e.push(o);return e}),gt:s(function(e,t,n){for(var o=n<0?n+t:n;++o<t;)e.push(o);return e})}}).pseudos.nth=_.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})_.pseudos[v]=o(v);for(v in{submit:!0,reset:!0})_.pseudos[v]=r(v);return l.prototype=_.filters=_.pseudos,_.setFilters=new l,j=w.tokenize=function(e,t){var n,o,i,r,a,s,u,c=X[e+" "];if(c)return t?0:c.slice(0);for(a=e,s=[],u=_.preFilter;a;){
// Filters
for(r in
// Comma and first run
n&&!(o=ue.exec(a))||(o&&(
// Don't consume trailing commas as valid
a=a.slice(o[0].length)||a),s.push(i=[])),n=!1,
// Combinators
(o=ce.exec(a))&&(n=o.shift(),i.push({value:n,
// Cast descendant combinators to space
type:o[0].replace(se," ")}),a=a.slice(n.length)),_.filter)!(o=pe[r].exec(a))||u[r]&&!(o=u[r](o))||(n=o.shift(),i.push({value:n,type:r,matches:o}),a=a.slice(n.length));if(!n)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return t?a.length:a?w.error(e):
// Cache the tokens
X(e,s).slice(0)},E=w.compile=function(e,t/* Internal Use Only */){var n,o=[],i=[],r=U[e+" "];if(!r){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=j(e)),n=t.length;n--;)(r=m(t[n]))[W]?o.push(r):i.push(r);
// Cache the compiled function
// Save selector and tokenization
(r=U(e,g(i,o))).selector=e}return r},
/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
S=w.select=function(e,t,n,o){var i,r,a,s,u,c="function"==typeof e&&e,l=!o&&j(e=c.selector||e);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===l.length){if(2<(
// Reduce context if the leading compound selector is an ID
r=l[0]=l[0].slice(0)).length&&"ID"===(a=r[0]).type&&9===t.nodeType&&O&&_.relative[r[1].type]){if(!(t=(_.find.ID(a.matches[0].replace(be,we),t)||[])[0]))return n;
// Precompiled matchers will still verify ancestry, so step up a level
c&&(t=t.parentNode),e=e.slice(r.shift().value.length)}
// Fetch a seed set for right-to-left matching
for(i=pe.needsContext.test(e)?0:r.length;i--&&(a=r[i],!_.relative[s=a.type]);)if((u=_.find[s])&&(o=u(a.matches[0].replace(be,we),ye.test(r[0].type)&&p(t.parentNode)||t))){if(
// If seed is empty or no tokens remain, we can return early
r.splice(i,1),!(e=o.length&&h(r)))return K.apply(n,o),n;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(c||E(e,l))(o,t,!O,n,!t||ye.test(e)&&p(t.parentNode)||t),n},
// One-time assignments
// Sort stability
T.sortStable=W.split("").sort(Q).join("")===W,
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
T.detectDuplicates=!!A,
// Initialize against the default document
q(),
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
T.sortDetached=i(function(e){
// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(L.createElement("fieldset"))}),
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||t("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
T.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||t("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
i(function(e){return null==e.getAttribute("disabled")})||t(te,function(e,t,n){var o;if(!n)return!0===e[t]?t.toLowerCase():(o=e.getAttributeNode(t))&&o.specified?o.value:null}),w}(_);me.find=we,me.expr=we.selectors,
// Deprecated
me.expr[":"]=me.expr.pseudos,me.uniqueSort=me.unique=we.uniqueSort,me.text=we.getText,me.isXMLDoc=we.isXML,me.contains=we.contains,me.escapeSelector=we.escape;var xe=function(e,t,n){for(var o=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&me(e).is(n))break;o.push(e)}return o},Te=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},_e=me.expr.match.needsContext,Ce=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,ke=/^.[^:#\[\.,]*$/;me.filter=function(e,t,n){var o=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===o.nodeType?me.find.matchesSelector(o,e)?[o]:[]:me.find.matches(e,me.grep(t,function(e){return 1===e.nodeType}))},me.fn.extend({find:function(e){var t,n,o=this.length,i=this;if("string"!=typeof e)return this.pushStack(me(e).filter(function(){for(t=0;t<o;t++)if(me.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<o;t++)me.find(e,i[t],n);return 1<o?me.uniqueSort(n):n},filter:function(e){return this.pushStack(t(this,e||[],!1))},not:function(e){return this.pushStack(t(this,e||[],!0))},is:function(e){return!!t(this,
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&_e.test(e)?me(e):e||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var je,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
Ee=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Se;
// Give the init function the jQuery prototype for later instantiation
(me.fn.init=function(e,t,n){var o,i;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
// Handle HTML strings
if(n=n||je,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):me.isFunction(e)?void 0!==n.ready?n.ready(e):
// Execute immediately if ready is not present
e(me):me.makeArray(e,this);
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
o="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:Ee.exec(e))||!o[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);
// HANDLE: $(DOMElement)
// HANDLE: $(html) -> $(array)
if(o[1]){
// HANDLE: $(html, props)
if(t=t instanceof me?t[0]:t,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
me.merge(this,me.parseHTML(o[1],t&&t.nodeType?t.ownerDocument||t:ne,!0)),Ce.test(o[1])&&me.isPlainObject(t))for(o in t)
// Properties of context are called as methods if possible
me.isFunction(this[o])?this[o](t[o]):this.attr(o,t[o]);return this;
// HANDLE: $(#id)
}
// HANDLE: $(expr, $(...))
return(i=ne.getElementById(o[2]))&&(
// Inject the element directly into the jQuery object
this[0]=i,this.length=1),this}).prototype=me.fn,
// Initialize central reference
je=me(ne);var Ne=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
De={children:!0,contents:!0,next:!0,prev:!0};me.fn.extend({has:function(e){var t=me(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(me.contains(this,t[e]))return!0})},closest:function(e,t){var n,o=0,i=this.length,r=[],a="string"!=typeof e&&me(e);
// Positional selectors never match, since there's no _selection_ context
if(!_e.test(e))for(;o<i;o++)for(n=this[o];n&&n!==t;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(a?-1<a.index(n):
// Don't pass non-elements to Sizzle
1===n.nodeType&&me.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(1<r.length?me.uniqueSort(r):r)},
// Determine the position of an element within the set
index:function(e){
// No argument, return index in parent
return e?
// Index in selector
"string"==typeof e?se.call(me(e),this[0]):se.call(this,
// If it receives a jQuery object, the first element is used
e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(me.uniqueSort(me.merge(this.get(),me(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),me.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return xe(e,"parentNode")},parentsUntil:function(e,t,n){return xe(e,"parentNode",n)},next:function(e){return n(e,"nextSibling")},prev:function(e){return n(e,"previousSibling")},nextAll:function(e){return xe(e,"nextSibling")},prevAll:function(e){return xe(e,"previousSibling")},nextUntil:function(e,t,n){return xe(e,"nextSibling",n)},prevUntil:function(e,t,n){return xe(e,"previousSibling",n)},siblings:function(e){return Te((e.parentNode||{}).firstChild,e)},children:function(e){return Te(e.firstChild)},contents:function(e){return c(e,"iframe")?e.contentDocument:(
// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
c(e,"template")&&(e=e.content||e),me.merge([],e.childNodes))}},function(o,i){me.fn[o]=function(e,t){var n=me.map(this,i,e);return"Until"!==o.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=me.filter(t,n)),1<this.length&&(
// Remove duplicates
De[o]||me.uniqueSort(n),
// Reverse order for parents* and prev-derivatives
Ne.test(o)&&n.reverse()),this.pushStack(n)}});var Ae=/[^\x20\t\r\n\f]+/g;me.Callbacks=function(o){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
o="string"==typeof o?l(o):me.extend({},o);var// Flag to know if list is currently firing
n,
// Last fire value for non-forgettable lists
e,
// Flag to know if list was already fired
t,
// Flag to prevent firing
i,
// Actual callback list
r=[],
// Queue of execution data for repeatable lists
a=[],
// Index of currently firing callback (modified by add/remove as needed)
s=-1,
// Fire callbacks
u=function(){for(
// Enforce single-firing
i=i||o.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
t=n=!0;a.length;s=-1)for(e=a.shift();++s<r.length;)
// Run callback and check for early termination
!1===r[s].apply(e[0],e[1])&&o.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
s=r.length,e=!1);
// Forget the data if we're done with it
o.memory||(e=!1),n=!1,
// Clean up if we're done firing for good
i&&(
// Keep an empty list if we have data for future add calls
r=e?[]:"")},
// Actual Callbacks object
c={
// Add a callback or a collection of callbacks to the list
add:function(){return r&&(
// If we have memory from a past run, we should fire after adding
e&&!n&&(s=r.length-1,a.push(e)),function n(e){me.each(e,function(e,t){me.isFunction(t)?o.unique&&c.has(t)||r.push(t):t&&t.length&&"string"!==me.type(t)&&
// Inspect recursively
n(t)})}(arguments),e&&!n&&u()),this},
// Remove a callback from the list
remove:function(){return me.each(arguments,function(e,t){for(var n;-1<(n=me.inArray(t,r,n));)r.splice(n,1),
// Handle firing indexes
n<=s&&s--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?-1<me.inArray(e,r):0<r.length},
// Remove all callbacks from the list
empty:function(){return r&&(r=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return i=a=[],r=e="",this},disabled:function(){return!r},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return i=a=[],e||n||(r=e=""),this},locked:function(){return!!i},
// Call all callbacks with the given context and arguments
fireWith:function(e,t){return i||(t=[e,(t=t||[]).slice?t.slice():t],a.push(t),n||u()),this},
// Call all the callbacks with the given arguments
fire:function(){return c.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!t}};return c},me.extend({Deferred:function(e){var r=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",me.Callbacks("memory"),me.Callbacks("memory"),2],["resolve","done",me.Callbacks("once memory"),me.Callbacks("once memory"),0,"resolved"],["reject","fail",me.Callbacks("once memory"),me.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return a.then(null,e)},
// Keep pipe for back-compat
pipe:function(){var i=arguments;return me.Deferred(function(o){me.each(r,function(e,t){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var n=me.isFunction(i[t[4]])&&i[t[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&me.isFunction(e.promise)?e.promise().progress(o.notify).done(o.resolve).fail(o.reject):o[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,o){function u(i,r,a,s){return function(){var n=this,o=arguments,e=function(){var e,t;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(i<c)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=a.apply(n,o))===r.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
t=e&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof e||"function"==typeof e)&&e.then,
// Handle a returned thenable
me.isFunction(t)?
// Special processors (notify) just wait for resolution
s?t.call(e,u(c,r,f,s),u(c,r,d,s)):(
// ...and disregard older resolution values
c++,t.call(e,u(c,r,f,s),u(c,r,d,s),u(c,r,f,r.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
a!==f&&(n=void 0,o=[e]),
// Process the value(s)
// Default process is resolve
(s||r.resolveWith)(n,o))}},
// Only normal processors (resolve) catch and reject exceptions
t=s?e:function(){try{e()}catch(e){me.Deferred.exceptionHook&&me.Deferred.exceptionHook(e,t.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
c<=i+1&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
a!==d&&(n=void 0,o=[e]),r.rejectWith(n,o))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
i?t():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
me.Deferred.getStackHook&&(t.stackTrace=me.Deferred.getStackHook()),_.setTimeout(t))}}var c=0;return me.Deferred(function(e){
// progress_handlers.add( ... )
r[0][3].add(u(0,e,me.isFunction(o)?o:f,e.notifyWith)),
// fulfilled_handlers.add( ... )
r[1][3].add(u(0,e,me.isFunction(t)?t:f)),
// rejected_handlers.add( ... )
r[2][3].add(u(0,e,me.isFunction(n)?n:d))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?me.extend(e,a):a}},s={};
// Add list-specific methods
// All done!
return me.each(r,function(e,t){var n=t[2],o=t[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
a[t[1]]=n.add,
// Handle state
o&&n.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
i=o},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
r[3-e][2].disable,
// progress_callbacks.lock
r[0][2].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
n.add(t[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
s[t[0]+"With"]=n.fireWith}),
// Make the deferred a promise
a.promise(s),
// Call given func if any
e&&e.call(s,s),s},
// Deferred helper
when:function(e){var
// count of uncompleted subordinates
n=arguments.length,
// count of unprocessed arguments
t=n,
// subordinate fulfillment data
o=Array(t),i=ie.call(arguments),
// the master Deferred
r=me.Deferred(),
// subordinate callback factory
a=function(t){return function(e){o[t]=this,i[t]=1<arguments.length?ie.call(arguments):e,--n||r.resolveWith(o,i)}};
// Single- and empty arguments are adopted like Promise.resolve
if(n<=1&&(u(e,r.done(a(t)).resolve,r.reject,!n),"pending"===r.state()||me.isFunction(i[t]&&i[t].then)))return r.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;t--;)u(i[t],a(t),r.reject);return r.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var qe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;me.Deferred.exceptionHook=function(e,t){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
_.console&&_.console.warn&&e&&qe.test(e.name)&&_.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},me.readyException=function(e){_.setTimeout(function(){throw e})};
// The deferred used on DOM ready
var Le=me.Deferred();me.fn.ready=function(e){return Le.then(e).catch(function(e){me.readyException(e)}),this},me.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
(!0===e?--me.readyWait:me.isReady)||(
// Remember that the DOM is ready
me.isReady=!0)!==e&&0<--me.readyWait||
// If there are functions bound, to execute
Le.resolveWith(ne,[me])}}),me.ready.then=Le.then,"complete"===ne.readyState||"loading"!==ne.readyState&&!ne.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
_.setTimeout(me.ready):(
// Use the handy event callback
ne.addEventListener("DOMContentLoaded",o),
// A fallback to window.onload, that will always work
_.addEventListener("load",o));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var He=function(e,t,n,o,i,r,a){var s=0,u=e.length,c=null==n;
// Sets many values
if("object"===me.type(n))for(s in i=!0,n)He(e,t,s,n[s],!0,r,a);
// Sets one value
else if(void 0!==o&&(i=!0,me.isFunction(o)||(a=!0),c&&(
// Bulk operations run against the entire set
t=a?(t.call(e,o),null):(c=t,function(e,t,n){return c.call(me(e),n)})),t))for(;s<u;s++)t(e[s],n,a?o:o.call(e[s],s,t(e[s],n)));return i?e:
// Gets
c?t.call(e):u?t(e[0],n):r},Oe=function(e){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};i.uid=1,i.prototype={cache:function(e){
// Check if the owner object already has a cache
var t=e[this.expando];
// If not, create one
return t||(t={},
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
Oe(e)&&(
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var o,i=this.cache(e);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)i[me.camelCase(t)]=n;
// Handle: [ owner, { properties } ] args
else
// Copy the properties one-by-one to the cache object
for(o in t)i[me.camelCase(o)]=t[o];return i},get:function(e,t){return void 0===t?this.cache(e):
// Always use camelCase key (gh-2257)
e[this.expando]&&e[this.expando][me.camelCase(t)]},access:function(e,t,n){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,o=e[this.expando];if(void 0!==o){if(void 0!==t){n=(
// Support array or space separated string of keys
// If key is an array of keys...
// We always set camelCase keys, so remove that.
t=Array.isArray(t)?t.map(me.camelCase):(t=me.camelCase(t))in o?[t]:t.match(Ae)||[]).length;for(;n--;)delete o[t[n]]}
// Remove the expando if there's no more data
(void 0===t||me.isEmptyObject(o))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!me.isEmptyObject(t)}};var Fe=new i,Pe=new i,Me=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Re=/[A-Z]/g;me.extend({hasData:function(e){return Pe.hasData(e)||Fe.hasData(e)},data:function(e,t,n){return Pe.access(e,t,n)},removeData:function(e,t){Pe.remove(e,t)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return Fe.access(e,t,n)},_removeData:function(e,t){Fe.remove(e,t)}}),me.fn.extend({data:function(n,e){var t,o,i,r=this[0],a=r&&r.attributes;
// Gets all values
if(void 0!==n)
// Sets multiple values
return"object"==typeof n?this.each(function(){Pe.set(this,n)}):He(this,function(e){var t;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(r&&void 0===e)return void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
t=Pe.get(r,n))?t:void 0!==(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
t=p(r,n))?t:
// We tried really hard, but the data doesn't exist.
void 0;
// Set the data...
this.each(function(){
// We always store the camelCased key
Pe.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(i=Pe.get(r),1===r.nodeType&&!Fe.get(r,"hasDataAttrs"))){for(t=a.length;t--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
a[t]&&0===(o=a[t].name).indexOf("data-")&&(o=me.camelCase(o.slice(5)),p(r,o,i[o]));Fe.set(r,"hasDataAttrs",!0)}return i},removeData:function(e){return this.each(function(){Pe.remove(this,e)})}}),me.extend({queue:function(e,t,n){var o;if(e)return t=(t||"fx")+"queue",o=Fe.get(e,t),
// Speed up dequeue by getting out quickly if this is just a lookup
n&&(!o||Array.isArray(n)?o=Fe.access(e,t,me.makeArray(n)):o.push(n)),o||[]},dequeue:function(e,t){t=t||"fx";var n=me.queue(e,t),o=n.length,i=n.shift(),r=me._queueHooks(e,t),a=function(){me.dequeue(e,t)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===i&&(i=n.shift(),o--),i&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),
// Clear up the last queue stop function
delete r.stop,i.call(e,a,r)),!o&&r&&r.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return Fe.get(e,n)||Fe.access(e,n,{empty:me.Callbacks("once memory").add(function(){Fe.remove(e,[t+"queue",n])})})}}),me.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?me.queue(this[0],t):void 0===n?this:this.each(function(){var e=me.queue(this,t,n);
// Ensure a hooks for this queue
me._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&me.dequeue(this,t)})},dequeue:function(e){return this.each(function(){me.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,o=1,i=me.Deferred(),r=this,a=this.length,s=function(){--o||i.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Fe.get(r[a],e+"queueHooks"))&&n.empty&&(o++,n.empty.add(s));return s(),i.promise(t)}});var We=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ie=new RegExp("^(?:([+-])=|)("+We+")([a-z%]*)$","i"),$e=["Top","Right","Bottom","Left"],Be=function(e,t){
// Inline style trumps all
return"none"===(
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
e=t||e).style.display||""===e.style.display&&
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
me.contains(e.ownerDocument,e)&&"none"===me.css(e,"display")},ze=function(e,t,n,o){var i,r,a={};
// Remember the old values, and insert the new ones
for(r in t)a[r]=e.style[r],e.style[r]=t[r];
// Revert the old values
for(r in i=n.apply(e,o||[]),t)e.style[r]=a[r];return i},Xe={};me.fn.extend({show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Be(this)?me(this).show():me(this).hide()})}});var Ue=/^(?:checkbox|radio)$/i,Qe=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Ve=/^$|\/(?:java|ecma)script/i,Ge={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
Ge.optgroup=Ge.option,Ge.tbody=Ge.tfoot=Ge.colgroup=Ge.caption=Ge.thead,Ge.th=Ge.td;var Ye=/<|&#?\w+;/,Je,Ke,Ze;Ke=ne.createDocumentFragment().appendChild(ne.createElement("div")),
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
(Ze=ne.createElement("input")).setAttribute("type","radio"),Ze.setAttribute("checked","checked"),Ze.setAttribute("name","t"),Ke.appendChild(Ze),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
pe.checkClone=Ke.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
Ke.innerHTML="<textarea>x</textarea>",pe.noCloneChecked=!!Ke.cloneNode(!0).lastChild.defaultValue;var et=ne.documentElement,tt=/^key/,nt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ot=/^([^.]*)(?:\.(.+)|)/;me.event={global:{},add:function(t,e,n,o,i){var r,a,s,u,c,l,f,d,p,h,m,g=Fe.get(t);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(g)for(
// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(n=(r=n).handler,i=r.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
i&&me.find.matchesSelector(et,i),
// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=me.guid++),
// Init the element's event structure and main handler, if this is the first
(u=g.events)||(u=g.events={}),(a=g.handle)||(a=g.handle=function(e){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==me&&me.event.triggered!==e.type?me.event.dispatch.apply(t,arguments):void 0}),c=(
// Handle multiple events separated by a space
e=(e||"").match(Ae)||[""]).length;c--;)p=m=(s=ot.exec(e[c])||[])[1],h=(s[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
p&&(
// If event changes its type, use the special event handlers for the changed type
f=me.event.special[p]||{},
// If selector defined, determine special event api type, otherwise given type
p=(i?f.delegateType:f.bindType)||p,
// Update special based on newly reset type
f=me.event.special[p]||{},
// handleObj is passed to all event handlers
l=me.extend({type:p,origType:m,data:o,handler:n,guid:n.guid,selector:i,needsContext:i&&me.expr.match.needsContext.test(i),namespace:h.join(".")},r),
// Init the event handler queue if we're the first
(d=u[p])||((d=u[p]=[]).delegateCount=0,
// Only use addEventListener if the special events handler returns false
f.setup&&!1!==f.setup.call(t,o,h,a)||t.addEventListener&&t.addEventListener(p,a)),f.add&&(f.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),
// Add to the element's handler list, delegates in front
i?d.splice(d.delegateCount++,0,l):d.push(l),
// Keep track of which events have ever been used, for event optimization
me.event.global[p]=!0)},
// Detach an event or set of events from an element
remove:function(e,t,n,o,i){var r,a,s,u,c,l,f,d,p,h,m,g=Fe.hasData(e)&&Fe.get(e);if(g&&(u=g.events)){for(c=(
// Once for each type.namespace in types; type may be omitted
t=(t||"").match(Ae)||[""]).length;c--;)
// Unbind all events (on this namespace, if provided) for the element
if(p=m=(s=ot.exec(t[c])||[])[1],h=(s[2]||"").split(".").sort(),p){for(f=me.event.special[p]||{},d=u[p=(o?f.delegateType:f.bindType)||p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
a=r=d.length;r--;)l=d[r],!i&&m!==l.origType||n&&n.guid!==l.guid||s&&!s.test(l.namespace)||o&&o!==l.selector&&("**"!==o||!l.selector)||(d.splice(r,1),l.selector&&d.delegateCount--,f.remove&&f.remove.call(e,l));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
a&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,g.handle)||me.removeEvent(e,p,g.handle),delete u[p])}else for(p in u)me.event.remove(e,p+t[c],n,o,!0);
// Remove data and the expando if it's no longer used
me.isEmptyObject(u)&&Fe.remove(e,"handle events")}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
var t=me.event.fix(e),n,o,i,r,a,s,u=new Array(arguments.length),c=(Fe.get(this,"events")||{})[t.type]||[],l=me.event.special[t.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(t.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,t)){for(
// Determine handlers
s=me.event.handlers.call(this,t,c),
// Run delegates first; they may want to stop propagation beneath us
n=0;(r=s[n++])&&!t.isPropagationStopped();)for(t.currentTarget=r.elem,o=0;(a=r.handlers[o++])&&!t.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((me.event.special[a.origType]||{}).handle||a.handler).apply(r.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()));
// Call the postDispatch hook for the mapped type
return l.postDispatch&&l.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,o,i,r,a,s=[],u=t.delegateCount,c=e.target;
// Find delegate handlers
if(u&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
c.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&1<=e.button))for(;c!==this;c=c.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(r=[],a={},n=0;n<u;n++)void 0===a[
// Don't conflict with Object.prototype properties (#13203)
i=(o=t[n]).selector+" "]&&(a[i]=o.needsContext?-1<me(i,this).index(c):me.find(i,this,null,[c]).length),a[i]&&r.push(o);r.length&&s.push({elem:c,handlers:r})}
// Add the remaining (directly-bound) handlers
return c=this,u<t.length&&s.push({elem:c,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(me.Event.prototype,t,{enumerable:!0,configurable:!0,get:me.isFunction(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[me.expando]?e:new me.Event(e)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==T()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===T()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&c(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return c(e.target,"a")}},beforeunload:{postDispatch:function(e){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},me.removeEvent=function(e,t,n){
// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},me.Event=function(e,t){
// Allow instantiation without the 'new' keyword
if(!(this instanceof me.Event))return new me.Event(e,t);
// Event object
e&&e.type?(this.originalEvent=e,this.type=e.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&
// Support: Android <=2.3 only
!1===e.returnValue?a:x,
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,
// Put explicitly provided properties onto the event object
t&&me.extend(this,t),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||me.now(),
// Mark it as fixed
this[me.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
me.Event.prototype={constructor:me.Event,isDefaultPrevented:x,isPropagationStopped:x,isImmediatePropagationStopped:x,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=a,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=a,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=a,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
me.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;
// Add which for key events
return null==e.which&&tt.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:
// Add which for click: 1 === left; 2 === middle; 3 === right
!e.which&&void 0!==t&&nt.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},me.event.addProp),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
me.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,r){me.event.special[e]={delegateType:r,bindType:r,handle:function(e){var t,n=this,o=e.relatedTarget,i=e.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return o&&(o===n||me.contains(n,o))||(e.type=i.origType,t=i.handler.apply(this,arguments),e.type=r),t}}}),me.fn.extend({on:function(e,t,n,o){return C(this,e,t,n,o)},one:function(e,t,n,o){return C(this,e,t,n,o,1)},off:function(e,t,n){var o,i;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return o=e.handleObj,me(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(
// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=x),this.each(function(){me.event.remove(this,e,n,t)});
// ( types-object [, selector] )
for(i in e)this.off(i,t,e[i]);return this}});var
/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
it=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
rt=/<script|<style|<link/i,
// checked="checked" or checked
at=/checked\s*(?:[^=]|=\s*.checked.)/i,st=/^true\/(.*)/,ut=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;me.extend({htmlPrefilter:function(e){return e.replace(it,"<$1></$2>")},clone:function(e,t,n){var o,i,r,a,s=e.cloneNode(!0),u=me.contains(e.ownerDocument,e);
// Fix IE cloning issues
if(!(pe.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||me.isXMLDoc(e)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
a=y(s),o=0,i=(r=y(e)).length;o<i;o++)N(r[o],a[o]);
// Copy the events from the original to the clone
if(t)if(n)for(r=r||y(e),a=a||y(s),o=0,i=r.length;o<i;o++)S(r[o],a[o]);else S(e,s);
// Preserve script evaluation history
// Return the cloned set
return 0<(a=y(s,"script")).length&&b(a,!u&&y(e,"script")),s},cleanData:function(e){for(var t,n,o,i=me.event.special,r=0;void 0!==(n=e[r]);r++)if(Oe(n)){if(t=n[Fe.expando]){if(t.events)for(o in t.events)i[o]?me.event.remove(n,o):me.removeEvent(n,o,t.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Fe.expando]=void 0}n[Pe.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Pe.expando]=void 0)}}}),me.fn.extend({detach:function(e){return A(this,e,!0)},remove:function(e){return A(this,e)},text:function(e){return He(this,function(e){return void 0===e?me.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return D(this,arguments,function(e){var t;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||k(this,e).appendChild(e)})},prepend:function(){return D(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=k(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return D(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return D(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(
// Prevent memory leaks
me.cleanData(y(e,!1)),
// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return me.clone(this,e,t)})},html:function(e){return He(this,function(e){var t=this[0]||{},n=0,o=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!rt.test(e)&&!Ge[(Qe.exec(e)||["",""])[1].toLowerCase()]){e=me.htmlPrefilter(e);try{for(;n<o;n++)
// Remove element nodes and prevent memory leaks
1===(t=this[n]||{}).nodeType&&(me.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];
// Make the changes, replacing each non-ignored context element with the new content
return D(this,arguments,function(e){var t=this.parentNode;me.inArray(this,n)<0&&(me.cleanData(y(this)),t&&t.replaceChild(e,this));
// Force callback invocation
},n)}}),me.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){me.fn[e]=function(e){for(var t,n=[],o=me(e),i=o.length-1,r=0;r<=i;r++)t=r===i?this:this.clone(!0),me(o[r])[a](t),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
ae.apply(n,t.get());return this.pushStack(n)}});var ct=/^margin/,lt=new RegExp("^("+We+")(?!px)[a-z%]+$","i"),ft=function(e){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var t=e.ownerDocument.defaultView;return t&&t.opener||(t=_),t.getComputedStyle(e)};!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){
// This is a singleton, we need to execute it only once
if(a){a.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",et.appendChild(r);var e=_.getComputedStyle(a);t="1%"!==e.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
i="2px"===e.marginLeft,n="4px"===e.width,
// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
a.style.marginRight="50%",o="4px"===e.marginRight,et.removeChild(r),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
a=null}}var t,n,o,i,r=ne.createElement("div"),a=ne.createElement("div");
// Finish early in limited (non-browser) environments
a.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",pe.clearCloneStyle="content-box"===a.style.backgroundClip,r.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",r.appendChild(a),me.extend(pe,{pixelPosition:function(){return e(),t},boxSizingReliable:function(){return e(),n},pixelMarginRight:function(){return e(),o},reliableMarginLeft:function(){return e(),i}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
dt=/^(none|table(?!-c[ea]).+)/,pt=/^--/,ht={position:"absolute",visibility:"hidden",display:"block"},mt={letterSpacing:"0",fontWeight:"400"},gt=["Webkit","Moz","ms"],vt=ne.createElement("div").style;me.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=q(e,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{float:"cssFloat"},
// Get and set the style property on a DOM Node
style:function(e,t,n,o){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
// Make sure that we're working with the right name
var i,r,a,s=me.camelCase(t),u=pt.test(t),c=e.style;
// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
// Check if we're setting a value
if(u||(t=O(s)),
// Gets hook for the prefixed version, then unprefixed version
a=me.cssHooks[t]||me.cssHooks[s],void 0===n)
// If a hook was provided get the non-computed value from there
return a&&"get"in a&&void 0!==(i=a.get(e,!1,o))?i:c[t];
// Otherwise just get the value from the style object
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===(r=typeof n)&&(i=Ie.exec(n))&&i[1]&&(n=h(e,t,i),
// Fixes bug #9237
r="number"),
// Make sure that null and NaN values aren't set (#7116)
null!=n&&n==n&&(
// If a number was passed in, add the unit (except for certain CSS properties)
"number"===r&&(n+=i&&i[3]||(me.cssNumber[s]?"":"px")),
// background-* props affect original clone's values
pe.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),
// If a hook was provided, use that value, otherwise just set the specified value
a&&"set"in a&&void 0===(n=a.set(e,n,o))||(u?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,o){var i,r,a,s=me.camelCase(t),u;
// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Make numeric if forced or a qualifier was provided and val looks numeric
return pt.test(t)||(t=O(s)),
// If a hook was provided get the computed value from there
(
// Try prefixed name followed by the unprefixed name
a=me.cssHooks[t]||me.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),
// Otherwise, if a way to get the computed value exists, use that
void 0===i&&(i=q(e,t,o)),
// Convert "normal" to computed value
"normal"===i&&t in mt&&(i=mt[t]),""===n||n?(r=parseFloat(i),!0===n||isFinite(r)?r||0:i):i}}),me.each(["height","width"],function(e,a){me.cssHooks[a]={get:function(e,t,n){if(t)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!dt.test(me.css(e,"display"))||
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?M(e,a,n):ze(e,ht,function(){return M(e,a,n)})},set:function(e,t,n){var o,i=n&&ft(e),r=n&&P(e,a,n,"border-box"===me.css(e,"boxSizing",!1,i),i);
// Convert to pixels if value adjustment is needed
return r&&(o=Ie.exec(t))&&"px"!==(o[3]||"px")&&(e.style[a]=t,t=me.css(e,a)),F(e,t,r)}}}),me.cssHooks.marginLeft=L(pe.reliableMarginLeft,function(e,t){if(t)return(parseFloat(q(e,"marginLeft"))||e.getBoundingClientRect().left-ze(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
me.each({margin:"",padding:"",border:"Width"},function(i,r){me.cssHooks[i+r]={expand:function(e){for(var t=0,n={},
// Assumes a single number if not a string
o="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+$e[t]+r]=o[t]||o[t-2]||o[0];return n}},ct.test(i)||(me.cssHooks[i+r].set=F)}),me.fn.extend({css:function(e,t){return He(this,function(e,t,n){var o,i,r={},a=0;if(Array.isArray(t)){for(o=ft(e),i=t.length;a<i;a++)r[t[a]]=me.css(e,t[a],!1,o);return r}return void 0!==n?me.style(e,t,n):me.css(e,t)},e,t,1<arguments.length)}}),(me.Tween=R).prototype={constructor:R,init:function(e,t,n,o,i,r){this.elem=e,this.prop=n,this.easing=i||me.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=o,this.unit=r||(me.cssNumber[n]?"":"px")},cur:function(){var e=R.propHooks[this.prop];return e&&e.get?e.get(this):R.propHooks._default.get(this)},run:function(e){var t,n=R.propHooks[this.prop];return this.options.duration?this.pos=t=me.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):R.propHooks._default.set(this),this}},R.prototype.init.prototype=R.prototype,R.propHooks={_default:{get:function(e){var t;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
t=me.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
me.fx.step[e.prop]?me.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[me.cssProps[e.prop]]&&!me.cssHooks[e.prop]?e.elem[e.prop]=e.now:me.style(e.elem,e.prop,e.now+e.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
R.propHooks.scrollTop=R.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},me.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},me.fx=R.prototype.init,
// Back compat <1.8 extension point
me.fx.step={};var yt,bt,wt=/^(?:toggle|show|hide)$/,xt=/queueHooks$/,Tt,_t,Ct;me.Animation=me.extend(U,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return h(n.elem,e,Ie.exec(t),n),n}]},tweener:function(e,t){for(var n,o=0,i=(e=me.isFunction(e)?(t=e,["*"]):e.match(Ae)).length;o<i;o++)n=e[o],U.tweeners[n]=U.tweeners[n]||[],U.tweeners[n].unshift(t)},prefilters:[z],prefilter:function(e,t){t?U.prefilters.unshift(e):U.prefilters.push(e)}}),me.speed=function(e,t,n){var o=e&&"object"==typeof e?me.extend({},e):{complete:n||!n&&t||me.isFunction(e)&&e,duration:e,easing:n&&t||t&&!me.isFunction(t)&&t};
// Go to the end state if fx are off
return me.fx.off?o.duration=0:"number"!=typeof o.duration&&(o.duration in me.fx.speeds?o.duration=me.fx.speeds[o.duration]:o.duration=me.fx.speeds._default),
// Normalize opt.queue - true/undefined/null -> "fx"
null!=o.queue&&!0!==o.queue||(o.queue="fx"),
// Queueing
o.old=o.complete,o.complete=function(){me.isFunction(o.old)&&o.old.call(this),o.queue&&me.dequeue(this,o.queue)},o},me.fn.extend({fadeTo:function(e,t,n,o){
// Show any hidden elements after setting opacity to 0
return this.filter(Be).css("opacity",0).show().end().animate({opacity:t},e,n,o)},animate:function(t,e,n,o){var i=me.isEmptyObject(t),r=me.speed(e,n,o),a=function(){
// Operate on a copy of prop so per-property easing won't be lost
var e=U(this,me.extend({},t),r);
// Empty animations, or finishing resolves immediately
(i||Fe.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===r.queue?this.each(a):this.queue(r.queue,a)},stop:function(i,e,r){var a=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof i&&(r=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=me.timers,o=Fe.get(this);if(t)o[t]&&o[t].stop&&a(o[t]);else for(t in o)o[t]&&o[t].stop&&xt.test(t)&&a(o[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(r),e=!1,n.splice(t,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!e&&r||me.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Fe.get(this),n=t[a+"queue"],o=t[a+"queueHooks"],i=me.timers,r=n?n.length:0;
// Enable finishing flag on private data
// Look for any active animations, and finish them
for(t.finish=!0,
// Empty the queue first
me.queue(this,a,[]),o&&o.stop&&o.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));
// Look for any animations in the old queue and finish them
for(e=0;e<r;e++)n[e]&&n[e].finish&&n[e].finish.call(this);
// Turn off finishing flag
delete t.finish})}}),me.each(["toggle","show","hide"],function(e,o){var i=me.fn[o];me.fn[o]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate($(o,!0),e,t,n)}}),
// Generate shortcuts for custom animations
me.each({slideDown:$("show"),slideUp:$("hide"),slideToggle:$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,o){me.fn[e]=function(e,t,n){return this.animate(o,e,t,n)}}),me.timers=[],me.fx.tick=function(){var e,t=0,n=me.timers;for(yt=me.now();t<n.length;t++)
// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||me.fx.stop(),yt=void 0},me.fx.timer=function(e){me.timers.push(e),me.fx.start()},me.fx.interval=13,me.fx.start=function(){bt||(bt=!0,W())},me.fx.stop=function(){bt=null},me.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
me.fn.delay=function(o,e){return o=me.fx&&me.fx.speeds[o]||o,e=e||"fx",this.queue(e,function(e,t){var n=_.setTimeout(e,o);t.stop=function(){_.clearTimeout(n)}})},Tt=ne.createElement("input"),Ct=ne.createElement("select").appendChild(ne.createElement("option")),Tt.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
pe.checkOn=""!==Tt.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
pe.optSelected=Ct.selected,(
// Support: IE <=11 only
// An input loses its value after becoming a radio
Tt=ne.createElement("input")).value="t",Tt.type="radio",pe.radioValue="t"===Tt.value;var kt,jt=me.expr.attrHandle;me.fn.extend({attr:function(e,t){return He(this,me.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){me.removeAttr(this,e)})}}),me.extend({attr:function(e,t,n){var o,i,r=e.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==r&&8!==r&&2!==r)
// Fallback to prop when attributes are not supported
return void 0===e.getAttribute?me.prop(e,t,n):(
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
1===r&&me.isXMLDoc(e)||(i=me.attrHooks[t.toLowerCase()]||(me.expr.match.bool.test(t)?kt:void 0)),void 0!==n?null===n?void me.removeAttr(e,t):i&&"set"in i&&void 0!==(o=i.set(e,n,t))?o:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(o=i.get(e,t))?o:null==(o=me.find.attr(e,t))?void 0:o)},attrHooks:{type:{set:function(e,t){if(!pe.radioValue&&"radio"===t&&c(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,o=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
i=t&&t.match(Ae);if(i&&1===e.nodeType)for(;n=i[o++];)e.removeAttribute(n)}}),
// Hooks for boolean attributes
kt={set:function(e,t,n){return!1===t?
// Remove boolean attributes when set to false
me.removeAttr(e,n):e.setAttribute(n,n),n}},me.each(me.expr.match.bool.source.match(/\w+/g),function(e,t){var a=jt[t]||me.find.attr;jt[t]=function(e,t,n){var o,i,r=t.toLowerCase();return n||(
// Avoid an infinite loop by temporarily removing this function from the getter
i=jt[r],jt[r]=o,o=null!=a(e,t,n)?r:null,jt[r]=i),o}});var Et=/^(?:input|select|textarea|button)$/i,St=/^(?:a|area)$/i;me.fn.extend({prop:function(e,t){return He(this,me.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[me.propFix[e]||e]})}}),me.extend({prop:function(e,t,n){var o,i,r=e.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==r&&8!==r&&2!==r)return 1===r&&me.isXMLDoc(e)||(
// Fix name and attach hooks
t=me.propFix[t]||t,i=me.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(o=i.set(e,n,t))?o:e[t]=n:i&&"get"in i&&null!==(o=i.get(e,t))?o:e[t]},propHooks:{tabIndex:{get:function(e){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=me.find.attr(e,"tabindex");return t?parseInt(t,10):Et.test(e.nodeName)||St.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
pe.optSelected||(me.propHooks.selected={get:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){
/* eslint no-unused-expressions: "off" */
var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),me.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){me.propFix[this.toLowerCase()]=this}),me.fn.extend({addClass:function(t){var e,n,o,i,r,a,s,u=0;if(me.isFunction(t))return this.each(function(e){me(this).addClass(t.call(this,e,V(this)))});if("string"==typeof t&&t)for(e=t.match(Ae)||[];n=this[u++];)if(i=V(n),o=1===n.nodeType&&" "+Q(i)+" "){for(a=0;r=e[a++];)o.indexOf(" "+r+" ")<0&&(o+=r+" ");
// Only assign if different to avoid unneeded rendering.
i!==(s=Q(o))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,o,i,r,a,s,u=0;if(me.isFunction(t))return this.each(function(e){me(this).removeClass(t.call(this,e,V(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof t&&t)for(e=t.match(Ae)||[];n=this[u++];)if(i=V(n),
// This expression is here for better compressibility (see addClass)
o=1===n.nodeType&&" "+Q(i)+" "){for(a=0;r=e[a++];)
// Remove *all* instances
for(;-1<o.indexOf(" "+r+" ");)o=o.replace(" "+r+" "," ");
// Only assign if different to avoid unneeded rendering.
i!==(s=Q(o))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var r=typeof i;return"boolean"==typeof t&&"string"===r?t?this.addClass(i):this.removeClass(i):me.isFunction(i)?this.each(function(e){me(this).toggleClass(i.call(this,e,V(this),t),t)}):this.each(function(){var e,t,n,o;if("string"===r)for(
// Toggle individual class names
t=0,n=me(this),o=i.match(Ae)||[];e=o[t++];)
// Check each className given, space separated list
n.hasClass(e)?n.removeClass(e):n.addClass(e);
// Toggle whole class name
else void 0!==i&&"boolean"!==r||((e=V(this))&&
// Store className if set
Fe.set(this,"__className__",e),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",e||!1===i?"":Fe.get(this,"__className__")||""))})},hasClass:function(e){var t,n,o=0;for(t=" "+e+" ";n=this[o++];)if(1===n.nodeType&&-1<(" "+Q(V(n))+" ").indexOf(t))return!0;return!1}});var Nt=/\r/g;me.fn.extend({val:function(n){var o,e,i,t=this[0];return arguments.length?(i=me.isFunction(n),this.each(function(e){var t;1===this.nodeType&&(
// Treat null/undefined as ""; convert numbers to string
null==(t=i?n.call(this,e,me(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=me.map(t,function(e){return null==e?"":e+""})),
// If set returns undefined, fall back to normal setting
(o=me.valHooks[this.type]||me.valHooks[this.nodeName.toLowerCase()])&&"set"in o&&void 0!==o.set(this,t,"value")||(this.value=t))})):t?(o=me.valHooks[t.type]||me.valHooks[t.nodeName.toLowerCase()])&&"get"in o&&void 0!==(e=o.get(t,"value"))?e:
// Handle most common string cases
"string"==typeof(e=t.value)?e.replace(Nt,""):null==e?"":e:void 0}}),me.extend({valHooks:{option:{get:function(e){var t=me.find.attr(e,"value");return null!=t?t:
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
Q(me.text(e))}},select:{get:function(e){var t,n,o,i=e.options,r=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?r+1:i.length;
// Loop through all the selected options
for(o=r<0?u:a?r:0;o<u;o++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(((n=i[o]).selected||o===r)&&
// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!c(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
t=me(n).val(),a)return t;
// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,o,i=e.options,r=me.makeArray(t),a=i.length;a--;)
/* eslint-disable no-cond-assign */
((o=i[a]).selected=-1<me.inArray(me.valHooks.option.get(o),r))&&(n=!0)
/* eslint-enable no-cond-assign */;
// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),r}}}}),
// Radios and checkboxes getter/setter
me.each(["radio","checkbox"],function(){me.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<me.inArray(me(e).val(),t)}},pe.checkOn||(me.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});
// Return jQuery for attributes-only inclusion
var Dt=/^(?:focusinfocus|focusoutblur)$/;me.extend(me.event,{trigger:function(e,t,n,o){var i,r,a,s,u,c,l,f=[n||ne],d=le.call(e,"type")?e.type:e,p=le.call(e,"namespace")?e.namespace.split("."):[];
// Don't do events on text and comment nodes
if(r=a=n=n||ne,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+me.event.triggered)&&(-1<d.indexOf(".")&&(
// Namespaced trigger; create a regexp to match event type in handle()
d=(p=d.split(".")).shift(),p.sort()),u=d.indexOf(":")<0&&"on"+d,
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
(
// Caller can pass in a jQuery.Event object, Object, or just an event type string
e=e[me.expando]?e:new me.Event(d,"object"==typeof e&&e)).isTrigger=o?2:3,e.namespace=p.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=n),
// Clone any incoming data and prepend the event, creating the handler arg list
t=null==t?[e]:me.makeArray(t,[e]),
// Allow special events to draw outside the lines
l=me.event.special[d]||{},o||!l.trigger||!1!==l.trigger.apply(n,t))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!o&&!l.noBubble&&!me.isWindow(n)){for(s=l.delegateType||d,Dt.test(s+d)||(r=r.parentNode);r;r=r.parentNode)f.push(r),a=r;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
a===(n.ownerDocument||ne)&&f.push(a.defaultView||a.parentWindow||_)}
// Fire handlers on the event path
for(i=0;(r=f[i++])&&!e.isPropagationStopped();)e.type=1<i?s:l.bindType||d,(
// jQuery handler
c=(Fe.get(r,"events")||{})[e.type]&&Fe.get(r,"handle"))&&c.apply(r,t),(
// Native handler
c=u&&r[u])&&c.apply&&Oe(r)&&(e.result=c.apply(r,t),!1===e.result&&e.preventDefault());return e.type=d,
// If nobody prevented the default action, do it now
o||e.isDefaultPrevented()||l._default&&!1!==l._default.apply(f.pop(),t)||!Oe(n)||
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
u&&me.isFunction(n[d])&&!me.isWindow(n)&&(
// Don't re-trigger an onFOO event when we call its FOO() method
(a=n[u])&&(n[u]=null),n[
// Prevent re-triggering of the same event, since we already bubbled it above
me.event.triggered=d](),me.event.triggered=void 0,a&&(n[u]=a)),e.result}
// focus/blur morphs to focusin/out; ensure we're not firing them right now
},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var o=me.extend(new me.Event,n,{type:e,isSimulated:!0});me.event.trigger(o,null,t)}}),me.fn.extend({trigger:function(e,t){return this.each(function(){me.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return me.event.trigger(e,t,n,!0)}}),me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){
// Handle event binding
me.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),me.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),pe.focusin="onfocusin"in _,
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
pe.focusin||me.each({focus:"focusin",blur:"focusout"},function(n,o){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var i=function(e){me.event.simulate(o,e.target,me.event.fix(e))};me.event.special[o]={setup:function(){var e=this.ownerDocument||this,t=Fe.access(e,o);t||e.addEventListener(n,i,!0),Fe.access(e,o,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Fe.access(e,o)-1;t?Fe.access(e,o,t):(e.removeEventListener(n,i,!0),Fe.remove(e,o))}}});var At=_.location,qt=me.now(),Lt=/\?/;
// Cross-browser xml parsing
me.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{t=(new _.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||me.error("Invalid XML: "+e),t};var Ht=/\[\]$/,Ot=/\r?\n/g,Ft=/^(?:submit|button|image|reset|file)$/i,Pt=/^(?:input|select|textarea|keygen)/i;me.param=function(e,t){var n,o=[],i=function(e,t){
// If value is a function, invoke it and use its return value
var n=me.isFunction(t)?t():t;o[o.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};
// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!me.isPlainObject(e))
// Serialize the form elements
me.each(e,function(){i(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)G(n,e[n],t,i);
// Return the resulting serialization
return o.join("&")},me.fn.extend({serialize:function(){return me.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=me.prop(this,"elements");return e?me.makeArray(e):this}).filter(function(){var e=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!me(this).is(":disabled")&&Pt.test(this.nodeName)&&!Ft.test(e)&&(this.checked||!Ue.test(e))}).map(function(e,t){var n=me(this).val();return null==n?null:Array.isArray(n)?me.map(n,function(e){return{name:t.name,value:e.replace(Ot,"\r\n")}}):{name:t.name,value:n.replace(Ot,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,Wt=/([?&])_=[^&]*/,It=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
$t=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Bt=/^(?:GET|HEAD)$/,zt=/^\/\//,
/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Xt={},
/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Ut={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Qt="*/".concat("*"),
// Anchor tag for parsing the document origin
Vt=ne.createElement("a");Vt.href=At.href,me.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:At.href,type:"GET",isLocal:$t.test(At.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",
/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":Qt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":me.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?
// Building a settings object
K(K(e,me.ajaxSettings),t):
// Extending ajaxSettings
K(me.ajaxSettings,e)},ajaxPrefilter:Y(Xt),ajaxTransport:Y(Ut),
// Main method
ajax:function(e,t){
// Callback for when everything is done
function n(e,t,n,o){var i,r,a,s,u,c=t;
// Ignore repeat invocations
h||(h=!0,
// Clear timeout if it exists
p&&_.clearTimeout(p),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
l=void 0,
// Cache response headers
d=o||"",
// Set readyState
T.readyState=0<e?4:0,
// Determine if successful
i=200<=e&&e<300||304===e,
// Get response data
n&&(s=Z(g,T,n)),
// Convert no matter what (that way responseXXX fields are always set)
s=ee(g,s,T,i),
// If successful, handle type chaining
i?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(me.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(me.etag[f]=u)),
// if no content
204===e||"HEAD"===g.type?c="nocontent":304===e?c="notmodified":(c=s.state,r=s.data,i=!(a=s.error))):(
// Extract error from statusText and normalize for non-aborts
a=c,!e&&c||(c="error",e<0&&(e=0))),
// Set data for the fake xhr object
T.status=e,T.statusText=(t||c)+"",
// Success/Error
i?b.resolveWith(v,[r,c,T]):b.rejectWith(v,[T,c,a]),
// Status-dependent callbacks
T.statusCode(x),x=void 0,m&&y.trigger(i?"ajaxSuccess":"ajaxError",[T,g,i?r:a]),
// Complete
w.fireWith(v,[T,c]),m&&(y.trigger("ajaxComplete",[T,g]),
// Handle the global AJAX counter
--me.active||me.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof e&&(t=e,e=void 0),
// Force options to be an object
t=t||{};var l,
// URL without anti-cache param
f,
// Response headers
d,o,
// timeout handle
p,
// Url cleanup var
i,
// Request state (becomes false upon send and true upon completion)
h,
// To know if global events are to be dispatched
m,
// Loop variable
r,
// uncached part of the url
a,
// Create the final options object
g=me.ajaxSetup({},t),
// Callbacks context
v=g.context||g,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
y=g.context&&(v.nodeType||v.jquery)?me(v):me.event,
// Deferreds
b=me.Deferred(),w=me.Callbacks("once memory"),
// Status-dependent callbacks
x=g.statusCode||{},
// Headers (they are sent all at once)
s={},u={},
// Default abort message
c="canceled",
// Fake xhr
T={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(h){if(!o)for(o={};t=It.exec(d);)o[t[1].toLowerCase()]=t[2];t=o[e.toLowerCase()]}return null==t?null:t},
// Raw string
getAllResponseHeaders:function(){return h?d:null},
// Caches the header
setRequestHeader:function(e,t){return null==h&&(e=u[e.toLowerCase()]=u[e.toLowerCase()]||e,s[e]=t),this},
// Overrides response content-type header
overrideMimeType:function(e){return null==h&&(g.mimeType=e),this},
// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(h)
// Execute the appropriate callbacks
T.always(e[T.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(t in e)x[t]=[x[t],e[t]];return this},
// Cancel the request
abort:function(e){var t=e||c;return l&&l.abort(t),n(0,t),this}};
// Attach deferreds
// A cross-domain request is in order when the origin doesn't match the current origin.
if(b.promise(T),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
g.url=((e||g.url||At.href)+"").replace(zt,At.protocol+"//"),
// Alias method option to type as per ticket #12004
g.type=t.method||t.type||g.method||g.type,
// Extract dataTypes list
g.dataTypes=(g.dataType||"*").toLowerCase().match(Ae)||[""],null==g.crossDomain){i=ne.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 13
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{i.href=g.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
i.href=i.href,g.crossDomain=Vt.protocol+"//"+Vt.host!=i.protocol+"//"+i.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
g.crossDomain=!0}}
// Convert data if not already a string
// If request was aborted inside a prefilter, stop there
if(g.data&&g.processData&&"string"!=typeof g.data&&(g.data=me.param(g.data,g.traditional)),
// Apply prefilters
J(Xt,g,t,T),h)return T;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
// Check for headers option
for(r in
// Watch for a new set of requests
(m=me.event&&g.global)&&0==me.active++&&me.event.trigger("ajaxStart"),
// Uppercase the type
g.type=g.type.toUpperCase(),
// Determine if request has content
g.hasContent=!Bt.test(g.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
f=g.url.replace(Rt,""),
// More options handling for requests with no content
g.hasContent?g.data&&g.processData&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&(g.data=g.data.replace(Mt,"+")):(
// Remember the hash so we can put it back
a=g.url.slice(f.length),
// If data is available, append data to url
g.data&&(f+=(Lt.test(f)?"&":"?")+g.data,
// #9682: remove data so that it's not used in an eventual retry
delete g.data),
// Add or update anti-cache param if needed
!1===g.cache&&(f=f.replace(Wt,"$1"),a=(Lt.test(f)?"&":"?")+"_="+qt+++a),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
g.url=f+a),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&(me.lastModified[f]&&T.setRequestHeader("If-Modified-Since",me.lastModified[f]),me.etag[f]&&T.setRequestHeader("If-None-Match",me.etag[f])),
// Set the correct header, if data is being sent
(g.data&&g.hasContent&&!1!==g.contentType||t.contentType)&&T.setRequestHeader("Content-Type",g.contentType),
// Set the Accepts header for the server, depending on the dataType
T.setRequestHeader("Accept",g.dataTypes[0]&&g.accepts[g.dataTypes[0]]?g.accepts[g.dataTypes[0]]+("*"!==g.dataTypes[0]?", "+Qt+"; q=0.01":""):g.accepts["*"]),g.headers)T.setRequestHeader(r,g.headers[r]);
// Allow custom headers/mimetypes and early abort
if(g.beforeSend&&(!1===g.beforeSend.call(v,T,g)||h))
// Abort if not done already and return
return T.abort();
// Aborting is no longer a cancellation
// If no transport, we auto-abort
if(c="abort",
// Install callbacks on deferreds
w.add(g.complete),T.done(g.success),T.fail(g.error),
// Get transport
l=J(Ut,g,t,T)){
// If request was aborted inside ajaxSend, stop there
if(T.readyState=1,
// Send global event
m&&y.trigger("ajaxSend",[T,g]),h)return T;
// Timeout
g.async&&0<g.timeout&&(p=_.setTimeout(function(){T.abort("timeout")},g.timeout));try{h=!1,l.send(s,n)}catch(e){
// Rethrow post-completion exceptions
if(h)throw e;
// Propagate others as results
n(-1,e)}}else n(-1,"No Transport");return T},getJSON:function(e,t,n){return me.get(e,t,n,"json")},getScript:function(e,t){return me.get(e,void 0,t,"script")}}),me.each(["get","post"],function(e,i){me[i]=function(e,t,n,o){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return me.isFunction(t)&&(o=o||n,n=t,t=void 0),me.ajax(me.extend({url:e,type:i,dataType:o,data:t,success:n},me.isPlainObject(e)&&e))}}),me._evalUrl=function(e){return me.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},me.fn.extend({wrapAll:function(e){var t;return this[0]&&(me.isFunction(e)&&(e=e.call(this[0])),
// The elements to wrap the target around
t=me(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return me.isFunction(n)?this.each(function(e){me(this).wrapInner(n.call(this,e))}):this.each(function(){var e=me(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=me.isFunction(t);return this.each(function(e){me(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){me(this).replaceWith(this.childNodes)}),this}}),me.expr.pseudos.hidden=function(e){return!me.expr.pseudos.visible(e)},me.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},me.ajaxSettings.xhr=function(){try{return new _.XMLHttpRequest}catch(e){}};var Gt={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Yt=me.ajaxSettings.xhr();pe.cors=!!Yt&&"withCredentials"in Yt,pe.ajax=Yt=!!Yt,me.ajaxTransport(function(i){var r,a;
// Cross domain only allowed if supported through XMLHttpRequest
if(pe.cors||Yt&&!i.crossDomain)return{send:function(e,t){var n,o=i.xhr();
// Apply custom fields if provided
if(o.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)o[n]=i.xhrFields[n];
// Override mime type if needed
// Set headers
for(n in i.mimeType&&o.overrideMimeType&&o.overrideMimeType(i.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)o.setRequestHeader(n,e[n]);
// Callback
r=function(e){return function(){r&&(r=a=o.onload=o.onerror=o.onabort=o.onreadystatechange=null,"abort"===e?o.abort():"error"===e?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof o.status?t(0,"error"):t(
// File: protocol always yields status 0; see #8605, #14207
o.status,o.statusText):t(Gt[o.status]||o.status,o.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(o.responseType||"text")||"string"!=typeof o.responseText?{binary:o.response}:{text:o.responseText},o.getAllResponseHeaders()))}},
// Listen to events
o.onload=r(),a=o.onerror=r("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==o.onabort?o.onabort=a:o.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===o.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
_.setTimeout(function(){r&&a()})},
// Create the abort callback
r=r("abort");try{
// Do send the request (this may raise an exception)
o.send(i.hasContent&&i.data||null)}catch(e){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(r)throw e}},abort:function(){r&&r()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
me.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),
// Install script dataType
me.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return me.globalEval(e),e}}}),
// Handle cache's special case and crossDomain
me.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),
// Bind script tag hack transport
me.ajaxTransport("script",function(n){var o,i;
// This transport only deals with cross domain requests
if(n.crossDomain)return{send:function(e,t){o=me("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){o.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
ne.head.appendChild(o[0])},abort:function(){i&&i()}}});var Jt=[],Kt=/(=)\?(?=&|$)|\?\?/,Zt;
// Default jsonp settings
me.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Jt.pop()||me.expando+"_"+qt++;return this[e]=!0,e}}),
// Detect, normalize options and install callbacks for jsonp requests
me.ajaxPrefilter("json jsonp",function(e,t,n){var o,i,r,a=!1!==e.jsonp&&(Kt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kt.test(e.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(a||"jsonp"===e.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
return o=e.jsonpCallback=me.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,
// Insert callback into url or form data
a?e[a]=e[a].replace(Kt,"$1"+o):!1!==e.jsonp&&(e.url+=(Lt.test(e.url)?"&":"?")+e.jsonp+"="+o),
// Use data converter to retrieve json after script execution
e.converters["script json"]=function(){return r||me.error(o+" was not called"),r[0]},
// Force json dataType
e.dataTypes[0]="json",
// Install callback
i=_[o],_[o]=function(){r=arguments},
// Clean-up function (fires after converters)
n.always(function(){
// If previous value didn't exist - remove it
void 0===i?me(_).removeProp(o):_[o]=i,
// Save back as free
e[o]&&(
// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=t.jsonpCallback,
// Save the callback name for future use
Jt.push(o)),
// Call if it was a function and we have a response
r&&me.isFunction(i)&&i(r[0]),r=i=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
pe.createHTMLDocument=((Zt=ne.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Zt.childNodes.length),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
me.parseHTML=function(e,t,n){return"string"!=typeof e?[]:(
// Single tag
"boolean"==typeof t&&(n=t,t=!1),t||(
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
pe.createHTMLDocument?((
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
o=(t=ne.implementation.createHTMLDocument("")).createElement("base")).href=ne.location.href,t.head.appendChild(o)):t=ne),r=!n&&[],(i=Ce.exec(e))?[t.createElement(i[1])]:(i=w([e],t,r),r&&r.length&&me(r).remove(),me.merge([],i.childNodes)));var o,i,r},
/**
 * Load a url into a page
 */
me.fn.load=function(e,t,n){var o,i,r,a=this,s=e.indexOf(" ");return-1<s&&(o=Q(e.slice(s)),e=e.slice(0,s)),
// If it's a function
me.isFunction(t)?(
// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),
// If we have elements to modify, make the request
0<a.length&&me.ajax({url:e,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:i||"GET",dataType:"html",data:t}).done(function(e){
// Save response for use in complete callback
r=arguments,a.html(o?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
me("<div>").append(me.parseHTML(e)).find(o):
// Otherwise use the full result
e)}).always(n&&function(e,t){a.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},
// Attach a bunch of functions for handling common AJAX events
me.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){me.fn[t]=function(e){return this.on(t,e)}}),me.expr.pseudos.animated=function(t){return me.grep(me.timers,function(e){return t===e.elem}).length},me.offset={setOffset:function(e,t,n){var o,i,r,a,s,u,c,l=me.css(e,"position"),f=me(e),d={};
// Set position first, in-case top/left are set even on static elem
"static"===l&&(e.style.position="relative"),s=f.offset(),r=me.css(e,"top"),u=me.css(e,"left"),
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
i=(c=("absolute"===l||"fixed"===l)&&-1<(r+u).indexOf("auto"))?(a=(o=f.position()).top,o.left):(a=parseFloat(r)||0,parseFloat(u)||0),me.isFunction(t)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
t=t.call(e,n,me.extend({},s))),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+i),"using"in t?t.using.call(e,d):f.css(d)}},me.fn.extend({offset:function(t){
// Preserve chaining for setter
if(arguments.length)return void 0===t?this:this.each(function(e){me.offset.setOffset(this,t,e)});var e,n,o,i,r=this[0];return r?
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
r.getClientRects().length?(o=r.getBoundingClientRect(),n=(e=r.ownerDocument).documentElement,i=e.defaultView,{top:o.top+i.pageYOffset-n.clientTop,left:o.left+i.pageXOffset-n.clientLeft}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n=this[0],o={top:0,left:0};
// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
// Subtract parent offsets and element margins
return"fixed"===me.css(n,"position")?
// Assume getBoundingClientRect is there when computed position is fixed
t=n.getBoundingClientRect():(
// Get *real* offsetParent
e=this.offsetParent(),
// Get correct offsets
t=this.offset(),c(e[0],"html")||(o=e.offset()),
// Add offsetParent borders
o={top:o.top+me.css(e[0],"borderTopWidth",!0),left:o.left+me.css(e[0],"borderLeftWidth",!0)}),{top:t.top-o.top-me.css(n,"marginTop",!0),left:t.left-o.left-me.css(n,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===me.css(e,"position");)e=e.offsetParent;return e||et})}}),
// Create scrollLeft and scrollTop methods
me.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var r="pageYOffset"===i;me.fn[t]=function(e){return He(this,function(e,t,n){
// Coalesce documents and windows
var o;if(me.isWindow(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===n)return o?o[i]:e[t];o?o.scrollTo(r?o.pageXOffset:n,r?n:o.pageYOffset):e[t]=n},t,e,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
me.each(["top","left"],function(e,n){me.cssHooks[n]=L(pe.pixelPosition,function(e,t){if(t)
// If curCSS returns percentage, fallback to offset
return t=q(e,n),lt.test(t)?me(e).position()[n]+"px":t})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
me.each({Height:"height",Width:"width"},function(a,s){me.each({padding:"inner"+a,content:s,"":"outer"+a},function(o,r){
// Margin is only for outerHeight, outerWidth
me.fn[r]=function(e,t){var n=arguments.length&&(o||"boolean"!=typeof e),i=o||(!0===e||!0===t?"margin":"border");return He(this,function(e,t,n){var o;return me.isWindow(e)?0===r.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:
// Get document width or height
9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+a],o["scroll"+a],e.body["offset"+a],o["offset"+a],o["client"+a])):void 0===n?
// Get width or height on the element, requesting but not forcing parseFloat
me.css(e,t,i):
// Set width or height on the element
me.style(e,t,n,i)},s,n?e:void 0,n)}})}),me.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,o){return this.on(t,e,n,o)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),me.holdReady=function(e){e?me.readyWait++:me.ready(!0)},me.isArray=Array.isArray,me.parseJSON=JSON.parse,me.nodeName=c,
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return me});var
// Map over jQuery in case of overwrite
en=_.jQuery,
// Map over the $ in case of overwrite
tn=_.$;return me.noConflict=function(e){return _.$===me&&(_.$=tn),e&&_.jQuery===me&&(_.jQuery=en),me},
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
e||(_.jQuery=_.$=me),me}),function(a){var e=a(window);
// ADD ELEMENTS
e.on(window.object_name+"._cache_elements",function(e,t){t.methods._add("elements",{
// GENERAL
window:window,document:document,html:"html",body:"body",header:"header",footer:"footer",
// BACK TO TOP
back_to_top:".back-to-top",stop_propagation:".stop-propagation",smooth_scroll:'[href^="#"]'})}),
// ADD METHODS
e.on(window.object_name+"._add_methods",function(e,r){r.methods._add("methods",{_scroll_to:function(e,t){r.elements.body.add(r.elements.html).animate({scrollTop:e},{duration:t,easing:"easeOutQuint"})},_smooth_scroll:function(e){e.preventDefault();var t=a(this),n=t.attr("href"),o=a(n),i=t.data("offset");i=i?parseInt(i,10):0,o.length&&r.methods._scroll_to(o.offset().top-i,550)},_back_to_top:function(e){e.preventDefault(),r.methods._scroll_to(0,550)},_keydown_events:function(e){var t;switch(e.keyCode){
// ESC
case 27:r.elements.body.trigger(window.object_name+".html_esc");break}},_html_click_events:function(){r.elements.window.trigger(window.object_name+".html_click",r)},_stop_propagation:function(e){e.stopPropagation()}})}),
// ADD EVENTS
e.on(window.object_name+"._setup_events",function(e,t){t.methods._add("events",{
// BACK TO TOP
"click._back_to_top":{element:t.elements.back_to_top,action:t.methods._back_to_top},"keydown._keydown_events":{element:t.elements.html,action:t.methods._keydown_events},"click._html_click_events":{element:t.elements.html,action:t.methods._html_click_events},"click._smooth_scroll":{element:t.elements.smooth_scroll,action:t.methods._smooth_scroll},"click._stop_propagation":{element:t.elements.stop_propagation,action:t.methods._stop_propagation}})}),
// RUN ON DOCUMENT READY
e.on(window.object_name+"._document_ready",function(e,t){t.elements.body.delegate(".stop-propagation","click._stop_propagation",t.methods._stop_propagation)})}(jQuery),function(o){var e=o(window);
// ADD ELEMENTS
e.on(window.object_name+"._cache_elements",function(e,t){t.methods._add("elements",{foo:"body"})}),
// ADD METHODS
e.on(window.object_name+"._add_methods",function(e,n){n.methods._add("methods",{mobile:{_is_browser_mobile:function(){var e=!1,t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e},_set_mobile:function(){var e;n.methods.mobile._is_browser_mobile()?o("body").addClass("mobile"):o("body").removeClass("mobile")},_is_mobile:function(e){var t;if(!e&&("object"!=typeof n.elements.body?o("body"):n.elements.body).hasClass("mobile"))return!0;return e=e||320,window.innerWidth<=e},_is_width:function(e,t){switch(t=t||"smaller",e=e||991){case"screen-lg":e=1200;break;case"screen-md":e=992;break;case"screen-sm":e=768;break;case"screen-xs":e=480;break;default:e=480;break}switch(t){case"larger":if(window.innerWidth>e)return!0;break;case"smaller":if(window.innerWidth<e)return!0;break;default:if(window.innerWidth<e)return!0;break}return!1}}})}),
// RUN ON DOCUMENT READY
e.on(window.object_name+"._document_ready",function(e,t){
// Determine if this is a mobile browser
t.methods.mobile._set_mobile()})}(jQuery),function(r){var e=r(window);
// ADD ELEMENTS
e.on(window.object_name+"._cache_elements",function(e,t){t.methods._add("elements",{triggers:"[data-trigger]"})}),
// ADD METHODS
e.on(window.object_name+"._add_methods",function(e,i){i.methods._add("methods",{_trigger:function(e){var t=r(e.target),n=t.data("trigger");if(n){i.elements.body.trigger(window.object_name+"._"+n);var o=window.object_name+".methods."+n.replace(/-/g,".");try{o=o.split(".").reduce(function(e,t){return e[t]},window)}catch(e){console.log("Method Not Found: "+o)}"function"==typeof o&&o(e,t)}}})}),
// ADD EVENTS
e.on(window.object_name+"._setup_events",function(e,t){t.methods._add("events",{_trigger:{delegate:t.elements.body,element:t.elements.triggers,event:"click._trigger",action:t.methods._trigger}})})}(jQuery),function(u){var e=u(window);window.titleCase=function(e){e=e.toLowerCase().split(" ");for(var t=0;t<e.length;t++)e[t]=e[t].split(""),e[t][0]=e[t][0].toUpperCase(),e[t]=e[t].join("");return e.join(" ")},
// ADD ELEMENTS
e.on(window.object_name+"._cache_elements",function(e,t){t.methods._add("elements",{notifications:".notifications",notification:".notification"})}),
// ADD METHODS
//e.setRequestHeader("secret-key", "$2b$10$ia1/CYtLrx6ez/sEf6hFj./ojDxh9n/ENE64voC37HRsJQkiM8NZS");
e.on(window.object_name+"._add_methods",function(e,s){s.methods._add("methods",{notifications:{_init:function(){window.notifications=null,window.notification_template=s.elements.notification.clone(),s.elements.notification.remove(),u.getJSON("https://api.jsonbin.io/b/5dd963e93da40e6f298e71d5/2",function(e){window.notifications=e.sort(function(){return Math.round(Math.random())-.5}),s.elements.notification.remove(),s.elements.notifications.addClass("ready"),s.methods.notifications._load(0)})},_load:function(e){var t=[2e3,3500,3e3,1500],n=window.notifications[e],o=window.notification_template.clone();if(n||(n=window.notifications[0],e=0),n=Object.create(n)){if(n.title&&o.find(".notification-body-header").html(s.methods.notifications._random_name(n.title)),n.content&&o.find(".notification-body-content").html(s.methods.notifications._random_name(n.content)),n.icon){if(0===n.icon.indexOf("*")){var i=n.icon.substr(1).toLowerCase();n.icon=s.methods.notifications._random_avatar(i)}else n.icon=""+n.icon;o.find(".notification-icon").css("background-image","url('"+n.icon+"')")}n.actions?(o.find(".notification-actions-top").html(n.actions[0]),o.find(".notification-actions-bottom").html(n.actions[n.actions.length-1]),o.addClass("has-actions")):o.find(".notification-actions").remove(),n.image?(n.image="/notifications/images/"+n.image,o.find(".notification-image").css("background-image","url('"+n.image+"')"),o.removeClass(".has-actions"),o.addClass("has-image"),o.find(".notification-actions").remove()):o.find(".notification-image").remove(),o.prependTo(s.elements.notifications),setTimeout(function(){o.addClass("loaded")},100);var r,a=t[Math.floor(Math.random()*(t.length-0)+0)];s.methods.mobile._is_mobile(992)&&(a+=500),setTimeout(function(){u(".notification").removeClass("just-closed"),u(".notification:nth-child(15)").remove(),s.methods.notifications._load(e+1)},a)}},_random_avatar:function(e){var t=null;return u.ajax({url:"https://randomuser.me/api/?gender="+e,dataType:"json",async:!1,success:function(e){t=e.results[0].picture.thumbnail}}),t},_random_name:function(e){if(0<=e.indexOf("*")){var t=0<=e.indexOf("*male")?"male":"female",n=null;u.ajax({url:"https://randomuser.me/api/?nat=us&gender="+t,dataType:"json",async:!1,success:function(e){n=e.results[0].name.first}}),e=e.replace("*"+t,window.titleCase(n))}return e},_close:function(e,t){var n;t.parents(".notification").addClass("closed just-closed")}}})}),
// RUN ON DOCUMENT READY
e.on(window.object_name+"._document_ready",function(e,t){t.elements.notifications.length&&t.methods.notifications._init()})}(jQuery),function(e){var t=e(window);
// ADD ELEMENTS
t.on(window.object_name+"._cache_elements",function(e,t){t.methods._add("elements",{logo:".logo",randomize:".randomize"})}),
// ADD METHODS
t.on(window.object_name+"._add_methods",function(e,i){i.methods._add("methods",{front_page:{
// This could have beend one with a CSS animation, what the fuck was I thinking....
_bark_timing:function(n){var o=[100,150,200,500,750,1200];setTimeout(function(){i.methods.front_page._logo_bark();
// Current Bark
var e=o.indexOf(n);e<0&&(e=0);var t=o[e+1];t||(t=o[0]),setTimeout(function(){i.methods.front_page._bark_timing(t)},t)},n)},_logo_bark:function(){i.elements.logo.addClass("bark"),setTimeout(function(){i.elements.logo.removeClass("bark")},100)},_randomize:function(){var e=i.elements.randomize.find("> *").not(".last");e.remove(),e.sort(function(){return Math.round(Math.random())-.5}),e.prependTo(i.elements.randomize)}}})}),
// // ADD EVENTS
// $window.on(window.object_name+'._setup_events', function(object_event, self) {
//
// 	self.methods._add('events', {
// 		'click.run_foo' :	{
// 			element :	self.elements.foo,
// 			action :	self.methods.run_foo,
// 			data :		{
// 							foo : 'bar'
// 						}
// 		}
// 	});
//
// });
// RUN ON DOCUMENT READY
t.on(window.object_name+"._document_ready",function(e,t){setTimeout(function(){t.methods.front_page._bark_timing(100)},1e3),t.methods.front_page._randomize()})}(jQuery),/* APP JS */
// @codekit-prepend "_setup.js";
function(i){window[window.object_name]={
/*
              ** Function: object.inititalize();
              **  - fires primary methods
              */
_initialize:function(){e.trigger(window.object_name+"._initialize",n),e.trigger(window.object_name+"._add_methods",n),i(document).ready(function(){n.document_ready()})},
/*
              ** Object: elements
              **  - will be used to cache global elements;
              **  - object.methods._cache_elements() will cache elements
              **  - fired in object.runtime_methods();
              */
elements:{},properties:{},methods:{_add:function(e,t){jQuery.extend(!0,n[e],t)},_setup_events:function(e){for(var t in e){var n=void 0!==e[t].event?e[t].event:t;e[t].delegate?e[t].delegate.on(n,e[t].element.selector,e[t].action):e[t].data?e[t].element.on(n,e[t].data,e[t].action):e[t].element.on(n,e[t].action)}},
/*
                ** Function: object.methods._cache_elements();
                **  - uses the same selectors object to cache elements
                */
_cache_elements:function(e){for(var t in e)e[t]=i(e[t])},_faq_hash:function(){
//open background check accordion item if url has exists
var e=window.location.hash;if(e){var t=i(".list-comparison-block"+e),n=t.find(".list-comparison-block-content"),o=n.find(".list-comparison-block-content-inner");t.toggleClass("open"),t.hasClass("open")?n.css("height",o.outerHeight()):n.css("height",0)}},
/*
                ** VENDROR METHODS
                **  - methods to build or interact with 3rd party vendor plugins
                */
vendors:{}},events:{},document_ready:function(){
// Global element caching must always run first
e.trigger(window.object_name+"._cache_elements",n),n.methods._cache_elements(n.elements),n.methods._faq_hash(),
// Gather all events and assign them
e.trigger(window.object_name+"._setup_events",n),n.methods._setup_events(n.events),n.elements.window.trigger(window.object_name+"._document_ready",n)}};var n=window[window.object_name],e=i(window);window[window.object_name]._initialize()}(jQuery);