const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('video').forEach((video) => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach((other) => {
      if (other !== video) other.pause();
    });
  });
});

const bibtexButton = document.querySelector('.copy-bibtex-btn');
if (bibtexButton) {
  bibtexButton.addEventListener('click', async () => {
    const code = document.getElementById('bibtex-code');
    const copyText = bibtexButton.querySelector('.copy-text');
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code.textContent);
    } catch {
      return;
    }
    bibtexButton.classList.add('copied');
    copyText.textContent = 'Copied';
    setTimeout(() => {
      bibtexButton.classList.remove('copied');
      copyText.textContent = 'Copy';
    }, 2000);
  });
}
