import express from 'express'
const app= express()    
const PORT= 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/test',(req,res)=>{
    res.json({
        "msg":"test running"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

//this is good

