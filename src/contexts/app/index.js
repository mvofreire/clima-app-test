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
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    this.setState({ isFetching: true });

    const { data, timer } = await getWeathers(cities);

    this.setState({ data, timer, isFetching: false });
  }

  refresh = () => {
    setTimeout(_ => {
      this.loadData();
    }, refreshTimeout);
  };

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
