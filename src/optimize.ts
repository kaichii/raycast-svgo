import { Clipboard } from "@raycast/api";
import svgo from "svgo";

export default async function Command() {
  const svgStr = await Clipboard.readText();

  if (svgStr) {
    const svg = svgo.optimize(svgStr);
  }
}
