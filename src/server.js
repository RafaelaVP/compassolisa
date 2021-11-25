const cors = require('cors');
const app = require('./app');

const port = 3000;

app.use(cors());
app.listen(port, () => console.log(`listening on port: ${port}`));
