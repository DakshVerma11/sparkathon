let bottles = 7, co2 = 1.5, wallet = 150;
const maxBottles = 10;
let ecoPoints = 1200;
let tier = 'Silver Saver';

const q = id => document.getElementById(id);
const toast = () => {
  const t = q('toast');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
};

function render() {
  q('bottleCount').innerText = bottles;
  q('co2Saved').innerText = co2.toFixed(2) + ' kg';
  q('walletAmount').innerText = `₹${wallet}`;
  q('ecoPoints').innerText = ecoPoints;
  q('tierName').innerText = tier;
  q('badgesLeft').innerText = Math.max(maxBottles - bottles, 0);
  q('progressBar').style.width = ((bottles / maxBottles) * 100) + '%';
  q('badgeProgress').innerText = bottles; 
}

render();

q('searchInput').addEventListener('input', e => {
  const filter = e.target.value.toLowerCase();
  [...q('activityTable').rows].forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(filter) ? '' : 'none';
  });
});

q('scanBtn').onclick = () => {
  if (bottles >= maxBottles) return toast();

  bottles++;
  co2 += 0.22;
  wallet += 50;

  const today = new Date().toLocaleDateString('en-GB');
  q('activityTable').insertAdjacentHTML('afterbegin',
    `<tr><td>${today}</td><td>#BXL${900 + bottles}</td><td>Returned</td><td>₹50</td><td>0.22 kg</td></tr>`
  );

  q('scanLog').innerText = `✔ Bottle #BXL${900 + bottles} validated, ₹50 credited.`;
  toast();

  if (bottles === maxBottles) {
    tier = 'Gold Guardian'; // 
    q('badgeModal').classList.add('show');
    q('badgeModal').querySelector('p').innerText = "Congratulations, you’re now a Gold Guardian!"; // ✅ Update modal
  }

  render();
};

q('chainBtn').onclick = () => {
  q('chainLog').innerText = 'Txn:0x2ab...d3f | Status:Confirmed | Bottle:#BXL903';
  toast();
};

q('toggleSidebar')?.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('collapsed');
});

q('profileToggle')?.addEventListener('click', () => {
  q('toggleSidebar')?.click();
});

q('closeModal')?.addEventListener('click', () => {
  q('badgeModal').classList.remove('show');
});
q('badgeModal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove('show');
  }
});
