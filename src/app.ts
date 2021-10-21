import express from 'express';
import config from 'config';
import connect from "./utils/connect";
import logger from "./utils/logger";
import routs from "./routs";

const app = express();
const port = config.get<number>('port')

app.listen(port,async ()=>{
    logger.info(`app running at https://localhost:${port}`);
    await connect();
    routs(app);
})