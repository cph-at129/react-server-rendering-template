import React from 'react'
import express from 'express'
import { readFileSync } from 'fs'
import { renderToString } from 'react-dom/server'
import { App } from '../client/App'

const app = new express()

app.use(express.static("dist"))

app.get('/', async (req, res) => {
    const index = readFileSync(`public/index.html`, `utf8`)
    const rendered = renderToString(<App />)
    res.send(index.replace("{{rendered}}", rendered))
})

app.listen(7777)
