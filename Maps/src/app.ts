import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";

const map = new Map("map");

map.addNewMarker(new User());
map.addNewMarker(new Company());
