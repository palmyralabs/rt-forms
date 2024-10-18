import { topic as c } from "@palmyralabs/ts-utils";
import { useState as l, useEffect as i } from "react";
function f(e, u) {
  c.publish("_keyValue-" + e, u);
}
function p(e, u) {
  const [n, s] = l(u), r = (t, o) => {
    s(o);
  };
  return i(() => {
    var t = c.subscribe("_keyValue-" + e, r);
    return () => {
      c.unsubscribe(t);
    };
  }, []), [n, s];
}
function x(e, u) {
  c.publish("_execute-" + e, u);
}
function _(e, u) {
  const n = u, s = (t, o) => {
    n(o);
  }, r = (t) => {
    n(t);
  };
  return i(() => {
    var t = c.subscribe("_execute-" + e, s);
    return () => {
      c.unsubscribe(t);
    };
  }, []), r;
}
export {
  x as execute,
  f as setKeyValue,
  _ as useExecute,
  p as useKeyValue
};
