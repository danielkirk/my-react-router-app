import { TestFile } from "~/src/components/testFile";
import type { Route } from "../+types/home";
import { useState } from 'react';
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marketing" },
    { name: "Description", content: "Welcome to the marketing page!" },
  ];
}

export default function Layout()
{
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return  (
    <>
        <h1>Home</h1>
        <TestFile int={2} str="string" bool={true} />
        <div className="flex flex-col">
          <button onClick={() => setCount(prev => prev +1)}>Clicked {count} times(s)</button>
          <button className="mt-1 bg-gray-300" onClick={() => navigate("/marketing")}>Redirect to Market</button>
        </div>
    </>  
  );
}
