$(function(){
    var $tf = $('#tf');
    var $add = $('#btn');
    var $list = $('#list');
    var $del = $('#del');

    $add.on('click',function(e){
        e.preventDefault();
        var todo = $('input:text').val();
        
        if(todo.length > 0){
            var li = "<li><input type='checkbox'> "+todo+"</li>";
            if($list.children().length == 0){
                $list.append(li);
                $tf.val('');
            }else{
                $('li:last').after(li);
                $tf.val('');
            }
        }
    });

    $del.on('click',function(){
        
        $list.children().each(function(index){
           if($(this).children().is(':checked')){
                $(this).slideUp(500);
                $(this).remove();
           }
        })
    });
})