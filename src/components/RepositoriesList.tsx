import { useState } from "react"
import { useDispatch } from "react-redux";
import { ActionCreators } from "../state";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(ActionCreators.searchRepositories(term));
  }

  return <div>
    <form action="" onSubmit={onSubmit}>
      <input type="text" value={term} onChange={e => setTerm(e.target.value)}/>
      <button>Search</button>
    </form>
  </div>
}

export default RepositoriesList;
