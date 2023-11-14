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


function loadHTMLTable(data){
    const table = document.querySelector('table tbody');
    // Clear existing table content
    table.innerHTML = "";

    // Check if data is empty
    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }

    // Loop through the data and create table rows
    data.forEach(item => {
        const row = table.insertRow();

        // Assuming each item has 'id' and 'name' properties, update these accordingly
        const idCell = row.insertCell(0);
        const nameCell = row.insertCell(1);

        // Populate cells with data
        idCell.textContent = item.id;
        nameCell.textContent = item.name;
        
        // Add more cells as needed for other properties in your data
    });
}



const addBtn = document.querySelector('#add-name-btn');

addBtn.onclick = function () {
    const nameInput = document.querySelector('#name-input');
    const name = nameInput.value;
    nameInput.value = "";

    fetch('http://localhost:3000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name : name})
    })
    .then(response => response.json())
    //Console log of the data
    .then(data => console.log(data))
    //Reload the page
    .then(() => location.reload())
}






/*
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    getData();
});
*/
/*
document.addEventListener('DOMContentLoaded', function () {
    //test if DOMContentLoaded event fired
    console.log('DOMContentLoaded event fired');
    fetch('http://localhost:3000/getAll')
    //We get the data as json and then we call the function loadHTMLTable
    .then(data => loadHTMLTable(data['data']));
    
});

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";

    data.forEach(function ({id, name, }) {
        tableHtml += "<tr>";
        tableHtml += `<td>${id}</td>`;
        tableHtml += `<td>${name}</td>`;
        tableHtml += "</tr>";
    });

    table.innerHTML = tableHtml;
}
*/


/*
function getData() {
    console.log('getData function called'); // Add this line
    fetch('/api/data')
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '<h2>Data from MySQL</h2>';

    if (data.length === 0) {
        dataContainer.innerHTML += '<p>No data available.</p>';
        return;
    }

    const table = document.createElement('table');
    table.innerHTML = '<tr><th>ID</th><th>Name</th></tr>';

    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.id}</td><td>${row.name}</td>`;
        table.appendChild(tr);
    });

    dataContainer.appendChild(table);
}
*/
