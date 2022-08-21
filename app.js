import axios from "axios";

const getData = async (user_id) => {
  const userPost = await axios(
    "https://jsonplaceholder.typicode.com/users/" + user_id
  );

  console.log(userPost.data);

  const userPosts = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
  );

  console.log(userPosts.data);
};

export default getData;
