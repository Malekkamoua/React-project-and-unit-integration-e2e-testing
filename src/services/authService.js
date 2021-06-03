import api from "../api";

const addStudent = async (etudiant, token) => {
  const { firstName, lastName, age, email, password } = etudiant;
  let data = await api.post(
    "admin/students",
    { name: firstName.trim() + " " + lastName.trim(), age, email, password },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data.data;
};
const changePassword = async (token, object, role, idUser) => {
  const { oldPassword, newPassword } = object;
  let data = await api.post(
    "changePassword/" + idUser,
    { oldPassword, newPassword, role },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data;
};
const addTeacher = async (token, etudiant) => {
  const { lastName, firstName, cin, email, password } = etudiant;
  let data = await api.post(
    "admin/teachers",
    { name: lastName.trim() + " " + firstName.trim(), cin, email, password },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data.data;
};
export { addStudent, addTeacher, changePassword };
