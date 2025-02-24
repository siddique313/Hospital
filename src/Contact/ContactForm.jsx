import { useFormik } from "formik";
import { SignUpSchema } from "./sechema/index";

export default function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    textArea: "",
  };
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (value) => {
        console.log(value);
        value.email = "";
        value.name = "";
        value.textArea = "";
      },
    });
  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <form
        action="https://formsubmit.co/siddiqueali531@email.com"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-start gap-3 shadow-2xl w-96 px-8 py-7 bg-transparent"
      >
        <div className="w-full flex flex-col items-start">
          <label className="mb-2" htmlFor="name">
            Name
          </label>
          {errors.name && touched.name ? (
            <p className="text-red-600 text-xs">{errors.name}</p>
          ) : null}

          {errors.name && touched.name ? (
            <input
              className="border-2 border-red-600 outline-none rounded-2xl pl-2 py-1 w-full"
              type="name"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <input
              className="border-2 border-slate-300 outline-none rounded-2xl pl-2 py-1 w-full"
              type="name"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        </div>
        <div className="w-full flex flex-col items-start">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          {errors.email && touched.email ? (
            <p className="text-red-600 text-xs">{errors.email}</p>
          ) : null}
          {errors.email && touched.email ? (
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              autoComplete="off"
              className="border-2 border-red-600 outline-none rounded-2xl pl-2 py-1 w-full"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              autoComplete="off"
              className="border-2 border-slate-300 outline-none rounded-2xl pl-2 py-1 w-full"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        </div>
        <div className="w-full h-full">
          <label htmlFor="">Your FeedBack</label>
          <textarea
            name="textArea"
            placeholder="Your feedback"
            className="border-2 border-gray-300  max-h-24 w-full pl-2 pt-1 rounded-2xl outline-none "
            value={values.textArea}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <button
          disabled={
            values.email.length > 0 &&
            values.name.length > 0 &&
            values.textArea.length > 0
              ? false
              : true
          }
          type="submit"
          className={`w-full ${
            values.email.length > 0 &&
            values.name.length > 0 &&
            values.textArea.length > 0
              ? "bg-black"
              : "bg-[#504B38]"
          } text-white py-1 rounded-2xl text-xl `}
          onClick={() => {
            handleSubmit();
            alert(
              `hey ${values.name} , ${values.email} successfully submitted`
            );
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}
