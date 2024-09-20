const express = require('express')
const router = express.Router({ mergeParams: true })

const https = require('../utils/https')

const timelog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}

router.use(timelog)

router.get('/', async (req, res) => {
    const query_params = Object.entries(req.query).map(([key, value]) => {
        return `${key}=${value}`
    })
    const joined_query_params = query_params.join('&')
    const url = `http://api.weatherapi.com/v1/current.json?${joined_query_params}&key=${process.env.api_weather_key}`
    try{
        const weather = await https.get(url)
        if(weather){
            res.status(200).json({isSuccess: true, data: weather})
        } else{
            res.status(201).json({isSuccess: false})
        }
    }catch (e){
        res.status(500).json({isSuccess: false, error: e.message})
    }
})

router.get('/forecast', async (req, res) => {
    const query_params = Object.entries(req.query).map(([key, value]) => {
        return `${key}=${value}`
    })
    const joined_query_params = query_params.join('&')
    const url = `http://api.weatherapi.com/v1/forecast.json?${joined_query_params}&key=${process.env.api_weather_key}`
    try{
        const forecast = await https.get(url)
        res.status(200).json({isSuccess: true, data: forecast})
    }catch(e){
        res.status(500).json({isSuccess: false, error: e.message})
    }
})

module.exports = router