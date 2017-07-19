import Storage from 'helper-storage';
let storage = new Storage();

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
        storage.app().get('cart', (e, v) => {
            commit('SET_PRODUCTS', v ? v : []);
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
        storage.app().add('cart', state.products);
    },
    REMOVE_FROM_CART(state, item) {
        state.products.splice(
            state.products.indexOf(item), 1
        );
        storage.app().remove('cart', (e, k) => {
            storage.app().add('cart', state.products);
        });
    }
};


