import { yup } from "utils/yup";

export const isPassword = yup.string().required("Este campo é obrigatório");
