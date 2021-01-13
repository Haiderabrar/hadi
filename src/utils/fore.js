const request=require('request')
function fore(latitude,longitude,calback){
    //const url = "api.openweathermap.org/data/2.5/weather?lat="+31.52+"&lon="+74.35+"&apikey=97f767ff0305c1bf0030f1fa73954f5a"
    const url='http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=f4af8aa7fcb4dc099058a4e5991d623d&units=metric'
request({url,json:true},function(err,{body}){
    const {main}=body
    const {temp}=main
    //console.log(main)
    if(err){
        //console.log('error')
        callback('network issue',undefined)
    }
    else if(body.cod==404 || body.cod==401){
        calback(body.message,undefined)
    }
    else{
        calback(undefined,'it is '+temp)
        }

})
}
module.exports=fore

