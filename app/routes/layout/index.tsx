import { TestFile } from "~/components/fw/testFile";
import { Route } from "../+types/layout";

export async function clientLoader({ params }: Route.ClientLoaderArgs ) {
    const guid = sessionStorage.getItem("guid") ? sessionStorage.getItem("guid") : "";
    return { ...params, guid };
}

export default function Home({ loaderData }: Route.ComponentProps) {
    console.log(loaderData);
    return <>
            <TestFile int={3} str="visuals" bool={true} />
        </>;
}
