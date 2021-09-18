import { faRandom, faSlidersH, faUsers, faCloud, faUser  } from '@fortawesome/free-solid-svg-icons';

export var nav = {
    selected: "",
    nav: [
    {
      name: "Transactions",
      value: "transactions",
      icon: faRandom,
    },
    {
      name: "Settings",
      value: "settings",
      icon: faSlidersH,
    },
    {
      name: "User management",
      value: "user",
      icon: faUsers,
    },
    {
      name: "ATM management",
      value: "atm",
      icon: faCloud,
    },
    {
      name: "My account",
      value: "account",
      icon: faUser,
    }],
  };