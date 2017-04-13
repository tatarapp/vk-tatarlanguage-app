//Массив вопросов и ответа
var data_array = [
  ["<img src='img/1.jpg'><br>","Кыска чәчле","Озын чәчле","Баш","Озын толым",3],
  ["<img src='img/2.jpg'><br>","Чәч","Чал чәчле","Кара чәчле","Жирән чәчле",2],
  ["<img src='img/3.jpg'><br>","Көчле","Матур кыз","Пеләш","Ябык",1],
  ["<img src='img/4.jpg'><br>","Тырнак","Бармак","Кул","Беләк",3],
  ["<img src='img/5.jpg'><br>","Аяк","Кул юу","Йодрык","Бот",3],
  ["<img src='img/6.jpg'><br>","Уч","Тез","Табан","Укчә",1],
  ["<img src='img/7.jpg'><br>","Батыр","Патша","Ир-ат","Хан",3],
  ["<img src='img/8.jpg'><br>","Халык","Табун","әбиләр","Кызлар",2],
  
  
  ["<img src='img/9.jpg'><br>","Ми","Баш сөяге","Такыя","Тән",1],
  ["<img src='img/10.jpg'><br>","Каравылчы","Тимерче","Пешекче","Очучы",2],
  ["<img src='img/11.jpg'><br>","Күмер","Көмеш","Агач","Тимер",1],
  ["<img src='img/12.jpg'><br>","Балтачы","Кошчы","Укчы","Сугыш",3],
  ["<img src='img/13.jpg'><br>","Табиб","Очучы","Сатучы","Тегүче",2],
  ["<img src='img/14.jpg'><br>","Шагыйрь","Язучы","Рәссам","Сугышчы",2],
  ["<img src='img/15.jpg'><br>","Тәрҗемәче","Спортчы","Янгын сүндерүче","үзе аучы",3],
  ["<img src='img/16.jpg'><br>","Ат","Кәҗә","Ата књгђрчен","Сыер",1],
  ["<img src='img/17.jpg'><br>","Тавык","Эт","Тәкә","Бүре",3],
  ["<img src='img/18.jpg'><br>","Төлке","Дөя","Аю","Бозау",2],
  ["<img src='img/19.jpg'><br>","Үгез","Мөгез","Сөт","Дуңгыз",1],
  ["<img src='img/20.jpg'><br>","Эремчек","Ботка","Шулпа","Бәрәңге",1],
  ["<img src='img/21.jpg'><br>","Көчек","Айгыр","Эт","Бия",3],
  ["<img src='img/22.jpg'><br>","Карбыз","Кабак","Чия","Кыяр",3],
  ["<img src='img/23.jpg'><br>","Йөзем","Кура җиләге","Карлыган","Как",2],
  ["<img src='img/24.jpg'><br>","Кавын","өрек","Кызыл карлыган","Караҗимеш",3],
  ["<img src='img/25.jpg'><br>","Кара бөрлегән","Нарат җиләге","Мүк җиләге","Кара миләш",1],
];

var plus = 0;
var time = 0;
var cur_answer = 0;
var count_answer = data_array.length;

function sec() {
	time++;	
	document.getElementById('time').innerHTML='Затрачено времени: ' + time + ' сек';
}

function check(num){

	if(num == 0){ 
	
		document.getElementById('option1').style.display='inline';
		document.getElementById('option2').style.display='inline';
		document.getElementById('option3').style.display='inline';
		document.getElementById('option4').style.display='inline';
		document.getElementById('question').style.display='inline';

		document.getElementById('option1').innerHTML=data_array[cur_answer][1];
		document.getElementById('option2').innerHTML=data_array[cur_answer][2];
		document.getElementById('option3').innerHTML=data_array[cur_answer][3];
		document.getElementById('option4').innerHTML=data_array[cur_answer][4];
		document.getElementById('question').innerHTML=data_array[cur_answer][0];
		
		document.getElementById('start').style.display='none';
		document.getElementById('end').style.display='inline';
		
		var intervalID = setInterval(sec, 1000);
		
	}else{

		if( num ==  data_array[cur_answer][5]){
			plus++;
			document.getElementById('result').innerHTML='Верно!';
		}else{
			document.getElementById('result').innerHTML="Неверно! Правильный ответ: " + data_array[cur_answer][data_array[cur_answer][5]];
		}
			
		cur_answer++;
		if(cur_answer < count_answer){
		
			document.getElementById('option1').innerHTML=data_array[cur_answer][1];
			document.getElementById('option2').innerHTML=data_array[cur_answer][2];
			document.getElementById('option3').innerHTML=data_array[cur_answer][3];
			document.getElementById('option4').innerHTML=data_array[cur_answer][4];
			document.getElementById('question').innerHTML=data_array[cur_answer][0];
			
		}else{
			
			document.getElementById('time').id = 'stop';
			document.getElementById('option1').style.display='none';
			document.getElementById('option2').style.display='none';
			document.getElementById('option3').style.display='none';
			document.getElementById('option4').style.display='none';
			document.getElementById('question').style.display='none';
			document.getElementById('end').style.display='inline';
			
			var percent =  Math.round(plus/count_answer*100);				
			var res = 'Плохо!';
			if(percent>70) res = 'Хорошо!';
			if(percent==100) res = 'Отлично!';
			
			document.getElementById('result').innerHTML='Правильных ответов: ' + plus + ' из ' + count_answer + ' (' + percent + '%)<br>' + res;
		}
	}
}