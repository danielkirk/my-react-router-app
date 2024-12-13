import { Outlet } from 'react-router';
import { Route } from '../+types/layout';

export function meta({}: Route.MetaArgs) {
    return [
      { title: "RIDES" },
      { name: "RIDES", content: "FirstWatch RIDES" },
    ];
  }

async function clientLoader() {
  const guid = sessionStorage.getItem("guid") ? sessionStorage.getItem("guid") : "";
  
}

export default function Layout() {
    return <div>
                Layout page
                <Outlet />
            </div>
}