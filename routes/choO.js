const express = require("express");
const router = express.Router();
const app = express();
const { createChoO, getChoOAll, deleteChoO, updateChoO, getChoOTheoId } = require("../controller/choO");

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
router.post('', createChoO);
router.get('/get-all', getChoOAll);
router.delete('', deleteChoO);
router.put('', updateChoO);
router.get('/:id', getChoOTheoId);

module.exports = router;
