import useFetch from ".";

export default function UseFetchTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending, please wait...</h3> : null}
      {error ? <h3> {error} </h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((product) => (
            <p key={product.key}>{product.title}</p>
          ))
        : null}
    </div>
  );
}
