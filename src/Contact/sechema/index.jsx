import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  name: Yup.string().min(4).max(20).required("Pleas filled a required name"),
  email: Yup.string().email().required("Pleas filled a required email"),
  textArea: Yup.string(),
});
