var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useContext } from 'react';
export default function useBlockContent(blockContext) {
    var BlockContent = function (_a) {
        var children = _a.children;
        var map = useContext(blockContext).map;
        return (React.createElement(React.Fragment, null, children.map(function (_a, index) {
            var type = _a.type, props = _a.props;
            var Block = map[type];
            // eslint-disable-next-line react/no-array-index-key, react/jsx-props-no-spreading
            return React.createElement(Block, __assign({}, props, { key: index }));
        })));
    };
    return BlockContent;
}
//# sourceMappingURL=useBlockContent.js.map