import request from 'superagent'
import config from '../../build/superagent-mock-config'
import mock from 'superagent-mock'

mock(request, config)

export function getOtherWiki(callback , url = 'https://api.local/other_wiki') {
  request.get(url)
       .end(function(err, res){

          if(!res.ok&&err){
            console.log(err)
          }else{
            callback(res.body)
          }

       })
}

