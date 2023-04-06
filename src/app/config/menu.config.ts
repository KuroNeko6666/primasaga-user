export const MENU = [
  {
    name: "Home",
    path: "/home",
    icon: "/assets/images/icon1.png",
    active: false,
    children: []
  },
  {
    name: "Company",
    path: "/company",
    icon: "/assets/images/icon2.png",
    active: false,
    children: [
      {
        name: "Company",
        path: "/company/profile",
        active: false,
      },
      {
        name: "Company",
        path: "/company/search",
        active: false,
      },
    ]
  },
  {
    name: "Projects",
    path: "/project",
    icon: "/assets/images/icon3.png",
    active: false,
    children: []
  },
  {
    name: "Profiles",
    path: "/profile",
    icon: "/assets/images/icon4.png",
    active: false,
    children: [
      {
        name: "User Profile",
        path: "/profile/user",
        active: false,
      },
      {
        name: "My Profile",
        path: "/profile/me",
        active: false,
      },
      {
        name: "Profiles",
        path: "/profile/search",
        active: false,
      },
    ]
  },
  {
    name: "Jobs",
    path: "/jobs",
    icon: "/assets/images/icon5.png",
    active: false,
    children: []
  },
]
