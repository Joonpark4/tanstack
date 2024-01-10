import { useTodos, useTodosIds } from "../services/queries";

export default function Todo() {
  const todosIdsQuery = useTodosIds();
  const todosQueries = useTodos(todosIdsQuery.data);

  return (
    <div>
      <ul>
        {todosQueries.map(({ data }) => (
          <li key={data?.id}>
            <div> Id : {data?.id}</div>
            <span>
              <strong>Title : </strong> {data?.title},{" "}
              <strong>Description : </strong> {data?.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* const todosIdsQuery = useTodosIds();
   const isFetching = useIsFetching();
   if (todosIdsQuery.isLoading) return <div>Loading...</div>;
   if (todosIdsQuery.isError) return <div>there is an Error!</div>;
   <p>Query function status : {todosIdsQuery.fetchStatus}</p>
   <p>Query data status : {todosIdsQuery.status}</p>
   <p>Global isFetching : {isFetching}</p>
   {todosIdsQuery.data?.map((id) => (
    <p key={id}>id : {id}</p>
   ))} */


//   const { data, isPending, isError } = useTodosIds();
//   if (isPending) return <div>Loading...</div>;
//   if (isError) return <div>there is an Error!</div>;
//   return (
//     <div>
//       {data?.map((id) => (
//         <p key={id}>{id}</p>
//       ))}
//     </div>
//   );
// }
