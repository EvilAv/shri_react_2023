const selectTickets = (state) => state.tickets;

export const selectMovieCount = (state, id) => selectTickets(state).cart[id] || 0;

export const selectTotal = (state) => selectTickets(state).total;

export const selectCart = (state) => selectTickets(state).cart || {};
