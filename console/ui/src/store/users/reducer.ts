import {Reducer} from 'redux';
import {UserState, UsersState, UserActionTypes} from './types';

const initialUsersState: UsersState = {
  data:
  {
    users: [],
    total_count: 0
  },
  errors: undefined,
  loading: false
};

export const usersReducer: Reducer<UsersState> = (state = initialUsersState, action) =>
{
  switch(action.type)
  {
    case UserActionTypes.FETCH_MANY_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.FETCH_MANY_SUCCESS:
      return {...state, loading: false, data: action.payload};
    case UserActionTypes.FETCH_MANY_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.DELETE_MANY_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.DELETE_MANY_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.DELETE_MANY_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.DELETE_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.DELETE_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.DELETE_ERROR:
      return {...state, loading: false, errors: action.payload};
    default:
      return state;
  }
}

const initialUserState: UserState = {
  data:
  {
    account:
    {
      user: {id: ''},
      wallet: ''
    },
    leaderboard_records: [],
    wallet_ledgers: []
  },
  ledgers: [],
  friends: [],
  groups: [],
  updated: false,
  errors: undefined,
  loading: false
};

export const userReducer: Reducer<UserState> = (state = initialUserState, action) =>
{
  switch(action.type)
  {
    case UserActionTypes.FETCH_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.FETCH_SUCCESS:
      return {...state, loading: false, data: action.payload};
    case UserActionTypes.FETCH_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.EXPORT_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.EXPORT_SUCCESS:
      return {...state, loading: false, data: action.payload};
    case UserActionTypes.EXPORT_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.UPDATE_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.UPDATE_SUCCESS:
      return {...state, loading: false, errors: undefined, updated: true};
    case UserActionTypes.UPDATE_ERROR:
      return {...state, loading: false, errors: action.payload, updated: false};
    case UserActionTypes.DELETE_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.DELETE_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.DELETE_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.BAN_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.BAN_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.BAN_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.UNBAN_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.UNBAN_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.UNBAN_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.FETCH_MANY_LEDGER_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.FETCH_MANY_LEDGER_SUCCESS:
      return {...state, loading: false, ledgers: action.payload};
    case UserActionTypes.FETCH_MANY_LEDGER_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.DELETE_LEDGER_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.DELETE_LEDGER_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.DELETE_LEDGER_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.FETCH_MANY_FRIEND_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.FETCH_MANY_FRIEND_SUCCESS:
      return {...state, loading: false, friends: action.payload};
    case UserActionTypes.FETCH_MANY_FRIEND_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.DELETE_FRIEND_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.DELETE_FRIEND_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.DELETE_FRIEND_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.FETCH_MANY_GROUP_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.FETCH_MANY_GROUP_SUCCESS:
      return {...state, loading: false, groups: action.payload};
    case UserActionTypes.FETCH_MANY_GROUP_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.DELETE_GROUP_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.DELETE_GROUP_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.DELETE_GROUP_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.UNLINK_STEAM_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.UNLINK_STEAM_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.UNLINK_STEAM_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.UNLINK_GOOGLE_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.UNLINK_GOOGLE_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.UNLINK_GOOGLE_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.UNLINK_GAMECENTER_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.UNLINK_GAMECENTER_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.UNLINK_GAMECENTER_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.UNLINK_FACEBOOK_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.UNLINK_FACEBOOK_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.UNLINK_FACEBOOK_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.UNLINK_EMAIL_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.UNLINK_EMAIL_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.UNLINK_EMAIL_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.UNLINK_DEVICE_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.UNLINK_DEVICE_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.UNLINK_DEVICE_ERROR:
      return {...state, loading: false, errors: action.payload};
    case UserActionTypes.UNLINK_CUSTOM_REQUEST:
      return {...state, loading: true};
    case UserActionTypes.UNLINK_CUSTOM_SUCCESS:
      return {...state, loading: false};
    case UserActionTypes.UNLINK_CUSTOM_ERROR:
      return {...state, loading: false, errors: action.payload};
    default:
      return state;
  }
}