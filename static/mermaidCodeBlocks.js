import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

const targets = document.querySelectorAll('pre[data-lang="mermaid"]');
targets.forEach((code) => {
  if (code.nodeType == Node.ELEMENT_NODE) {
    code.replaceChildren(new Text(code.textContent));
  }
});

mermaid.initialize({ startOnLoad: false, theme: "dark" });
await mermaid.run({
  securityLevel: "loose",
  nodes: targets,
});
