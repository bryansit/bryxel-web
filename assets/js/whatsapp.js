/* ═══════════════════════════════════════
   BRYXEL TECHNOLOGY — whatsapp.js
   Botón flotante de WhatsApp + mensajes
   ═══════════════════════════════════════ */

const WA_NUMBER = '51903014017'; // ← Cambia por tu número real

/* ── BOTÓN FLOTANTE ── */
(function createFloatingBtn() {
  const btn = document.createElement('a');
  btn.id        = 'wa-float';
  btn.href      = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, estoy interesado en contratar su servicio. ¿Podrían enviarme precios y planes?')}`;
  btn.target    = '_blank';
  btn.rel       = 'noopener';
  btn.title     = 'Escríbenos por WhatsApp';
  btn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
  <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.5 0 .19 5.31.19 11.85c0 2.09.55 4.13 1.59 5.93L0 24l6.38-1.67a11.85 11.85 0 0 0 5.66 1.44h.01c6.54 0 11.85-5.31 11.85-11.85 0-3.17-1.23-6.15-3.38-8.44zm-8.48 18.19a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.79 9.79 0 0 1-1.5-5.22c0-5.41 4.4-9.81 9.81-9.81 2.62 0 5.08 1.02 6.93 2.87a9.75 9.75 0 0 1 2.88 6.94c0 5.41-4.4 9.81-9.8 9.81zm5.68-7.33c-.31-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.68.15-.2.3-.78.99-.96 1.19-.18.2-.35.22-.66.08-.31-.15-1.3-.48-2.47-1.53-.91-.81-1.52-1.81-1.7-2.11-.18-.3-.02-.46.14-.61.14-.14.31-.35.46-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.65-.94-2.26-.25-.6-.51-.52-.68-.53h-.58c-.2 0-.52.07-.79.37-.27.3-1.03 1.03-1.03 2.51s1.06 2.91 1.21 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.29.49 1.73.63.73.23 1.4.2 1.92.12.58-.09 1.8-.73 2.05-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.58-.35z"/>
</svg>
  
    <span class="wa-tooltip">¡Escríbenos!</span>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #wa-float {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      width: 58px;
      height: 58px;
      background: linear-gradient(135deg, #25d267, #00c9a7);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(37,210,103,0.45);
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
      animation: wa-bounce 3s ease-in-out infinite;
    }
    #wa-float:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 28px rgba(37,210,103,0.6);
    }
    @keyframes wa-bounce {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(-6px); }
    }
    .wa-tooltip {
      position: absolute;
      right: 68px;
      background: #1a1a2e;
      color: #fff;
      font-size: 0.78rem;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: 8px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transform: translateX(8px);
      transition: opacity 0.2s, transform 0.2s;
      border: 1px solid rgba(79,142,247,0.2);
    }
    #wa-float:hover .wa-tooltip {
      opacity: 1;
      transform: translateX(0);
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(btn);
})();

/* ── FUNCIÓN GLOBAL: abrir WhatsApp con mensaje personalizado ── */
window.abrirWhatsApp = function(mensaje) {
  const texto = mensaje || 'Hola, estoy interesado en contratar su servicio. ¿Podrían enviarme precios y planes?';
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank');
};


