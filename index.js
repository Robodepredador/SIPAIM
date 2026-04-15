const tabs = document.querySelectorAll('.tab-btn');
const dayPanels = document.querySelectorAll('.day-content');

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    const dayId = tab.dataset.day;

    tabs.forEach((item) => item.classList.remove('active'));
    dayPanels.forEach((panel) => panel.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(dayId).classList.add('active');
  });
}

document.querySelectorAll('.agenda-header').forEach((header) => {
  header.addEventListener('click', () => {
    const item = header.closest('.agenda-item');
    item.classList.toggle('open');
  });
});

const selected = {
  nv: false,
  acm: false,
};

const summaryText = document.getElementById('sum-text');
const confirmButton = document.getElementById('btn-reg');

function updateWorkshopSummary() {
  const options = [];

  if (selected.nv) options.push('NVIDIA DLI');
  if (selected.acm) options.push('ACM SIGGRAPH Perú');

  if (options.length === 0) {
    summaryText.textContent = 'No hay workshops seleccionados.';
    confirmButton.disabled = true;
    confirmButton.classList.remove('enabled');
    return;
  }

  summaryText.innerHTML = `Seleccionado: <strong>${options.join(' + ')}</strong>`;
  confirmButton.disabled = false;
  confirmButton.classList.add('enabled');
}

document.querySelectorAll('.ws-box').forEach((card) => {
  const toggle = () => {
    const id = card.dataset.workshop;
    selected[id] = !selected[id];
    card.classList.toggle('selected');
    updateWorkshopSummary();
  };

  card.addEventListener('click', toggle);
  card.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  });
});

confirmButton.addEventListener('click', () => {
  alert('Selección registrada para revisión del comité organizador.');
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
