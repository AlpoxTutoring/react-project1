import * as React from 'react';

/**
 *
 * @param {object} initialForm
 * @returns {[object, function(value): void]}
 */
function useInputs(initialForm) {
  const [form, setForm] = React.useState(initialForm);

  const onChange = React.useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);

  return [form, onChange];
}

export default useInputs;
