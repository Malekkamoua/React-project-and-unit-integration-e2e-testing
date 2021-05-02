import api from "../api";

const getPfe = async (token) => {
  let data = await api.get("teachers/all", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
const addPfe = async (pfe, token) => {
  await api.post("students/pfe", pfe, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
export { getPfe, addPfe };
