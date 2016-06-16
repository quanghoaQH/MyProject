// make tamnv
const myConst = {
		genMode : {
			ADD : "0",
			EDIT : "1"
	}
};
$(document).ready(function() {
    // Xóa dữ liệu khi add mới 
    if (genMode == "0"){
    	$('#postForm\\:title').val('');
    	$('#postForm\\:description').val('');
    	$('#postForm\\:content').val('');
    	$('#postForm\\:keywordseo').val('');
    	$('#postForm\\:keywordseodes').val('');
    }
	
	
    $('#postForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
            	'postForm:title': {
                    validators: {
                        notEmpty: {
                            message: 'The title is required'
                        },
                        /*regexp: {
                            regexp: /^[a-zA-Z\s]+$/,
                            message: 'The title can only consist of alphabetical characters'
                        }*/
                    }
                },
                'postForm:description': {
                    validators: {
                        notEmpty: {
                            message: 'The description is required'
                        }
                    }
                },
                'postForm:content': {
                    validators: {
                        notEmpty: {
                            message: 'The content is required'
                        }
                    }
                },
                'postForm:thumb': {
                    validators: {
                        notEmpty: {
                            message: 'The thumb is required'
                        }
                    }
                }
            }
        });
	    // Xóa bản ghi
	    $("#btnDelete").on("click", function() {	
			if(confirm(msgDelete)){
				formData = $("#listF1").serializeArray();
				$.demsPostAjax({
					url : "btnDelete",
					data : formData,
					async : false,
					success : function(data) {
						if (data.status == $demsConst.ctrlStatus.NORMAL) {
							// 閉じる
							parent.$.demsColorbox.close();
						} else {
							// エラー
							alert(data.message);
							return;
						}
					}	
				});
			} else {
				// キャンセル
				return;
			}	
		});
    
    // Khởi tao chế độ khi add mới
/*    $('a#editlink').bind('click', function(e) {
        genMode = "0";
        "#{listNewsPostController.genMode = 0}";
        alert(genMode);
    });*/
    //
    
    /*$('#confirmDelete').on('show', function() {
        var tit = $('.confirm-delete').data('aaaaaaaaaaaaa');

        $('#confirmDelete .modal-body p').html("Do you want to delete this ID " + '<b>' + tit +'</b>' + ' ?');
        var id = $(this).data('id'),
        removeBtn = $(this).find('.danger');
    });

    $('.confirm-delete').on('click', function(e) {
        e.preventDefault();

        var id = $(this).data('id');
        $('#confirmDelete').data('id', id).modal('show');
    });

    $('#btnYes').click(function() {
        // handle deletion here
        var id = $('#confirmDelete').data('id');
        $('[data-id='+id+']').parents('tr').remove();
        $('#confirmDelete').modal('hide');
        
    });*/
    
    
});
