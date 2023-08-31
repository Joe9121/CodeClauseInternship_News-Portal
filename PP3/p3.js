document.addEventListener("DOMContentLoaded", function () {
    console.log('JS here');

    let queryText = document.getElementById('queryText');
    let queryResult = document.getElementById('queryResult');
    let content = document.getElementById('content');
    let pre = document.getElementById('pre');
    let next = document.getElementById('next');

    const searchForm = document.getElementById('searchForm'); // Get the search form
    const searchInput = document.getElementById('searchInput'); // Get the search input field

    async function fetchNews(query, page) {
        try {
            const apiKey = 'd9efafcc5aa8465684caefcf4f4dc20b';
            const pageSize = 10;

            const apiUrl = `/api?q=${query}&pageNo=${page}&apiKey=${apiKey}&pageSize=${pageSize}`;
            let response = await fetch(apiUrl);

            if (response.ok) {
                let data = await response.json();
                console.log(data);
                queryText.textContent = query;
                queryResult.textContent = data.totalResults;
                pre.href = `/?q=${query}&pageno=${page - 1}`;
                next.href = `/?q=${query}&pageno=${page + 1}`;

                let str = "";
                for (let item of data.articles) {
                    str += `
                        <div class="card m-2" style="width: 18rem;">
                            <img src="${item.urlToImage}" class="card-img-top" alt="${item.title}">
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">${item.description}</p>
                                <a target="_blank" href="${item.url}" class="btn btn-primary">Read More..</a>
                            </div>
                        </div>
                    `;
                }
                content.innerHTML = str;
            } else {
                console.error('Failed to fetch data:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Handle form submission
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        const searchQuery = searchInput.value; // Get the search query from the input field
        fetchNews(searchQuery, 1); // Fetch news with the search query and start from page 1
    });

    // Get query and page from the URL
    const urlParams = new URLSearchParams(window.location.search);
    let query = urlParams.get('q');
    if (!query) {
        query = 'egypt'; // Set default query to 'egypt'
    }
    const page = parseInt(urlParams.get('pageno')) || 1; // Default page if not specified

    fetchNews(query, page);
});
