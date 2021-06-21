import Edit from "../components/edit";
import { useAppState } from "../state";

export default function Editor() {
  const { editor } = useAppState();
  return <Edit {...editor} />;
}
