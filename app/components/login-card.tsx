import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import type { AuthUser } from "~/types/auth-user";
import { useNavigate, useRevalidator } from "react-router";
import { NAV_ROUTES } from "~/config/nav-routes";
import { loginUser } from "~/service/auth-service";

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default function LoginCard() {
  const navigate = useNavigate();
  const revalidator = useRevalidator();
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof loginSchema>) {
    const user: AuthUser = {
      username: data.username,
      password: data.password,
    }
    loginUser(user);
    revalidator.revalidate();
    navigate(NAV_ROUTES.HOME);
  }

  return (
    <Card className="h-min w-sm">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          <p>This is a mock login, any login data will work</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className="flex flex-col gap-6">
              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field className="gird gap-2">
                    <FieldLabel htmlFor="username">username</FieldLabel>
                    <Input
                      {...field}
                      id="username"
                      type="username"
                      placeholder="username"
                      required
                    />
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field className="grid gap-2">
                    <FieldLabel htmlFor="password">password</FieldLabel>
                    <Input
                      {...field}
                      id="password"
                      type="password"
                      placeholder="password"
                      required
                    />
                  </Field>
                )}
              />
            </div>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" form="login-form" className="w-full">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}
