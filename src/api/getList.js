import request from 'superagent'
import config from '../../build/superagent-mock-config'
import mock from 'superagent-mock'

mock(request, config)

export function getList(callback, page = 1 , url = 'https://api.local/article/list', category = 'all') {

  // 假如分类是数字，说明传入是节点 ID
  if (typeof category == 'number') {
      request.get(url)
       .set('page',page)
       .set('node',category)
       .end(function(err, res){

          if(!res.ok&&err){

            console.log(err)
          }else{

            callback(res.body)
          }

       })
     }else{
        request.get(url)
       .set('page',page)
       .set('category',category)
       .end(function(err, res){

          if(!res.ok&&err){

            console.log(err)
          }else{

            callback(res.body)
          }

       })
     }

}

