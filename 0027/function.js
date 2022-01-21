//Задача №1. Будет ли эта функция работать как-то иначе, если убрать else?
// Будет работать одинаково.

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('А родители разрешили?');
    }
}

console.log(checkAge(19))

function checkAge(age) {
	if (age > 18) {
		return true;
	}
	return confirm('Родители разрешили?');
}
console.log(checkAge(17));

// Задача №2 Перепишите функцию, используя оператор '?' или '||'

function checkAge(age) {
    return (age > 18) ? true : confirm("Родители разрешили?");
  }

  function checkAge(age) {
    return ( age > 18 ) || confirm("Родители разрешили?");
  }


// Задача №3 Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}

console.log(min(28, 11));
console.log(min(12, 29));

// №5 Перепишите с использованием функции-стрелки

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );

