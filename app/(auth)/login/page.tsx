import Card from "@components/ui/Card";
import CardDescription from "@components/ui/CardDescription";
import CardRow from "@components/ui/CardRow";
import CardTitle from "@components/ui/CardTitle";
import TextLink from "@components/ui/TextLink";
import LoginForm from "./LoginForm";

export default function Page() {
  return (
    <Card>
      <CardRow>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login with your account to proceed</CardDescription>
      </CardRow>
      <CardRow>
        <LoginForm />
      </CardRow>
      <CardRow>
        <p>
          Don&apos;t have an account yet?{" "}
          <TextLink href="/register">Register</TextLink>
        </p>
      </CardRow>
    </Card>
  );
}
