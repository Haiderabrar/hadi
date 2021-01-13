const request=require('request')
const geo=(adres,callbac)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+adres+'.json?proximity=74.3587,31.5204&access_token=pk.eyJ1IjoiaGFkaTU2IiwiYSI6ImNrajh2bHA2cDFzMmUycW52dnlkaml2NTEifQ.2Sc-C3i6iF3-C2QaxgNyBw'
    request({url,json:true},function(erro,{body}){

    //const {type,query}=body
    //console.log(type)

        if(erro){
        //console.log('error')
        callbac('network issue',undefined)
    }
    else if(body.features.length==0){
            callbac('enter address right',undefined)
    }
    else if(body.message=="Not Authorized - Invalid Token"){
        callbac('valid api',undefined)
}
    else{
        callbac(undefined,{
            latitude:body.features[0].center[1],
            longitude:body.features[0].center[0],
            location:body.features[0].place_name
        })
        }
    })
}
module.exports=geo
