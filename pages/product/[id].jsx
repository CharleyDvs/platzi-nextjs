import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter();
  const [avocado, setAvocado] = useState({});

  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((response) => response.json())
      .then((data) => setAvocado(data))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <section>
      <h1>Página producto: {avocado.name}</h1>
    </section>
  );
};

export default ProductPage;
