import requestObj from '@/utils/requestObj.js'

export const $request = (requestName,params,headerType=0)=>{
	let reqObj = requestObj[requestName];
	let headerObj = [
		{
			"Content-Type":"application/json"
		},
		{
			'Content-Type': 'application/x-www-form-urlencoded' 
		}
	]
	// let url = 'http://192.168.1.130:8081';
	let url = 'http://39.108.110.227:8088'
	let reqUrl = reqObj.otherGet?`${url}${reqObj.url}/${params}`:`${url}${reqObj.url}`
	let data = reqObj.otherGet?{}:params;
	return new Promise((resolve,reject)=>{
		uni.request({
		    url: reqUrl, 
			method:requestObj[requestName].type,
		    data,
		    header: headerObj[headerType],
		    success: (res) => {
		        resolve(res)
		    },
			fail: (err) => {
				reject(err)
			}
		});

	})
}