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

type SignupFormData=z.infer<typeof signUpSchema>;

const SignUp = () => {
  const form=useForm<SignupFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues:{
      email: "",
      password: "",
      name:"",
      confirmPassword:"",
    },
  });

  const handleOnSubmit = (values: SignupFormData)=>{
    console.log(values);
  }
  return <div
  className='min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4'
>
  <Card className="max-w-md w-full shadow-xl">
    <CardHeader className="text-center mb-5">
      <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
      <CardDescription className="text-sm text-muted-foreground">create an account to continue</CardDescription>
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
            name="email"
            render={({ field })=>(
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="John doe" {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}></FormField>


            <FormField control={form.control}
            name="password"
            render={({ field })=>(
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="**********" {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}></FormField>

            <FormField control={form.control}
            name="password"
            render={({ field })=>(
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="**********" {...field}/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}></FormField>


            <Button type="submit" className="w-full">Sign up</Button>
          </form>

        </Form>
        <CardFooter><div className="flex items-center justify-center mt-6">
          <p className="text-sm text-muted-foreground">
            Already have an account?<Link to="/sign in">Sign in</Link>
          </p>
          
          </div></CardFooter>
      </CardContent>
  </Card>
</div>
  
};

export default SignUp;
