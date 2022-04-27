// 1.cho người dùng nhập vào 3 số nguyên. viết chương trình xuất 3 số theo thứ tự tăng dần
function ex1(arr){
    for(var k=arr.length-1; k>=0; k--){
        var noSwapped =true;
        for(var i=0; i< arr.length; i++){
            if(arr[i]> arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1]= temp;
                noSwapped=false;
            }
        }
        if(noSwapped){
            console.log(arr);
            return;
        }
    }
    console.log(arr);
}
ex1([7,2,9]);
2.
3.
// 4.Cho 3 số nguyên, hãy viết chương trình xuất ra có bao nhiêu số lẻ và bao nhieu so chẵn
function ex4(arr){
    var sochan = 0;
    var sole = 0;
    for(var i=0; i< arr.length; i++){
        if(arr[i]%2 === 0){
            sochan++;
        }else{
            sole++;
        }
    }
    console.log("Trong 3 số nguyên có " + sochan +" số chẵn và " + sole+" số lẻ");

}
ex4([6,2,9]);
// 5.Viết chương trình nhập tháng và cho biết tháng đó có bao nhiêu ngày
function ex5(n){
    if(n===1 || n===3||n===5 ||n===7 ||n===8||n===10||n===12){
        console.log("Tháng "+ n + " có 31 ngày");
    }else if(n===4 ||n===6||n===9||n===11){
        console.log("Tháng "+ n +" có 30 ngày");
    }else if(n===2){
        console.log("Tháng "+ n + " có 29 ngày");
    }else
        console.log("Tháng không hợp lệ!")
}
ex5(4);
// 8.nhập vào số nguyên có 3 chữ số và in ra cách đọc
function ex8(n){
    var a = n%10;
    var b = (n/10)%10;
    var c = n/100;
    if(n<100 || n>999){
        console.log("Hãy nhập số có 3 chữ số");
    }else{
        switch(c){
            case 1: 
                console.log("Một trăm ");
                break;
            case 2: 
                console.log("Hai trăm ");
                break;
            case 3: 
                console.log("Ba trăm ");
                break;
            case 4: 
                console.log("Bốn trăm ");
                break;
            case 5: 
                console.log("Năm trăm ");
                break;
            case 6: 
                console.log("Sáu trăm ");
                break;
            case 7: 
                console.log("Bảy trăm ");
                break;
            case 8: 
                console.log("Tám trăm ");
                break;
            case 9: 
                console.log("Chín trăm ");
                break;
        }
        if(b%10===0 && a!=0){
            console.log("lẻ");
        }else{
            switch(b){
                case 1: 
                    console.log("mười");
                    break;
                case 2: 
                    console.log("hai mươi ");
                    break;
                case 3: 
                    console.log("ba mươi ");
                    break;
                case 4: 
                    console.log("bốn mươi ");
                    break;
                case 5: 
                    console.log("năm mươi ");
                    break;
                case 6: 
                    console.log("sáu mươi ");
                    break;
                case 7: 
                    console.log("bảy mươi ");
                    break;
                case 8: 
                    console.log("tám mươi");
                    break;
                case 9: 
                    console.log("chín mươi ");
                    break;

            }
            if (a===0){
                console.log("Không hợp lệ");
            }else{
                switch(a){
                    case 1: 
                        console.log("mười");
                        break;
                    case 2: 
                        console.log("hai ");
                        break;
                    case 3: 
                        console.log("ba  ");
                        break;
                    case 4: 
                        console.log("bốn ");
                        break;
                    case 5: 
                        console.log("năm  ");
                        break;
                    case 6: 
                        console.log("sáu ");
                        break;
                    case 7: 
                        console.log("bảy  ");
                        break;
                    case 8: 
                        console.log("tám ");
                        break;
                    case 9: 
                        console.log("chín ");
                        break;
                }

            }
        }     
    }
}
ex8(256);
// 9.Nhập 3 cạnh tam giác và cho biết đó là tam giác gì
function ex9(a, b, c){
    if((a+b) <= c || (a+c)<=b ||(b+c)<= a){
        console.log("Tam giác không hợp lệ!");
    }else{
        if((a === b) && (b === c))
		{
			console.log("Là tam giác đều");
		}else{
			if(a * a + b * b === c * c || a * c + c * c === b * b || b * b + c * c === a * c)
			{
				console.log("Là tam giác vuông");
			}else{
                if(a === b || a === c || b === c){
                    console.log("Là tam giác cân");
                }else{
                    console.log("Là tam giác thường");
                }
            }
		}
    }
}
ex9(2,4,5);
// 10. In một bảng số từ 1-100 thỏa mãn điều kiện: (gợi ý dùng 2 vòng for lồng 
// nhau, để ý chỗ bước nhảy)

function ex10(){
    for( var i = 1; i<=10; i++){
        for ( var j=i; j<=100; j+=10){
            console.log(j + "\n");
        }
        console.log("\n");   
    }

}
ex10();

// 11. Viết function nhận vào tham số là một mảng số nguyên,tìm và in ra các số
// nguyên tố trong mảng
function ex11(arr){
    function isprime(n){
        for(var i=2; i<=Math.sqrt(n); i++){
            if(n%i===0){
                return false;
            }   
        }
        return true;
    }
    var res = [];
    for(var i = 0; i< arr.length; i++){
        if(isprime(arr[i]) == 1){
            res.push(arr[i]);
        }
    }
    console.log(res);

}
ex11([2,4,5,6,7,8,1,9]);

// 12.Viết function nhận vào tham số n, tính S=(2+3+4...+n)+2n
function ex12(n){
    var tong = 0;
    if(n < 2){
        console.log("Nhập n không hợp lệ");
    }else{
        for( var i = 2; i<=n ; i++){
            tong += i;
        }
        return tong + (2*n);
    }
}
console.log(ex12(10));
// 13.Viết function nhận vào tham số n, tính số lượng ước số của n. Vd: n = 8 => 
// Ước số của 8 là : 8,4,2,1
function ex13(n){
    var dem = 0 ;
    for(var i=1; i<=n; i++ ){
        if(n%i===0)
            dem++;
    }
    console.log(n + " có " + dem + " ước số");
}
ex13(12);
// 14.Viết chương trình tìm số đảo ngược của 1 số nguyên dương n nhập từ bàn 
// phím.Vd :1234 => 4321 (Gợi y: duyệt chuỗi giống như duyệt mảng)
function ex14(n){
    n = n.toString();
    return n.split("").reverse().join("");
}
console.log("Số đảo ngược là: " +ex14(1234));

// 15.Tìm x nguyên dương lớn nhất, biết 1+2+3+...+x ≤100

function ex15(){
    var x = 0;
    var tong = 0;
    do{
        x += 1;
        tong += x;
    }while(tong + (x+1) <= 100);
        console.log("x = " + x);
}
ex15();



// 16. Viết function nhận vào số n, in ra bảng cửu chương tương ứng với số đó. 
// Vd: n = 3
function ex16(n){
    for(var i=1; i<=10; i++){
        console.log(i + " * "+ n+ " = "+ n*i);
    }
}
ex16(5);
// 17.Viết hàm chia bài cho 4 người chơi
//  Cho 4 mảng, đại diện cho 4 người chơi
//  var players = [ [], [], [], [] ];
//  Và 1 mảng bài: var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S", 
// "AS", "7H", "9K", "10D"]
// Yêu cầu viết code để chia cho mỗi player 3 lá theo luật, chia lần lượt mỗi 
// người 1 lá
//18.Vừa gà vừa chó, bó lại cho tròn, 36 con, 100 chân chẵn
function ex18(){
    for ( var i=9; i < 25; i++){
        if((i*2+(36 -i)*4) === 100){
            console.log("Số gà là: "+ i + " và số chó là: " + (36-i));
        }
    }
}
ex18();

// 19. Nhập vào số giờ và số phút => góc lệch giữa kim giờ và kim phút.
