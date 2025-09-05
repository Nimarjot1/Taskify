import { signInSchema } from "@/lib/schema";
import React from "react";
import { useForm } from "react-hook-form"; // fixed useform -> useForm
import { zodResolver } from "@hookform/resolvers/zod"; // fixed @hookfrom -> @hookform
import { z } from "zod";

type SignInFormData = z.infer<typeof signInSchema>;

const SignIn = () => {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleOnSubmit = (values: SignInFormData) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4">
      SignIn
      <card className="max-w-md w-full shadow-xl">
        <CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                        <FormField 
                        control={form.control}
                        name="email"
                        reder={({field})=>(
                            <FormItem>
                                <FormLabel>Email Address</FormLabel> <FormControl><Input type="email" placeholder="email@example.com" {...field}/>
                                     </FormControl>
                                     <FormMessage />
                            </FormItem>
                        )}
                        />
                    </form>
                </Form>
            </CardContent>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
      </card>
    </div>
  );
};

export default SignIn;
