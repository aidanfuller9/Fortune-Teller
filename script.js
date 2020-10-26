$(".button").click(function(){
    let name=$(".question0").val();
 let age = parseInt($(".question1").val());
 let fruit = $(".question2").val();
 let week= parseInt($(".question3").val());
    $("body").append(`<p> Hello ${name}. In 20 years, you will be ${age+20} and have eaten ${week*52*20} ${fruit}s in that time.</p>`);
});
