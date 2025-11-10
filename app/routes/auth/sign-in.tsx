import React from 'react'
import { Form, useForm } from "react-hook-form";
import {signInSchema} from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type SigninFormData=z.infer<typeof signInSchema>;

const SignIn = () => {
  const form=useForm<SigninFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues:{
      email: "",
      password: "",
    },
  });

  const handleOnSubmit = (values: SigninFormData)=>{
    console.log(values);
  }
  return <div
  className='min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4'
>
  <Card className="max-w-md w-full shadow-xl">
    <CardHeader className="text-center mb-5">
      <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
      <CardDescription className="text-sm text-muted-foreground">Sign in to your account to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleOnSubmit)} className='space-y-6'>
            <FormField control={form.control}
            name="email"
            render={({ field })=>(
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email" {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}></FormField>


            <FormField control={form.control}
            name="password"
            render={({ field })=>(
              <FormItem><div className="flex-items-center justify-between">
                <FormLabel>Password</FormLabel></div>
                <Link to="/forget-password" className='text-sm text-blue-600'>Forget password?</Link>
                <FormControl>
                  <Input type="password" placeholder="**********" {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}></FormField>
            <Button type="submit" className="w-full">Sign in</Button>
          </form>
        </Form>
        <CardFooter><div className="flex items-center justify-center mt-6">
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
          </p>
          
          </div></CardFooter>
      </CardContent>
  </Card>
</div>
  
};

export default SignIn;
