// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });
    
    $('.carousel').carousel({
        interval: 2000
    })    
})

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        $('#myDIV').fadeIn();
    } else {
        $('#myDIV').fadeOut();
    }
}

function myBank() {
    // var copyText = document.getElementById("copy_id");//클립보드에 복사할 텍스트 가져옴
    
    // textArea.value = copyText.textContent;//textarea에 텍스트 입력
    // document.body.appendChild(textArea);//body에 textarea 추가
    
    // textArea.select();//선택
    // document.execCommand("Copy");//복사
    // textArea.remove();//생성한 textarea 삭제
    
    alert("복사되었습니다.");
}


