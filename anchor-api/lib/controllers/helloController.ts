import express from 'express';

export function helloWorld(req:express.Request, res: express.Response) {
    res.send("HELLO WORLD");
}