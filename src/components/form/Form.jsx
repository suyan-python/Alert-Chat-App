import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";

function Form({ props }) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
    },
  });

  return (
    <div className="flex-row text-center mt-72">
      <div className="text-area">Login</div>
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
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
        </div>
      </div>

      <div justify="center" mt="xl">
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
      </div>
      <button
        onClick={props}
        className="bg-red-500 text-white px-2 py-1 rounded-xl"
      >
        Submit
      </button>
    </div>
  );
}

export default Form;
