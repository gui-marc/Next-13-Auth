import Card from "@components/ui/Card";
import CardDescription from "@components/ui/CardDescription";
import CardRow from "@components/ui/CardRow";
import CardTitle from "@components/ui/CardTitle";
import TextLink from "@components/ui/TextLink";
import RegisterForm from "./RegisterForm";

export default function Page() {
  return (
    <Card>
      <CardRow>
        <CardTitle>Register</CardTitle>
        <CardDescription>Create an account</CardDescription>
      </CardRow>
      <CardRow>
        <RegisterForm />
      </CardRow>
      <CardRow>
        <p>
          Already have an account? <TextLink href="/login">Login</TextLink>
        </p>
      </CardRow>
    </Card>
  );
}
