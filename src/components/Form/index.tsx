import { FormAddTask } from "./FormAddTask/index.js";
import { FormSignIn } from "./FormSignIn/index.js";
import { FormSignUp } from "./FormSingnUp/index.js";

type FormProps = {
    type: "signin" | "signup" | "addTask"
}

export function Form({ type }: FormProps) {
    return (
        <>
            {type === "signin" ? <FormSignIn />
            : type === "signup" ? <FormSignUp />
            : <FormAddTask />
            }
        </>
    )
}