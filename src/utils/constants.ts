export const USER_TYPE_ENUM = {
  ADMIN: {
    label: "超级管理员",
    value: "admin",
  },
  USER: {
    label: "用户",
    value: "user",
  },
} as const;

export const USER_TYPE_ENUM_LIST = Object.values(USER_TYPE_ENUM);
