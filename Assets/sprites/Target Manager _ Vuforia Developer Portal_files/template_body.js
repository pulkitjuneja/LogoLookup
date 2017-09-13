window.twttr=window.twttr||{};(function(){function m(c){c=c||window.event;for(var a=c.target||c.srcElement,b,d;a&&a.nodeName.toLowerCase()!=="a";)a=a.parentNode;if(a&&a.nodeName.toLowerCase()==="a"&&a.href)if(b=a.href.match(t)){b=Math.round(u/2-n/2);d=0;if(o>k)d=Math.round(o/2-k/2);window.open(a.href,"intent",v+",width="+n+",height="+k+",left="+b+",top="+d);c.returnValue=false;c.preventDefault&&c.preventDefault()}}
function p(c){var a,b;for(b in c){a=w.apply(this,b.split("."));for(var d=0,e;e=a[d];d++)(new c[b](e)).render()}}
function w(c,a){var b,d=[],e,g;try{if(document.querySelectorAll)d=document.querySelectorAll(c+"."+a);else if(document.getElementsByClassName){b=document.getElementsByClassName(a);for(e=0;g=b[e];e++)g.tagName.toLowerCase()==c&&d.push(g)}else{b=document.getElementsByTagName(c);var h=RegExp("\\b"+a+"\\b");for(e=0;g=b[e];e++)g.className.match(h)&&d.push(g)}}catch(j){}
return d}
function q(c){for(var a=[],b=0,d=c.length;b<d;b++)a.push(c[b]);return a}
var t=/twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,v="scrollbars=yes,resizable=yes,toolbar=no,location=yes",n=550,k=420,o=screen.height,u=screen.width;if(!window.__twitterIntentHandler){if(document.addEventListener)document.addEventListener("click",m,false);else document.attachEvent&&document.attachEvent("onclick",m);window.__twitterIntentHandler=true}
if(!twttr.widgets)twttr.widgets={};if(!twttr.widgets.host)twttr.widgets.host="platform{i}.twitter.com";if(typeof twttr.widgets.ignoreSSL==="undefined")twttr.widgets.ignoreSSL=false;var x=document.title,y=encodeURI(location.href),l=0,z={en:{vertical:[55,62],horizontal:[110,20],none:[55,20]},de:{vertical:[67,62],horizontal:[110,20],none:[67,20]},es:{vertical:[64,62],horizontal:[110,20],none:[64,20]},fr:{vertical:[65,62],horizontal:[110,20],none:[65,20]},it:{vertical:[55,62],horizontal:[110,20],none:[55,20]},ko:{vertical:[55,62],horizontal:[110,20],none:[55,20]},ja:{vertical:[80,62],horizontal:[130,20],none:[80,20]},ru:{vertical:[68,62],horizontal:[110,20],none:[68,20]},tr:{vertical:[66,62],horizontal:[110,20],none:[66,20]},pt:{vertical:[66,62],horizontal:[110,20],none:[66,20]}},A={en:1,de:1,es:1,fr:1,it:1,ko:1,ja:1,ru:1,tr:1,pt:1},B={vertical:1,horizontal:1,none:1},C={en:"Twitter For Websites: Tweet Button",de:"Twitter f\u00fcr Webseiten: Tweet-Schaltfl\u00e4che",es:"Twi`tter para sitios web: Bot\u00f3n para Twittear",fr:'Twitter pour votre site web : bouton "Tweeter"',it:"Tweeter per i siti web: Bottone Tweet",ja:"WEB\u30b5\u30a4\u30c8\u5411\u3051Twitter: \u30c4\u30a4\u30fc\u30c8\u30dc\u30bf\u30f3",ko:"Twitter \uc6f9\ubc84\uc804: \ud2b8\uc717 \ubc84\ud2bc",pt:"Twitter para websites: Bot\u00e3o de Tweet",ru:"\u0422\u0432\u0438\u0442\u0442\u0435\u0440 \u0434\u043b\u044f \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430: \u043a\u043d\u043e\u043f\u043a\u0430 \u00ab\u0422\u0432\u0438\u0442\u043d\u0443\u0442\u044c\u00bb",tr:"Web siteleri i\u00e7in Twitter: Tweetle Butonu"};twttr.TweetButton=function(c){this.originElement=c;var a=c.href.split("?")[1],b;if(a){b={};var d,e;if(a){a=a.split("&");for(e=0;d=a[e];e++){d=d.split("=");if(d.length==2)b[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}}
b=b}else b={};b=b;a=b.count||c.getAttribute("data-count");e=b.lang||c.getAttribute("data-lang");this.text=b.text||c.getAttribute("data-text")||x;if(!(d=b.via)){if(!(d=c.getAttribute("data-via")))a:{var g=document.getElementsByTagName("a"),h=document.getElementsByTagName("link");d=/\bme\b/;var j=/^https?\:\/\/(www\.)?twitter.com\/(#!\/)?([a-zA-Z0-9_]+)\/?$/;g=q(g).concat(q(h));for(var f,i,r=0;i=g[r];r++){h=i.getAttribute("rel");i=i.getAttribute("href");if(h&&i&&h.match(d)&&(f=i.match(j))){d=f[3];break a}}
d=void 0}
d=d}
this.via=d;if(!(f=b.url)){if(!(f=c.getAttribute("data-url"))){a:{f=document.getElementsByTagName("link");for(d=0;j=f[d];d++)if(j.getAttribute("rel")=="canonical"){f=j.getAttribute("href");d=void 0;if(f.match(/^https?:\/\//))f=f;else{d=location.host;if(location.port.length>0)d+=":"+location.port;f=f.match(/^\/[^\/]/)?[location.protocol,"//",d,f].join(""):[location.protocol,"//",d,location.pathname.replace(/\/([^\/]+)$/,"/"),f].join("")}
break a}
f=null}
f=f||y}
f=f}
this.url=f;this.statusID=b.status_id||c.getAttribute("data-status-id");this.related=b.related||c.getAttribute("data-related");this.counturl=b.counturl||c.getAttribute("data-counturl");this.searchlink=b.searchlink||c.getAttribute("data-searchlink");this.placeid=b.placeid||c.getAttribute("data-placeid");B[a]||(a="horizontal");this.count=a;A[e]||(e="en");this.lang=e};(function(c,a){for(var b in a)c[b]=a[b];return c})(twttr.TweetButton.prototype,{parameters:function(){var c;c=this.statusID?{status_id:this.statusID}:{text:this.text,url:this.url,via:this.via,related:this.related,count:this.count,lang:this.lang,counturl:this.counturl,searchlink:this.searchlink,placeid:this.placeid};c._=(new Date).getTime();var a=[],b;for(b in c)c[b]!==null&&typeof c[b]!=="undefined"&&a.push(encodeURIComponent(b).replace(/\+/g,"%2B")+"="+encodeURIComponent(c[b]).replace(/\+/g,"%2B"));return a.sort().join("&")},render:function(){if(!twttr.TweetButton.fragment){twttr.TweetButton.fragment=document.createElement("div");twttr.TweetButton.fragment.innerHTML='<iframe allowtransparency="true" frameborder="0" scrolling="no" tabindex="0" class="twitter-share-button twitter-count-'+this.count+'"></iframe>'}
var c=twttr.TweetButton.fragment.firstChild.cloneNode(false),a=(window.location.protocol.match(/s\:$/)||0)&&!twttr.widgets.ignoreSSL?"https":"http",b=twttr.widgets.host.replace("{i}",l++);if(l==3)l=0;c.src=a+"://"+b+"/widgets/tweet_button.html?"+this.parameters();a=z[this.lang][this.count];c.style.width=a[0]+"px";c.style.height=a[1]+"px";c.title=C[this.lang];(a=this.originElement.parentNode)&&a.replaceChild(c,this.originElement)}});var s={"a.twitter-share-button":twttr.TweetButton};p(s);(function(c){var a,b,d=function(){document.readyState=="complete"&&a()},e,g=function(){try{document.documentElement.doScroll("left");a()}catch(h){}};if(window.addEventListener){a=function(){if(!b){b=true;c()}
window.removeEventListener("DOMContentLoaded",a,false);window.removeEventListener("load",a,false)};window.addEventListener("DOMContentLoaded",a,false);window.addEventListener("load",a,false)}else if(window.attachEvent){e=window.setInterval(g,13);a=function(){if(!b){b=true;c()}
window.clearInterval(e);window.detachEvent("onreadystatechange",d);window.detachEvent("onload",a)};window.attachEvent("onreadystatechange",d);window.attachEvent("onload",a)}})(function(){p(s)})})();+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.VERSION='3.3.6'
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}
function clearMenus(e){if(e&&e.which===3)return
$(backdrop).remove()
$(toggle).each(function(){var $this=$(this)
var $parent=getParent($this)
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
if(e&&e.type=='click'&&/input|textarea/i.test(e.target.tagName)&&$.contains($parent[0],e.target))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.attr('aria-expanded','false')
$parent.removeClass('open').trigger($.Event('hidden.bs.dropdown',relatedTarget))})}
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$this.trigger('focus').attr('aria-expanded','true')
$parent.toggleClass('open').trigger($.Event('shown.bs.dropdown',relatedTarget))}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if(!isActive&&e.which!=27||isActive&&e.which==27){if(e.which==27)$parent.find(toggle).trigger('focus')
return $this.trigger('click')}
var desc=' li:not(.disabled):visible a'
var $items=$parent.find('.dropdown-menu'+desc)
if(!$items.length)return
var index=$items.index(e.target)
if(e.which==38&&index>0)index--
if(e.which==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).trigger('focus')}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','.dropdown-menu',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$dialog=this.$element.find('.modal-dialog')
this.$backdrop=null
this.isShown=null
this.originalBodyPad=null
this.scrollbarWidth=0
this.ignoreBackdropClick=false
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.VERSION='3.3.6'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.$dialog.on('mousedown.dismiss.bs.modal',function(){that.$element.one('mouseup.dismiss.bs.modal',function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true})})
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
that.$element.show().scrollTop(0)
that.adjustDialog()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in')
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$dialog.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal')
this.$dialog.off('mousedown.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger('focus')}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var that=this
var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$(document.createElement('div')).addClass('modal-backdrop '+animate).appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false
return}
if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus():this.hide()},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
var callbackRemove=function(){that.removeBackdrop()
callback&&callback()}
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
Modal.prototype.handleUpdate=function(){this.adjustDialog()}
Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth
if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect()
fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left)}
this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth
this.scrollbarWidth=this.measureScrollbar()}
Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
this.originalBodyPad=document.body.style.paddingRight||''
if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right',this.originalBodyPad)}
Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth}
function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
$target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.VERSION='3.3.6'
Alert.TRANSITION_DURATION=150
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=$(selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.closest('.alert')}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=null
this.options=null
this.enabled=null
this.timeout=null
this.hoverState=null
this.$element=null
this.inState=null
this.init('tooltip',element,options)}
Tooltip.VERSION='3.3.6'
Tooltip.TRANSITION_DURATION=150
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$($.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):(this.options.viewport.selector||this.options.viewport))
this.inState={click:false,hover:false,focus:false}
if(this.$element[0]instanceof document.constructor&&!this.options.selector){throw new Error('`selector` option must be specified when initializing '+this.type+' on the window.document object!')}
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusin'?'focus':'hover']=true}
if(self.tip().hasClass('in')||self.hoverState=='in'){self.hoverState='in'
return}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.isInStateTrue=function(){for(var key in this.inState){if(this.inState[key])return true}
return false}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
$(obj.currentTarget).data('bs.'+this.type,self)}
if(obj instanceof $.Event){self.inState[obj.type=='focusout'?'focus':'hover']=false}
if(self.isInStateTrue())return
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(e.isDefaultPrevented()||!inDom)return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id',tipId)
this.$element.attr('aria-describedby',tipId)
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
this.$element.trigger('inserted.bs.'+this.type)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var orgPlacement=placement
var viewportDim=this.getPosition(this.$viewport)
placement=placement=='bottom'&&pos.bottom+actualHeight>viewportDim.bottom?'top':placement=='top'&&pos.top-actualHeight<viewportDim.top?'bottom':placement=='right'&&pos.right+actualWidth>viewportDim.width?'left':placement=='left'&&pos.left-actualWidth<viewportDim.left?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
var complete=function(){var prevHoverState=that.hoverState
that.$element.trigger('shown.bs.'+that.type)
that.hoverState=null
if(prevHoverState=='out')that.leave(that)}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top+=marginTop
offset.left+=marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
if(delta.left)offset.left+=delta.left
else offset.top+=delta.top
var isVertical=/top|bottom/.test(placement)
var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
var arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)}
Tooltip.prototype.replaceArrow=function(delta,dimension,isVertical){this.arrow().css(isVertical?'left':'top',50*(1-delta/dimension)+'%').css(isVertical?'top':'left','')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(callback){var that=this
var $tip=$(this.$tip)
var e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach()
that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type)
callback&&callback()}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof $e.attr('data-original-title')!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
var elRect=el.getBoundingClientRect()
if(elRect.width==null){elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top})}
var elOffset=isBody?{top:0,left:0}:$element.offset()
var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()}
var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null
return $.extend({},elRect,scroll,outerDims,elOffset)}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
if(!this.$viewport)return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
var rightEdgeOffset=pos.left+viewportPadding+actualWidth
if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.right){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
return delta}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
while(document.getElementById(prefix))
return prefix}
Tooltip.prototype.tip=function(){if(!this.$tip){this.$tip=$(this.options.template)
if(this.$tip.length!=1){throw new Error(this.type+' `template` option must consist of exactly 1 top-level element!')}}
return this.$tip}
Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=this
if(e){self=$(e.currentTarget).data('bs.'+this.type)
if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
$(e.currentTarget).data('bs.'+this.type,self)}}
if(e){self.inState.click=!self.inState.click
if(self.isInStateTrue())self.enter(self)
else self.leave(self)}else{self.tip().hasClass('in')?self.leave(self):self.enter(self)}}
Tooltip.prototype.destroy=function(){var that=this
clearTimeout(this.timeout)
this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type)
if(that.$tip){that.$tip.detach()}
that.$tip=null
that.$arrow=null
that.$viewport=null})}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.3.6'
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content').children().detach().end()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option))return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);var bootbox=window.bootbox||function(k){function j(b,a){null==a&&(a=l);return"string"==typeof h[a][b]?h[a][b]:a!=m?j(b,m):b}var l="en",m="en",p=!0,g={},f={},h={en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},ru:{OK:"OK",CANCEL:"\u041e\u0442\u043c\u0435\u043d\u0430",CONFIRM:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"}};f.setLocale=function(b){for(var a in h)if(a==b){l=b;return}throw Error("Invalid locale: "+b);};f.addLocale=function(b,a){"undefined"==typeof h[b]&&(h[b]={});for(var c in a)h[b][c]=a[c]};f.setIcons=function(b){g=b;if("object"!==typeof g||null==g)g={}};f.alert=function(){var b="",a=j("OK"),c=null;switch(arguments.length){case 1:b=arguments[0];break;case 2:b=arguments[0];"function"==typeof arguments[1]?c=arguments[1]:a=arguments[1];break;case 3:b=arguments[0];a=arguments[1];c=arguments[2];break;default:throw Error("Incorrect number of arguments: expected 1-3");}return f.dialog(b,{label:a,icon:g.OK,callback:c},{onEscape:c})};f.confirm=function(){var b="",a=j("CANCEL"),c=j("CONFIRM"),e=null;switch(arguments.length){case 1:b=arguments[0];break;case 2:b=arguments[0];"function"==typeof arguments[1]?e=arguments[1]:a=arguments[1];break;case 3:b=arguments[0];a=arguments[1];"function"==typeof arguments[2]?e=arguments[2]:c=arguments[2];break;case 4:b=arguments[0];a=arguments[1];c=arguments[2];e=arguments[3];break;default:throw Error("Incorrect number of arguments: expected 1-4");}return f.dialog(b,[{label:a,icon:g.CANCEL,callback:function(){"function"==typeof e&&e(!1)}},{label:c,icon:g.CONFIRM,callback:function(){"function"==typeof e&&e(!0)}}])};f.prompt=function(){var b="",a=j("CANCEL"),c=j("CONFIRM"),e=null;switch(arguments.length){case 1:b=arguments[0];break;case 2:b=arguments[0];"function"==typeof arguments[1]?e=arguments[1]:a=arguments[1];break;case 3:b=arguments[0];a=arguments[1];"function"==typeof arguments[2]?e=arguments[2]:c=arguments[2];break;case 4:b=arguments[0];a=arguments[1];c=arguments[2];e=arguments[3];break;default:throw Error("Incorrect number of arguments: expected 1-4");}var n=k("<form></form>");n.append("<input autocomplete=off type=text />");var h=f.dialog(n,[{label:a,icon:g.CANCEL,callback:function(){"function"==typeof e&&e(null)}},{label:c,icon:g.CONFIRM,callback:function(){"function"==typeof e&&e(n.find("input[type=text]").val())}}],{header:b});h.on("shown",function(){n.find("input[type=text]").focus();n.on("submit",function(a){a.preventDefault();h.find(".btn-primary").click()})});return h};f.modal=function(){var b,a,c,e={onEscape:null,keyboard:!0,backdrop:!0};switch(arguments.length){case 1:b=arguments[0];break;case 2:b=arguments[0];"object"==typeof arguments[1]?c=arguments[1]:a=arguments[1];break;case 3:b=arguments[0];a=arguments[1];c=arguments[2];break;default:throw Error("Incorrect number of arguments: expected 1-3");}e.header=a;c="object"==typeof c?k.extend(e,c):e;return f.dialog(b,[],c)};f.dialog=function(b,a,c){var e=null,f="",h=[],c=c||{};null==a?a=[]:"undefined"==typeof a.length&&(a=[a]);for(var d=a.length;d--;){var g=null,j=null,l="",m=null;if("undefined"==typeof a[d].label&&"undefined"==typeof a[d]["class"]&&"undefined"==typeof a[d].callback){var g=0,q=null,o;for(o in a[d])if(q=o,1<++g)break;1==g&&"function"==typeof a[d][o]&&(a[d].label=q,a[d].callback=a[d][o])}"function"==typeof a[d].callback&&(m=a[d].callback);a[d]["class"]?j=a[d]["class"]:d==a.length-1&&2>=a.length&&(j="btn-primary");g=a[d].label?a[d].label:"Option "+(d+1);a[d].icon&&(l="<i class='"+a[d].icon+"'></i> ");f+="<a data-handler='"+d+"' class='btn "+j+"' href='javascript:;'>"+l+""+g+"</a>";h[d]=m}a=["<div class='bootbox modal' style='overflow:hidden;'>"];if(c.header){d="";if("undefined"==typeof c.headerCloseButton||c.headerCloseButton)d="<a href='javascript:;' class='close'>&times;</a>";a.push("<div class='modal-header'>"+d+"<h3>"+c.header+"</h3></div>")}a.push("<div class='modal-body'></div>");f&&a.push("<div class='modal-footer'>"+f+"</div>");a.push("</div>");var i=k(a.join("\n"));("undefined"===typeof c.animate?p:c.animate)&&i.addClass("fade");k(".modal-body",i).html(b);i.bind("hidden",function(){i.remove()});i.bind("hide",function(){if("escape"==e&&"function"==typeof c.onEscape)c.onEscape()});k(document).bind("keyup.modal",function(a){27==a.which&&(e="escape")});i.bind("shown",function(){k("a.btn-primary:last",i).focus()});i.on("click",".modal-footer a, a.close",function(a){var b=k(this).data("handler"),b=h[b],c=null;"function"==typeof b&&(c=b());!1!==c&&(a.preventDefault(),e="button",i.modal("hide"))});null==c.keyboard&&(c.keyboard="function"==typeof c.onEscape);k("body").append(i);i.modal({backdrop:c.backdrop||!0,keyboard:c.keyboard});return i};f.hideAll=function(){k(".bootbox").modal("hide")};f.animate=function(b){p=b};return f}(window.jQuery);+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false
var $el=this
$(this).one('bsTransitionEnd',function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()
if(!$.support.transition)return
$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);var SIZE_OF_MAX_DETAIL_IMAGE=530.0;var MAX_TARGETS_LIMIT_FOR_DELETE=200;var SIZE_OF_MAX_WIDTH_HOVER_IMAGE=178.0;var SIZE_OF_MAX_HEIGHT_HOVER_IMAGE=132.0;$(document).ready(function(){var bodyHt=$(window).innerHeight();var headerHt=$('#header').height();var footerHt=$('.page-footer').height();var minHt=bodyHt-(headerHt+footerHt);$('.main-content').css('min-height',minHt-100);removeOldValues();$('.forgot-password').click(function(){$('.conditional').hide();$('.forgotpassword-form').show();});$('#submitLogin').click(function(){$('.conditional').hide();$('.additionalinfo-form').show();});generateImagesAccordingToDEtailsPage();if(navigator.appVersion.indexOf("Mac")!=-1){$('.input-file2[disabled]').css("cssText","color: dimgrey !important;");}
$(':input[placeholder]').each(function(){$(this).addClass('default-label');$(this).focus(function(){$(this).removeClass('default-label');});$(this).blur(function(){if(this.value==''){$(this).addClass('default-label');}});});$('section [href^=#]').click(function(e){e.preventDefault();});$('.table input.select-row').each(function(){var status=$(this).attr('checked');if(status!="checked"){$(this).parents('tr').removeClass('selected');}
else{$(this).parents('tr').addClass('selected');}}).click(function(){var status=$(this).attr('checked');if(status!="checked"){$(this).parents('tr').removeClass('selected');}
else{$(this).parents('tr').addClass('selected');}});$('.select-all').click(function(){$('.tl-selectd-all').prop('checked',true);$('.table-list-tbody input[type=checkbox]').each(function(){if(!($(this).attr('disabled'))){if(arrayIdSelStoreInDom.indexOf($(this).attr('id'))==-1){arrayIdSelStoreInDom.push($(this).attr('id'));if(arrayIdSelStoreInDom.length>0)
$(".selectedTargetsForDownloadCount").text(arrayIdSelStoreInDom.length);else $(".selectedTargetsForDownloadCount").text("All");if(($(this).parent().parent().parent().find(".target-status h5").text().trim().indexOf("Inactive")>=0)||($(".dbListingType").val()=="vumark"&&$(this).parent().parent().parent().find(".target-status h5").text().trim().indexOf("Failed")==0))
actionStatusPanelArray[0]++;else if($(this).parent().parent().parent().find(".target-status h5").text().trim().indexOf("Active")==0){actionStatusPanelArray[1]++;arrayActiveIdSelStoreInDom.push($(this).attr('id'));}}
$(this).attr('checked',true);var noOfImages;if($(this).parent().parent().attr('id')===undefined){noOfImages=-1;}else{noOfImages=$(this).parent().parent().attr('id');}
if(arrayIdSel.indexOf($(this).attr('id')+"__"+noOfImages)<0){arrayIdSel.push($(this).attr('id')+"__"+noOfImages);}}});if(actionStatusPanelArray[0]>0)
$(".selection-action-activate").show();else $(".selection-action-activate").hide();if(actionStatusPanelArray[1]>0)
$(".selection-action-deactivate").show();else $(".selection-action-deactivate").hide();if((typeof totalDeviceTargetsForProject!=='undefined'&&totalDeviceTargetsForProject>0)||(typeof totalVumarkTargetsForProject!=='undefined'&&totalVumarkTargetsForProject>0)){$(".tl-selected-targets-for-remove").show();$(".tl-selected-targets-for-remove").parent().show();$("#tl-selected-targets-for-remove-text").show();}
isClear=500;allSelectedPage=true;flag2=false;changeSelectedDetails();onClickOfDBSelectAll();flag2=true;var idList1="";for(var k=0;k<arrayIdSel.length;k++){idList1+=arrayIdSel[k].split('__')[0]+'::';}});$('.clear-all').click(function(){$('.tl-selectd-all').prop('checked',false);$('.table-list-tbody input[type=checkbox]').each(function(){if(arrayIdSelStoreInDom.indexOf($(this).attr('id'))!=-1){arrayIdSelStoreInDom.splice(arrayIdSelStoreInDom.indexOf($(this).attr('id')),1);arrayActiveIdSelStoreInDom.splice(arrayActiveIdSelStoreInDom.indexOf($(this).attr('id')),1);if(arrayIdSelStoreInDom.length>0)
$(".selectedTargetsForDownloadCount").text(arrayIdSelStoreInDom.length);else $(".selectedTargetsForDownloadCount").text("All");if(($(this).parent().parent().parent().find(".target-status h5").text().trim().indexOf("Inactive")>=0)||($(".dbListingType").val()=="vumark"&&$(this).parent().parent().parent().find(".target-status h5").text().trim().indexOf("Failed")==0))
actionStatusPanelArray[0]--;else if($(this).parent().parent().parent().find(".target-status h5").text().trim().indexOf("Active")==0)
actionStatusPanelArray[1]--;}
if($(this).attr('checked')){$(this).attr('checked',false);$(this).parents('.table-list-tbody').removeClass('selected');}});if(actionStatusPanelArray[0]>0)
$(".selection-action-activate").show();else $(".selection-action-activate").hide();if(actionStatusPanelArray[1]>0)
$(".selection-action-deactivate").show();else $(".selection-action-deactivate").hide();$(".tl-selected-targets-for-remove").hide();$(".tl-selected-targets-for-remove").parent().hide();$("#tl-selected-targets-for-remove-text").hide();isClear=501;allSelectedDB=false;allSelectedPage=false;arrayIdSel=new Array();flag2=false;changeSelectedDetails();flag2=true;});$('.table-list-container .table-list-tbody input[type=checkbox]').each(function(){var status=$(this).attr('checked');if(status!="checked"){$(this).parents('.table-list-tbody').removeClass('selected');}
else{$(this).parents('.table-list-tbody').addClass('selected');}}).click(function(){var status=$(this).attr('checked');if(status!="checked"){$(this).parents('.table-list-tbody').removeClass('selected');}
else{$(this).parents('.table-list-tbody').addClass('selected');}});if(navigator.appName=="Microsoft Internet Explorer"){$("#edit-search-theme-form-1").val($("#edit-search-theme-form-1").attr("placeholder"));$(".input-file").addClass("input-file-browse-btn-ie9");}
$("#edit-search-theme-form-1").keydown(function(){if($(this).val()==$(this).attr("placeholder")){$(this).val("");}});$("a[rel=popover]").popover({placement:'bottom'}).click(function(e){e.preventDefault()});$("a[rel=popoverbottom]").popover({trigger:'click',placement:'bottom'});$("a[rel=popovertop]").popover({placement:'top'}).click(function(e){e.preventDefault()});$("a[rel=popoverleft]").popover({placement:'left'}).click(function(e){e.preventDefault()});$("html").click(function(e){e=e||event;var target=e.target||e.srcElement;var idDiv=target.id;if(!(idDiv===undefined)&&(idDiv.indexOf('augmentablePopover')<0)){if($('.popover').size()>0){$('.popover').remove();}}});$(".augmentablePopover").click(function(){$(this).popover({trigger:'manual',placement:'bottom'});if($('.popover').size()>0){$('.popover').remove();}else{$(this).popover('show');}});$(".admin .table a[rel=popoverbottom]").mouseover(function(){var leftPos=$(this).offset().left;var popoverWid=$('.popover .popover-inner').width();var newPos=(leftPos-popoverWid)+35;$('.popover .popover-inner').css('width','auto');$('.popover').css('left',newPos);$('.popover .arrow').css({left:'auto',right:'45px'});$('.popover-title').css({background:'#fff',padding:'2px',border:'0'});});var $win=$(window),$nav=$('.subnav'),navTop=$('.subnav').length&&$('.subnav').offset().top-40,isFixed=0
processScroll()
$nav.on('click',function(){if(!isFixed)setTimeout(function(){$win.scrollTop($win.scrollTop()-47)},10)})
$win.on('scroll',processScroll)
function processScroll(){var i,scrollTop=$win.scrollTop()
if(scrollTop>=navTop&&!isFixed){isFixed=1
$nav.addClass('subnav-fixed')}else if(scrollTop<=navTop&&isFixed){isFixed=0
$nav.removeClass('subnav-fixed')}}
$('#devPlatformAndroid').click(function(){var status=$(this).attr('checked');if(status=="checked"){$('#adminPermissions').modal();}});if(currentUrl!=null&&currentUrl!='null'&&currentUrl!=''){if(currentUrl.indexOf('admin')>0||currentUrl.indexOf('quotaLimit')>0)
$('.navbar .nav > li > a.admin').attr("style","color:#ffffff");else
$('.navbar .nav > li > a.targetManager').attr("style","color:#ffffff");}
if(navigator.appName=="Microsoft Internet Explorer"){$("#sign-up-email").val($("#sign-up-email").attr("placeholder"));}
$("#sign-up-email").keydown(function(){if($(this).val()==$(this).attr("placeholder")){$(this).val("");}});$("#sign-up-email").blur(function(){if($("#sign-up-email").val().length==0){$("#sign-up-email").val($("#sign-up-email").attr("placeholder"));}});$("#sign-up-email").keyup(function(e){if(e.keyCode==8){if($("#sign-up-email").val().length==0&&navigator.appName=="Microsoft Internet Explorer")
$("#sign-up-email").val($("#sign-up-email").attr("placeholder"));}});});function getImageSizeInMB(imageDivId){var imgbytes;if($.browser.msie){return true;}else{var fileInput=$('#'+imageDivId)[0];imgbytes=fileInput.files[0].size;}
var imgSizeInMb=parseFloat((imgbytes)/(1024*1024));if(imgSizeInMb>2.25){return false;}else{return true;}}
function getImageFileInMB(imageDivId){var imgbytes;if($.browser.msie){return true;}else{var fileInput=$('#'+imageDivId);imgbytes=fileInput.size;}
var imgSizeInMb=parseFloat((imgbytes)/(1024*1024));if(imgSizeInMb>2.25){return false;}else{return true;}}
function get3DROSizeInMB(imageDivId){var imgbytes;if($.browser.msie){return true;}else{var fileInput=$(imageDivId);imgbytes=fileInput.size;}
var imgSizeInMb=parseFloat((imgbytes)/(1024*1024));if(imgSizeInMb>=35){return false;}else{return true;}}
function isValidObjectTargetSize(fileId){if($.browser.msie)
return true;if($("#"+fileId)[0].files.length==0){$(".target_imageFile_err").addClass("error");$("#imageFileInfodro").text('Please select Image');$("#imageFileInfodro").addClass("errorMessage");return false;}else if($("#changeDroFile").length>0&&($("#changeDroFile")[0].files[0].name.substring($("#changeDroFile")[0].files[0].name.indexOf(".")).toLowerCase()!=".od")){$(".target_imageFile_err").addClass("error");$("#imageFileInfodro").text('Invalid file format. Only OD are allowed');$("#imageFileInfodro").addClass("errorMessage");return false;}else if($("#targetdroFile").length>0&&($("#targetdroFile")[0].files[0].name.substring($("#targetdroFile")[0].files[0].name.indexOf(".")).toLowerCase()!=".od")){$(".target_imageFile_err").addClass("error");$("#imageFileInfodro").text('Invalid file format. Only OD are allowed');$("#imageFileInfodro").addClass("errorMessage");return false;}else{var sizeOfObjectTarget=$("#"+fileId)[0].files[0].size/1024/1024;if(sizeOfObjectTarget<=35){$(".target_imageFile_err").removeClass("error");$("#imageFileInfodro").text("");$("#imageFileInfodro").removeClass("errorMessage");return true;}
else{$(".target_imageFile_err").addClass("error");$("#imageFileInfodro").text('The selected file exceeds the maximum file size of 35 MB')
$("#imageFileInfodro").addClass("errorMessage");return false;}}}
function disableEnableAllLinks(disable){if(disable){$('a').addClass('disabled');}else{$('a').removeClass('disabled');}}
function redirectSerachPage(){var search=$('#edit-search-theme-form-1').val();$('#edit-search-theme-form-1').val('');window.location="/search/apachesolr_search/"+search;return false;}
function formatingResponse(divId,response){var formattedResponse='';if($.browser.msie){formattedResponse=response;}else{formattedResponse=response.replace(/\<textarea\>/i,'').replace(/\<\/textarea\>/i,'');}
return formattedResponse;}
function disableEnableAllButtons(disable){if(disable){$('button').attr('disabled','disabled');}
else{$('button').removeAttr('disabled');}}
function reloadThePage(){window.location.reload();}
function removeOldValues(){$('a').each(function(){var n=$(this).attr('data-toggle');if(!(n===undefined)){$(this).attr('href','#');}});}
function processNewsletter(){var emailValue=$('form#sign-up-form input#sign-up-email').val();if($.trim(emailValue)==""||validateEmail(emailValue)){$('div#newsletter-show-error').html('<div class="messages error messages-inline">Please enter a valid email address.</div>');return false;}else{$('div#newsletter-show-error div.messages').remove();$('form#sign-up-form').attr('action','https://cl.exct.net/subscribe.aspx?lid=13204926');return true;}
return false;}
$('form#sign-up-form').attr('onsubmit','return processNewsletter();');function validateEmail(email){var error=false;var emailReg=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;if(email==''||!emailReg.test(email)){error=true;}
return error;}
function getTargetAndRecoPercentage(actualvalue,limit){var percentage=0;if(actualvalue==0){percentage=0;}
else if(limit==0){percentage='No Limit';}
else{percentage=(Math.round((actualvalue/limit)*1000)/10);}
return percentage;}
function getMetaDataFileSize(metaDataFileSize){var fileSize=(metaDataFileSize!=null&&metaDataFileSize!='')?(((parseFloat(metaDataFileSize)/1024)-(parseInt(metaDataFileSize)/1024)>0)?(parseFloat(metaDataFileSize)/1024):(parseInt(metaDataFileSize)/1024)):0;return fileSize;}
function setTitleForEllipsis(fieldName,actualName,displayLength){if((actualName).length>displayLength){$(fieldName).attr("title",actualName);}}
function checkRecoForMonth(timeStamp,recos){var currentYear=0;var currentMonth=0;var lastRecoYear=0;var lastRecoMonth=0;var date=new Date();currentYear=date.getFullYear();currentMonth=date.getMonth();date=new Date(timeStamp);lastRecoYear=date.getFullYear();lastRecoMonth=date.getMonth();if((lastRecoYear==currentYear&&lastRecoMonth<currentMonth)||(lastRecoYear<currentYear)){return 0;}
else{return recos;}}
function checkRecoForPreviousMonth(timeStamp,recos){var currentYear=0;var currentMonth=0;var lastRecoYear=0;var lastRecoMonth=0;var previousYear=0;var previousMonth=0;var date=new Date();currentYear=date.getFullYear();currentMonth=date.getMonth();if(currentMonth==0){previousMonth=11;previousYear=currentYear-1;}
else{previousMonth=currentMonth-1;previousYear=currentYear;}
date=new Date(timeStamp);lastRecoYear=date.getFullYear();lastRecoMonth=date.getMonth();if((lastRecoYear==previousYear&&lastRecoMonth<previousMonth)||(lastRecoYear<previousYear)){return 0;}
else{return recos;}}
function goToChoosePlanPage(){window.location.href=contextPath+'/licenseManager/choosePlan?applicationName='+$('#applicationName').val();}
function goToBilling(){window.location.href=contextPath+'/licenseManager/billlingInfoForProfessional';}
function goToPaymentInfo(){window.location.href=contextPath+'/licenseManager/paymentInfoForProfessional';}
function goToSummary(plan){if(plan=='$0/mo'){window.location.href=contextPath+'/licenseManager/summaryForFreePlan';}else{goToBilling();}}
function showSubnav(highlightedTab){$('.sub-nav').removeClass('active');$("."+highlightedTab).addClass('active');$(".license").show();}
function generateImagesAccordingToDEtailsPage(){$.each($(".target-details .thumbnail div img"),function(index,image){resizeTargetDetailsImage(image);});}
function generateStyleAccordingToBrowser(){var userAgent=navigator.userAgent.toLowerCase();if(userAgent.indexOf("chrome")!=-1){if($('.target-details .carousel-inner').length>0){$('.target-details .carousel-inner').addClass("chrome");}}
else if((userAgent.indexOf('opera')>-1)||(userAgent.indexOf('opr')>-1)){}
else if(userAgent.indexOf("firefox")!=-1){if($('.tl-suspended-license-panel').length>0){$('.tl-suspended-license-panel').addClass("firefox");}}
else if((userAgent.indexOf("msie")!=-1)||(!!document.documentMode==true)){if($('.target-details .carousel-inner').length>0){$('.target-details .carousel-inner').addClass("explorer");}}
else if((userAgent.indexOf('safari')!=-1)){if($('.tl-suspended-license-panel').length>0){$('.tl-suspended-license-panel').addClass("safari");}}}
function resizeTargetHoverImage(imageId){var image_width=$(imageId).naturalWidth;var image_height=$(imageId).naturalHeight;var delta=1;if(image_width>SIZE_OF_MAX_WIDTH_HOVER_IMAGE&&image_width>image_height){delta=SIZE_OF_MAX_WIDTH_HOVER_IMAGE/image_width;$(imageId).width(SIZE_OF_MAX_WIDTH_HOVER_IMAGE);$(imageId).height(image_height*delta);}else if(image_height>SIZE_OF_MAX_HEIGHT_HOVER_IMAGE&&image_height>image_width){delta=SIZE_OF_MAX_HEIGHT_HOVER_IMAGE/image_height;$(imageId).height(SIZE_OF_MAX_HEIGHT_HOVER_IMAGE);$(imageId).width(image_width*delta);}else if(image_width>=image_height){delta=SIZE_OF_MAX_WIDTH_HOVER_IMAGE/image_width;$(imageId).width(SIZE_OF_MAX_WIDTH_HOVER_IMAGE);$(imageId).height(image_height*delta);}else if(image_height>image_width){delta=SIZE_OF_MAX_HEIGHT_HOVER_IMAGE/image_height;$(imageId).height(SIZE_OF_MAX_HEIGHT_HOVER_IMAGE);$(imageId).width(image_width*delta);}}
function resizeTargetDetailsImage(imageId){var image_width=$(imageId)[0].naturalWidth;var image_height=$(imageId)[0].naturalHeight;var delta=1;if(image_width>SIZE_OF_MAX_DETAIL_IMAGE&&image_width>image_height){delta=SIZE_OF_MAX_DETAIL_IMAGE/image_width;$(imageId).width(SIZE_OF_MAX_DETAIL_IMAGE);$(imageId).height(image_height*delta);}else if(image_height>SIZE_OF_MAX_DETAIL_IMAGE&&image_height>image_width){delta=SIZE_OF_MAX_DETAIL_IMAGE/image_height;$(imageId).height(SIZE_OF_MAX_DETAIL_IMAGE);$(imageId).width(image_width*delta);}else if(image_width>=image_height){delta=SIZE_OF_MAX_DETAIL_IMAGE/image_width;$(imageId).width(SIZE_OF_MAX_DETAIL_IMAGE);$(imageId).height(image_height*delta);}else if(image_height>image_width){delta=SIZE_OF_MAX_DETAIL_IMAGE/image_height;$(imageId).height(SIZE_OF_MAX_DETAIL_IMAGE);$(imageId).width(image_width*delta);}}
function locatePoint(point,side1,side2,side3){var finalResult=false;var point0=calculateVerticesDistance(side1,side3);var point1=calculateVerticesDistance(side1,side2);var point2=calculateVerticesDistance(side1,point);finalResult=findResultAfterDotProduct(point0,point1,point2);return finalResult;}
function navigateToServiceUnavailablePage(){window.location.href="/targetmanager/vuforiaUtil/ServiceUnavailable";}