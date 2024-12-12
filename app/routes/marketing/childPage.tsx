import { title } from "process";
import type { Route } from "../+types/home";
import { TestFile } from "~/src/components/testFile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Child" },
    { name: "Description", content: "Welcome to the marketing page!" },
  ];
}

export default function Home() 
{
  return  (
    <>
        <TestFile int={2} str="fling" bool={true} />
    </>  
  );
}
