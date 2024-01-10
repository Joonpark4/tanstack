import { useTodosIds } from "../services/queries";

export default function Todo() {
  const todosIdsQuery = useTodosIds();

  // if (todosIdsQuery.isLoading) return <div>Loading...</div>;

  // if (todosIdsQuery.isError) return <div>there is an Error!</div>;

  return (
    <div>
      <p>Query function status : {todosIdsQuery.fetchStatus}</p>
      <p>Query data status : {todosIdsQuery.status}</p>
      
      {todosIdsQuery.data?.map((id) => (
        <p key={id}>{id}</p>
      ))}
    </div>
  );
}

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
