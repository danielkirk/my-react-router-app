import { TestFile } from "~/components/fw/testFile";
import type { Route } from "../+types/layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs ) {
    if(params) {
        console.log(params);
    }
    const guid = sessionStorage.getItem("guid") ? sessionStorage.getItem("guid") : "";
    return { ...params, guid };
}

export default function Home({loaderData,}: Route.ComponentProps) {
  console.log(loaderData);
  return <>
    <TestFile int={2} str="setup" bool={true} />
  </>;
}
