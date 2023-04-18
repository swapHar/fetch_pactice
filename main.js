// fetching data from https://jsonplaceholder.typicode.com/posts/1

async function getDataAwait() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if(!res.ok) throw new Error('Bad response from server');
    let users = await res.json();
    return users;
}

// Handle async getData
async function handleResultAsync() {
    try {
        let res = await getDataAwait();
        return res;
        //console.log(res);
    } catch(error) {
        console.log(error);
    }
}


// Add event listener to button
async function handleButton() {
    let html = await handleResultAsync();
    document.querySelector('button').addEventListener('click', function(event) {
        let displayButton = event.target.closest('button');

        // If you click somewhere unrelated, we just return
        if(!displayButton) { return; }

        let infoDiv = document.querySelector('#data');
        infoDiv.innerHTML = JSON.stringify(html);
    
    });
    
}

handleButton();
