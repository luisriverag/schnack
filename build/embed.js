!function(){"use strict";function n(n,t){return t=t||{},new Promise((function(e,a){var s=new XMLHttpRequest,i=[],o=[],c={},l=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:l,headers:{keys:function(){return i},entries:function(){return o},get:function(n){return c[n.toLowerCase()]},has:function(n){return n.toLowerCase()in c}}}};for(var r in s.open(t.method||"get",n,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(n,t,e){i.push(t=t.toLowerCase()),o.push([t,e]),c[t]=c[t]?c[t]+","+e:e})),e(l())},s.onerror=a,s.withCredentials="include"==t.credentials,t.headers)s.setRequestHeader(r,t.headers[r]);s.send(t.body||null)}))}function t(n){var t,e="";return e+='<ul class="schnack-comments">\n    ',n.comments.forEach((function(a){e+='\n        <li id="comment-'+(null==(t=a.id)?"":t)+'" data-id="'+(null==(t=a.id)?"":t)+'" class="schnack-comment',a.approved||a.trusted||(e+=" schnack-not-approved"),e+='">\n            <div class="schnack-comment-inner">\n                <div class="schnack-dateline">\n                    <span class="schnack-author">',a.author_url&&(e+='<a href="'+(null==(t=a.author_url)?"":t)+'" target="_blank">'),e+=null==(t=a.display_name||a.name)?"":t,a.author_url&&(e+="</a>"),e+="</span>\n                    ",n.user&&n.user.admin&&!a.trusted&&["trust","block"].forEach((function(n){e+='\n                    <button class="schnack-action" data-target="'+(null==(t=a.user_id)?"":t)+'" data-class="user" data-action="'+(null==(t=n)?"":t)+'"><i class="icon schnack-icon-'+(null==(t=n)?"":t)+'"></i> <span>'+(null==(t=n)?"":t)+"</span></button>\n                    "})),e+='\n                    <span class="schnack-date"><a href="#comment-'+(null==(t=a.id)?"":t)+'">'+(null==(t=a.created_at_s)?"":t)+'</a></span>\n                </div>\n                <blockquote class="schnack-body">\n                    '+(null==(t=a.comment)?"":t)+"\n                </blockquote>\n                ",a.approved||a.trusted?n.user&&(e+='\n                <button class="schnack-reply" data-reply-to="'+(null==(t=a.id)?"":t)+'">'+(null==(t=n.partials.Reply)?"":t)+"</button>\n                "):(e+='\n                <div class="schnack-awaiting-approval">\n                    ',n.user&&n.user.admin&&["approve","reject"].forEach((function(n){e+='\n                    <button class="schnack-action" data-target="'+(null==(t=a.id)?"":t)+'" data-class="comment" data-action="'+(null==(t=n)?"":t)+'"><i class="icon schnack-icon-'+(null==(t=n)?"":t)+'"></i> <span>'+(null==(t=n)?"":t)+"</span></button>\n                    "})),e+="\n                    "+(null==(t=n.user.admin?n.partials.AdminApproval:n.partials.WaitingForApproval)?"":t)+"\n                </div>\n                "),e+="\n            </div>\n            ",n.replies[a.id]&&(n.comments=n.replies[a.id],e+="\n            "+(null==(t=n.comments_tpl(n))?"":t)+"\n            "),e+="\n        </li>\n    "})),e+="\n</ul>\n"}var e=function(n){return document.querySelector(n)},a=function(n){this.options=n,this.options.endpoint=n.host+"/comments/"+n.slug,this.initialized=!1,this.firstLoad=!0;var t=new URL(n.host);"localhost"!==t.hostname&&(document.domain=t.hostname.split(".").slice(1).join(".")),this.refresh()};a.prototype.refresh=function(){var a=this,s=this.options,i=s.target,o=s.slug,c=s.host,l=s.endpoint,r=s.partials;n(l,{credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(n){return n.json()})).then((function(s){s.comments_tpl=t,s.partials=r,e(i).innerHTML=function(n){var t,e="";n.user?(e+="\n    ",n.user.admin&&(e+='\n    <div class="schnack-settings">\n        <button class="schnack-action" data-target="notification" data-class="setting" data-action="true">'+(null==(t=n.partials.UnMute)?"":t)+'</button>\n        <button class="schnack-action" data-target="notification" data-class="setting" data-action="false">'+(null==(t=n.partials.Mute)?"":t)+"</button>\n    </div>\n    "),e+='\n<div class="schnack-login-status">\n    '+(null==(t=n.partials.LoginStatus.replace("%USER%",n.user.name))?"":t)+'\n</div>\n<div class="schnack-above">\n    <div class="schnack-form">\n        <textarea class="schnack-body" placeholder="'+(null==(t=n.partials.PostComment)?"":t)+'"></textarea>\n        <blockquote class="schnack-body" style="display:none"></blockquote>\n        <br>\n        <button class="schnack-preview">'+(null==(t=n.partials.Preview)?"":t)+'</button>\n        <button style="display:none" class="schnack-write">'+(null==(t=n.partials.Edit)?"":t)+'</button>&nbsp;\n        <button class="schnack-send-comment schnack-button">'+(null==(t=n.partials.SendComment)?"":t)+'</button>&nbsp;\n        <button class="schnack-cancel-reply" style="display:none">'+(null==(t=n.partials.Cancel)?"":t)+"</button>\n    </div>\n</div>\n"):(e+='\n<div class="schnack-signin">\n',n.auth.length?(e+="\n"+(null==(t=n.partials.SignInVia)?"":t)+"<br>\n",n.auth.forEach((function(a,s){e+="\n    "+(null==(t=s?n.partials.Or:"")?"":t)+'<button class="schnack-signin-'+(null==(t=a.id)?"":t)+'"><i class="icon schnack-icon-'+(null==(t=a.id)?"":t)+'"></i> '+(null==(t=a.name)?"":t)+"</button>\n"})),e+="\n"):e+="\n"+(null==(t=n.partials.NoAuthProviders)?"":t)+"\n",e+="\n"),e+="\n</div>\n";var a=[];return n.replies={},n.comments.forEach((function(t){t.reply_to?(n.replies[t.reply_to]||(n.replies[t.reply_to]=[]),n.replies[t.reply_to].push(t)):a.push(t)})),n.comments=a,e+="\n"+(null==(t=n.comments_tpl(n))?"":t)+'\n<style type="text/css">\n.schnack-action > * { pointer-events: none; }\n</style>\n'}(s);var u=e(i+" div.schnack-above"),d=e(i+" div.schnack-form"),h=e(i+" textarea.schnack-body"),p=e(i+" .schnack-form blockquote.schnack-body"),m=window.localStorage.getItem("schnack-draft-"+o);m&&h&&(h.value=m);var f,v=e(i+" .schnack-button"),k=e(i+" .schnack-preview"),y=e(i+" .schnack-write"),g=e(i+" .schnack-cancel-reply"),b=(f=i+" .schnack-reply",document.querySelectorAll(f));if(v&&(v.addEventListener("click",(function(t){var e=h.value;n(l,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:e,replyTo:d.dataset.reply})}).then((function(n){return n.json()})).then((function(n){h.value="",window.localStorage.setItem("schnack-draft-"+o,h.value),n.id&&(a.firstLoad=!0,window.location.hash="#comment-"+n.id),a.refresh()}))})),k.addEventListener("click",(function(t){var e=h.value;h.style.display="none",k.style.display="none",p.style.display="block",y.style.display="inline",n(c+"/markdown",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:e})}).then((function(n){return n.json()})).then((function(n){p.innerHTML=n.html}))})),y.addEventListener("click",(function(n){h.style.display="inline",k.style.display="inline",p.style.display="none",y.style.display="none"})),h.addEventListener("keyup",(function(){window.localStorage.setItem("schnack-draft-"+o,h.value)})),b.forEach((function(n){n.addEventListener("click",(function(){d.dataset.reply=n.dataset.replyTo,g.style.display="inline-block",n.parentElement.appendChild(d)}))})),g.addEventListener("click",(function(){u.appendChild(d),delete d.dataset.reply,g.style.display="none"}))),s.user){var w=e("a.schnack-signout");w&&w.addEventListener("click",(function(t){t.preventDefault(),n(c+"/signout",{credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(){return a.refresh()}))}))}else s.auth.forEach((function(t){var s=e(i+" .schnack-signin-"+t.id);s&&s.addEventListener("click",(function(e){var s=function(n){void 0===n&&(n="");var e=window.open(c+"/auth/"+t.id+(n?"/d/"+n:""),t.name+" Sign-In","resizable,scrollbars,status,width=600,height=500");window.__schnack_wait_for_oauth=function(){e.close(),a.refresh()}};if("mastodon"===t.id){var i=window.prompt("Please enter the domain name of the Mastodon instance you want to sign in with:","mastodon.social");n("https://"+i+"/api/v1/instance").then((function(n){return n.json()})).then((function(n){n.uri===i?s(i):window.alert('We could not find a Mastodon instance at "'+i+'". Please try again.')})).catch((function(n){console.error(n),window.alert('We could not find a Mastodon instance at "'+i+'". Please try again.')}))}else s()}))}));if(s.user&&s.user.admin){if(!a.initialized){var S=document.createElement("script");S.setAttribute("src",c+"/push.js"),document.head.appendChild(S),a.initialized=!0}var E=function(t){var e=t.target.dataset;n(c+"/"+e.class+"/"+e.target+"/"+e.action,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:""}).then((function(){return a.refresh()}))};document.querySelectorAll(".schnack-action").forEach((function(n){n.addEventListener("click",E)}))}if(a.firstLoad&&window.location.hash.match(/^#comment-\d+$/)){var L=document.querySelector(window.location.hash);L.scrollIntoView(),L.classList.add("schnack-highlight"),a.firstLoad=!1}}))},function(){var n=document.querySelector("script[data-schnack-target]");if(!n)return console.warn("schnack script tag needs some data attributes");var t=n.dataset,e=t.schnackSlug,s=new URL(n.getAttribute("src")),i=s.protocol+"//"+s.host,o={Preview:"Preview",Edit:"Edit",SendComment:"Send comment",Cancel:"Cancel",Or:"Or",Mute:"mute notifications",UnMute:"unmute",PostComment:"Post a comment. Markdown is supported!",AdminApproval:"This comment is still waiting for your approval",WaitingForApproval:"Your comment is still waiting for approval by the site owner",SignInVia:"To post a comment you need to sign in via",Reply:"<i class='icon schnack-icon-reply'></i> reply",LoginStatus:"(signed in as <span class='schnack-user'>@%USER%</span> :: <a class='schnack-signout' href='#'>sign out</a>)",NoAuthProviders:"You haven't configured any auth providers, yet."};Object.keys(o).forEach((function(t){n.dataset["schnackPartial"+t]&&(o[t]=n.dataset["schnackPartial"+t])})),new a({target:t.schnackTarget,slug:e,host:i,partials:o})}()}();
