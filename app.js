
const WA="243839580341";
const f=document.getElementById("resa");
if(f){
  f.addEventListener("submit",function(e){
    e.preventDefault();
    const v=n=> (f.elements[n]?.value.trim()||"");
    if(!v("nom")||!v("service")||!v("jour")){ alert("Merci de remplir nom, service et jour."); return; }
    const detail=v("detail")? "\nDétail: "+v("detail"):"";
    const msg=`Bonjour Salon Éclat, je voudrais réserver :
- Service: ${v("service")}
- Jour: ${v("jour")}${v("heure")?"\n- Heure: "+v("heure"):""}
- Nom: ${v("nom")}${detail}

Merci de me confirmer l'heure exacte.`;
    const url="https://wa.me/"+WA+"?text="+encodeURIComponent(msg);
    window.open(url,"_blank","noopener");
  });
}
// Active nav
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.pathname===location.pathname || (location.pathname.endsWith('/') && a.getAttribute('href')==='index.html')) a.setAttribute('aria-current','page');
});
