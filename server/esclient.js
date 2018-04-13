var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    httpAuth: 'elastic:b22UmsRJlqQdEAP7biW0',
    log: 'trace'
});

client.index({
    index: 'myindex', //相当于database
    type: 'mytype2',  //相当于table
    id: JSON.stringify(new Date().getTime()),// 数据到唯一标示，id存在则为更新，不存在为插入
    body: {
      title: 'Test 1',
      tags: ['y', 'z'],
      published: true,
      published_at: '2013-01-01',
      counter: 1,
      name: '999'
    }//文档到内容
  }, (error, response)=>{
    // 
    console.log('do the index');
/*     console.log(error)
    console.log(response) */
  });

  client.delete({
    index: 'myindex',
    type: 'mytype2',
    id: '3'
  }, (error, response)=>{
    console.log('do the delete');
    // ...删除id为3的数据
  });

  client.search({
    index: 'myindex',
    type:'mytype2',
    body:{
      query:{
        // match:{
        //   name:'yyk'
        // }
        "terms" :{ 
            "_id" : ["6"] 
            }
      }
    }
  }, function (error, response) {
    // ...
    console.log('do the search');
    // console.log(response.hits);
    // response.hits.hits.map((v)=>console.log(v))
  });

  export search = functtion(index, type, body) {
    body = body || {
      query:{
        // match:{
        //   name:'yyk'
        // }
        "terms": { 
          "_id": ["6"] 
        }
      }
    };
    client.search({
      index: index || 'myindex',
      type: type || 'mytype2',
      body: body
    }, function(error, response) {
      if(error) {
        console.log(error);
      }
      console.log('search finished');
      return response.hits.map(v => console.log('search success', v));
    });    
  }