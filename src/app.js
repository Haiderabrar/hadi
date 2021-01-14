const express=require('express')
const app=express()
const hbs=require('hbs')
const geocode=require('./utils/geoloca')
const forecode=require('./utils/fore')
const path=require('path')
const port=process.env.PORT || 3000
const publicpath=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../src/templates/views')
const partialpath=path.join(__dirname,'../src/templates/partials')
hbs.registerPartials(partialpath)
app.use(express.static(publicpath))

app.set('view engine','hbs')
app.set('views',viewpath)
app.get('',function(req,res){
    res.render('index',{
        title:'weather',
        name:'waleed'
    })
})
app.get('/help',function(req,res){
    res.render('help',{
        title:'help',
        name:'waleed'
    })
})
app.get('/about',function(req,res){
    res.render('about',{
        title:'about',
        name:'waleed'
    })
})

app.get('/weather',function(req,res){
    if(!req.query.address){
        return res.send({
            erro:'enter the address'
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }
        forecode(latitude,longitude,(error,foredata)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:foredata,
                location,
                address:req.query.address,
            })
        })
    })
})

app.get('/product',function(req,res){
    if(!req.query.search){
        return res.send({
            eror:'enter search'
        })
    }
    res.send({
        product:[]
    })
    console.log(req.query)
})
app.get('/*',function(req,res){
    res.render('404',{
        title:'error',
        name:'404 error aagya'
    })
})


app.listen(port,()=>{
    console.log('we r on port')
})