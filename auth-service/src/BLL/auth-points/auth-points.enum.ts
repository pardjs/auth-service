export enum UsersServiceAuthPoints {
  FIND_USERS = 'AUTH_SERVICE-FIND_USERS',
  UPDATE_USER = 'AUTH_SERVICE-UPDATE_USER',
  DELETE_USER = 'AUTH_SERVICE-DELETE_USER',
  FIND_USER_ROLES = 'AUTH_SERVICE-FIND_USER-ROLES',
  ACT_USER_AUTH_CHECK = 'AUTH_SERVICE-ACT_USER-AUTH-CHECK',
  ACT_AUTH_POINT_REGISTER = 'AUTH_SERVICE-ACT_AUTH_POINT_REGISTER',
  FIND_AUTH_POINTS = 'AUTH_SERVICE-FIND_AUTH_POINTS',
  FIND_ROLES = 'AUTH_SERVICE-FIND_ROLES',
  SET_USER_ROLES = 'AUTH_SERVICE-SET_USER_ROLES',
  CREATE_USER = 'AUTH_SERVICE-CREATE_USER',
  FIND_ROLE = 'AUTH_SERVICE-FIND_ROLE',
  FIND_ONE_USER = 'AUTH_SERVICE-FIND_ONE_USER',
  MGR_SET_USER_PASSWORD = 'AUTH_SERVICE-MGR_SET_USER_PASSWORD',
  MGR_FIND_USERS = 'AUTH_SERVICE-MGR_FIND_USERS',
  MGR_CREATE_USER = 'AUTH_SERVICE-MGR_CREATE_USER',
  MGR_UPDATE_USER = 'AUTH_SERVICE-MGR_UPDATE_USER',
  MGR_FIND_ONE_USER = 'AUTH_SERVICE-MGR_FIND_ONE_USER',
  MGR_FIND_ROLES = 'AUTH_SERVICE-MGR_FIND_ROLES',
  MGR_FIND_ONE_ROLE = 'AUTH_SERVICE-MGR_FIND_ONE_ROLE',
  MGR_SET_USER_ROLES = 'AUTH_SERVICE-MGR_SET_USER_ROLES',
  MGR_SET_ROLE_AUTH_POINTS = 'AUTH_SERVICE-MGR_SET_ROLE_AUTH_POINTS',
}

export const UsersServiceAuthPointNames = {
  [UsersServiceAuthPoints.FIND_USERS]: 'find users',
  [UsersServiceAuthPoints.UPDATE_USER]: 'update user by id',
  [UsersServiceAuthPoints.DELETE_USER]: 'delete user by id',
  [UsersServiceAuthPoints.FIND_USER_ROLES]: 'find user roles',
  [UsersServiceAuthPoints.ACT_USER_AUTH_CHECK]:
    'check if a user can access a specific auth point',
  [UsersServiceAuthPoints.ACT_AUTH_POINT_REGISTER]:
    'register auth points via api',
  [UsersServiceAuthPoints.FIND_AUTH_POINTS]: 'find auth points',
  [UsersServiceAuthPoints.FIND_ROLES]: 'find roles',
  [UsersServiceAuthPoints.SET_USER_ROLES]: 'set user roles',
  [UsersServiceAuthPoints.CREATE_USER]: 'create user',
  [UsersServiceAuthPoints.FIND_ROLE]: 'find role by id',
  [UsersServiceAuthPoints.FIND_ONE_USER]: 'find user by id',
  [UsersServiceAuthPoints.MGR_CREATE_USER]: 'create user for management',
  [UsersServiceAuthPoints.MGR_FIND_USERS]: 'find all users for management',
  [UsersServiceAuthPoints.MGR_SET_USER_PASSWORD]: 'set user password in management',
  [UsersServiceAuthPoints.MGR_UPDATE_USER]: 'update user for management',
  [UsersServiceAuthPoints.MGR_FIND_ONE_USER]: 'find one user for management',
  [UsersServiceAuthPoints.MGR_FIND_ONE_ROLE]: 'find one role for management',
  [UsersServiceAuthPoints.MGR_FIND_ROLES]: 'find all users for management',
  [UsersServiceAuthPoints.MGR_SET_USER_ROLES]: 'set user roles for management',
  [UsersServiceAuthPoints.MGR_SET_ROLE_AUTH_POINTS]: 'set role auth points for management',
};
