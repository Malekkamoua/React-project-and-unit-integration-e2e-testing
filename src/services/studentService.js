import api from "api";

const getEdudiant = async (token) => {
  let data = await api.get("admin/students", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
const deleteEtudiant = async (token, id_etudiant) => {
  let res = await api.delete("admin/students/" + id_etudiant, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data;
};
export { getEdudiant, deleteEtudiant };
