document.addEventListener('DOMContentLoaded', function() {
    const api = 'https://dummyjson.com/users';

    axios.get(api).then(response => {
        console.log(response.data.users);
        let output = '';
        response.data.users.forEach(user => {
            output += `
                <div class="element">
                    <h3>${user.name}</h3>
                    <p>${user.email}</p>
                    <p>${user.phone}</p>
                </div>
            `;
        });
        document.getElementById('output').innerHTML = output;
    });
});