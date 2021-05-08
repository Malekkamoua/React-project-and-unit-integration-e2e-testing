import api from "../api";

const addEtudiant = async (nom, prenom, age, email, password) => {
  let data = await api.post(
    "admin/students",
    { name: nom.trim() + " " + prenom.trim(), age, email, password }
    //  {
    //    headers: {
    //      Authorization: "Bearer " + token,
    //    },
    //  }
  );
  return data.data;
};
export { addEtudiant };
