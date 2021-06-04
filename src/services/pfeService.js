import api from "../api";

// const getAllPfe = async (token) => {
//   let data = await api.get("admin/pfe", {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   });
//   return data.data;
// };
const getAllPfe = async (token) => {
  let data = await api.get("teachers/all", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
const getAllPfeByStudent = async (token, id_student) => {
  let data = await api.get("student/pfe/student/" + id_student, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
const getAllPfeByTeacher = async (token, id_tutor) => {
  let data = await api.get("teachers/pfe/teacher/" + id_tutor, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
const getPfeNonTaken = async (token) => {
  let data = await api.get("teachers/pfe", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
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
  const res = await api.post("students/pfe", pfe, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.data.data;
};

const acceptPfe = async (idPfe, id_prof, token) => {
  await api.post(
    "teachers/accept/" + idPfe,
    { tutorId: id_prof },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};
const undoPfe = async (idPfe, id_prof, token) => {
  await api.post(
    "teachers/undo/" + idPfe,
    { tutorId: id_prof },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};
const updatePfe = async (token, pfe, id_pfe) => {
  let data = await api.put("students/pfe/" + id_pfe, pfe, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};
export {
  getAllPfe,
  addPfe,
  acceptPfe,
  updatePfe,
  getPfe,
  getAllPfeByTeacher,
  getAllPfeByStudent,
  getPfeNonTaken,
  undoPfe,
};
