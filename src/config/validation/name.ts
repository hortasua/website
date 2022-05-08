/* eslint-disable */

import { yup } from "utils/yup";

export const isBasicName = yup
        .string()
        .required("Este campo é obrigatório")
        .min(3, "Mínimo de 3 caracteres")
        .max(50, "Máximo de 50 caracteres")
        .matches(/[a-zA-ZÁ-Ź\s]+/, "Não pode conter números/símbolos")

export const isAdminName = yup.
        string()
        .required("Este campo é obrigatório")
        .min(3, "Mínimo de 3 caracteres")
        .max(50, "Máximo de 50 caracteres")