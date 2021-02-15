import { useCallback, useState } from 'react';

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback(e => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);
  return [form, onChange];
}

export default useInputs;
