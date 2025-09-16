import React from 'react'
import type { Route } from '../../+types/root';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Taskhub" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Homepage = () => {
  return (
    <div className="w-full h-screen flex items-center gap-4 justify-center">
      <Link to="/sign-in"><Button className="bg-blue-500 text-white">Login</Button></Link>
      <Link to="/sign-up"><Button variant ="outline" className="bg-blue-500 text-white">Sign Up</Button></Link>
    </div>
  );
};

export default Homepage;
