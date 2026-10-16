/* Fills the grid with image slots. Put images in assets/ as gallery1-1.jpeg ... (page 1)
   and gallery2-1.jpeg ... (page 2). Change COUNT for more or fewer images. */
(function(){
  var grid=document.getElementById('grid');if(!grid)return;
  var page=grid.getAttribute('data-page'),COUNT=+(grid.getAttribute('data-count')||8);
  for(var i=1;i<=COUNT;i++){
    var name='assets/gallery'+page+'-'+i+'.jpeg';
    var s=document.createElement('div');s.className='shot glass';s.setAttribute('data-name','Add image: '+name);
    var im=new Image();im.alt='';im.loading='lazy';im.src=name;
    (function(box){im.onerror=function(){box.classList.add('empty')}})(s);
    s.appendChild(im);grid.appendChild(s);
  }
})();
