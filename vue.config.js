const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports={
	 runtimeCompiler: true,
	 publicPath: "./",
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('@',resolve('./src'))
        .set('components',resolve('./src/components'))
        .set('views',resolve('./src/views'))
        .set('assets',resolve('./src/assets'))
		.set('utils',resolve('./src/utils'))
        //set第一个参数：设置的别名，第二个参数：设置的路径
　　　　
    }
}