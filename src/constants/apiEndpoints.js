export const userAddPath = () => '/api/user/create';
export const userUpdatePath = () => `/api/user/update`;
export const userFindByIdPath = (id) => `/api/user/findById/${id}`;
export const userFindAllPath = () => `/api/user/findAll`;
export const userDeletePath = (id) => `/api/user/delete/${id}`;
export const userDeactivatePath = (id) => `/api/user/deactivate/${id}`;
export const userActivatePath = (id) => `/api/user/activate/${id}`;
export const userFindAllNotDeletedPath = () => `/api/user/findAllNotDeleted`;

export const messageAddPath = () => '/api/message/create';
export const messageFindAllOrderByDateCreatedPath = () =>
  '/api/message/findAllOrderByDateCreated';
