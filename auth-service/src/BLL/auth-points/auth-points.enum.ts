export enum AuthPoints {
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
  [AuthPoints.FIND_USERS]: 'find users',
  [AuthPoints.UPDATE_USER]: 'update user by id',
  [AuthPoints.DELETE_USER]: 'delete user by id',
  [AuthPoints.FIND_USER_ROLES]: 'find user roles',
  [AuthPoints.ACT_USER_AUTH_CHECK]:
    'check if a user can access a specific auth point',
  [AuthPoints.ACT_AUTH_POINT_REGISTER]:
    'register auth points via api',
  [AuthPoints.FIND_AUTH_POINTS]: 'find auth points',
  [AuthPoints.FIND_ROLES]: 'find roles',
  [AuthPoints.SET_USER_ROLES]: 'set user roles',
  [AuthPoints.CREATE_USER]: 'create user',
  [AuthPoints.FIND_ROLE]: 'find role by id',
  [AuthPoints.FIND_ONE_USER]: 'find user by id',
  [AuthPoints.MGR_CREATE_USER]: 'create user for management',
  [AuthPoints.MGR_FIND_USERS]: 'find all users for management',
  [AuthPoints.MGR_SET_USER_PASSWORD]: 'set user password in management',
  [AuthPoints.MGR_UPDATE_USER]: 'update user for management',
  [AuthPoints.MGR_FIND_ONE_USER]: 'find one user for management',
  [AuthPoints.MGR_FIND_ONE_ROLE]: 'find one role for management',
  [AuthPoints.MGR_FIND_ROLES]: 'find all users for management',
  [AuthPoints.MGR_SET_USER_ROLES]: 'set user roles for management',
  [AuthPoints.MGR_SET_ROLE_AUTH_POINTS]: 'set role auth points for management',
};