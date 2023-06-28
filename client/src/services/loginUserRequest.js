import api from "./api";
export const loginUser = async (data) => {

    console.log(data);
    const user = await api.post("/user/login", data);
    return user;
      
};
