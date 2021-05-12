import api from "../api";

const getAllTeacher = async (token) => {
  let data = await api.get("admin/teachers", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
const getTeacher = async (token, id_teacher) => {
  let data = await api.get("admin/teachers/" + id_teacher, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
const deleteTeacher = async (token, id_teacher) => {
  let data = await api.delete("admin/teachers/" + id_teacher, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data.data;
};
const updateTeacher = async (token, teacher, id_teacher) => {
  let data = await api.put(
    "admin/teachers/" + id_teacher,
    { ...teacher },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data.data;
};
export { getAllTeacher, getTeacher, deleteTeacher, updateTeacher };
