import { Action, ActionPanel, Color, Icon, List } from "@raycast/api";
import { OPTIONS } from "../options";

interface ListItemProps {
  title: keyof typeof OPTIONS;
  detail: string;
  description: string;
}

export default function ListItem({ title, description }: ListItemProps) {
  return (
    <List.Item
      title={title}
      subtitle={description}
      accessories={[{ icon: OPTIONS[title].default ? Icon.Checkmark : Icon.Circle }]}
      actions={
        <ActionPanel>
          <Action title="Enable" icon={{ source: Icon.CheckCircle, tintColor: Color.Green }} />
          <Action title="See Detail" icon={{ source: Icon.Globe }} />
        </ActionPanel>
      }
    />
  );
}
