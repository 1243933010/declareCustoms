export interface propList{
	limit:number,
	page:number,
	userId:string,
	keyWord:string,
	status:string
}


export interface stepsArr{
	[index:number]:stepsObj
}
interface stepsObj{
	title:string
}