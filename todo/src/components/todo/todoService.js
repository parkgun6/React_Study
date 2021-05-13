import { v4 as uuidv4 } from 'uuid';

const localStorage = window.localStorage


//Create
//모듈(Service))는 소문자로 시작한다.
export const addTodo = (text) => {
    //alert("addTodo")
    const id = uuidv4()
    const obj = { id: id, text: text, complate: false }

    localStorage.setItem(id, JSON.stringify(obj))
}

//Update
export const modifyTodo = (id) => {
    const target = JSON.parse(localStorage.getItem(id))

    target.complate = target.complate ? false : true

    localStorage.setItem(id, JSON.stringify(target))
}

//Delete
export const removeTodo = (id) => {
    localStorage.removeItem(id)
}


//Read
export const getList = () => {
    console.log("Get List")

    //로컬스토리지의 현재 모든 키를 확인한다.
    const keys = Object.keys(localStorage)

    console.log(keys)

    const arr = []

    keys.forEach(key => {
        arr.push(JSON.parse(localStorage.getItem(key)))
    });

    return arr
}