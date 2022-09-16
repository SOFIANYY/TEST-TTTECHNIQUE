import _Symbol from "@babel/runtime-corejs3/core-js/symbol";
import _Symbol$for from "@babel/runtime-corejs3/core-js/symbol/for";
var REACT_ELEMENT_TYPE;
export default function _createRawReactElement(type, props, key, children) {
  REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof _Symbol && _Symbol$for && _Symbol$for("react.element") || 60103);
  var defaultProps = type && type.defaultProps,
      childrenLength = arguments.length - 3;
  if (props || 0 === childrenLength || (props = {
    children: void 0
  }), 1 === childrenLength) props.children = children;else if (childrenLength > 1) {
    for (var childArray = new Array(childrenLength), i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 3];
    }

    props.children = childArray;
  }
  if (props && defaultProps) for (var propName in defaultProps) {
    void 0 === props[propName] && (props[propName] = defaultProps[propName]);
  } else props || (props = defaultProps || {});
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: void 0 === key ? null : "" + key,
    ref: null,
    props: props,
    _owner: null
  };
}