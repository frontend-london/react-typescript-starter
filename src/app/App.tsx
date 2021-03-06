import * as React from 'react';
const Warning = React.lazy(() => import('./Warning'));

export interface AppState {
    count: number;
}
export interface AppProps {
}

export class App extends React.Component<AppProps, AppState> {
    state = {
        count: 0
    }

    private onAddButtonClick = () => this.setState((s) => ({ count: s.count + 1 }));
    private onDecrementButtonClick = () => this.setState((s) => ({ count: s.count - 1 }));

    public render() {
        return (
            <div>
                <h2 className="counter">Counter: {this.state.count}</h2>
                <button onClick={this.onAddButtonClick}>+</button>
                <button onClick={this.onDecrementButtonClick}>-</button>
                {this.state.count > 10 ?
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Warning />
                    </React.Suspense>
                    : null}
            </div>
        )
    }
}
