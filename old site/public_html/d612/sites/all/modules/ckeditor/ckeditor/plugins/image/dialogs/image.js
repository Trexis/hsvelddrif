﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function(){var a=1,b=2,c=4,d=8,e=/^\s*(\d+)((px)|\%)?\s*$/i,f=/(^\s*(\d+)((px)|\%)?\s*$)|^$/i,g=function(){var m=this.getValue(),n=this.getDialog(),o=m.match(e);if(o){if(o[2]=='%')i(n,false);m=o[1];}if(n.lockRatio){var p=n.originalElement;if(p.getCustomData('isReady')=='true')if(this.id=='txtHeight'){if(m&&m!='0')m=Math.round(p.$.width*(m/p.$.height));if(!isNaN(m))n.setValueOf('info','txtWidth',m);}else{if(m&&m!='0')m=Math.round(p.$.height*(m/p.$.width));if(!isNaN(m))n.setValueOf('info','txtHeight',m);}}h(n);},h=function(m){if(!m.originalElement||!m.preview)return 1;m.commitContent(c,m.preview);return 0;},i=function(m,n){var o=m.originalElement,p=CKEDITOR.document.getById('btnLockSizes');if(o.getCustomData('isReady')=='true'){if(n=='check'){var q=m.getValueOf('info','txtWidth'),r=m.getValueOf('info','txtHeight'),s=o.$.width*1000/o.$.height,t=q*1000/r;m.lockRatio=false;if(!q&&!r)m.lockRatio=true;else if(!isNaN(s)&&!isNaN(t))if(Math.round(s)==Math.round(t))m.lockRatio=true;}else if(n!=undefined)m.lockRatio=n;else m.lockRatio=!m.lockRatio;}else if(n!='check')m.lockRatio=false;if(m.lockRatio)p.removeClass('cke_btn_unlocked');else p.addClass('cke_btn_unlocked');return m.lockRatio;},j=function(m){var n=m.originalElement;if(n.getCustomData('isReady')=='true'){m.setValueOf('info','txtWidth',n.$.width);m.setValueOf('info','txtHeight',n.$.height);}h(m);},k=function(m,n){if(m!=a)return;function o(t,u){var v=t.match(e);if(v){if(v[2]=='%'){v[1]+='%';i(p,false);}return v[1];}return u;};var p=this.getDialog(),q='',r=this.id=='txtWidth'?'width':'height',s=n.getAttribute(r);if(s)q=o(s,q);q=o(n.$.style[r],q);this.setValue(q);},l=function(m,n){var o,p=function(){var s=this;var r=s.originalElement;r.setCustomData('isReady','true');r.removeListener('load',p);r.removeListener('error',q);r.removeListener('abort',q);CKEDITOR.document.getById('ImagePreviewLoader').setStyle('display','none');if(!s.dontResetSize)j(s);if(s.firstLoad)i(s,'check');s.firstLoad=false;s.dontResetSize=false;},q=function(){var t=this;var r=t.originalElement;r.removeListener('load',p);r.removeListener('error',q);r.removeListener('abort',q);var s=CKEDITOR.getUrl(m.skinPath+'images/noimage.png');if(t.preview)t.preview.setAttribute('src',s);CKEDITOR.document.getById('ImagePreviewLoader').setStyle('display','none');i(t,false);};return{title:n=='image'?m.lang.image.title:m.lang.image.titleButton,minWidth:420,minHeight:310,onShow:function(){var x=this;x.imageElement=false;x.linkElement=false;x.imageEditMode=false;
x.linkEditMode=false;x.lockRatio=true;x.dontResetSize=false;x.firstLoad=true;x.addLink=false;CKEDITOR.document.getById('ImagePreviewLoader').setStyle('display','none');x.preview=CKEDITOR.document.getById('previewImage');var r=x.getParentEditor(),s=x.getParentEditor().getSelection(),t=s.getSelectedElement(),u=t&&t.getAscendant('a');x.originalElement=r.document.createElement('img');x.originalElement.setAttribute('alt','');x.originalElement.setCustomData('isReady','false');if(u){x.linkElement=u;x.linkEditMode=true;var v=u.getChildren();if(v.count()==1){var w=v.getItem(0).getName();if(w=='img'||w=='input'){x.imageElement=v.getItem(0);if(x.imageElement.getName()=='img')x.imageEditMode='img';else if(x.imageElement.getName()=='input')x.imageEditMode='input';}}if(n=='image')x.setupContent(b,u);}if(t&&t.getName()=='img'&&!t.getAttribute('_cke_realelement'))x.imageEditMode='img';else if(t&&t.getName()=='input'&&t.getAttribute('type')&&t.getAttribute('type')=='image')x.imageEditMode='input';if(x.imageEditMode||x.imageElement){if(!x.imageElement)x.imageElement=t;x.setupContent(a,x.imageElement);i(x,true);}o=new CKEDITOR.dom.element('img',r.document);if(!CKEDITOR.tools.trim(x.getValueOf('info','txtUrl'))){x.preview.removeAttribute('src');x.preview.setStyle('display','none');}},onOk:function(){var s=this;if(s.imageEditMode){var r=s.imageEditMode;if(n=='image'&&r=='input'&&confirm(m.lang.image.button2Img)){r='img';s.imageElement=m.document.createElement('img');s.imageElement.setAttribute('alt','');m.insertElement(s.imageElement);}else if(n!='image'&&r=='img'&&confirm(m.lang.image.img2Button)){r='input';s.imageElement=m.document.createElement('input');s.imageElement.setAttributes({type:'image',alt:''});m.insertElement(s.imageElement);}}else{if(n=='image')s.imageElement=m.document.createElement('img');else{s.imageElement=m.document.createElement('input');s.imageElement.setAttribute('type','image');}s.imageElement.setAttribute('alt','');}if(!s.linkEditMode)s.linkElement=m.document.createElement('a');s.commitContent(a,s.imageElement);s.commitContent(b,s.linkElement);if(!s.imageEditMode){if(s.addLink){if(!s.linkEditMode){m.insertElement(s.linkElement);s.linkElement.append(s.imageElement,false);}else m.insertElement(s.imageElement);}else m.insertElement(s.imageElement);}else if(!s.linkEditMode&&s.addLink){m.insertElement(s.linkElement);s.imageElement.appendTo(s.linkElement);}else if(s.linkEditMode&&!s.addLink){m.getSelection().selectElement(s.linkElement);m.insertElement(s.imageElement);
}},onLoad:function(){var s=this;if(n!='image')s.hidePage('Link');var r=s._.element.getDocument();s.addFocusable(r.getById('btnResetSize'),5);s.addFocusable(r.getById('btnLockSizes'),5);},onHide:function(){var r=this;if(r.preview)r.commitContent(d,r.preview);if(r.originalElement){r.originalElement.removeListener('load',p);r.originalElement.removeListener('error',q);r.originalElement.removeListener('abort',q);r.originalElement.remove();r.originalElement=false;}},contents:[{id:'info',label:m.lang.image.infoTab,accessKey:'I',elements:[{type:'vbox',padding:0,children:[{type:'html',html:'<span>'+CKEDITOR.tools.htmlEncode(m.lang.image.url)+'</span>'},{type:'hbox',widths:['280px','110px'],align:'right',children:[{id:'txtUrl',type:'text',label:'',onChange:function(){var r=this.getDialog(),s=this.getValue();if(s.length>0){r=this.getDialog();var t=r.originalElement;r.preview.removeStyle('display');t.setCustomData('isReady','false');var u=CKEDITOR.document.getById('ImagePreviewLoader');if(u)u.setStyle('display','');t.on('load',p,r);t.on('error',q,r);t.on('abort',q,r);t.setAttribute('src',s);o.setAttribute('src',s);r.preview.setAttribute('src',o.$.src);h(r);}else if(r.preview){r.preview.removeAttribute('src');r.preview.setStyle('display','none');}},setup:function(r,s){if(r==a){var t=s.getAttribute('_cke_saved_src')||s.getAttribute('src'),u=this;this.getDialog().dontResetSize=true;setTimeout(function(){u.setValue(t);u.setInitValue();u.focus();},0);}},commit:function(r,s){var t=this;if(r==a&&(t.getValue()||t.isChanged())){s.setAttribute('_cke_saved_src',decodeURI(t.getValue()));s.setAttribute('src',decodeURI(t.getValue()));}else if(r==d){s.setAttribute('src','');s.removeAttribute('src');}},validate:CKEDITOR.dialog.validate.notEmpty(m.lang.image.urlMissing)},{type:'button',id:'browse',align:'center',label:m.lang.common.browseServer,hidden:true,filebrowser:'info:txtUrl'}]}]},{id:'txtAlt',type:'text',label:m.lang.image.alt,accessKey:'A','default':'',onChange:function(){h(this.getDialog());},setup:function(r,s){if(r==a)this.setValue(s.getAttribute('alt'));},commit:function(r,s){var t=this;if(r==a){if(t.getValue()||t.isChanged())s.setAttribute('alt',t.getValue());}else if(r==c)s.setAttribute('alt',t.getValue());else if(r==d)s.removeAttribute('alt');}},{type:'hbox',widths:['140px','240px'],children:[{type:'vbox',padding:10,children:[{type:'hbox',widths:['70%','30%'],children:[{type:'vbox',padding:1,children:[{type:'text',width:'40px',id:'txtWidth',labelLayout:'horizontal',label:m.lang.image.width,onKeyUp:g,validate:function(){var r=this.getValue().match(f);
if(!r)alert(m.lang.common.validateNumberFailed);return!!r;},setup:k,commit:function(r,s){var w=this;if(r==a){var t=w.getValue();if(t)s.setAttribute('width',t);else if(!t&&w.isChanged())s.removeAttribute('width');}else if(r==c){t=w.getValue();var u=t.match(e);if(!u){var v=w.getDialog().originalElement;if(v.getCustomData('isReady')=='true')s.setStyle('width',v.$.width+'px');}else s.setStyle('width',t+'px');}else if(r==d){s.setStyle('width','0px');s.removeAttribute('width');s.removeStyle('width');}}},{type:'text',id:'txtHeight',width:'40px',labelLayout:'horizontal',label:m.lang.image.height,onKeyUp:g,validate:function(){var r=this.getValue().match(f);if(!r)alert(m.lang.common.validateNumberFailed);return!!r;},setup:k,commit:function(r,s){var w=this;if(r==a){var t=w.getValue();if(t)s.setAttribute('height',t);else if(!t&&w.isChanged())s.removeAttribute('height');}else if(r==c){t=w.getValue();var u=t.match(e);if(!u){var v=w.getDialog().originalElement;if(v.getCustomData('isReady')=='true')s.setStyle('height',v.$.height+'px');}else s.setStyle('height',t+'px');}else if(r==d){s.setStyle('height','0px');s.removeAttribute('height');s.removeStyle('height');}}}]},{type:'html',style:'margin-top:10px;width:40px;height:40px;',onLoad:function(){var r=CKEDITOR.document.getById('btnResetSize'),s=CKEDITOR.document.getById('btnLockSizes');if(r){r.on('click',function(){j(this);},this.getDialog());r.on('mouseover',function(){this.addClass('cke_btn_over');},r);r.on('mouseout',function(){this.removeClass('cke_btn_over');},r);}if(s){s.on('click',function(){var x=this;var t=i(x),u=x.originalElement,v=x.getValueOf('info','txtWidth');if(u.getCustomData('isReady')=='true'&&v){var w=u.$.height/u.$.width*v;if(!isNaN(w)){x.setValueOf('info','txtHeight',Math.round(w));h(x);}}},this.getDialog());s.on('mouseover',function(){this.addClass('cke_btn_over');},s);s.on('mouseout',function(){this.removeClass('cke_btn_over');},s);}},html:'<div><a href="javascript:void(0)" tabindex="-1" title="'+m.lang.image.lockRatio+'" class="cke_btn_locked" id="btnLockSizes"></a>'+'<a href="javascript:void(0)" tabindex="-1" title="'+m.lang.image.resetSize+'" class="cke_btn_reset" id="btnResetSize"></a>'+'</div>'}]},{type:'vbox',padding:1,children:[{type:'text',id:'txtBorder',width:'60px',labelLayout:'horizontal',label:m.lang.image.border,'default':'',onKeyUp:function(){h(this.getDialog());},validate:function(){var r=CKEDITOR.dialog.validate.integer(m.lang.common.validateNumberFailed);return r.apply(this);},setup:function(r,s){if(r==a)this.setValue(s.getAttribute('border'));
},commit:function(r,s){var u=this;if(r==a){if(u.getValue()||u.isChanged())s.setAttribute('border',u.getValue());}else if(r==c){var t=parseInt(u.getValue(),10);t=isNaN(t)?0:t;s.setAttribute('border',t);s.setStyle('border',t+'px solid black');}else if(r==d){s.removeAttribute('border');s.removeStyle('border');}}},{type:'text',id:'txtHSpace',width:'60px',labelLayout:'horizontal',label:m.lang.image.hSpace,'default':'',onKeyUp:function(){h(this.getDialog());},validate:function(){var r=CKEDITOR.dialog.validate.integer(m.lang.common.validateNumberFailed);return r.apply(this);},setup:function(r,s){if(r==a){var t=s.getAttribute('hspace');if(t!=-1)this.setValue(t);}},commit:function(r,s){var u=this;if(r==a){if(u.getValue()||u.isChanged())s.setAttribute('hspace',u.getValue());}else if(r==c){var t=parseInt(u.getValue(),10);t=isNaN(t)?0:t;s.setAttribute('hspace',t);s.setStyle('margin-left',t+'px');s.setStyle('margin-right',t+'px');}else if(r==d){s.removeAttribute('hspace');s.removeStyle('margin-left');s.removeStyle('margin-right');}}},{type:'text',id:'txtVSpace',width:'60px',labelLayout:'horizontal',label:m.lang.image.vSpace,'default':'',onKeyUp:function(){h(this.getDialog());},validate:function(){var r=CKEDITOR.dialog.validate.integer(m.lang.common.validateNumberFailed);return r.apply(this);},setup:function(r,s){if(r==a)this.setValue(s.getAttribute('vspace'));},commit:function(r,s){var u=this;if(r==a){if(u.getValue()||u.isChanged())s.setAttribute('vspace',u.getValue());}else if(r==c){var t=parseInt(u.getValue(),10);t=isNaN(t)?0:t;s.setAttribute('vspace',u.getValue());s.setStyle('margin-top',t+'px');s.setStyle('margin-bottom',t+'px');}else if(r==d){s.removeAttribute('vspace');s.removeStyle('margin-top');s.removeStyle('margin-bottom');}}},{id:'cmbAlign',type:'select',labelLayout:'horizontal',widths:['35%','65%'],style:'width:90px',label:m.lang.image.align,'default':'',items:[[m.lang.common.notSet,''],[m.lang.image.alignLeft,'left'],[m.lang.image.alignAbsBottom,'absBottom'],[m.lang.image.alignAbsMiddle,'absMiddle'],[m.lang.image.alignBaseline,'baseline'],[m.lang.image.alignBottom,'bottom'],[m.lang.image.alignMiddle,'middle'],[m.lang.image.alignRight,'right'],[m.lang.image.alignTextTop,'textTop'],[m.lang.image.alignTop,'top']],onChange:function(){h(this.getDialog());},setup:function(r,s){if(r==a)this.setValue(s.getAttribute('align'));},commit:function(r,s){var t=this.getValue();if(r==a){if(t||this.isChanged())s.setAttribute('align',t);}else if(r==c){s.setAttribute('align',this.getValue());
if(t=='absMiddle'||t=='middle')s.setStyle('vertical-align','middle');else if(t=='top'||t=='textTop')s.setStyle('vertical-align','top');else s.removeStyle('vertical-align');if(t=='right'||t=='left')s.setStyle('styleFloat',t);else s.removeStyle('styleFloat');}else if(r==d)s.removeAttribute('align');}}]}]},{type:'vbox',height:'250px',children:[{type:'html',style:'width:95%;',html:'<div>'+CKEDITOR.tools.htmlEncode(m.lang.image.preview)+'<br>'+'<div id="ImagePreviewLoader" style="display:none"><div class="loading">&nbsp;</div></div>'+'<div id="ImagePreviewBox">'+'<a href="javascript:void(0)" target="_blank" onclick="return false;" id="previewLink">'+'<img id="previewImage" src="" alt="" /></a>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. '+'Maecenas feugiat consequat diam. Maecenas metus. Vivamus diam purus, cursus a, commodo non, facilisis vitae, '+'nulla. Aenean dictum lacinia tortor. Nunc iaculis, nibh non iaculis aliquam, orci felis euismod neque, sed ornare massa mauris sed velit. Nulla pretium mi et risus. Fusce mi pede, tempor id, cursus ac, ullamcorper nec, enim. Sed tortor. Curabitur molestie. Duis velit augue, condimentum at, ultrices a, luctus ut, orci. Donec pellentesque egestas eros. Integer cursus, augue in cursus faucibus, eros pede bibendum sem, in tempus tellus justo quis ligula. Etiam eget tortor. Vestibulum rutrum, est ut placerat elementum, lectus nisl aliquam velit, tempor aliquam eros nunc nonummy metus. In eros metus, gravida a, gravida sed, lobortis id, turpis. Ut ultrices, ipsum at venenatis fringilla, sem nulla lacinia tellus, eget aliquet turpis mauris non enim. Nam turpis. Suspendisse lacinia. Curabitur ac tortor ut ipsum egestas elementum. Nunc imperdiet gravida mauris.'+'</div>'+'</div>'}]}]}]},{id:'Link',label:m.lang.link.title,padding:0,elements:[{id:'txtUrl',type:'text',label:m.lang.image.url,style:'width: 100%','default':'',setup:function(r,s){if(r==b){var t=s.getAttribute('_cke_saved_href');if(!t)t=s.getAttribute('href');this.setValue(t);}},commit:function(r,s){var t=this;if(r==b)if(t.getValue()||t.isChanged()){s.setAttribute('_cke_saved_href',decodeURI(t.getValue()));s.setAttribute('href','javascript:void(0)/*'+CKEDITOR.tools.getNextNumber()+'*/');if(t.getValue()||!m.config.image_removeLinkByEmptyURL)t.getDialog().addLink=true;}}},{type:'button',id:'browse',filebrowser:'Link:txtUrl',style:'float:right',hidden:true,label:m.lang.common.browseServer},{id:'cmbTarget',type:'select',label:m.lang.link.target,'default':'',items:[[m.lang.link.targetNotSet,''],[m.lang.link.targetNew,'_blank'],[m.lang.link.targetTop,'_top'],[m.lang.link.targetSelf,'_self'],[m.lang.link.targetParent,'_parent']],setup:function(r,s){if(r==b)this.setValue(s.getAttribute('target'));
},commit:function(r,s){if(r==b)if(this.getValue()||this.isChanged())s.setAttribute('target',this.getValue());}}]},{id:'Upload',hidden:true,filebrowser:'uploadButton',label:m.lang.image.upload,elements:[{type:'file',id:'upload',label:m.lang.image.btnUpload,style:'height:40px',size:38},{type:'fileButton',id:'uploadButton',filebrowser:'info:txtUrl',label:m.lang.image.btnUpload,'for':['Upload','upload']}]},{id:'advanced',label:m.lang.common.advancedTab,elements:[{type:'hbox',widths:['50%','25%','25%'],children:[{type:'text',id:'linkId',label:m.lang.common.id,setup:function(r,s){if(r==a)this.setValue(s.getAttribute('id'));},commit:function(r,s){if(r==a)if(this.getValue()||this.isChanged())s.setAttribute('id',this.getValue());}},{id:'cmbLangDir',type:'select',style:'width : 100px;',label:m.lang.common.langDir,'default':'',items:[[m.lang.common.notSet,''],[m.lang.common.langDirLtr,'ltr'],[m.lang.common.langDirRtl,'rtl']],setup:function(r,s){if(r==a)this.setValue(s.getAttribute('dir'));},commit:function(r,s){if(r==a)if(this.getValue()||this.isChanged())s.setAttribute('dir',this.getValue());}},{type:'text',id:'txtLangCode',label:m.lang.common.langCode,'default':'',setup:function(r,s){if(r==a)this.setValue(s.getAttribute('lang'));},commit:function(r,s){if(r==a)if(this.getValue()||this.isChanged())s.setAttribute('lang',this.getValue());}}]},{type:'text',id:'txtGenLongDescr',label:m.lang.common.longDescr,setup:function(r,s){if(r==a)this.setValue(s.getAttribute('longDesc'));},commit:function(r,s){if(r==a)if(this.getValue()||this.isChanged())s.setAttribute('longDesc',this.getValue());}},{type:'hbox',widths:['50%','50%'],children:[{type:'text',id:'txtGenClass',label:m.lang.common.cssClass,'default':'',setup:function(r,s){if(r==a)this.setValue(s.getAttribute('class'));},commit:function(r,s){if(r==a)if(this.getValue()||this.isChanged())s.setAttribute('class',this.getValue());}},{type:'text',id:'txtGenTitle',label:m.lang.common.advisoryTitle,'default':'',onChange:function(){h(this.getDialog());},setup:function(r,s){if(r==a)this.setValue(s.getAttribute('title'));},commit:function(r,s){var t=this;if(r==a){if(t.getValue()||t.isChanged())s.setAttribute('title',t.getValue());}else if(r==c)s.setAttribute('title',t.getValue());else if(r==d)s.removeAttribute('title');}}]},{type:'text',id:'txtdlgGenStyle',label:m.lang.common.cssStyle,'default':'',setup:function(r,s){if(r==a){var t=s.getAttribute('style');if(!t&&s.$.style.cssText)t=s.$.style.cssText;this.setValue(t);var u=s.$.style.height,v=s.$.style.width,w=(u?u:'').match(e),x=(v?v:'').match(e);
this.attributesInStyle={height:!!w,width:!!x};}},commit:function(r,s){var v=this;if(r==a&&(v.getValue()||v.isChanged())){s.setAttribute('style',v.getValue());var t=s.getAttribute('height'),u=s.getAttribute('width');if(v.attributesInStyle&&v.attributesInStyle.height)if(t){if(t.match(e)[2]=='%')s.setStyle('height',t+'%');else s.setStyle('height',t+'px');}else s.removeStyle('height');if(v.attributesInStyle&&v.attributesInStyle.width)if(u){if(u.match(e)[2]=='%')s.setStyle('width',u+'%');else s.setStyle('width',u+'px');}else s.removeStyle('width');}}}]}]};};CKEDITOR.dialog.add('image',function(m){return l(m,'image');});CKEDITOR.dialog.add('imagebutton',function(m){return l(m,'imagebutton');});})();
