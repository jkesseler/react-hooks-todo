/**
 * Unwraps memoized function for testing with enzyme
 * @param  {[type]} shallow enzyme shallow function
 * @return {[type]} unwrapped enzyme shallow function
 */
export default shallow => (node, options) => {
  if (typeof node.type === 'object' && node.type.$$typeof === Symbol.for('react.memo')) {
    // eslint-disable-next-line no-param-reassign
    node = Object.create(node, {
      type: {
        configurable: true,
        enumerable: true,
        value: node.type.type,
      },
    });
  }
  return shallow(node, options);
};
