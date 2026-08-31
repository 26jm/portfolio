// https://runjs.app/play

/*
여러줄
주석
*/
// 반복문: 똑같은 일을 계속 하지 않으려고
// 조건문: 상황에 따라 다른 결과를 만들기 위해서  -> 미디어쿼리로 현재 화면 사이즈에 따라 다른 배경화면을 출력 
// ctrl + / : 여러줄 주석 단축키 (주석을 지정하거나 해제)
// 한 줄 주석
// html -> CSS -> JS 입히는 방식으로 화면을 렌더링하기 때문에 하나의 파일에 이 코드들을 작성할 때는 BODY의 맨 마지막에 <script> </script> 사이에 작성합니다.

/* 
1. 변수 : 숫자, 문자, boolean(참.거짓), null
선언과 할당으로 변수를 만들 수 있습니다. 
- var: 매번 만들고 지울 수 있는 방
- let: 한번 만들면 값을 바꾸는 건 가능하지만, 새로 만들거나 지울 수는 없는 방
- const: 한번 만들면 값을 바꾸거나 새로 만들거나 지울 수 없는 방
*/

var a = 1; //세미클론으로 마침표를 찍습니다
a

let b = "apple"
b
b = "alter"
b

const c= "apple";
c



// 코드가 길어지면, 여러사람이 작업을 하게 되면 var는 권장되지 않습니다. 
// const로 다 만들고 나서 변경이 필요해지는 변수들은 let으로 바꾸기를 권장합니다. 

/*
2. 변수 명명규칙
#camelCase : 소문자로 시작하고 띄어쓰기 자리마다 대문자로 처리하는 이름 규칙
# PascalCase: 대문자로 시작하고 띄어쓰기 자리마다 대문자로 처리하는 이름 규칙 (고유값 작은 변수를 더 크게 관리하기 위한. calass 이름 같은 변수보다 더 큰 개념을 담는 변수명에는 파스칼 케이스를 사용한다)
# snake_case: 소문자로 시작하고, 띄어쓰기 자리마다 _(언더바)로 처리하는 이름 규칙 (Python에서 일반적으로 사용)
#kebab-case: 소문자로 시작하고, 띄어쓰기 자리마다 -(하이픈dash)으로 처리하는 이름 규칙 (html,css 같은 웹사이트용에서 일반적으로 사용)
- camelCase 또는 snake_case를 권장합니다.
- class를 만들때는 PascalCase를 씁니다.
- 숫자, _, $을 변수명에 사용 가능합니다. 근데 숫자는 맨 앞에는 들어올 수 없습니다.
- 공백, 마침표, 자바스크립트가 이미 쓰는 keyword(예약어)는 불가합니다.
*/


var numEdit1 = 2;
var num_edit_ = 3;
var _numedit = 4;





/*
3. 자료형 
- 7개의 기본자료형(primitive, 원시자료형.기본자료형. 데이터타입), 1개의 참조자료형(reference, JS에서는 모두 object로 찍힘// 자리를 참조해서 a를 찍으면 어느 자리에 값이 들어있다고 알려줘서 값을 내보임)  
  - number(숫자) : 정수, 실수를 모두 number 취급 (다른 언어와 달리 소수를 float, 정수를 int로 구분하지 않습니다.)
  - string(문자열)
  - boolean: true, false로 반환
  - null: 값이 없음. 자료형은 object로 찍힘. 웬만하면 우리가 작성하는 빈방에는 null로 채웁니다.
  - undefined: 정의되지 않음
      - 값을 대입하지 않은 변수 / 리턴이 없는 함수의 실행 결과 / 존재하지 않는 속성을 가리킬 때 자바스크립트가 돌려주는 결과
  - symbol: 고유하고 변경할 수 없는 값. '
  -bigInt: 매우 큰 정수를 나타내는 자료형. 숫자 뒤에 소문자 n을 붙여서 관리.
  - object: 객체
    - 배열, 날짜, 함수, Map, Set, 정규식
*/

var num1 = 1; // 정수
num1;

typeof (num1);  // number
console.log(typeof(num1));

// BigInt
// number가 100% 정확하게 표현할 수 있는 가장 큰 정수는 9,007,199,254,740,991(약 9007조)입니다. 이 숫자를 넘어가는 순간 자바스크립트는 계산 실수를 하기 시작합니다.
console.log(9007199254740992 === 9007199254740993); // true
// 1. 숫자 끝에 n 붙이기 (가장 많이 씀)
const bigNum1 = 123456789012345678901234567890n;

// 2. BigInt() 함수 사용하기 (주로 문자열을 변환할 때 씀)
const bigNum2 = BigInt("123456789012345678901234567890");

console.log(typeof bigNum1); // "bigint"


// 3. String (문자들을 순서대로 늘어놓은 덩어리. 다른 것의 character들을 한꺼번에 줄에 꿰어놓은 집합)
var str = "안녕하세요"; //큰따옴표 혹은 작은 따옴표로 글자 덩어리를 묶어줍니다.
console.log (str) ; //str이라는 변수에 넣고, 확인해보고, 자료형도 확인해보세요, "안녕하세요 "라고 김연지가 말했다.

var str_1 = '"안녕하세요"라고 김연지가 말했다.'
str_1;
console.log (str_1) ; 

var str_2 = " '안녕하세요.'라고 김연지가 말했다.";
console.log(str_2)
// 작은 따옴표를 보호하기 위해 역슬래시가 찾았다.

// -4. boolean - 소문자로 작성합니다: true / false python에서는 true, false의 첫글자가 대문자. java script 모카였다가 이름 자바스크립트로 바꿈.
var bool = true ;
bool
console.log(typeof(bool)) ; 


// -5. null : 개발자가 대입해놓은 값이 없음 (뭔가 들어갈게 있는데 지금 안들어갔다.)
// 'object'로 자료형이 찍힘. 자바스크립트의 자체 버그. 그러나 그대로 유지되고 있습니다.
var null_1 = null;
//--------
// 할당. memory에 null_1이라는 방을 준비하세요
//           -----
//           대입.
console.log(typeof(null_1))
//'object'로 자료형이 찍힘. 자바스크립트의 자체 버그. 그러나 그대로 유지중.
// js 에서 null을 확인할 때는 Boolean으로 형변환을 해서 false 여부로 null 타입을 체크한다.
console.log(Boolean(null_1));

//-6. undefined -> 인터프리터가 코드를 돌렸는데 줄게 없음 (return 값이 없음) 들어있는게 없어서 텅비어있음.
var undef1;
//---------
//  할당
console.log(typeof(undef1));
console.log(Boolean(undef1))



/* 실습:
- alert() - 출력만 가능한 팝업을 띄우는 함수
- confirm() - true, false 값만 입력받을 수 있습니다.
- prompt() - 값을 직접 입력받을 수 있습니다. input()

mathScore 라는 변수에 수학점수, engScore라는 변수에 영어점수를 입력받고 
그 결과를 avgScore라는 변수에 (mathScore+engScore)/2 
평균값을 저장합니다. 
 */ 

//대문자로 자료형을 입력하면 형변환함수가 됩니다.
//Number을 붙이지 않으면 숫자를 그대로 이어서 계산해버림. 
/*alert("시작합니다");

if (confirm("입력을 진행하시겠습니까?")) {
    const mathScore = Number(prompt("수학점수를 입력하세요:"));
    const engScore = Number(prompt("영어점수를 입력하세요:"));
    const avgScore = (mathScore + engScore) / 2;

    alert("평균 점수: " + avgScore);
}
*/

var avgScore = 90 ;
console.log('평균점수는 ${avgScore} 점입니다.')

console.log(Number("90"))
console.log(Number("90년생"))

//Boolean():false, 0, null, undefined, '',Nan은 false/ 반 참조자료형은 true가 나옵니다. (){}
console.log(Boolean(undefined))
console.log(Boolean(NaN))


/* 4. 연산자 우선순위 - 다른언어와 같습니다
  1) ( )- 감싸준 연산자가 제일 상위에 동작
  2) ** 제곱
  3) -, 음수부호 
  4) * / %(나머지) 
  5) +, - 연산이 동작합니다.
  6) ++, --   a -=  1   a--(후위식) / --a(전위식)
*/

var num = 0;
num;
num++; //후기증가연산자쓰고 메모리에 돌려넣을 때 1을 더해서 돌려놓음
num
++num;
num

var resultA = ++num;
resultA
num

var num1 =0;
++num1; //전위증가연산자. 마찬가지로 1을 더해서 돌려놓음
num1;
--num1;
num1;
--num1;
num1;

var resultB = num1++
num1
resultB

console.log(3**3)


/* 5. 비교연산자
= (대입연산자) var a =1;
== (항등연산자, 동등성 비교): 값이 같은지
=== (완전항등연산자, 동일성 비교): 자료형, 값까지 비교
*/

console.log(1 =="1"); //항등연산자 true
console.log(1==="1"); // ===을 손에 익히는 것을 권장: 자료형과 값을 함께 비교

console.log(1 != "1"); //항등연산자 
console.log(1 !== "1"); // ===을 손에 익히는 것을 권장: 자료형과 값을 함께 비교

/* 
6. 논리연산자 &&(and), ||(or), !(not) 
*/

console.log(true && true)// and=둘다 참이어야 true
console.log(false && true) //
console.log(false || true) // 둘 중 하나라도 참이면 true

console.log(!true && true) //원래 조건의 반대
console.log(!false && true)
console.log(!false  || true)

// 7. 조건문 : if ~ else if ~ else / switch ~ case 문이 존재합니다. 
//if (조건)[]
//if 
//Boolean(true)
if (1=="1"){
  console.log("참입니다!")
} else if (2=="2"){ 
  console.log("참이네요") } else{ //else절에는 다른 조건을 작성하는 부분이 없습니다.
  console.log("거짓입니다")}




/* 실습1: 아래 자바스크립트가 제공하는 Date 객체를 활용하여
현재 시간이 12시보다 작은 시간이면 AM, 큰 시간이면 PM을 출력하는 시계를 만들어 주세요. */
let date = new Date() // 현재 날짜와 시간 기준으로 생성; // 입력받은 문자열을 파싱하여 생성 - 한국시간대라서 -9해서 출력됨
date

console.log(date.getDate())
console.log(date.getHours())


if (date.getHours()<12) {
  console.log('AM ${date.getHours()} 시')
} else {
  console.log('PM $date.getHours() 시')
}

///2.한번 변수에 담아놓고 조건문 안에서 계속 재사용

let hour = date.getHours();
console.log(hour)


if (hour < 12) {
  console.log(`AM ${date.getHours()} 시`)
  // else 이면 PM 
} else {
  console.log(`PM ${date.getHours()-12} 시`)
}


// date.getFullYear();
// date.getMonth()+1; // 월이 0부터 시작함 
// date.getDate();
// date.getDay(); // 0(일) ~ 6(토)
// date.getHours(); // 0 ~ 23
// date.getMinutes(); // 0 ~ 59


/* swtich (명제) {
    case (1) : 조건 만족시 실행문
               break;
    case (2) : 조건 만족시 실행문
               break;
    default: 위의 모든 조건을 만족하지 못할 경우 실행문 
              break; // 마지막이면 안 걸어도 됩니다.
}
*/



/* 실습2: if / switch 문으로 각각 작성해보세요.
1. 짜장면  2. 짬뽕   3. 샐러드 중 하나를 받으면 
menu + 를 드시는군요. 를 출력
1, 2, 3 이 아닌 경우는 '그럼 뭐 드실래요?'를 출력해보세요. */


/* 실습2: if / switch 문으로 각각 작성해보세요.
1. 짜장면  2. 짬뽕   3. 샐러드 중 하나를 받으면 
menu + 를 드시는군요. 를 출력
1, 2, 3 이 아닌 경우는 '그럼 뭐 드실래요?'를 출력해보세요. */
/* 실습2: if / switch 문으로 각각 작성해보세요.
1. 짜장면  2. 짬뽕   3. 샐러드 중 하나를 받으면 
menu + 를 드시는군요. 를 출력
1, 2, 3 이 아닌 경우는 '그럼 뭐 드실래요?'를 출력해보세요. */


//if문. ==(값만), ===(값과 자료형을 함께 비교)
var menu = "짜장면"

if ( menu === "짜장면"){
  console.log(menu+ "을 드시는군요")
} else if (menu ==="짬뽕") {
  console.log(menu+ "을 드시는군요")
} else if (menu ==="샐러드") {
  console.log(menu+ "을 드시는군요")
} else {
  console.log("그럼 뭐 드실래요?")
}


/* 실습2: if / switch 문으로 각각 작성해보세요.
1. 짜장면  2. 짬뽕   3. 샐러드 중 하나를 받으면 
menu + 를 드시는군요. 를 출력
1, 2, 3 이 아닌 경우는 '그럼 뭐 드실래요?'를 출력해보세요. */

switch (menu) {
  case ("짜장면"):
    console.log(menu + "를 드시는군요 ");
    break;
  case ("짬뽕"):
    console.log(menu + "를 드시는군요 ")
    break; // 코드블럭({}) 바깥으로 강제로 나가게 만드는 명령문 
  case ("샐러드"):
    console.log(menu + "를 드시는군요 ")   
    // break; // 어차피 마지막 줄이라 생략 가능  
  default: // 셋 다 참이 아닐 경우 (else)
    console.log("그럼 뭐 드실래요?")
} 


// 복합조건문: 연산자 && (and) / || (or) / ! (not) 으로 여러개 조건을 한번에 비교할 수 있습니다.
if (menu === "짜장면" || menu === "짬뽕" || menu === "샐러드") { // 조건1 
  console.log(menu + "를 드시는군요.") // 참일 경우의 동작은 같으므로 
} else {
    console.log("그럼 뭐 드실래요?")
}


// 삼항연산자 - 불표현식 ? 참 : 거짓
(menu === "짜장면" || menu === "짬뽕" || menu === "샐러드") ? 
  console.log(menu + "를 드시는군요.") :
    console.log("그럼 뭐 드실래요?")
    

//switch 문은 딱 그 ㅁ값을 갖고 사용한다. 여러개 or 표시 불가능) 맨 앞에것만 비교하고 나머지는 넘어갑니다. (단락평가) -> 그래서 스위치문 잘 안씀
console.log("------------맨 앞의 값만을 가지고 사용한다. --------------")
switch (menu) {
  case ("짜장면" || "짬뽕" || "샐러드"): // 맨 앞의 것만 비교하고 아니면 넘어갑니다.(단락평가)
    console.log(menu + "를 드시는군요 ")   
    break;   
  default: // 셋 다 참이 아닐 경우 (else)
    console.log("그럼 뭐 드실래요?")
} 
