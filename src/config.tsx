import { Action, ActionPanel, Color, Icon, List } from "@raycast/api";

export default function Command() {
  return (
    <List>
      <List.Item
        title="cleanupAttrs"
        subtitle="cleanup attributes from newlines, trailing, and repeating spaces"
        accessories={[{ icon: Icon.Checkmark }]}
        actions={
          <ActionPanel>
            <Action title="Enable" icon={{ source: Icon.CheckCircle, tintColor: Color.Green }} />
            <Action title="See Detail" icon={{ source: Icon.Globe }} />
          </ActionPanel>
        }
      />
      <List.Item title="Item 2" subtitle="Optional subtitle" accessories={[{ icon: Icon.CheckCircle }]} />
    </List>
  );
}
