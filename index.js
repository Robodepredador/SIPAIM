const tabs = document.querySelectorAll('.tab-btn');
const days = document.querySelectorAll('.day-content');

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    const dayId = tab.dataset.day;

    tabs.forEach((button) => button.classList.remove('active'));
    days.forEach((panel) => panel.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(dayId).classList.add('active');
  });
}

const selectedWorkshops = {
  nv: false,
  acm: false,
};

const summaryText = document.getElementById('sum-text');
const confirmButton = document.getElementById('btn-reg');

function renderWorkshopSummary() {
  const labels = [];

  if (selectedWorkshops.nv) labels.push('NVIDIA DLI');
  if (selectedWorkshops.acm) labels.push('ACM SIGGRAPH Perú');

  if (labels.length === 0) {
    summaryText.textContent = 'No has seleccionado talleres aún.';
    confirmButton.disabled = true;
    confirmButton.classList.remove('enabled');
    return;
  }

  summaryText.innerHTML = `Seleccionado: <strong>${labels.join(' + ')}</strong>`;
  confirmButton.disabled = false;
  confirmButton.classList.add('enabled');
}

function toggleWorkshopCard(card) {
  const workshopId = card.dataset.workshop;
  selectedWorkshops[workshopId] = !selectedWorkshops[workshopId];
  card.classList.toggle('selected');
  renderWorkshopSummary();
}

document.querySelectorAll('.ws-box').forEach((card) => {
  card.addEventListener('click', () => toggleWorkshopCard(card));
  card.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleWorkshopCard(card);
    }
  });
});

confirmButton.addEventListener('click', () => {
  alert('Selección registrada para revisión del board.');
});
