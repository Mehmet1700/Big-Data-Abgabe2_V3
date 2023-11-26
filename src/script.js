// Funktion welche auf die Datenbank zugreift und die Daten in die Funktion loadHTMLTable einfügt
document.addEventListener('DOMContentLoaded', function() {
    fetch("http://localhost:3000/getAll")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        //Schreibe in die Konsole alles ist okay
        console.log('Alles ist okay');
        return response.json();
    })
    .then(data => loadHTMLTable(data['data']));
});

// Funktion welche die Daten in die Tabelle einfügt
function loadHTMLTable(data){
    const table = document.querySelector('table tbody');
    // Löschen bereits vorhandener Daten
    table.innerHTML = "";

    // Überprüfung ob Daten vorhanden sind
    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }

    // Schleife um die Daten in die Tabelle einzufügen
    data.forEach(item => {
        const row = table.insertRow();

        // Variabeln für die Zellen
        const idCell = row.insertCell(0);
        const nameCell = row.insertCell(1);

        // Einfügen der Daten in die Tabelle
        idCell.textContent = item.id;
        nameCell.textContent = item.name;
    });
}


// Button zum hinzufügen eines neuen Eintrages
const addBtn = document.querySelector('#add-name-btn');

//Funktionalität des Buttons
addBtn.onclick = function () {
    const nameInput = document.querySelector('#name-input');
    const name = nameInput.value;
    nameInput.value = "";
    
    //Übergabe der Daten an den Server über fetch
    fetch('http://localhost:3000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name : name})
    })
    .then(response => response.json())
    //Konsolen Ausgabe der Daten
    .then(data => console.log(data))
    //Neu laden der Seite
    .then(() => location.reload())
}