import "dotenv/config"
import app from "./app";
import { PORT } from "./config";
import { AppDataSource } from "./config/data-source";


AppDataSource.initialize()
  .then(() => {
    app.listen(PORT)
    
    console.log('Successful connection to the PostgreSQL database.');
    console.log(`App running on: http://localhost:${PORT}`)
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  })
