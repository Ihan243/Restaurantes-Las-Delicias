# 🍽️ Restaurante Las Delicias — Sitio Web Oficial

Sitio web oficial desarrollado para **Restaurante Las Delicias**, ubicado en San Juan de Tibás, San José, Costa Rica. Diseñado con una identidad visual inspirada en la gastronomía tradicional costarricense, calidez de hogar y comales de leña.

---

## 📂 Estructura del Proyecto

```
Rest Las delicias/
├── index.html          # Página principal (Inicio, Nuestra Historia, Especiales, Galería, Opiniones)
├── menu.html           # Menú típico completo (Desayunos, Casados, Carnes, Bebidas naturales, Postres)
├── buscador.html       # Buscador interactivo en vivo, filtros dietéticos, rangos de precio y modal de pedido
├── reservas.html       # Formulario interactivo de reservas y pedidos especiales con WhatsApp directo
├── README.md           # Documentación del proyecto
└── stitch_restaurante_las_delicias_website/ # Archivos originales de diseño y tokens (DESIGN.md)
```

---

## ✨ Características y Funcionalidades

### 1. **Página de Inicio (`index.html`)**
- **Hero Editorial:** Fotografía de platillos típicos en cazuela de barro, métricas oficiales de Google (4.2★ con más de 1,200 opiniones) y horarios de atención.
- **Acceso Rápido:** Botones directos para llamadas telefónicas (`+506 2236 9755`) y WhatsApp.
- **Especialidades de la Casa:** Casado Tradicional, Olla de Carne Criolla, Gallo Pinto Especial y Chifrijo.
- **Nuestra Historia:** Reseña familiar, compromiso artesanal sin preservantes y ambiente familiar.
- **Ubicación & Referencia Tica:** *Donde La Chinita, 25m al sur de Los Antojitos*, con enlaces directos a Google Maps y Waze.
- **Galería Típica:** Exhibición fotográfica de alta calidad de los platillos insignia.
- **Opiniones Verificadas:** Reseñas reales de clientes y enlace a Google Reviews.

### 2. **Menú Típico & Especialidades (`menu.html`)**
- **Pestañas de Filtrado Dinámico:** Todo el Menú, Desayunos Típicos, Casados & Almuerzos, Especialidades & Carnes, Bebidas & Postres.
- **Precios Transparentes:** Expresados en Colones Costarricenses (₡ CRC) con 13% IVA y 10% de servicio incluidos.
- **Botón de Descarga:** Opción de descarga de menú oficial en PDF.
- **Pedidos Directos:** Cada platillo incluye su botón con enlace a WhatsApp preconfigurado con el nombre del plato y su precio.

### 3. **Buscador & Especiales del Día (`buscador.html`)**
- **Disponibilidad en Tiempo Real:** Indicador interactivo de cocina abierta en Tibás.
- **Buscador Inteligente:** Búsqueda en vivo con sugerencias automáticas de autocompletado.
- **Filtros por Categoría:** Casados, Desayunos, Almuerzos Ejecutivos, Carnes, Sopas, Antojos y Bebidas.
- **Sellos Dietéticos:** Filtros instantáneos para *Opciones Vegetarianas*, *Sin Gluten*, *Especial del Día* y *Más Populares*.
- **Filtro de Precios:** Rango de precios (< ₡5,000, ₡5,000–₡7,500, > ₡7,500).
- **Modal de Personalización:** Permite elegir acompañamientos (tortillas caseras, picadillos, extra maduro con natilla, salsa Lizano aparte) e instrucciones especiales para cocina.

### 4. **Reservas & Contacto (`reservas.html`)**
- **Formulario Completo:** Campos para nombre, teléfono celular, correo, fecha mínima validada al día de hoy, hora de visita y número de personas.
- **Selector de Ocasión:** Familiar, Cumpleaños, Almuerzo Empresarial, Pedido Anticipado u Otro.
- **Integración con WhatsApp:** El enlace de WhatsApp se actualiza dinámicamente en tiempo real con los datos que el usuario ingresa en el formulario.
- **Información de Facilidades:** Parqueo vigilado, acceso universal, ambiente climatizado y wifi gratuito.

### 5. **Navegación Móvil Adaptativa**
- Barra de navegación totalmente responsive con menú deslizable lateral (drawer) para dispositivos móviles y tabletas.
- Botón flotante siempre visible de WhatsApp en todas las páginas.

---

## 🚀 Cómo Visualizar el Sitio Web

No requiere ninguna instalación o compilación previa. Puedes abrir cualquiera de las páginas directamente:

1. **Doble clic** en `index.html` en el explorador de archivos para abrirlo en tu navegador predeterminado (Chrome, Edge, Firefox, Safari).
2. O ejecuta un servidor local estático si lo deseas:
   - Con extensiones como **Live Server** en VS Code.
   - O desplegando los archivos en cualquier servicio de hosting (GitHub Pages, Netlify, Vercel, Firebase, etc.).

---

## 🎨 Paleta de Colores y Tipografía (Design System)

Basado en el diseño `Sabor Tradicional`:
- **Terracotta Vinotinto (`#6C0C28` / `#8B263E`):** Color primario para identidad, títulos y llamados a la acción.
- **Saffron Amber / Caramelo (`#6C4300` / `#F59E0B`):** Destacados, botones de WhatsApp y estrellas.
- **Warm Cream (`#F8F9FF` / `#EFF4FF`):** Superficies y fondos cálidos.
- **Tipografías:** `Playfair Display` (títulos y romance culinario) y `Plus Jakarta Sans` (lectura y controles).
