const accountInput = document.getElementById("account");
const checkBtn = document.getElementById("checkBtn");

const result = document.getElementById("result");
const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

const accountStatus = document.getElementById("accountStatus");
const banReason = document.getElementById("banReason");
const banDuration = document.getElementById("banDuration");
const reviewStatus = document.getElementById("reviewStatus");

const reviewBtn = document.getElementById("reviewBtn");

checkBtn.addEventListener("click", checkAccount);

function checkAccount() {
  const account = accountInput.value.trim();

  if (!account) {
    alert("Tanpri antre ID oswa non kont lan.");
    return;
  }

  // DEMO V1:
  // Done sa yo se sèlman pou teste koòdone a.
  // Pita Firebase/backend la ap bay vrè estati kont lan.

  const demoBanned = account.toLowerCase() === "ban";

  result.classList.remove("hidden");

  if (demoBanned) {
    showBanned();
  } else {
    showActive();
  }
}

function showActive() {
  resultIcon.textContent = "✓";
  resultTitle.textContent = "Kont aktif";

  resultText.textContent =
    "Sistèm nan pa jwenn yon blokaj pou kont sa a.";

  accountStatus.textContent = "Aktif";
  banReason.textContent = "Pa gen okenn";
  banDuration.textContent = "—";
  reviewStatus.textContent = "Pa nesesè";

  reviewBtn.classList.add("hidden");

  resultIcon.style.background = "#dcfce7";
  resultIcon.style.color = "#16a34a";
}

function showBanned() {
  resultIcon.textContent = "!";
  resultTitle.textContent = "Kont bloke";

  resultText.textContent =
    "Kont sa a gen yon restriksyon ki anrejistre.";

  accountStatus.textContent = "Banni";
  banReason.textContent = "Vyolasyon règ";
  banDuration.textContent = "7 jou";
  reviewStatus.textContent = "Disponib";

  reviewBtn.classList.remove("hidden");

  resultIcon.style.background = "#fee2e2";
  resultIcon.style.color = "#dc2626";
}

reviewBtn.addEventListener("click", function () {
  alert(
    "Demann revizyon pare. Nan pwochen etap la, " +
    "nou pral konekte bouton sa a ak Firebase pou " +
    "anrejistre demann lan."
  );
});