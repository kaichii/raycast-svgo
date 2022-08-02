import { Action, ActionPanel, Form, Icon } from "@raycast/api";

export default function Command() {
  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm
            onSubmit={(values) => {
              console.log(values);
            }}
          />
          <Action title="Save" icon={Icon.Tray} />
          <Action title="Reset" icon={Icon.RotateAntiClockwise} />
        </ActionPanel>
      }
    >
      <Form.Checkbox id="full" title="Full" defaultValue={false} label="Use full set of plugins" />
      <Form.Dropdown id="datauri" title="Data URI" defaultValue="base64">
        <Form.Dropdown.Item value="base64" title="base64" />
        <Form.Dropdown.Item value="enc" title="enc" />
        <Form.Dropdown.Item value="unenc" title="unenc" />
      </Form.Dropdown>
      <Form.Checkbox id="multipass" defaultValue={false} title="Multi Pass" label="Pass over SVGs multiple times" />
      <Form.TextField
        id="floatPrecision"
        title="Float Precision"
        defaultValue="undefined"
        placeholder="Precision of floating point numbers"
      />
    </Form>
  );
}
