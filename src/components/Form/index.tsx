import { FormSignIn } from "./FormSignIn/index.js";
import { FormSignUp } from "./FormSingnUp/index.js";

type FormProps = {
    type: "signin" | "signup"
}

export function Form({ type }: FormProps) {
    return (
        <>
            {type === "signin" ?
                <FormSignIn />
                :
                <FormSignUp />
            }
        </>
    )
}