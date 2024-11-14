const apiUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchAndDisplayData() {
    const sortCriteria = document.getElementById('sort').value;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        
        // Sort data based on selected criteria
        data.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));

        displayData(data);
    } catch (error) {
        console.error(error);
        alert('An error occurred while fetching data. Please try again later.');
    }
}

function displayData(data) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    data.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} - ${user.username} - ${user.email}`;
        productList.appendChild(listItem);
    });
}

// Fetch and display data on initial load
fetchAndDisplayData();
