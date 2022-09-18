let fruit = ["banana", "grape", "apple", "mango"]

console.log(fruit)
console.log(fruit[1])

fruit[1] = "cherry"
console.log(fruit)

fruit[2] = "tomato"
console.log(fruit[2])

//pop() 배열 마지막 아이템을 뺌
fruit.pop()
console.log(fruit)

//push() 배열 마지막에 아이템 추가
fruit.push("pineapple")
console.log(fruit)

//includes("") ""이 배열 안에 있는지 확인
console.log(fruit.includes("pear"))

//indexOf 아이템의 인덱스 번호 알려줌
console.log(fruit.indexOf("pineapple"))

//slice(2) 2 이후에 있는 아이템들을 없애는
console.log(fruit.slice(2))

//slice(1,3) 1부터 3까지(3은 포함X) 아이템 삭제
console.log(fruit.slice(1, 3))

//splice(2,1) 2에서부터 1개 제거
fruit.splice(2,1)
console.log(fruit)

//slice는 오리지날 배열을 건들지않음, splice는 오리지날 배열을 수정
