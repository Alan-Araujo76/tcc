import express from 'express'
import db from "../db.js";

const app = express.Router();


    app.get('/', async(req, resp) => {
        try {
            let l = await db.infob_mw_lista.findAll();
            resp.send(l);
        } catch(e) {
            resp.send({ erro: e.toString() })
        }
    })


export default app 