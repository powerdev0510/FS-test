import React from "react";
import { Switch } from "react-router";
import { Route, RouteProps } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "components/Layout";
import Home from "pages/home";
import User from "pages/user";

const mainTitle = "FS Test";

export interface RouterProps extends RouteProps {
  path: string;
  name: string;
  title: string;
  component?: React.FC;
  children?: RouterProps[];
}

export const routes: RouterProps[] = [
  {
    path: "/",
    name: "home",
    title: "Home",
    component: Home,
  },
  {
    path: "/user/:id",
    name: "user",
    title: "User",
    component: User,
    exact: true
  },
];

const getRoutes = (routeList: RouterProps[]): RouterProps[] => {
  const list = [];

  for (const route of routeList) {
    list.push({
      name: route.name,
      title: route.title,
      path: route.path,
      component: route.component,
    });

    if (route.children) {
      list.push(...getRoutes(route.children));
    }
  }

  return list;
};

const AppRoutes: React.FC = () => (
  <Switch>
    {getRoutes(routes).map(
      ({
        path,
        name,
        title,
        exact,
        component: Component,
        ...rest
      }: RouterProps) =>
        Component && (
          <Route key={name} path={path} exact={exact !== false} {...rest}>
            <Helmet>
              <title>{title ? `${title} | ${mainTitle}` : mainTitle}</title>
            </Helmet>
            <Layout headerShown={true}>
              <Component />
            </Layout>
          </Route>
        )
    )}
  </Switch>
);

export default AppRoutes;
