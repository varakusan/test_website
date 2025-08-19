document.addEventListener('mousemove', (e) => {
  document.querySelectorAll('.icon').forEach(icon => {
    const speed = icon.getAttribute('data-speed') || 5;
    const x = (window.innerWidth / 2 - e.pageX) / speed;
    const y = (window.innerHeight / 2 - e.pageY) / speed;
    icon.style.transform = `translate(${x}px, ${y}px)`;
  });
});
