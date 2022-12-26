import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/learndevopsonline/build/blog',
    component: ComponentCreator('/learndevopsonline/build/blog', 'b0d'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/archive',
    component: ComponentCreator('/learndevopsonline/build/blog/archive', '84b'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/first-blog-post',
    component: ComponentCreator('/learndevopsonline/build/blog/first-blog-post', 'd88'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/long-blog-post',
    component: ComponentCreator('/learndevopsonline/build/blog/long-blog-post', '4d0'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/mdx-blog-post',
    component: ComponentCreator('/learndevopsonline/build/blog/mdx-blog-post', '169'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags',
    component: ComponentCreator('/learndevopsonline/build/blog/tags', 'c20'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags/docusaurus',
    component: ComponentCreator('/learndevopsonline/build/blog/tags/docusaurus', '222'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags/facebook',
    component: ComponentCreator('/learndevopsonline/build/blog/tags/facebook', '1a6'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags/hello',
    component: ComponentCreator('/learndevopsonline/build/blog/tags/hello', 'e70'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags/hola',
    component: ComponentCreator('/learndevopsonline/build/blog/tags/hola', '760'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/welcome',
    component: ComponentCreator('/learndevopsonline/build/blog/welcome', '5da'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/markdown-page',
    component: ComponentCreator('/learndevopsonline/build/markdown-page', '2b7'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/docs',
    component: ComponentCreator('/learndevopsonline/build/docs', '0ec'),
    routes: [
      {
        path: '/learndevopsonline/build/docs/category/roboshop-project-setup-documentation',
        component: ComponentCreator('/learndevopsonline/build/docs/category/roboshop-project-setup-documentation', 'cd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/category/tutorial---basics',
        component: ComponentCreator('/learndevopsonline/build/docs/category/tutorial---basics', 'f07'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/intro',
        component: ComponentCreator('/learndevopsonline/build/docs/intro', '9d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/cart',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/cart', 'b17'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/catalogue',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/catalogue', 'f7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/dispatch',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/dispatch', 'ed1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/frontend',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/frontend', '65f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/mongodb',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/mongodb', 'bb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/mysql',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/mysql', 'adb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/payment',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/payment', 'ca7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/project-overview',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/project-overview', '8bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/rabbitmq',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/rabbitmq', '913'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/redis',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/redis', '08f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/shipping',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/shipping', '65c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/translate-your-site',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/translate-your-site', 'abf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project/user',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/user', 'bb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/learndevopsonline/build/docs/tutorial-basics/congratulations', '71a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/learndevopsonline/build/docs/tutorial-basics/create-a-blog-post', 'd67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/learndevopsonline/build/docs/tutorial-basics/create-a-document', 'db4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/learndevopsonline/build/docs/tutorial-basics/create-a-page', '639'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/learndevopsonline/build/docs/tutorial-basics/deploy-your-site', 'e6f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/learndevopsonline/build/docs/tutorial-basics/markdown-features', 'a12'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/learndevopsonline/build/',
    component: ComponentCreator('/learndevopsonline/build/', 'b1c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
