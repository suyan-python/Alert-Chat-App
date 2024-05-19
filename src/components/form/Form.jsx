import { useForm } from "@mantine/form";
import axios from "axios";

function Form({ props }) {
  const tryLogin = async () => {
    const name = form.getValues().name;
    const password = form.getValues().password;
    console.log(form.getValues());

    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        username: name,
        password: password,
      });
      console.log(res);

      if (res.status === 200) {
        props();
      }
    } catch (e) {
      alert("User Invalid");
    }
  };

  const trySignup = async () => {
    const name = form.getValues().name;
    const password = form.getValues().password;
    console.log(name);

    try {
      const res = await axios.post("http://localhost:8080/auth/sign-up", {
        username: name,
        password: password,
      });
      // console.log(res);

      if (res.status === 200) {
        alert("SignUp Success");
      }
    } catch (e) {
      alert("SignUp Error");
    }
  };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      password: "",
    },
  });

  return (
    <div className="flex-row text-center mt-72">
      <div className="text-area mb-2">Login</div>
      <div className="form-area">
        <div className="name">
          <input
            label="Name"
            placeholder="Name"
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
        </div>
        <div className="password my-1">
          <input
            mt="md"
            label="Password"
            type="password"
            placeholder="Password"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
        </div>
      </div>

      {/* <div justify="center" mt="xl">
        <button
          onClick={() =>
            form.setValues({
              name: randomId(),
              email: `${randomId()}@test.com`,
            })
          }
        >
          Generate random
        </button>
      </div> */}
      <div className="authentication gap-2 flex justify-center">
        <div className="login">
          <button
            onClick={tryLogin}
            className="bg-red-500 text-white px-2 py-1 my-2 rounded-xl"
          >
            Login
          </button>
        </div>
        <div className="signUp">
          <button
            onClick={trySignup}
            className="bg-red-500 text-white px-2 py-1 my-2 rounded-xl"
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
