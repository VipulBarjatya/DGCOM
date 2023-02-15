import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
} from "../../constants/productConstants";
import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
} from "../../constants/productConstants";

interface IProduct {
  _id?: string;
  name: string;
  image: string;
  numReviews: number;
  description: string;
  price: number;
  countInStock: number;
}

interface IProductListState {
  loading: boolean;
  products: IProduct[];
  error?: string;
}
interface IProductDetailsState {
  loading: boolean;
  product: IProduct;
  error?: string;
}

const listInitialState: IProductListState = {
  loading: false,
  products: [],
};

const detailsInitialState: IProductDetailsState = {
  loading: false,
  product: {
    name: "",
    image: "",
    numReviews: 0,
    description: "",
    price: 0,
    countInStock: 0,
  },
};

export const productListReducer = (
  state = listInitialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productDetailsReducer = (
  state = detailsInitialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
