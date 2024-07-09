// const axios = require("axios");
//ณฐพร ไพรินทร์ 660610749
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try{ 
    const resp0 = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo= resp0.data;

    const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);
    const users = resp.data;
        const output = {
          owner: users.name,
          title: todo.title,
          completed: todo.completed
        
                                                                      
      }
   return output;
} catch (err) {

    return "INVALID TODO ID";
};

};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
