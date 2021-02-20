import { Route, Switch } from 'react-router-dom';
import FreeBoard from '../pages/freeboard/FreeBoard';
import BoardDtl from '../pages/boardDtl/BoardDtl';

const FreeBoardRouter = () => {
  return (
    <Switch>
      <Route path="/freeboard/:id" component={BoardDtl} />
      <Route path="/freeboard" component={FreeBoard} />
    </Switch>
  );
};

export default FreeBoardRouter;
