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
    let url = `http://api.mediastack.com/v1/news?${joined_query_params}&access_key=`
    try {
        const news = await https.get(`${url}${process.env.mediastack_api_key}`)
        if (news.error) {
            res.status(200).json({
                isSuccess: false,
                error: news.error.message
            })
            return
        }
        console.log(news)
        res.status(200).json({
            isSuccess: true,
            data: news
        })
    } catch (e) {
        res.status(500).json({
            isSuccess: false,
            error: e.message
        })
    }
})

router.get('/sources', async (req, res) => {
    const query_params = Object.entries(req.query).map(([key, value]) => {
        return `${key}=${value}`
    })
    const joined_query_params = query_params.join('&')
    let url = `http://api.mediastack.com/v1/sources?${joined_query_params}&access_key=`
    try {
        const sources = await https.get(`${url}${process.env.mediastack_api_key}`)
        if (sources.error) {
            res.status(501).json({
                isSuccess: false,
                error: news.error.message
            })
        }
        res.status(200).json({
            isSuccess: true,
            data: sources.data
        })
    } catch (e) {
        res.status(500).json({
            isSuccess: false,
            error: e.message
        })
    }
})

module.exports = router