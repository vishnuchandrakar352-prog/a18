(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var C=['#EEF0E8','#D9F27A','#9FD13C','#4B8A1E'],N=['none','light','medium','max'];
var A=[['Walking','Light cushion, everyday comfort','Walking spreads pressure evenly. A light, all-over cushion with a little extra at the heel is comfortable for long days on your feet.',[1,1,1,2]],
['Running','Zoned light cushion, thin top','Runners land on the heel or ball, then push off from the toes. Look for targeted cushioning there, a snug arch band and a thin, breathable top.',[1,2,0,2]],
['Hiking','Medium to maximum cushion','Long climbs and descents load the heel and ball hard. A thicker, wool-rich sock with cushion under the whole foot protects against bruising and blisters.',[2,3,2,3]],
['Standing all day','Medium cushion under the foot','Standing keeps weight on the heel and ball for hours. Medium cushioning under the sole, with light support at the arch, eases tired feet.',[1,2,1,3]],
['Gym &amp; court','Targeted cushion, firm arch','Quick stops and side-to-side moves load the ball of the foot. Choose cushioning under the forefoot and heel and a firm arch band to stop the sock twisting.',[1,3,1,2]],
['Office','Thin, little or no cushion','Dress shoes fit closely, so thin socks with no cushioning, or a whisper of padding at the heel, keep the shoe fitting as it should.',[0,0,0,1]]];
function zn(i){var a=A[i],Z=['toe','ball','arch','heel'];$('zn-t').innerHTML=a[1];$('zn-k').innerHTML=a[0];$('zn-d').textContent=a[2];Z.forEach(function(z,k){$('z-'+z).style.fill=C[a[3][k]];});$('zn-l').innerHTML=Z.map(function(z,k){return '<div><dt>'+z+'</dt><dd>'+N[a[3][k]]+'</dd></div>';}).join('');var t=$('zn-t');t.style.animation='none';t.offsetHeight;t.style.animation='';}
function grp(id,fn){var bs=[].slice.call(document.querySelectorAll('#'+id+' button'));bs.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){bs.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});fn(+b.dataset.v);});});}
if($('zn-a')){grp('zn-a',zn);zn(0);}
var F={s:1,t:2,k:0},room=[0,1,2],need=[0,0.6,1.2,2],kind=[0,0.3,0.8,-0.4];
function ft(){var space=room[F.s]+kind[F.k],sc=space-need[F.t],pos=Math.max(5,Math.min(95,50+sc*22));$('ft-m').style.left='calc('+pos+'% - 3px)';var v,n;
 if(sc<-0.7){v='Too tight';n='This sock will crowd the shoe. Expect pressure on the toes and hot spots. Choose a thinner sock or a roomier shoe.';}else if(sc>1.1){v='Too loose';n='The foot may slide and rub. A thicker or more cushioned sock, or lacing a little tighter, will help it sit securely.';}else{v='Just right';n='A good pairing: enough room for the sock without letting the foot slide.';}
 if(F.k===3&&F.t>=2)n+=' Dress shoes are made for thin socks, so heavy ones rarely fit well.';if(F.k===2&&F.t<=1)n+=' Hiking boots usually feel best with medium or heavy socks.';$('ft-v').textContent=v;$('ft-n').textContent=n;
 var th=6+F.t*5,gap=Math.max(0,room[F.s]*6+kind[F.k]*6+4-F.t*3),top=104-th-gap-6;var sh='M40 160c0-40 30-'+(64+gap+th)+' 80-'+(64+gap+th)+'h100c40 0 60 24 60 '+(56+gap/2)+'v12H40z';$('ft-shoe').setAttribute('d',sh);
 $('ft-sock').setAttribute('d','M'+(60-th)+' 154c0-'+(30+th)+' '+(26+th)+'-'+(52+th)+' '+(60+th/2)+'-'+(52+th)+'h100c'+(32+th)+' 0 '+(48+th)+' '+(20+th)+' '+(48+th)+' '+(44+th/2)+'v8z');}
if($('ft-s')){grp('ft-s',function(v){F.s=v;ft();});grp('ft-t',function(v){F.t=v;ft();});grp('ft-k',function(v){F.k=v;ft();});ft();}
})();
