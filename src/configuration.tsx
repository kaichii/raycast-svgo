import { List } from "@raycast/api";
import ListItem from "./components/LIstItem";
import { OPTIONS } from "./options";

export default function Command() {
  // const defaultOptions = Object.values(OPTIONS).reduce<Record<keyof typeof OPTIONS, boolean>>((a, c) => {
  //   a[c.title] = c.default;
  //   return a;
  // }, {});

  // const [options] = useState(defaultOptions);

  return (
    <List searchBarPlaceholder="Search Options">
      {Object.values(OPTIONS).map((c) => (
        <ListItem key={c.title} title={c.title} description={c.description} detail={c.detail} />
      ))}
    </List>
  );
}
