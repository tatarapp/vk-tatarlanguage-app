//Массив вопросов и ответа
var data_array = [
  ["<img src='img/1.jpg' class='q_img'><br>","Кыска чәчле","Озын чәчле","Баш","Озын толым",3],
  ["<img src='img/2.jpg' class='q_img'><br>","Чәч","Чал чәчле","Кара чәчле","Жирән чәчле",2],
  ["<img src='img/3.jpg' class='q_img'><br>","Көчле","Матур кыз","Пеләш","Ябык",1],
  ["<img src='img/4.jpg' class='q_img'><br>","Тырнак","Бармак","Кул","Беләк",3],
  ["<img src='img/5.jpg' class='q_img'><br>","Аяк","Кул юу","Йодрык","Бот",3],
  ["<img src='img/6.jpg' class='q_img'><br>","Уч","Тез","Табан","Укчә",1],
  ["<img src='img/7.jpg' class='q_img'><br>","Батыр","Патша","Ир-ат","Хан",3],
  ["<img src='img/8.jpg' class='q_img'><br>","Халык","Табун","әбиләр","Кызлар",2],
  ["<img src='img/9.jpg' class='q_img'><br>","Ми","Баш сөяге","Такыя","Тән",1],
  ["<img src='img/10.jpg' class='q_img'><br>","Каравылчы","Тимерче","Пешекче","Очучы",2],
  ["<img src='img/11.jpg' class='q_img'><br>","Күмер","Көмеш","Агач","Тимер",1],
  ["<img src='img/12.jpg' class='q_img'><br>","Балтачы","Кошчы","Укчы","Сугыш",3],
  ["<img src='img/13.jpg' class='q_img'><br>","Табиб","Очучы","Сатучы","Тегүче",2],
  ["<img src='img/14.jpg' class='q_img'><br>","Шагыйрь","Язучы","Рәссам","Сугышчы",2],
  ["<img src='img/15.jpg' class='q_img'><br>","Тәрҗемәче","Спортчы","Янгын сүндерүче","үзе аучы",3],
  ["<img src='img/16.jpg' class='q_img'><br>","Ат","Кәҗә","Ата књгђрчен","Сыер",1],
  ["<img src='img/17.jpg' class='q_img'><br>","Тавык","Эт","Тәкә","Бүре",3],
  ["<img src='img/18.jpg' class='q_img'><br>","Төлке","Дөя","Аю","Бозау",2],
  ["<img src='img/19.jpg' class='q_img'><br>","Үгез","Мөгез","Сөт","Дуңгыз",1],
  ["<img src='img/20.jpg' class='q_img'><br>","Эремчек","Ботка","Шулпа","Бәрәңге",1],
  ["<img src='img/21.jpg' class='q_img'><br>","Көчек","Айгыр","Эт","Бия",3],
  ["<img src='img/22.jpg' class='q_img'><br>","Карбыз","Кабак","Чия","Кыяр",3],
  ["<img src='img/23.jpg' class='q_img'><br>","Йөзем","Кура җиләге","Карлыган","Как",2],
  ["<img src='img/24.jpg' class='q_img'><br>","Кавын","өрек","Кызыл карлыган","Караҗимеш",3],
  ["<img src='img/25.jpg' class='q_img'><br>","Кара бөрлегән","Нарат җиләге","Мүк җиләге","Кара миләш",1],
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
		
		document.getElementById('intro_img').style.display='none';
		document.getElementById('question-container').style.display='block';
		document.getElementById('answer-container').style.display='block';
		
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
			
			document.getElementById('answer-container').style.display='none';
			document.getElementById('result').style.display='block';
			document.getElementById('result').innerHTML='Правильных ответов: ' + plus + ' из ' + count_answer + ' (' + percent + '%) - ' + res;
			document.getElementById('question-container').style.display='none';
			document.getElementById('finish_img').style.display='block';
		}
	}
}