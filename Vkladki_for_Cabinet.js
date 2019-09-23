// JavaScript Document
var Inform_from_Table = new Array(Array());
var tekst;
//window.onload = function () 
 function Check() 
{
	document.querySelector('.tabs-header').addEventListener('click', fTabs);
	var Kod=0;
	function fTabs (event)
			{
				if(event.target.className=='tab-h')
				{
					var dataTab=event.target.getAttribute('data-tab');
					var tabBody = document.getElementsByClassName('tab-b');
					var tabH = document.getElementsByClassName('tab-h');
					event.target.classList.add("active");
					for(var i=0; i<tabH.length;i++)
						{
							tabH[i].classList.remove('active');
						}
					event.target.classList.add('active');	
						for(var i=0; i<tabBody.length; i++)
							{
								if(dataTab==i)
									{
										tabBody[i].style.display='block';
										if(i==0)
										{
											var Kod=i;	
											Show_all_Cabinets (Kod) ;			
										}
									}
								else
									{
										tabBody[i].style.display='none';			
									}
							}
					}
				}	
	
}
	
	function Show_all_Cabinets (Kod) 
{
		//		document.getElementById('CAB').options.length = 0;
			 var Tabl="";	
						var reqest = new XMLHttpRequest();		
						reqest.onreadystatechange = function () 
						{
							if(reqest.readyState ==4&&reqest.status==200)
								{					
									Answer=reqest.responseText;		
									var LenthAnswer=Answer.length;	
									var Zam4=Answer.split('\"][\"');			
									var zz=Zam4;
									for(var tt=0;tt<zz.LenthAnswer;tt++)
										{
											var Zam3=Zam4[tt].split("\"\"");	
										}														
							 Tabl="<table id='Table_Cabinet' border='3' bordercolor='#999' width='850'>";																			// Создаем табл и названия столбцов
							 Tabl+="<tr><caption>Клиенты кабинетов</caption></tr> ";
							 Tabl+="<tr><th>№ п/п</th><th>Время регистрации</th><th>Фамилия</th><th>Имя</th><th>Работа</th><th>Расположение</th><th>Телефон</th><th>E-Mail</th><th>Логин</th><th>Пароль</th></tr>";									
//									
									for(var k=0;k<zz.length;k++)
										{
									var Zam3=Zam4[k].split("\"\"");	
										Inform_from_Table[k]=Zam3[k].split(",");	
											var ss0=Perekodirovka_UTF_JS (Zam3[2]);         
										 	var ss1=Perekodirovka_UTF_JS (Zam3[3]);    
										   var ss2=Perekodirovka_UTF_JS (Zam3[4]);
										   var ss3=Perekodirovka_UTF_JS (Zam3[5]);
												
									 	Tabl+="<tr><td>"+Zam3[0]+"</td><td>"+Zam3[1]+"</td><td>"+ss0+"</td><td>"+ss1+"</td><td>"+ss2+"</td><td>"+ss3+"</td><td>"+Zam3[6]+"</td><td>"+Zam3[7]+"</td><td>"+Zam3[8]+"</td><td>"+Zam3[9]+"</td></tr>";
;
										}
					 Tabl+="</table> ";
							var tabl2=document.getElementById('Table_Cabinet');																								// Удаление элемента по имени
							tabl2.parentNode.removeChild(tabl2);
						document.getElementById('CAB').insertAdjacentHTML('beforeEnd',Tabl) 
								} // if
							}		//end funct request								
		reqest.open('POST', '../PHP/Read_Cabinety_for_Admin.php',false);
		reqest.setRequestHeader('content-type','application/x-www-form-urlencoded');	
		var str = "Nomer=88";																																	// Это Логин владельца кабинета
		reqest.send(str);	 
		var colorSost="#000";		
	
}

	function Perekodirovka_UTF_JS (tekst)                                    																								// ********************************************  ПЕРЕКОДИРОВКА
	{
	//	for(j=0; j<Kol_Sign; j++)				// Перебираем сигнализаторы
	//			{			
					txt1="";
					otv5=tekst;
						for (var n=0;n<otv5.length;n++)			// Одно  место установки
						{																		//	Начинаем перекодировку из UTF8 в кирилицу
							txt3=otv5.substr(n,1);
							if (txt3=='\\')
								{																// Есть совпадение		
									txt2=otv5.substr(n+2,4);
									n=n+5;
									str7=parseInt(txt2,16);
									txt4=String.fromCharCode(Number(str7));
									txt1=txt1+txt4;	
								}
							else 	txt1=txt1+otv5.substr(n,1);
						}
		//		}
				return txt1;
			}