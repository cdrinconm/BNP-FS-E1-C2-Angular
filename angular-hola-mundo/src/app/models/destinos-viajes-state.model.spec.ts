import {
    reducerDestinosViajes,
    DestinosViajesState,
    initializeDestinosViajesState,
    InitMyDataAction,
    NuevoDestinoAction
} from './destinos-viajes-state.model';

import { DestinoViaje } from './destino-viaje.model';

describe('reducerDestinosViajes', () => {
    it('should reduce init data', () => {
        const prevState: DestinosViajesState = initializeDestinosViajesState();
        const action: InitMyDataAction = new InitMyDataAction(['destino 1', 'destino 2']);
        const newState: DestinosViajesState = reducerDestinosViajes(prevState, action);
        expect(newState.items.length).equal(2);
        expect(newState.items[0].nombre).equal('destino 1');   
    }); 

    it('should reduce new item added', () => {
        const prevState: DestinosViajesState = initializeDestinosViajesState();
        const action: NuevoDestinoAction = new NuevoDestinoAction(new DestinoViaje('barcelona', 'url'));
        const newState: DestinosViajesState = reducerDestinosViajes(prevState, action);
        expect(newState.items.length).equal(1);
        expect(newState.items[0].nombre).equal('barcelona');
    });
});