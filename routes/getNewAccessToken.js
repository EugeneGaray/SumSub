const express = require('express');
const router = express.Router();
const { main } = require('./../core/getToken');

router.get('/', async (res, req) => {
  await main()
    .then(({ data }) => {
      req.json({
        status: 'ok',
        ...data
      })
    }).catch((error) => {
      req.json({
        status: "error",
        error
      })
    })
})

module.exports = router;