 (function( $ ) {
    $(document).ready(function(){
        function checkNationalCode(code) {
            var L=code.length;
            
            if(L<8 || parseInt(code,10)==0) return false;
            code=('0000'+code).substr(L+4-10);
            if(parseInt(code.substr(3,6),10)==0) return false;
            var c=parseInt(code.substr(9,1),10);
            var s=0;
            for(var i=0;i<9;i++)
                s+=parseInt(code.substr(i,1),10)*(10-i);
            s=s%11;
            return (s<2 && c==s) || (s>=2 && c==(11-s));
            return true;
        }
        $('.box.check , .message .error , .message .ok').hide()
        $('.btn.generate').click(function(){
            var rand_tehran = '002' + Math.floor(Math.random() * 10000000);
            while (!checkNationalCode(rand_tehran)) {
                rand_tehran = '002' + Math.floor(Math.random() * 10000000)
            }
            $('input[name=nationalcode]').val(rand_tehran)
        })

        $('.btn.check').click(function(){
            var natCode = $('input[name=nationalcodeChecker]').val()
            
            if(checkNationalCode(natCode)) {
                $('.message .ok').show();
                $('.message .error').hide();
            } else {
                $('.message .ok').hide();
                $('.message .error').show();
            }
        })

        $('.choose .item').click(function(){
            $('.choose .item').each(function(){
                $(this).removeClass('active')
            })
            $(this).addClass('active')

            var data = $(this).attr('data');

            if(data == 'create') {
                $('.box.generate').show()
                $('.box.check').hide()
            }
            if(data == 'check') {
                $('.box.generate').hide()
                $('.box.check').show()
            }
            $('input[name=nationalcode]').val('')
            
        })


        $('.btn.reset').click(function(){
            $('input[type=text]').val('');
            $('.message .ok , .message .error').hide();

        })

        console.log('Say my name #P3D :)')
        
    })
})(jQuery);
    