import {app} from './app.js'

const port = 4050
app.listen(port,() => console.log(`Server running on port ${port} with ENV: ${process.env.NODE_ENV}`))