module.exports = [
  {
    /**
     * regular expression of URL
     */
    pattern: 'https://api.local(.*)',

    /**
     * returns the data
     *
     * @param match array Result of the resolution of the regular expression
     * @param params object sent by 'send' function
     * @param headers object set by 'set' function
     */
    fixtures: function (match, params, headers) {
      /**
       * Returning error codes example:
       *   request.get('https://domain.example/404').end(function(err, res){
       *     console.log(err); // 404
       *     console.log(res.notFound); // true
       *   })
       */
      if (match[1] === '/404') {
        throw new Error(404);
      }

      if (match[1] === '/support/up') {
        return {
          ok: 1
        };
      }

      if (match[1] === '/article/up') {
        return {
          ok: 1
        };
      }

      if (match[1] === '/favourite') {
        return {
          up: true,
          down: false
        };
      }

      if (match[1] === '/enshrine_status') {
        return true;
      }

      if (match[1] === '/enshrine') {
        return {
          ok: 1
        };
      }


      if (match[1] === '/get_all_city') {
        return {
          content: [
            {name:'上海',id: 41},
            {name:'杭州',id: 42},
            {name:'深圳',id: 43},
            {name:'西安',id: 44},
            {name:'广州',id: 45}
          ]
        };
      }


      if (match[1] === '/get_all_node') {
        return {
          content: [
            {
              name: 'Mobile' ,
              content: [
                {name:'IOS',id: 16},
                {name:'Android',id: 11},
                {name:'黑莓',id: 18},
                {name:'WinPhone',id: 19}
              ]
            },

            {
              name:'Front-End',
              content : [
                {name:'CSS',id: 20},
                {name:'JavaScript',id: 21},
                {name:'JQuery',id: 22},
                {name:'React',id: 23}
              ]
            },

            {
              name:'活动',
              content : [
                {name:'友谊小船',id: 24},
                {name:'面向对象',id: 25}
              ]
            }


          ]
        };
      }

      if (match[1] === '/news/list') {
        return {
          current_page: 1,
          all_page: 3,
          content: [
            { title:'分享一篇文章 rust的发展回顾与总结', url: 'http://www.baidu.com',category:'远程',star:3 },
            { title:'分享一篇文章 rust的发展回顾与总结', url: 'http://www.baidu.com',category:'远程',star:3 },
            { title:'分享一篇文章 rust的发展回顾与总结', url: 'http://www.baidu.com',category:'远程',star:3 },
            { title:'分享一篇文章 rust的发展回顾与总结', url: 'http://www.baidu.com',category:'远程',star:3 },
            { title:'分享一篇文章 rust的发展回顾与总结', url: 'http://www.baidu.com',category:'远程',star:3 },

          ]
        };
      }

      if (match[1] === '/other_wiki') {
        return {
          content: [
            { title:'分享一篇文章 rust的发展回顾与总结',url:'' },
            { title:'Cargo -- Rust 的 npm',url:'' },
            { title:'Cargo -- Rust 的 npm',url:'' },
            { title:'可以发表情啦',url:'' },
            { title:'可以发表情啦',url:'' },
            { title:'如何提取安装包或者发布自己写好的软件如何提取安装包或者发布自己写好的软件如何提取安装包或者发布自己写好的软件',url:'' }
          ]
        };
      }

      if (match[1] === '/index/hot') {
        return {
          content: [
            {
              id: 4,
              title: '同构化的 React + Redux 服务端渲染',
              category: '原创',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: true,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'18岁的老爷爷',
                last_time: '2分钟前'
              }
            },
            {
              id: 23,
              title: '让我们共建中国Rust爱好者的社区',
              category: '原创',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: false,
                j: false,
                r: true,
                t: true
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'18岁的老爷爷',
                last_time: '2分钟前'
              }
            },




          ]
        };
      }

    if (match[1] === '/index/list') {
        return {
          content:[
            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

          ]
        };
      }

      if (match[1] === '/wiki') {
        return {
          content:[
            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

          ]
        };
      }

      if (match[1] === '/article/list' || match[1] === '/node') {
        return {
          current_page: 1,
          all_page: 3,
          page_size: 20,
          content:[
            {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                        {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                        {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                        {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                        {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                        {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                        {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                        {
              id: 2,
              title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: true,
                j: false,
                r: false,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

                      {
              id: 2,
              title: '[北京] XX 科技寻找 Rust 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: false,
                j: false,
                r: true,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                      {
              id: 2,
              title: '[北京] XX 科技寻找 Rust 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: false,
                j: false,
                r: true,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                                  {
              id: 2,
              title: '[北京] XX 科技寻找 Rust 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: false,
                j: false,
                r: true,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                                  {
              id: 2,
              title: '[北京] XX 科技寻找 Rust 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: false,
                j: false,
                r: true,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },                      {
              id: 2,
              title: '[北京] XX 科技寻找 Rust 后端工程师',
              category: '招聘',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: false,
                j: false,
                r: true,
                t: false
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                        {
              id: 2,
              title: '我是最厉害的全栈工程师！',
              category: '扯淡',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: false,
                j: false,
                r: false,
                t: true
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

                                    {
              id: 2,
              title: '我是最厉害的全栈工程师！',
              category: '扯淡',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: false,
                j: false,
                r: false,
                t: true
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

                                    {
              id: 2,
              title: '我是最厉害的全栈工程师！',
              category: '扯淡',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: false,
                j: false,
                r: false,
                t: true
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                                    {
              id: 2,
              title: '我是最厉害的全栈工程师！',
              category: '扯淡',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: false,
                j: false,
                r: false,
                t: true
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },

                        {
              id: 2,
              title: '我是最厉害的全栈工程师！',
              category: '扯淡',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: false,
                j: false,
                r: false,
                t: true
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                                    {
              id: 2,
              title: '我是最厉害的全栈工程师！',
              category: '扯淡',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: false,
                j: false,
                r: false,
                t: true
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
                                    {
              id: 2,
              title: '我是最厉害的全栈工程师！',
              category: '扯淡',
              author: {
                face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
                name: 'Tiny',
                id: 30
              },
              label:{
                g: false,
                j: false,
                r: false,
                t: true
              },
              release_time: '11分钟前',
              last_comment: {
                user_id: 90,
                user_name:'飘雪',
                last_time: '2分钟前'
              },
            },
          ]
        };
      }

      if (match[1] == '/article') {
        if(params['article_id']) {
          let date = new Date()
          let content = `<article>
                          <h2 id="我们是谁？">我们是谁？</h2>
                          <p>我们是幻腾智能，中国最专注于智能家居的互联网公司。<br>
                          我们的梦想是通过将照明，门窗，燃气报警，窗帘等等设备智能化，来拉近亲人之间的距离，带来更多幸福感，让中国的普通百姓能够享受到前所未有的舒适生活。</p>

                          <p>说的简单一点，我们的产品是这样的：通过幻腾的手机App，用户可以在手机上看到家人的状态，能够知道什么时候需要开始做饭了。在出差的时候，可以随时知道家里有没有小偷进入。老人晚上上厕所的时候，灯光可以自动点亮，等等。</p>

                          <h2 id="为什么你应该加入？">为什么你应该加入？</h2><h4 id="超浓的技术氛围让你不会孤独">超浓的技术氛围让你不会孤独</h4>

                          <p>加分项：</p>

                          <ul>
                          <li>完成以下测试，并获得1万分以上
                          <a href="http://pg.wutj.info/tom-home/" target="_blank">猜猜Tom几点到家？</a>
                          By CTO 吴天际</li>
                          </ul>
                          <h2 id="联系方式">联系方式</h2>
                          <ul>
                          <li>公司地址： 北京市海淀区双清路3号33025</li>
                          <li>电话：13911339910</li>
                          <li>邮箱：hr@huantengsmart.com</li>
                          </ul>
                        </article>`

          return {
            id: params['article_id'],
            title: '[北京] 幻腾科技寻找 Ruby 后端工程师',
            category: '招聘',
            author: {
              face_img: 'https://ruby-china-files.b0.upaiyun.com/user/large_avatar/21472.jpg',
              name: 'Tiny',
              id: 30
            },
            viewCount: 39,
            favourite: {
              up: 12,
              down: 0
            },
            release_time: '11分钟前',
            last_comment: {
              user_id: 90,
              user_name:'飘雪',
              last_time: '2分钟前'
            },
            now_time: date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate(),
            content: content,
            comments: [
              {
                id:2,
                user_id:3,
                username:'十八岁的蜀黍',
                face_img:'https://cdn.v2ex.co/avatar/1c3e/364c/43832_normal.png?m=1401411063',
                time: '5 分钟前',
                up_count: 2,
                content: '寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。 多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？'
              },

              {
                id:3,
                user_id:78,
                username:'飘雪',
                face_img:'https://avatars3.githubusercontent.com/u/12268276?v=3&s=80',
                time: '2分钟前',
                up_count: 0,
                content: '<p>北方有佳人。绝世而独立。一顾倾人城。再顾倾人国。宁不知倾城与倾国。佳人难再得。</p>'

              }

            ],

          }
        }
      }

      /**
       * Checking on parameters example:
       *   request.get('https://domain.example/hero').send({superhero: "superman"}).end(function(err, res){
       *     console.log(res.body); // "Your hero: superman"
       *   })
       */

      if (match[1] === '/hero') {
        if(params['superhero']) {
          return 'Your hero:' + params['superhero'];
        } else {
          return 'You didnt chose a hero';
        }
      }


      /**
       * Checking on headers example:
       *   request.get('https://domain.example/authorized_endpoint').set({Authorization: "9382hfih1834h"}).end(function(err, res){
       *     console.log(res.body); // "Authenticated!"
       *   })
       */

      if (match[1] === '/authorized_endpoint') {
        if(headers['Authorization']) {
          return 'Authenticated!';
        } else {
          throw new Error(401); // Unauthorized
        }
      }


    },

    /**
     * returns the result of the GET request
     *
     * @param match array Result of the resolution of the regular expression
     * @param data  mixed Data returns by `fixtures` attribute
     */
    get: function (match, data) {

      return {
          body: data
      };
    },

    /**
     * returns the result of the POST request
     *
     * @param match array Result of the resolution of the regular expression
     * @param data  mixed Data returns by `fixtures` attribute
     */
    post: function (match, data, params) {

      if (match[1] === '/comment') {
        return {
          comment_id: 3
        };
      }

      if (match[1] === '/login') {
        return {
          user_id: 3,
          username: 'yugo',
          face_img: 'http://temp.im/150x150/007AFF/fff'
        };
      }

      if (match[1] === '/register') {
        return {
          user_id: 3,
          username: 'yugo',
          face_img: 'http://temp.im/150x150/007AFF/fff'
        };
      }

      return {
        code: 201
      };
    },
    delete: function(match, data){
      if (match[1] === '/comment') {
          return {
            ok: 1
          }
      }
    },
    put: function(match, data){
      if (match[1] === '/comment') {
          return {
            ok: 1
          }
      }
    },
  }
];
