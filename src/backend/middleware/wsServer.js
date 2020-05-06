
export const createServerMiddleware = wsServer => store => next => action => {
    let msg = {type: 'action', action:action};
    wsServer.broadcast(msg, [action.meta.sender]);
    next(action)
};