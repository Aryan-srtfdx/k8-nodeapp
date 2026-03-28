const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(`
        <h1>Hello from Kubernetes!</h1>
        <p>Pod is running successfully</p>
    `)
})

server.listen(3000, () => {
    console.log('App running on port 3000')
})