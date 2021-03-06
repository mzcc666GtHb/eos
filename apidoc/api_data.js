define({ "api": [
  {
    "type": "post",
    "url": "/listArticle",
    "title": "文章列表",
    "version": "0.1.0",
    "name": "listArticle",
    "group": "文章管理",
    "description": "<p>文章列表查询.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每一页数据量.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>总条数.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>文章列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>页码.</p>"
          }
        ]
      }
    },
    "filename": "apidoc-notes/user.js",
    "groupTitle": "文章管理"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "登录",
    "version": "0.1.0",
    "name": "login",
    "group": "用户相关",
    "description": "<p>用户登录接口，返回值包括token和用户信息.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass_word",
            "description": "<p>用户密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用户凭证，后续接口，token统一放在Request headers里面传给服务端.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "userInfo",
            "description": "<p>用户信息.</p>"
          }
        ]
      }
    },
    "filename": "apidoc-notes/user.js",
    "groupTitle": "用户相关"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "注册",
    "version": "0.1.0",
    "name": "register",
    "group": "用户相关",
    "description": "<p>用户注册接口.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>用户名（3至10个英文或中文字符）.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass_word",
            "description": "<p>用户密码（6至12个英文和数字组成的字符）.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_email",
            "description": "<p>用户邮箱.</p>"
          }
        ]
      }
    },
    "filename": "apidoc-notes/user.js",
    "groupTitle": "用户相关"
  }
] });
