import { A as n } from "../../../chunks/NoopConverter.js";
import "dayjs";
import { useState as l, useEffect as o } from "react";
class a {
  subscribe(e, s) {
    const t = n.subscribe(e, s);
    if (t)
      return t;
    throw new Error("Not able to subscribe to topic " + e);
  }
  publish(e, s) {
    return n.publish(e, s);
  }
  unsubscribe(e) {
    n.unsubscribe(e);
  }
  unsubsribeTopic(e) {
    n.unsubscribe(e);
  }
  reset() {
    n.clearAllSubscriptions();
  }
}
const c = new a();
function x(u, e) {
  c.publish("_keyValue-" + u, e);
}
function _(u, e) {
  const [s, t] = l(e), i = (r, b) => {
    t(b);
  };
  return o(() => {
    var r = c.subscribe("_keyValue-" + u, i);
    return () => {
      c.unsubscribe(r);
    };
  }, []), [s, t];
}
function m(u, e) {
  c.publish("_execute-" + u, e);
}
function V(u, e) {
  const s = e, t = (r, b) => {
    s(b);
  }, i = (r) => {
    s(r);
  };
  return o(() => {
    var r = c.subscribe("_execute-" + u, t);
    return () => {
      c.unsubscribe(r);
    };
  }, []), i;
}
export {
  m as execute,
  x as setKeyValue,
  V as useExecute,
  _ as useKeyValue
};
