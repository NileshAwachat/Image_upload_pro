const express = require('express')
const path = require('path')
const multer = require('multer')

const app = express()
const PORT = 8002

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))
const upload = multer({
    dest:'uploads/'
})

app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    return res.render('homepage')
})

app.post('/upload',upload.single('profileimage'),(req,res)=>{
console.log(req.body)
console.log(req.file)

return res.redirect('/');
})

app.listen(PORT,()=>console.log(`Server Started at PORT:${PORT}`))