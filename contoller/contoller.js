const { getEmailSend, a, b } = require("../service/service");

var func = {
    getLoginPost:(req, res, next)=>{
        console.log(a())
        setTimeout(()=>{console.log(b())},200)
        getEmailSend(req)
        
        res.json({ "Name": req.body,"natty":"is nitya"})
    }
}

module.exports = func;