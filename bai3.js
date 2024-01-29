function doanso(){
    const ran = Math.floor(Math.random() * 2);
    let number;
    number = parseInt(prompt("Hay doan so 0 hoac 1"));
    while(number !== 0 && number !== 1){
        number = parseInt(prompt("So khong hop le, yeu cau nhap lai"));
    }
    while(number === 0 || number === 1){
        while(ran !== number){
            number = parseInt(prompt("Dap an chua chinh xac"));
            while(number !== 0 && number !== 1){
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