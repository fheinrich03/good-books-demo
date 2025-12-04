import LoginCard from "@/components/login-card";

export default function LoginPage() {
  return (
    <div className="grid justify-center">
      <h1 className="my-10 text-center text-5xl font-semibold">Login</h1>
      <div
        id="content"
        className="grid h-full w-7xl items-center justify-center py-16"
      >
        <LoginCard />
      </div>
    </div>
  );
}
