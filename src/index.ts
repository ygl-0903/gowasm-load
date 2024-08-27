
const go = new window.Go()
const initInstantiate = (obj: { instance: any }) => {
  go.run(obj.instance).then();
}

export const initWasm = (url: string) => {
  if ("instantiateStreaming" in WebAssembly) {
    WebAssembly.instantiateStreaming(
      fetch(url), go.importObject
    ).then(initInstantiate)
  } else {
    fetch(url)
      .then(resp => resp.arrayBuffer())
      .then(buffer => WebAssembly.instantiate(buffer, go.importObject))
      .then(initInstantiate)
  }
}
