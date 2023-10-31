function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clockDisplay').innerText = time;
  }
  
  // Atualiza o relógio a cada segundo
  setInterval(updateClock, 1000);
  
  // Inicia o relógio ao carregar a página
  updateClock();
  