// Initial shameful data
let shameData = [
    { name: "Stinky মামুন ", count: 7 },
    { name: "Disappointment আসিফ", count: 4 },
    { name: "Embarrassment ইমরান", count: 3 },
];

const embarassingAdjectives = [
    "Stinky",
    "Disgusting",
    "Nasty",
    "Revolting",
    "Gross",
    "Filthy",
    "Putrid",
    "Rotten",
    "Foul",
    "Repulsive",
];

const embarassingSuffixes = [
    "the Forgetful",
    "the Careless",
    "the Neglectful",
    "the Reckless",
    "the Thoughtless",
    "the Inconsiderate",
    "the Oblivious",
    "the Shameful",
];

function renderLeaderboard() {
    const leaderboard = document.getElementById("leaderboard");
    shameData.sort((a, b) => b.count - a.count);

    leaderboard.innerHTML = shameData
        .map((person, index) => {
            let className = "";
            let trophy = "";
            let emoji = "😳";

            if (index === 0) {
                className = "gold";
                trophy = '<span class="trophy">💩</span>';
                emoji = "💩👑";
            } else if (index === 1) {
                className = "silver";
                trophy = '<span class="trophy">🤮</span>';
                emoji = "🤦";
            } else if (index === 2) {
                className = "bronze";
                trophy = '<span class="trophy">🚽</span>';
                emoji = "😱";
            }

            return `
            <div class="shame-item ${className}">
                ${trophy}
                <span class="rank">#${index + 1}</span>
                <span class="emoji">${emoji}</span>
                <span class="name">${person.name}</span>
                <span class="emoji">${emoji}</span>
                <span class="count">${person.count}</span>
            </div>
        `;
        })
        .join("");
}

function addShame() {
    const nameInput = document.getElementById("newName");
    let name = nameInput.value.trim();

    if (!name) {
        alert("🚨 Enter a name, you coward! 🚨");
        return;
    }

    // Make the name embarrassing
    const adjective =
        embarassingAdjectives[
            Math.floor(Math.random() * embarassingAdjectives.length)
        ];
    const suffix =
        embarassingSuffixes[
            Math.floor(Math.random() * embarassingSuffixes.length)
        ];
    const embarassingName = `${adjective} ${name} ${suffix}`;

    // Check if person already exists
    const existingPerson = shameData.find((p) => p.name === embarassingName);

    if (existingPerson) {
        existingPerson.count++;
    } else {
        shameData.push({ name: embarassingName, count: 1 });
    }

    nameInput.value = "";
    renderLeaderboard();

    // Fun alert
    alert(`🚨 ${embarassingName} has been SHAMED! 🚨`);
}

function resetLeaderboard() {
    if (confirm("🔥 Are you sure you want to clear the WALL OF SHAME? 🔥")) {
        shameData = [];
        renderLeaderboard();
        alert("✨ The slate has been wiped clean... for now! ✨");
    }
}

// Allow Enter key to add shame
document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("newName")
        .addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                addShame();
            }
        });

    // Initial render
    renderLeaderboard();
});
