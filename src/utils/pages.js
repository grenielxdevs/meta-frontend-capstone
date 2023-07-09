const pages = new Map();
pages.set("home", { name: "Home", path: "/", anchorable: true });
pages.set("menu", { name: "Menu", path: "/menu", anchorable: true });
pages.set("about", { name: "About", path: "/about", anchorable: true });
pages.set("reviews", { name: "Reviews", path: "/reviews", anchorable: true });
pages.set("reservations", {
  name: "Reservations",
  path: "/reservations",
  anchorable: true,
});
pages.set("confirmedBooking", {
  name: "Confirmed Booking",
  path: "/confirmed-booking",
  anchorable: false,
});
pages.set("orders", {
  name: "Orders",
  path: "/orders",
  anchorable: true,
});
pages.set("login", { name: "Login", path: "/login", anchorable: true });

export default pages;
