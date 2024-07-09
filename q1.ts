// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getUser = async (userId: number) => {
  /* Your code here */
  try{ 
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const users = resp.data;

  //   const output = {
  //     fullname: users.name
  // };
    //console.log(output);
    return users.name;
} catch (err) {
    //console.log("INVALID USER ID");
    return "INVALID USER ID";
};
}

//test case
const input1 = 1;
const input2 = 100;

//run
getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

// module.exports = getUser;
export default getUser;
