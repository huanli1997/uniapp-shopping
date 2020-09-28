export default function(url,data={},method = "GET"){
	return new Promise((resolve,reject)=>{
		// 发送请求
		uni.request({
			url,
			data,
			method,
			success:(res)=>{
				// 返回成功的数据
				resolve(res)
			},
			fail:(error)=>{
				// 欺骗失败的状态，为了不想影响之后的请求
				// 返回的这个false，表示这个请求失败了
				resolve(false)
			}
		})
	})
}