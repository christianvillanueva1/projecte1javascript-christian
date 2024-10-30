document.addEventListener('DOMContentLoaded', function() {
    const api = 'https://jsonplaceholder.typicode.com/comments';

    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(comment => {
                output += `
                    <div class="element">
                        <h3 class="title">${comment.name}</h3>
                        <p class="text">${comment.body}</p>
                        <p class="user">${comment.email}</p>

                    </div>
                `;
            });
            document.getElementById('output').innerHTML = output;
        });
});