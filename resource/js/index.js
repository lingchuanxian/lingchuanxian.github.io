$(function() {
	// 初始化内容
	Bmob.initialize("9f954d942c02c2b225b6ba65598eca30", "1004da6556c402c277abb39fc1e67ada");

	var Article = Bmob.Object.extend("Articless");
    var article = new Article();
    article.set("art_title", "测试标题201807081012");
    article.save(null, {
      success: function(object) {
        alert("create object success, object id:"+object.id);
      },
      error: function(model, error) {
        alert("create object fail");
      }
    });
}); 