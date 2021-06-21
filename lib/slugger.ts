import { visit } from "unist-util-visit";
import { hasProperty as has } from "hast-util-has-property";

export default function slug() {
  return transformer;
}

let id = 0;
const genId = () => ++id;

function transformer(tree) {
  visit(tree, "element", function (node) {
    if (!has(node, "id")) {
      node.properties["id"] = genId();
    }
  });
}
