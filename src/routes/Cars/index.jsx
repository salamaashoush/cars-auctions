import Loadable from "react-loadable";
import { injectReducer } from "Store/makeRootReducer";
import PlaceHolder from "./components/PlaceHolder";

export default store =>
  Loadable({
    loader: () =>
      injectReducer(store, {
        key: "cars",
        getReducer: () =>
          import(/* webpackChunkName: "carsReducer" */ "./modules/reducers")
      }).then(() =>
        import(/* webpackChunkName: "cars" */ "./containers/CarsContainer.jsx")
      ),
    loading: PlaceHolder
  });
