// Version 3

// 1.
// Write a function that:
// - Makes an API call using the Fetch API or the regular XMLHttpRequest
// - Uses the following URL: https://jsonplaceholder.typicode.com/users
// - Displays the "name", "email" and "city" of the first person inside an unordered list (created programmatically using JavaScript)

const fetchApi = (url) => {
    const ul = document.createElement('ul');
    document.body.appendChild(ul)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const li = document.createElement('li');
            li.textContent = ` name: ${data[0].name} Email: ${data[0].email} City: ${data[0].address.city} `
            ul.appendChild(li)
        });
}
fetchApi('https://jsonplaceholder.typicode.com/users')
    // 2.
    // Write a function that:
    // - Takes in an array of strings:
const fruits = ["Strawberry", "Apple", "Papaya", "Banana", "Apricot", "Pear"];
// - Returns an array with the fruits that start with the letter "P"
const fruitsFunction = (fruitsArray) => {
    fruitsArray.filter(item => {
        const result = item.startsWith('P')
        return console.log(result)
    });
}
fruitsFunction(fruits);

// 3.
// Using JavaScript only (adding HTML to index.html is NOT allowed), write a function that:
// - Creates a button element (with text "click me!")
// - Creates an empty image element and add it to the document.
// - Inserts an image URL into the <img> tag, when the button is clicked
// - Removes the button after the click
// - Use the following image URL: https://thehub.dk/files/5ad4b4a9f9ac4aa13c3d2d58/logo_upload-6d537cf7e5de664db275b32b3c6ae12d.pn
const btn = document.createElement('button');
btn.textContent = 'Click Me'
document.body.appendChild(btn);
const img = document.createElement('img');
document.body.appendChild(img)
btn.addEventListener('click', () => {
    img.src = 'https://unsplash.it/id/1/250';
    btn.remove();
});