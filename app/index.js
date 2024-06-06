const port = 3001;
const app = require('./app');

app.listen(port, () => {
    console.log(`Serwer uruchomiony na porcie: ${port}`);
});