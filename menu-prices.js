(() => {
  const MENU_PRICES = {"index-casado-tradicional":{"name":"Casado Tradicional","price":4850},"index-olla-de-carne-criolla":{"name":"Olla de Carne Criolla","price":5900},"index-gallo-pinto-especial":{"name":"Gallo Pinto Especial","price":3800},"index-chifrijo-de-la-casa":{"name":"Chifrijo de la Casa","price":4600},"menu-gallo-pinto-especial-las-delicias":{"name":"Gallo Pinto Especial Las Delicias","price":5200},"menu-desayuno-tico-campesino":{"name":"Desayuno Tico Campesino","price":5000},"menu-tortilla-alinada-con-carne-mechada":{"name":"Tortilla Aliñada con Carne Mechada","price":5400},"menu-casado-con-bistec-encebollado":{"name":"Casado con Bistec Encebollado","price":6200},"menu-casado-con-filete-de-pescado":{"name":"Casado con Filete de Pescado","price":6800},"menu-casado-con-chuleta-ahumada":{"name":"Casado con Chuleta Ahumada","price":6400},"menu-casado-vegetariano":{"name":"Casado Vegetariano","price":5500},"menu-olla-de-carne-tradicional":{"name":"Olla de Carne Tradicional","price":7500},"menu-chifrijo-abundante":{"name":"Chifrijo Abundante","price":6500},"menu-arroz-con-pollo-criollo":{"name":"Arroz con Pollo Criollo","price":5800},"menu-fajitas-mixtas":{"name":"Fajitas Mixtas","price":8500},"menu-chancletas-caseras":{"name":"Chancletas Caseras","price":2800},"menu-arroz-con-leche":{"name":"Arroz con Leche","price":2500},"buscador-casado-con-carne-mechada":{"name":"Casado con Carne Mechada","price":5600},"buscador-chifrijo-las-delicias":{"name":"Chifrijo Las Delicias","price":4800},"buscador-gallo-pinto-especial":{"name":"Gallo Pinto Especial","price":4200},"buscador-casado-vegetariano":{"name":"Casado Vegetariano","price":4900},"buscador-ejecutivo-bistec-encebollado":{"name":"Ejecutivo Bistec Encebollado","price":4500},"buscador-sopa-negra-tradicional":{"name":"Sopa Negra Tradicional","price":3900},"buscador-churrasco-tipico":{"name":"Churrasco Típico","price":8900},"buscador-cafe-chorreado":{"name":"Café Chorreado","price":1800},"buscador-pan-casero-con-natilla":{"name":"Pan Casero con Natilla","price":2600},"index-casado-tipico-campesino":{"name":"Casado Típico Campesino","price":5200},"buscador-olla-de-carne-criolla":{"name":"Olla de Carne Criolla","price":6200}};
  const format = n => `₡${Number(n).toLocaleString('es-CR')}`;
  const bind = () => {
    document.querySelectorAll('[data-menu-price-key]').forEach(el => {
      const key=el.dataset.menuPriceKey, item=MENU_PRICES[key]; if(!item) return;
      if(el.tagName === 'A') el.href=`https://wa.me/50663572479?text=${encodeURIComponent(`Quiero pedir ${item.name} (${format(item.price)})`)}`;
      else el.textContent=format(item.price);
      let node=el, card=null;
      while(node && node!==document.body) {
        if(node.querySelector?.('h3, p.font-headline-sm') && /₡\s*[\d,]+/.test(node.textContent)) { card=node; break; }
        node=node.parentElement;
      }
      if(card) {
        const walker=document.createTreeWalker(card,NodeFilter.SHOW_TEXT); const texts=[];
        while(walker.nextNode()) if(/₡\s*[\d,]+/.test(walker.currentNode.nodeValue)) texts.push(walker.currentNode);
        if(texts.length) texts[0].nodeValue=texts[0].nodeValue.replace(/₡\s*[\d,]+/,format(item.price));
        card.querySelectorAll('[data-price]').forEach(priceEl=>priceEl.dataset.price=item.price);
        card.querySelectorAll('[onclick*="quickViewDish"]').forEach(button=>button.setAttribute('onclick',button.getAttribute('onclick').replace(/(quickViewDish\([^,]+,\s*')[0-9]+/,`$1${item.price}`)));
      }
    });
    const featured=Object.entries(MENU_PRICES).filter(([key])=>key.startsWith('index-')).map(([,item])=>item.price);
    const min=Math.min(...featured),max=Math.max(...featured);
    document.querySelectorAll('[data-featured-price-range]').forEach(el=>el.textContent=`Platos destacados: ${format(min)} – ${format(max)}`);
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',bind,{once:true}); else bind();
})();
