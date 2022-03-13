"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[179],{

/***/ 371:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(378);
// EXTERNAL MODULE: ../node_modules/@hot-loader/react-dom/index.js
var react_dom = __webpack_require__(794);
// EXTERNAL MODULE: ../node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(86);
;// CONCATENATED MODULE: ./context/dealers-context.js

var DealersContext = (0,react.createContext)([]);
var useDealersContext = function useDealersContext() {
  return (0,react.useContext)(DealersContext);
};
// EXTERNAL MODULE: ../node_modules/redux/es/redux.js + 2 modules
var redux = __webpack_require__(755);
// EXTERNAL MODULE: ../node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(870);
;// CONCATENATED MODULE: ./store/constants.js
var LOADING_GOODS = 'LOADING_GOODS';
var LOAD_GOODS_SUCCESS = 'LOAD_GOODS_SUCCESS';
var LOAD_GOODS_ERROR = 'LOAD_GOODS_ERROR';
var ADD_PRODUCT = 'ADD_PRODUCT';
var DELETE_PRODUCT = 'DELETE_PRODUCT';
var DELETE_PRODUCTS = 'DELETE_PRODUCTS';
var UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
var API_URL = 'https://murmuring-tor-81614.herokuapp.com/api';
;// CONCATENATED MODULE: ./store/reducers/goods.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  loading: false,
  data: [],
  error: null
};
/* harmony default export */ function goods() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOADING_GOODS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case LOAD_GOODS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: action.goods,
        loading: false
      });

    case LOAD_GOODS_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./store/middleware/local-storage.js
var localStorageMiddleware = function localStorageMiddleware(state) {
  return function (next) {
    return function (action) {
      var result = next(action);

      if (result.type.includes('PRODUCT')) {
        localStorage.setItem('cart', JSON.stringify(state.getState().cart.data));
      }

      return result;
    };
  };
};
var loadState = function loadState() {
  var state = localStorage.getItem('cart');
  return state !== null ? JSON.parse(state) : [];
};
var removeState = function removeState() {
  localStorage.removeItem('cart');
  return [];
};
;// CONCATENATED MODULE: ./utils/utils.js
var findIndexItemByName = function findIndexItemByName(arr, item) {
  return arr.findIndex(function (element) {
    return element.name === item.name;
  });
};
var deleteItemByName = function deleteItemByName(arr, item) {
  return arr.filter(function (element) {
    return element.name !== item.name;
  });
};
;// CONCATENATED MODULE: ./store/reducers/cart.js
function cart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function cart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? cart_ownKeys(Object(source), !0).forEach(function (key) { cart_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : cart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function cart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var cart_initialState = {
  data: loadState()
};
/* harmony default export */ function cart() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cart_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_PRODUCT:
      if (findIndexItemByName(state.data, action.product) >= 0) {
        state.data[findIndexItemByName(state.data, action.product)].counter++;
      } else {
        state.data.push(cart_objectSpread(cart_objectSpread({}, action.product), {}, {
          counter: 1
        }));
      }

      return cart_objectSpread(cart_objectSpread({}, state), {}, {
        data: state.data
      });

    case DELETE_PRODUCT:
      {
        var newState;

        if (state.data[findIndexItemByName(state.data, action.product)].counter <= 1) {
          newState = deleteItemByName(state.data, action.product);
        } else {
          newState = state.data.map(function (product, idx) {
            return idx === findIndexItemByName(state.data, action.product) ? Object.defineProperty(product, 'counter', {
              value: product.counter - 1
            }) : product;
          });
        }

        return cart_objectSpread(cart_objectSpread({}, state), {}, {
          data: newState
        });
      }

    case DELETE_PRODUCTS:
      {
        return cart_objectSpread(cart_objectSpread({}, state), {}, {
          data: removeState()
        });
      }

    case UPDATE_PRODUCTS:
      {
        var _newState = state.data.map(function (product, idx) {
          return idx === findIndexItemByName(state.data, action.product) ? Object.defineProperty(product, 'counter', {
            value: action.product.counter
          }) : product;
        });

        return cart_objectSpread(cart_objectSpread({}, state), {}, {
          data: _newState
        });
      }

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./store/reducers/reducers.js


/* harmony default export */ var reducers = ({
  goods: goods,
  cart: cart
});
;// CONCATENATED MODULE: ./store/store.js




var allReducers = (0,redux/* combineReducers */.UY)(reducers);
var middleware = [redux_thunk_es/* default */.Z, localStorageMiddleware];
var store = (0,redux/* createStore */.MT)(allReducers, redux/* applyMiddleware.apply */.md.apply(void 0, middleware));
/* harmony default export */ var store_store = (store);
// EXTERNAL MODULE: ../node_modules/react-hot-loader/root.js
var root = __webpack_require__(183);
// EXTERNAL MODULE: ../node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(602);
// EXTERNAL MODULE: ../node_modules/react-router/index.js
var react_router = __webpack_require__(740);
;// CONCATENATED MODULE: ./store/actions/goods.js

function fetchGoods(dealers) {
  var dealerIds = "?dealers=".concat(dealers.join());
  return function (dispatch) {
    dispatch({
      type: LOADING_GOODS
    });
    return fetch("".concat(API_URL, "/goods/").concat(dealers.length !== 0 ? dealerIds : '')).then(function (response) {
      return response.json();
    }).then(function (goods) {
      dispatch({
        type: LOAD_GOODS_SUCCESS,
        goods: goods
      });
    }).catch(function (error) {
      dispatch({
        type: LOAD_GOODS_ERROR,
        error: error
      });
    });
  };
}
;// CONCATENATED MODULE: ./store/actions/cart.js

function addProduct(product) {
  return function (dispatch) {
    dispatch({
      type: ADD_PRODUCT,
      product: product
    });
  };
}
function deleteProduct(product) {
  return function (dispatch) {
    dispatch({
      type: DELETE_PRODUCT,
      product: product
    });
  };
}
function deleteProducts() {
  return function (dispatch) {
    dispatch({
      type: DELETE_PRODUCTS
    });
  };
}
function updateProduct(product) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_PRODUCTS,
      product: product
    });
  };
}
// EXTERNAL MODULE: ./assets/cart.svg
var assets_cart = __webpack_require__(774);
;// CONCATENATED MODULE: ./routes.jsx
var ROUTE_HOME = '/';
var ROUTE_CART = '/cart';
;// CONCATENATED MODULE: ./components/Cart/Cart.module.pcss
// extracted by mini-css-extract-plugin
/* harmony default export */ var Cart_module = ({"button":"_jEipNoueo2TStpmtR7j","count":"SRX4UmtNYlYUtZQFLvB2","image":"eILRJoAHVgQ0EPDFbEbF"});
;// CONCATENATED MODULE: ./components/Cart/Cart.jsx






function Cart(props) {
  var numberOfProductsInCart = props.numberOfProductsInCart;
  return /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    className: Cart_module.button,
    to: ROUTE_CART
  }, /*#__PURE__*/react.createElement("span", {
    className: Cart_module.count
  }, numberOfProductsInCart), /*#__PURE__*/react.createElement("img", {
    className: Cart_module.image,
    src: assets_cart,
    alt: ""
  }));
}

/* harmony default export */ var Cart_Cart = (Cart);
;// CONCATENATED MODULE: ./components/Preloader/Preloader.module.pcss
// extracted by mini-css-extract-plugin
/* harmony default export */ var Preloader_module = ({"preloaderWrapper":"eandkXQ2eXtfBk8Ovaru","preloader":"aZwxSXgRTfw4Xz4HpMVx","spin":"sV3XsZ2iLT65xyEWmrhs"});
;// CONCATENATED MODULE: ./components/Preloader/Preloader.jsx



function Preloader() {
  return /*#__PURE__*/react.createElement("div", {
    className: Preloader_module.preloaderWrapper
  }, /*#__PURE__*/react.createElement("span", {
    className: Preloader_module.preloader
  }), "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435...");
}

/* harmony default export */ var Preloader_Preloader = (Preloader);
;// CONCATENATED MODULE: ./pages/Goods/Goods.module.pcss
// extracted by mini-css-extract-plugin
/* harmony default export */ var Goods_module = ({"container":"MeiEewCjN6HCQ8kPMUgq","list":"ItRGx8iOMajupszLU0TG","item":"EGtBkIizxxiKqbphqeyg","button":"ZZ3kKxfmTf1yaxAacOiR","image":"ZWlYcH9nhw8wf5dMT3Yr"});
;// CONCATENATED MODULE: ./pages/Goods/Goods.jsx









function Goods() {
  var _useDealersContext = useDealersContext(),
      dealers = _useDealersContext.dealers;

  var products = (0,es/* useSelector */.v9)(function (state) {
    return state.goods.data;
  });
  var isLoading = (0,es/* useSelector */.v9)(function (state) {
    return state.goods.loading;
  });
  var numberOfProductsInCart = (0,es/* useSelector */.v9)(function (_ref) {
    var cart = _ref.cart;
    return cart.data.reduce(function (acc, item) {
      return acc + Number(item.counter);
    }, 0);
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  (0,react.useEffect)(function () {
    dispatch(fetchGoods(dealers));
  }, []);

  var handleClickButtonAdd = function handleClickButtonAdd(product) {
    dispatch(addProduct(product));
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Cart_Cart, {
    numberOfProductsInCart: numberOfProductsInCart
  }), /*#__PURE__*/react.createElement("h1", null, "\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u043E\u0432\u0430\u0440\u043E\u0432"), isLoading && products.length === 0 && /*#__PURE__*/react.createElement(Preloader_Preloader, null), products.length !== 0 && /*#__PURE__*/react.createElement("ul", {
    className: Goods_module.list
  }, products.map(function (product) {
    return /*#__PURE__*/react.createElement("li", {
      key: product.name,
      className: Goods_module.item
    }, /*#__PURE__*/react.createElement("h2", {
      className: Goods_module.name
    }, product.name), /*#__PURE__*/react.createElement("span", null, "".concat(product.price, " $")), /*#__PURE__*/react.createElement("img", {
      className: Goods_module.image,
      src: "https://murmuring-tor-81614.herokuapp.com/".concat(product.image),
      alt: ""
    }), /*#__PURE__*/react.createElement("button", {
      className: Goods_module.button,
      type: "button",
      onClick: function onClick() {
        return handleClickButtonAdd(product);
      }
    }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"));
  })));
}

/* harmony default export */ var Goods_Goods = (Goods);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(944);
;// CONCATENATED MODULE: ./pages/Cart/Cart.module.pcss
// extracted by mini-css-extract-plugin
/* harmony default export */ var Cart_Cart_module = ({"back":"oopDVzk87BNlHLgHAuhx","notification":"DD6s7iBs9vuB8SsJ96D5","list":"ewhJbk872JNVG2AcdMg2","item":"slPRJDgFShIZo2gwxl3R","image":"yAU_o60eEUSV2JJa2nxI","wrapper":"LcT9YVVW7LNrh3qsBA0I","name":"b6bQ_bWUI_7mNocBpXsH","price":"IWuJ2yj4llw4KAJA79Ox","delete":"hOUTKc8bzZLCYK6Bg8_U","deleteCustom":"abWLM3azZsIX8oDNkzCc","total":"rOHhyuNjMskKsPcjbR8X","sum":"lvWxgRk3UmhwtHJukshY","footer":"KQ1qJzwXamPXqtQU5Zyl"});
;// CONCATENATED MODULE: ./pages/Cart/Cart.jsx
function Cart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Cart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Cart_ownKeys(Object(source), !0).forEach(function (key) { Cart_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Cart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Cart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function Cart_Cart_Cart() {
  var productsInCart = (0,es/* useSelector */.v9)(function (state) {
    return state.cart.data;
  });
  var totalSum = (0,es/* useSelector */.v9)(function (state) {
    return state.cart.data.reduce(function (acc, item) {
      return acc + item.counter * item.price;
    }, 0);
  });
  var dispatch = (0,es/* useDispatch */.I0)();

  var handleClickButtonDelete = function handleClickButtonDelete(product) {
    dispatch(deleteProduct(product));
  };

  var handleClickButtonDeleteAll = function handleClickButtonDeleteAll() {
    dispatch(deleteProducts());
  };

  var handleChangeCount = function handleChangeCount(event, productInCart) {
    var targetValue = event.target.value;
    var value = targetValue.match(/\D/) || Number(targetValue) === 0 ? 1 : targetValue > 50 ? 50 : targetValue;
    dispatch(updateProduct(Cart_objectSpread(Cart_objectSpread({}, productInCart), {}, {
      counter: value
    })));
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h1", null, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430"), /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    className: Cart_Cart_module.back,
    to: ROUTE_HOME
  }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0441\u043F\u0438\u0441\u043A\u0443 \u0442\u043E\u0432\u0430\u0440\u043E\u0432"), productsInCart.length === 0 && /*#__PURE__*/react.createElement("p", {
    className: Cart_Cart_module.notification
  }, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 \u043D\u0435\u0442 \u0442\u043E\u0432\u0430\u0440\u043E\u0432"), productsInCart.length !== 0 && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("ul", {
    className: Cart_Cart_module.list
  }, productsInCart.map(function (productInCart, idx) {
    return /*#__PURE__*/react.createElement("li", {
      className: Cart_Cart_module.item,
      key: idx
    }, /*#__PURE__*/react.createElement("img", {
      className: Cart_Cart_module.image,
      src: "https://murmuring-tor-81614.herokuapp.com/".concat(productInCart.image),
      alt: ""
    }), /*#__PURE__*/react.createElement("div", {
      className: Cart_Cart_module.wrapper
    }, /*#__PURE__*/react.createElement("h2", null, productInCart.name), /*#__PURE__*/react.createElement("span", {
      className: Cart_Cart_module.price
    }, "".concat(productInCart.price, " $")), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
      className: Cart_Cart_module.amount,
      value: productInCart.counter,
      onChange: function onChange(event) {
        return handleChangeCount(event, productInCart);
      },
      type: "number",
      min: "1",
      max: "50"
    }))), /*#__PURE__*/react.createElement("button", {
      className: (0,clsx_m/* default */.Z)(Cart_Cart_module["delete"], Cart_Cart_module.deleteCustom),
      type: "button",
      onClick: function onClick() {
        return handleClickButtonDelete(productInCart);
      }
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"));
  })), /*#__PURE__*/react.createElement("div", {
    className: Cart_Cart_module.footer
  }, /*#__PURE__*/react.createElement("p", {
    className: Cart_Cart_module.total
  }, "\u0418\u0442\u043E\u0433\u043E:", /*#__PURE__*/react.createElement("span", {
    className: Cart_Cart_module.sum
  }, " ".concat(totalSum.toFixed(2), " $"))), /*#__PURE__*/react.createElement("button", {
    className: Cart_Cart_module["delete"],
    type: "button",
    onClick: function onClick() {
      return handleClickButtonDeleteAll();
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0442\u043E\u0432\u0430\u0440\u044B"))));
}

/* harmony default export */ var pages_Cart_Cart = (Cart_Cart_Cart);
;// CONCATENATED MODULE: ./components/App/App.jsx








function App() {
  var _useDealersContext = useDealersContext(),
      dealers = _useDealersContext.dealers;

  return /*#__PURE__*/react.createElement(react_router_dom/* HashRouter */.UT, null, /*#__PURE__*/react.createElement("main", {
    className: "main"
  }, /*#__PURE__*/react.createElement(react_router/* Routes */.Z5, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: ROUTE_HOME,
    element: /*#__PURE__*/react.createElement(Goods_Goods, {
      dealers: dealers
    })
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: ROUTE_CART,
    element: /*#__PURE__*/react.createElement(pages_Cart_Cart, null)
  }))));
}

/* harmony default export */ var App_App = ((0,root/* hot */.w)(App));
;// CONCATENATED MODULE: ./index.jsx








function startApp(dealers) {
  (0,react_dom.render)( /*#__PURE__*/react.createElement(DealersContext.Provider, {
    value: dealers
  }, /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(es/* Provider */.zt, {
    store: store_store
  }, /*#__PURE__*/react.createElement(App_App, null)))), document.getElementById("root"));
}

window.app = {
  startApp: startApp
};

/***/ }),

/***/ 774:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/b0914bd85acfbdb7b3c4.svg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [460], function() { return __webpack_exec__(371); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);