 function drawbglogin(){
     //获取画板
     //doccument 当前文档
     //getElement 获取一个标签
     //ById 通过Id名称的方式
     //var 声明一片空间
     //var canvas 声明一片空间的名字叫做canvas
     var canvas = document.getElementById("canvas");
     //获取画板权限 上下文
     var ctx = canvas.getContext("2d");
     //让画板的大小等于屏幕的大小
     /*
         思路：
             1.获取屏幕对象
             2.获取屏幕的尺寸
             3.屏幕的尺寸赋值给画板
     */
     //获取屏幕对象
     var s = window.screen;
     //获取屏幕的宽度和高度
     var w = s.width;
     var h = s.height-200;
     //设置画板的大小
     canvas.width = w;
     canvas.height = h;

     //设置文字大小 
     var fontSize = 14;
     //计算一行有多少个文字 取整数 向下取整
     var clos = Math.floor(w/fontSize);
     //思考每一个字的坐标
     //创建数组把clos 个 0 （y坐标存储起来）
     var drops = [];
     var str = "qwertyuiopasdfghjklzxcvbnm";
     //往数组里面添加 clos 个 0
     for(var i = 0;i<clos;i++) {
         drops.push(0);
     }

     //绘制文字
     function drawString() {
         //给矩形设置填充色
         ctx.fillStyle="rgba(0,0,0,0.05)"
         //绘制一个矩形
         ctx.fillRect(0,0,w,h);

         //添加文字样式
         ctx.font = "600 "+fontSize+"px 微软雅黑";
         //设置文字颜色
         ctx.fillStyle = "#00ff00";

         for(var i = 0;i<clos;i++) {
             //x坐标
             var x = i*fontSize;
             //y坐标
             var y = drops[i]*fontSize;
             //设置绘制文字
             ctx.fillText(str[Math.floor(Math.random()*str.length)],x,y);
             if(y>h&&Math.random()>0.99){
                 drops[i] = 0;
             }
             drops[i]++;
         }
             
     }
     //定义一个定时器，每隔30毫秒执行一次
     setInterval(drawString,30);
 }