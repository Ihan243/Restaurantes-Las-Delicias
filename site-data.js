(() => {
  const DATA = {
    timezone: 'America/Costa_Rica',
    hours: [
      { label: 'Lunes a sábado', days: [1,2,3,4,5,6], open: '07:00', close: '19:00' },
      { label: 'Domingo', days: [0], open: '06:00', close: '18:00' }
    ],
    calls: '+50622369755',
    whatsapp: '50663572479',
    facebook: 'https://www.facebook.com/profile.php?id=61593905323118&locale=es_LA',
    instagram: 'https://www.instagram.com/restlasdeliciastibas/',
    mapsQuery: 'Restaurante Las Delicias San Juan de Tibás Costa Rica'
  };
  const parts = (date) => Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
    timeZone: DATA.timezone, year: 'numeric', month: '2-digit', day: '2-digit',
    weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
  }).formatToParts(date).map(({type,value}) => [type,value]));
  const dayIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const clock = (hhmm) => {
    const [h,m] = hhmm.split(':').map(Number);
    return new Intl.DateTimeFormat('es-CR', {timeZone:DATA.timezone,hour:'numeric',minute:'2-digit',hour12:true}).format(new Date(Date.UTC(2026,0,1,h+6,m)));
  };
  const updateStatus = () => {
    const now = parts(new Date());
    const day = dayIndex[now.weekday];
    const minutes = Number(now.hour) * 60 + Number(now.minute);
    const today = DATA.hours.find(h => h.days.includes(day));
    const opening = Number(today.open.slice(0,2))*60 + Number(today.open.slice(3));
    const closing = Number(today.close.slice(0,2))*60 + Number(today.close.slice(3));
    let text;
    if (minutes >= opening && minutes < closing) text = `Abierto ahora, cerramos a las ${clock(today.close)}`;
    else {
      let next = today, lead = 'hoy';
      if (minutes >= closing) {
        for (let offset=1; offset<=7; offset++) {
          const candidate = DATA.hours.find(h => h.days.includes((day+offset)%7));
          if (candidate) { next=candidate; lead=offset===1?'mañana':new Intl.DateTimeFormat('es-CR',{timeZone:DATA.timezone,weekday:'long'}).format(new Date(Date.UTC(Number(now.year),Number(now.month)-1,Number(now.day)+offset,18))); break; }
        }
      }
      text = `Cerrado, abrimos ${lead} a las ${clock(next.open)}`;
    }
    document.querySelectorAll('[data-open-status]').forEach(el => { el.textContent=text; });
  };
  const renderFooterHours = () => document.querySelectorAll('footer [data-hours-list]').forEach(list => {
    list.innerHTML = DATA.hours.map(h => `<li class="flex justify-between items-center py-0.5"><span class="font-semibold text-on-surface">${h.label}:</span><span>${clock(h.open)} – ${clock(h.close)}</span></li>`).join('');
  });
  const updateCommon = () => {
    document.querySelectorAll('[data-current-year]').forEach(el => el.textContent = new Date().getFullYear());
    document.querySelectorAll('a[data-site-phone]').forEach(a => { a.href=`tel:${DATA.calls}`; });
    document.querySelectorAll('a[data-site-whatsapp]').forEach(a => { if (!a.href.includes('text=')) a.href=`https://wa.me/${DATA.whatsapp}`; });
    document.querySelectorAll('a[data-site-maps]').forEach(a => a.href=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DATA.mapsQuery)}`);
    document.querySelectorAll('a[data-site-waze]').forEach(a => a.href=`https://waze.com/ul?q=${encodeURIComponent(DATA.mapsQuery)}`);
    renderFooterHours(); updateStatus(); setInterval(updateStatus, 60000);
    document.querySelectorAll('img').forEach(img => img.addEventListener('error', () => { img.style.display='none'; img.parentElement?.classList.add('image-fallback'); }, {once:true}));
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', updateCommon, {once:true}); else updateCommon();
  window.RESTAURANTE_DATA = DATA;
})();
