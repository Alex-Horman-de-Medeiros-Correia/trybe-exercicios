import React from "react";
import { Route, Switch } from "react-router-dom";
import Agenda from '../src/Pages/Agenda';
import AoVivo from '../src/Pages/AoVivo';
import Talks from '../src/Pages/Talks';
import Home from '../src/Pages/Home';
import Error from '../src/Pages/Error';
import Uau from "./Pages/Uau";

class Content extends React.Component {
    constructor() {
        super()

        this.state = {
            agenda: [
                {
                id: '123',
                name: 'Hoje teremos aula ao vivo com exercicios...',
                },

                {
                id: '321',
                name: 'Hoje Não teremos aula ao vivo com exercicios...',
                }
            ]
        }
    }



    render() {

        const { agenda } = this.state;

        return (
            <div>
                <Switch>
                    <Route path="/agenda/:agendaID" component={Uau} />
                    <Route path="/agenda/" render={ (props) => <Agenda {...props} allAgenda={ agenda } /> } />
                    <Route path="/aovivo" > <AoVivo /> </Route>
                    <Route path="/talks" > <Talks /> </Route>
                    <Route path="/" > <Home /> </Route>
                    <Route path="*" > <Error /> </Route>
                </Switch>
            </div>
        )
    }
}

export default Content;