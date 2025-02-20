import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout";
import { AppLayout } from "./Components/AppLayout";
import ContactForm from "./Contact/ContactForm";
import About from "./Components/About";
import OurProduct from "./Components/OurProduct";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <AppLayout />,
        },
        {
          path: "/contact",
          element: <ContactForm />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/ourProduct",
          element: <OurProduct />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
