import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

export default [layout("routes/layout/layout.tsx", [
    index("routes/layout/index.tsx"),
    route("/dashboard/:sid" , "routes/dashboard/home.tsx"),
    ...prefix("setup/:sid", [
        index("routes/setup/home.tsx")
    ])
]), 
]  satisfies RouteConfig;
