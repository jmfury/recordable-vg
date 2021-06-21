import Editor from "../blocks/editor";
import StateViewer from "../blocks/state-view";
import Svg from "../blocks/svg-render";

export default function MainLayout() {
  return (
    <>
      <Editor />
      <StateViewer />
      <Svg />
    </>
  );
}
