import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

export default [route("/", "routes/home.tsx", [
    index("routes/marketing/layout.tsx"),
    route("marketing", "routes/marketing/childPage.tsx"),
])]  satisfies RouteConfig;
