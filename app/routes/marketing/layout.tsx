import { title } from "process";
import type { Route } from "../+types/home";

interface MarketingProps {
    name: string;
    description: string;
    content: string;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marketing" },
    { name: "Description", content: "Welcome to the marketing page!" },
  ];
}

export default function Home(
    {name, description, content}: MarketingProps) 
{
  return  (
    <>
        <p>{name}</p>
        <p>{description}</p>
        <p>{content}</p>
    </>  
  );
}
