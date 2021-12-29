export default {
  login: config => {
    return {
      'msg': '查询成功',
      'code': 200,
      'data': {
        'msg': '登录成功，token签发成功',
        'code': 200,
        'userId': 2,
        'token': 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJscGFkbWluIiwidXNlckNvZGVUeXBlIjoiMDAiLCJkZXBDb2RlIjoiIiwib3JnQ29kZSI6IiIsImFyZWFDb2RlIjoiIn0.EGxJCPhfwyeWDbfsIZpzhcSmlRkhw69y_3bREza08MRVxzVx8QhfEHaaCSaLPn3vKwy8la4Ub6W6wA4KR9KxEzAK-HBFmbc4IZbXIyZdiNj2FuGkFuFXZibToflw2s5kg9w8mKC8wqkJAbxLNpvHVYguzPTCd_nizSXAnjAsrJc'
      }
    }
  }
}
