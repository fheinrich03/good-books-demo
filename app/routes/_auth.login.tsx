import LoginCard from "~/components/login-card";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid gap-8">
        <h1 className="text-center text-2xl font-semibold">Login</h1>
        <LoginCard />
      </div>
    </div>
  );
}
