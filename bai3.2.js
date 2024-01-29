function doanso(){
    const ran = Math.floor(Math.random() * 11);
    let number;
    number = parseInt(prompt("Hay doan so tu 0 den 10"));
    while(number < 0 || number > 10){
        number = parseInt(prompt("So khong hop le, yeu cau nhap lai"));
    }
    while(number >= 0 && number <= 10){
        while(ran !== number){
            number = parseInt(prompt("Dap an chua chinh xac"));
            while(number < 0 || number > 10){
                number = parseInt(prompt("So khong hop le, yeu cau nhap lai"));
            }
        }
        if(ran === number){
            alert("Dap an chinh xac")
            break;
        }
    }
}
doanso();