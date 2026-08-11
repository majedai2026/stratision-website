import { createFileRoute } from "@tanstack/react-router";
import { Homepage } from "../components/stratision/Homepage";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <Homepage />;
}
