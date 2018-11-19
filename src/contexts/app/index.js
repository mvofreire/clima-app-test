import React from "react";
import { cities, refreshTimeout } from "config";
import { getWeathers } from "services/weather";

export const AppContext = React.createContext({});

class AppContextProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      isFetching: false,
      timer: null
    };

    this.loadData = this.loadData.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData(forceReload = false) {
    this.setState({ isFetching: true });

    const { data, timer } = await getWeathers(cities, forceReload);

    this.setState({ data, timer, isFetching: false });
  }

  refresh() {
    setTimeout(_ => {
      this.loadData(true);
    }, refreshTimeout);
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          refresh: this.refresh
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppContextProvider };
