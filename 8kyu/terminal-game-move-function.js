/*Terminal game move function
In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces
indicated by the die two times.
 */
	
/*Create a function for the terminal game that takes the current position of the hero and the roll (1-6)
 and return the new position.
 */

/*
Функция перемещения в терминальной игре
В этой игре герой перемещается слева направо. Игрок бросает кубик и дважды перемещается на указанное кубиком
количество клеток.
 */
	
/*Создайте функцию для игры в терминале, которая принимает текущую позицию героя и результат броска кубика (1-6)
 и возвращает новую позицию.
 */
	
//Example:
//move(3, 6) //should equal 15

let position = 3
let roll = 6

function move (position, roll) {
	 return position + roll * 2
}

console.log (move(position, roll));
console.log (move(0, 4));
console.log (move(position, roll));