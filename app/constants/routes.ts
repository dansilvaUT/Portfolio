export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  CONTACT: "/contact",
} as const;

export const ROUTE_MAP = {
  [ROUTES.HOME]: { label: "Home" },
  [ROUTES.ABOUT]: { label: "About" },
  [ROUTES.PROJECTS]: { label: "Projects" },
  [ROUTES.CONTACT]: { label: "Contact" },
};
