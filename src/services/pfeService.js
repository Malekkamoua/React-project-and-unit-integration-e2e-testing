import api from "../api";

const getAllPfe = async (token) => {
  let data = await api.get("teachers/all", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
const getPfe = async (token, id_pfe) => {
  let data = await api.get("students/pfe/" + id_pfe, {
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
const acceptPfe = async (idPfe, token) => {
  await api.post(
    "teachers/accept/" + idPfe,
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};
const updatePfe = async (token, pfe, id_pfe) => {
  let data = await api.get("students/pfe/" + id_pfe, pfe, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
export { getAllPfe, addPfe, acceptPfe, updatePfe };
