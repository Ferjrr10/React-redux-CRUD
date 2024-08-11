import { Button, Card, TextInput, Title } from "@tremor/react";
import { addNewUser } from "../store/users/slice";
import { useAppDispatch } from "../hook/store";

export function CreateNewUser() {
    const dispatch = useAppDispatch();

    const addUser = ({ name, email, github }: { name: string; email: string; github: string }) => {
        dispatch(addNewUser({ name, email, github }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const github = formData.get("github") as string;

        addUser({ name, email, github });
        form.reset()
    };

    return (
        <Card style={{ marginTop: "16px" }}>
            <Title>Create New User</Title>
            <form onSubmit={handleSubmit}>
                <TextInput
                    placeholder="Enter name"
                    name="name"
                />
                <TextInput
                    placeholder="Enter email"
                    name="email"
                />
                <TextInput
                    placeholder="Enter GitHub username"
                    name="github"
                />
                <div>
                    <Button
                        type="submit"
                        style={{ marginTop: "16px" }}>
                        Create User
                    </Button>
                </div>
            </form>
        </Card>
    );
}
