/*Create a combat function that takes the player's current health and the amount of damage received,
 and returns the player's new health. Health can't be less than 0.
 */

/*Создайте боевую функцию, которая принимает текущее здоровье игрока и полученный урон, и возвращает новое значение
 здоровья игрока. Здоровье не может быть меньше 0 .
 */


function combat(health, damage) {
	return ((health -= damage) < 0) ? 0 : health
}

//console.log (combat(10));