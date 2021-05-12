import api from "../api";

const addEtudiant = async (etudiant) => {
  const { nom, prenom, age, email, password } = etudiant;
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
const addTeacher = async (token, etudiant) => {
  const { nom, prenom, cin, email, password } = etudiant;
  let data = await api.post(
    "admin/teachers",
    { name: nom.trim() + " " + prenom.trim(), cin, email, password },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data.data;
};
export { addEtudiant, addTeacher };
