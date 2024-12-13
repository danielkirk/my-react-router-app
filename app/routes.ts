import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

export default [layout("routes/layout.tsx", [
    index("routes/index/index.tsx"),
    route("/dashboard/:sid" , "routes/dashboard/home.tsx"),
    ...prefix("setup/:sid", [
        index("routes/setup/home.tsx")
    ])
]), 
]  satisfies RouteConfig;
