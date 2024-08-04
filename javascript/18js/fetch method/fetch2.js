fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(x => { return x.json() })
    .then(console.log())
    .catch(() => { })