export let valiDateFnc = (data:any)=>{
	let bool = true;
	let errInfo = {
		entry:'内容不能为空',
		regErr:'格式错误',
	}
	let obj = {
		adrdetail:'详细地址',//详细地址
		province:'省市区', //地区：省
		expressCompany:'快递公司',//快递公司
		mailName:'寄件人名称',//	寄件人名称
		mailTelephone:'寄件人电话',//	寄件人电话
		telephone:'收货人手机号码',//	手机号码
		userName:'收货人名称',//	收货人
	}
	let phoneRegArr = ['mailTelephone','telephone']
	var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;    //11位手机号码正则
	let keyArr = Object.keys(data)
	let valArr = Object.values(data)
	console.log(keyArr,valArr)
	for(let i = 0;i<keyArr.length;i++){
		if(!valArr[i]&&obj[keyArr[i]]){
			console.log(valArr[i])
			bool = false;
			uni.showToast({
				icon:'none',
				title:` ${obj[keyArr[i]]}${errInfo.entry}`
			})
			return bool;
			
		}
		if(valArr[i]&&obj[keyArr[i]]&&phoneRegArr.includes(keyArr[i])){
			if(!reg_tel.test(valArr[i])){
				bool = false;
				uni.showToast({
					icon:'none',
					title:`${obj[keyArr[i]]}${errInfo.regErr}`
				})
				return bool;
			}
		}
	}
	return bool
}