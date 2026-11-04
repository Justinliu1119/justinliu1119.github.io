(function(){
  function fit(){
    var wide = window.matchMedia('(min-width: 48em)').matches;
    document.querySelectorAll('.pub').forEach(function(pub){
      var m = pub.querySelector('.pub-media'), b = pub.querySelector('.pub-body');
      if(!m || !b) return;
      b.style.maxWidth = ''; b.style.minHeight = ''; b.classList.remove('pub-fit');
      if(!wide) return;
      var H = m.getBoundingClientRect().height;
      var full = b.getBoundingClientRect().width;
      if(b.scrollHeight > H + 1) return;            // text already taller than figure: leave at full width
      var lo = Math.max(240, full * 0.45), hi = full;
      for(var i=0;i<14;i++){                        // narrowest width whose height still fits in H
        var mid = (lo+hi)/2; b.style.maxWidth = mid+'px';
        if(b.scrollHeight > H + 1) lo = mid; else hi = mid;
      }
      b.style.maxWidth = Math.ceil(hi)+'px';
      b.style.minHeight = H+'px'; b.classList.add('pub-fit');
    });
  }
  var t; window.addEventListener('resize', function(){ clearTimeout(t); t = setTimeout(fit, 120); });
  window.addEventListener('load', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
})();
