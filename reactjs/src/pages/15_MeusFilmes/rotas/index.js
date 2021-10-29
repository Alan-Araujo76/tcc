import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SemFilme from '../sem-filmes'
import ComFilmeA from '../AssistirMaisTarde'
import ComFilmeJ from '../JaAssistidos'
import ComFilmeP from '../PorGosto'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/meusfilmes/semf" exact={true} component={SemFilme} />
                <Route path="/meusfilmes" exact={true} component={ComFilmeA} />     
                <Route path="/meusfilmes/comfJ" exact={true} component={ComFilmeJ} />     
                <Route path="/meusfilmes/comfP" exact={true} component={ComFilmeP} />     
                <Route path="/meusfilmes" exact={true} component={} />            
            </Switch>
        </BrowserRouter>
    )
}