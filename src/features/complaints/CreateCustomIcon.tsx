import { renderToStaticMarkup } from "react-dom/server";
import L from "leaflet";

export const CreateCustomIcon = (icon: JSX.Element) => {
  return L.divIcon({
    html: renderToStaticMarkup(icon),
    className: "",
    iconSize: [12, 12],
    iconAnchor: [12, 12],
  });
};
