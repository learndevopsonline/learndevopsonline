import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/learndevopsonline/build/blog',
    component: ComponentCreator('/learndevopsonline/build/blog', '3e0'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/archive',
    component: ComponentCreator('/learndevopsonline/build/blog/archive', '7eb'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/first-blog-post',
    component: ComponentCreator('/learndevopsonline/build/blog/first-blog-post', '8e5'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/long-blog-post',
    component: ComponentCreator('/learndevopsonline/build/blog/long-blog-post', 'da3'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/mdx-blog-post',
    component: ComponentCreator('/learndevopsonline/build/blog/mdx-blog-post', 'cbb'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags',
    component: ComponentCreator('/learndevopsonline/build/blog/tags', '24a'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags/docusaurus',
    component: ComponentCreator('/learndevopsonline/build/blog/tags/docusaurus', 'e04'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags/facebook',
    component: ComponentCreator('/learndevopsonline/build/blog/tags/facebook', 'df1'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags/hello',
    component: ComponentCreator('/learndevopsonline/build/blog/tags/hello', 'd04'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/tags/hola',
    component: ComponentCreator('/learndevopsonline/build/blog/tags/hola', 'a5a'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/blog/welcome',
    component: ComponentCreator('/learndevopsonline/build/blog/welcome', 'f99'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/markdown-page',
    component: ComponentCreator('/learndevopsonline/build/markdown-page', '974'),
    exact: true
  },
  {
    path: '/learndevopsonline/build/docs',
    component: ComponentCreator('/learndevopsonline/build/docs', '01c'),
    routes: [
      {
        path: '/learndevopsonline/build/docs/category/expense-app-project-setup-documentation',
        component: ComponentCreator('/learndevopsonline/build/docs/category/expense-app-project-setup-documentation', 'a97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/category/expense-app-project-setup-documentation---rhel-9centos-9',
        component: ComponentCreator('/learndevopsonline/build/docs/category/expense-app-project-setup-documentation---rhel-9centos-9', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/category/how-tos',
        component: ComponentCreator('/learndevopsonline/build/docs/category/how-tos', 'cc5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/category/linux-commands',
        component: ComponentCreator('/learndevopsonline/build/docs/category/linux-commands', '802'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/category/roboshop-project---docker-setup',
        component: ComponentCreator('/learndevopsonline/build/docs/category/roboshop-project---docker-setup', '5ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/category/roboshop-project-setup-documentation',
        component: ComponentCreator('/learndevopsonline/build/docs/category/roboshop-project-setup-documentation', 'cd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/category/roboshop-project-setup-documentation---rhel-9',
        component: ComponentCreator('/learndevopsonline/build/docs/category/roboshop-project-setup-documentation---rhel-9', '87c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/category/tools-installation-steps',
        component: ComponentCreator('/learndevopsonline/build/docs/category/tools-installation-steps', 'c13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Expense-Project-V2/backend',
        component: ComponentCreator('/learndevopsonline/build/docs/Expense-Project-V2/backend', 'de7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Expense-Project-V2/frontend',
        component: ComponentCreator('/learndevopsonline/build/docs/Expense-Project-V2/frontend', '338'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Expense-Project-V2/mysql',
        component: ComponentCreator('/learndevopsonline/build/docs/Expense-Project-V2/mysql', '96f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Expense-Project-V2/project-overview',
        component: ComponentCreator('/learndevopsonline/build/docs/Expense-Project-V2/project-overview', '91f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Expense-Project/backend',
        component: ComponentCreator('/learndevopsonline/build/docs/Expense-Project/backend', '653'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Expense-Project/frontend',
        component: ComponentCreator('/learndevopsonline/build/docs/Expense-Project/frontend', '6fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Expense-Project/mysql',
        component: ComponentCreator('/learndevopsonline/build/docs/Expense-Project/mysql', 'eb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Expense-Project/project-overview',
        component: ComponentCreator('/learndevopsonline/build/docs/Expense-Project/project-overview', '809'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/aws-cloud9-service-as-editor',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/aws-cloud9-service-as-editor', '9fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/create-allow-all-security-group',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/create-allow-all-security-group', 'e39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/create-azure-compute-gallery',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/create-azure-compute-gallery', '361'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/extend-lvm-disk-in-rhel9',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/extend-lvm-disk-in-rhel9', 'f5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/how-to-delete-default-vpc',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/how-to-delete-default-vpc', 'f63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/how-to-increase-disk-size-of-ec2',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/how-to-increase-disk-size-of-ec2', '7b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/how-to-make-notes-with-notion',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/how-to-make-notes-with-notion', '40d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/how-to-view-code-in-github-of-particular-day',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/how-to-view-code-in-github-of-particular-day', 'a2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/increase-spot-quota',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/increase-spot-quota', 'e3a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/install-intellij',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/install-intellij', '5cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/open-multiple-repos-in-one-editor',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/open-multiple-repos-in-one-editor', '8ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/push-code-automatically-to-central-repos',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/push-code-automatically-to-central-repos', '614'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/setup-intellij-in-desktop',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/setup-intellij-in-desktop', '9d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/show-name-tag-in-spot-request',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/show-name-tag-in-spot-request', 'fb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/How-Tos/workstation-user-create-and-setup',
        component: ComponentCreator('/learndevopsonline/build/docs/How-Tos/workstation-user-create-and-setup', '2c9'),
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
        path: '/learndevopsonline/build/docs/linux/linux-commands',
        component: ComponentCreator('/learndevopsonline/build/docs/linux/linux-commands', '962'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-Docker/cart',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-Docker/cart', 'ecc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-Docker/catalogue',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-Docker/catalogue', '5e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-Docker/frontend',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-Docker/frontend', '2e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-Docker/payment',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-Docker/payment', '68f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-Docker/project-overview',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-Docker/project-overview', '7be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-Docker/shipping',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-Docker/shipping', 'a91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-Docker/user',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-Docker/user', '7e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-V3/cart',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-V3/cart', '4e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-V3/catalogue',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-V3/catalogue', 'ba3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-V3/dispatch',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-V3/dispatch', 'ed7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-V3/frontend',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-V3/frontend', 'a5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-V3/mongodb',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-V3/mongodb', '966'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-V3/mysql',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-V3/mysql', '5c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-V3/payment',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-V3/payment', '742'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-V3/project-overview',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-V3/project-overview', '71d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-V3/rabbitmq',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-V3/rabbitmq', 'ba2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-V3/redis',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-V3/redis', 'a49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-V3/shipping',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-V3/shipping', 'e42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/RoboShop-Project-V3/user',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project-V3/user', '359'),
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
        path: '/learndevopsonline/build/docs/RoboShop-Project/user',
        component: ComponentCreator('/learndevopsonline/build/docs/RoboShop-Project/user', 'bb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Tool-Installation-Docs/Ansible',
        component: ComponentCreator('/learndevopsonline/build/docs/Tool-Installation-Docs/Ansible', '732'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Tool-Installation-Docs/GoCD-Installation',
        component: ComponentCreator('/learndevopsonline/build/docs/Tool-Installation-Docs/GoCD-Installation', '5fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Tool-Installation-Docs/Install-Metrics-Server',
        component: ComponentCreator('/learndevopsonline/build/docs/Tool-Installation-Docs/Install-Metrics-Server', '9ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/learndevopsonline/build/docs/Tool-Installation-Docs/Nginx-Ingress-Community',
        component: ComponentCreator('/learndevopsonline/build/docs/Tool-Installation-Docs/Nginx-Ingress-Community', 'a8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/learndevopsonline/build/',
    component: ComponentCreator('/learndevopsonline/build/', '5f8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
