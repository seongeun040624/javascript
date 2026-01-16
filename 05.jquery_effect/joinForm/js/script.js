/* $(function(){
    const idReg = /^[a-zA-Z0-9]{6,12}$/
    //소문자 a-z, 대문자 a-z, 숫자 0-9, {6글자에서 12글자}
    const pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$%*#?&]){8,15}$/

    const emailReg = /^[^\@]+@[^\s@]+\.[^\s@]+$/

    $('#joinForm').submit(function(e){
        e.preventDefault();

        let id = $('#userId').val();
        let pw = $('#userPw').val();
        let checkPw = $('#userCheckPw').val();
        let email = $('#userEmail').val();
        let isValid = true;

        if(!idReg.test(id)){
            $('#idMsg').text('잘못된 아이디입니다. 아이디는 영문+숫자 6~12글자로 작성해주세요');

            isValid.false;
        }else{
            $('#idMsg').text('사용 가능한 아이디입니다');

        }
    })
}) */

$(function(){
    const idReg=/^(?=.*\d)[a-zA-Z][a-zA-Z0-9]{6,12}$/; //숫자만 썼을 때 잘못 입력된 거라고 나옴
    const pwReg=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$%*#?&!]).{8,16}$/;
    const emailReg=/^[^\@]+@[^\s@]+\.[^\s@]+$/

    $('#joinForm').submit(function(e){
        e.preventDefault();

        let id=$('#userId').val();
        let pw=$('#userPw').val();
        let checkPw=$('#userCheckPw').val();
        let email=$('#userEmail').val();
        let isValid=true;

        //id
        if(!idReg.test(id)){
            $('#idMsg').text('잘못된 아이디입니다. 아이디는 영문+숫자 6~12글자로 작성해주세요')
            isValid=false;
        }else{
            $('#idMsg').text('사용 가능한 아이디입니다')
        }

        //pw
        if(!pwReg.test(pw)){
            $('#PwMsg').text('잘못된 비밀번호입니다. 비밀번호는 영문+숫자 8~15글자로 작성해주세요')
            isValid=false;
        }else{
            $('#PwMsg').text('사용 가능한 비밀번호입니다')
        }

        //checkPw //  a12345678!
        if(checkPw!==pw){
            $('#checkPwMsg').text('비밀번호가 일치하지 않습니다.');
             isValid=false;
        }else{
            $('#checkPwMsg').text('비밀번호가 일치합니다');
        }
        //email
        if(email === ''){ //같지 않으면
            $('#emailMsg').text('이메일을 입력해주세요')
            isValid=false;

        }else if(!emailReg.test(email)){ // 값이 비어있으면
            $('#emailMsg').text('이메일 형식이 올바른지 확인하세요')
            isValid=false;

        }else{ //같으면
            $('#emailMsg').text('올바른 입력값입니다')
        }

        if(isValid){
            alert('회원가입 성공')
        }
    });
});