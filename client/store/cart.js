import localForage from "localforage";

export const state = {
    flag: false,
    products: []
};

export const getters = {
    getFlag: state => {
        return state.flag;
    },
    getProducts: state => {
        return state.products;
    }
};

export const actions = {
    onGetProducts({ commit }) {
        localForage.getItem('cart', (err, value) => {
            commit('SET_PRODUCTS', value ? value : []);
        });
    },
    onAddToCart({ commit }, item) {
        commit('ADD_TO_CART', item);
    },
   onRemoveFromCart({ commit, state }, item) {
        state.products.find(element => element.id === item.id)
            ? commit('REMOVE_FROM_CART', item)
            : console.log('item not found in cart');
    }
};

export const mutations = {
	UPDATE_FLAG(state, param) {
		state.flag = param;
	},
    SET_PRODUCTS(state, param) {
        state.products = param;
    },
    ADD_TO_CART(state, param) {
        state.products.push(param);
        state.flag = true;
        localForage.setItem('cart', state.products);
    },
    REMOVE_FROM_CART(state, item) {
        state.products.splice(
            state.products.indexOf(item), 1
        );
        localForage.removeItem('cart', () => {
            localForage.setItem('cart', state.products);
        });
    }
};


